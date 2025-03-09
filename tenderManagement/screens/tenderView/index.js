import { View, Text, SafeAreaView, Image, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './tenderViewStyles';
// import Modal from './Modal';

const TenderDetails = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  // const toggleModal = () => setVisible(!visible);

  return (
    <SafeAreaView style={styles.bidContainer}>
      <Text style={styles.productName}>Tender Name </Text>
      <Text style={styles.productDetails}>Tender Details</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}> Start Time</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'green' }}>10:13</Text>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}> End Time</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'red' }}>23:13</Text>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Buffer Time</Text>
      </View>
    </SafeAreaView>
  );
};

export default TenderDetails;
