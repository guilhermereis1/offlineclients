import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#F8F8F8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    color: '#4A4A4A',
    paddingBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  emailBold: {
    fontWeight: '700',
  },
  phoneBold: {
    fontWeight: '700',
  },
  emailTitle: {
    color: '#999999',
  },
  phoneTitle: {
    color: '#999999',
  },
  identityContainer: {
    marginTop: 10,
    fontSize: 13,
  },
  identityTitle: {
    color: '#999999',
  },
  identityBold: {
    fontWeight: '100',
  },
  containerButtonOffline: {
    backgroundColor: '#CB6120',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 3,
  },
  containerButtonOfflineText: {
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default styles;
