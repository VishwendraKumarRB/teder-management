import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Header = () => {
  const navigation = useNavigation();

  const logoutAccount = () => {
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/bckBtn.png')} style={{ height: 30, width: 30 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <Image source={require('../assets/notification.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#fb5b5a',
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={logoutAccount}
        >
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
