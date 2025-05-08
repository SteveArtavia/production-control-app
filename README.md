# Production Tracking App

## Descripción

Esta es una aplicación web diseñada para rastrear la producción diaria de mi actual trabajo. Permite a los usuarios ingresar casos, registrar el progreso y generar un reporte de producción.

## Características

* Registro de Casos: Los usuarios pueden ingresar IDs de casos individuales.
* Visualización del Progreso: La aplicación muestra el número actual de casos ingresados y el progreso hacia una meta establecida, posiblemente con una barra de progreso.
* Eliminación de Casos: Los usuarios pueden eliminar casos registrados.
* Limpieza de la Jornada: La aplicación permite limpiar o reiniciar el registro de casos para un nuevo día de producción.
* Generación de Reportes: Los usuarios pueden generar un reporte de producción diario en formato de archivo de texto y descargarlo.
* Persistencia de Datos: La aplicación guarda los datos localmente (probablemente usando localStorage), por lo que la información no se pierde al recargar la página.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript
* Bootstrap
* Librería de Iconos Font Awesome
* Fuente Google Fonts (Inter)

## Instalación

1.  Clona este repositorio: git clone <URL del repositorio>
2.  Navega al directorio del proyecto: cd nombre-del-proyecto
3.  Abre el archivo index.html en tu navegador web.

## Uso

1.  Página Principal: La página principal muestra el título de la aplicación, la meta de producción, el número actual de casos y una barra de progreso.
2.  Ingreso de Casos:
    * Hay un campo de entrada donde puedes ingresar un ID de caso.
    * El botón "Enter Case" agrega el caso a la lista y actualiza el progreso.
3.  Visualización de Casos:
    * Los casos ingresados se muestran en una lista.
    * El número total de casos se actualiza dinámicamente.
4.  Eliminación de Casos: El botón "Remove Case" elimina el último caso ingresado.
5.  Limpieza de la Jornada: El botón "Clear" elimina todos los casos del día actual. Pregunta de confirmación antes de eliminar.
6.  Generación de Reportes: El botón "Generate Report" genera un reporte de producción diario en formato de archivo de texto y lo descarga.

## Estructura de Archivos

    
    ├── index.html
    ├── main.css
    ├── main.js
    └── README.md
    

## Créditos

* Steve Artavia
* Librerías y frameworks de terceros mencionados en la sección "Tecnologías Utilizadas".
