import {createSlice} from '@reduxjs/toolkit';
import {CartReduxState} from '../../types/cart';
import {addProductToCartReducer} from './cartActions';

const initialState: CartReduxState = {
  cartProduct: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: addProductToCartReducer
  }
});

export const {addProductToCart} = cartSlice.actions;

export default cartSlice.reducer;
