import {createSlice} from '@reduxjs/toolkit';
import {ProductReduxState} from '../../types/product';
import {fetchProductReducer} from './productActions';

const initialState: ProductReduxState = {
  products: [],
  isLoading: false,
  error: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProductReducer.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductReducer.fulfilled, (state, action) => {
      console.log('debug: action: ', action);
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductReducer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Error';
    });
  }
});

export default productSlice.reducer;
