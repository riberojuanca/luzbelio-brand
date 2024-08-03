"use client";
import { useGetFeaturedProducts } from "@/api/getProducts";
import { ResponseType } from "../../types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { ProductType } from "../../types/products";
import { Card, CardContent } from "./ui/card";
import { DollarSign, DollarSignIcon, Expand, ShoppingCart } from "lucide-react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

  const featuredProducts = Array.isArray(result) ? result : [];

  return (
    <div className=" flex flex-col items-center max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-lg sm:text-3xl uppercase font-bold sm:pb-8">
        Productos destacados
      </h3>
      <Carousel className="w-screen sm:w-full">
        <CarouselContent className=" sm:w-auto -ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {featuredProducts.length > 0
            ? featuredProducts.map((product: ProductType) => {
                const { attributes, id } = product;
                const { slug, images, productName, size, price } = attributes;
                return (
                  <CarouselItem
                    key={id}
                    className="pl-2 md:basis-1/2 lg:basis-1/3 group"
                  >
                    <div className="py-2">
                      <Card className="border-none shadow-none p-2 flex flex-col gap-2">
                        <CardContent className="relative flex items-center justify-center p-0">
                          <Image
                            className="rounded-lg max object-cover h-40"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                            alt="Image featured"
                            width={400}
                            height={600}
                          />
                          <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center items-center gap-x-4">
                              <IconButton
                                onClick={() => router.push(`product/${slug}`)}
                                icon={<Expand size={20} />}
                                className="text-gray-600"
                              />
                              <IconButton
                                onClick={() => console.log("Click en carrito")}
                                icon={<ShoppingCart size={20} />}
                                className="text-gray-600"
                              />
                            </div>
                          </div>
                        </CardContent>
                        <div className="flex justify-between">
                          <h3 className="text-base font-semibold">
                            {productName}
                          </h3>
                          <div className="flex justify-between gap-3">
                            <p>${price}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })
            : !loading && (
                <p className="m-auto mt-4 bg-luzbelio-500 text-white rounded-md p-2 text-sm">
                  No hay destacados para mostrar
                </p>
              )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
