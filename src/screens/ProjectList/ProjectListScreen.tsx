import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useProjects } from '../../hooks/useProjects';
import ProjectItem from '../../components/ProjectItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorView from '../../components/ErrorView';
import CustomButton from '../../components/CustomButton';

const ProjectListScreen = () => {
  const { projects, isLoading, error, refresh } = useProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorView message={error} />;
  }

  const isEmpty = !projects || projects.length === 0;

  if (isEmpty) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Sin proyectos disponibles</Text>
        <CustomButton title="Refrescar" onPress={refresh} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProjectItem project={item} />}
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
});

export default ProjectListScreen;
