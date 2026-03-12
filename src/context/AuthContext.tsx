import React, { createContext, useState, ReactNode } from 'react';

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
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user;

  async function signIn(username: string, password?: string) {
    setError(null);
    
    // Simulación de validación (Mock)
    // Para fines de esta HU3, si el usuario es "error" o la contraseña es incorrecta, fallará.
    // Usaremos credenciales fijas para la demo: admin / admin123
    
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin123') {
          const mockUser = { id: 1, name: username };
          setUser(mockUser);
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

  function signOut() {
    setUser(null);
  }

  function clearError() {
    setError(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, error, signIn, signOut, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};
