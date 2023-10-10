import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProduct} from '../../api';

const fetchProductReducer = createAsyncThunk('product/fetchProduct', async () => {
  const products = await fetchProduct();
  return products;
});

export {fetchProductReducer};
