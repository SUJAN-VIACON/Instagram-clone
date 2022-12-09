import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import PostImageCarousel from './PostImageCarousel';
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function Post({ data }) {
    const navigation = useNavigation();
    const [like, setLike] = useState(false)
    const [imageActive, setImageActive] = useState(0);

    const truncate = (str, n) => {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };

    const getPostTime =(timeStamp)=>{
        console.log(timeStamp);
        // const time = moment.utc(timeStamp).local().startOf('seconds').fromNow();
    }

    return (
        <View
            style={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.1,
            }}>
            {/* meta data about user */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate(
                    "ProfileScreen", { image: data.profile_picture, name: data.name }
                )}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Image
                            source={{ uri: data.profile_picture }}
                            style={{ width: 40, height: 40, borderRadius: 100 }}
                        />

                        <View style={{ paddingLeft: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "black" }}>
                                {data.name}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Feather name="more-vertical" style={{ fontSize: 20 }} color="black" />
            </View>

            {/* post image */}

            <View
                style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <PostImageCarousel imageActive={imageActive} setImageActive={setImageActive} data={data} />
            </View>

            {/* like and comments */}

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 15,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <AntDesign
                            name={like ? 'heart' : 'hearto'}
                            style={{
                                paddingRight: 10,
                                fontSize: 20,
                                color: like ? 'red' : 'black',
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather
                            name="message-circle"
                            style={{ fontSize: 20, paddingRight: 10, color: "black", }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="navigation" style={{ fontSize: 20, color: "black" }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginRight: 55 }}>
                    {data.images.length > 1 &&
                        data.images.map((image, index) => (
                            <Text
                                key={image}
                                style={imageActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        ))
                    }
                </View>

                <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000000" }}>
                    {like ? data.like_count + 1 : data.like_count} Likes
                </Text>

                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: 14,
                        paddingVertical: 2,
                        color: "black"
                    }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, }}>userna </Text>
                    {truncate(data?.comment, 74)}
                    {data?.comment.length > 74 ?
                        (
                            <Text style={{ color: "gray" }}>more</Text>
                        ) : ''}
                </Text>
            </View>

            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://media-exp1.licdn.com/dms/image/D4D03AQFAmGMdQqq7sA/profile-displayphoto-shrink_800_800/0/1665455965702?e=1675900800&v=beta&t=TzpF4qbyP0I4y7ZiBkT1_I7JjpAMVQuaTBn_ALMSlzg' }}
                        style={{
                            width: 25,
                            height: 25,
                            borderRadius: 100,
                            backgroundColor: 'orange',
                            marginRight: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Add comment..."
                        style={{ opacity: 0.5 }}
                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 12, color: "white" }}>
                        😍
                    </Text>
                    <Text style={{ marginRight: 12, color: "white" }}>
                        😭
                    </Text>
                    <AntDesign
                        name="pluscircleo"
                        style={{ fontSize: 15, color: 'gray' }}
                    />
                </View>
            </View>

            {getPostTime(data.post_time)}

        </View>
    );
}

const styles = StyleSheet.create({
    dotActive: {
        margin: 3,
        color: "#32B5FF"
    },
    dot: {
        margin: 3,
        color: "#888"
    }
})