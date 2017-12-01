---
title: Modal
introduction: |
  An Modal is used for displaying contextual information in a popup window.

  Its specific purpose is for longform contextual information that is not suited to being displayed inline via a `panel` or other component.
source: sky-toolkit-ui/components/modal
dependencies:
  - sky-toolkit-core
contributors:
  - lukewhitehouse
  - mikejgregory
  - rbrtsmith
layout: component
---

# Modal

## Base

By default, the Modal component is centered to the middle of the viewport, wrapped within the `c-modal-cover` component. Within the Modal itself, it's Close button is positioned at the top of the Modal, above any content the consumer adds.

```html
<aside class="c-modal-cover" role="dialog" aria-label="A label describing the Modal's current content" tabIndex="-1">
  <div class="c-modal">
    <div class="u-text-right">
      <button class="c-link-faux c-modal__close" aria-label="Close Modal">
        <span>Close</span>
        <svg class="c-modal__close-icon" width="1.75em" height="1.75em" viewBox="0 0 32 32"><!--  CLOSE ICON SVG --></svg>
      </button>
    </div>
    <div class="c-modal__body">
      <!-- Whatever you want in the Modal -->
    </div>
  </div>
</aside>
```

## Hiding the Close Label

There are some use cases where you would want to show the close button, but without the label. To do
so, use the existing `.u-hide-visually` utility provided in `sky-toolkit-core`. This ensures the
label is still accessible to screen readers, but does not display in the browser.

```html
<aside class="c-modal-cover" role="dialog" aria-label="A label describing the Modal's current content" tabIndex="-1">
  <div class="c-modal">
    <div class="u-text-right">
      <button class="c-link-faux c-modal__close" aria-label="Close Modal">
        <span class="u-hide-visually">Close</span>
        <svg class="c-modal__close-icon" width="1.75em" height="1.75em" viewBox="0 0 32 32"><!--  CLOSE ICON SVG --></svg>
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

```html
<html class="u-overflow-hidden">
  <head></head>
  <body></body>
</html>
```
