# Especificación del Track: HT3 - Mostrar error si el JSON es inválido

## 1. Visión General
Este track tiene como objetivo implementar el manejo controlado de errores cuando el archivo JSON local que contiene los proyectos está corrupto o tiene una sintaxis inválida. La aplicación debe ser capaz de detectar este fallo durante el proceso de carga y responder mostrando un mensaje de error formal e informativo al usuario, garantizando que la aplicación se mantenga estable y no se cierre inesperadamente.

## 2. Requerimientos Funcionales
- **RF-HT3-01: Detección de Error de Carga:** El hook `useProjects` debe capturar cualquier excepción lanzada durante la lectura o el parseo del archivo JSON local.
- **RF-HT3-02: Estado de Error:** El hook `useProjects` debe exponer un nuevo estado `error` (string o null) para indicar si ha ocurrido un problema durante la carga.
- **RF-HT3-03: Mensaje de Error Formal:** Ante un JSON inválido, la aplicación debe mostrar el mensaje: "No se pudieron cargar los proyectos. Por favor, contacte a soporte."
- **RF-HT3-04: Estabilidad de la App:** El error debe manejarse mediante bloques `try-catch` o mecanismos similares para evitar que la aplicación falle por completo (crash).
- **RF-HT3-05: Visualización de Error a Pantalla Completa:** Si ocurre un error, la pantalla (SuccessScreen o futura ListScreen) debe mostrar una vista de error que cubra el área principal, incluyendo un icono de advertencia y el mensaje de error definido.

## 3. Requerimientos No Funcionales
- **RNF-HT3-01: Degradación Controlada:** La UI debe cambiar de un estado de carga (`isLoading`) a un estado de error (`error`) sin dejar la pantalla en blanco.
- **RNF-HT3-02: Consistencia visual:** La vista de error debe seguir las directrices de diseño (bordes redondeados, tipografía legible).
- **RNF-HT3-03: Tipado Estricto:** Asegurar que el retorno del hook `useProjects` incluya el estado `error` en TypeScript.

## 4. Criterios de Aceptación (Gherkin)
```gherkin
Feature: Manejo de errores de datos
  Scenario: JSON corrupto o inválido
    Given que el archivo JSON local está corrupto o no cumple el formato esperado
    When la app intenta cargar el listado de proyectos
    Then la app debe mostrar un mensaje de error indicando "No se pudieron cargar los proyectos. Por favor, contacte a soporte."
    And la app no debe cerrarse
```

## 5. Fuera de Alcance
- Desarrollo de la pantalla "Listado de proyectos" o su renderizado.
- Recuperación o corrección automática del archivo JSON.
- Reintentos de carga avanzados o validación de campos específicos (solo sintaxis malformada).
- Manejo de errores de red o autenticación (ya cubiertos en otros tracks).

## 6. Pruebas Requeridas
- **Unitarias:**
  - Verificar que el hook `useProjects` captura errores de parseo JSON.
  - Verificar que el estado `error` se actualiza correctamente tras un fallo.
- **Integración:**
  - Validar que el componente de interfaz alterna entre carga, error y (futuro) contenido.
- **Manuales:**
  - Corromper intencionalmente el archivo `projects.json` y verificar que aparece el mensaje de error en la app.
