import React from 'react';
import { View, Text } from 'react-native';

import Login from './screens/login/index';
import BidPage from './screens/tenderView/index';
import AllTenders from './screens/allTenders';
import AddNewTender from './screens/addNewTender';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const TenderManagement = () => {
  return (
    // <View style={{ flex: 1 }}>
    //   <Login />
    //   <BidPage />
    //   <AllTenders />
    //   <AddNewTender />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={BidPage} />
        <Stack.Screen name="User" component={AllTenders} />
        <Stack.Screen name="Exercises" component={AddNewTender} />
        {/* <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default TenderManagement;
