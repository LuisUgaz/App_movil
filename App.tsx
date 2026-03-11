import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import LoginScreen from './src/screens/Login/LoginScreen';
import SuccessScreen from './src/screens/Login/SuccessScreen';

import ProjectListScreen from './src/screens/ProjectList/ProjectListScreen';

const AppContent = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? <ProjectListScreen /> : <LoginScreen />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
