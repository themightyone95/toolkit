---
title: Hide
introduction: |
  Utilities for hiding text with considerations for accessibility.
source: sky-toolkit-core/utilities/hide
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sky-toolkit-core/tools/mixins 
---

# Hide

## Hide Visually

Visually hide content, leaving it accessible to screen readers and ATs.

**Note**: This is also provided as a mixin in [sky-toolkit-core/tools/mixins](../../utilities/_hide.scss).

Further reading: [Jonathan Snook's 'Hiding Content for Accessibility'](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility).

```html { "render": false }
<span class="u-hide-visually">I'm visually hidden</span>
```

---

## Hide Completely

Completely hide content both visually from the screen, and from screen readers
and ATs.

**Note**: This is also provided as a mixin in [sky-toolkit-core/tools/mixins](../../utilities/_hide.scss).

```html { "render": false }
<span class="u-hide-completely">I'm completely hidden</span>
```
