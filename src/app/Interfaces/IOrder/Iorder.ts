export interface IOrder {
  orderId: number;
  branchId: number;
  branchName: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  items: IOrderItem[];
  paymentMethod: string;
}

export interface IOrderItem {
  menuItemId: number;
  menuItemName: string;
  quantity: number;
  unitPrice: number;
  itemTotal: number;
  imageUrl: string | null;
}
export interface IAdminOrder {
  orderId: number;
  user: string; 
  branchName: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  paymentMethod: string;
  items: IOrderItem[];
}