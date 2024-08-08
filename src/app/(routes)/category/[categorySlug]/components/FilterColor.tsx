import { useGetProductField } from "@/api/getProducts";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersType } from "../../../../../../types/filters";

export type FilterOriginProps = {
  setFilterColor: (color: string) => void;
};

export const FiltersColor = (props: FilterOriginProps) => {
  const { result, loading }: FiltersType = useGetProductField();

  const { setFilterColor } = props;

  return (
    <div className="my-5 p-4 md:py-0">
      <p className="mb-3 font-bold">Color</p>
      {loading && result === null && <p>cagrando colores...</p>}
      <RadioGroup
        onValueChange={(value) => {
          setFilterColor(value);
        }}
      >
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
