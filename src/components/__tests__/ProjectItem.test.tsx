import React from 'react';
import { render } from '@testing-library/react-native';
import ProjectItem from '../ProjectItem';
import { Project } from '../../types/project';

const mockProject: Project = {
  id: '1',
  name: 'Proyecto de Prueba',
  description: 'Una descripción de prueba',
  status: 'En progreso',
  startDate: '2023-01-01',
  leader: 'Juan Pérez',
};

describe('ProjectItem', () => {
  it('should render the project name and status', () => {
    const { getByText } = render(<ProjectItem project={mockProject} />);
    
    expect(getByText('Proyecto de Prueba')).toBeTruthy();
    expect(getByText('En progreso')).toBeTruthy();
  });

  it('should render a visual indicator to the right', () => {
    const { getByText } = render(<ProjectItem project={mockProject} />);
    // Usaremos '>' como indicador visual simple por ahora
    expect(getByText('>')).toBeTruthy();
  });
});
