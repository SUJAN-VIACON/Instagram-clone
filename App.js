
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SearchScreen from './Screens/SearchScreen';
import BottomTabScreen from './Screens/BottomTabScreen';
import SinglePostScreen from './Screens/SinglePostScreen';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomScreen" component={BottomTabScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
