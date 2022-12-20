import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Screens/Login';
import config from './auth0-config';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
};

export default App;
