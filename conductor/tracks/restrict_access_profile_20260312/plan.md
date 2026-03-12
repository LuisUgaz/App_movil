# Plan de Implementación: HU15 - Restricción de acceso al perfil

## Fase 1: Pruebas de Aceptación (TDD - Red Phase)
- [x] **Task: Crear prueba de integración para restricción de acceso.**
    - [x] Crear el archivo `src/__tests__/HU15_ProfileAccess.test.tsx`.
    - [x] Simular un estado de "No Autenticado" (`isAuthenticated: false`).
    - [x] Verificar que al intentar navegar a `/profile`, se invoque `Alert.alert`.
    - [x] Verificar que se realice la redirección a la pantalla de `/login`.

## Fase 2: Implementación de la Protección (TDD - Green Phase)
- [x] **Task: Reubicar la pantalla de Perfil en el flujo protegido.**
    - [x] Mover `app/profile.tsx` a `app/(main)/profile.tsx` para integrarlo en el grupo de rutas protegidas `(main)`.
    - [x] Eliminar la definición de `profile` en `app/_layout.tsx`.
    - [x] Agregar la definición de `profile` en `app/(main)/_layout.tsx` manteniendo sus opciones (modal, headerShown).
- [x] **Task: Implementar el Aviso y la Redirección.**
    - [x] Modificar el componente `ProfileScreen` o el layout para interceptar el acceso no autenticado.
    - [x] Implementar la llamada a `Alert.alert` con el mensaje "Sesión requerida".
    - [x] Asegurar que el componente no renderice datos sensibles si no hay sesión activa.

## Fase 3: Verificación Final
- [x] **Task: Ejecutar pruebas y validar cobertura.**
    - [x] Ejecutar `npm test` para asegurar que las nuevas pruebas pasan.
    - [x] Verificar que el resto de la aplicación (listado y login) sigue funcionando correctamente.
- [x] **Task: Conductor - User Manual Verification 'Protección de Perfil' (Protocol in workflow.md)**
