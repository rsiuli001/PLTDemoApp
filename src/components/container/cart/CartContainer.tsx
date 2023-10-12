import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ShopStackParams} from '../../../navigation/shopStack';
import {CartProduct} from '../../../types/cart';
import {RootState} from '../../../redux/store';
import COLOR from '../../../../assets/color';
import {CartCounter} from '../../ui';
import {addProductToCart, removeProductToCart} from '../../../redux/cart/cartSlice';

export interface CartContainerProps extends NativeStackScreenProps<ShopStackParams, 'CartScreen'> {}

const CartContainer: FC<CartContainerProps> = (): JSX.Element => {
  const dispatch = useDispatch();

  const cartProducts: CartProduct[] = useSelector((state: RootState) => state.cart.cartProduct);
  const totalPrice: number = useSelector((state: RootState) => state.cart.totalPrice);

  const renderCartProduct = (item: CartProduct, index: number) => {
    const onIncrement = () => {
      dispatch(
        addProductToCart({product: item.product, quantity: 1, totalPrice: item.product.price})
      );
    };

    const onDecrement = () => {
      // if (item.quantity > 1)
        dispatch(
          removeProductToCart({product: item.product, quantity: 1, totalPrice: item.product.price})
        );
    };
    return (
      <View key={index} style={styles.cartProductContainer}>
        <Image style={styles.image} resizeMode={'contain'} source={{uri: item.product.img}} />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productName} numberOfLines={1} ellipsizeMode={'tail'}>
            {item.product.name}
          </Text>
          <Text style={styles.color}>Colour: {item.product.colour}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.qty}>Qty: {item.quantity}</Text>
            <Text style={styles.totalPrice}>Price: {item.totalPrice.toFixed(2)}</Text>
          </View>
          <CartCounter count={item.quantity} onDecrement={onDecrement} onIncrement={onIncrement} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {cartProducts.map((item, index) => {
        return renderCartProduct(item, index);
      })}

      <View style={styles.totalPriceContainer}>
        <Text style={styles.priceDetailsText}>PRICE DETAILS ({cartProducts.length} items)</Text>
        <View style={styles.divider} />
        <Text style={styles.totalPriceText}>Total MRP: {totalPrice.toFixed(2)}</Text>

        <View style={styles.divider} />
        <Text style={styles.grandTotalPriceText}>Total Amount: {totalPrice.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  cartProductContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.4,
    borderBottomColor: COLOR.grey,
    marginBottom: 10
  },
  image: {
    height: 120,
    width: 100
  },
  productName: {
    fontSize: 14,
    width: '70%',
    marginTop: 5
  },
  color: {
    fontSize: 12,
    width: '70%',
    color: COLOR.grey
  },
  productDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  qty: {
    fontSize: 12,
    marginRight: 70
  },
  totalPrice: {
    fontSize: 12
  },
  divider: {
    width: '90%',
    height: 1,
    borderColor: COLOR.grey,
    borderWidth: 0.2
  },
  totalPriceContainer: {
    padding: 20
  },
  priceDetailsText: {
    marginBottom: 10,
    fontWeight: '400'
  },
  totalPriceText: {
    marginTop: 20,
    marginBottom: 20,
    color: COLOR.grey,
    fontWeight: '300'
  },
  grandTotalPriceText: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '300'
  }
});

export default CartContainer;
