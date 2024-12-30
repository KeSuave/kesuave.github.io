---
title: KaTools
description: A simple CLI tool for KAPLAY game creation
date: 2024-12-29
---

Sup!  
Today I want to introduce [KaTools](https://www.npmjs.com/package/katools), a simple CLI tool that takes care of the boilerplate code for you when creating
games with [KAPLAY](https://kaplayjs.com/).  

A few months ago I was bored and remembered about a game framework called KABOOM, it was getting popular and youtube
was recommending me videos on how to create games using this framework. I remember playing with it a little bit, I
really liked it's API but because it was generally the new kid on the block, it didn't have a few things that I wanted
at that time. I stopped hearing about it and when I searched for it, I found out that KABOOM had been discontinued and
replaced by KAPLAY.  

The KAPLAY team was also promoting their first game jam. So, I decided to participate in my first game jam. I ended up creating
[KaPlanck](https://kesuave.github.io/KaPlanck/), a plugin that integrates [PlanckJS](https://piqnt.com/planck.js) instead
of working in my game entry, which got last place 😄  

But I learned a lot from this experience and decided I was going to start creating more games using KAPLAY because it's API
truly makes it feel fun and easy to create games with. I had previously created a game or two using Phaser, in which I had
created a CLI tool that would generate boilerplate code for me when starting new projects. So, I decided to do the same thing
for KAPLAY. The result being KaTools!

To start using KaTools, first create a project using your favorite bundler/build tool. For example:

```shell
npx create-kaplay mygame --typescript
```

Then cd into that directory and run:

```shell
npx katools init
```

This will generate the following files:

- `src/context.ts` - Contains your game's context setup.
- `src/scenes/index.ts` - Contains the scene manager for your game.
- `src/scenes/boot.ts` - Contains the boot scene, where you can load assets.
- `src/scenes/menu.ts` - Contains a simple menu scene to get started quickly.
- `src/scenes/game.ts` - Contains your game's main gameplay logic.
- `src/scenes/gameOver.ts` - Contains the game over screen.

Then you can simply add the following lines to your entry point file, in the case of create-kaplay it would be `src/main.ts`:

```ts
import { k } from "./context"

k.go("boot")
```

that is it, you have the basic setup for a Kaplay game!

Katools also provides some commands to help add scenes, components, and entities:

- `npx katools scene <name>` - Creates a new scene with the given name.
- `npx katools component <name>` - Creates a new component with the given name.
- `npx katools entity <name>` - Creates a new entity with the given name.

your project structure should look something like this:

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

Note: this was created mostly for personal use, so it might not be the best way to do things, but it works for me! I decided
to make it public because maybe someone else will find it useful.

With that said, happy coding!