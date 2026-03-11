import React, { createContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (username: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn(username: string) {
    // Simulación de autenticación exitosa (Mock)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: 1, name: username || 'Usuario Prueba' };
        setUser(mockUser);
        console.log('Login exitoso (Mock):', mockUser);
        resolve();
      }, 1500);
    });
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
