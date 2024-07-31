export type CategoriesType = {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    mainImage: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
  };
};
