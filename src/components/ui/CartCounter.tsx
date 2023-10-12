import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../../assets/color';

export interface CartCounterProps {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const CartCounter: FC<CartCounterProps> = ({count, onDecrement, onIncrement}): JSX.Element => {
  const renderIcon = (iconName: string, onPress: () => void) => (
    <TouchableOpacity testID={'cart-counter-button'} onPress={onPress}>
      <Ionicons name={iconName} size={22} color={COLOR.black} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderIcon('remove-outline', onDecrement)}

      <Text style={styles.count}>{count}</Text>

      {renderIcon('add-outline', onIncrement)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 2
  },
  count: {
    fontSize: 16,
    marginHorizontal: 10
  }
});

export default CartCounter;
