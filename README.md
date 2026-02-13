# Aplicación desarrollada con Angular 20 + SSR utilizando renderizado del lado del servidor con @angular/ssr.

## El proyecto implementa:
* Listado de personajes
* Detalle dinámico por ID
* Sistema de favoritos
* Renderizado SSR
* Dockerización lista para producción

## Tecnologías utilizadas:
* Angular 20
* @angular/ssr
* TypeScript
* RxJS
* Angular Router
* Docker
* Node 20

## Estructura del proyeto
```bash
src/
 ├── app/
 │    ├── features/
 │    │     ├── characters/
 │    │     ├── character-detail/
 │    │     └── favorites/
 │    └── app.routes.ts
 └── main.server.ts
```

## Ejecutar en desarrollo

```bash
npm install
npm start
```

Disponible en:
```bash
http://localhost:4200
```

## Build SSR
```bash
npm run build
```

Salida generada en:
```bash
dist/angular-ssr-grid/
```

## Ejecutar con Docker

### Construir Imagen:
```bash
docker build -t angular-ssr-grid .
```

### Ejecutar Contenedor:
```bash
docker run -p 4000:4000 angular-ssr-grid
```

Aplicación disponible en:
```bash
http://localhost:4000
```

## Autor

Fredy Santiago Blandon Ocampo
**GitHub**: https://github.com/fsblandon