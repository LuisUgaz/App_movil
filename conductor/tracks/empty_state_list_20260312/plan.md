# Plan de Implementación: HU8 - Estado Vacío en Listado de Proyectos

## Fase 1: Investigación y Configuración
- [x] **Tarea: Revisar `ProjectListScreen` y `useProjects`**
    - [x] Identificar el punto de renderización de la lista y cómo se maneja actualmente el estado de "datos disponibles" (HU7).
    - [x] Analizar el hook `useProjects` para asegurar que devuelve una lista vacía, nula o indefinida en los escenarios de prueba.

## Fase 2: Implementación de la UI para el Estado Vacío (TDD)
- [x] **Tarea: Crear pruebas para el componente de Estado Vacío**
    - [x] Escribir una prueba unitaria para una nueva vista de estado vacío (o una condición dentro de `ProjectListScreen`) que verifique la visibilidad del texto "Sin proyectos disponibles".
    - [x] Verificar que se muestre el botón de "Refrescar".
- [x] **Tarea: Implementar el mensaje y el botón en `ProjectListScreen`**
    - [x] Crear la UI minimalista para mostrar el mensaje centrado.
    - [x] Añadir el botón de "Refrescar" con una función de callback que dispare el refresco (aunque por ahora solo vuelva a cargar el JSON local).
- [x] **Tarea: Verificar que NO se renderizan `ProjectItem`**
    - [x] Escribir una prueba que asegure que no existan componentes `ProjectItem` en el árbol de renderizado cuando la lista está vacía.
- [x] **Tarea: Conductor - User Manual Verification 'UI Estado Vacío' (Protocol in workflow.md)**

## Fase 3: Integración de Lógica (TDD)
- [x] **Tarea: Pruebas de integración con `useProjects`**
    - [x] Escribir una prueba de integración que simule que `useProjects` devuelve un array vacío `[]`, `null` y `undefined`, y validar que la pantalla reacciona correctamente en cada caso.
- [x] **Tarea: Manejo de estados de datos en la pantalla principal**
    - [x] Asegurar que el componente de lista condicione su renderizado a la presencia de datos.
- [x] **Tarea: Conductor - User Manual Verification 'Integración Estado Vacío' (Protocol in workflow.md)**

## Fase 4: Verificación Final y Cierre
- [x] **Tarea: Ejecutar suite de pruebas completa**
    - [x] Validar que no hay regresiones en las historias previas (HU7, HT1, HT2, HT3).
    - [x] Verificar que la cobertura de código del nuevo comportamiento sea superior al 80%.
- [x] **Tarea: Verificación Manual en Dispositivo/Emulador**
    - [x] Simular carga de JSON vacío y validar la visualización.
    - [x] Probar interacción con el botón de refrescar.
- [x] **Tarea: Conductor - User Manual Verification 'Verificación Final HU8' (Protocol in workflow.md)**
