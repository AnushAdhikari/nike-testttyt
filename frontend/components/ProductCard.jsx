// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
    return (
        <Link
            href={`/product/slug`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={"/product-1.webp"}
                alt={"product image"}
            />
            <div className="p-4 bg-black">
                <h2 className="text-lg font-medium text-[#a98346]">product</h2>
                <div className="flex items-center text-[#a98346]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;90
                        {/* {p.price} */}
                    </p>
                    
                    <p className="text-base  font-medium text-green-500">
                        20
                                {/* {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )} */}
                                % off
                            </p>
                            <p className="
                            ml-auto text-base font-medium line-through text-[#a98346]">
                                &#8377;100 
                                {/* {p.original_price} */}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
