import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/" },
    { id: 3, name: "Categories", subMenu: true },
   { id: 4, name: "Contact", url: "/" },
];

const subMenuData = [
    { id: 1, name: "Pants", doc_count: 11 },
    { id: 2, name: "Shoes", doc_count: 8 },
    { id: 3, name: "Jackets", doc_count: 64 },
    { id: 4, name: "T-shirts", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={15} />

                                {showCatMenu && (
                                    <ul className="bg-black absolute top-6 left-0 min-w-[250px] px-1 py-1 shadow-lg">
                                        
                                            {subMenuData.map((submenu) => {
                                                return (
                                                    <Link
                                                        key={submenu.id}
                                                        href={"/"}
                                                        onClick={() => setShowCatMenu(false)
                                                        }
                                                    >
                                                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.04] rounded-md">
                                                            {submenu.name}
                                                            <span className="opacity-50 text-sm">
                                                                78
                                                            </span>
                                                        </li>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;
