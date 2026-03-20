# Track Specification: Configuración de Build Android y Generación de APK

## Descripción General
Este track tiene como objetivo configurar el entorno de build de Android utilizando Expo Application Services (EAS), generar un APK (Standalone/Preview) para la aplicación móvil y validar su correcto funcionamiento en un dispositivo físico.

## Objetivos
1. Configurar y validar la integración de EAS Build para Android.
2. Definir perfiles de construcción en `eas.json` específicos para generar un archivo `.apk` instalable.
3. Generar un APK funcional de la aplicación.
4. Validar que la aplicación se instale, abra y permita navegar por sus funcionalidades principales (Login, Listado, Perfil) sin errores críticos.

## Requerimientos Funcionales
- **RF-A1: Configuración de Perfil de Build:** Crear o actualizar `eas.json` con un perfil (ej. `preview` o `local`) configurado para producir un APK (`buildType: "apk"`).
- **RF-A2: Generación de APK:** Ejecutar con éxito el comando `eas build` para Android utilizando el perfil configurado.
- **RF-A3: Instalación y Ejecución:** La aplicación debe poder instalarse en un dispositivo Android físico y abrirse correctamente.
- **RF-A4: Flujo Crítico:** El usuario debe ser capaz de iniciar sesión, ver el listado de proyectos y acceder a su perfil dentro del APK generado.

## Requerimientos No Funcionales
- **RNF-A1: Estabilidad:** El APK no debe cerrarse inesperadamente (crash) durante el inicio o la navegación básica.
- **RNF-A2: Documentación:** Los comandos exactos y pasos para generar futuras versiones del APK deben quedar documentados.

## Criterios de Aceptación
1. Archivo `eas.json` presente y configurado con un perfil para Android APK.
2. Comando `eas build --platform android --profile <perfil>` ejecutado sin errores fatales de compilación.
3. El APK resultante es descargado (si se usa la nube) o generado localmente.
4. Prueba manual exitosa:
   - Instalación del APK en dispositivo físico.
   - Apertura de la app sin errores.
   - Login con credenciales válidas funciona.
   - Navegación al listado de proyectos funciona.

## Fuera de Alcance
- Publicación en Google Play Store.
- Configuración de iOS.
- Implementación de nuevas funcionalidades de negocio (UI/Lógica).
- Configuración de variables de entorno externas (no requeridas por el momento).

## Consideraciones Técnicas
- Se utilizará EAS Build (Nube o Local según disponibilidad de recursos).
- Se asume que el usuario ya tiene configuradas sus credenciales de Android (keystore) o permitirá que EAS las gestione automáticamente.