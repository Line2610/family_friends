"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`?category=${category}`)}
      className="mb-5 flex w-40 flex-none cursor-pointer items-center justify-center rounded-4xl border border-gray-300 bg-white px-3 py-2 transition-colors duration-150 hover:bg-red-300"
      title={category}
    >
      <span className="w-full truncate text-center text-sm font-medium">
        {category}
      </span>
    </div>
  );
};

export default CategoryElement;
