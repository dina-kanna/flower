import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

export default function Categories({ onCategory }) {
  const categoriesList = [
    "Fresh Bouquets",
    "Romantic Roses",
    "Luxury Arrangements",
    "Birthday & Celebration",
    "Exotic Orchids",
    "Seasonal Specials",
    "Wedding & Anniversary",
    "Sympathy & Condolences",
    "Sunny Sunflowers",
    "Graduation & Success",
  ];

  return (
    <section id="categories" className="bg-[#fffafa] px-5 py-16">
      <div className="mx-auto max-w-full">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-rose-500">
            Discover By Occasion
          </p>
          <h2 className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl">
            Flower Categories
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoriesList.map((cat) => (
            <CategoryCard
              key={cat}
              category={cat}
              onClick={() => onCategory(cat)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}