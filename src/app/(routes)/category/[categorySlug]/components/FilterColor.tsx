import { useGetProductField } from "@/api/getProducts";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersType } from "../../../../../../types/filters";

export const FiltersColor = () => {
  const { result, loading }: FiltersType = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Color</p>
      {loading && result === null && <p>cagrando colores...</p>}
      <RadioGroup>
        {result !== null &&
          result.schema.attributes.color.enum.map((color: string) => (
            <div key={color} className="flex items-center space-x-2">
              <RadioGroupItem value={color} id={color} />
              <Label htmlFor={color}>{color}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};
