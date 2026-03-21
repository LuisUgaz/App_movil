# Especificación: Actualización de Icono de la Aplicación

## 1. Resumen
Reemplazar el icono actual de la aplicación por `assets/aplicacion-movil.png` en todas las plataformas soportadas (Android, iOS y Web). Se configurarán los iconos adaptativos para Android y se actualizará el splash screen para mantener la coherencia visual de la marca.

## 2. Requisitos Funcionales
- **Actualización de Icono Base**: Reemplazar el archivo `icon.png` por una versión redimensionada de `aplicacion-movil.png`.
- **Iconos Adaptativos (Android)**: Configurar `adaptive-icon.png` (foreground) y el color de fondo correspondiente en `app.json`.
- **Splash Screen**: Actualizar `splash-icon.png` para que coincida con la nueva identidad visual.
- **Web Favicon**: Generar y actualizar `favicon.png` a partir de la imagen base.
- **Configuración de Expo**: Asegurar que todas las referencias en `app.json` apunten a los archivos correctos y cumplan con los formatos requeridos.

## 3. Requisitos No Funcionales
- **Calidad Visual**: El icono no debe presentar pixelado ni deformaciones tras el redimensionamiento.
- **Compatibilidad**: Cumplir con los estándares de diseño de Android (Safe Area para iconos adaptativos) y Apple (iOS App Icon).
- **Consistencia**: El icono en el dispositivo debe ser idéntico al favicon en la versión web.

## 4. Criterios de Aceptación
- El icono de la aplicación en el launcher (Android/iOS) es el nuevo icono.
- El icono adaptativo de Android no muestra recortes de contenido importante.
- El splash screen muestra el nuevo icono centrado correctamente.
- El favicon se visualiza correctamente en la pestaña del navegador (Web).
- La configuración en `app.json` es válida y permite el build de la aplicación.

## 5. Fuera de Alcance
- Rediseño de la UI interna de la aplicación.
- Modificación de flujos de negocio (login, perfil, etc.).
- Publicación o despliegue en tiendas de aplicaciones.
