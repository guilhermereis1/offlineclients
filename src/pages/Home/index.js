import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView, Alert} from 'react-native';
import getRealm from '../../../Services/realm';
import styles from './styles';

export default function Home({navigation}) {
  const [dbClients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const realm = await getRealm();

      const data = realm.objects('Client');

      setClients(data);
    }

    loadClients();
  });

  function navigateToClients() {
    navigation.navigate('Clients');
  }
  function navigateToRegisterClient() {
    navigation.navigate('RegisterClient');
  }

  async function deleteAllClients() {
    const realm = await getRealm();

    realm.write(() => {
      realm.deleteAll();
    });
    Alert.alert(`Sucesso`, 'Seus Clientes foram excluido', [{text: 'OK'}]);
  }

  return (
    <View>
      <Button title="Importar Clientes" onPress={navigateToClients} />
      <Button title="Cadastrar Cliente" onPress={navigateToRegisterClient} />
      <Button title="Excluir Clientes" onPress={deleteAllClients} />

      <ScrollView>
        {dbClients.map(client => (
          <View style={styles.containerClients} key={client.id}>
            <Text>
              {client.name} | {client.phone}
            </Text>
            <Text>{client.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
