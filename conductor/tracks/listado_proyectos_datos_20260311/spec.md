# Especificación del Track: HU7: Ver listado de proyectos con datos disponibles

## Overview
Este track tiene como objetivo implementar la pantalla de "Listado de proyectos" para usuarios que han iniciado sesión correctamente. La pantalla debe mostrar de forma clara y ordenada los proyectos obtenidos de la fuente de datos local (`projects.json`), integrándose con la protección de acceso ya definida.

## Requerimientos Funcionales
- **Visualización de Proyectos:** Presentar un listado de proyectos cargados desde el archivo JSON local.
- **Información Mínima:** Cada elemento del listado debe mostrar al menos el nombre del proyecto y su estado.
- **Acceso Restringido:** Solo los usuarios con una sesión iniciada pueden acceder a esta pantalla.
- **Navegación Automática:** Redirigir al usuario a esta pantalla inmediatamente después de un inicio de sesión exitoso en `LoginScreen`.
- **Integración de Datos:** Utilizar el hook `useProjects` para obtener la lista de proyectos, manejando los estados de carga y error ya implementados en tracks previos.

## Requerimientos No Funcionales
- **Estilo Visual:** Cada proyecto se mostrará en una lista plana con líneas divisorias, destacando el nombre con un icono o indicador visual a la derecha.
- **Consistencia de UI:** Seguir el estilo minimalista y limpio definido en los lineamientos del producto.
- **Rendimiento:** La lista debe ser fluida, aprovechando que los datos son locales.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Listado de proyectos
  Scenario: Mostrar listado con datos disponibles
    Given que el usuario ha iniciado sesión
    And existen proyectos asociados al usuario
    When el usuario accede a la pantalla "Listado de proyectos"
    Then la app debe mostrar un listado de proyectos de forma clara y ordenada
    And cada proyecto debe mostrar al menos el nombre y el estado
```

## Fuera de Alcance
- Estado vacío cuando no existen proyectos.
- Pantalla de detalle de proyecto.
- Navegación al detalle.
- Filtrado, búsqueda o ordenamiento avanzado.
- Edición, creación o eliminación de proyectos.
- Mensajes de error adicionales (se usan los ya definidos).

## Pruebas Requeridas
- **Pruebas de UI/Componente:** Verificar que el componente de lista renderiza el número correcto de elementos y muestra el nombre/estado.
- **Pruebas de Integración:** Validar que los datos del JSON local fluyen correctamente desde el hook hasta la pantalla.
- **Pruebas de Aceptación:** Ejecutar el escenario Gherkin definido.
- **Pruebas Manuales:** Verificar la navegación desde el Login y el scroll en la lista.
