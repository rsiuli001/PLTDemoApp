export interface Product {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

export interface ProductReduxState {
  products: Product[];
  isLoading: boolean;
  error: null | string;
}
