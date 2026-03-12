import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProjectListScreen from '../ProjectListScreen';
import { useProjects } from '../../../hooks/useProjects';
import { useRouter } from 'expo-router';

// Mock useProjects hook
jest.mock('../../../hooks/useProjects');
// Mock useRouter
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

const mockProjects = [
  {
    id: '1',
    name: 'Proyecto 1',
    description: 'Desc 1',
    status: 'En progreso',
    startDate: '2023-01-01',
    leader: 'Líder 1',
  },
  {
    id: '2',
    name: 'Proyecto 2',
    description: 'Desc 2',
    status: 'Finalizado',
    startDate: '2023-02-01',
    leader: 'Líder 2',
  },
];

describe('ProjectListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the list of projects when data is available', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (useProjects as jest.Mock).mockReturnValue({
      projects: mockProjects,
      isLoading: false,
      error: null,
    });

    const { getByText } = render(<ProjectListScreen />);
    
    expect(getByText('Proyecto 1')).toBeTruthy();
    expect(getByText('En progreso')).toBeTruthy();
    expect(getByText('Proyecto 2')).toBeTruthy();
    expect(getByText('Finalizado')).toBeTruthy();
  });

  it('should navigate to project detail when a project is pressed', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useProjects as jest.Mock).mockReturnValue({
      projects: mockProjects,
      isLoading: false,
      error: null,
    });

    const { getAllByTestId } = render(<ProjectListScreen />);
    const projectItems = getAllByTestId('project-item');
    
    fireEvent.press(projectItems[0]);

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/project/1',
      params: mockProjects[0],
    });
  });

  it('should render the loading indicator when loading', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: true,
      error: null,
    });

    const { getByTestId } = render(<ProjectListScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should render the error view when an error occurs', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    const errorMsg = 'Error al cargar';
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: false,
      error: errorMsg,
    });

    const { getByText } = render(<ProjectListScreen />);
    expect(getByText(errorMsg)).toBeTruthy();
  });
});
