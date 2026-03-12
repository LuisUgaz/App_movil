import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../src/context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppLayout() {
  const { isAuthenticated, resetTimer, signOut } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  const renderLogoutButton = () => (
    <TouchableOpacity 
      onPress={signOut} 
      style={styles.logoutButton}
      testID="logout-button"
      accessibilityLabel="Cerrar sesión"
    >
      <MaterialCommunityIcons name="logout" size={24} color="#FF3B30" />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }} onTouchStart={resetTimer}>
      <Stack screenOptions={{
        headerRight: renderLogoutButton,
      }}>
        <Stack.Screen name="index" options={{ title: 'Listado de Proyectos' }} />
        <Stack.Screen name="project/[id]" options={{ title: 'Detalle del Proyecto' }} />
        <Stack.Screen name="profile" options={{ presentation: 'modal', headerShown: true, title: 'Mi Perfil' }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 10,
    padding: 5,
  },
});
