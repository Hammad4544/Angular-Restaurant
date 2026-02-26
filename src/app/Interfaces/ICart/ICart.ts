export interface ICartItem {
  cartItemId: number;
  menuItemId: number;
  menuItemName: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
  itemTotal: number;
}

export interface ICart {
  cartId: number;
  branchName: string;
  items: ICartItem[];
  subTotal: number;
  tax: number;
  deliveryFee: number;
  totalAmount: number;
}