# Especificación del Track: HT2 - Mostrar indicador de carga durante la lectura del JSON

## 1. Visión General
Este track tiene como objetivo implementar la respuesta visual de la aplicación mientras se realiza la carga de los proyectos desde el archivo JSON local. Aunque la lectura de archivos locales es casi instantánea, se incorporará un estado de carga gestionado técnicamente para mejorar la experiencia del usuario (UX) y simular un flujo de datos real.

## 2. Requerimientos Funcionales
- **RF-HT2-01: Estado de Carga:** El hook `useProjects` (definido en HT1) debe exponer un nuevo estado `isLoading` (boolean).
- **RF-HT2-02: Gestión del Indicador:** El estado `isLoading` debe activarse inmediatamente al invocar el hook y desactivarse una vez que los datos del JSON estén disponibles.
- **RF-HT2-03: Simulación de Retraso:** Se debe añadir un retraso artificial controlado (e.g., 1000ms) para garantizar que el usuario pueda percibir el indicador de carga.
- **RF-HT2-04: Componente de Carga:** Definir un componente visual simple que muestre un texto descriptivo ("Cargando proyectos...") y un indicador visual (custom/texto).

## 3. Requerimientos No Funcionales
- **RNF-HT2-01: Desacoplamiento:** La lógica visual del indicador debe estar separada de la lógica de negocio de la lectura del JSON.
- **RNF-HT2-02: Consistencia:** El componente de carga debe ser reutilizable para otras historias que requieran estados de carga similares.
- **RNF-HT2-03: Tipado Estricto:** Asegurar que el retorno del hook `useProjects` incluya correctamente el nuevo estado `isLoading` en TypeScript.

## 4. Criterios de Aceptación (Gherkin)
```gherkin
Feature: Estados de carga
  Scenario: Mostrar indicador mientras se cargan proyectos
    Given que la app inicia la lectura del JSON local a través de 'useProjects'
    When la carga está en progreso (durante el tiempo de simulación)
    Then la app debe mostrar un componente visual con el mensaje "Cargando proyectos..."
    And al terminar la lectura (tras el retraso), el componente de carga debe desaparecer
```

## 5. Fuera de Alcance
- Implementación de la pantalla de listado de proyectos (renderizado de la lista).
- Manejo de errores por JSON corrupto o fallos de lectura (HT futura).
- Estados de carga para la autenticación o el perfil de usuario.
- Animaciones complejas de UI fuera de un indicador simple de texto/custom.

## 6. Pruebas Requeridas
- **Unitarias:**
  - Verificar que el hook `useProjects` devuelve `isLoading: true` inicialmente.
  - Verificar que `isLoading` cambia a `false` después del tiempo de retraso simulado.
- **Integración:**
  - Validar que la interfaz consume correctamente el estado del hook para alternar la visibilidad del componente de carga.
- **Manuales:**
  - Confirmar visualmente la aparición del mensaje "Cargando proyectos..." al navegar hacia el (futuro) listado.
