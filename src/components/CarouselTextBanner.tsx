"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

//Objects Array
export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío gratis",
    description:
      "Como cliente VIP, tus envíos en 24/48 horas. Obten más información y únete.",
    link: "#",
  },
  {
    id: 2,
    title: "Descuento de 25%",
    description:
      "Consigue hasta un 25% de descuento en compras superiores a $50.",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description: "Entregas gratuitas dentro de las 48hs.",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades al %50 de descuento.",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className=" bg-luzbelio-100  dark:bg-secondary">
      <Carousel
        className="w-full max-w-4xl mx-auto "
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className=" cursor-pointer"
            >
              <div>
                <Card className="text-white shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className=" sm:text-lg text-wrap">{title}</p>
                    <p className=" text-xs sm:text-sm text-wrap">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
