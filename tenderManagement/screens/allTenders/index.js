import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../component/header";

const AllTenders = () => {
  const selectedUser = useSelector(({ data }) => data.selectedUser);
  const tenders = useSelector(({ data }) => data.tenders);
  const isAdmin = selectedUser?.isAdmin;
  const navigation = useNavigation();

  const newTender = () => {
    navigation.navigate("AddNewTender");
  };
  const tenderDetails = (item) => {
    navigation.navigate("TenderDetails", { tender: item });
  };

  const getTenderStatus = ({
    startTime,
    endTime,
    isLastMinuteBid,
    bufferTime,
  }) => {
    const currentTimeStamp = new Date().getTime();
    if (startTime > currentTimeStamp) return "Not Started";
    else if (
      startTime < currentTimeStamp &&
      (endTime > currentTimeStamp || bufferTime > currentTimeStamp)
    )
      return "Active";
    return "In Active";
  };

  renderAddNewTender = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
          backgroundColor: "#3AB4BA",
          borderRadius: 25,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Add New Tender</Text>

        <TouchableOpacity onPress={newTender}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: "green",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderTenders = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "#afeeee",
          borderRadius: 25,
          marginBottom: 20,
          padding: 10,
          paddingVertical: 20,
        }}
        onPress={() => tenderDetails(item)}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", paddingBottom: 10 }}>
          {item?.name}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Status: </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              paddingLeft: 12,
              color: "#fb5b5a",
            }}
          >
            {getTenderStatus(item)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#4FD3DA", paddingVertical: 10 }}>
      <Header noBackButton />
      {isAdmin && renderAddNewTender()}
      <View style={{ flex: 15, marginTop: 20, borderRadius: 25 }}>
        <FlatList data={tenders} renderItem={renderTenders} />
      </View>
    </View>
  );
};

export default AllTenders;
