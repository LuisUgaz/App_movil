export interface Project {
  id: string | number;
  name: string;
  description: string;
  status: string;
  startDate: string;
  leader: string;
}

export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
}
