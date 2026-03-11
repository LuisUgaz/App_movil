import { useState, useEffect } from 'react';
import { Project, ProjectsState } from '../types/project';
import { fetchProjects } from '../services/projectService';

/**
 * Custom hook to access the list of projects from the local JSON.
 * @returns {ProjectsState} The projects list and loading state.
 */
export const useProjects = (): ProjectsState => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los proyectos. Por favor, contacte a soporte.');
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      loadProjects();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    projects,
    isLoading,
    error,
  };
};
