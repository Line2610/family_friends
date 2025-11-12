import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Card from "./Card";

const ProductList = async ({ category }) => {
  return (
    <Suspense>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";
  const response = await fetch(url, { next: { revalidate: 60 } });
  const { products } = await response.json();

  return (
    <div className="mr-5 ml-5 grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Card
          slug={product.id}
          image={product.images?.[0]}
          title={product.title}
          brand={product.brand}
          price={product.price}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
