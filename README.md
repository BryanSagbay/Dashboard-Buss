
---

# Dashboard Administrativo

Este es un proyecto para administrar tareas o movimientos de negocios. ¡Bienvenido!


[![Icon](https://img.shields.io/badge/react-black?logo=Spring)](https://img.shields.io/badge/react-black?logo=Spring) [![Langua](https://img.shields.io/github/languages/count/BryanSagbay/Dashboard-Buss?color=c90e21 "Langua")](https://img.shields.io/github/languages/count/BryanSagbay/Dashboard-Buss?color=c90e21 "Langua") [![Git](https://img.shields.io/github/repo-size/bryansagbay/Dashboard-Buss?color=56BEB8 "Gut")](https://img.shields.io/github/repo-size/bryansagbay/Dashboard-Buss?color=56BEB8 "Gut") [![Start](https://img.shields.io/github/stars/bryansagbay/Dashboard-Buss?color=blue "Start")](https://img.shields.io/github/stars/bryansagbay/Dashboard-Buss?color=blue "Start") 


## Descripción

El proyecto SYSTEM-SAM es una aplicación web que permite a los usuarios realizar tareas imprescindibles. Con esta aplicación, puedes hacer lo siguiente:

- Realizar control de operaciones.
- Administrar recursos, activos entre otros.
- Explorar mejorar dentro del negocio.
- Mantener un seguimiento adecuado a cada proceso.

## Dashboard

Aquí tienes algunas capturas de pantalla de nuestra aplicación en acción:

### Página de Inicio

![Página de Inicio](screenshots/home.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Perfil de Usuario

![Perfil de Usuario](screenshots/profile.png)

### Otras funcionalidades
![Perfil de Usuario](screenshots/profile.png)


## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/BryanSagbay/Dashboard-Buss.git
    ```

2. Instala las dependencias del proyecto:

    ```bash
    cd Dashboard-Buss
    npm install
    ```

3. Inicia la aplicación:

    ```bash
    npm start
    ```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)


## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

