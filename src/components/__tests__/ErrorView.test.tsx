import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorView from '../ErrorView';

describe('ErrorView', () => {
  it('should render correctly with the formal error message', () => {
    const errorMessage = 'No se pudieron cargar los proyectos. Por favor, contacte a soporte.';
    const { getByText } = render(<ErrorView message={errorMessage} />);
    
    expect(getByText('¡Ups!')).toBeTruthy();
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should render an icon or warning symbol', () => {
    const { getByText } = render(<ErrorView message="Error" />);
    expect(getByText('⚠️')).toBeTruthy();
  });
});
