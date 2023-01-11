import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import HeaderLogin from '../components/Login/HeaderLogin';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginScreen = () => {
  const [loginState, setLoginState] = useState(LOGIN);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#F2F2F2'}}>
      <View style={{height: '30%', width: '100%'}}>
        <HeaderLogin
          loginState={loginState}
          setLoginState={setLoginState}
          LOGIN={LOGIN}
          REGISTER={REGISTER}
        />
      </View>
      <View style={{height: '60%', width: '100%'}}>
        {loginState === LOGIN ? <Login windowWidth={windowWidth} /> : null}
        {loginState === REGISTER ? (
          <Register windowWidth={windowWidth} />
        ) : null}
      </View>
    </View>
  );
};

export default LoginScreen;
