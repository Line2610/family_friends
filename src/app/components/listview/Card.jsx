import Image from "next/image";
import Link from "next/link";

export default function Card({ image, title, brand, price, slug }) {
  return (
    <Link href={`/detalje/${slug}`}>
      <div className="rounded-lg bg-white p-0 shadow transition hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt="Produktbillede"
            width={600}
            height={300}
            loading="eager"
            className="h-full w-full bg-pink-100 object-contain"
          />
        </div>
        <div className="p-3 text-sm font-semibold">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="line-clamp-1 text-sm text-gray-900">{title}</h2>
              <p className="text-xs text-gray-500">{brand}</p>
            </div>
            <div className="text-right text-gray-600">
              {price ? `${price}` : "-"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
