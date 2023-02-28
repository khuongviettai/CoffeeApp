import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors, spacing} from '../constants/theme';

const RadioButton = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View>
      {options.map((option, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: spacing.l,
            marginVertical: spacing.s,
          }}>
          <TouchableOpacity
            style={{
              height: 22,
              width: 22,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: colors.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setSelectedOption(index)}>
            {selectedOption === index && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: colors.mainColor,
                }}
              />
            )}
          </TouchableOpacity>
          <Text style={{marginLeft: 8}}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default RadioButton;
