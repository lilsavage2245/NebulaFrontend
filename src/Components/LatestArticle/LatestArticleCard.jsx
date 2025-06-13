// src/Components/LatestArticle/LatestArticleCard.jsx

import { Mail, Heart, Clock } from "lucide-react";
import ProfileImage from "../../assets/Team1.png"; // Assumes Webpack is handling images
import ArticleImage from "../../assets/Option1.png";

export default function LatestArticleCard({
  author = "Martin Okoye",
  date = "July 20, 2025",
  tags = "Travel, Tech",
  title = "What Is The Difference Between a UX/UI Designer and a Product Designer?",
  description = "In my previous essay, I started thinking about a more holistic view on design. I thought about how design is not just a beauty",
  profileImage = ProfileImage,
  articleImage = ArticleImage,
  likes = 233,
  mails = 233,
  readTime = "3 min read",
}) {
  return (
    <div className="flex flex-row items-start gap-2 w-[545px] h-[160px] shadow-md rounded-lg overflow-hidden">
      {/* Text Content Area */}
      <div className="flex flex-col gap-2 w-[382px] h-[158px] p-2">
        {/* Top: Author, Date, Tags */}
        <div className="flex flex-wrap items-end gap-[24px]">
          <div className="flex items-center gap-2">
            <img
              src={profileImage}
              alt="Author"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-[10px] font-light text-black">{author}</span>
          </div>
          <span className="text-[12px] font-normal text-black">{date}</span>
          <span className="text-[12px] font-normal text-black">{tags}</span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-bold text-black leading-[18px]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] font-light text-black leading-[17px]">
          {description}
        </p>

        {/* Bottom: Icons */}
        <div className="flex justify-between items-start w-full">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
              <Heart className="w-[15px] h-[13px] text-black" />
              <span className="text-[10px] font-light text-black">{likes}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
              <Mail className="w-[15px] h-[13px] text-black" />
              <span className="text-[10px] font-light text-black">{mails}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
            <span className="text-[10px] font-light text-black">{readTime}</span>
            <Clock className="w-[15px] h-[15px] text-black" />
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="w-[155px] h-[160px] rounded-[24px] overflow-hidden flex-shrink-0">
        <img
          src={articleImage}
          alt="Article"
          width={155}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

