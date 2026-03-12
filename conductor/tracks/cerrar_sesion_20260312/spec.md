# Specification: HU6: Cerrar sesión

## Overview
Esta especificación define la funcionalidad para permitir a un usuario autenticado cerrar su sesión de forma manual dentro de la aplicación móvil. El objetivo principal es finalizar la sesión activa, limpiar el estado de autenticación y redirigir al usuario a la pantalla de "Inicio de sesión", garantizando que no sea posible volver a las pantallas protegidas mediante la navegación hacia atrás.

## Functional Requirements
- **RF-02: Cierre de sesión manual:**
    - La aplicación debe proporcionar una acción visible en el **Header Global** para cerrar la sesión.
    - Al activar la acción, la sesión debe finalizarse inmediatamente (Cierre Directo, sin confirmación).
    - El estado de autenticación en `AuthContext` debe resetearse a "no autenticado".
    - Se debe realizar una limpieza de cualquier caché local relevante asociado a la sesión del usuario.
- **RF-02.1: Redirección y Seguridad:**
    - Tras el cierre de sesión, la aplicación debe redirigir automáticamente a la pantalla de **Inicio de sesión** (`login`).
    - La redirección debe utilizar un método que reemplace la ruta actual o reinicie el stack (`router.replace`) para evitar que el usuario regrese a pantallas protegidas usando el botón "Atrás" del sistema o gestos de navegación.

## Non-Functional Requirements
- **RNF-12: Consistencia de navegación:** El flujo de salida debe ser fluido y coherente con el resto de la aplicación.
- **RNF-13: Privacidad de datos:** Ningún dato sensible de la sesión previa debe permanecer accesible tras el cierre de la misma.

## Acceptance Criteria
- [ ] Existe un botón o icono de "Cerrar sesión" visible en el Header Global de las pantallas autenticadas.
- [ ] Al pulsar el botón, el usuario es redirigido a la pantalla de login de forma inmediata.
- [ ] Después de cerrar sesión, pulsar el botón "Atrás" del dispositivo NO permite regresar al listado de proyectos o al perfil.
- [ ] El estado global de la aplicación refleja correctamente que el usuario ya no está autenticado.

## Out of Scope
- No se implementará expiración automática por inactividad (cubierta por HU5).
- No se implementará revocación remota de tokens en un servidor externo (solo local/mock).
- No se mostrarán diálogos de confirmación antes de cerrar la sesión.

## Technical Structure
- **Contexto:** Se utilizará la función `logout` (o equivalente) dentro del `AuthContext`.
- **Navegación:** Uso de `expo-router` con `router.replace('/login')`.
- **UI:** Inclusión de un botón `HeaderRight` en el layout de las pantallas protegidas (`app/(main)/_layout.tsx`).

## Manual Verification Plan
1. Iniciar sesión con credenciales válidas.
2. Navegar al listado de proyectos o al perfil.
3. Localizar y presionar el botón de "Cerrar sesión" en el Header.
4. Verificar la redirección inmediata a la pantalla de Login.
5. Intentar usar el botón físico/gesto "Atrás" del dispositivo y confirmar que no se regresa a la pantalla anterior.
