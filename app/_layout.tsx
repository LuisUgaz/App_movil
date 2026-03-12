import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../src/context/AuthContext';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'Cargando...' }} />
        <Stack.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="(main)" options={{ title: 'Proyectos' }} />
        <Stack.Screen name="profile" options={{ presentation: 'modal', headerShown: true, title: 'Mi Perfil' }} />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
