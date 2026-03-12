# Implementation Plan: HU11 - Mostrar valor por defecto si falta el líder

## Phase 1: Preparation & Test-Driven Development (TDD)
En esta fase se prepararán los escenarios de prueba y el código de test necesario para validar el comportamiento del campo líder cuando el dato no existe.

- [x] Task: Preparar datos de prueba en un mock o archivo local simulado con un proyecto sin el campo `leader`.
- [x] Task: Escribir prueba unitaria en `src/components/__tests__/DetailItem.test.tsx` (o equivalente) para verificar que el componente muestra "No especificado" ante un valor nulo o indefinido.
- [x] Task: Escribir prueba de integración en `app/(main)/project/__tests__/[id].test.tsx` para validar que la pantalla de detalle carga correctamente y muestra el valor por defecto para el líder si el proyecto seleccionado no lo tiene.
- [x] Task: Ejecutar pruebas y confirmar que fallan (Red Phase).

## Phase 2: Implementation
En esta fase se realizarán los cambios mínimos necesarios en el código para que las pruebas pasen satisfactoriamente.

- [x] Task: Modificar el componente `DetailItem` (o la pantalla de detalle `app/(main)/project/[id].tsx`) para manejar valores nulos/indefinidos en la propiedad del líder.
- [x] Task: Asegurar que el texto "No especificado" se muestra correctamente con el estilo "Inline Row".
- [x] Task: Verificar que la lógica no introduzca errores de renderizado ni afecte a otros campos del proyecto.
- [x] Task: Ejecutar pruebas y confirmar que pasan (Green Phase).

## Phase 3: Verification & Checkpointing
Fase final para asegurar la calidad del código, la cobertura de pruebas y realizar la verificación manual antes de cerrar el track.

- [x] Task: Verificar que la cobertura de código para los nuevos cambios sea superior al 80%.
- [x] Task: Realizar refactorización opcional del código de visualización para mejorar la legibilidad si es necesario.
- [x] Task: Ejecutar linter y comprobaciones de tipos (`tsc`) para asegurar la integridad del proyecto.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Verification & Checkpointing' (Protocol in workflow.md).
