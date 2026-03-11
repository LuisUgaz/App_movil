# Especificación del Track: HU4: Restringir acceso al listado si no hay sesión

## Resumen (Overview)
Este track define y valida el mecanismo de control de acceso para la pantalla "Listado de proyectos". El objetivo es asegurar que solo los usuarios autenticados puedan visualizar el contenido del listado (actualmente representado por `SuccessScreen` como marcador de posición), redirigiendo automáticamente a la pantalla de "Inicio de sesión" a cualquier usuario que no cuente con una sesión activa.

## Requerimientos Funcionales
- **RF-01: Protección de la pantalla de Listado**: La pantalla "Listado de proyectos" debe ser inaccesible para usuarios no autenticados.
- **RF-02: Redirección automática**: Si un usuario sin sesión intenta acceder al flujo principal de la aplicación, el sistema debe mostrar forzosamente la pantalla de "Inicio de sesión" (`LoginScreen`).
- **RF-03: No exposición de datos**: No se debe renderizar ningún componente ni dato relacionado con proyectos mientras la sesión no esté iniciada.

## Requerimientos No Funcionales
- **RNF-01: Seguridad**: El control de acceso debe basarse estrictamente en el estado `isAuthenticated` gestionado por el `AuthContext`.
- **RNF-02: Experiencia de Usuario (Redirección Silenciosa)**: La transición hacia la pantalla de login debe ser inmediata y sin interrupciones (sin alertas ni avisos intrusivos) al detectar la ausencia de sesión.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Control de acceso
  Scenario: Acceso bloqueado al listado sin sesión iniciada
    Given que el usuario no ha iniciado sesión
    When el usuario intenta acceder a la pantalla "Listado de proyectos"
    Then la app debe redirigirlo a la pantalla "Inicio de sesión"
    And no debe mostrar información de proyectos
```

## Fuera de Alcance
- Desarrollo de la pantalla real de "Listado de proyectos" (con carga de datos JSON).
- Implementación de expiración de sesión o cierre de sesión.
- Control de acceso a la pantalla de Perfil.
- Persistencia real de sesión o tokens.
