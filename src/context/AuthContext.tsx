import React, { createContext, useState, ReactNode, useEffect, useCallback, useRef } from 'react';
import { Alert } from 'react-native';

interface User {
  id: number;
  name: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  signIn: (username: string, password?: string) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
  resetTimer: () => void;
}

const SESSION_TIMEOUT = 60000; // 1 minuto en milisegundos

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lastActiveAt = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isAuthenticated = !!user;

  const resetTimer = useCallback(() => {
    lastActiveAt.current = Date.now();
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    setError(null);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      // Iniciar el temporizador solo cuando se autentica
      timerRef.current = setInterval(() => {
        const timeSinceLastActive = Date.now() - lastActiveAt.current;
        if (timeSinceLastActive >= SESSION_TIMEOUT) {
          Alert.alert(
            'Sesión expirada',
            'Sesión expirada por inactividad. Por favor, inicie sesión de nuevo.',
            [{ text: 'OK' }]
          );
          signOut();
        }
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAuthenticated, signOut]);

  async function signIn(username: string, password?: string) {
    setError(null);
    
    // Simulación de validación (Mock)
    // Para fines de esta HU3, si el usuario es "error" o la contraseña es incorrecta, fallará.
    // Usaremos credenciales fijas para la demo: admin / Admin123
    
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'Admin123') {
          const mockUser = { id: 1, name: username };
          setUser(mockUser);
          resetTimer();
          console.log('Login exitoso (Mock):', mockUser);
          resolve();
        } else {
          setError('Usuario o contraseña incorrectos');
          console.log('Login fallido (Mock): Credenciales incorrectas');
          reject(new Error('Auth failed'));
        }
      }, 1500);
    });
  }

  function clearError() {
    setError(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, error, signIn, signOut, clearError, resetTimer }}>
      {children}
    </AuthContext.Provider>
  );
};
