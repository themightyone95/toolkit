---
title: Vertical Alignment
introduction: |
  "Learn CSS in 24 Hours"

  After 3 hours, you've learnt all of CSS.

  Hours 3 to eternity are spent trying to vertically center stuff.

  – [@iamdevloper](https://twitter.com/iamdevloper)
source: sky-toolkit-core/utilities/vertical-alignment
dependencies:
  - sky-toolkit-core
layout: component
---

# Vertical Alignment

In scenarios where heights are fixed and items need to be placed in the absolute
center, we provide a `.u-vertical-align-center` class.

**Note**: When using `.o-layout`, vertical alignment can be achieved with the
provided modifiers.

```html { "render": false }
<div class="u-vertical-align-center">I'm vertically centered</div>
```

## Parent

If the vertical alignment renders on half a pixel, it can cause visual issues.
This can fixed by using the optional `-parent` class to `preserve-3d`:

```html { "render": false }
<div class="u-vertical-align-parent">
  <div class="u-vertical-align-center">I'm vertically centered (with a parent)</div>
</div>
```
