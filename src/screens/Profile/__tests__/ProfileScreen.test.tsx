import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ProfileScreen from '../ProfileScreen';
import { useRouter } from 'expo-router';
import * as userService from '../../../services/userService';

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

// Mock userService
jest.mock('../../../services/userService');
const mockedFetchUserProfile = userService.fetchUserProfile as jest.MockedFunction<typeof userService.fetchUserProfile>;

describe('ProfileScreen', () => {
  const mockUser = {
    id: 1,
    fullName: 'Juan Pérez',
    email: 'juan@test.com',
    position: 'Desarrollador',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedFetchUserProfile.mockResolvedValue(mockUser);
  });

  it('should render the user data correctly after loading', async () => {
    (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });
    
    const { getAllByText, getByText } = render(<ProfileScreen />);
    
    await waitFor(() => expect(getAllByText('Juan Pérez').length).toBeGreaterThan(0));
    expect(getByText('juan@test.com')).toBeTruthy();
    expect(getAllByText('Desarrollador').length).toBeGreaterThan(0);
  });

  it('should render the close button in the header', async () => {
    (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });
    
    const { getByTestId } = render(<ProfileScreen />);
    
    await waitFor(() => expect(getByTestId('close-profile-button')).toBeTruthy());
  });

  it('should navigate to project list when close button is pressed', async () => {
    const mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
    
    const { getByTestId } = render(<ProfileScreen />);
    
    await waitFor(() => expect(getByTestId('close-profile-button')).toBeTruthy());
    const closeButton = getByTestId('close-profile-button');
    
    fireEvent.press(closeButton);

    expect(mockReplace).toHaveBeenCalledWith('/(main)');
  });
});
