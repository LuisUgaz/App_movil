import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileInfoItem from '../../components/ProfileInfoItem';
import { fetchUserProfile } from '../../services/userService';
import { UserProfile } from '../../types/user';
import LoadingIndicator from '../../components/LoadingIndicator';
import { AuthContext } from '../../context/AuthContext';

const ProfileScreen = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      if (!isAuthenticated) {
        Alert.alert(
          'Sesión requerida',
          'Debes iniciar sesión para acceder a tu perfil.',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        );
        setIsLoading(false);
        return;
      }

      try {
        const data = await fetchUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  const renderCloseButton = () => (
    <TouchableOpacity 
      onPress={() => router.replace('/(main)')}
      testID="close-profile-button"
      style={styles.closeButton}
    >
      <MaterialCommunityIcons name="close" size={28} color="#007AFF" />
    </TouchableOpacity>
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ 
        headerLeft: renderCloseButton,
        headerShown: true,
        title: 'Mi Perfil'
      }} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <MaterialCommunityIcons name="account" size={80} color="#CBD5E0" />
          </View>
          <Text style={styles.userName}>{profile?.fullName}</Text>
          <Text style={styles.userRole}>{profile?.position}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Información Personal</Text>
          <ProfileInfoItem 
            label="Nombre Completo" 
            value={profile?.fullName || ''} 
            icon="account-outline" 
          />
          <ProfileInfoItem 
            label="Correo Electrónico" 
            value={profile?.email || ''} 
            icon="email-outline" 
          />
          <ProfileInfoItem 
            label="Cargo" 
            value={profile?.position || ''} 
            icon="briefcase-outline" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '500',
  },
  infoSection: {
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A0AEC0',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  closeButton: {
    marginLeft: 16,
  },
});

export default ProfileScreen;
