import React from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OnboardingImage = React.forwardRef(({list, updateCurrentState}, ref) => {
  return (
    <FlatList
      data={list}
      horizontal
      ref={ref}
      pagingEnabled
      onMomentumScrollEnd={updateCurrentState}
      contentContainerStyle={{height: windowHeight * 0.75}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <View key={index} style={{alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{height: '75%', width: windowWidth}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 30,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                marginTop: 5,
                maxWidth: '80%',
                textAlign: 'center',
                lineHeight: 23,
              }}>
              {item.subtitle}
            </Text>
          </View>
        );
      }}
    />
  );
});

export default OnboardingImage;
