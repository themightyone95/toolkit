---
title: Modal
introduction: |
  An Modal is used for displaying contextual information in a popup window.

  Its specific purpose is for longform contextual information that is not suited to being displayed inline via a `panel` or other component.
source: sky-toolkit-ui/components/modal
dependencies:
  - sky-toolkit-core
layout: component
---

# Modal

## Base

By default, the Modal component is centered to the middle of the viewport, wrapped within the `c-modal-cover` component. Within the Modal itself, it's Close button is positioned at the top of the Modal, above any content the consumer adds.

```html { "container": [ "overlay", "flush" ] }
<aside class="c-modal-cover" role="dialog" aria-label="A label describing the Modal's current content" tabIndex="-1">
  <div class="c-modal">
    <div class="u-text-right">
      <button class="c-modal__close c-link c-link--close" aria-label="Close Modal">
        Close
      </button>
    </div>
    <div class="c-modal__body">
      <!-- Whatever you want in the Modal -->
    </div>
  </div>
</aside>
```

## Locking page scroll

When using the Modal you will want to ensure that viewport scrolling is locked. To do so you can append the existing `.u-overflow-hidden` utility provided in `sky-toolkit-core` to your `<html>` tag.

```html { "render": false }
<html class="u-overflow-hidden">
  <head></head>
  <body></body>
</html>
```
