import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';
import { AuthContext } from '../context/AuthContext';
import { useProjects } from '../hooks/useProjects';

// Mock useProjects hook
jest.mock('../hooks/useProjects');
// Mock useRouter
jest.mock('expo-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('App Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useProjects as jest.Mock).mockReturnValue({
      projects: [],
      isLoading: false,
      error: null,
    });
  });

  it('should render LoginScreen when not authenticated', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText('Ingresa tu usuario')).toBeTruthy();
  });

  it('should render ProjectListScreen when authenticated', () => {
    const mockProjects = [
      { id: '1', name: 'Proyecto Auth', status: 'Activo', description: '', startDate: '', leader: '' }
    ];
    (useProjects as jest.Mock).mockReturnValue({
      projects: mockProjects,
      isLoading: false,
      error: null,
    });

    // Mock React.useContext to return authenticated state
    const realUseContext = React.useContext;
    jest.spyOn(React, 'useContext').mockImplementation((context) => {
      if (context === AuthContext) {
        return { isAuthenticated: true, user: null, login: jest.fn(), logout: jest.fn() };
      }
      return realUseContext(context);
    });

    const { getByText } = render(<App />);
    expect(getByText('Proyecto Auth')).toBeTruthy();
    
    // Restore
    (React.useContext as jest.Mock).mockRestore();
  });
});
