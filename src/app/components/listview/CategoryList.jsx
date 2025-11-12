import { Suspense } from "react";
import CategoryElement from "../CategoryElement";

const CategoryList = () => {
  return (
    <Suspense>
      <FetchCategories />
    </Suspense>
  );
};

const FetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();

  return (
    <div className="flex gap-3 overflow-x-auto px-4 pb-2">
      {categories.map((category, index) => (
        <CategoryElement category={category} key={index} />
      ))}
    </div>
  );
};

export default CategoryList;
