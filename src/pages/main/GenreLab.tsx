import React, { useMemo, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

type Genre = {
  id: string;
  label: string;
  description?: string;
};

export default function GenreLab() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const genres: Genre[] = useMemo(
    () => [
      { id: "movie", label: "Movie", description: "Scenes, emotions, storytelling" },
      { id: "music", label: "Music", description: "Lyrics, rhythm, expression" },
      { id: "culture", label: "Culture", description: "Daily life, customs, trends" },
      { id: "literature", label: "Literature", description: "Stories, quotes, themes" },
      { id: "math", label: "Math", description: "Patterns, logic, explanation" },
      { id: "society", label: "Society", description: "Issues, debate, opinion" },
      { id: "science", label: "Science", description: "How things work" },
      { id: "history", label: "History", description: "Events, causes, impacts" },
      { id: "art", label: "Art", description: "Visuals, critique, meaning" },
      { id: "kpop", label: "K-POP", description: "Idols, fandom, culture" },
    ],
    []
  );

  const colors = ["#e4e4e472"];

  const getFilteredGenres = () => {
    if (activeCategory === "All") return genres;
    return genres.filter((g) => g.label === activeCategory);
  };

  const handleGenreClick = (genre: Genre) => {
    console.log("Genre clicked:", genre.id);
  };

  const getImageUrl = (id: string) => `/genre/${id}.jpg`;

  return (
    <div className="max-w-[1280px] min-w-[800px] min-h-screen bg-white mx-auto p-5 pb-20">
      {/* 타이틀 */}
      <div className="text-center py-10 animate-fade-in-down">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2C3E50] mb-2">
          Genre Lab
        </h1>
        <p className="text-[#7F8C8D]">Select a genre to start learning!</p>
      </div>

      {/* 카드 그리드 */}
      <div className="max-w-[1800px] mx-auto animate-fade-in-up">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {getFilteredGenres().map((genre, idx) => {
            const accentColor = colors[idx % colors.length];

            return (
              <div
                key={genre.id}
                onClick={() => handleGenreClick(genre)}
                className="bg-white rounded-2xl p-2 flex flex-col items-center justify-center border-2 border-transparent shadow-sm hover:shadow-lg hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer aspect-[1.25] overflow-hidden relative"
                style={{ borderColor: accentColor }}
              >
                <img
                  src={getImageUrl(genre.id)}
                  alt={genre.label}
                  className="w-[90%] h-2/3 object-cover mb-2 rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />

                {/* fallback icon */}
                <IoLocationSharp
                  size={32}
                  color={accentColor}
                  className="mb-2 opacity-80 hidden"
                />

                <h3 className="text-sm md:text-base font-black text-[#34495E] text-center break-words line-clamp-2 px-2">
                  {genre.label}
                </h3>

                {genre.description && (
                    <p className="text-xs text-[#7F8C8D] text-center mt-1 line-clamp-2 px-2">
                      {genre.description}
                    </p>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


