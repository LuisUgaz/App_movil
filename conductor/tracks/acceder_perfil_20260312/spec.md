# Specification: HU12 - Acceder a la pantalla de perfil

## Overview
Esta especificación define la navegación desde la pantalla de "Listado de Proyectos" hacia la pantalla de "Perfil". El objetivo es proporcionar un punto de acceso claro y funcional para que los usuarios autenticados puedan dirigirse a su información personal.

## Requerimientos Funcionales
- **Punto de Acceso:** La opción "Perfil" debe estar disponible en la pantalla de "Listado de Proyectos". Según la preferencia, se utilizará un icono de perfil.
- **Ubicación:** El icono de acceso al perfil se ubicará preferiblemente en una barra de navegación (Tab Bar) o en la cabecera si el diseño actual no contempla pestañas.
- **Acción de Navegación:** Al seleccionar el icono de perfil, la aplicación debe navegar a la pantalla "Perfil".
- **Transición:** La navegación se realizará mediante una vista de tipo "Modal" (deslizamiento desde abajo).
- **Control de Acceso:** Esta navegación solo debe estar permitida para usuarios que hayan iniciado sesión correctamente.

## Requerimientos No Funcionales
- **Usabilidad:** El icono debe ser intuitivo (ej. un icono de persona o cuenta).
- **Feedback Visual:** Debe haber una respuesta inmediata al pulsar el botón de perfil.
- **Consistencia:** El diseño del icono y la transición deben seguir los estándares visuales de la aplicación definidos en `product-guidelines.md`.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Navegación al perfil
  Scenario: Acceder al perfil desde el listado
    Given que el usuario ha iniciado sesión
    And se encuentra en la pantalla "Listado de proyectos"
    When el usuario selecciona la opción "Perfil" (icono)
    Then la app debe navegar a la pantalla "Perfil" mediante una transición modal
```

## Fuera de Alcance
- Implementar la visualización de los datos reales del perfil (HU13/HU14).
- Edición del perfil.
- Cierre de sesión desde la pantalla de perfil.
- Navegación de regreso (será manejada por los controles estándar del modal).

## Pruebas Requeridas
- **Pruebas de UI/Componente:** Verificar la presencia del icono de perfil en la pantalla de listado.
- **Pruebas de Integración:** Validar que al pulsar el icono, se dispare la acción de navegación hacia `/profile`.
- **Pruebas Manuales:** Confirmar que la transición modal sea fluida y que la pantalla de destino sea la correcta.
