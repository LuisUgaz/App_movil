# Specification: HU11 - Mostrar valor por defecto si falta el líder

## Overview
Esta especificación define el comportamiento de la pantalla de "Detalle del Proyecto" cuando el campo del líder o responsable no está presente en los datos del proyecto. El objetivo es asegurar una interfaz consistente y evitar fallos en la aplicación ante datos incompletos.

## Requerimientos Funcionales
- **Visualización por Defecto:** Si el campo `leader` (o equivalente) de un proyecto es `null`, `undefined` o una cadena vacía, la aplicación debe mostrar el texto "No especificado".
- **Consistencia Visual:** El valor por defecto debe seguir el mismo estilo visual (Inline Row) que los demás campos de detalle.
- **Estabilidad:** La ausencia del dato del líder no debe provocar cierres inesperados (crashes), errores de renderizado ni bloquear la navegación.
- **Uso de Componentes:** Se debe utilizar el componente `DetailItem` (o crear uno si no existe para este propósito) para mantener la coherencia en la pantalla de detalle.

## Requerimientos No Funcionales
- **Robustez:** El manejo de valores nulos debe implementarse de forma segura en el componente de detalle o en la pantalla de detalle.
- **Internacionalización/Localización:** El texto "No especificado" debe estar en español, siguiendo el idioma de la aplicación.

## Criterios de Aceptación (Gherkin)
```gherkin
Feature: Detalle de proyecto
  Scenario: Mostrar "No especificado" si falta el líder
    Given que el usuario accede a la pantalla "Detalle del proyecto"
    And el proyecto seleccionado no tiene líder en la fuente local
    When la pantalla se carga
    Then la app debe mostrar el campo líder como "No especificado"
    And la app no debe cerrarse ni fallar
```

## Fuera de Alcance
- Modificar otros campos del proyecto (nombre, descripción, estado, fecha).
- Implementar edición de datos.
- Corregir el archivo JSON original.
- Navegación de regreso (ya definida en historias previas).

## Pruebas Requeridas
- **Pruebas de Componente/UI:** Verificar que `DetailItem` para el líder renderice "No especificado" cuando el valor sea nulo o indefinido.
- **Pruebas de Integración:** Validar que la pantalla `[id].tsx` maneje correctamente la ausencia del líder al recibir los datos del proyecto.
- **Pruebas Manuales:** Navegar a un proyecto sin líder y confirmar visualmente que aparece el texto correcto sin errores.
