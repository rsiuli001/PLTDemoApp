import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {ShopStackParams} from '../../../navigation/shopStack';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CartProduct} from '../../../types/cart';
import {RootState} from '../../../redux/store';
import COLOR from '../../../../assets/color';

export interface CartContainerProps extends NativeStackScreenProps<ShopStackParams, 'CartScreen'> {}

const CartContainer: FC<CartContainerProps> = (): JSX.Element => {
  const cartProducts: CartProduct[] = useSelector((state: RootState) => state.cart.cartProduct);
  const totalPrice: number = useSelector((state: RootState) => state.cart.totalPrice);

  const renderCartProduct = (item: CartProduct, index: number) => {
    return (
      <View style={styles.cartProductContainer}>
        <Image style={styles.image} resizeMode={'contain'} source={{uri: item.product.img}} />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.productName} numberOfLines={1} ellipsizeMode={'tail'}>
            {item.product.name}
          </Text>
          <Text style={styles.color}>Colour: {item.product.colour}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.qty}>Qty: {item.quantity}</Text>
            <Text style={styles.totalPrice}>Price: {item.totalPrice}</Text>
          </View>
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
        <Text style={styles.totalPriceText}>Total MRP: {Math.floor(totalPrice)}</Text>

        <View style={styles.divider} />
        <Text style={styles.grandTotalPriceText}>Total Amount: {Math.floor(totalPrice)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cartProductContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.2,
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
