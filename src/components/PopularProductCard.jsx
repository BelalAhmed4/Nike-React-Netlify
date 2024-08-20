import React from "react";
import { star } from "../assets/icons";
export const PopularProductCard = ({ imgURL, rate, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating" width={28} height={28} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rate})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="font-montserrat mt-2 font-semibold text-coral-red text-2lx">
        {price}
      </p>
    </div>
  );
};
