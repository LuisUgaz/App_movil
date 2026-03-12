# Implementation Plan: HU6: Cerrar sesión

## Phase 1: Infrastructure & Testing
- [x] Task: Crear suite de pruebas de aceptación para HU6.
    - [ ] Crear `src/__tests__/HU6_Acceptance.test.tsx`.
    - [ ] Implementar escenario Gherkin: "Cierre de sesión exitoso" usando mocks de navegación.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Infrastructure & Testing' (Protocol in workflow.md)

## Phase 2: Implementation (TDD)
- [x] Task: Modificar Layout para añadir botón de Logout en el Header.
    - [x] **Red:** El test de aceptación debe fallar al no encontrar el botón de Logout en el header o fallar en la redirección.
    - [x] **Green:** Actualizar `app/(main)/_layout.tsx` para añadir `headerRight` en la configuración de `Stack`.
    - [x] Conectar el botón con la función `signOut` del `AuthContext`.
- [x] Task: Implementar lógica de limpieza de "caché".
    - [x] Asegurar que `signOut` resetea los estados necesarios (placeholder de limpieza de caché).
- [x] Task: Conductor - User Manual Verification 'Phase 2: Implementation (TDD)' (Protocol in workflow.md)

## Phase 3: Navigation Security & Verification
- [x] Task: Validar restricción de navegación hacia atrás.
    - [x] Asegurar que el uso de `Redirect` en el layout protege todas las rutas del grupo `(main)`.
    - [x] Verificar que no se puede volver a pantallas protegidas tras el logout.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Navigation Security & Verification' (Protocol in workflow.md)
