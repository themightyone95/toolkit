---
title: Typography
introduction: |
  Utilities for manipulating text.
source: sky-toolkit-core/utilities/typography
dependencies:
  - sky-toolkit-core
layout: component
---

# Typography

For quick, easy and consistent typographic manipulation, make use of Toolkit's
typography utilities:

## Alignment

```html
<p class="u-text-left">I'm a left-aligned sentence.</p>
<p class="u-text-center">I'm a center-aligned sentence.</p>
<p class="u-text-right">I'm a right-aligned sentence.</p>
<p class="u-text-justify">I'm a justified sentence.</p>
```

---

## Style

Sometimes we want text to be bold or italic purely for cosmetic reasons. To
avoid this being miscommunicated to visually impaired users via screen readers 
or ATs, we provide the following classes:

```html
<p class="u-text-bold">I'm a visually bold sentence.</p>
<p class="u-text-italic">I'm a visually italic sentence.</p>
```

---

## Line Length

```html
<p class="u-text-constrain">
  I'm a constrained paragraph. This utility will constrain text to a maximum
  of 75 characters per line, regardless of the text's font-size.
</p>
```
