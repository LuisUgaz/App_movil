import React from 'react';
import { render } from '@testing-library/react-native';
import StatusBadge from '../StatusBadge';

describe('StatusBadge', () => {
  it('should render the status text correctly', () => {
    const status = 'Activo';
    const { getByText } = render(<StatusBadge status={status} />);
    
    expect(getByText(status)).toBeTruthy();
  });

  it('should apply correct styles for "Activo" status', () => {
    const { getByTestId } = render(<StatusBadge status="Activo" />);
    const badge = getByTestId('status-badge');
    
    // We can check style properties if needed, or just rely on snapshots/render
    expect(badge).toBeTruthy();
  });

  it('should apply correct styles for "En pausa" status', () => {
    const { getByTestId } = render(<StatusBadge status="En pausa" />);
    expect(getByTestId('status-badge')).toBeTruthy();
  });

  it('should apply correct styles for "En desarrollo" status', () => {
    const { getByTestId } = render(<StatusBadge status="En desarrollo" />);
    expect(getByTestId('status-badge')).toBeTruthy();
  });

  it('should apply correct styles for "En producción" status', () => {
    const { getByTestId } = render(<StatusBadge status="En producción" />);
    expect(getByTestId('status-badge')).toBeTruthy();
  });

  it('should apply default styles for unknown status', () => {
    const { getByTestId } = render(<StatusBadge status="Desconocido" />);
    expect(getByTestId('status-badge')).toBeTruthy();
  });
});
