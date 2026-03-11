import React from 'react';
import { render } from '@testing-library/react-native';
import ProjectListScreen from '../ProjectListScreen';
import { useProjects } from '../../../hooks/useProjects';

// Mock useProjects hook
jest.mock('../../../hooks/useProjects');

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
  it('should render the list of projects when data is available', () => {
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

  it('should render the loading indicator when loading', () => {
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: true,
      error: null,
    });

    const { getByTestId } = render(<ProjectListScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should render the error view when an error occurs', () => {
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
