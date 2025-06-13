// src/Components/LatestArticle/LatestArticleSection.jsx

import LatestArticleCard from "./LatestArticleCard";

export default function LatestArticleSection() {
  // Example placeholder trending topics
  const trendingTopics1 = ["#Design", "#Productivity", "#UIUX"];
  const trendingTopics2 = ["#Startups", "#DevLife", "#TechNews"];

  return (
    <section className="flex flex-col justify-center items-center gap-6 w-full px-4 py-12 bg-[#f9f9f9]">
      {/* Section Title */}
      <h2 className="text-[32px] font-bold leading-[39px] text-black max-w-[1052px] w-full text-left">
        Latest Articles
      </h2>

      {/* Main Content Row */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[120px] w-full max-w-[1052px]">
        {/* Left Column: Article Cards */}
        <div className="flex flex-col gap-6 w-full max-w-[545px]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <LatestArticleCard key={idx} />
          ))}
        </div>

        {/* Right Column: Trending Topics Blocks */}
        <div className="flex flex-col gap-8 w-full max-w-[387px]">
          {/* Trending Box 1 */}
          <TrendingTopicsBox title="Trending Topics" tags={trendingTopics1} />

          {/* Trending Box 2 */}
          <TrendingTopicsBox title="Trending Topics" tags={trendingTopics2} />
        </div>
      </div>

      {/* Show Me More Button */}
      <button className="mt-6 px-5 py-2 w-[126px] h-[38px] bg-teal-600 text-black text-[15px] rounded-full hover:bg-teal-700 transition">
        See more
      </button>
    </section>
  );
}

// 🔁 Reusable Trending Topics Block
function TrendingTopicsBox({ title, tags }) {
  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-[24px] w-full shadow-sm">
      <div className="flex justify-between items-center w-full">
        <span className="text-[15px] font-bold text-black">{title}</span>
        <span className="text-[15px] font-bold text-[#1D15B1] cursor-pointer">View all</span>
      </div>

      <div className="flex flex-col gap-6">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-100 text-sm text-black px-4 py-2 rounded-full w-fit"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
