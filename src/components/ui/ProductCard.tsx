import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Product} from '../../types/product';
import COLOR from '../../../assets/color';

export interface ProductCardProps {
  data: Product;
  onPress: (data: Product) => void;
  onAddToCart: (data: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({data, onPress, onAddToCart}): JSX.Element => {
  const onCardPress = (): void => {
    onPress(data);
  };

  const onAddToCartPress = (): void => {
    onAddToCart(data);
  };
  return (
    <Pressable testID="cartProduct" onPress={onCardPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data.img
        }}
        resizeMode={'contain'}
      />
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode={'tail'}>
        {data.name}
      </Text>
      <Text style={styles.color} numberOfLines={1} ellipsizeMode={'tail'}>
        Color: {data.colour}
      </Text>
      <Text>{'\u20B9' + ' ' + data.price}</Text>
      <TouchableOpacity
        testID={'add-to-cart-button'}
        onPress={onAddToCartPress}
        style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 410,
    padding: 10,
    borderColor: COLOR.grey,
    borderWidth: 0.2,
    marginRight: 5,
    marginBottom: 5
  },
  image: {
    width: '100%',
    height: 300
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName: {
    fontSize: 12,
    width: '70%',
    marginTop: 5
  },
  icon: {
    marginRight: 20
  },
  color: {
    fontSize: 12,
    width: '70%',
    color: COLOR.grey
  },
  button: {
    borderWidth: 0.2,
    borderColor: COLOR.blue,
    backgroundColor: COLOR.blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonText: {
    color: COLOR.white,
    fontWeight: '500'
  }
});

export default ProductCard;
