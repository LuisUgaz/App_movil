import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Project } from '../types/project';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{project.name}</Text>
        <Text style={styles.status}>{project.status}</Text>
      </View>
      <Text style={styles.indicator}>{'>'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  indicator: {
    fontSize: 20,
    color: '#999',
    marginLeft: 8,
  },
});

export default ProjectItem;
