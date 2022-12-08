import { View, Text } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';


export default function BottomTabScreen() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                },

                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === 'HomeScreen') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                        size = focused ? size + 8 : size + 2;
                    } else if (route.name === 'SearchScreen') {
                        iconName = focused ? 'search' : 'ios-search-outline';
                    }
                    else if (route.name === 'ProfileScreen') {
                        iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
                    }

                    return <Ionic name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    )
}