import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AllTenders = () => {
  const navigation = useNavigation();

  const newTender = () => {
    navigation.navigate('AddNewTender');
  };
  const tenderDetails = () => {
    navigation.navigate('TenderDetails');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#4FD3DA', paddingVertical: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          backgroundColor: '#3AB4BA',
          borderRadius: 25,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add New Tender</Text>

        <TouchableOpacity onPress={newTender}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: 'green',
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 15, marginTop: 20, borderRadius: 25 }}>
        <ScrollView>
          <TouchableOpacity
            style={{
              width: '100%',

              backgroundColor: '#afeeee',
              borderRadius: 25,
              marginBottom: 20,
              padding: 10,
              paddingVertical: 20,
            }}
            onPress={tenderDetails}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 10 }}>Tenders 1</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Status</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', paddingLeft: 20 }}>Active</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AllTenders;
