import React, {useState} from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import HeaderLogin from '../components/Account/HeaderLogin';
import Login from '../components/Account/Login';
import Register from '../components/Account/Register';
import {useNavigation} from '@react-navigation/native';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const windowWidth = Dimensions.get('window').width;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loginState, setLoginState] = useState(LOGIN);
  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{width: '100%', height: '100%', backgroundColor: '#F2F2F2'}}>
          <View style={{height: '30%', width: '100%'}}>
            <HeaderLogin
              loginState={loginState}
              setLoginState={setLoginState}
              LOGIN={LOGIN}
              REGISTER={REGISTER}
            />
          </View>
          <View style={{height: '60%', width: '100%'}}>
            {loginState === LOGIN ? (
              <Login windowWidth={windowWidth} navigation={navigation} />
            ) : null}
            {loginState === REGISTER ? (
              <Register windowWidth={windowWidth} />
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;
