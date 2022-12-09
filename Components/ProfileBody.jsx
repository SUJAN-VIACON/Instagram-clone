import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: "black" 
              }}>
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
                color: "black" 
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
                color: "black" 
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
                color: "black" 
              }}
            />
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
              color: "black" 
            }}>
            {name}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color: "black" }}>{post}</Text>
          <Text style={{color: "black" }}>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color: "black" }}>{followers}</Text>
          <Text style={{color: "black" }}>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color: "black" }}>{following}</Text>
          <Text style={{color: "black" }}>Following</Text>
        </View>
      </View>
    </View>
  );
};

