import {useAuth0} from 'react-native-auth0';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {Profile} from './Profile';

export const LoginScreen = ({}) => {
  const {authorize, user, clearSession, getCredentials, error} = useAuth0();

  const onLogin = async () => {
    await authorize({scope: 'openid profile email'});
    const {accessToken} = await getCredentials();
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession();
  };

  return (
    <View>
      <Text>Login </Text>
      <Profile />
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
      {error && <Text>{error.message}</Text>}
    </View>
  );
};
