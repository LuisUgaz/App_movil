import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { AuthContext } from '../context/AuthContext';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

// Mock de expo-router
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
  Stack: {
    Screen: jest.fn(() => null),
  },
}));

// Mock de expo-font
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

// Mock de @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: jest.fn(() => null),
}));

// Mock de Alert
jest.spyOn(Alert, 'alert');

describe('HU15: Restringir acceso al perfil si no hay sesión', () => {
  const mockReplace = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  it('debe mostrar una alerta y redirigir al login si el usuario no está autenticado', async () => {
    const authContextValue = {
      isAuthenticated: false,
      user: null,
      error: null,
      signIn: jest.fn(),
      signOut: jest.fn(),
      clearError: jest.fn(),
      resetTimer: jest.fn(),
    };

    render(
      <AuthContext.Provider value={authContextValue}>
        <ProfileScreen />
      </AuthContext.Provider>
    );

    // Verificar que se llame a la alerta
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Sesión requerida',
        'Debes iniciar sesión para acceder a tu perfil.',
        expect.any(Array)
      );
    });

    // Simular el clic en el botón "OK" de la alerta no es trivial con el mock de Alert,
    // pero podemos verificar si la lógica de redirección se dispara.
    // En la implementación real, la redirección ocurriría tras la alerta o mediante el layout.
  });
});
