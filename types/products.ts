export type ProductType = {
  id: number;
  attributes: {
    active: boolean;
    category: {
      data: {
        attributes: {
          categoryName: string;
          slug: string;
          id: number;
        };
      };
    };
    color: string;
    description: string;
    images: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    isFeatured: string;
    price: number;
    producName: string;
    size: string;
    slug: string;
  };
};
