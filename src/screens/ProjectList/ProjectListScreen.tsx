import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useProjects } from '../../hooks/useProjects';
import ProjectItem from '../../components/ProjectItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorView from '../../components/ErrorView';

const ProjectListScreen = () => {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorView message={error} />;
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
});

export default ProjectListScreen;
