import {FC} from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLOR from '../../../assets/color';

export interface CartBadgeProps {
  onPress: () => void;
}

const CartBadge: FC<CartBadgeProps> = ({onPress}): JSX.Element => {
  return (
    <Pressable testID={'cart-icon'} onPress={onPress}>
      <Ionicons name={'cart-outline'} size={20} color={COLOR.white} />
    </Pressable>
  );
};

export default CartBadge;
