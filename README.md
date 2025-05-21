# Heros-

Este proyecto es una Single Page Application (SPA) desarrollada con Angular, diseñada bajo una arquitectura modular que permite una escalabilidad y mantenimiento eficiente. Su propósito es integrar buenas prácticas de desarrollo frontend utilizando herramientas modernas del ecosistema Angular.

La aplicación cuenta con una estructura de rutas principales e hijas, implementadas mediante carga perezosa (lazy loading), lo cual optimiza el rendimiento al cargar solo los módulos necesarios bajo demanda. El diseño es completamente responsivo, gracias al uso de Angular Flex Layout y principios de Flexbox, lo que garantiza una experiencia fluida y adaptable en diferentes dispositivos.

Para la interfaz de usuario, se emplea Angular Material, aprovechando componentes como botones, tarjetas, formularios y campos con autocompletado, lo que permite construir una UI moderna, consistente y accesible. En cuanto a la comunicación con el backend, la aplicación se conecta a una API simulada con JSON-Server mediante HttpClient, permitiendo realizar operaciones CRUD de manera eficiente.

Además, se desarrollan pipes personalizados para transformar datos dinámicamente en la vista, y se gestionan diferentes variables de entorno para facilitar la configuración en distintos entornos de desarrollo o producción. También se aplican múltiples estilos dentro de la misma SPA para lograr una apariencia visual coherente y flexible.

El proyecto hace énfasis en el uso de interfaces y tipado estricto en TypeScript, promoviendo una programación robusta, legible y mantenible, reduciendo errores y facilitando la colaboración en equipo