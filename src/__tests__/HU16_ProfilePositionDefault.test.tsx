import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { AuthContext } from '../context/AuthContext';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { useRouter } from 'expo-router';
import * as userService from '../services/userService';

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

// Mock de userService
jest.mock('../services/userService');
const mockedFetchUserProfile = userService.fetchUserProfile as jest.MockedFunction<typeof userService.fetchUserProfile>;

describe('HU16: Mostrar valor por defecto cuando falta el cargo', () => {
  const mockReplace = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  it('debe mostrar "No especificado" con estilo diferenciado si el cargo no existe', async () => {
    const mockUserWithoutPosition = {
      id: 1,
      fullName: 'Juan Pérez',
      email: 'juan@test.com',
      // position está ausente
    } as any;

    mockedFetchUserProfile.mockResolvedValue(mockUserWithoutPosition);

    const authContextValue = {
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
      user: mockUserWithoutPosition,
      isLoading: false,
    };

    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <ProfileScreen />
      </AuthContext.Provider>
    );

    // Verificar que se muestre "No especificado"
    await waitFor(() => {
      expect(getByText('No especificado')).toBeTruthy();
    });

    // Verificar estilo diferenciado (color gris tenue o cursiva)
    const defaultValueText = getByText('No especificado');
    const styles = defaultValueText.props.style;
    
    // El estilo esperado debe ser diferente al estándar (#2D3748)
    // Buscaremos color gris tenue o fontStyle italic
    const hasDifferentiatedStyle = 
      styles.some((s: any) => s && (s.color === '#A0AEC0' || s.fontStyle === 'italic'));
    
    expect(hasDifferentiatedStyle).toBe(true);
  });
});
