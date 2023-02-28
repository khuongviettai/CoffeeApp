import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/theme';

const windowHeight = Dimensions.get('window').height;
const OnboardingFooter = ({list, currentSate, nextSlider, skipSlider}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: windowHeight * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {list.map((item, index) => {
          return (
            <View
              style={[
                {
                  height: 3.5,
                  width: 10,
                  backgroundColor: 'gray',
                  marginHorizontal: 3,
                  borderRadius: 2,
                },
                currentSate === index && {
                  backgroundColor: colors.white,
                  width: 25,
                },
              ]}
              key={index}></View>
          );
        })}
      </View>
      <View style={{marginBottom: 50}}>
        {currentSate === list.length - 1 ? (
          <View style={{height: 50}}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Root')}>
              <Text style={{fontWeight: 'bold'}}>Bắt Đầu</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'white',
              }}
              onPress={skipSlider}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>SKIP</Text>
            </TouchableOpacity>
            <View style={{width: 15}} />
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={nextSlider}>
              <Text style={{fontWeight: 'bold'}}>NEXT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnboardingFooter;
