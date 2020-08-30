import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles';
import {registerClients} from '../../actions/clients';
import {useDispatch} from 'react-redux';

export default function RegisterClient({navigation}) {
  const dispatch = useDispatch();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
  }

  function registerClient() {
    if (name === '' || email === '' || phone === '') {
      Alert.alert('Importante', 'Por favor preencha todos os Campos!', [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert('Sucesso!', 'O Cliente foi cadastrado!', [{text: 'OK'}]);

      clearInputs();
      dispatch(registerClients(name, email, phone));
      navigation.navigate('Clients');
    }
  }

  return (
    <View>
      <View style={styles.form}>
        <View style={styles.containerName}>
          <Text>NOME</Text>
          <TextInput
            style={styles.inputValue}
            onChangeText={name => setName(name)}
            value={name}
            placeholder="Insira o nome aqui"
            autoCorrect={false}
          />
        </View>

        <View style={styles.containerEmail}>
          <Text>EMAIL</Text>
          <TextInput
            style={styles.inputValue}
            onChangeText={email => setEmail(email)}
            value={email}
            placeholder="Insira o email aqui"
            autoCorrect={false}
          />
        </View>

        <View style={styles.containerPhone}>
          <Text>TELEFONE</Text>
          <TextInput
            style={styles.inputValue}
            onChangeText={phone => setPhone(phone)}
            value={phone}
            placeholder="Insira o telefone aqui"
            autoCorrect={false}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => registerClient()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Cliente</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => clearInputs()}
        disabled={name === '' && phone === '' && email === ''}>
        <View style={styles.buttonClear}>
          <Text style={styles.buttonText}>Limpar Campos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
