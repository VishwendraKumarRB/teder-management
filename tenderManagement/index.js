import React from 'react';
import { View, Text } from 'react-native';

import Login from './screens/login/index';
import AllTenders from './screens/allTenders';
import AddNewTender from './screens/addNewTender';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TenderDetails from './screens/tenderView/index';
import UserProfile from './screens/userProfile';

const Stack = createNativeStackNavigator();
const TenderManagement = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="TenderDetails" component={TenderDetails} options={{ headerShown: false }} />
        <Stack.Screen name="AllTenders" component={AllTenders} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewTender" component={AddNewTender} options={{ headerShown: false }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default TenderManagement;
