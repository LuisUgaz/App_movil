# Implementation Plan: Configuración de Build Android y Generación de APK

## Phase 1: Verificación de Entorno y Configuración Expo [checkpoint: no-sha]
Esta fase asegura que el proyecto esté listo para iniciar un proceso de build de Android.

- [x] Task: Verificar configuración de `app.json` (Android package name, versión, iconos). [no-sha]
- [x] Task: Ejecutar `npx expo-doctor` para asegurar salud del proyecto y compatibilidad de versiones. [no-sha]
- [x] Task: Verificar que no haya errores de compilación previos ejecutando un build de desarrollo simulado. [no-sha]
- [x] Task: Conductor - User Manual Verification 'Phase 1: Verificación de Entorno' (Protocol in workflow.md) [no-sha]

## Phase 2: Configuración de EAS Build para Android [checkpoint: no-sha]
Configurar el archivo `eas.json` para permitir la generación de un APK instalable (Standalone).

- [x] Task: Crear o actualizar `eas.json` con el perfil `preview` configurado para Android. [no-sha]
- [x] Task: Configurar `buildType: "apk"` dentro del perfil `preview` para evitar generar un AAB (Android App Bundle). [no-sha]
- [x] Task: Documentar el comando exacto de construcción en el archivo `index.md` del track. [no-sha]
- [x] Task: Conductor - User Manual Verification 'Phase 2: Configuración de EAS' (Protocol in workflow.md) [no-sha]

## Phase 3: Ejecución de Build y Generación de APK [checkpoint: no-sha]
Lanzar el proceso de construcción del binario Android.

- [x] Task: Ejecutar `eas build --platform android --profile preview` (o `--local` si el entorno lo permite). [no-sha]
- [x] Task: Obtener el archivo `.apk` final (descarga o ruta local). [no-sha]
- [x] Task: Verificar el peso y metadatos básicos del APK generado. [no-sha]
- [x] Task: Conductor - User Manual Verification 'Phase 3: Ejecución de Build' (Protocol in workflow.md) [no-sha]

## Phase 4: Validación y Pruebas en Dispositivo Físico [checkpoint: no-sha]
Verificar que la aplicación sea instalable y funcional en el entorno real de Android.

- [x] Task: Transferir e instalar el APK en un dispositivo físico. [no-sha]
- [x] Task: Realizar prueba manual de humo: Apertura -> Login -> Listado -> Perfil. [no-sha]
- [x] Task: Validar que no haya cierres inesperados durante el uso básico. [no-sha]
- [x] Task: Conductor - User Manual Verification 'Phase 4: Validación y Pruebas' (Protocol in workflow.md) [no-sha]