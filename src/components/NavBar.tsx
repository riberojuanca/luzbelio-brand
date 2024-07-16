"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./MenuList";
import ItemsMenuMobile from "./ItemsMenuMobile";
import ToggleTheme from "./ToggleTheme";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className=" flex items-center justify-evenly p-4 mx-auto h-auto w-auto gap-4 ">
      <div className="items-center sm:flex">
        <Image
          width={736}
          height={1112}
          className="cursor-pointer h-24 w-auto pr-4"
          src={"/luzbeliologo.png"}
          alt="Luzbelio Brand logo"
          onClick={() => router.push("/")}
        ></Image>
        <div className="hidden sm:flex">
          <MenuList />
        </div>
      </div>
      <div className=" flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-4 sm:gap-7">
        <ShoppingCart
          size={20}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          size={20}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />

        <User
          size={20}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default NavBar;
