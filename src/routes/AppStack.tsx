import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../pages/Feed';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return(
  <Navigator initialRouteName="Feed" screenOptions={{headerShown: false}} >
    <Screen name="Feed" component={Feed} />
    <Screen name="PostPage" component={PostPage} />
    <Screen name="ProfilePage" component={ProfilePage} />
  </Navigator>
  );
};

export default AppStack;