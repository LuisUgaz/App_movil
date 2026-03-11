# Plan de Implementación: HU4: Restringir acceso al listado si no hay sesión

Este plan sigue la metodología TDD (Test-Driven Development) definida en `workflow.md`.

## Fase 1: Validación y Protección de Navegación
Esta fase se centra en asegurar que la lógica de renderizado condicional en `App.tsx` proteja correctamente las pantallas que requieren autenticación, utilizando `SuccessScreen` como marcador de posición para el listado de proyectos.

- [x] **Tarea: Crear pruebas para el control de acceso en App.tsx** [Manual Verification]
    - [ ] Escribir una prueba unitaria (Fase Roja) que simule un estado no autenticado (`isAuthenticated: false`) en el `AuthContext`.
    - [ ] Verificar que el componente `AppContent` renderice `LoginScreen` en ausencia de sesión.
    - [ ] Verificar que el componente `AppContent` NO renderice `SuccessScreen` mientras el usuario no esté autenticado.
- [x] **Tarea: Implementar y verificar lógica de protección en App.tsx** [Verified]
    - [ ] Asegurar que `AppContent` consuma correctamente `isAuthenticated` desde el `AuthContext`.
    - [ ] Confirmar que el renderizado condicional bloquea efectivamente el acceso al marcador del listado (Fase Verde).
- [x] **Tarea: Conductor - User Manual Verification 'Protección de Navegación' (Protocol in workflow.md)** [Confirmed]
