import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get('screen').width;

export default function PostImageCarousel({ imageActive, setImageActive, data }) {
    const navigation = useNavigation();
    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imageActive) {
                setImageActive(slide);
            }
        }
    }
    return (
        <View style={{ width: WIDTH, height: 400 }}>
            <ScrollView
                onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={{ width: WIDTH, height: 400 }}
            >
                {
                    data.images.map((image, index) => (
                        <TouchableOpacity
                            key={image}
                            onPress={() => navigation.navigate(
                                'SinglePostScreen', data
                            )}>

                            <Image
                                style={{ resizeMode: 'cover', width: WIDTH, height: 400 }}
                                source={{ uri: image }}
                            />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>


        </View>


    )
}

