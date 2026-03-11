# Especificación del Track: HT1 - Cargar proyectos desde JSON local

## 1. Visión General
Este track tiene como objetivo implementar el mecanismo técnico para leer, transformar y exponer una lista de proyectos desde un archivo JSON local. Esta funcionalidad servirá como la "fuente de verdad" para las futuras pantallas de listado y detalle de proyectos, asegurando que los datos estén estructurados correctamente y sean fáciles de consumir de forma desacoplada de la interfaz de usuario.

## 2. Requerimientos Funcionales
- **RF-HT1-01: Almacenamiento Local:** Los datos de los proyectos deben residir en un archivo JSON ubicado en `src/data/projects.json`.
- **RF-HT1-02: Estructura de Datos:** Cada proyecto en el JSON debe cumplir con la interfaz definida (RF-07):
  - `id` (string/number): Identificador único.
  - `name` (string): Nombre del proyecto.
  - `description` (string): Descripción breve.
  - `status` (string): Estado actual (e.g., "En desarrollo", "En pruebas").
  - `startDate` (string): Fecha de inicio.
  - `leader` (string): Responsable o líder del proyecto.
- **RF-HT1-03: Mecanismo de Lectura:** La aplicación debe importar los datos directamente desde el archivo JSON de manera sincrónica para simplificar el acceso y el tipado.
- **RF-HT1-04: Transformación de Datos:** Los datos crudos del JSON deben ser validados o transformados según sea necesario para asegurar que cumplen con el contrato de la aplicación.
- **RF-HT1-05: Exposición mediante Hook:** Crear un custom hook `useProjects` que actúe como interfaz entre la fuente de datos y la UI, exponiendo la lista de proyectos de forma clara.

## 3. Requerimientos No Funcionales
- **RNF-HT1-01: Tipado Estricto:** Utilizar TypeScript para definir la interfaz de los proyectos y asegurar que el hook exponga datos con el tipo correcto.
- **RNF-HT1-02: Desacoplamiento:** La lógica de obtención de datos no debe depender de ninguna pantalla específica ni del estado de autenticación (aunque el acceso a la UI sí dependa de ello).
- **RNF-HT1-03: Rendimiento:** El acceso a los datos debe ser inmediato dado que es una importación directa.

## 4. Criterios de Aceptación (Gherkin)
```gherkin
Feature: Fuente de datos local
  Scenario: Leer proyectos desde JSON local
    Given que existe un archivo JSON local en 'src/data/projects.json' con proyectos válidos
    When la app carga la información de proyectos a través del hook 'useProjects'
    Then la app debe leer el JSON local correctamente
    And debe convertir los datos en una lista de proyectos tipada disponible para la UI
```

## 5. Fuera de Alcance
- Desarrollo de la pantalla "Listado de proyectos" o "Detalle de proyecto".
- Implementación de estados de carga (Loading) o manejo de errores de red (ya que es local).
- Modificación de la lógica de autenticación o navegación actual.
- Persistencia remota o integración con APIs externas.

## 6. Pruebas Requeridas
- **Unitarias:**
  - Verificar que el hook `useProjects` devuelve una lista no vacía (si el JSON tiene datos).
  - Verificar que cada elemento de la lista devuelta cumple con la estructura de campos requerida.
- **Integración:**
  - Validar que el archivo JSON es accesible e importable desde el entorno de pruebas.
- **Manuales:**
  - Inspeccionar los logs/consola para confirmar que los datos se están cargando y transformando correctamente antes de ser usados por la UI.
