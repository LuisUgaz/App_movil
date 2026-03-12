# Especificación: HU15 - Restringir acceso al Perfil si no hay sesión

## 1. Descripción General
Este track tiene como objetivo implementar una restricción de seguridad en la pantalla de "Perfil" para asegurar que solo los usuarios autenticados puedan acceder a su información. Si un usuario no autenticado intenta acceder, será redirigido a la pantalla de inicio de sesión tras recibir un aviso.

## 2. Requerimientos Funcionales
- **RF-12 (Refinado):** Bloqueo de acceso no autorizado al perfil.
- **Redirección:** Si `isAuthenticated` es falso, el sistema debe redirigir al usuario a `/login`.
- **Notificación:** Mostrar un mensaje (Alerta) informando que se requiere iniciar sesión para ver el perfil.
- **Privacidad:** No se debe realizar la carga ni el renderizado de datos del perfil si no hay una sesión activa.

## 3. Requerimientos Técnicos
- **Lógica de Protección:** Se implementará a nivel de Layout para garantizar que la verificación ocurra antes de montar la pantalla.
- **Navegación:** Uso de `expo-router` (`Redirect` o `router.replace`) para gestionar el flujo de navegación.
- **Contexto:** Uso de `AuthContext` para obtener el estado de autenticación.
- **UI:** Uso de `Alert` de `react-native` para la notificación al usuario.

## 4. Criterios de Aceptación (Gherkin)
**Escenario: Bloquear acceso al perfil sin sesión**
- **Given** que el usuario no ha iniciado sesión.
- **When** el usuario intenta acceder a la pantalla "Perfil".
- **Then** la app debe mostrar una alerta de "Sesión requerida".
- **And** redirigir al usuario a la pantalla "Inicio de sesión".
- **And** no debe mostrar ninguna información del perfil.

## 5. Fuera de Alcance
- Implementación de persistencia de sesión.
- Edición de datos del perfil.
- Cierre de sesión.
- Protección de otras pantallas no especificadas.
