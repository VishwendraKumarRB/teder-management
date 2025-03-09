import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bidContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#4FD3DA',
  },

  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    borderColor: '#B2B2B2',
    padding: 20,
    height: 280,
    marginBottom: 10,
  },

  productDetails: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // productDetails: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});
