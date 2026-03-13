import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, error } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
  setIsLoading(true);
  try {
    await signIn(username, password);
    // Limpieza de campos tras éxito
    setUsername('');
    setPassword('');
    // Redirección al listado de proyectos
    router.replace('/(main)');
  } catch (err) {
    if (err instanceof Error) {
      console.log('Error capturado en handleLogin:', err.message);
    } else {
      console.log('Error desconocido:', err);
    }

    // Limpieza de campos tras error
    setUsername('');
    setPassword('');
  } finally {
    setIsLoading(false);
  }
};

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>App</Text>
            </View>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
          </View>

          <View style={styles.form}>
            <CustomInput
              label="Usuario"
              placeholder="Ingresa tu usuario"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              editable={!isLoading}
            />
            
            <CustomInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              editable={!isLoading}
              rightIcon={
                <TouchableOpacity onPress={togglePasswordVisibility} disabled={isLoading}>
                  <Text style={styles.toggleText}>
                    {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
                  </Text>
                </TouchableOpacity>
              }
            />

            {error ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : null}

            <CustomButton
              title="Ingresar"
              onPress={handleLogin}
              style={styles.loginButton}
              loading={isLoading}
              disabled={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    // Shadow for logo
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  form: {
    width: '100%',
  },
  toggleText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 8,
  },
  errorContainer: {
    backgroundColor: '#FFF5F5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FEB2B2',
  },
  errorText: {
    color: '#C53030',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default LoginScreen;
