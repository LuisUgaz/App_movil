import { UserProfile } from '../types/user';
import userProfileData from '../data/userProfile.json';

/**
 * Service to fetch user profile from local JSON.
 * Abstracted for future API integration.
 */
export const fetchUserProfile = async (): Promise<UserProfile> => {
  // Simulating async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfileData as UserProfile);
    }, 100);
  });
};
