# Plan de Implementación: HU16 - Mostrar valor por defecto cuando falta el cargo

## Fase 1: Pruebas de Aceptación (TDD - Red Phase)
- [x] **Task: Crear prueba de integración para valor por defecto en cargo.**
    - [x] Crear el archivo `src/__tests__/HU16_ProfilePositionDefault.test.tsx`.
    - [x] Simular un perfil de usuario que no tenga el campo `position`.
    - [x] Verificar que al renderizar `ProfileScreen`, se muestre el texto "No especificado".
    - [x] Verificar que el estilo del texto "No especificado" sea el esperado (cursiva/gris).
    - [x] Confirmar que la aplicación no falla al intentar acceder a una propiedad inexistente.

## Fase 2: Implementación de la Lógica y Estilo (TDD - Green Phase)
- [x] **Task: Actualizar el componente de información del perfil.**
    - [x] Modificar `src/components/ProfileInfoItem.tsx` para que acepte un indicador de "valor por defecto" opcional.
    - [x] Aplicar el estilo diferenciado (cursiva/gris) cuando se pase este indicador.
- [x] **Task: Implementar el valor por defecto en la pantalla de Perfil.**
    - [x] Modificar `src/screens/Profile/ProfileScreen.tsx` para detectar si `profile?.position` es falsy.
    - [x] Pasar "No especificado" como valor y activar el estilo diferenciado si el dato no existe.

## Fase 3: Verificación Final
- [x] **Task: Ejecutar pruebas y validar cobertura.**
    - [x] Ejecutar `npm test` para asegurar que las nuevas pruebas pasan.
    - [x] Verificar que el resto del perfil (nombre, correo) sigue mostrándose correctamente.
- [x] **Task: Conductor - User Manual Verification 'Valor por defecto Cargo' (Protocol in workflow.md)**
