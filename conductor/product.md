# Concepto Inicial

Se requiere desarrollar una aplicación móvil que permita consultar proyectos de software de manera rápida, sencilla y segura desde el celular. Actualmente, el acceso a esta información solo es posible desde una computadora, lo que dificulta su consulta cuando el usuario se encuentra fuera de ella. Por esta razón, se necesita una herramienta móvil que permita visualizar los proyectos en cualquier momento y lugar.

La aplicación estará enfocada principalmente en mostrar un listado de proyectos, presentándolos de forma clara, ordenada y fácil de navegar. Desde este listado, el usuario podrá seleccionar un proyecto para visualizar sus detalles básicos, como el nombre del proyecto, una breve descripción, el estado actual (por ejemplo: en desarrollo, en pruebas o en producción), la fecha de inicio y el responsable o líder del proyecto. En esta primera versión, la aplicación estará orientada únicamente a la consulta de información, por lo que no incluirá funcionalidades de creación, edición o eliminación de proyectos.

El listado de proyectos se cargará desde un archivo JSON incluido en el propio código fuente de la aplicación, sin necesidad de utilizar una base de datos en esta etapa inicial.

Debido a que la información debe mantenerse protegida, la aplicación deberá contar con un sistema de autenticación mediante inicio de sesión, permitiendo el acceso únicamente a usuarios autorizados con credenciales válidas.

Asimismo, se incluirá una sección de perfil de usuario, donde se mostrará información básica del usuario autenticado, como su nombre, correo electrónico y cargo.

Finalmente, la aplicación deberá ofrecer una experiencia de uso simple, intuitiva y rápida, con una interfaz limpia optimizada para dispositivos móviles comunes, permitiendo una navegación fluida y sentando las bases para futuras ampliaciones de funcionalidades.

# Definición del Producto

La aplicación está diseñada para ofrecer una experiencia móvil fluida y multiplataforma (iOS y Android), centrada en la facilidad de uso y una interfaz limpia. App móvil segura para consultar un listado de proyectos y su detalle desde cualquier lugar, usando datos locales en JSON.

# Usuarios Objetivo

- Usuarios finales que buscan una aplicación móvil ágil y moderna.
- Desarrolladores que necesiten una arquitectura sólida para escalar el proyecto móvil.

# Objetivos

- Establecer una base técnica sólida y escalable para el crecimiento de la app.
- Implementar una interfaz de usuario atractiva y coherente.
- Implementar autenticación para restringir acceso.
- Mostrar listado de proyectos cargados desde JSON local.
- Permitir visualizar detalle básico por proyecto.
- Garantizar usabilidad (UI simple) y rapidez (datos locales).
- Manejar errores del JSON sin fallos de la aplicación.

# Características Principales

- Soporte completo para iOS y Android desde un único código base.
- Integración con el ecosistema de Expo (Status Bar, Splash Screen, etc.).
- Gestión de tipos avanzada con TypeScript.
- Estructura de componentes reutilizables.

# Requerimientos funcionales (RF)

- RF-01: Inicio de sesión: permitir autenticación con credenciales válidas.
- RF-15: Error de autenticación: mostrar mensaje de error inline y limpiar campos ante credenciales inválidas.
- RF-02: Cierre de sesión: permitir salir de la cuenta.
- RF-03: Restricción de acceso: bloquear listado/detalle sin sesión.
- RF-04: Carga desde JSON local: leer proyectos desde JSON embebido en el código.
- RF-05: Listado de proyectos: mostrar lista clara y ordenada.
- RF-06: Navegación a detalle: seleccionar proyecto desde listado y navegar a detalle.
- RF-07: Detalle del proyecto: mostrar nombre, descripción, estado, fecha de inicio y líder.
- RF-08: Datos faltantes: si falta líder u otro campo opcional, mostrar “No especificado”.
- RF-09: Estados y errores: mostrar cargando, vacío y error si el JSON falla.
- RF-10: Visualización de perfil de usuario: La app debe permitir al usuario autenticado visualizar una pantalla de perfil con su información básica.
- RF-11: Datos del perfil: La pantalla de perfil debe mostrar como mínimo: Nombre completo, Correo electrónico, Cargo
- RF-12: Restricción de acceso al perfil: La pantalla de perfil solo debe ser accesible para usuarios con sesión iniciada.
- RF-13: Manejo de datos faltantes del perfil: Si algún dato del perfil no está disponible, la app debe mostrar un valor por defecto como “No especificado” sin generar errores.
- RF-14: Fuente local del perfil: La información del perfil del usuario debe obtenerse desde un archivo JSON local, sin requerir base de datos ni API en esta versión.

# Requerimientos no funcionales (RNF)

- RNF-01: Acceso controlado por autenticación
- RNF-02: Sesión almacenada de forma segura
- RNF-03: No exponer información sin sesión
- RNF-14: Retroalimentación inmediata: el error de login debe ser visualmente claro y rápido.
- RNF-04: Carga rápida (por ser JSON local)
- RNF-05: Funciona sin internet (offline)
- RNF-06: Interfaz limpia e intuitiva
- RNF-07: Detalle legible y ordenado
- RNF-08: Tolerancia a errores del JSON
- RNF-09: Escalabilidad para nuevas funciones
- RNF-10: Esquema JSON consistente
- RNF-11: Legibilidad del perfil
- RNF-12: Consistencia de navegación
- RNF-13: Privacidad de datos del perfil
