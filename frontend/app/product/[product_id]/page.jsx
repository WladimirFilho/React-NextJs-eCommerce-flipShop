"use client";

import Loader from "@/Components/Loader";
import { Rating } from "@/Components/Rating";
import { useGetProductDetailsQuery } from "@/redux/slices/productsApi";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductScreen = ({ params }) => {
  const productId = params.product_id;
  const router = useRouter();

  const {
    data: productChoice,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return (
    <div className="main-layout ">
      {/* back btn */}
      <button
        className="mt-14 text-zinc-700 text-lg font-semibold rounded-md bg-zinc-300 px-8 py-4 mb-8"
        onClick={() => router.back()}
      >
        Go Back
      </button>

      {isLoading ? (
        <Loader />
      ) : error ? (
        error?.error
      ) : (
        <>
          {/* Image section */}
          <div className="flex gap-8 items-start">
            <Image
              alt="product"
              className="w-full h-[700px] object-cover"
              width={700}
              height={700}
              src={productChoice?.image}
            />

            {/* product cart */}
            <div className="flex flex-col gap-8 items-start w-[300px] rounded-md border-[1px] border-black p-10">
              <div className="flex pb-2 w-full justify-between border-b-[1px] border-black">
                <p>Total Prince:</p>
                <p>{productChoice?.price}</p>
              </div>
              <div className="flex pb-2 border-b-[1px] border-black w-full justify-between">
                <p>Status:</p>
                <p>
                  {productChoice?.countInStock > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </p>
              </div>
              <button className="text-zinc-200 text-lg font-semibold rounded-md bg-zinc-800 px-8 py-4">
                Add to Cart
              </button>
            </div>
          </div>

          {/* product description */}
          <div className="flex flex-col">
            <h1 className=" text-3xl mt-6 font-bold">{productChoice?.name}</h1>
            <Rating
              value={productChoice?.rating}
              text={`${productChoice?.numReviews}
          reviews`}
            />

            <p className="mt-6 text-xl">
              Price:{" "}
              <span className="font-bold ml-4 text-3xl">
                {productChoice?.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "AUD",
                })}
              </span>
            </p>

            <div>
              <p className="mt-8 w-1/2 text-lg">{productChoice.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
