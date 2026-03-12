# Plan de Implementación: HU10 - Visualizar Información Básica del Proyecto

## Fase 1: Componentes UI y Preparación (TDD)
- [x] **Tarea: Crear el componente `StatusBadge`**
    - [x] Escribir pruebas para verificar que el badge muestre el texto del estado y cambie de color según el valor (ej. Activo -> verde).
    - [x] Implementar el componente con estilos base y soporte para temas.
- [x] **Tarea: Crear componente `DetailItem` para las filas de información**
    - [x] Escribir pruebas para validar que se renderice un icono, una etiqueta y un valor.
    - [x] Implementar el componente reutilizable para la lista vertical.
- [x] **Tarea: Conductor - User Manual Verification 'Componentes Base' (Protocol in workflow.md)**

## Fase 2: Desarrollo de la Pantalla de Detalle (TDD)
- [x] **Tarea: Escribir pruebas de renderizado para `ProjectDetailScreen`**
    - [x] Simular el paso de parámetros (objeto `project`) y verificar que todos los campos definidos en la especificación sean visibles.
- [x] **Tarea: Refactorizar `app/(main)/project/[id].tsx`**
    - [x] Sustituir el placeholder por la interfaz final usando `StatusBadge` and `DetailItem`.
    - [x] Integrar iconos (ej. `@expo/vector-icons`).
- [x] **Tarea: Conductor - User Manual Verification 'Interfaz de Detalle' (Protocol in workflow.md)**

## Fase 3: Integración y Cierre
- [x] **Tarea: Verificación de consistencia de datos**
    - [x] Asegurar que la fecha se muestre en formato ISO y el líder sea el correcto.
- [x] **Tarea: Pruebas de regresión y cobertura**
    - [x] Ejecutar `npm test` y asegurar que la cobertura de los nuevos componentes sea >80%.
- [x] **Tarea: Conductor - User Manual Verification 'Validación Final HU10' (Protocol in workflow.md)**
