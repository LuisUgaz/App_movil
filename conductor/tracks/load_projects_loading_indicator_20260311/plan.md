# Plan de Implementación: HT2 - Mostrar indicador de carga durante la lectura del JSON

## Fase 1: Definición de Componente y Estados
Esta fase se centra en establecer el componente visual reutilizable y actualizar los tipos técnicos del hook `useProjects`.

- [x] **Task: Conductor - Crear Componente de Carga**
    - [x] Crear el archivo `src/components/LoadingIndicator.tsx`
    - [x] Implementar un componente visual simple que muestre un texto descriptivo ("Cargando proyectos...")
    - [x] Estilizarlo según la interfaz limpia (RNF-06)
- [x] **Task: Conductor - Actualizar Interfaz del Hook**
    - [x] Modificar el retorno del hook `useProjects` para que incluya un objeto con `projects` y `isLoading`
    - [x] Actualizar los tipos de TypeScript correspondientes para reflejar el nuevo estado boolean
- [x] **Task: Conductor - User Manual Verification 'Fase 1: Definición de Datos y Tipos' (Protocol in workflow.md)**

## Fase 2: Implementación de la Lógica de Carga (TDD)
Esta fase utiliza TDD para añadir la lógica de carga y el retraso simulado al hook `useProjects`.

- [x] **Task: Conductor - Preparar Pruebas Unitarias para isLoading (Fase Red)**
    - [x] Actualizar el archivo de pruebas `src/hooks/__tests__/useProjects.test.ts`
    - [x] Escribir pruebas que verifiquen:
        - [x] El hook devuelve `isLoading: true` inicialmente
        - [x] Después de un retraso artificial (e.g., 1000ms), `isLoading` debe ser `false`
    - [x] Ejecutar las pruebas y confirmar que fallan (ya que el estado no ha sido implementado)
- [x] **Task: Conductor - Implementar Lógica de Carga y Simulación (Fase Green)**
    - [x] Actualizar `src/hooks/useProjects.ts`
    - [x] Usar `useState` y `useEffect` para gestionar el estado de carga
    - [x] Implementar un `setTimeout` de 1000ms para simular la lectura asíncrona
    - [x] Ejecutar las pruebas y confirmar que pasan (asegurar uso de `act` o `waitFor` en los tests)
- [x] **Task: Conductor - Refactorización de useProjects (Fase Refactor)**
    - [x] Revisar el código para asegurar limpieza y cumplimiento de estándares (tipado estricto)
    - [x] Asegurar que el hook no re-renderice innecesariamente
- [x] **Task: Conductor - User Manual Verification 'Fase 2: Implementación de la Lógica de Acceso' (Protocol in workflow.md)**


## Fase 3: Verificación Final y Cierre
Fase final para asegurar la integridad técnica antes de dar el track por terminado.

- [x] **Task: Conductor - Verificar Cobertura de Pruebas**
    - [x] Ejecutar el comando de cobertura y asegurar que el nuevo hook y tipos tengan >80% de cobertura
- [x] **Task: Conductor - User Manual Verification 'Fase 3: Verificación Final y Cierre' (Protocol in workflow.md)**
