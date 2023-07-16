# WorkAdventure Map Gamification
## Structure

* *src*: Scripts files
* *assets*: PDFs, images, ... 
* *tilesets*: All tilesets
* *map.tmj*: Map file
* *map.png*: The map thumbnail displayed on the in-game map information

## Installation

With npm installed, run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run dev
```

## Test production map

You can test the optimized map as it will be in production:
```sh
npm run build
npm run prod
```

## Licenses

This project contains multiple licenses as follows:

* [Code license](./LICENSE.code) *(all files except those for other licenses)*
* [Map license](./LICENSE.map) *(`map.tmj` and the map visual as well)*
* [Assets license](./LICENSE.assets) *(the files inside the `src/assets/` folder)*

### About third party assets

If you add third party assets in your map, do not forget to:
1. Credit the author and license with the "tilesetCopyright" property present in the properties of each tilesets in the `map.tmj` file
2. Add the license text in LICENSE.assets
