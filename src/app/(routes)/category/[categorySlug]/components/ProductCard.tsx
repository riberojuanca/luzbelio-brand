import Link from "next/link";
import { ProductType } from "../../../../../../types/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  const router = useRouter();

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 w-full rounded-xl hover:shadow-md flex flex-col justify-start items-center"
    >
      <div className="absolute flex items-center justify-between z-[1] top-4 left-4 gap-1">
        <p className="p-2 text-xs text-white bg-black rounded-md dark:bg-white dark:text-black w-fit">
          {product.attributes.size}
        </p>
        <p className="p-2 text-xs text-white bg-luzbelio-500 rounded-md w-fit">
          {product.attributes.color}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group flex justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                width={600}
                height={600}
                alt="Image"
                className="rounded-xl min-h-40 w-full object-cover"
              />
              <div className="absolute px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-4">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => console.log("product")}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-lg text-center">{product.attributes.productName}</p>
      <p className="font-bold text-center">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
