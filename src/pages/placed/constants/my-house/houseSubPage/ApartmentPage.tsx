import React, { useState, useEffect, useRef } from "react";
import apartmentImg from '@/assets/image/places/house/apartment.png';

type InteractionTarget =
    | "parking_lot" | "window" | "security_office" | "recycling_area" | "playground" | "gym"
    | "mailbox" | "walking_path" | "elevator" | "entrance" | "terrace" | "rooftop"
    | "building" | "balcony" | "unit" | "wall" | "basement" | "hallway" | "column"
    | "logo" | "intercom" | "loading_zone" | "lobby" | "garden" | "stairs"
    | null;

const wordDataMap: Record<Exclude<InteractionTarget, null>, {
    en: string;
    videoPath: string;
    sentence: string;
}> = {
    parking_lot: { en: "parking lot", videoPath: "/video/apartment/parking_lot.mp4", sentence: "The parking lot is big. I see the parking lot." },
    window: { en: "window", videoPath: "/video/apartment/window.mp4", sentence: "I open the window. The window is clean." },
    security_office: { en: "security office", videoPath: "/video/apartment/security_office.mp4", sentence: "The guard is at the security office. I visit the security office." },
    recycling_area: { en: "recycling area", videoPath: "/video/apartment/recycling_area.mp4", sentence: "I go to the recycling area. The recycling area is clean." },
    playground: { en: "playground", videoPath: "/video/apartment/playground.mp4", sentence: "The playground is fun. I play at the playground." },
    gym: { en: "gym", videoPath: "/video/apartment/gym.mp4", sentence: "The gym is on the first floor. Dad uses the gym." },
    mailbox: { en: "mailbox", videoPath: "/video/apartment/mailbox.mp4", sentence: "I have a mailbox. Mom checks the mailbox." },
    walking_path: { en: "walking path", videoPath: "/video/apartment/walking_path.mp4", sentence: "I walk on the walking path. The walking path is long." },
    elevator: { en: "elevator", videoPath: "/video/apartment/elevator.mp4", sentence: "I take the elevator. The elevator is fast." },
    entrance: { en: "entrance", videoPath: "/video/apartment/entrance.mp4", sentence: "The entrance is big. I use the entrance." },
    terrace: { en: "terrace", videoPath: "/video/apartment/terrace.mp4", sentence: "The terrace is nice. I sit on the terrace." },
    rooftop: { en: "rooftop", videoPath: "/video/apartment/rooftop.mp4", sentence: "The rooftop is high. I go to the rooftop." },
    building: { en: "building", videoPath: "/video/apartment/building.mp4", sentence: "This is a big building. I live in the building." },
    balcony: { en: "balcony", videoPath: "/video/apartment/balcony.mp4", sentence: "We have a balcony. The balcony is small." },
    unit: { en: "unit", videoPath: "/video/apartment/unit.mp4", sentence: "I live in unit 101. My unit is cozy." },
    wall: { en: "wall", videoPath: "/video/apartment/wall.mp4", sentence: "The wall is white. I touch the wall." },
    basement: { en: "basement", videoPath: "/video/apartment/basement.mp4", sentence: "Dad parks in the basement. The basement is dark." },
    hallway: { en: "hallway", videoPath: "/video/apartment/hallway.mp4", sentence: "The hallway is bright. I walk in the hallway." },
    column: { en: "column", videoPath: "/video/apartment/column.mp4", sentence: "I see a column. The column is tall." },
    logo: { en: "logo", videoPath: "/video/apartment/logo.mp4", sentence: "I see the logo. The logo is on the wall." },
    intercom: { en: "intercom", videoPath: "/video/apartment/intercom.mp4", sentence: "I press the intercom. The intercom is on the wall." },
    loading_zone: { en: "loading zone", videoPath: "/video/apartment/loading_zone.mp4", sentence: "I see the loading zone. The truck is at the loading zone." },
    lobby: { en: "lobby", videoPath: "/video/apartment/lobby.mp4", sentence: "The lobby is clean. We are in the lobby." },
    garden: { en: "garden", videoPath: "/video/apartment/garden.mp4", sentence: "The garden is pretty. I like the garden." },
    stairs: { en: "stairs", videoPath: "/video/apartment/stairs.mp4", sentence: "I go up the stairs. The stairs are long." }
};

const audioMap: Record<Exclude<InteractionTarget, null>, string> = {
    parking_lot: "/audio/apartment/parking lot.mp3", window: "/audio/apartment/window.mp3",
    security_office: "/audio/apartment/security office.mp3", recycling_area: "/audio/apartment/recycling area.mp3",
    playground: "/audio/apartment/playground.mp3", gym: "/audio/apartment/gym.mp3",
    mailbox: "/audio/apartment/mailbox.mp3", walking_path: "/audio/apartment/walking path.mp3",
    elevator: "/audio/apartment/elevator.mp3", entrance: "/audio/apartment/entrance.mp3",
    terrace: "/audio/apartment/terrace.mp3", rooftop: "/audio/apartment/rooftop.mp3",
    building: "/audio/apartment/building.mp3", balcony: "/audio/apartment/balcony.mp3",
    unit: "/audio/apartment/unit.mp3", wall: "/audio/apartment/wall.mp3",
    basement: "/audio/apartment/basement.mp3", hallway: "/audio/apartment/hallway.mp3",
    column: "/audio/apartment/column.mp3", logo: "/audio/apartment/logo.mp3",
    intercom: "/audio/apartment/intercom.mp3", loading_zone: "/audio/apartment/loading zone.mp3",
    lobby: "/audio/apartment/lobby.mp3", garden: "/audio/apartment/garden.mp3", stairs: "/audio/apartment/stairs.mp3"
};

const HOVER_EFFECT_PATH = "/audio/effect/click_sound_effect.mp3";
let hoverAudioInstance: HTMLAudioElement | null = null;
if (typeof window !== "undefined") {
    hoverAudioInstance = new Audio(HOVER_EFFECT_PATH);
}

const ApartmentPage: React.FC = () => {
    const [mode, setMode] = useState<"explore" | "game">("explore");
    const [hintOn, setHintOn] = useState<boolean>(false);
    const [hoveredTarget, setHoveredTarget] = useState<InteractionTarget>(null);
    const [activeClickedTarget, setActiveClickedTarget] = useState<InteractionTarget>(null);
    const [videoTarget, setVideoTarget] = useState<Exclude<InteractionTarget, null> | null>(null);
    const [showBubble, setShowBubble] = useState<boolean>(false);
    const [clickedSet, setClickedSet] = useState<Set<string>>(new Set());
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const totalWords = 25;

    useEffect(() => {
        const unlockAudio = () => {
            if (hoverAudioInstance) {
                hoverAudioInstance.volume = 0;
                hoverAudioInstance.play()
                    .then(() => {
                        if (hoverAudioInstance) hoverAudioInstance.volume = 1.0;
                        window.removeEventListener("mousemove", unlockAudio);
                        window.removeEventListener("touchstart", unlockAudio);
                    })
                    .catch(() => { });
            }
        };
        window.addEventListener("mousemove", unlockAudio);
        window.addEventListener("touchstart", unlockAudio);
        return () => {
            window.removeEventListener("mousemove", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
        };
    }, []);

    const startBubbleTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setShowBubble(true);
        timerRef.current = setTimeout(() => {
            setShowBubble(false);
        }, 4000);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleTargetHover = (targetId: Exclude<InteractionTarget, null>) => {
        setHoveredTarget(targetId);
        if (hoverAudioInstance) {
            hoverAudioInstance.currentTime = 0;
            hoverAudioInstance.volume = 1.0;
            hoverAudioInstance.play().catch(() => { });
        }
    };

    const handleTargetMouseLeave = () => {
        setHoveredTarget(null);
    };

    const handleTargetClick = (targetId: Exclude<InteractionTarget, null>) => {
        if (activeClickedTarget === targetId && showBubble) {
            setVideoTarget(targetId);
            setShowBubble(false);
            return;
        }

        const audioPath = audioMap[targetId];
        if (audioPath) {
            const audio = new Audio(audioPath);
            audio.play().catch(error => console.error("단어 오디오 재생 실패:", error));
        }

        setActiveClickedTarget(targetId);
        startBubbleTimer();
    };

    const handleVideoEnded = (targetId: Exclude<InteractionTarget, null>) => {
        setClickedSet(prev => {
            const next = new Set(prev);
            next.add(targetId);
            return next;
        });
    };

 const handleSentenceAudio = (targetId: Exclude<InteractionTarget, null>, index: number) => {
    // 💡 이 줄이 들어가서 언더바(_)를 강제로 다 지워주어야 합니다!
    const cleanTargetId = targetId.replace(/_/g, "");
    const sentenceAudioPath = `/audio/apartmentSentence/${cleanTargetId}${index}.mp3`; 
    
    console.log("====== 오디오 재생 시도 ======");
    console.log("최종 조립된 주소:", sentenceAudioPath);

    const audio = new Audio(sentenceAudioPath);
    audio.play().catch(error => {
        console.error(`${cleanTargetId}${index}.mp3 재생 실패 상세 에러:`, error);
        console.log("요청하려던 주소 다시 확인:", audio.src);
    });
};
    const stairsClip = "polygon(67.5% 60.0%, 74.5% 60.0%, 74.5% 66.0%, 67.5% 66.0%)";
    const stairsSvg = "108.0,54.0 119.2,54.0 119.2,59.4 108.0,59.4";
    const unitClip = "polygon(12.0% 2.0%, 20.5% 2.0%, 20.5% 19.0%, 12.0% 19.0%)";
    const unitSvg = "19.2,1.8 32.8,1.8 32.8,17.1 19.2,17.1";
    const wallClip = "polygon(22.2% 3.2%, 29.6% 3.2%, 29.6% 39.5%, 22.2% 39.5%)";
    const wallSvg = "35.5,2.9 47.3,2.9 47.3,35.6 35.5,35.6";
    const basementClip = "polygon(2.5% 43.5%, 13.8% 43.5%, 13.8% 70.0%, 2.5% 70.0%)";
    const basementSvg = "4.0,39.1 22.0,39.1 22.0,63.0 4.0,63.0";
    const hallwayClip = "polygon(46.5% 40.5%, 54.5% 40.5%, 54.5% 54.5%, 46.5% 54.5%)";
    const hallwaySvg = "74.4,36.4 87.2,36.4 87.2,49.0 74.4,49.0";
    const columnClip = "polygon(56.2% 29.5%, 61.2% 29.5%, 61.2% 59.5%, 56.2% 59.5%)";
    const columnSvg = "89.9,26.5 97.9,26.5 97.9,53.5 89.9,53.5";
    const logoClip = "polygon(68.2% 30.5%, 77.8% 30.5%, 77.8% 44.5%, 68.2% 44.5%)";
    const logoSvg = "109.1,27.4 124.4,27.4 124.4,40.0 109.1,40.0";
    const intercomClip = "polygon(75.0% 47.5%, 78.5% 47.5%, 78.5% 56.5%, 75.0% 56.5%)";
    const intercomSvg = "120.0,42.7 125.6,42.7 125.6,50.8 120.0,50.8";
    const loading_zoneClip = "polygon(73.5% 58.0%, 84.5% 58.0%, 84.5% 70.5%, 73.5% 70.5%)";
    const loading_zoneSvg = "117.6,52.2 135.2,52.2 135.2,63.4 117.6,63.4";
    const lobbyClip = "polygon(85.0% 42.0%, 99.0% 42.0%, 99.0% 66.5%, 85.0% 66.5%)";
    const lobbySvg = "136.0,37.8 158.4,37.8 158.4,59.8 136.0,59.8";
    const gardenClip = "polygon(53.0% 65.5%, 59.5% 65.5%, 59.5% 72.0%, 53.0% 72.0%)";
    const gardenSvg = "84.8,58.9 95.2,58.9 95.2,64.8 84.8,64.8";
    const balconyClip = "polygon(66.5% 12.5%, 79.5% 12.5%, 79.5% 33.5%, 66.5% 33.5%)";
    const balconySvg = "106.4,11.3 127.2,11.3 127.2,30.2 106.4,30.2";
    const buildingClip = "polygon(31.2% 4.5%, 56.5% 6.5%, 56.5% 41.5%, 31.2% 39.5%)";
    const buildingSvg = "49.9,4.1 90.4,5.9 90.4,37.4 49.9,35.6";
    const parking_lotClip = "polygon(1% 73%, 30% 68%, 31% 83%, 10% 93%, 1% 93%)";
    const parking_lotSvg = "1.6,65.7 48,61.2 49.6,74.7 16,83.7 1.6,83.7";
    const windowClip = "polygon(2.2% 17.5%, 21.5% 21.8%, 21.2% 38.3%, 2% 34.5%)";
    const windowSvg = "3.5,15.7 34.4,19.6 33.9,34.4 3.2,31.0";
    const security_officeClip = "polygon(56.5% 72.5%, 76.5% 72.5%, 76.5% 98%, 56.5% 98%)";
    const security_officeSvg = "90.4,65.2 122.4,65.2 122.4,88.2 90.4,88.2";
    const recycling_areaClip = "polygon(70.5% 70.3%, 85% 70.3%, 85% 84.5%, 70.5% 84.5%)";
    const recycling_areaSvg = "112.8,63.2 136.0,63.2 136.0,76.1 112.8,76.1";
    const playgroundClip = "polygon(82% 64.5%, 98.5% 64.5%, 98.5% 82.5%, 82% 82.5%)";
    const playgroundSvg = "131.2,58.0 157.6,58.0 157.6,74.2 131.2,74.2";
    const gymClip = "polygon(79.5% 83.5%, 98.5% 83.5%, 98.5% 97.5%, 79.5% 97.5%)";
    const gymSvg = "127.2,75.1 157.6,75.1 157.6,87.8 127.2,87.8";
    const mailboxClip = "polygon(30.8% 50.8%, 48.3% 50.8%, 48.3% 84.5%, 30.8% 84.5%)";
    const mailboxSvg = "49.3,45.7 77.3,45.7 77.3,76.1 49.3,76.1";
    const walking_pathClip = "polygon(32.5% 81.0%, 52.0% 81.0%, 46.5% 97.0%, 25.0% 97.0%)";
    const walking_pathSvg = "52.0,72.9 83.2,72.9 74.4,87.3 40.0,87.3";
    const elevatorClip = "polygon(56.0% 8.7%, 68.3% 8.7%, 68.3% 32.7%, 56.0% 32.7%)";
    const elevatorSvg = "89.6,7.8 109.3,7.8 109.3,29.4 89.6,29.4";
    const entranceClip = "polygon(67.8% 44.2%, 77.8% 44.2%, 77.8% 63.5%, 67.8% 63.5%)";
    const entranceSvg = "108.5,39.8 124.5,39.8 124.5,57.1 108.5,57.1";
    const terraceClip = "polygon(84.7% 23.7%, 99.5% 23.7%, 99.5% 45.0%, 84.7% 45.0%)";
    const terraceSvg = "135.5,21.3 159.2,21.3 159.2,40.5 135.5,40.5";
    const rooftopClip = "polygon(88.2% 11.0%, 99.5% 11.0%, 99.5% 23.5%, 88.2% 23.5%)";
    const rooftopSvg = "141.1,9.9 159.2,9.9 159.2,21.1 141.1,21.1";

    const baseBrightness = hintOn ? "brightness(0.15) blur(2px)" : "brightness(1) blur(0px)";
    const isOverlayLayerActive = hintOn || hoveredTarget !== null || activeClickedTarget !== null;

    let activeClipPath = "none";
    if (hoveredTarget === "parking_lot") activeClipPath = parking_lotClip;
    else if (hoveredTarget === "window") activeClipPath = windowClip;
    else if (hoveredTarget === "security_office") activeClipPath = security_officeClip;
    else if (hoveredTarget === "recycling_area") activeClipPath = recycling_areaClip;
    else if (hoveredTarget === "playground") activeClipPath = playgroundClip;
    else if (hoveredTarget === "gym") activeClipPath = gymClip;
    else if (hoveredTarget === "mailbox") activeClipPath = mailboxClip;
    else if (hoveredTarget === "walking_path") activeClipPath = walking_pathClip;
    else if (hoveredTarget === "elevator") activeClipPath = elevatorClip;
    else if (hoveredTarget === "entrance") activeClipPath = entranceClip;
    else if (hoveredTarget === "terrace") activeClipPath = terraceClip;
    else if (hoveredTarget === "rooftop") activeClipPath = rooftopClip;
    else if (hoveredTarget === "building") activeClipPath = buildingClip;
    else if (hoveredTarget === "balcony") activeClipPath = balconyClip;
    else if (hoveredTarget === "unit") activeClipPath = unitClip;
    else if (hoveredTarget === "wall") activeClipPath = wallClip;
    else if (hoveredTarget === "basement") activeClipPath = basementClip;
    else if (hoveredTarget === "hallway") activeClipPath = hallwayClip;
    else if (hoveredTarget === "column") activeClipPath = columnClip;
    else if (hoveredTarget === "logo") activeClipPath = logoClip;
    else if (hoveredTarget === "intercom") activeClipPath = intercomClip;
    else if (hoveredTarget === "loading_zone") activeClipPath = loading_zoneClip;
    else if (hoveredTarget === "lobby") activeClipPath = lobbyClip;
    else if (hoveredTarget === "garden") activeClipPath = gardenClip;
    else if (hoveredTarget === "stairs") activeClipPath = stairsClip;

    const getClipPathById = (id: InteractionTarget) => {
        if (id === "parking_lot") return parking_lotClip;
        if (id === "window") return windowClip;
        if (id === "security_office") return security_officeClip;
        if (id === "recycling_area") return recycling_areaClip;
        if (id === "playground") return playgroundClip;
        if (id === "gym") return gymClip;
        if (id === "mailbox") return mailboxClip;
        if (id === "walking_path") return walking_pathClip;
        if (id === "elevator") return elevatorClip;
        if (id === "entrance") return entranceClip;
        if (id === "terrace") return terraceClip;
        if (id === "rooftop") return rooftopClip;
        if (id === "building") return buildingClip;
        if (id === "balcony") return balconyClip;
        if (id === "unit") return unitClip;
        if (id === "wall") return wallClip;
        if (id === "basement") return basementClip;
        if (id === "hallway") return hallwayClip;
        if (id === "column") return columnClip;
        if (id === "logo") return logoClip;
        if (id === "intercom") return intercomClip;
        if (id === "loading_zone") return loading_zoneClip;
        if (id === "lobby") return lobbyClip;
        if (id === "garden") return gardenClip;
        if (id === "stairs") return stairsClip;
        return "none";
    };

    const isTargetLit = (target: InteractionTarget) => hintOn || hoveredTarget === target || activeClickedTarget === target;

    const targets: { id: Exclude<InteractionTarget, null>; points: string }[] = [
        { id: "parking_lot", points: parking_lotSvg }, { id: "window", points: windowSvg }, {
            id: "security_office",
            points: security_officeSvg
        },
        { id: "recycling_area", points: recycling_areaSvg }, { id: "playground", points: playgroundSvg }, {
            id: "gym",
            points: gymSvg
        },
        { id: "mailbox", points: mailboxSvg }, { id: "walking_path", points: walking_pathSvg }, {
            id: "elevator",
            points: elevatorSvg
        },
        { id: "entrance", points: entranceSvg }, { id: "terrace", points: terraceSvg }, { id: "rooftop", points: rooftopSvg },
        { id: "building", points: buildingSvg }, { id: "balcony", points: balconySvg }, { id: "unit", points: unitSvg },
        { id: "wall", points: wallSvg }, { id: "basement", points: basementSvg }, { id: "hallway", points: hallwaySvg },
        { id: "column", points: columnSvg }, { id: "logo", points: logoSvg }, { id: "intercom", points: intercomSvg },
        { id: "loading_zone", points: loading_zoneSvg }, { id: "lobby", points: lobbySvg }, {
            id: "garden",
            points: gardenSvg
        }, { id: "stairs", points: stairsSvg }
    ];

    const getPolygonCenterById = (targetId: Exclude<InteractionTarget, null>) => {
        const found = targets.find(t => t.id === targetId);
        if (!found) return { x: 50, y: 50 };

        const pairs = found.points.trim().split(/\s+/);
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        pairs.forEach(p => {
            const [xStr, yStr] = p.split(",");
            const cx = parseFloat(xStr);
            const cy = parseFloat(yStr);
            if (!isNaN(cx) && !isNaN(cy)) {
                if (cx < minX) minX = cx;
                if (cx > maxX) maxX = cx;
                if (cy < minY) minY = cy;
                if (cy > maxY) maxY = cy;
            }
        });

        return {
            x: ((minX + maxX) / 2 / 160) * 100,
            y: ((minY + maxY) / 2 / 90) * 100
        };
    };

    const centerCoords = activeClickedTarget ? getPolygonCenterById(activeClickedTarget) : { x: 50, y: 50 };
    const currentWordData = activeClickedTarget ? wordDataMap[activeClickedTarget] : null;

    return (
        <div
            className="min-h-screen flex flex-col font-sans relative w-full items-center justify-start pb-16 selection:bg-blue-200"
            style={{
                background: "radial-gradient(1200px 500px at 50% -10%, #BFE8F7 0%, transparent 60%), linear-gradient(180deg, #A7DCF0 0%, #C9EAD3 48%, #B4E09A 100%)",
            }}
        >
            <style>{`
                @keyframes imgPulse {
                    0%, 100% { opacity: 0.4; filter: brightness(1.2) drop-shadow(0px 0px 4px rgba(255, 235, 59, 0.4)); }
                    50% { opacity: 1.0; filter: brightness(1.2) drop-shadow(0px 0px 18px rgba(255, 235, 59, 1.0)) drop-shadow(0px 0px 6px rgba(255, 215, 0, 0.8)); }
                }
                .animate-img-pulse { animation: imgPulse 1.5s infinite ease-in-out; }

                @keyframes imgHoverPulse {
                    0%, 100% { opacity: 0.6; filter: brightness(1.0) drop-shadow(0px 0px 3px rgba(255, 235, 59, 0.3)); }
                    50% { opacity: 1.0; filter: brightness(1.25) drop-shadow(0px 0px 10px rgba(255, 235, 59, 0.85)); }
                }
                .animate-img-hover-pulse { animation: imgHoverPulse 0.8s infinite ease-in-out; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in { animation: fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes popIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

                @keyframes goldGlowPulse {
                    0%, 100% {
                        transform: scale(1) translateY(0);
                        box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.5), 0 0 0 0px rgba(251, 191, 36, 0.7);
                    }
                    50% {
                        transform: scale(1.06) translateY(-4px);
                        box-shadow: 0 20px 30px -5px rgba(245, 158, 11, 0.7), 0 0 20px 12px rgba(251, 191, 36, 0);
                    }
                }
                .animate-gold-ready { animation: goldGlowPulse 1.4s infinite ease-in-out; }
            `}</style>

            <div className="text-center pt-12 mb-6">
                <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_4px_rgba(74,142,112,0.3)] mb-3">
                    Apartment Word Adventure
                </h1>
            </div>

            <div
                className="flex gap-4 bg-white/40 backdrop-blur-md p-1.5 rounded-full shadow-inner border border-white/40 mb-8">
                <button
                    onClick={() => setMode("explore")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 ${mode === "explore" ? "bg-[#4CAF50] text-white shadow-md scale-105" : "text-emerald-800 hover:bg-white/30"
                        }`}
                >
                    🔍 Explorer
                </button>
                <button
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-base transition-all duration-300 text-gray-400 bg-white/20 cursor-not-allowed`}
                    disabled={true}
                >
                    🎮 Game
                </button>
            </div>

            <div
                className="w-full max-w-[1000px] bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white flex flex-col gap-4 relative">
                <div
                    className="relative aspect-[16/9] rounded-[30px] border border-gray-100 overflow-hidden shadow-inner bg-gray-100">
                    <div className="w-full h-full transition-all duration-500 ease-in-out"
                        style={{ filter: baseBrightness }}>
                        <img src={apartmentImg} alt="Base" className="w-full h-full object-cover select-none" />
                    </div>

                    <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
                        style={{ opacity: isOverlayLayerActive ? 1 : 0 }}>
                        {hintOn ? (
                            <div className="relative w-full h-full">
                                {targets.map((t) => (
                                    <div key={t.id} className="absolute inset-0"
                                        style={{ clipPath: getClipPathById(t.id) }}>
                                        <img src={apartmentImg} className="w-full h-full object-cover" alt="hint-img" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative w-full h-full">
                                {activeClipPath !== "none" && hoveredTarget !== activeClickedTarget && (
                                    <div className="absolute inset-0 animate-img-hover-pulse"
                                        style={{ clipPath: activeClipPath }}>
                                        <img src={apartmentImg} alt="Highlight"
                                            className="w-full h-full object-cover select-none" />
                                    </div>
                                )}
                                {activeClickedTarget && (
                                    <div className="absolute inset-0 animate-img-pulse"
                                        style={{ clipPath: getClipPathById(activeClickedTarget), zIndex: 10 }}>
                                        <img src={apartmentImg} className="w-full h-full object-cover"
                                            alt="active-img" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <svg viewBox="0 0 160 90" className="absolute inset-0 w-full h-full pointer-events-none">
                        {targets.map((target) => (
                            <g
                                key={target.id}
                                className="pointer-events-auto cursor-pointer"
                                onMouseEnter={() => handleTargetHover(target.id)}
                                onMouseLeave={handleTargetMouseLeave}
                                onClick={() => handleTargetClick(target.id)}
                            >
                                <polygon
                                    points={target.points}
                                    fill="white"
                                    fillOpacity={isTargetLit(target.id) ? "0.15" : "0.001"}
                                    className={`transition-all duration-300 stroke-[0.05] ${isTargetLit(target.id) ? "stroke-yellow-400" : "stroke-transparent"}`}
                                    style={{ filter: isTargetLit(target.id) ? "drop-shadow(0px 0px 6px rgba(255, 215, 0, 1))" : "none" }}
                                />
                            </g>
                        ))}
                    </svg>

                    {currentWordData && showBubble && (
                        <>
                            <div className="block md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white px-4 py-3 rounded-2xl shadow-xl border-[3px] border-[#7CB342] z-30 pointer-events-auto animate-fade-in"
                                onClick={() => handleTargetClick(activeClickedTarget!)}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[#388E3C] text-lg font-black tracking-wide">{currentWordData.en}</span>
                                    </div>
                                    <span className="text-gray-400 font-medium text-[10px] bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">터치 시 영상 보기 🎬</span>
                                </div>
                            </div>

                            {(() => {
                                const isLeftEdgeTarget = centerCoords.x < 15;
                                const translationX = isLeftEdgeTarget ? "25%" : "-125%";

                                return (
                                    <div
                                        className="hidden md:flex absolute z-30 pointer-events-none"
                                        style={{
                                            left: `${centerCoords.x}%`,
                                            top: `${centerCoords.y}%`,
                                            width: "0px",
                                            height: "0px",
                                            position: "absolute"
                                        }}
                                    >
                                        <div
                                            className="pointer-events-auto cursor-pointer flex flex-col items-center whitespace-nowrap"
                                            style={{
                                                transform: `translate(${translationX}, -50%)`
                                            }}
                                            onClick={() => handleTargetClick(activeClickedTarget!)}
                                        >
                                            <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.2)] border-[3px] border-[#7CB342] min-w-[120px] relative hover:bg-emerald-50/50 transition-colors duration-150 flex flex-col items-center justify-center">
                                                {clickedSet.has(activeClickedTarget!) && (
                                                    <div className="absolute -right-1.5 -top-1.5 bg-[#5CB85C] text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shadow-sm">
                                                        ✓
                                                    </div>
                                                )}
                                                <span className="text-[#388E3C] text-base font-black tracking-wide whitespace-nowrap">
                                                    {currentWordData.en}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </>
                    )}
                </div>

                <div className="flex justify-between items-center pt-2 px-2 gap-4">
                    <div className="flex-grow flex flex-col gap-1.5">
                        <div
                            className="w-full bg-white rounded-full h-3 border border-gray-150 p-[2px] overflow-hidden">
                            <div
                                className="bg-[#A7DCF0] h-full rounded-full transition-all duration-500"
                                style={{ width: `${(clickedSet.size / totalWords) * 100}%` }}
                            />
                        </div>
                        <span
                            className="text-xs font-extrabold text-gray-500 pl-1">Voca {clickedSet.size} / {totalWords}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setHintOn(!hintOn)}
                            className={`font-black text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 whitespace-nowrap ${hintOn ? "bg-amber-500 text-white ring-4 ring-amber-200" : "bg-white text-amber-600 border border-amber-200 hover:bg-amber-50"
                                }`}
                        >
                            {hintOn ? "💡 Hint On" : "✨ Hint"}
                        </button>

                        <button
                            className={`font-black text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap ${clickedSet.size === totalWords
                                ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 text-white border-2 border-yellow-200 animate-gold-ready"
                                : "bg-[#FFD180] text-[#E65100] hover:bg-[#FFE082] active:scale-95"
                                }`}
                        >
                            {clickedSet.size === totalWords ? "✨ Game Start! ✨" : "Game Start"}
                        </button>
                    </div>
                </div>
            </div>

            {/* 🎬 동영상 팝업 모달 */}
            {videoTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
                    <div
                        className="fixed inset-0 bg-[#3a3528]/40 backdrop-blur-[2px] transition-opacity duration-300"
                        onClick={() => setVideoTarget(null)}
                    />

                    <div
                        className="relative bg-[#FFFBF0] rounded-[40px] shadow-2xl p-6 border-8 border-white w-[90%] max-w-[1000px] flex flex-col gap-4 animate-fade-in select-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <div className="flex flex-col gap-0.5">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-[#4B9343] tracking-wide">
                                        {wordDataMap[videoTarget]?.en}
                                    </span>
                                </div>
                                <span className="text-base font-bold text-[#666666] mr-2">
                                    - Watch the video and repeat out loud!
                                </span>
                            </div>

                            <button
                                onClick={() => setVideoTarget(null)}
                                className="text-[#888888] hover:text-[#444444] bg-white shadow-sm hover:shadow border border-gray-200/60 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black transition-all"
                            >
                                ✕
                            </button>
                        </div>

                        <div
                            className="aspect-[16/9] w-full rounded-[24px] overflow-hidden border border-gray-200/50 shadow-inner bg-gradient-to-tr from-[#9AD6EA] via-[#CCEED1] to-[#BEEA9F] p-[6px]">
                            <div className="w-full h-full bg-black rounded-[18px] overflow-hidden relative">
                                <video
                                    src={wordDataMap[videoTarget]?.videoPath}
                                    controls
                                    autoPlay
                                    onEnded={() => handleVideoEnded(videoTarget)}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* 🔊 개별 문장 음성 듣기 전용 섹션 */}
                      {/* 🔊 개별 문장 음성 듣기 전용 섹션 */}
                        <div 
                            className="flex flex-col gap-3 mt-2 bg-white/60 border border-gray-200/50 p-4 rounded-2xl shadow-inner pointer-events-auto"
                            onClick={(e) => e.stopPropagation()} // 💡 모달 배경 클릭 이벤트가 하단 레이어까지 침범하는 것을 방지
                        >
                            {wordDataMap[videoTarget]?.sentence
                                .split('.')
                                .map((s) => s.trim())
                                .filter(Boolean)
                                .map((sentenceStr, idx) => {
                                    const currentIdx = idx + 1;
                                    return (
                                        <div key={idx} className="flex items-center justify-between gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:border-[#81C784] transition-all">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center justify-center bg-[#E8F5E9] text-[#2E7D32] text-xs font-black w-6 h-6 rounded-lg border border-[#A5D6A7]">
                                                    {currentIdx}
                                                </span>
                                                <span className="text-base font-bold text-[#333333] tracking-wide">
                                                    “{sentenceStr}.”
                                                </span>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation(); // 💡 버튼 클릭이 부모 컴포넌트로 전파되어 씹히는 현상 원천 차단
                                                    handleSentenceAudio(videoTarget, currentIdx);
                                                }}
                                                className="relative z-50 bg-[#4CAF50] hover:bg-[#43A047] text-white font-black text-xs px-3.5 py-2 rounded-xl shadow-[0_3px_0_#2E7D32] hover:translate-y-[1px] hover:shadow-[0_2px_0_#2E7D32] transition-all flex items-center gap-1.5 whitespace-nowrap active:translate-y-[3px] active:shadow-none cursor-pointer"
                                            >
                                                <span className="text-sm pointer-events-none">🔊</span> 
                                                <span className="pointer-events-none">Listen</span>
                                            </button>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApartmentPage;