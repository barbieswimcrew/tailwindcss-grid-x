# Tailwind CSS "grid-x" Plugin
A Tailwind CSS plugin that adds an extraordinary *__grid-x-perience__* by adding easy-to-use **full**/**breakout**/**content**/**narrow** grid column template areas.

<img src="screenshot.png" width="100%">

## Install

Requires tailwindcss v1.0 or higher.

Install the plugin via npm:
```shell
npm install @barbieswimcrew/tailwindcss-grid-x
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@barbieswimcrew/tailwindcss-grid-x'),
    // ...
  ],
}
```
---

## Basic usage

Now you can use the `.grid-x` component class and the provided `.col-` grid column utilitiy classes to rock your HTML.

```html
<div class="grid-x *:font-bold *:p-2">
    <div class="col-full bg-amber-200">.col-full</div>
    <div class="col-full-left bg-amber-300">.col-full-left</div>
    <div class="col-full-right bg-amber-400">.col-full-right</div>
    <div class="col-breakout bg-lime-200">.col-breakout</div>
    <div class="col-breakout-left bg-lime-300">.col-breakout-left</div>
    <div class="col-breakout-right bg-lime-400">.col-breakout-right</div>
    <div class="col-content bg-emerald-200">.col-content</div>
    <div class="col-content-left bg-emerald-300">.col-content-left</div>
    <div class="col-content-right bg-emerald-400">.col-content-right</div>
    <div class="col-narrow bg-sky-200">.col-narrow</div>
    <div class="col-narrow-left bg-sky-300">.col-narrow-left</div>
    <div class="col-narrow-right bg-sky-400">.col-narrow-right</div>
    <!-- ... -->
</div>
```

### Choosing the grid column
This plugin provides several utility classes for grid template columns.

Here are the regular classes that are being generated:
| Class                     | Grid template area          |
| ------------------------- | --------------------------- |
| `col-content` _(default)_ | Content area                |
| `col-full`                | Full-width area             |
| `col-breakout`            | Breakout from content area  |
| `col-narrow`              | Narrow area                 |

> [!NOTE]
> If not explicitly set, direct child elements of `.grid-x` are automatically treated like `.col-content`.

In addition there are classes for specific use cases:
| Class                     | Grid template area    |
| ------------------------- | ----------------------------------- |
| `col-content-left`        | The left side of the content area   |
| `col-content-right`       | The right side of the content area  |
| `col-breakout-left`       | The left side of the breakout area  |
| `col-breakout-right`      | The right side of the breakout area |
| `col-full-left`           | The left side of the full area      |
| `col-full-right`          | The right side of the full area     |
| `col-narrow-left`         | The left side of the narrow area    |
| `col-narrow-right`        | The right side of the narrow area   |

### Changing the default class name

If you need to use a class name other than `grid-x` for any reason, you can do so using the `className` option when registering the plugin:

```js {{ filename: 'tailwind.config.js' }}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@barbieswimcrew/tailwindcss-grid-x')({
      className: 'foo',
    }),
  ]
  ...
}
```
---
## Copying / License
This repository is distributed under the MIT License (MIT). You can find the whole license text in the [LICENSE](LICENSE) file.
