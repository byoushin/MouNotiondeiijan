import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimeList from './src/AnimeList';
import AnimeDetail from './src/AnimeDetail'; // AnimeDetail コンポーネントを作成する必要があります
import Review from './src/Review'; // AnimeDetail コンポーネントを作成する必要があります
import Evaluation from './src/Evaluation'; // AnimeDetail コンポーネントを作成する必要があります

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimeList">
        <Stack.Screen name="AnimeList" component={AnimeList}  options={{ headerShown: false }} />
        <Stack.Screen name="AnimeDetail" component={AnimeDetail} options={{headerShown: false}}/>
        <Stack.Screen name="Review" component={Review}  options={{headerShown: false}} />
        <Stack.Screen name="Evaluation" component={Evaluation}  options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
