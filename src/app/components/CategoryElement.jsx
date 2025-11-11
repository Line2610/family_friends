"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`?category=${category}`)}
      className="mb-5 flex cursor-pointer items-center space-x-3 rounded-4xl border border-gray-300 bg-white p-2 hover:bg-red-300"
    >
      <span className="font-medium">{category}</span>
    </div>
  );
};

export default CategoryElement;
