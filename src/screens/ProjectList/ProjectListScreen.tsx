import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useProjects } from '../../hooks/useProjects';
import ProjectItem from '../../components/ProjectItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorView from '../../components/ErrorView';
import CustomButton from '../../components/CustomButton';
import { useRouter, Stack } from 'expo-router';
import { Project } from '../../types/project';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProjectListScreen = () => {
  const { projects, isLoading, error, refresh } = useProjects();
  const router = useRouter();

  const renderProfileButton = () => (
    <TouchableOpacity 
      onPress={() => router.push('/profile')}
      testID="profile-button"
      style={styles.profileButton}
    >
      <MaterialCommunityIcons name="account-circle" size={28} color="#007AFF" />
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ headerRight: renderProfileButton }} />
        <LoadingIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ headerRight: renderProfileButton }} />
        <ErrorView message={error} />
      </View>
    );
  }

  const isEmpty = !projects || projects.length === 0;

  if (isEmpty) {
    return (
      <View style={styles.emptyContainer}>
        <Stack.Screen options={{ headerRight: renderProfileButton }} />
        <Text style={styles.emptyText}>Sin proyectos disponibles</Text>
        <CustomButton title="Refrescar" onPress={refresh} />
      </View>
    );
  }

  const handleProjectPress = (project: Project) => {
    router.push({
      pathname: `/project/${project.id}`,
      params: project as any,
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerRight: renderProfileButton }} />
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProjectItem 
            project={item} 
            onPress={() => handleProjectPress(item)} 
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileButton: {
    marginRight: 16,
  },
});

export default ProjectListScreen;
