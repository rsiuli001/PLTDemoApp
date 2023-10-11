import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useCallback, useEffect, useLayoutEffect} from 'react';
import {ShopStackParams} from '../../../navigation/shopStack';
import {ActivityIndicator, FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchProductReducer} from '../../../redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {Product} from '../../../types/product';
import {ProductCard} from '../../ui';
import CartBadge from '../../ui/CartBadge';
import {addProductToCart} from '../../../redux/cart/cartSlice';

export interface ProductListContainerProps
  extends NativeStackScreenProps<ShopStackParams, 'ProductListScreen'> {}

const ProductListContainer: FC<ProductListContainerProps> = ({navigation}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector((state: RootState) => state.product.isLoading);
  const products = useSelector((state: RootState) => state.product.products);
  const itemsOnCart = useSelector((state: RootState) => state.cart.cartProduct.reduce((acc, curr) => acc + curr.quantity, 0));

  const navigateToCart = useCallback(() => {
    navigation.navigate('CartScreen');
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartBadge numberOfItems={itemsOnCart} onPress={navigateToCart} />
    });
  }, [itemsOnCart, navigateToCart]);

  useEffect(() => {
    dispatch(fetchProductReducer());
  }, [dispatch]);

  const onProductCardPress = (data: Product): void => {
    // In case product-display page is created,
    // this can be used to navigate to the page.
    // console.log('debug: onProductCardPress: ', data);
  };

  const onAddToCartPress = (data: Product): void => {
    dispatch(addProductToCart({product: data, quantity: 1, totalPrice: data.price}));
  };

  const renderLoading = (): JSX.Element => (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  );

  const renderProductList: ListRenderItem<Product> = ({item, index}) => {
    return <ProductCard data={item} onPress={onProductCardPress} onAddToCart={onAddToCartPress} />;
  };

  const keyExtractor = (item: Product): string => item.id.toString();

  return (
    <View style={styles.container}>
      {isLoading ? (
        renderLoading()
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          data={products}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={renderProductList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    justifyContent: 'space-around'
  }
});

export default ProductListContainer;
