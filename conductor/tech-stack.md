# Stack Tecnológico

Este documento detalla las tecnologías seleccionadas para el desarrollo y mantenimiento de la aplicación móvil de consulta de proyectos.

## Frontend & Frameworks
- **React Native (v0.81.5):** Framework principal para el desarrollo de la aplicación móvil multiplataforma.
- **Expo (v54.0.33):** Plataforma de herramientas y servicios para el desarrollo acelerado con React Native.

## Lenguajes
- **TypeScript (v5.9.2):** Superset de JavaScript que añade tipado estático para mejorar la calidad del código y la mantenibilidad.

## Gestión de Estado
- **React Context API:** Utilizada para el manejo del estado global de la aplicación, como la autenticación del usuario.

## Almacenamiento de Datos (Fase Inicial)
- **JSON Local:** Los datos de los proyectos se cargarán desde archivos JSON estáticos incluidos en el código fuente de la aplicación.

## Entorno de Ejecución
- **iOS:** Soporte nativo para dispositivos Apple.
- **Android:** Soporte nativo para dispositivos Android (habilitado con New Architecture).
- **Web:** Capacidad de ejecución en navegadores modernos mediante Expo Web.

## Gestión de Dependencias
- **npm:** Gestor de paquetes oficial para la instalación y actualización de librerías.
