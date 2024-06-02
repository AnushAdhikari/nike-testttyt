import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";


const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* CART IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          src="product-1.webp" />
      </div>
      {/*CART IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-[#a98346]/[0.8]">
            TEST
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-[#a98346]/[0.5] block md:hidden">
            TEST2
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-[#a98346]/[0.5] mt-2">
            MRP : &#8377;50
          </div>
        </div>

        {/* PRODUCT SUBTITLE FOR BIG SCREEN*/}
        <div className="text-sm md:text-md font-medium text-[#a98346]/[0.5] block md:BLOCK">
          SUB
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-[#a98346]/[0.5] text-sm md:text-md">

            {/* PRODUCT SIZE START */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="text-white bg-black border-white rounded-md hover:text-white">
                <option value='1'>UK 6</option>
                <option value='2'>UK 7</option>
                <option value='3'>UK 8</option>
                <option value='4'>UK 9</option>
              </select>
            </div>
            {/* PRODUCT SIZE START */}

            {/* PRODUCT QUANTITY START */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="text-white bg-black border-white rounded-md hover:text-white">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            {/* PRODUCT QUANTITY END */}

            
          </div>
          {/* CART DELETE BUTTON  */}
          <RiDeleteBin6Line className="cursor-pointer text-red-900 hover:text-red-500 text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  )
}

export default CartItem
