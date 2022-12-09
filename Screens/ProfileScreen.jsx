import React from 'react';
import { View, Text, ScrollView,TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { ProfileBody } from '../Components/ProfileBody';
import ProfileContents from '../Components/ProfileContents';

export default function ProfileScreen({ route, data }) {
  const profileImage = route.params?.image ?? "https://media-exp1.licdn.com/dms/image/D4D03AQFAmGMdQqq7sA/profile-displayphoto-shrink_800_800/0/1665455965702?e=1675900800&v=beta&t=TzpF4qbyP0I4y7ZiBkT1_I7JjpAMVQuaTBn_ALMSlzg"
  const profileName = route.params?.name ?? "Sujan Moi"
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name={profileName}
          accountName={profileName}
          profileImage={{ uri: profileImage }}
          followers="1.5M"
          following="25"
          post="7"
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                  color: "black"

                }}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>

      <ProfileContents />

    </View>
  );
}