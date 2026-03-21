import fs from 'fs';
import path from 'path';

describe('Validación de Configuración app.json (Iconos y Splash)', () => {
  const appJsonPath = path.join(__dirname, '../../app.json');

  test('El archivo app.json debe existir y ser un JSON válido', () => {
    expect(fs.existsSync(appJsonPath)).toBe(true);
    const content = fs.readFileSync(appJsonPath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  test('Configuración de iconos y splash en app.json debe ser correcta', () => {
    const config = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    const expo = config.expo;

    expect(expo.icon).toBe('./assets/icon.png');
    expect(expo.splash.image).toBe('./assets/splash-icon.png');
    expect(expo.android.adaptiveIcon.foregroundImage).toBe('./assets/adaptive-icon.png');
    expect(expo.web.favicon).toBe('./assets/favicon.png');
  });
});
