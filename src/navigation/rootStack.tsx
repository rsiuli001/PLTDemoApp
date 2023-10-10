import {FC} from 'react';
import ShopStack from './shopStack';

const RootStack: FC = (): JSX.Element => {
  // this can toggle between Auth stack or post auth stack
  // based on authentication state.
  return <ShopStack />;
};

export default RootStack;
