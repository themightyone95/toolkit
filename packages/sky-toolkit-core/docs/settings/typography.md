---
title: Typography
introduction: |
  Our core typographic settings.
source: sky-toolkit-core/settings/typography
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sky-toolkit-core/tools/typography
  - sky-toolkit-core/generic/font-face
  - sky-toolkit-core/elements/typography
  - sky-toolkit-core/utilities/typography
  - sky-toolkit-ui/components/typography
---

# Typography

## Typographic Scale

Our desktop (default, `large`) and mobile (`small`) font-sizes and line-heights
are defined here for later use in the project.

For quick use, make use of the pre-built Typography component classes in
[sky-toolkit-ui/components/typography](../../../sky-toolkit-ui/docs/components/typography.md).

For bespoke use, you can make use of the tools in [sky-toolkit-core/tools](#tools) to 
output the specific sizes you need.

| Map     | Source                                                                  |
|---------|-------------------------------------------------------------------------|
| `$text` | [sky-toolkit-core/settings/typography](../../settings/_typography.scss) |

---

## Tools

### Mixins

#### Font

Output a fully formed type scale (`font-size` **and** `line-height`) by passing
any of the size names from our typographic scale above, into the
`@include font()` mixin.

```scss { "render": false }
// To output the variant font-size and line-height (`large` by default 
// or `small`) of a desired `key`.

.foo {
  @include font(key);
}
```

#### REM

To generates a rem-based font-size with its pixel fallback, use the 
`@include rem()` mixin.

**Note**: If you're using the `@include font()` mixin above, rem values are
calculated automatically and using this mixin additionally is not required.

```scss { "render": false }
// To output a rem-based font-size of 18px and fallback.

.foo {
  @include rem(18px);
}
```

### Functions

#### Font Size

Individual font-sizes from our typographic scale map can be accessed via the
`font-size()` function.

```scss { "render": false }
// To output the variant font-size (`large` by default or `small`) of a desired `key`.

.foo {
  font-size: font-size(key);
}
```

#### Line Height

Individual line-heights from our typographic scale map can be accessed via the
`line-height()` function.

```scss { "render": false }
// To output the variant line-height (`large` by default or `small`) of a desired `key`.

.foo {
  line-height: line-height(key);
}
```
