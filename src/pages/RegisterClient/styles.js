import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    margin: 10,
  },
  inputValue: {
    height: 40,
    paddingLeft: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  containerName: {
    marginTop: 15,
    marginBottom: 15,
  },
  containerEmail: {
    marginTop: 15,
    marginBottom: 15,
  },
  containerPhone: {
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#CB6120',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
  },
  buttonClear: {
    backgroundColor: '#7B7B7B',
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default styles;
