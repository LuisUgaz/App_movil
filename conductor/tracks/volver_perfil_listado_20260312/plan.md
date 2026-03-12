# Implementation Plan: HU13 - Volver del perfil al listado

## Phase 1: Test-Driven Development (TDD)
En esta fase se prepararán los escenarios de prueba y el código de test necesario para validar la navegación de regreso.

- [x] Task: Crear el archivo de prueba unitaria `src/screens/Profile/__tests__/ProfileScreen.test.tsx` (o equivalente si ya existe la pantalla en `app/profile.tsx`) para verificar el icono de cierre.
- [x] Task: Escribir una prueba de integración para validar que la pulsación del icono de cierre dispara la navegación hacia `/(main)` usando `router.replace`.
- [x] Task: Ejecutar las pruebas y confirmar que fallan (Red Phase).

## Phase 2: Implementation
En esta fase se realizarán los cambios mínimos necesarios en el código para que las pruebas pasen satisfactoriamente.

- [x] Task: Modificar `app/profile.tsx` para incluir el icono de cierre (e.g., usando `MaterialCommunityIcons` o un `Stack.Screen` de `expo-router`).
- [x] Task: Implementar la lógica de navegación con `useRouter` de `expo-router` al pulsar el icono.
- [x] Task: Ejecutar las pruebas y confirmar que pasan (Green Phase).

## Phase 3: Verification & Checkpointing
Fase final para asegurar la calidad del código, la cobertura de pruebas y realizar la verificación manual.

- [x] Task: Verificar que la cobertura de código para los nuevos cambios sea superior al 80%.
- [x] Task: Realizar refactorización opcional del código de navegación para mejorar la legibilidad si es necesario.
- [x] Task: Ejecutar linter y comprobaciones de tipos (`tsc`) para asegurar la integridad del proyecto.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Verification & Checkpointing' (Protocol in workflow.md).
