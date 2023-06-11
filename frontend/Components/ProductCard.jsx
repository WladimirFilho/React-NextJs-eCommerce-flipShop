import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <li>
      <Link
        className=" h-[500px] flex flex-col gap-4 border-[2px] border-grey-500 p-4 "
        href={`/product/${product._id}`}
      >
        <Image src={product.image} width={500} height={500} />
        <h2 className="lg:text-2xl font-bold flex-1">{product.name}</h2>
        <h3 className="text-xl ">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "AUD",
          })}
        </h3>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Link>
    </li>
  );
};

export default ProductCard;
