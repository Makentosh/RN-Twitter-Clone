import React from 'react';
import { useTheme } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../DrawerContent';
import StackNavigator from '../StackNavigator';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={ navigationTheme }>
      <Drawer.Navigator drawerContent={ (props) => <DrawerContent { ...props } /> }
                        screenOptions={ {
                          header: () => {},
                        } }>
        <Drawer.Screen name="Home" component={ StackNavigator }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
