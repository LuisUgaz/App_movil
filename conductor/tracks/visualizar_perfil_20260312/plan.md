# Plan de Implementación: HU14 - Visualizar perfil con datos completos

## Fase 1: Capa de Datos y Servicios
Establecer la fuente de verdad local y los mecanismos para acceder a los datos del perfil.

- [x] Task: Crear el archivo de datos `src/data/userProfile.json` con información de perfil válida.
- [x] Task: Definir la interfaz `UserProfile` en `src/types/user.ts` (o similar).
- [x] Task: Crear el servicio `src/services/userService.ts` para leer los datos del perfil.
- [x] Task: Escribir pruebas unitarias para `userService.ts` para asegurar la correcta lectura del JSON.
- [x] Task: Conductor - User Manual Verification 'Fase 1: Capa de Datos y Servicios' (Protocol in workflow.md).

## Fase 2: Componentes UI y Visualización
Desarrollar la interfaz visual de la pantalla de perfil siguiendo los requisitos específicos.

- [x] Task: Crear el componente específico `ProfileInfoItem` para mostrar los campos del perfil.
- [x] Task: Escribir pruebas unitarias para `ProfileInfoItem`.
- [x] Task: Implementar el diseño de la pantalla `src/screens/Profile/ProfileScreen.tsx` incluyendo cabecera con avatar y separadores.
- [x] Task: Integrar el servicio `userService` en la pantalla de perfil para cargar los datos.
- [x] Task: Conductor - User Manual Verification 'Fase 2: Componentes UI y Visualización' (Protocol in workflow.md).

## Fase 3: Integración y Calidad
Asegurar que todo funcione correctamente y cumpla con los estándares del proyecto.

- [x] Task: Escribir pruebas de integración para la pantalla de perfil, verificando que los datos locales se muestran tras el inicio de sesión.
- [x] Task: Verificar que la cobertura de código para los nuevos archivos sea superior al 80%.
- [x] Task: Ejecutar linter y comprobaciones de tipos (`tsc`) para asegurar la integridad.
- [x] Task: Conductor - User Manual Verification 'Fase 3: Integración y Calidad' (Protocol in workflow.md).
