# Especificación: HU16 - Mostrar valor por defecto cuando falta el cargo

## 1. Descripción General
Este track tiene como objetivo asegurar que la pantalla de "Perfil" maneje correctamente la ausencia del dato "cargo" (position) del usuario. Si este dato no existe en el perfil cargado, se mostrará el texto "No especificado" con un estilo diferenciado en la sección de información personal, garantizando la estabilidad y consistencia visual de la aplicación.

## 2. Requerimientos Funcionales
- **RF-13 (Refinado):** Manejo de datos faltantes del perfil para el campo cargo.
- **Valor por Defecto:** Si el campo `position` no existe o es nulo, mostrar "No especificado".
- **Alcance Visual:** El valor por defecto se aplicará únicamente en el listado de detalles dentro de la sección "Información Personal".
- **Estabilidad:** La ausencia de este campo no debe causar errores de renderizado ni cierres inesperados (crashes).

## 3. Requerimientos Técnicos
- **Lógica de UI:** El manejo del valor por defecto se realizará directamente en el componente `ProfileScreen.tsx` o mediante `ProfileInfoItem.tsx`.
- **Estilo Visual:** Se aplicará un estilo diferenciado (cursiva o color gris más tenue) para el texto "No especificado" para distinguirlo de la información real.
- **Datos locales:** Se asume que el archivo `userProfile.json` puede no contener la clave `position` en ciertos escenarios de prueba.

## 4. Criterios de Aceptación (Gherkin)
**Escenario: Mostrar valor por defecto cuando falta el cargo**
- **Given** que el usuario ha iniciado sesión.
- **And** el perfil del usuario no contiene el campo "cargo".
- **When** el usuario accede a la pantalla "Perfil".
- **Then** la app debe mostrar el cargo como "No especificado" en la sección de detalles.
- **And** el texto "No especificado" debe tener un estilo visual diferenciado.
- **And** la app no debe cerrarse ni fallar.

## 5. Fuera de Alcance
- Modificar el encabezado del perfil (avatar y nombre).
- Implementar valores por defecto para nombre o correo electrónico.
- Actualizar el archivo JSON original de forma permanente.
- Cambios en la lógica de autenticación.
