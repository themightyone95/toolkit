---
title: Gradients
introduction: |
  A collection of brand-approved gradients.
source: sky-toolkit-core/settings/gradients
dependencies:
  - sky-toolkit-core
layout: palette
related:
  - sky-toolkit-core/tools/gradients
---

# Gradients

## Palette

| Map          | Source                                                                |
|--------------|-----------------------------------------------------------------------|
| `$gradients` | [sky-toolkit-core/settings/gradients](../../settings/_gradients.scss) |

## Directions

| Map                    | Source                                                                |
|------------------------|-----------------------------------------------------------------------|
| `$gradient-directions` | [sky-toolkit-core/settings/gradients](../../settings/_gradients.scss) |

---

## Tools

A range of tools can be used to access and manipulate gradients. These can be
found in [sky-toolkit-core/tools/gradients](../../tools/_gradients.scss).

### Functions

#### Gradient Color

Individual stops from a gradient in our palette can be accessed via the
`gradient-color()` function.

```scss { "render": false }
// To output the color stop (`x%`, `start` or `end`) of a desired gradient `key`.

.foo {
  color: gradient-color(key, start);
}
```

### Mixins

#### Gradient Background

To set one of the gradients in our palette as a background, use the
`@include gradient-background()` mixin.

```scss { "render": false }
// To output a background gradient and color fallback of desired gradient `key`.

.foo {
  @include gradient-background(key);
}

// By default our mixin outputs a *vertical* gradient, but other directions
// (defined above in our settings) can be passed in.

.foo {
  @include gradient-background(key, horizontal);
}
```

#### Gradient Text

To set one of the gradients in our palette as a text fill, use the
`@include gradient-text()` mixin.

```scss { "render": false }
// To output a text gradient and color fallback of desired gradient `key`.

.foo {
  @include gradient-text(key);
}

// By default our mixin outputs a *horizontal* gradient, but other directions
// (defined above in our settings) can be passed in.

.foo {
  @include gradient-text(key, vertical);
}
```
