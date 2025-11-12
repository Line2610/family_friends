import Single from "../components/Single";
import { Suspense } from "react";

export default async function Detalje({ params }) {
  const { id } = params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail id={id} />
    </Suspense>
  );
}

async function ProductDetail({ id }) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  const product = await res.json();

  return (
    <div>
      <Single
        image={product.thumbnail || product.images?.[0]}
        title={product.title}
        price={product.price}
        category={product.category}
        brand={product.brand}
        rating={product.rating}
        availabilityStatus={
          product.stock ? `På lager: ${product.stock}` : "Ikke på lager"
        }
        description={product.description}
        slug={String(product.id)}
      />
    </div>
  );
}
