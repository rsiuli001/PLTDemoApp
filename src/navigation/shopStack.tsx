import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLOR from '../../assets/color';
import {CartScreen, ProductListScreen} from '../screens';

export type ShopStackParams = {
  CartScreen: undefined;
  ProductListScreen: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<ShopStackParams>();

const ShopStack: FC = (): JSX.Element => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      // headerShown: false,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: COLOR.white,
        fontWeight: '400',
        fontSize: 16
      },
      headerStyle: {
        backgroundColor: COLOR.black
      },
      headerTintColor: COLOR.white
    }}
    initialRouteName={'ProductListScreen'}>
    <Screen
      name={'ProductListScreen'}
      options={{headerTitle: 'Product List'}}
      component={ProductListScreen}
    />
    <Screen name={'CartScreen'} options={{headerTitle: 'Cart'}} component={CartScreen} />
  </Navigator>
);

export default ShopStack;
