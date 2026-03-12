import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import StatusBadge from '../../../src/components/StatusBadge';
import DetailItem from '../../../src/components/DetailItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProjectDetailScreen() {
  const params = useLocalSearchParams();
  
  // En Expo Router, los params pueden venir como string o array de strings
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const description = Array.isArray(params.description) ? params.description[0] : params.description;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const startDate = Array.isArray(params.startDate) ? params.startDate[0] : params.startDate;
  const leader = Array.isArray(params.leader) ? params.leader[0] : params.leader;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.projectName}>{name || 'Cargando...'}</Text>
          {status && <StatusBadge status={status} />}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{description || 'Sin descripción disponible.'}</Text>
        </View>

        <View style={styles.infoContainer}>
          <DetailItem 
            label="ID del Proyecto" 
            value={id || '---'} 
            icon={<MaterialCommunityIcons name="identifier" size={24} color="#4A5568" />}
          />
          <DetailItem 
            label="Fecha de Inicio" 
            value={startDate || '---'} 
            icon={<MaterialCommunityIcons name="calendar" size={24} color="#4A5568" />}
          />
          <DetailItem 
            label="Líder del Proyecto" 
            value={leader} 
            icon={<MaterialCommunityIcons name="account-tie" size={24} color="#4A5568" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  projectName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 12,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A5568',
  },
  infoContainer: {
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
