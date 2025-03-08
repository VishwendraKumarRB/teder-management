import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const AllTenders = () => {
  const tenderData = [
    {
      name: 'tender 1',
      id: 1,
    },
    {
      name: 'tender 2',
      id: 2,
    },
    {
      name: 'tender 3',
      id: 3,
    },
    {
      name: 'tender 4',
      id: 4,
    },
    {
      name: 'tender 5',
      id: 5,
    },
    {
      name: 'tender 6',
      id: 6,
    },
  ];
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          backgroundColor: '#3AB4BA',
          borderRadius: 25,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Add New Tender</Text>

        <TouchableOpacity>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: 'green',
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>+</Text>
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

const styles = StyleSheet.create({});
