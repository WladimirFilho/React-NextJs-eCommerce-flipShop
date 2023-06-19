"use client";

import ProductCard from "@/Components/ProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/api/service";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <main className="main-layout">
      <h1 className="text-3xl font-bold my-8">Latest Products</h1>
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </main>
  );
}
