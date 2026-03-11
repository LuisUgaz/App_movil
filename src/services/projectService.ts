import { Project } from '../types/project';

/**
 * Service to fetch projects from local JSON.
 * This is abstracted to allow easier testing and future API integration.
 */
export const fetchProjects = async (): Promise<Project[]> => {
  const projectsData = await import('../data/projects.json');
  return projectsData.default as Project[];
};
