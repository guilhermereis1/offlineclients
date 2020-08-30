import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, Alert, TouchableOpacity} from 'react-native';
import {getClients} from '../../actions/clients';
import styles from './styles';
import moment from 'moment';
import getRealm from '../../../Services/realm';
import api from '../../../Services/api';

export default function Clients() {
  const dispatch = useDispatch();
  const [dbClients, setClients] = useState([]);

  useEffect(() => {
    dispatch(getClients());

    async function loadClients() {
      const realm = await getRealm();

      const data = realm.objects('Client');

      setClients(data);
      dispatch(getClients());
    }

    loadClients();
  }, []);

  const clients = useSelector(state => state.getClients.clients);

  async function saveClient(client) {
    const data = {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Client', data);
      // Delete database
      // realm.deleteAll();
    });

    Alert.alert(`Sucesso`, `Sua importaçao foi concluida`, [{text: 'OK'}]);
  }

  function addClient(id) {
    api
      .get(`/clients/${id}`)
      .then(res => {
        const response = res.data;
        saveClient(response);
      })
      .catch(res => {
        console.log(res);
      });
  }

  const Client = ({name, email, phone, id, created_at}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => createTwoButtonAlert(name, created_at)}>
        <Text style={styles.name}>{name}</Text>

        <Text>
          <Text style={styles.emailTitle}>Email: </Text>
          <Text style={styles.emailBold}>{email}</Text>
        </Text>

        <Text>
          <Text style={styles.phoneTitle}>Telefone: </Text>
          <Text style={styles.phoneBold}>{phone}</Text>
        </Text>
        <Text style={styles.identityContainer}>
          <Text style={styles.identityTitle}>ID: </Text>
          <Text style={styles.identityBold}>{id}</Text>
        </Text>
      </TouchableOpacity>

      {clients.length !== 0 && (
        <TouchableOpacity onPress={() => addClient(id)}>
          <View style={styles.containerButtonOffline}>
            <Text style={styles.containerButtonOfflineText}>
              Importar Offline!
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderClientList = ({item}) => (
    <Client
      name={item.name}
      email={item.email}
      phone={item.phone}
      id={item.id}
      created_at={item.created_at}
    />
  );

  const createTwoButtonAlert = (name, created_at) =>
    Alert.alert(
      `Cliente: ${name}`,
      `Cadastrado em: ${moment(created_at).format('DD/MM/YYYY HH:MM')}`,
      [{text: 'OK'}],
    );

  return (
    <View>
      {clients.length !== 0 ? (
        <View>
          <Text style={styles.title}>Clientes Cadastrados</Text>
          <FlatList
            data={clients}
            renderItem={renderClientList}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Mostrando Clientes Offline</Text>
          <FlatList
            data={dbClients}
            renderItem={renderClientList}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
}
