
import React, { useState, useEffect } from 'react'
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    // const controlNavbar = () => {
    //     if (window.scrollY > 200) {
    //         if (window.scrollY > lastScrollY && !mobileMenu) {
    //             setShow("-translate-y-[80px]");
    //         } else {
    //             setShow("shadow-sm");
    //         }
    //     } else {
    //         setShow("translate-y-0");
    //     }
    //     setLastScrollY(window.scrollY);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", controlNavbar);
    //     return () => {
    //         window.removeEventListener("scroll", controlNavbar);
    //     };
    // }, [lastScrollY]);


    return (
        <header
            className={`w-full h-[50px] md:h-[80px] 
            flex 
            items-center 
            justify-between 
            z-20 
            sticky 
            top-0
            bg-stone-900 
            transition-transform duration-300 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href="/">
                    {/* <img src="/" className="w-[40px] md:w-[60px]" /> */}
                </Link>
                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}


                <div className="flex items-center gap-2 text-black">
                    {/*  start of Icon */}
                    <div className="w-8 md:w-12 h-8 text-white md:h-12 
                    rounded-full flex justify-center items-center 
                    hover:bg-black/[0.06] cursor-pointer 
                    relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] 
                        rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                        text-[10px] md:text-[12px] flex justify-center items-center px-[2px] 
                        md:px-[5px]">
                            5
                        </div>
                    </div>
                    {/* END OF ICON */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 text-white h-8 md:h-12 
                        rounded-full flex justify-center items-center 
                        hover:bg-black/[0.06] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {/* {cartItems.length > 0 && ( */}
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] 
                                rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                                text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                {/* {cartItems.length} */}3
                            </div>
                            {/* // )} */}
                        </div>
                    </Link>
                    {/* Icon end */}

                    {/* Mobile icon  */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full 
                    flex md:hidden justify-center items-center
                     hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <GrClose 
                                className="text-[20px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <GiHamburgerMenu  
                                className="text-[25px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon  */}
                </div>
            </Wrapper>


        </header>
    )
}

export default Header
