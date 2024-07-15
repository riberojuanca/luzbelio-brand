"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./MenuList";

const NavBar = () => {
  const router = useRouter();

  return (
    <header className="bg-blue-800  flex items-center justify-between p-4  h-16 w-full gap-4  fixed bg-libertad-200">
      {/* <h1 className="text-amber-400 p-1 font-extrabold text-2xl">Luzbelio</h1> */}
      <Image
        width={500}
        height={500}
        className="cursor-pointer pt-4 w-24 h-auto grayscale"
        src={"/luzbelioLogo.png"}
        alt="Luzbelio Brand logo"
        onClick={() => router.push("/")}
      ></Image>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className=" flex sm:hidden">Items Menu Mobile</div>
      <nav className="text-white p-1 flex items-center justify-between text-base">
        <ul className="flex items-center justify-between gap-4 sm:gap-7">
          <li className="cursor-pointer" onClick={() => router.push("/cart")}>
            <ShoppingCart size={20} />
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/favorites")}
          >
            <Heart size={20} />
          </li>
          <li className="cursor-pointer" onClick={() => router.push("/user")}>
            <User size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
