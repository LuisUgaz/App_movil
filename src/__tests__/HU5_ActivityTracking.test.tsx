import React, { useContext } from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import { View, TouchableOpacity, Text, Button } from 'react-native';

const MockApp = () => {
  const { isAuthenticated, resetTimer, signIn } = useContext(AuthContext);
  return (
    <View onTouchStart={resetTimer} testID="app-container">
      <Button title="Login" onPress={() => signIn('admin', 'Admin123')} testID="login-button" />
      <Text testID="auth-status">{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</Text>
    </View>
  );
};

describe('HU5 - Rastreo de actividad', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('debe resetear el temporizador cuando hay una interacción del usuario', async () => {
    const { getByTestId, getByText } = render(
      <AuthProvider>
        <MockApp />
      </AuthProvider>
    );

    // 1. Login
    await act(async () => {
      fireEvent.press(getByTestId('login-button'));
      jest.runAllTimers();
    });

    expect(getByTestId('auth-status').props.children).toBe('Authenticated');

    // 2. Esperar 30 segundos (mitad del timeout)
    act(() => {
      jest.advanceTimersByTime(30000);
    });

    // 3. Simular interacción (toque en el contenedor)
    act(() => {
      fireEvent(getByTestId('app-container'), 'onTouchStart');
    });

    // 4. Esperar otros 40 segundos (Total 70s desde inicio, pero solo 40s desde interacción)
    act(() => {
      jest.advanceTimersByTime(40000);
    });

    // 5. La sesión DEBE seguir activa porque se reseteó a los 30s
    expect(getByTestId('auth-status').props.children).toBe('Authenticated');

    // 6. Esperar 21 segundos más (61s desde la última interacción)
    act(() => {
      jest.advanceTimersByTime(21000);
    });

    // 7. Ahora sí debe haber expirado
    expect(getByTestId('auth-status').props.children).toBe('Not Authenticated');
  });
});
