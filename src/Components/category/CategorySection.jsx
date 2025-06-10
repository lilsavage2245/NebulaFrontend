import React from "react";
import CategoryCard from "./CategoryCard";
import Category1 from "../../assets/Category1.png";
import Category2 from "../../assets/Category2.png";
import Category3 from "../../assets/Category3.png";
import Category4 from "../../assets/Category4.png";

const CategorySection = () => {
  const categories = [
    {
      image: Category1,
      count: 12,
      label: "Featured",
    },
    {
      image: Category2,
      count: 9,
      label: "Popular",
    },
    {
      image: Category3,
      count: 5,
      label: "Newly Added",
    },
    {
      image: Category4,
      count: 17,
      label: "In-Demand",
    },
  ];

  return (
    <section className="w-full max-w-[1271px] mx-auto py-12 flex flex-col items-center gap-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-black font-poppins">
        Discover Courses Category
      </h2>

      {/* Cards Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-[29px]">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            count={category.count}
            label={category.label}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
