import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TenderManagement from "./tenderManagement";
import { Provider } from "react-redux";
import getStore from "./tenderManagement/store";

export default function App() {
  const store = getStore();

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <TenderManagement />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FD3DA",
    paddingTop: 40,
  },
});
