/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "../../types/response";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { ProductType } from "../../types/products";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

  console.log(result);

  return (
    <div className="flex flex-col items-center max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { attributes, id } = product;
              const { slug, images, productName, size, price } = attributes;
              return (
                <CarouselItem
                  key={id}
                  className=" md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                          alt="Image featured"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => console.log("Add item")}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-base font-semibold">
                          {productName}
                        </h3>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
