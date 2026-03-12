import { Redirect } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../src/context/AuthContext';

export default function EntryPoint() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect href="/(main)" />;
  }

  return <Redirect href="/login" />;
}
