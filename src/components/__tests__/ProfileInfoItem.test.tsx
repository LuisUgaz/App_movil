import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileInfoItem from '../ProfileInfoItem';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: 'MaterialCommunityIcons',
}));

describe('ProfileInfoItem', () => {
  const props = {
    label: 'Nombre completo',
    value: 'Juan Pérez',
    icon: 'account' as const,
  };

  it('should render the label and value correctly', () => {
    const { getByText } = render(<ProfileInfoItem {...props} />);
    
    expect(getByText('Nombre completo')).toBeTruthy();
    expect(getByText('Juan Pérez')).toBeTruthy();
  });

  it('should render the icon', () => {
    const { getByTestId } = render(<ProfileInfoItem {...props} />);
    expect(getByTestId('profile-info-item')).toBeTruthy();
  });
});
