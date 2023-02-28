import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {ONBOARDING} from '../data/onboarding';
import Onboarding from '../components/ Onboarding/OnboardingImage';
import OnboardingFooter from '../components/ Onboarding/OnboardingFooter';
import {colors} from '../constants/theme';

const windowWidth = Dimensions.get('window').width;
const OnboardingScreen = () => {
  const [currentSate, setCurrentState] = useState(0);
  const ref = useRef();
  const updateCurrentState = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentSate = Math.round(contentOffsetX / windowWidth);
    setCurrentState(currentSate);
  };
  const nextSlider = () => {
    const nextSliderState = currentSate + 1;
    if (nextSliderState !== ONBOARDING.length) {
      const offset = nextSliderState * windowWidth;
      ref?.current?.scrollToOffset({offset});
      setCurrentState(nextSliderState);
    }
  };

  const skipSlider = () => {
    const lastSlider = ONBOARDING.length - 1;
    const offset = lastSlider * windowWidth;
    ref?.current?.scrollToOffset({offset});
    setCurrentState(lastSlider);
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.lightGray}}>
      <Onboarding
        list={ONBOARDING}
        updateCurrentState={updateCurrentState}
        ref={ref}
      />
      <OnboardingFooter
        list={ONBOARDING}
        currentSate={currentSate}
        nextSlider={nextSlider}
        skipSlider={skipSlider}
      />
    </View>
  );
};

export default OnboardingScreen;
