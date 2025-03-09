import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TenderManagement from './tenderManagement';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hdskhdksd</Text> */}
      <TenderManagement />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    paddingTop: 40,
  },
});
