export type FiltersType = {
  result: ResultFilterTypes | null;
  loading: boolean;
  error: string | null;
};

export type ResultFilterTypes = {
  schema: {
    attributes: {
      color: {
        enum: any;
      };
    };
  };
};
