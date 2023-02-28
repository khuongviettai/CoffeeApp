import React from 'react';
import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {sizes} from '../../constants/theme';

const HomeLoading = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SkeletonPlaceholder>
        <View style={{alignItems: 'center', marginTop: 80}}>
          <View style={{width: '90%', height: 200, borderRadius: 18}} />
        </View>
        <SkeletonPlaceholder.Item
          marginTop={30}
          width={150}
          height={30}
          marginLeft={'5%'}
          borderRadius={12}
        />
        <SkeletonPlaceholder.Item
          marginTop={15}
          width={120}
          height={25}
          marginLeft={'5%'}
          borderRadius={sizes.radius}
        />
        <SkeletonPlaceholder.Item flexDirection={'row'}>
          <SkeletonPlaceholder.Item
            marginLeft={'5%'}
            width={sizes.width - 80}
            height={200}
            marginTop={20}
            borderRadius={sizes.radius}
          />
          <SkeletonPlaceholder.Item
            width={70}
            marginLeft={20}
            height={200}
            marginTop={20}
            borderRadius={sizes.radius}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          justifyContent={'space-between'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          width={'90%'}
          marginLeft={'5%'}>
          <SkeletonPlaceholder.Item
            width={'45%'}
            height={200}
            borderRadius={sizes.radius}
            marginTop={50}
          />
          <SkeletonPlaceholder.Item
            width={'45%'}
            height={200}
            marginVertical={50}
            borderRadius={sizes.radius}
          />
          <SkeletonPlaceholder.Item
            width={'45%'}
            height={200}
            borderRadius={sizes.radius}
          />
          <SkeletonPlaceholder.Item
            width={'45%'}
            height={200}
            borderRadius={sizes.radius}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default HomeLoading;
