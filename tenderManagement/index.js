import React from 'react';

import Login from './screens/login/index';
import AllTenders from './screens/allTenders';
import AddNewTender from './screens/addNewTender';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TenderDetails from './screens/tenderView/index';
import UserProfile from './screens/userProfile';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

const Stack = createNativeStackNavigator();

const TenderManagement = () => {
  const selectedUser = useSelector(({ data }) => data.selectedUser);

  const initialRouteName = isEmpty(selectedUser) ? 'AllTenders' : 'AllTenders';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
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
