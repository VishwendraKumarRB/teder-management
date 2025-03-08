import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    backgroundColor: '#FAF7F0',
    position: 'fixed',
    bottom: 0,
    height: 400,
    padding: 20,
    flex: 1,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalPrice: {
    width: '100%',
    borderWidth: 1,
    padding: 12,
  },
  updateBidBtn: {
    width: 200,
    padding: 15,
    backgroundColor: 'green',
    marginTop: 15,
    borderRadius: 3,
  },
});
