import {useAuth0} from 'react-native-auth0';
import {Image, Text, View} from 'react-native';

export const Profile = () => {
  const {user} = useAuth0();

  return (
    <View>
      {user && <Text>Logged in as {user.name}</Text>}
      {user && <Text>Email: {user.email}</Text>}
      {user && <Image source={{uri: user.picture}} />}
      {!user && <Text>Not logged in</Text>}
    </View>
  );
};
