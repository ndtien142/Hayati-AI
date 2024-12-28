export interface IGalleryItemProps {
  id: number;
  label: string;
  image: string;
  totalItems: number;
  completedItem: number;
  navigate: string;
}

export interface ITrophiesProps {
  id: number;
  label: string;
  description: string;
  image: string;
  totalItems: number;
  completedItem: number;
  isClaimed: boolean;
}
