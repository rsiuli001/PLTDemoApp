import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLOR from '../../../assets/color';

export interface CartBadgeProps {
  numberOfItems: number;
  onPress: () => void;
}

const CartBadge: FC<CartBadgeProps> = ({numberOfItems, onPress}): JSX.Element => {
  const renderBadge = (): JSX.Element => <Text style={styles.badgeText}>{numberOfItems}</Text>;

  return (
    <Pressable style={styles.container} testID={'cart-icon'} onPress={onPress}>
      <Ionicons name={'cart-outline'} size={20} color={COLOR.white} />
      {numberOfItems > 0 && renderBadge()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 10
  },
  badgeText: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: COLOR.red
  }
});

export default CartBadge;
