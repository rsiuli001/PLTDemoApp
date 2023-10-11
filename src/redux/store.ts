import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';
import createDebugger from 'redux-flipper';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false}).concat(createDebugger())
      : getDefaultMiddleware({
          serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
