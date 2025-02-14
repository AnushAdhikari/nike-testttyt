import Hero from "@/components/Hero";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";
export default function Home() {

  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   fetchProduct();
  // }, [])

  // const fetchProduct = async () => {
  //   const { data } = await fetchDataFromApi("/api/products")
  //   setData(data)
  // }

  return (
    <main>
      <Hero />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[25px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with
            increased stack heights to help provide cushioning
            during extended stretches of running.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
        {/* products grid */}
      </Wrapper>
    </main>
  );
}
