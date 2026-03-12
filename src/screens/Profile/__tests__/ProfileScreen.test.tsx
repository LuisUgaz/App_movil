import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfileScreen from '../ProfileScreen';
import { useRouter } from 'expo-router';

// Mock useRouter
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
  Stack: {
    Screen: jest.fn(({ options }) => {
      if (options && options.headerLeft) {
        return options.headerLeft();
      }
      return null;
    }),
  },
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: 'MaterialCommunityIcons',
}));

describe('ProfileScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the close button in the header', () => {
    (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });
    
    const { getByTestId } = render(<ProfileScreen />);
    expect(getByTestId('close-profile-button')).toBeTruthy();
  });

  it('should navigate to project list when close button is pressed', () => {
    const mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
    
    const { getByTestId } = render(<ProfileScreen />);
    const closeButton = getByTestId('close-profile-button');
    
    fireEvent.press(closeButton);

    expect(mockReplace).toHaveBeenCalledWith('/(main)');
  });
});
