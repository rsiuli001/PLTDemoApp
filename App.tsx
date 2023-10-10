import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RootStack} from './src/navigation';
import {Provider} from 'react-redux';
import COLOR from './assets/color';
import {store} from './src/redux';

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootStack></RootStack>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black
  }
});

export default App;
