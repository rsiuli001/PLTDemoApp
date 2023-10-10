import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {ShopStackParams} from '../navigation/shopStack';
import {StyleSheet, View} from 'react-native';
import {CartContainer} from '../components/container';

export interface CartScreenProps extends NativeStackScreenProps<ShopStackParams, 'CartScreen'> {}

const CartScreen: FC<CartScreenProps> = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <CartContainer {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CartScreen;
