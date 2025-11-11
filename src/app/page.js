import FooterList from "./components/FooterList";
import NavList from "./components/NavList";
import CategoryList from "./components/listview/CategoryList";
import List from "./components/listview/List";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <header>
        <NavList />
      </header>
      <CategoryList />
      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>
      <nav className="fixed right-0 bottom-0 left-0">
        <FooterList />
      </nav>
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return <List category={category} />;
}
