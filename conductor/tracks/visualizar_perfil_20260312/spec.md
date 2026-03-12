# Especificación: HU14 - Visualizar perfil con datos completos

## Descripción General
Esta especificación define la visualización de la información del perfil del usuario en la pantalla "Perfil". Los datos se obtendrán de una fuente local (archivo JSON) a través de un servicio independiente, garantizando una presentación clara y profesional de la identidad del usuario autenticado.

## Requerimientos Funcionales
- **Visualización de Datos:** La pantalla de perfil debe mostrar obligatoriamente:
  - Nombre completo del usuario.
  - Correo electrónico.
  - Cargo o posición.
- **Fuente de Datos:** Los datos deben cargarse desde un nuevo archivo JSON local (`src/data/userProfile.json`) mediante un servicio dedicado.
- **Interfaz de Usuario (UI):**
  - Implementar componentes visuales específicos para el perfil (no reutilizar `DetailItem`).
  - Incluir una cabecera con un icono de usuario o avatar visual.
  - Utilizar separadores de sección para organizar la información.
- **Estado de Carga:** La pantalla debe manejar la carga de los datos locales de forma fluida.

## Requerimientos No Funcionales
- **Consistencia Visual:** El diseño debe seguir las directrices de `product-guidelines.md`, manteniendo una estética moderna y limpia.
- **Rendimiento:** La lectura del archivo JSON local debe ser inmediata para ofrecer una experiencia ágil.
- **Seguridad:** Aunque los datos son locales, la pantalla solo debe ser accesible si existe una sesión activa (verificado por `AuthContext`).

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Perfil de usuario
  Scenario: Visualizar perfil con datos completos
    Given que el usuario ha iniciado sesión
    And existen datos de perfil válidos en "src/data/userProfile.json"
    When el usuario accede a la pantalla "Perfil"
    Then la app debe mostrar el nombre completo del usuario
    And debe mostrar el correo electrónico del usuario
    And debe mostrar el cargo del usuario
    And debe mostrar un avatar o icono de cabecera
```

## Fuera de Alcance
- Manejo de datos faltantes o valores por defecto (HU15).
- Edición del perfil.
- Cierre de sesión desde esta pantalla.
- Navegación adicional.

## Pruebas Requeridas
- **Pruebas de Componente:** Verificar que los campos de nombre, email y cargo se rendericen correctamente con datos mock.
- **Pruebas de Integración:** Validar que el servicio de perfil lea correctamente el archivo JSON y entregue los datos a la pantalla.
- **Casos de Aceptación:** Seguir el escenario Gherkin para confirmar la visualización completa.
