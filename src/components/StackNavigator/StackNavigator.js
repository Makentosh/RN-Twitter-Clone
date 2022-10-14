import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Details } from '../../screens/Details/Details';
import BottomTabs from '../BottomTabs';

const Stack = createStackNavigator();

const Header = ({ previous, navigation }) => {
  const theme = useTheme();

  return (
    <Appbar.Header theme={ { colors: { primary: theme.colors.surface } } }>
      { previous && (
        <Appbar.BackAction
          onPress={ navigation.goBack }
          color={ theme.colors.primary }
        />
      ) }

      <View style={ styles.appBarContent }>
        <TouchableOpacity style={ { marginLeft: 10 } }
                          onPress={ () => {
                            navigation.openDrawer();
                          } }>
          <Avatar.Image
            size={ 40 }
            source={ {
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            } }
          />
        </TouchableOpacity>

        <MaterialCommunityIcons name="twitter"
                                size={ 40 }
                                color={ theme.colors.primary }/>

        <MaterialCommunityIcons name="qrcode"
                                size={ 40 }/>
      </View>


    </Appbar.Header>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FeedList"
                     screenOptions={ {
                       headerMode: 'screen',
                       header: Header,
                     } }>
      <Stack.Screen name="FeedList"
                    component={ BottomTabs }
                    options={ ({ route }) => {
                      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
                      return { headerTitle: routeName };
                    } }/>
      <Stack.Screen name="Details"
                    component={ Details }
                    options={ { headerTitle: 'Twitt' } }/>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  appBarContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  }
});
