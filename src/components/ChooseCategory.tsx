"use client";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "../../types/response";
import Link from "next/link";
import { CategoriesType } from "../../types/categories";
import Image from "next/image";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  const categories = Array.isArray(result) ? result : [];

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-2 pb-4 text-xl sm:pb-8">Elige tu categoría favorita</h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          categories !== undefined &&
          categories.map((category: CategoriesType) => (
            <Link
              key={category.id}
              href={`/category/${category.attributes.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage.data.attributes.url}`}
                alt={`${category.attributes.categoryName}`}
                className="max-w-[270px] h-96 object-cover transition duration-300 ease-in-out rounded-lg hover:scale-110"
                width={400}
                height={600}
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {category.attributes.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
