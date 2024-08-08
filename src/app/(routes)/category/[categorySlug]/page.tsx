"use client";
import { useGetCategoryProduct } from "@/api/getProducts";
import { useParams } from "next/navigation";
import { ResponseType } from "../../../../../types/response";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { FiltersControlsCategory } from "./components/FiltersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";
import ProductCard from "./components/ProductCard";
import { ProductType } from "../../../../../types/products";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterColor, setFilterColor] = useState("");
  const router = useRouter();

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterColor === ""
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.color === filterColor
        ));

  console.log(filteredProducts);

  return (
    <>
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        {result !== null && !loading && (
          <h1 className="text-3xl font-medium p-4">
            {result[0].attributes.category.data.attributes.categoryName}
          </h1>
        )}
        <Separator />
        <div className="sm:flex sm:justify-between">
          <FiltersControlsCategory setFilterColor={setFilterColor} />
          <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {loading && <SkeletonSchema grid={3} />}
            {filteredProducts !== null &&
              !loading &&
              filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
