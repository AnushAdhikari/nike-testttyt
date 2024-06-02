import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from '@/components/CartItem';

const cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPHS START */}
        <div className="text-center mt-8 md:mt-0 max-w-[800px] mx-auto">
          <div className="text-[28px] mb-5 md:text-[34px] leading-tight font-semibold">
            Shopping Cart
          </div>
        </div>
        {/* HEADING AND PARAGRAPHS END */}

        {/*START OF CART ALL CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">

          {/*START OF CART ITEMS */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">
              Cart Items
            </div>
            <CartItem />
            <CartItem />
            <CartItem />

          </div>
          {/* END OF CART ITEMS */}


          {/* CART SUMMARY START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-stone-900 rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-[#a98346]">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-[#a98346]">
                  &#8377;
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal shows the total price of all
                your orders. It does
                not include delivery costs.
              </div>
            </div>

            {/* BUTTON START */}
            <button className="w-full py-4 rounded-full
              bg-stone-900  text-white text-lg font-medium 
              transition-transform active:scale-95 mb-3 hover:opacity-75 flex 
              items-center gap-2 justify-center"> Checkout </button>
            {/* BUTTON END */}
          </div>
          {/* CART SUMMARY END */}

        </div>
        {/* END OF CART ALL CONTENT */}


        {/* IF THE CART IS EMPTY */}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">
            Your cart is empty
          </span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8
            bg-black text-white text-lg font-medium transition-transform 
            active:scale-95 mb-3 hover:opacity-75 mt-8" >
            Continue Shopping
          </Link>
        </div> */}


      </Wrapper>

    </div>
  )
}

export default cart
