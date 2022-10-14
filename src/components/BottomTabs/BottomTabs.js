import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

import overlay from '../Overlay/Overlay';
import { Feed } from '../../screens/Feed/Feed';
import { Message } from '../Message/Message';
import { Notifications } from '../Notifications/Notifications';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();
  const safeArea = useSafeAreaInsets();
  const isFocused = useIsFocused();


  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={ true }
        activeColor={ theme.colors.primary }
        inactiveColor={ color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string() }
        sceneAnimationEnabled={ false }
      >
        <Tab.Screen
          name="Feed"
          component={ Feed }
          options={ {
            tabBarIcon: 'home-account',
            tabBarColor,
          } }
        />
        <Tab.Screen
          name="Notifications"
          component={ Notifications }
          options={ {
            tabBarIcon: 'bell-outline',
            tabBarColor,
          } }
        />
        <Tab.Screen
          name="Messages"
          component={ Message }
          options={ {
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          } }
        />
      </Tab.Navigator>
      <Portal>
        <FAB visible={ isFocused }
             icon={ 'feather' }
             style={ {
               position: 'absolute',
               bottom: safeArea.bottom + 65,
               right: 16,
             } }
             color="white"
             theme={ {
               colors: {
                 accent: theme.colors.primary,
               },
             } }
             onPress={ () => {
             } }
        />
      </Portal>
    </React.Fragment>
  );
};
