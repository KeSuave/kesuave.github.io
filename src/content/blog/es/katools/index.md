---
title: KaTools
description: Herramienta CLI para proyectos de juegos creados con KAPLAY
date: 2024-12-29
---

Que onda!
Hoy quiero hablarles sobre [KaTools](https://www.npmjs.com/package/katools), una herramienta CLI que se encarga del codigo
repetitivo para proyectos de juegos creados con [KAPLAY](https://kaplayjs.com/).  

Hace un par de meses andaba aburrido y recorde sobre una libreria llamada KABOOM, la cual estaba saliendo en muchos canales
de youtube. Recuerdo que la use un poco y me gusto mucho su API pero como era muy nueva no tenia un par de cosas que 
necesitaba en ese momento. Deje de escuchar sobre KABOOM y decidi buscar, encontre que ya no estaba soportada
y fue remplazada por KAPLAY.  

KAPLAY en ese momento estaba celebrando su lanzamiento con un game jam. Me dije: "Vamos a ver que onda" y decidi entrar a mi
primer game jam. Termine creando [KaPlanck](https://kesuave.github.io/KaPlanck/), un plugin que integra
[PlanckJS](https://piqnt.com/planck.js) a KAPLAY, en lugar de enfocarme en mi juego para el jam. Mi juego quedo en ultimo
lugar 😄  

La neta, me diverti y aprendi mucho. Me volvi a dar cuenta que lo mio es crear herramientas y no juegos 😄. Aun asi,
quiero crear juegos! KAPLAY tiene un API muy chida! Anteriormente utilizaba Phaser para crear juegos y tenia una CLI
para generar el codigo repetitivo en mis proyectos. Ahora que decidi usar KAPLAY, me di cuenta que necesitaba algo similar
y el resultado fue KaTools!  

Pa' comenzar a usar KaTools, primero crea un proyecto con tu bundler/constructor favorito. Por ejemplo:

```shell
npx create-kaplay mygame --typescript
```

Entra al directorio recien creado y ejecuta:

```shell
npx katools init
```

Esto generara los siguientes archivos:

- `src/context.ts` - Contine tu configuración de contexto para tu juego.
- `src/scenes/index.ts` - Contine el gestor de escenas para tu juego.
- `src/scenes/boot.ts` - Contiene la escena de inicio donde puedes cargar imagenes o cualquier recurso necesario.
- `src/scenes/menu.ts` - Contiene una escena de menú simple para empezar rápidamente.
- `src/scenes/game.ts` - Contiene la lógica principal de juego de tu juego.
- `src/scenes/gameOver.ts` - Contiene la pantalla de game over.

Despues de eso, puedes agregar las siguientes lineas a tu archivo de entrada, en el caso de create-kaplay sería `src/main.ts`:

```ts
import { k } from "./context"

k.go("boot")
```

y listo, tienes la configuración básica para un juego de Kaplay!

Katools también proporciona algunos comandos para ayudarte a agregar escenas, componentes y entidades:

- `npx katools scene <name>` - Crea una nueva escena con el nombre dado.
- `npx katools component <name>` - Crea un nuevo componente con el nombre dado.
- `npx katools entity <name>` - Crea una nueva entidad con el nombre dado.

la estructura de tu proyecto debería verse algo así:

```
src/
├── components/
│   ├── movement.ts
│   └── ...
├── entities/
│   ├── player.ts
│   └── ...
├── scenes/
│   ├── boot.ts
│   └── ...
├── context.ts
└── ...
```

Nota: esta herramienta la hice pa' mi, como me gusta organizar mi proyecto, pero quizas le funcione a alguien mas y por eso
decidi publicarla!

y listo, pasatela chido!