import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../pages/Feed';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return(
  <Navigator initialRouteName="Feed" screenOptions={{headerShown: false}} >
    <Screen name="Feed" component={Feed} />
  </Navigator>
  );
};

export default AppStack;