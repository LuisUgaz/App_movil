# Plan de Implementación: HU7: Ver listado de proyectos con datos disponibles

## Fase 1: Estructura de Componentes de UI

En esta fase se crearán los componentes necesarios para mostrar la información en el listado, siguiendo el patrón de diseño definido (lista plana con iconos).

- [x] Task: Crear componente `ProjectItem` para representar un proyecto en la lista. [manual]
    - [ ] Escribir pruebas unitarias para `ProjectItem` (renderizar nombre, estado e icono).
    - [ ] Implementar el componente `ProjectItem` con estilos minimalistas y un icono a la derecha.
    - [ ] Verificar cobertura de pruebas (>80%).
- [x] Task: Crear el componente de pantalla `ProjectListScreen`. [manual]
    - [ ] Escribir pruebas unitarias para `ProjectListScreen` para verificar que use `useProjects` y renderice el listado (mocking de datos).
    - [ ] Implementar la pantalla básica con un `FlatList` que utilice el componente `ProjectItem`.
    - [ ] Verificar cobertura de pruebas (>80%).
- [x] Task: Conductor - User Manual Verification 'Fase 1: Estructura de Componentes de UI' (Protocol in workflow.md) [manual]

## Fase 2: Navegación e Integración de Datos

En esta fase se integrará la nueva pantalla con el sistema de navegación y se asegurará que el flujo desde el login funcione correctamente.

- [x] Task: Registrar la pantalla `ProjectListScreen` en la navegación de la app. [manual]
    - [ ] Modificar `App.tsx` para incluir la nueva ruta.
    - [ ] Asegurar que el acceso a `ProjectListScreen` esté condicionado por el estado de autenticación de `AuthContext`.
    - [ ] Verificar cobertura de pruebas (>80%).
- [x] Task: Implementar la redirección automática desde `LoginScreen`. [manual]
    - [ ] Escribir pruebas de integración para validar la navegación tras un login exitoso.
    - [ ] Actualizar el componente `LoginScreen` para navegar a `ProjectListScreen` cuando se detecte un inicio de sesión exitoso.
    - [ ] Verificar cobertura de pruebas (>80%).
- [x] Task: Conductor - User Manual Verification 'Fase 2: Navegación e Integración de Datos' (Protocol in workflow.md) [manual]

## Fase 3: Pruebas de Aceptación Finales

- [x] Task: Validar el escenario Gherkin de la Historia de Usuario HU7. [manual]
    - [ ] Escribir pruebas de integración end-to-end (o de alto nivel con React Native Testing Library) que cubran el flujo completo desde el login hasta el listado con datos reales del JSON local.
    - [ ] Ejecutar todas las pruebas y confirmar que el listado se muestra correctamente.
    - [ ] Verificar cobertura de pruebas global (>80%).
- [x] Task: Conductor - User Manual Verification 'Fase 3: Pruebas de Aceptación Finales' (Protocol in workflow.md) [manual]

---

# Criterios de Aceptación
- [x] La pantalla de "Listado de proyectos" es visible tras el login.
- [x] Se muestran los nombres y estados de los proyectos del JSON local.
- [x] El diseño es una lista plana con iconos/indicadores visuales.
- [x] No es accesible sin haber iniciado sesión.
- [x] El listado fluye correctamente con el hook `useProjects`.
