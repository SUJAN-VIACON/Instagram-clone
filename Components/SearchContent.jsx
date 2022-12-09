import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';


const SearchContent = () => {
    const [postData, setPostData] = useState();

    useEffect(() => {
        fetch("https://www.jsonkeeper.com/b/GWPC")
            .then((response) => response.json())
            .then((data) => setPostData(data));
    }, [])

    if (!postData) return;

    return (
        <View>
            {postData.map((data, index) => {
                return (
                    <View key={index} style={{
                        width: '100%',
                    }}>
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: 'white',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                paddingVertical: 5,
                                justifyContent: 'space-between',
                            }}>
                            {data.images.map((imageData, imgIndex) => {
                                return (
                                    <TouchableOpacity
                                        key={imgIndex}
                                        style={{ paddingBottom: 2, width: '49.5%' }}>
                                        <Image
                                            source={{ uri: imageData }}
                                            style={{ width: '100%', height: 150 }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default SearchContent;