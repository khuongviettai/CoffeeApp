import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, spacing} from '../../constants/theme';

const ShowSearch = ({items}) => {
  const [index, setIndex] = useState();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: spacing.l,
          paddingBottom: spacing.l,
        }}>
        {items.map((tab, i) => {
          const active = index === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={{marginLeft: spacing.l}}>
              <Text
                style={
                  active ? {color: colors.mainColor} : {color: colors.primary}
                }>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ShowSearch;
