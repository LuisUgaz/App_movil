import React from 'react';
import { render } from '@testing-library/react-native';
import DetailItem from '../DetailItem';
import { Text } from 'react-native';

describe('DetailItem', () => {
  const mockIcon = <Text testID="mock-icon">Icon</Text>;
  const label = 'Líder';
  const value = 'Juan Pérez';

  it('should render the label and value correctly', () => {
    const { getByText } = render(
      <DetailItem label={label} value={value} icon={mockIcon} />
    );
    
    expect(getByText(label)).toBeTruthy();
    expect(getByText(value)).toBeTruthy();
  });

  it('should render the icon', () => {
    const { getByTestId } = render(
      <DetailItem label={label} value={value} icon={mockIcon} />
    );
    
    expect(getByTestId('mock-icon')).toBeTruthy();
  });
});
