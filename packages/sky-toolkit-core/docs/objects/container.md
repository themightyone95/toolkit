---
title: Container
introduction: |
  Our most basic and common page layout object.
source: sky-toolkit-core/objects/container
dependencies:
  - sky-toolkit-core
layout: component
---

# Container

Our container helps to keep all pages and full-width elements to a consistent 
maximum width, whilst keeping everything to the center of the viewport.

You can also access this max-width value via `$global-container-width` from 
[sky-toolkit-core/settings/globals](../settings/globals.md).

```html { "render": false }
<div class="o-container">
  Some content
</div>
```
