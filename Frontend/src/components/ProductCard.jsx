import React from "react";
import Button from "./Button";

function ProductCard({ product }) {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={product.aosDelay}
        data-aos-once="true"
        key={product.id}
        className="group"
      >
        <div className="relative">
          <img
            src={product.img}
            alt=""
            className=" w-full h-[190px] W-[260px] object-cover rounded-3xl mb-4 "
          />
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center group-hover:backdrop-blur-sm transition-all duration-300  justify-center items-center h-full w-full">
            <Button
              bgcolor={"bg-primary"}
              color={"text-white"}
              text="Add to Cart"
            />
          </div>
        </div>
        <div className=" leading-7">
          <h1 className=" text-lg font-bold mb-2 ">{product.title}</h1>
          <p className=" text-sm font-semibold">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
