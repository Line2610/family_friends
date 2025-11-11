import { IoStar } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import NavList from "../../components/NavList";

const Single = ({
  image,
  price,
  title,
  brand,
  slug,
  category,
  rating,
  availabilityStatus,
  description,
}) => {
  return (
    <>
      <header>
        <NavList />
      </header>
      <div className="m-5 grid">
        <Link className="z-1 col-1 row-1" href="/">
          <IoChevronBack />
        </Link>
        <div className="z-1 col-1 row-1 justify-self-end">
          <IoStar />
        </div>
        {image ? (
          <Image
            src={image}
            alt={title || "Produktbillede"}
            fill={false}
            width={600}
            height={300}
            loading="eager"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-gray-100 text-gray-500"></div>
        )}
        <h1 className="mt-4 mb-4 text-2xl font-bold">{title}</h1>
        <h2>{price ? `$${price}` : "-"}</h2>
        <div className="justify-start-center mt-5 flex flex-wrap gap-4">
          <p className="rounded-2xl bg-blue-100 p-2">{category}</p>
          <p className="rounded-2xl bg-pink-100 p-2">{brand}</p>
          <p className="rounded-2xl bg-green-100 p-2">{rating}</p>
          <p className="rounded-2xl bg-yellow-100 p-2">{availabilityStatus}</p>
        </div>
        <p className="mt-4">{description}</p>
        <button className="mt-8 w-full rounded-4xl bg-pink-100 p-4">Buy</button>
      </div>
    </>
  );
};

export default Single;
