import { useFetch } from "@/useFetch";

export const useGetCategories = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const { loading, result, error } = useFetch(url);
  return { loading, result, error };
};

export const useGetFeaturedProducts = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
  const { loading, result, error } = useFetch(url);
  return { loading, result, error };
};
