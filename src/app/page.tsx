import BannerDiscount from "@/components/BannerDiscount";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
    </main>
  );
}
