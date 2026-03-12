# Plan de Implementación: HU5 - Solicitar inicio de sesión cuando la sesión ha expirado

## Fase 1: Lógica de Expiración en AuthContext (TDD)
- [x] **Task: TDD - Implementar lógica de expiración por tiempo.**
    - [x] Crear pruebas unitarias en `src/context/__tests__/AuthContext.test.tsx` para validar el cálculo de expiración.
    - [x] Añadir constante `SESSION_TIMEOUT = 60000` (1 min) en `AuthContext.tsx`.
    - [x] Implementar estado `lastActiveAt` para rastrear la última interacción.
    - [x] Implementar función `resetTimer` que actualice `lastActiveAt`.
    - [x] Implementar efecto que verifique periódicamente si el tiempo transcurrido desde `lastActiveAt` supera `SESSION_TIMEOUT`.
- [x] **Task: Conductor - User Manual Verification 'Lógica de Expiración' (Protocol in workflow.md)**

## Fase 2: Seguimiento de Interacción Global y Redirección
- [x] **Task: TDD - Rastreo de actividad y navegación automática.**
    - [x] Crear pruebas de integración para verificar que el toque en pantalla resetea el temporizador.
    - [x] Envolver el contenido de `RootLayout` (`app/_layout.tsx`) o `AppLayout` (`app/(main)/_layout.tsx`) con un componente que detecte eventos táctiles (PanResponder o GestureDetector).
    - [x] Implementar la llamada a `resetTimer` en cada evento táctil detectado.
    - [x] Integrar el uso de `Alert` y `router.replace('/login')` cuando la sesión sea marcada como expirada.
- [x] **Task: Conductor - User Manual Verification 'Seguimiento de Interacción' (Protocol in workflow.md)**

## Fase 3: Verificación de Seguridad y Regresión
- [x] **Task: Verificación final de flujos de acceso.**
    - [x] Confirmar que al expirar la sesión, el acceso al listado y detalle de proyectos queda bloqueado de forma inmediata.
    - [x] Ejecutar suite completa de pruebas para asegurar que el login/logout manual sigue funcionando correctamente.
    - [x] Verificar que la cobertura de código para la nueva lógica supere el 80%.
- [x] **Task: Conductor - User Manual Verification 'Final Verification' (Protocol in workflow.md)**
