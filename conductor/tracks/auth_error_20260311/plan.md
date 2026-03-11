# Plan de Implementación: HU3: Mostrar error ante autenticación fallida

Este plan sigue la metodología TDD (Test-Driven Development) definida en `workflow.md`.

## Fase 1: Preparación y Lógica de Autenticación (Red/Green/Refactor)
En esta fase se preparará la lógica en el `AuthContext` para manejar el estado de error y simular una falla.

- [x] **Tarea: Configurar estado de error en AuthContext** [dev_sha_1]
    - [ ] Definir el campo `error` (string | null) en el tipo `AuthContextData`.
    - [ ] Inicializar el estado de error en el `AuthProvider` de `src/context/AuthContext.tsx`.
    - [ ] Limpiar el error al iniciar un nuevo intento de login.
- [x] **Tarea: Implementar simulación de fallo en login** [dev_sha_2]
    - [ ] Escribir prueba unitaria en `src/context/__tests__/AuthContext.test.tsx` (o crear si no existe) que verifique que el error se establece cuando las credenciales son incorrectas.
    - [ ] Modificar la función `signIn` para que acepte una validación (mock) que devuelva un error si los campos no coinciden con los valores esperados.
    - [ ] Asegurar que los campos se limpien en el componente tras un fallo (la lógica de limpieza se probará en la fase de UI).
- [x] **Tarea: Conductor - User Manual Verification 'Fase 1: Lógica de Autenticación' (Protocol in workflow.md)** [v1]

## Fase 2: Interfaz de Usuario y Feedback Visual (Red/Green/Refactor)
En esta fase se actualizará la pantalla de Login para reaccionar al estado de error.

- [x] **Tarea: Crear componente de mensaje de error** [dev_sha_3]
    - [ ] Escribir prueba unitaria para un nuevo componente (o sección en LoginScreen) que verifique su renderizado condicional.
    - [ ] Implementar el texto de error inline debajo de los inputs en `src/screens/Login/LoginScreen.tsx`.
    - [ ] Aplicar estilos (color rojo, margen, tipografía).
- [x] **Tarea: Vincular limpieza de formulario** [dev_sha_4]
    - [ ] Escribir prueba en `LoginScreen.test.tsx` que simule un login fallido y verifique que los `CustomInput` queden vacíos.
    - [ ] Implementar la limpieza de los estados locales (`username`, `password`) en `LoginScreen.tsx` cuando se detecte un error desde el contexto.
- [x] **Tarea: Conductor - User Manual Verification 'Fase 2: Interfaz de Usuario' (Protocol in workflow.md)** [v2]

## Fase 3: Pruebas de Integración y Cierre
Validación final del flujo completo.

- [x] **Tarea: Prueba de Integración de Flujo Fallido** [dev_sha_5]
    - [ ] Crear prueba de integración que cubra: Ingreso de credenciales erróneas -> Click en Ingresar -> Ver mensaje de error -> Verificar campos vacíos -> Verificar permanencia en la pantalla.
- [x] **Tarea: Conductor - User Manual Verification 'Fase 3: Pruebas de Integración' (Protocol in workflow.md)** [v3]
