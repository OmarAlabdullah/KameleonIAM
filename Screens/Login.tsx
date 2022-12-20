import {useAuth0} from 'react-native-auth0';
import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

export const LoginScreen = ({navigation}) => {
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();

  const onLogin = async () => {
    await authorize({scope: 'openid profile email'});
    const {accessToken} = await getCredentials();
    Alert.alert('AccessToken: ' + accessToken);
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession({federated: true}, {localStorageOnly: false});
  };

  return (
    <View>
      <Text>Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
      {error && <Text>{error.message}</Text>}
    </View>
  );
};
