---
title: Colors
introduction: |
  A collection of brand-approved colours.
source: sky-toolkit-core/settings/colors
dependencies:
  - sky-toolkit-core
layout: palette
related:
  - sky-toolkit-core/tools/functions
  - sky-toolkit-core/tools/mixins
---

# Colors

## Palette

| Map       | Source                                                          |
|-----------|-----------------------------------------------------------------|
| `$colors` | [sky-toolkit-core/settings/colors](../../settings/_colors.scss) |

---

## Tools

Colors from our palette can be accessed via the `color()` function from
[sky-toolkit-core/docs/tools/functions](../tools/functions.md).

```scss { "render": false }
// To output the color of a desired `key`.

.foo {
  color: color(key);
}
```
