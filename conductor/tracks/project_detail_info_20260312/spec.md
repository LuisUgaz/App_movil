# Especificación del Track: HU10 - Visualizar Información Básica del Proyecto

## Descripción General
Este track define la interfaz y la lógica de visualización de la información detallada de un proyecto individual en la pantalla "Detalle del proyecto". La pantalla debe presentar los datos de forma estructurada, facilitando la lectura rápida del estado y responsables.

## Requerimientos Funcionales
- **RF-01: Visualización del Nombre**: Mostrar el título completo del proyecto en la parte superior.
- **RF-02: Visualización de la Descripción**: Mostrar el texto descriptivo del proyecto de forma legible.
- **RF-03: Badge de Estado**: El estado del proyecto (ej. "Activo", "En pausa") debe mostrarse dentro de un componente tipo "Badge" para resaltar visualmente su condición.
- **RF-04: Formato de Fecha**: La fecha de inicio debe mostrarse en formato ISO (YYYY-MM-DD).
- **RF-05: Identificación del Líder**: Mostrar el nombre del responsable o líder del proyecto.
- **RF-06: Uso de Iconos**: Cada campo informativo (Estado, Fecha, Líder) debe ir acompañado de un icono representativo para mejorar la navegación visual.

## Requerimientos de Interfaz (UI)
- **Layout**: Lista vertical limpia con espaciado consistente.
- **Iconografía**: Integrar iconos (ej. Lucide o Material Icons) para etiquetas clave.
- **Componentes**: Crear o reutilizar componentes para el Badge de estado.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Detalle de proyecto
  Scenario: Mostrar información básica del proyecto
    Given que el usuario accede a la pantalla "Detalle del proyecto"
    And existe información válida del proyecto seleccionado
    When la pantalla se carga
    Then la app debe mostrar el nombre del proyecto
    And debe mostrar la descripción del proyecto
    And debe mostrar el estado actual del proyecto (en formato Badge)
    And debe mostrar la fecha de inicio del proyecto (YYYY-MM-DD)
    And debe mostrar el líder o responsable del proyecto si existe
```

## Fuera de Alcance
- Navegación de regreso (cubierto por otras historias o infraestructura base).
- Edición, creación o eliminación de datos.
- Manejo avanzado de datos faltantes (ej. valores por defecto complejos).
- Acciones adicionales (botones de contacto, etc.).

## Pruebas Requeridas
- **Pruebas de UI**: Verificar que todos los campos y el Badge sean visibles y tengan el contenido correcto.
- **Pruebas de Integración**: Validar que los parámetros recibidos por la ruta (ID/Objeto) se mapeen correctamente a la UI.
