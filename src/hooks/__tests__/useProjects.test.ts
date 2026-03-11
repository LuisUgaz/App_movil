import { renderHook } from '@testing-library/react-hooks';
import { useProjects } from '../useProjects';
import projectsData from '../../data/projects.json';

describe('useProjects', () => {
  it('should return a list of projects', () => {
    const { result } = renderHook(() => useProjects());
    
    expect(Array.isArray(result.current)).toBe(true);
  });

  it('should return the projects defined in the JSON file', () => {
    const { result } = renderHook(() => useProjects());
    
    expect(result.current.length).toBe(projectsData.length);
    expect(result.current).toEqual(projectsData);
  });

  it('should have projects with the correct structure', () => {
    const { result } = renderHook(() => useProjects());
    
    result.current.forEach((project: any) => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('status');
      expect(project).toHaveProperty('startDate');
      expect(project).toHaveProperty('leader');
    });
  });
});
