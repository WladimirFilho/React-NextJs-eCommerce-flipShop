"use client";

import Loader from "@/Components/Loader";
import ProductCard from "@/Components/ProductCard";
import { useGetProductsQuery } from "@/redux/slices/productsApi";

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <main className="main-layout">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.error}</div>
      ) : (
        <>
          <h1 className="text-3xl font-bold my-8">Latest Products</h1>
          <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch ">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
