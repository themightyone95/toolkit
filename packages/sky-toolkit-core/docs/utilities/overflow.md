---
title: Overflow
introduction: |
  Override Toolkit's default overflow behaviour for individual use cases.
source: sky-toolkit-core/utilities/overflow
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sky-toolkit-core/generic/overflow
---

# Overflow

As 
[browsers interpret `vw` differently](https://caniuse.com/#feat=viewport-units), 
some full-width (`100vw`) UI components can cause unwanted horizontal scrolling. 
To avoid this problem, Toolkit hides horizontal overflow by default in
[sky-toolkit-core/generic/overflow](../../generic/_overflow.scss).

To override this default behaviour for individual use cases, we provide the
following utility:

```html { "render": false }
<div class="u-overflow-x-scroll">
  I'm an element with a scrollable x-axis.
</div>
```
