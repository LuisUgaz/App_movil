# Plan de Implementación: HT3 - Mostrar error si el JSON es inválido

## Fase 1: Actualización de Hook y Gestión de Errores (TDD)
Esta fase se centra en añadir la lógica de detección de errores al hook `useProjects`.

- [x] **Task: Conductor - Preparar Pruebas Unitarias para Error JSON (Fase Red)**
    - [x] Actualizar `src/hooks/__tests__/useProjects.test.ts`
    - [x] Añadir pruebas para verificar que el hook captura errores de JSON corrupto.
    - [x] Asegurar que las nuevas pruebas falle inicialmente.
- [x] **Task: Conductor - Implementar Captura de Errores en useProjects (Fase Green)**
    - [x] Modificar `src/types/project.ts` para añadir `error: string | null` a la interfaz.
    - [x] Actualizar `src/hooks/useProjects.ts` con bloque `try-catch`.
    - [x] Gestionar el estado `error` cuando el parseo del JSON falla.
    - [x] Ejecutar las pruebas para confirmar que pasan.
- [x] **Task: Conductor - Refactorización de Lógica de Carga (Fase Refactor)**
    - [x] Revisar la limpieza del código en el hook.
    - [x] Asegurar que no hay fugas de memoria o re-renderizados innecesarios.
- [x] **Task: Conductor - User Manual Verification 'Fase 1: Gestión de Errores' (Protocol in workflow.md)**

## Fase 2: Implementación de la Vista de Error (UI)
Esta fase se centra en la respuesta visual de la aplicación ante un error.

- [x] **Task: Conductor - Crear Componente ErrorView (Fase Red)**
    - [x] Crear el archivo de pruebas `src/components/__tests__/ErrorView.test.tsx` (si no existe) o añadir a uno existente.
    - [x] Definir el comportamiento esperado para la visualización del error formal.
- [x] **Task: Conductor - Implementar Componente ErrorView (Fase Green)**
    - [x] Crear/Actualizar un componente visual (puede ser dentro de `SuccessScreen` o un componente separado) que muestre el error a pantalla completa.
    - [x] Incluir el mensaje: "No se pudieron cargar los proyectos. Por favor, contacte a soporte." e icono de advertencia.
- [x] **Task: Conductor - Integrar Estado de Error en la Pantalla (Fase Green)**
    - [x] Actualizar `src/screens/Login/SuccessScreen.tsx` para consumir el estado `error` del hook.
    - [x] Mostrar la vista de error condicionalmente si el estado `error` es verdadero.
- [x] **Task: Conductor - User Manual Verification 'Fase 2: Respuesta Visual de Error' (Protocol in workflow.md)**

## Fase 3: Verificación Final y Cierre
Fase final para asegurar la integridad técnica y cumplimiento de criterios de aceptación.

- [x] **Task: Conductor - Verificar Cobertura de Pruebas**
    - [x] Ejecutar el comando de cobertura y asegurar que el manejo de errores tenga >80% de cobertura.
- [x] **Task: Conductor - User Manual Verification 'Fase 3: Verificación Final y Cierre' (Protocol in workflow.md)**
