import React from 'react';
import { render } from '@testing-library/react-native';
import LoadingIndicator from '../LoadingIndicator';

describe('LoadingIndicator', () => {
  it('should render correctly with the loading message', () => {
    const { getByText } = render(<LoadingIndicator />);
    
    expect(getByText('Cargando proyectos...')).toBeTruthy();
  });
});
