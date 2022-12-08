import {View, Text, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Stories from '../screenComponents/Stories';
// import Post from '../screenComponents/Post';
import React from 'react';
import Post from '../Components/Post';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                animated={true}
            />
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                }}>
                <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
                <Text
                    style={{
                        fontFamily: 'Billabong',
                        fontSize: 25,
                        color:"black",
                        fontWeight: '500',
                    }}>
                    Instagram
                </Text>
                <Feather name="navigation" style={{ fontSize: 24 }} />
            </View>

            <ScrollView>
                {/* <Stories /> */}
                <Post />
                <View
                    style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Ionic
                        name="ios-reload-circle-sharp"
                        style={{ fontSize: 60, opacity: 0.2 }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}