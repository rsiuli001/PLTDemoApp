import {AxiosResponse} from 'axios';
import {Product} from '../types/product';
import api from './interceptor';

const fetchProduct = async () => {
  const url = `/benirvingplt/products/products`;
  try {
    const response= await api.get(url);
    if (response.status === 200 && !!response.data) {
      return response.data;
    }
  } catch (err) {
    console.log('debug: err: ', err);
  }
};

export default fetchProduct;
