import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import Tweet from '../../components/Twitt';
import { twitts } from '../../data';


function renderItem({ item }) {
  return <Tweet { ...item } />;
}

function keyExtractor(item) {
  return item.id.toString();
}

export const Feed = (props) => {
  const theme = useTheme();

  const data = twitts.map(twittProps => ( {
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  } ));

  return (
    <FlatList contentContainerStyle={ { backgroundColor: theme.colors.background } }
              style={ { backgroundColor: theme.colors.background } }
              data={ data }
              renderItem={ renderItem }
              keyExtractor={ keyExtractor }
              ItemSeparatorComponent={ () => (
                <View style={ { height: StyleSheet.hairlineWidth } }/>
              ) }
    />
  );
};
