import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

const UserProfile = () => {
  return (
    <ScrollView style={{ backgroundColor: '#4FD3DA', padding: 10, paddingBottom: 0 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          backgroundColor: '#3AB4BA',
          borderRadius: 25,
          paddingVertical: 20,
        }}
      >
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, paddingBottom: 15 }}>Tender Name</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>End Time</Text>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, paddingBottom: 15 }}>Lowest Price</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>2000</Text>
        </View>
        <View>
          <TextInput
            placeholder="Bid Amount"
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}
          ></TextInput>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#fb5b5a',
              borderRadius: 25,
              marginTop: 8,
              padding: 5,

              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 16 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
