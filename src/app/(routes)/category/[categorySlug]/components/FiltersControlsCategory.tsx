import { FiltersColor } from "./FilterColor";

export type FilterControlsCategoryProps = {
  setFilterColor: (color: string) => void;
};

export const FiltersControlsCategory = (props: FilterControlsCategoryProps) => {
  const { setFilterColor } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5">
      <FiltersColor setFilterColor={setFilterColor} />
    </div>
  );
};
