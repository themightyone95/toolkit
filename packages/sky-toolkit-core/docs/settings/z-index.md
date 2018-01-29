---
title: z-index
introduction: |
  Settings for sane z-index management across the project and estate.
source: sky-toolkit-core/settings/z-index
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sky-toolkit-core/tools/functions
---

# z-index

Without management, z-index values across an estate like Sky's can get messy
real fast; leading to dreaded `z-index: 999999999999;` hotfixes.

Keeping our values in a map helps to keep things consistent and easier to
maintain:

| Map        | Source                                                            |
|------------|-------------------------------------------------------------------|
| `$z-index` | [sky-toolkit-core/settings/z-index](../../settings/_z-index.scss) |

---

## Tools

z-index values from our map can be accessed via the `z-index()` function from
[sky-toolkit-core/tools/functions](../../tools/_functions.scss).

```scss { "render": false }
// To output the color of a desired `key`.

.foo {
  color: z-index(key);
}
```
