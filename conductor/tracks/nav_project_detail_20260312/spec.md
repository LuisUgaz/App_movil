# Especificación del Track: HU9 - Navegación al Detalle del Proyecto

## Descripción General
Este track define la lógica y la interfaz de usuario para permitir que el usuario navegue desde la pantalla "Listado de proyectos" hacia la pantalla "Detalle del proyecto" al seleccionar un ítem de la lista.

## Requerimientos Funcionales
- **RF-01: Selección de Ítem**: Los ítems del listado (`ProjectItem`) deben ser interactuables utilizando `TouchableHighlight` para proporcionar feedback visual al ser presionados.
- **RF-02: Navegación con Expo Router**: Al presionar un proyecto, la aplicación debe navegar a la ruta correspondiente en el sistema de archivos utilizando las herramientas de `expo-router`.
- **RF-03: Paso de Datos (Objeto Completo)**: Se debe pasar el objeto del proyecto seleccionado como parámetro o mediante un mecanismo global/contexto para que la pantalla de detalle lo reciba.
- **RF-04: Pantalla de Detalle (Placeholder)**: Se debe crear una pantalla básica de destino (`Detalle del proyecto`) que sirva como receptor de la navegación, mostrando únicamente un texto indicando que es el detalle.

## Requerimientos No Funcionales
- **RNF-01: Respuesta Visual Inmediata**: El efecto de resaltado debe ser instantáneo para confirmar la interacción del usuario.
- **RNF-02: Consistencia de Navegación**: La transición entre pantallas debe ser fluida y seguir los estándares de la plataforma (iOS/Android) gestionados por Expo Router.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Detalle de proyecto
  Scenario: Navegar desde el listado al detalle
    Given que el usuario ha iniciado sesión
    And el listado muestra al menos un proyecto
    When el usuario selecciona un proyecto del listado
    Then la app debe navegar a la pantalla "Detalle del proyecto"
```

## Fuera de Alcance
- Implementación del contenido visual del detalle (HU10+).
- Navegación de regreso (Back).
- Gestión de errores en la carga del detalle.
- Filtrado o búsqueda en el listado.

## Pruebas Requeridas
- **Pruebas de UI/Componente**:
  - Verificar que `ProjectItem` sea presionable.
  - Comprobar que se dispara la acción de navegación al presionar.
- **Pruebas de Integración**:
  - Validar que la ruta destino sea la correcta después de la selección.
- **Pruebas Manuales**:
  - Tocar un proyecto y verificar que la pantalla cambie.
  - Observar el efecto de resaltado al presionar.
