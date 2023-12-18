import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimeList from './src/AnimeList';
import AnimeDetail from './src/AnimeDetail'; // AnimeDetail コンポーネントを作成する必要があります

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimeList">
        <Stack.Screen name="AnimeList" component={AnimeList} />
        {/* AnimeDetail 画面のルートを追加 */}
        <Stack.Screen name="AnimeDetail" component={AnimeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
