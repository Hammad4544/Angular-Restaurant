export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
  branchId: number;
  isAvailable: boolean;
}