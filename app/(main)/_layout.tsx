import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../src/context/AuthContext';

export default function AppLayout() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Listado de Proyectos' }} />
      <Stack.Screen name="project/[id]" options={{ title: 'Detalle del Proyecto' }} />
    </Stack>
  );
}
