import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Menu />
        </PopoverTrigger>
        <PopoverContent>
          <Link href={"/categories/Tshirts"} className="block">
            Remeras
          </Link>
          <Link href={"/categories/Pants"} className="block">
            Pantalones
          </Link>
          <Link href={"/categories/Caps"} className="block">
            Gorras
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default ItemsMenuMobile;
