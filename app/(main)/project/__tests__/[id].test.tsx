import React from 'react';
import { render } from '@testing-library/react-native';
import ProjectDetailScreen from '../[id]';
import { useLocalSearchParams } from 'expo-router';

// Mock expo-router
jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn(),
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: 'MaterialCommunityIcons',
}));

describe('ProjectDetailScreen', () => {
  const mockProject = {
    id: '1',
    name: 'Proyecto de Prueba Detalle',
    description: 'Descripción detallada para HU10',
    status: 'Activo',
    startDate: '2023-05-20',
    leader: 'Ana García',
  };

  beforeEach(() => {
    (useLocalSearchParams as jest.Mock).mockReturnValue(mockProject);
  });

  it('should render project name and description', () => {
    const { getByText } = render(<ProjectDetailScreen />);
    
    expect(getByText(mockProject.name)).toBeTruthy();
    expect(getByText(mockProject.description)).toBeTruthy();
  });

  it('should render project status in a badge', () => {
    const { getByText } = render(<ProjectDetailScreen />);
    expect(getByText(mockProject.status)).toBeTruthy();
  });

  it('should render start date and leader info', () => {
    const { getByText } = render(<ProjectDetailScreen />);
    
    expect(getByText(mockProject.startDate)).toBeTruthy();
    expect(getByText(mockProject.leader)).toBeTruthy();
  });
});
