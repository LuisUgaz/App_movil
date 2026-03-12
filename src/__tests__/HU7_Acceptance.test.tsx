import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import App from '../../App';
import * as projectService from '../services/projectService';

// Mock the project service
jest.mock('../services/projectService');

const mockProjects = [
  { id: '1', name: 'Proyecto Aceptacion 1', status: 'Activo', description: '', startDate: '', leader: '' },
  { id: '2', name: 'Proyecto Aceptacion 2', status: 'En pausa', description: '', startDate: '', leader: '' },
];

describe('HU7: Ver listado de proyectos con datos disponibles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (projectService.fetchProjects as jest.Mock).mockResolvedValue(mockProjects);
  });

  it('Scenario: Mostrar listado con datos disponibles', async () => {
    const { getByPlaceholderText, getByText, findByText, queryByTestId } = render(<App />);

    // Given que el usuario ha iniciado sesión
    // 1. Llenar credenciales
    fireEvent.changeText(getByPlaceholderText('Ingresa tu usuario'), 'admin');
    fireEvent.changeText(getByPlaceholderText('Ingresa tu contraseña'), 'admin123');

    // 2. Click en ingresar
    fireEvent.press(getByText('Ingresar'));

    // Esperar a que pase el loading del login (1.5s en AuthContext)
    // Luego pasará al listado, que tiene su propio loading (1s en useProjects)
    
    // Verificamos que entramos a la fase de carga de proyectos
    await waitFor(() => expect(getByText('Cargando proyectos...')).toBeTruthy(), { timeout: 5000 });

    // Then la app debe mostrar un listado de proyectos de forma clara y ordenada
    // And cada proyecto debe mostrar al menos el nombre
    await waitFor(() => expect(getByText('Proyecto Aceptacion 1')).toBeTruthy(), { timeout: 5000 });
    expect(getByText('Proyecto Aceptacion 2')).toBeTruthy();
    expect(getByText('Activo')).toBeTruthy();
    expect(getByText('En pausa')).toBeTruthy();
  }, 15000);
});
