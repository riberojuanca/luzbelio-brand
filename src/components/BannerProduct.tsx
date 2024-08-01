import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumérgete en una experiencia única</p>
        <h4 className="mt-2 text-4xl lg:text-5xl font-extrabold uppercase">
          MinimalTshirts
        </h4>
        <p className="my-2 text-lg">Despierta tu elegancia</p>
        <Link href={"#"} className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] lg:h-[650px] bg-cover bg-[url('/sliderImage.jpg')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;
