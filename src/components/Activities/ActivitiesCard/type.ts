type Cart = {
  name: string;
  poster: string;
};

export type ActivitiesCardProps = {
  item: Cart;
  isActive?: boolean;
  setIsActive: () => void;
};
