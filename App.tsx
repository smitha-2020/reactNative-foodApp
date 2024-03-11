/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {CategoriesList} from './src/screens/CategoriesList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'oldlace', flex: 1}}>
      <View>
        <CategoriesList />
      </View>
    </SafeAreaView>
  );
}

export default App;
