import { UserProfile } from '../types/user';

/**
 * Service to fetch user profile from local JSON.
 * Abstracted for future API integration.
 */
export const fetchUserProfile = async (): Promise<UserProfile> => {
  // Simulating async behavior
  const userData = await import('../data/userProfile.json');
  return userData.default as UserProfile;
};
