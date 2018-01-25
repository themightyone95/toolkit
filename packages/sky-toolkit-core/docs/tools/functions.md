---
title: Functions
introduction: |
  A bundle of handy functions for global use.
source: sky-toolkit-core/tools/functions
dependencies:
  - sky-toolkit-core
layout: component
---

# Functions

## Rounding

Rounding numbers in Sass is a pain. Toolkit surfaces three functions written by [Takeru Suzuki](https://github.com/terkel) to round numbers to a specified decimal place.

### Decimal Round

Round a number to specified digits.

```scss { "render": false }
$foo: decimal-round(0.333);    // => 0
$foo: decimal-round(0.333, 1); // => 0.3
$foo: decimal-round(0.333, 2); // => 0.33
$foo: decimal-round(0.666);    // => 1
$foo: decimal-round(0.666, 1); // => 0.7
$foo: decimal-round(0.666, 2); // => 0.67
```

### Decimal Ceil

Ceil a number to specified digits.

```scss { "render": false }
$foo: decimal-ceil(0.333);    // => 1
$foo: decimal-ceil(0.333, 1); // => 0.4
$foo: decimal-ceil(0.333, 2); // => 0.34
$foo: decimal-ceil(0.666);    // => 1
$foo: decimal-ceil(0.666, 1); // => 0.7
$foo: decimal-ceil(0.666, 2); // => 0.67
```

### Decimal Floor

Floor a number to specified digits.

```scss { "render": false }
$foo: decimal-floor(0.333);    // => 0
$foo: decimal-floor(0.333, 1); // => 0.3
$foo: decimal-floor(0.333, 2); // => 0.33
$foo: decimal-floor(0.666);    // => 0
$foo: decimal-floor(0.666, 1); // => 0.6
$foo: decimal-floor(0.666, 2); // => 0.66
```

---

## Maps

Sass Maps are a really handy way of storing common values and settings, but
accessing nested values can often get messy. Toolkit surfaces two functions
written by [Hugo Giraudel](https://github.com/HugoGiraudel) to make map access a little easier.

### Map Get Deep

Access nested map values.

```scss { "render": false }
$menu:(
  spam: (
    eggs: ham,
    ham: eggs
  )
);

$breakfast: map-get-deep($menu, spam);       // => eggs
$breakfast: map-get-deep($menu, spam, eggs); // => ham
```

### Map Has Keys Deep

Check for keys in nested maps.

```scss { "render": false }
$menu:(
  spam: (
    eggs: ham,
    ham: eggs
  )
);

$breakfast: map-has-keys-deep($menu, spam);       // => true
$breakfast: map-has-keys-deep($menu, ham);        // => false
$breakfast: map-has-keys-deep($menu, spam, eggs); // => true
$breakfast: map-has-keys-deep($menu, spam, spam); // => false
```

---

## Map Shortcuts

### Color

See [sky-toolkit-core/docs/settings/colors](../settings/colors.md) for usage.

### z-index

See [sky-toolkit-core/docs/settings/z-index](../settings/z-index.md) for usage.

---

## Conversion

### Convert to EM

Converts any `px` or `rem` value to `em` based on the project's
`$global-font-size`.

```scss { "render": false }
$foo: convert-to-em(18px); // => 1em
$foo: convert-to-em(26px); // => 1.444444444em
$foo: convert-to-em(2rem); // => 2em
```

### Reverse

Reverse a list of values.

```scss { "render": false }
$foo: reverse(1,2,3,4);       // => 4,3,2,1
$foo: reverse(a 1, b 2, c 3); // => c 3, b 2, a 1
```

### Strip Unit

Remove the unit from a value.

```scss { "render": false }
$foo: strip-unit(20px); // => 20
```
