import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Logout</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
