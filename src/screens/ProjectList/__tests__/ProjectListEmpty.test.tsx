import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProjectListScreen from '../ProjectListScreen';
import { useProjects } from '../../../hooks/useProjects';

// Mock useProjects hook
jest.mock('../../../hooks/useProjects');
// Mock useRouter
jest.mock('expo-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  Stack: {
    Screen: jest.fn(() => null),
  },
}));

describe('ProjectListScreen - Empty State', () => {
  it('should render empty state message when project list is empty', () => {
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: false,
      error: null,
    });

    const { getByText, queryByTestId } = render(<ProjectListScreen />);
    
    expect(getByText('Sin proyectos disponibles')).toBeTruthy();
    expect(getByText('Refrescar')).toBeTruthy();
    expect(queryByTestId('project-item')).toBeNull();
  });

  it('should render empty state message when project list is null', () => {
    (useProjects as jest.Mock).mockReturnValue({
      projects: null,
      isLoading: false,
      error: null,
    });

    const { getByText } = render(<ProjectListScreen />);
    
    expect(getByText('Sin proyectos disponibles')).toBeTruthy();
  });

  it('should call refresh when button is pressed', () => {
    const mockRefresh = jest.fn();
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: false,
      error: null,
      refresh: mockRefresh,
    });

    const { getByText } = render(<ProjectListScreen />);
    
    fireEvent.press(getByText('Refrescar'));
    expect(mockRefresh).toHaveBeenCalled();
  });
});
