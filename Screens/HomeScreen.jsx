import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import Post from '../Components/Post';

export default function HomeScreen({ navigation }) {
    const [postData, setPostData] = useState();
    const [like, setLike] = useState(true);

    useEffect(() => {
        fetch("https://www.jsonkeeper.com/b/GWPC")
            .then((response) => response.json())
            .then((data) => setPostData(data));
    }, [])

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
                <FontAwesome name="plus-square-o" style={{ fontSize: 24,color:"black" }} />
                <Text
                    style={{
                        fontFamily: 'Billabong',
                        fontSize: 30,
                        color: "black",
                        fontWeight: '600',
                    }}>
                    Instagram
                </Text>
                <Feather name="navigation" style={{ fontSize: 24 ,color:"black"}} />
            </View>

            <FlatList data={postData}
                renderItem={({ item, index }) => <Post data={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}