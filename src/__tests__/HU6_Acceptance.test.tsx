import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { AuthContext } from '../context/AuthContext';
import AppLayout from '../../app/(main)/_layout';
import { useRouter, Redirect, Stack } from 'expo-router';

// Mocks
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
  Redirect: jest.fn(() => null),
  Stack: Object.assign(
    ({ children, screenOptions }: { children: React.ReactNode, screenOptions: any }) => (
      <>
        {screenOptions?.headerRight?.()}
        {children}
      </>
    ),
    { Screen: jest.fn(({ options }: any) => <>{options?.headerRight?.()}</>) }
  ),
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

describe('HU6: Cierre de sesión', () => {
  const mockSignOut = jest.fn();
  const mockResetTimer = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe mostrar la pantalla de login si el usuario no está autenticado (Redirección)', () => {
    const authContextValue = {
      isAuthenticated: false,
      user: null,
      error: null,
      signIn: jest.fn(),
      signOut: mockSignOut,
      clearError: jest.fn(),
      resetTimer: mockResetTimer,
    };

    render(
      <AuthContext.Provider value={authContextValue}>
        <AppLayout />
      </AuthContext.Provider>
    );

    expect(Redirect).toHaveBeenCalledWith(
      expect.objectContaining({ href: '/login' }),
      undefined
    );
  });

  it('debe permitir cerrar sesión y llamar a signOut (Escenario: Cierre de sesión exitoso)', async () => {
    const authContextValue = {
      isAuthenticated: true,
      user: { id: 1, name: 'Admin' },
      error: null,
      signIn: jest.fn(),
      signOut: mockSignOut,
      clearError: jest.fn(),
      resetTimer: mockResetTimer,
    };

    // Para este test, necesitamos verificar que el botón de logout existe en el layout
    // Como aún no está implementado, este test FALLARÁ (Red Phase)
    const { getByTestId, queryByTestId } = render(
      <AuthContext.Provider value={authContextValue}>
        <AppLayout />
      </AuthContext.Provider>
    );

    // Buscamos un botón con testID 'logout-button' que añadiremos después
    const logoutButton = queryByTestId('logout-button');
    
    // En la fase RED, esto fallará si esperamos que exista
    // expect(logoutButton).toBeTruthy(); 
    
    if (logoutButton) {
      fireEvent.press(logoutButton);
      expect(mockSignOut).toHaveBeenCalled();
    } else {
      // Si no existe, lanzamos un error para que el test falle en la fase RED
      throw new Error('Botón de cerrar sesión no encontrado');
    }
  });
});
