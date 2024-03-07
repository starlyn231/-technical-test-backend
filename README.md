# Backend de Express con MongoDB

Este es un backend construido con Express y MongoDB que proporciona una API para gestionar tarjetas de crédito.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con npm:

````bash
npm install

npm start


### 3. Configuración de la Base de Datos
Explica cómo configurar la conexión a la base de datos MongoDB.

```markdown

## Configuración

El servidor se ejecutará en el puerto especificado en el archivo .env.

Endpoints
GET /api/v1/creditCard
Obtiene todas las tarjetas de crédito almacenadas en la base de datos.

POST /api/v1/add-creditCard
Añade una nueva tarjeta de crédito a la base de datos.

Parámetros de la solicitud
name: Nombre del titular de la tarjeta.
expDate: Fecha de expiración de la tarjeta.
cardNumber: Número de la tarjeta de crédito.
cvv: CVV de la tarjeta.
PUT /api/v1/edit-creditcard/:id
Edita una tarjeta de crédito existente en la base de datos.

Parámetros de la solicitud
id: ID de la tarjeta de crédito a editar.
DELETE /api/v1/delete-creditcard/:id
Elimina una tarjeta de crédito existente en la base de datos.

Parámetros de la solicitud
id: ID de la tarjeta de crédito a eliminar.
Contribuir
Si deseas contribuir a este proyecto, ¡siéntete libre de abrir un pull request!

Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

````
