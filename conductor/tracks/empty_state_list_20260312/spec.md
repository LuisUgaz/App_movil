# Especificación del Track: HU8 - Estado Vacío en Listado de Proyectos

## Descripción General
Este track define el comportamiento y la interfaz de usuario de la pantalla "Listado de proyectos" cuando no existen proyectos disponibles para mostrar, ya sea porque el array de datos está vacío, es nulo o indefinido.

## Requerimientos Funcionales
- **RF-01: Detección de Estado Vacío**: La aplicación debe identificar cuando la fuente de datos (JSON local) no devuelve proyectos (array `[]`, `null` o `undefined`).
- **RF-02: Mensaje de "Sin proyectos disponibles"**: Se debe mostrar un mensaje claro y centrado indicando que no hay proyectos.
- **RF-03: Botón de Refrescar**: Incluir un botón o mecanismo para intentar recargar la lista, preparando la base para futuras integraciones con APIs.
- **RF-04: Ocultar Elementos de Lista**: No se debe renderizar ningún componente de item de proyecto (`ProjectItem`) cuando el estado es vacío.

## Requerimientos No Funcionales
- **RNF-01: Estética Minimalista**: El mensaje debe seguir un estilo limpio y centrado, alineado con el diseño general de la aplicación.
- **RNF-02: Retroalimentación Inmediata**: La transición al estado vacío después de la carga debe ser fluida.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Listado de proyectos
  Scenario: Mostrar estado vacío cuando no hay proyectos
    Given que el usuario ha iniciado sesión
    And no existen proyectos asociados al usuario (datos vacíos, nulos o indefinidos)
    When el usuario accede a la pantalla "Listado de proyectos"
    Then la app debe mostrar un mensaje de "Sin proyectos disponibles"
    And debe mostrar un botón de "Refrescar"
    And no debe mostrar elementos en la lista
```

## Fuera de Alcance
- Implementación de la lista con datos (cubierto por HU7).
- Detalle del proyecto, navegación al detalle, filtrado o búsqueda.
- Modificación de la lógica de autenticación.
- Manejo de errores de carga o JSON inválido (cubierto por HT3).

## Pruebas Requeridas
- **Pruebas de Componente (Jest/React Native Testing Library)**:
  - Verificar que el texto "Sin proyectos disponibles" sea visible.
  - Verificar que el botón de refrescar esté presente.
  - Verificar que no se rendericen `ProjectItem`.
- **Pruebas de Integración**:
  - Validar el flujo desde el hook `useProjects` devolviendo una lista vacía hasta la renderización en la pantalla.
- **Pruebas Manuales**:
  - Simular un archivo JSON vacío y verificar la UI.
  - Presionar el botón de refrescar y confirmar que se intenta disparar la carga.
