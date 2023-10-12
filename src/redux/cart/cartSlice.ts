import {createSlice} from '@reduxjs/toolkit';
import {CartReduxState} from '../../types/cart';
import {addProductToCartReducer, removeProductToCartReducer} from './cartActions';

const initialState: CartReduxState = {
  cartProduct: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: addProductToCartReducer,
    removeProductToCart: removeProductToCartReducer
  }
});

export const {addProductToCart, removeProductToCart} = cartSlice.actions;

export default cartSlice.reducer;
