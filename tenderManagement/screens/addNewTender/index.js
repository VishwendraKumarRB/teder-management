import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './addNewTenderStyles';
const AddNewTender = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>Tender Name : </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Enter Tender Name" placeholderTextColor="#003f5c" />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, paddingTop: 0 }}>Tender Description : </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Enter Tender Description" placeholderTextColor="#003f5c" />
      </View>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, paddingTop: 0 }}>Start Date : </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Start Date:" placeholderTextColor="#003f5c" />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, paddingTop: 0 }}>End Date : </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="End Date" placeholderTextColor="#003f5c" />
      </View>
      {/* </View> */}
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, paddingTop: 0 }}>Buffer Time</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SAVE </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewTender;
