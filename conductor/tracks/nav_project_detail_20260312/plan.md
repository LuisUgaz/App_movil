# Plan de Implementación: HU9 - Navegación al Detalle del Proyecto

## Fase 1: Configuración de Infraestructura de Navegación (Expo Router)
- [x] **Tarea: Instalación y Configuración de Expo Router**
    - [x] Instalar `expo-router` y sus dependencias necesarias (`react-native-safe-area-context`, `react-native-screens`, `expo-constants`, `expo-linking`).
    - [x] Configurar el punto de entrada (`index.ts` o `app/_layout.tsx`).
- [x] **Tarea: Migración de Pantallas a Rutas**
    - [x] Crear la estructura de directorios en `app/` para manejar el flujo de autenticación y el listado.
    - [x] Refactorizar `App.tsx` para delegar la navegación a Expo Router (Sustituido por `app/index.tsx` y `expo-router/entry`).
- [x] **Tarea: Conductor - User Manual Verification 'Infraestructura' (Protocol in workflow.md)**

## Fase 2: Pantalla de Detalle y Preparación de Rutas
- [x] **Tarea: Crear Pantalla Placeholder para Detalle**
    - [x] Crear la ruta dinámica `app/(main)/project/[id].tsx` para recibir los datos del proyecto.
    - [x] Implementar un componente visual básico que confirme la llegada a la pantalla.
- [x] **Tarea: Conductor - User Manual Verification 'Detalle Placeholder' (Protocol in workflow.md)**

## Fase 3: Interacción y Navegación (TDD)
- [x] **Tarea: Actualizar ProjectItem con TouchableHighlight**
    - [x] Modificar el componente para aceptar interacciones y mostrar feedback visual de resaltado.
- [x] **Tarea: Implementar Lógica de Navegación en el Listado**
    - [x] Integrar el hook de navegación de Expo Router en `ProjectListScreen` para redirigir al detalle al seleccionar un ítem.
- [x] **Tarea: Pruebas Unitarias e Integración**
    - [x] Escribir pruebas que validen que la selección de un proyecto dispara la navegación correcta con los parámetros esperados.
- [x] **Tarea: Conductor - User Manual Verification 'Navegación e Interacción' (Protocol in workflow.md)**

## Fase 4: Verificación y Cierre
- [x] **Tarea: Validación Completa de Integración**
    - [x] Asegurar que el flujo de autenticación siga restringiendo el acceso (HU4).
    - [x] Verificar que la transición al detalle sea fluida.
- [x] **Tarea: Conductor - User Manual Verification 'Cierre HU9' (Protocol in workflow.md)**
