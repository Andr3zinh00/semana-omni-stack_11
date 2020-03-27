import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import logoImg from "../../assets/logo.png";
import styles from './incidents.styles';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

//
const Incidents = () => {
  const navigation = useNavigation();
  const [incidents, setIncident] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length == total) {
      return;
    }


    setLoading(true);
    const res = await api.get('/incident', {
      params: { page }
    });

    setIncident([...incidents, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setPage(page + 1);

    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  const navigateToDetail = (incident) => {
    navigation.navigate('Detail', { incident })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de <Text style={styles.boldText}>{total}</Text> casos.</Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        onEndReachedThreshold={0.4}
        onEndReached={loadIncidents}
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>

        )}

      />
    </View>
  )
}

export default Incidents;