import { Project } from '../types/project';
import projectsData from '../data/projects.json';

/**
 * Custom hook to access the list of projects from the local JSON.
 * @returns {Project[]} The list of projects.
 */
export const useProjects = (): Project[] => {
  return projectsData as Project[];
};
