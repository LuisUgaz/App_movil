# Especificación: HU5 - Solicitar inicio de sesión cuando la sesión ha expirado

## 1. Descripción General
Este track tiene como objetivo implementar un mecanismo de seguridad que cierre la sesión del usuario automáticamente tras un periodo de inactividad global. La aplicación detectará interacciones del usuario y reiniciará un temporizador de 1 minuto; al cumplirse el tiempo sin actividad, se redirigirá al usuario a la pantalla de Inicio de Sesión.

## 2. Requerimientos Funcionales
- **Detección de Inactividad Global:** La aplicación rastreará interacciones del usuario (toques, desplazamientos) en toda la aplicación para reiniciar el temporizador de sesión.
- **Temporizador de Expiración:** La sesión expirará automáticamente si el usuario permanece inactivo durante más de 1 minuto (60 segundos).
- **Redirección Inmediata:** Una vez cumplido el tiempo de inactividad, la aplicación debe redirigir al usuario inmediatamente a la pantalla de "Inicio de sesión".
- **Notificación al Usuario:** Al expirar la sesión, se mostrará una alerta indicando: "Sesión expirada por inactividad. Por favor, inicie sesión de nuevo."
- **Restricción de Acceso:** Una vez que la sesión ha expirado, no se debe permitir la visualización de datos sensibles (listado o detalles de proyectos).

## 3. Requerimientos Técnicos
- **Implementación en Provider:** La lógica de seguimiento de inactividad se integrará en el `AuthContext` o un HOC que envuelva la aplicación.
- **Configuración:** El tiempo de inactividad se definirá como una constante de código (`SESSION_TIMEOUT = 60000`).
- **Manejo de Navegación:** Se utilizará `expo-router` para la redirección automática tras la expiración.

## 4. Criterios de Aceptación (Gherkin)
**Escenario: Expiración de sesión por inactividad**
- **Given** que el usuario ha iniciado sesión.
- **And** el tiempo máximo de inactividad permitido es de 1 minuto (60 segundos).
- **And** el usuario ha permanecido inactivo (sin tocar la pantalla) durante más de 1 minuto.
- **Then** la aplicación debe mostrar una alerta de "Sesión expirada".
- **And** debe redirigir al usuario a la pantalla "Inicio de sesión".
- **And** el usuario no debe poder ver información de proyectos hasta que vuelva a autenticarse.

## 5. Fuera de Alcance
- Persistencia real de tokens o integración con backend.
- Renovación automática de sesión o advertencias previas (e.g., "Tu sesión expirará en 10 segundos").
- Control de acceso a pantallas fuera del flujo autenticado principal.
- Persistencia de sesión tras cerrar la aplicación completamente.
