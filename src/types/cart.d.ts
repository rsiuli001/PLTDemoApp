import {Product} from './product';

export interface CartProduct {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface CartReduxState {
  cartProduct: CartProduct[];
  totalPrice: number;
}
