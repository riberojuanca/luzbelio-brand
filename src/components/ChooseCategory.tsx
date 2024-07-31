"use client";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "../../types/response";
import Link from "next/link";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();
  console.log(result);

  return <div>ChooseCategory</div>;
};

export default ChooseCategory;
