import React, {useCallback, useRef} from 'react';
import {View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const YourVoucher = () => {
  const [isOpen, setIsOpen] = useState(true);
  const bottomSheetRef = useRef(null);
  const snapPoints = ['80%'];
  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = () => bottomSheetRef.current.close();
  return <View></View>;
};

export default YourVoucher;
