import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const router = useRouter();

  const renderCloseButton = () => (
    <TouchableOpacity 
      onPress={() => router.replace('/(main)')}
      testID="close-profile-button"
      style={styles.closeButton}
    >
      <MaterialCommunityIcons name="close" size={28} color="#007AFF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        headerLeft: renderCloseButton,
        title: 'Mi Perfil'
      }} />
      <Text style={styles.title}>Perfil del Usuario</Text>
      <Text>Esta pantalla está en desarrollo (HU12).</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeButton: {
    marginLeft: 16,
  },
});

export default ProfileScreen;
