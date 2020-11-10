![Banner](./docs/assets/images/cover.png)

A library for developers who want to approach to creative coding, for artists who want to approach to programming or for anyone else who wants to play with math.

## Installation

The most immediate way to include Urpflanze in your project is to use an online hosted version.

### CDN

Full verison

```html
<script src="https://cdn.jsdelivr.net/npm/urpflanze"></script>
```

Costomizable version

```html
<script src="https://cdn.jsdelivr.net/npm/urpflanze[@version]/build/urpflanze[-light][.min].js"></script>
```

### NPM

To install it just run the command:

```sh
npm i --save urpflanze
```

At the end you can include Urpflanze in your code

```javascript
import * as Urpflanze from 'urpflanze'

const scene = new Urpflanze.Scene()

// or

import { Scene } from 'urpflanze'

const scene = new Scene()
```

_use `urpflanze/dist/index-light` for light version_

## Example

### Hello Rect!

```javascript
const scene = new Urpflanze.Scene()

const rect = new Urpflanze.Rect({
	repetitions: 8,
	distance: 100,
	sideLength: 20,
})
scene.add(rect) // Add rect to scene

const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
drawer.draw() // Draw scene on canvas
```

### Output

![Example output](./docs/assets/images/readme/output-1.png)

## Full docs

[Docs (only Italian for now) and Examples](https://genbs.github.io/urpflanze/)
