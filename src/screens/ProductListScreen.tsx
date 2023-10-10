import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {ShopStackParams} from '../navigation/shopStack';
import {StyleSheet, Text, View} from 'react-native';
import {ProductListContainer} from '../components/container';

export interface ProductListScreenProps
  extends NativeStackScreenProps<ShopStackParams, 'ProductListScreen'> {}

const ProductListScreen: FC<ProductListScreenProps> = (props): JSX.Element => {
  console.log('debug: ProductListScreen:');
  return (
    <View style={styles.container}>
      <ProductListContainer {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProductListScreen;
