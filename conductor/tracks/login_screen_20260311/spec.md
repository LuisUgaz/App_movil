# Especificación del Track: Pantalla de Inicio de Sesión (HU1)

## Resumen
Este track se enfoca en la creación de la pantalla de inicio de sesión de la aplicación móvil. El objetivo principal es proporcionar una interfaz visual moderna y funcional que permita al usuario interactuar con los campos de entrada requeridos (usuario y contraseña) y el botón de ingreso, siguiendo los principios de diseño de la aplicación.

## Requerimientos Funcionales
- **Visualización de Pantalla:** Al abrir la aplicación, se debe mostrar una interfaz de inicio de sesión limpia y moderna.
- **Campo de Usuario:** Un campo de entrada de texto para que el usuario ingrese sus credenciales.
- **Campo de Contraseña:** Un campo de entrada de texto que oculte los caracteres por seguridad.
- **Control de Visibilidad:** Un botón o icono que permita alternar la visibilidad de la contraseña.
- **Botón "Ingresar":** Un botón claramente visible para iniciar la acción de login.
- **Acción del Botón:** Al presionar el botón "Ingresar", se debe registrar un mensaje en la consola (`console.log`) indicando el intento de acceso (sin validación real).

## Requerimientos No Funcionales
- **Estética:** Estilo "Moderno/App" con colores de marca, bordes redondeados y sombras suaves.
- **Usabilidad:** Uso de componentes nativos de React Native para una experiencia fluida.
- **Organización del Código:** Estructura modular, ubicando la pantalla en `src/screens/Login/`.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Inicio de sesión
  Scenario: Visualizar la pantalla de login
    Given que el usuario abre la aplicación
    When se muestra la pantalla de inicio de sesión
    Then la app debe mostrar los campos requeridos para ingresar (usuario y contraseña)
    And debe mostrar el botón "Ingresar"
    And el campo de contraseña debe ocultar los caracteres por defecto
    And debe existir una opción para alternar la visibilidad de la contraseña
```

## Fuera de Alcance
- Validación real de credenciales.
- Autenticación contra backend, API o base de datos.
- Sesión persistente o expiración de sesión.
- Navegación a otras pantallas (listado de proyectos).
- Mensajes de error por credenciales inválidas.
- Recuperación de contraseña o registro de usuarios.
