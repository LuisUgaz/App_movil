import { renderHook, waitFor } from '@testing-library/react-native';
import { useProjects } from '../useProjects';
import * as projectService from '../../services/projectService';

// Mock the projectService
jest.mock('../../services/projectService');
const mockedFetchProjects = projectService.fetchProjects as jest.MockedFunction<typeof projectService.fetchProjects>;

describe('useProjects', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initially have isLoading set to true, projects empty and error null', () => {
    const { result } = renderHook(() => useProjects());
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.projects).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('should return the projects and set isLoading to false after the delay', async () => {
    const mockData = [
      {
        "id": 1,
        "name": "Test Project",
        "description": "Test Description",
        "status": "En desarrollo",
        "startDate": "2026-03-01",
        "leader": "Test Leader"
      }
    ];
    mockedFetchProjects.mockResolvedValue(mockData);

    const { result } = renderHook(() => useProjects());
    
    // Check initial state
    expect(result.current.isLoading).toBe(true);
    
    // Wait for the simulated delay and state update
    await waitFor(() => expect(result.current.isLoading).toBe(false), { timeout: 3000 });
    
    expect(result.current.projects.length).toBe(1);
    expect(result.current.projects[0].name).toBe('Test Project');
    expect(result.current.error).toBeNull();
  });

  it('should set error state if fetchProjects fails', async () => {
    mockedFetchProjects.mockRejectedValue(new Error('Fetch failed'));

    const { result } = renderHook(() => useProjects());
    
    // Wait for the simulated delay and state update
    await waitFor(() => expect(result.current.isLoading).toBe(false), { timeout: 3000 });
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('No se pudieron cargar los proyectos. Por favor, contacte a soporte.');
    expect(result.current.projects).toEqual([]);
  });
});
