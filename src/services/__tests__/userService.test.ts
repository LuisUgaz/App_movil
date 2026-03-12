import { fetchUserProfile } from '../userService';

describe('userService', () => {
  it('should fetch user profile from local JSON', async () => {
    const profile = await fetchUserProfile();
    
    expect(profile).toBeDefined();
    expect(profile.fullName).toBe('Administrador del Sistema');
    expect(profile.email).toBe('admin@empresa.com');
    expect(profile.position).toBe('Líder Técnico de Desarrollo');
  });
});
