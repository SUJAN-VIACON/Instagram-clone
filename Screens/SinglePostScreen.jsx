import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Post from '../Components/Post'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


export default function SinglePostScreen({ route, data }) {
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    justifyContent: "center",
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={{
                        position: "absolute", left: 10, top: 0
                    }}
                >
                    <Ionicons name="chevron-back"
                        style={{ fontSize: 30, color: "black" }}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        fontFamily: 'Billabong',
                        fontSize: 30,
                        color: "black",
                        fontWeight: '600',
                        marginTop: 5
                    }}>
                    Instagram
                </Text>

            </View>
            <Post data={route.params} />
        </View>
    )
}