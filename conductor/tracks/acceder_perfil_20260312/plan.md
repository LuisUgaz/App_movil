# Implementation Plan: HU12 - Acceder a la pantalla de perfil

## Phase 1: Preparation & Test-Driven Development (TDD)
En esta fase se prepararán los escenarios de prueba y el código de test necesario para validar la navegación hacia la pantalla de perfil.

- [x] Task: Preparar la estructura básica de la pantalla de perfil (`app/profile.tsx`) con un marcador de posición (placeholder) si no existe.
- [x] Task: Escribir una prueba unitaria en `src/screens/ProjectList/__tests__/ProjectListScreen.test.tsx` (o equivalente) para verificar la existencia del icono de perfil en el listado de proyectos.
- [x] Task: Escribir una prueba de integración para validar que la pulsación del icono invoca la navegación hacia `/profile` con una transición de tipo modal.
- [x] Task: Ejecutar las pruebas y confirmar que fallan (Red Phase).

## Phase 2: Implementation
En esta fase se realizarán los cambios mínimos necesarios en el código para que las pruebas de navegación pasen satisfactoriamente.

- [x] Task: Añadir el icono de perfil (IconButton) en la pantalla de "Listado de Proyectos" (`app/(main)/index.tsx`).
- [x] Task: Configurar la navegación hacia `/profile` en `expo-router`.
- [x] Task: Definir la transición tipo modal para la ruta `/profile` en la configuración del layout global o específico (`app/_layout.tsx` o `app/(main)/_layout.tsx`).
- [x] Task: Ejecutar las pruebas y confirmar que pasan (Green Phase).

## Phase 3: Verification & Checkpointing
Fase final para asegurar la calidad del código, la cobertura de pruebas y realizar la verificación manual antes de cerrar el track.

- [x] Task: Verificar que la cobertura de código para los nuevos cambios sea superior al 80%.
- [x] Task: Realizar refactorización opcional del código de navegación para mejorar la legibilidad si es necesario.
- [x] Task: Ejecutar linter y comprobaciones de tipos (`tsc`) para asegurar la integridad del proyecto.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Verification & Checkpointing' (Protocol in workflow.md).
