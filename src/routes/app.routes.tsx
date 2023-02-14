import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Details,
  Home,
} from '../screens';

import logo from '../assets/logo.png';

import {
  THEME,
} from '../theme';

const {
  Navigator,
  Screen,
} = createNativeStackNavigator();

const Header = ({ back, navigation, route }: NativeStackHeaderProps ): React.ReactNode => {
  const pokemon = route.params as Pokemon;

  let mainType = null;

  if( pokemon ) {
    mainType = pokemon.types.find(( type ) => type.id === 1 )?.name;
  }

  const styles = StyleSheet.create({
    headerView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      paddingVertical: 5,
      backgroundColor: mainType ? THEME.TYPES[ mainType ].main : THEME.COLORS.PRIMARY,
    },
  });

  return (
    <View style={ styles.headerView }>
      {
        back && (
          <TouchableOpacity
            onPress={ navigation.goBack }
            style={{
              position: 'absolute',
              top: 25,
              left: 16,
            }}
          >
            <Icon
              name="arrow-left"
              size={ 24 }
              color="#FFF"
            />
          </TouchableOpacity>
        )
      }

      <Image
        source={ logo }
        style={{
          height: 65,
        }}
      />

      <View
        style={{
          width: 24,
          height: 24,
        }}
      />
    </View>
  );
};

export const AppRoutes = () => {
  return (
    <Navigator
     screenOptions={{
        header: Header,
     }}
    >
      <Screen
        name="home"
        component={ Home }
      />

      <Screen
        name="details"
        component={ Details }
        options={{
          header: Header,
        }}
      />
    </Navigator>
  );
};
