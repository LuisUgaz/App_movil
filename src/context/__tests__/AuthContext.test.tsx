import React, { useContext, useEffect } from 'react';
import { render, act, waitFor } from '@testing-library/react-native';
import { AuthProvider, AuthContext } from '../AuthContext';
import { Text, View } from 'react-native';

// Componente de prueba para acceder al contexto
const TestComponent = () => {
  const { isAuthenticated, signIn, signOut } = useContext(AuthContext);
  return (
    <View>
      <Text testID="auth-status">{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</Text>
    </View>
  );
};

describe('AuthContext - Expiración de sesión', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('debe cerrar la sesión automáticamente después de 1 minuto de inactividad', async () => {
    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // 1. Simular login
    const { result } = renderHook(() => useContext(AuthContext), {
      wrapper: AuthProvider,
    });

    await act(async () => {
      const promise = result.current.signIn('admin', 'admin123');
      jest.runAllTimers();
      await promise;
    });

    expect(result.current.isAuthenticated).toBe(true);

    // 2. Avanzar el tiempo 61 segundos (más del límite de 1 minuto)
    act(() => {
      jest.advanceTimersByTime(61000);
    });

    // 3. Verificar que la sesión haya expirado
    expect(result.current.isAuthenticated).toBe(false);
  });
});

// Helper para renderizar hooks si no está disponible directamente
function renderHook<T>(hook: () => T, options: { wrapper: React.ComponentType<any> }) {
  let result: { current: T } = { current: undefined as any };
  const Component = () => {
    result.current = hook();
    return null;
  };
  render(<Component />, options);
  return { result };
}
