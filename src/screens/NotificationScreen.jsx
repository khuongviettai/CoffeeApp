import React from 'react';
import Notification from '../components/Notification/Notification';
import {NOTIFICATION} from '../data/notification';
import {ScrollView} from 'react-native';
import {colors} from '../constants/theme';

const NotificationScreen = () => {
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <Notification list={NOTIFICATION} />
    </ScrollView>
  );
};

export default NotificationScreen;
