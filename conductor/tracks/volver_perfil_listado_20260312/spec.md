# Specification: HU13 - Volver del perfil al listado

## Overview
Esta especificación define la navegación de regreso desde la pantalla de "Perfil" hacia la pantalla de "Listado de Proyectos". El objetivo es permitir al usuario cerrar la vista de perfil y retornar al flujo principal de la aplicación de manera intuitiva y coherente.

## Requerimientos Funcionales
- **Acción de Regreso:** La pantalla "Perfil" debe incluir un icono de cierre (X o flecha) en la esquina superior para indicar la acción de retorno.
- **Acción de Cierre:** Al presionar el icono de cierre, la aplicación debe navegar de vuelta a la pantalla "Listado de proyectos".
- **Lógica de Navegación:** Se utilizará `router.replace('/(main)')` para asegurar que el usuario regrese al listado de proyectos, cerrando el modal de perfil de forma definitiva en el historial de navegación.
- **Control de Acceso:** Esta acción de navegación solo está disponible para usuarios autenticados que ya se encuentran en la pantalla de perfil.

## Requerimientos No Funcionales
- **Usabilidad:** El icono de cierre debe ser fácilmente identificable y tener un área de pulsación adecuada (mínimo 44x44px).
- **Consistencia Visual:** El estilo del icono y su ubicación deben ser coherentes con los estándares de la aplicación definidos en `product-guidelines.md`.
- **Transición:** El cierre del modal debe seguir la transición estándar de Expo Router (deslizamiento hacia abajo).

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Navegación del perfil
  Scenario: Regresar del perfil al listado
    Given que el usuario ha iniciado sesión
    And se encuentra en la pantalla "Perfil"
    When el usuario selecciona el icono de cierre
    Then la app debe navegar a la pantalla "Listado de proyectos" (/(main))
```

## Fuera de Alcance
- Implementar la visualización de datos del perfil.
- Edición del perfil.
- Cierre de sesión desde la pantalla de perfil.
- Control de acceso al perfil sin sesión (ya cubierto en historias previas).

## Pruebas Requeridas
- **Pruebas de UI/Componente:** Verificar la presencia del icono de cierre en la pantalla de perfil.
- **Pruebas de Integración:** Simular la pulsación del icono y validar que la ruta cambia a `/(main)`.
- **Pruebas Manuales:** Confirmar visualmente que la transición de cierre es fluida y que el usuario aterriza correctamente en el listado.
