import { renderHook, act } from '@testing-library/react-hooks';
import { useProjects } from '../useProjects';

// Mock the projects.json to throw an error when imported
jest.mock('../../data/projects.json', () => {
  throw new Error('JSON Corrupto');
});

describe('useProjects with error', () => {
  it('should set error state if loading projects fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProjects());
    
    // Check initial state
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeNull();
    
    // Wait for the simulated delay
    await waitForNextUpdate({ timeout: 2000 });
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('No se pudieron cargar los proyectos. Por favor, contacte a soporte.');
    expect(result.current.projects).toEqual([]);
  });
});
