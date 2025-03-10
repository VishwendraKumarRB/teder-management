import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './tenderViewStyles';
import Header from '../../component/header';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

const TIME_DATE_FORMAT = 'h:mm a, MMM D';

const RenderRowView = ({ leftText, rightText }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 14, paddingVertical: 8 }}>{leftText}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 14, paddingVertical: 8 }}>{rightText}</Text>
    </View>
  );
};

const TenderDetails = () => {
  const route = useRoute();
  const tender = route?.params?.tender;

  const [visible, setVisible] = useState(false);

  // const toggleModal = () => setVisible(!visible);

  renderBidHeader = () => {
    return <Text style={{ fontSize: 24, fontWeight: 'bold' }}> All Bids </Text>;
  };

  renderBids = ({ item }) => {
    const { bidCost, bidTime, companyName } = item || {};
    return (
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          borderRadius: 16,
          marginVertical: 12,
        }}
      >
        <RenderRowView leftText={'Company'} rightText={companyName} />
        <RenderRowView leftText={'Bid Amount'} rightText={bidCost} />
        <RenderRowView leftText={'Time of Submission'} rightText={moment(bidTime).format(TIME_DATE_FORMAT)} />
      </View>
    );
  };

  const { name, description, startTime, endTime, bufferTime, isLastMinuteBid, bids } = tender || {};

  return (
    <SafeAreaView style={styles.bidContainer}>
      <Header />
      <View style={{ padding: 10 }}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDetails}>{description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Start Time</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'green' }}>
              {moment(startTime).format(TIME_DATE_FORMAT)}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}> End Time</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'red' }}>
              {moment(endTime).format(TIME_DATE_FORMAT)}
            </Text>
          </View>
        </View>
        {isLastMinuteBid && (
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Buffer Time</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'red' }}>
              {moment(bufferTime).format(TIME_DATE_FORMAT)}
            </Text>
          </View>
        )}
      </View>
      <FlatList
        style={{ marginVertical: 12, marginHorizontal: 16 }}
        data={bids}
        renderItem={renderBids}
        ListHeaderComponent={renderBidHeader}
      />
    </SafeAreaView>
  );
};

export default TenderDetails;
