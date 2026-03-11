import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorView from '../../components/ErrorView';
import { useAuth } from '../../hooks/useAuth';
import { useProjects } from '../../hooks/useProjects';

const SuccessScreen = () => {
  const { user, signOut } = useAuth();
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorView message={error} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>✅</Text>
        </View>
        
        <Text style={styles.title}>¡Acceso Concedido!</Text>
        <Text style={styles.subtitle}>
          Bienvenido, <Text style={styles.username}>{user?.name}</Text>
        </Text>
        
        <Text style={styles.description}>
          Has iniciado sesión correctamente. Se han cargado {projects.length} proyectos.
        </Text>

        <CustomButton 
          title="Cerrar Sesión (Simulado)" 
          onPress={signOut} 
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
  },
  username: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  description: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FF3B30',
    shadowColor: '#FF3B30',
  },
});

export default SuccessScreen;
