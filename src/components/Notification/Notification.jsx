import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {colors, spacing} from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const Notification = ({list}) => {
  useEffect(() => {
    (async () => {
      await requestUserPermission();
    })();
  }, []);

  const [listData, setListData] = useState(
    list.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      desc: NotificationItem.desc,
      image: NotificationItem.image,
      date: NotificationItem.date,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {};

  const onLeftActionStatusChange = rowKey => {};

  const onRightActionStatusChange = rowKey => {};

  const onRightAction = rowKey => {};

  const onLeftAction = rowKey => {};

  const VisibleItem = props => {
    const {data, rowHeightAnimatedValue, removeRow, rightActionState} = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View>
        <TouchableHighlight>
          <View
            style={{
              marginHorizontal: spacing.m,
              marginTop: spacing.m,
              backgroundColor: colors.white,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={data.item.image}
                style={{width: 60, height: 60, borderRadius: 10}}
              />
              <View style={{flex: 1, marginLeft: spacing.m}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.item.title}
                  </Text>
                  <Text style={{color: colors.gray}}>{data.item.date}</Text>
                </View>
                <Text
                  style={{
                    marginTop: spacing.s,
                    color: '#444444',
                    fontSize: 13,
                  }}>
                  {data.item.desc}
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View
        style={[
          {
            alignItems: 'center',
            backgroundColor: colors.white,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: spacing.m,
            marginTop: spacing.m,
          },
          {height: rowHeightAnimatedValue},
        ]}>
        {!leftActionActivated && (
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              bottom: 0,
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              width: 75,
              paddingRight: 17,
              backgroundColor: '#1f65ff',
              right: 75,
            }}
            onPress={onClose}>
            <MaterialCommunityIcons
              name="close"
              size={25}
              style={{height: 25, width: 25, marginRight: 7}}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        {!leftActionActivated && (
          <Animated.View
            style={[
              {
                alignItems: 'flex-end',
                bottom: 0,
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                width: 75,
                paddingRight: 17,
              },
              {
                backgroundColor: 'red',
                right: 0,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              },

              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <TouchableOpacity
              style={[
                {
                  alignItems: 'flex-end',
                  bottom: 0,
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 0,
                  width: 75,
                  paddingRight: 17,
                },
                {
                  backgroundColor: 'red',
                  right: 0,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                },
              ]}
              onPress={onDelete}>
              <Animated.View
                style={[
                  {height: 25, width: 25, marginRight: 7},
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                <Feather name="trash" size={25} color="#fff" />
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <SwipeListView
        scrollEnabled={false}
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
};

export default Notification;
