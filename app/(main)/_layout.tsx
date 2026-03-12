import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../src/context/AuthContext';

export default function AppLayout() {
  const { isAuthenticated, resetTimer } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={{ flex: 1 }} onTouchStart={resetTimer}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Listado de Proyectos' }} />
        <Stack.Screen name="project/[id]" options={{ title: 'Detalle del Proyecto' }} />
        <Stack.Screen name="profile" options={{ presentation: 'modal', headerShown: true, title: 'Mi Perfil' }} />
      </Stack>
    </View>
  );
}
