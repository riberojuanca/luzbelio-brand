import CarouselTextBanner from "@/components/CarouselTextBanner";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CarouselTextBanner />
      <FeaturedProducts />
    </main>
  );
}
