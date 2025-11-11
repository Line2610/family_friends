import Single from "../components/Single";

export default async function Detalje({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
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
