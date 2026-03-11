# Plan de Implementación: HT1 - Cargar proyectos desde JSON local

## Fase 1: Definición de Datos y Tipos
Esta fase se centra en establecer el contrato de datos (interfaces de TypeScript) y crear la fuente de datos JSON que alimentará la aplicación.

- [x] Task: Conductor - Definir Interfaz de Proyecto
    - [x] Crear el archivo de tipos `src/types/project.ts`
    - [x] Definir la interfaz `Project` con los campos especificados: `id`, `name`, `description`, `status`, `startDate`, `leader`
- [x] Task: Conductor - Crear Archivo JSON Local
    - [x] Crear el directorio `src/data/` si no existe
    - [x] Crear el archivo `src/data/projects.json` con una lista inicial de proyectos (al menos 3) que sigan la estructura de la interfaz `Project`
- [x] Task: Conductor - User Manual Verification 'Fase 1: Definición de Datos y Tipos' (Protocol in workflow.md)

## Fase 2: Implementación de la Lógica de Acceso (TDD)
Esta fase utiliza TDD para desarrollar el Custom Hook `useProjects` que servirá como interfaz de datos para la UI.

- [x] Task: Conductor - Preparar Pruebas Unitarias para useProjects (Fase Red)
    - [x] Crear el archivo de pruebas `src/hooks/__tests__/useProjects.test.ts`
    - [x] Escribir pruebas que verifiquen:
        - [x] El hook devuelve una lista de proyectos
        - [x] La lista no está vacía (según el JSON creado)
        - [x] Cada proyecto en la lista tiene todos los campos requeridos y son del tipo correcto
    - [x] Ejecutar las pruebas y confirmar que fallan (ya que el hook aún no existe)
- [x] Task: Conductor - Implement Custom Hook useProjects (Fase Green)
    - [x] Crear el archivo `src/hooks/useProjects.ts`
    - [x] Implementar el hook importando directamente el JSON de `src/data/projects.json`
    - [x] Asegurar que el hook devuelva la lista tipada como `Project[]`
    - [x] Ejecutar las pruebas y confirmar que pasan
- [x] Task: Conductor - Refactorización de useProjects (Fase Refactor)
    - [x] Revisar el código para asegurar limpieza y cumplimiento de estándares (tipado estricto, nombrado claro)
    - [x] Verificar que no existan errores de linting o tipos
- [x] Task: Conductor - User Manual Verification 'Fase 2: Implementación de la Lógica de Acceso' (Protocol in workflow.md)

## Fase 3: Verificación Final y Cierre
Fase final para asegurar la integridad técnica antes de dar el track por terminado.

- [x] Task: Conductor - Verificar Cobertura de Pruebas
    - [x] Ejecutar el comando de cobertura y asegurar que el nuevo hook y tipos tengan >80% de cobertura
- [x] Task: Conductor - User Manual Verification 'Fase 3: Verificación Final y Cierre' (Protocol in workflow.md)
