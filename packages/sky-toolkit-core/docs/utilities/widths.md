---
title: Widths
introduction: |
  A suite of flexible width classes for use on
  [Layout](https://github.com/sky-uk/supercell#usage) and non-Layout related
  areas of UI.
source: sky-toolkit-core/utilities/widths
dependencies:
  - sky-toolkit-core
layout: component
related:
  - supercell
---

# Widths

By default, Toolkit surfaces the following width utilities from [Supercell](https://github.com/sky-uk/supercell#usage):

| Fraction | Classes                                                        |
|----------|----------------------------------------------------------------|
| Whole    | `.u-width-1/1`                                                 |
| Halves   | `.u-width-1/2`                                                 |
| Thirds   | `.u-width-1/3`, `.u-width-2/3`                                 |
| Quarters | `.u-width-1/4`, `.u-width-2/4`, `.u-width-3/4`                 |
| Fifths   | `.u-width-1/5`, `.u-width-2/5`, `.u-width-3/5`, `.u-width-4/5` |

These utilities aren't tied exclusively to
[Layout](https://github.com/sky-uk/supercell#usage); they can be applied 
anywhere.

## Responsive

Width classes can be set to trigger at any of our breakpoints, following a 
**mobile-first** approach. Add the prefix `@breakpoint-name` to the end
of your class.

For example, the markup below will result in:

* Full width by default
* Half width at the `medium` breakpoint
* Quarter width at the `large` breakpoint

```html
<div class="o-layout">
  <div class="o-layout__item u-width-1/1 u-width-1/2@medium u-width-1/4@large">
    Example layout element
  </div>
</div>
```
