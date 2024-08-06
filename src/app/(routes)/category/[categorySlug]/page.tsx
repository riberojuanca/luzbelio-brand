"use client";
import { useGetCategoryProduct } from "@/api/getProducts";
import { useParams } from "next/navigation";
import { ResponseType } from "../../../../../types/response";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { FiltersControlsCategory } from "./components/FiltersControlsCategory";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const router = useRouter();

  return (
    <>
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        {result !== null && !loading && (
          <h1 className="text-3xl font-medium">
            {result[0].attributes.category.data.attributes.categoryName}
          </h1>
        )}
        <Separator />
        <div className="sm:flex sm:justify-between">
          <FiltersControlsCategory />
        </div>
      </div>
    </>
  );
}
