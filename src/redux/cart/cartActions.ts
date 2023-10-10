import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {CartProduct, CartReduxState} from '../../types/cart';

const addProductToCartReducer: CaseReducer<CartReduxState, PayloadAction<CartProduct>> = (
  state,
  action
) => {
  const data = action.payload;
  let found = -1;
  state.cartProduct.forEach((p, i) => {
    if (p.product.id === data.product.id) {
      found = i;
    }
  });

  if (found < 0) {
    state.cartProduct.push(data);
    state.totalPrice += data.totalPrice;
  } else {
    state.cartProduct[found].quantity += data.quantity;
    state.cartProduct[found].totalPrice += data.totalPrice;
    state.totalPrice += data.totalPrice;
  }
};

export {addProductToCartReducer};
