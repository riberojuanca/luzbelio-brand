import { useGetProductField } from "@/api/getProducts";

export const FiltersOrigin = () => {
  const { result, loading } = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Talle</p>
    </div>
  );
};
