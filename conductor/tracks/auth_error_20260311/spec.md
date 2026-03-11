# Especificación del Track: HU3: Mostrar error ante autenticación fallida

## Resumen (Overview)
Este track se enfoca en implementar la lógica de manejo de errores en el flujo de inicio de sesión. El objetivo es que, ante un intento fallido de autenticación (simulado o mock), la aplicación muestre retroalimentación visual clara al usuario, limpie los campos de entrada y bloquee cualquier navegación posterior, manteniéndolo en la pantalla de login.

## Requerimientos Funcionales
- **RF-01: Disparador de Error**: Al pulsar el botón "Ingresar", si las credenciales son incorrectas (simulación), el sistema debe detener el flujo de navegación.
- **RF-02: Visualización de Mensaje**: Mostrar un texto de error inline de color rojo debajo de los campos de entrada que indique "Usuario o contraseña incorrectos".
- **RF-03: Limpieza de Formulario**: Tras detectar un error, el estado de los campos de "Usuario" y "Contraseña" debe reiniciarse a vacío.
- **RF-04: Persistencia del Contexto**: El usuario debe permanecer en la pantalla de Login y el botón "Ingresar" debe mantenerse activo para nuevos intentos.

## Requerimientos No Funcionales
- **RNF-01: Usabilidad**: La retroalimentación debe ser inmediata para evitar confusión.
- **RNF-02: Seguridad Visual**: El mensaje de error no debe revelar qué campo específico (usuario o contraseña) es el incorrecto, siguiendo estándares de seguridad.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Autenticación
  Scenario: Inicio de sesión fallido
    Given que el usuario está en la pantalla de inicio de sesión
    And el resultado de autenticación es fallido
    When el usuario pulsa el botón "Ingresar"
    Then la app debe mostrar un mensaje de error de autenticación debajo de los campos
    And los campos de entrada deben quedar vacíos
    And no debe permitir continuar al siguiente flujo
```

## Fuera de Alcance
- Implementación de validación real contra backend o API.
- Lógica de persistencia de sesión o tokens.
- Recuperación de contraseña o registro de usuarios.
- Flujo exitoso (HU2) o pantallas de destino.
- Bloqueo por demasiados intentos fallidos.
