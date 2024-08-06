import useFetch from "@/useFetch";

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

export function useGetCategoryProduct(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const { loading, result, error } = useFetch(url);
  return { loading, result, error };
}

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
  const { loading, result, error } = useFetch(url);
  return { loading, result, error };
}
