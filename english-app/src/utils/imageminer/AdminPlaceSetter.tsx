import React, { useState, useRef, useEffect, useMemo } from "react";
import apiClient, { API_BASE_URL } from "@/api";

interface WordObj {
    word_id: number;
    content: string;      
    meaning: string;
    pos_top: number;
    pos_left: number;
    width: number;
    height: number;
    isSet: boolean;    
}

const AdminPlaceSetter = () => {
    const [placeId, setPlaceId] = useState(1);
    const [placeName, setPlaceName] = useState("");
    const [imageUrl, setImageUrl] = useState(""); 
    const [words, setWords] = useState<WordObj[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [imgRatio, setImgRatio] = useState<number>(16 / 9);

    const [selectedWordId, setSelectedWordId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const bgRef = useRef<HTMLDivElement>(null);

    const getImageUrl = (path: string) => {
        if (!path) return "";
        return path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
    };

    const fetchPlaceData = async () => {
        if (!placeId) return;
        setIsLoading(true);
        try {
            const res = await apiClient.get<any>(`/api/places/${placeId}/detail`);
            const data = res.data;
            setPlaceName(data.name);
            setImageUrl(getImageUrl(data.bgImage));
            const mappedWords: WordObj[] = data.objects.map((obj: any) => ({
                word_id: obj.id,
                content: obj.word,
                meaning: obj.meaning,
                pos_top: obj.position?.top || 0,
                pos_left: obj.position?.left || 0,
                width: obj.position?.width || 0,
                height: obj.position?.height || 0,
                isSet: (obj.position?.width > 0)
            }));
            setWords(mappedWords);
            setSelectedWordId(null);
        } catch (error) {
            alert("데이터 로드 실패");
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        setImgRatio(naturalWidth / naturalHeight);
    };

    const sortedWordsForRender = useMemo(() => {
        return [...words].sort((a, b) => (b.width * b.height) - (a.width * a.height));
    }, [words]);

    const getSmallestOverlappingId = (clientX: number, clientY: number) => {
        if (!bgRef.current) return null;
        const rect = bgRef.current.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        const overlaps = words.filter(w => w.isSet && x >= w.pos_left && x <= w.pos_left + w.width && y >= w.pos_top && y <= w.pos_top + w.height);
        if (overlaps.length === 0) return null;
        return overlaps.reduce((min, curr) => (min.width * min.height) < (curr.width * curr.height) ? min : curr).word_id;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (selectedWordId === null) {
            const targetId = getSmallestOverlappingId(e.clientX, e.clientY);
            if (targetId) setSelectedWordId(targetId);
            return;
        }
        if (!bgRef.current) return;
        const rect = bgRef.current.getBoundingClientRect();
        setStartPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsDrawing(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDrawing) {
            setHoveredId(getSmallestOverlappingId(e.clientX, e.clientY));
            return;
        }
        if (!bgRef.current || selectedWordId === null) return;
        const rect = bgRef.current.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        const leftPx = Math.min(startPos.x, currentX);
        const topPx = Math.min(startPos.y, currentY);
        const widthPx = Math.abs(currentX - startPos.x);
        const heightPx = Math.abs(currentY - startPos.y);

        setWords(prev => prev.map(w => w.word_id === selectedWordId ? {
            ...w, 
            pos_left: Number(((leftPx / rect.width) * 100).toFixed(2)),
            pos_top: Number(((topPx / rect.height) * 100).toFixed(2)),
            width: Number(((widthPx / rect.width) * 100).toFixed(2)),
            height: Number(((heightPx / rect.height) * 100).toFixed(2)),
            isSet: true
        } : w));
    };

    const handleMouseUp = () => setIsDrawing(false);

    const generateSQL = () => {
        const targetWords = words.filter(w => w.isSet);
        if (targetWords.length === 0) return "-- No data";
        return `-- Place: ${placeName} (ID: ${placeId})\n` + 
               targetWords.map(w => `UPDATE words SET pos_top=${w.pos_top}, pos_left=${w.pos_left}, width=${w.width}, height=${w.height} WHERE word_id=${w.word_id};`).join('\n');
    };

    return (
        <div className="flex h-screen p-5 bg-gray-100 gap-5 font-sans overflow-hidden">
            <div className="w-1/4 bg-white p-5 rounded-xl shadow-md flex flex-col h-full">
                <h2 className="text-xl font-extrabold mb-4 text-indigo-600">🛠 Area Editor</h2>
                <div className="flex flex-col gap-3 mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <div className="flex items-center gap-2">
                        <label className="text-xs font-bold w-16">Place ID</label>
                        <input type="number" className="border p-1.5 rounded w-20 font-bold" value={placeId} onChange={(e) => setPlaceId(Number(e.target.value))} />
                        <button onClick={fetchPlaceData} className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-indigo-700 font-bold ml-auto">{isLoading ? "..." : "Load"}</button>
                    </div>
                    <div className="text-sm font-medium text-gray-700">장소: <span className="text-indigo-600 font-bold">{placeName || "None"}</span></div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-2">
                        {words.map((w) => (
                            <li key={w.word_id} onClick={() => setSelectedWordId(w.word_id)} className={`p-3 rounded-lg border cursor-pointer text-sm flex justify-between items-center transition-all ${selectedWordId === w.word_id ? "bg-indigo-600 text-white border-indigo-600 shadow-md" : hoveredId === w.word_id ? "bg-yellow-50 border-yellow-400" : w.isSet ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-white text-gray-500 border-gray-200"}`}>
                                <div className="flex flex-col"><span className="font-bold">{w.content}</span><span className="text-[10px] opacity-70">{w.meaning}</span></div>
                                {w.isSet && <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">SET</span>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 border-t pt-4">
                    <textarea className="w-full h-32 text-[10px] font-mono border p-3 bg-gray-900 text-emerald-400 rounded-lg resize-none shadow-inner" value={generateSQL()} readOnly />
                    <button onClick={() => { navigator.clipboard.writeText(generateSQL()); alert("SQL 복사 완료"); }} className="w-full mt-3 bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-black transition-colors text-sm">Copy SQL</button>
                </div>
            </div>

            <div className="flex-1 bg-gray-300 rounded-xl flex items-center justify-center p-10 overflow-hidden">
                {imageUrl && (
                    <div className="relative shadow-2xl bg-white" style={{ width: '100%', maxWidth: '1000px', aspectRatio: `${imgRatio}` }}>
                        <img src={imageUrl} alt="bg" onLoad={handleImageLoad} className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none" />
                        <div ref={bgRef} className="absolute inset-0 z-20 cursor-crosshair" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                            {sortedWordsForRender.map((w) => w.isSet && (
                                <div key={w.word_id} className={`absolute border-2 transition-all ${selectedWordId === w.word_id ? "border-white bg-white/30 z-40" : hoveredId === w.word_id ? "border-yellow-400 bg-yellow-400/20 z-30" : "border-emerald-400/30 bg-emerald-400/10 z-10"}`}
                                     style={{ top: `${w.pos_top}%`, left: `${w.pos_left}%`, width: `${w.width}%`, height: `${w.height}%` }}>
                                    {(selectedWordId === w.word_id || hoveredId === w.word_id) && (
                                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">{w.content}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPlaceSetter;

