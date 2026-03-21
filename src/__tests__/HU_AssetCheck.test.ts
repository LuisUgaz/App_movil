import fs from 'fs';
import path from 'path';

describe('Verificación de Activos Visuales (Iconos)', () => {
  const assetsDir = path.join(__dirname, '../../assets');

  test('La imagen base "aplicacion-movil.png" debe existir', () => {
    const filePath = path.join(assetsDir, 'aplicacion-movil.png');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  test('Los archivos de iconos esperados deben estar presentes en /assets', () => {
    const requiredAssets = [
      'icon.png',
      'adaptive-icon.png',
      'splash-icon.png',
      'favicon.png'
    ];

    requiredAssets.forEach(asset => {
      const filePath = path.join(assetsDir, asset);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });
});
