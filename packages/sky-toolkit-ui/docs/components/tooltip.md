---
title: Tooltip
introduction: |
  Tooltips provide contextual information and can be invoked from any node. They
  can be triggered either on hover or on click.

  Tooltips appear as white box below the trigger. When active, they whitewash
  the entire viewport.
source: sky-toolkit-ui/components/tooltip
dependencies:
  - sky-toolkit-core
layout: component
---

# Tooltip

## Base

The tooltip trigger can be any node – a button, link, icon, anything. In this
example we use a simple `.c-btn` component.

By default, the tooltip is meant to be triggered on click. You can do this by
toggling the stateful `.is-active` class from the `.c-tooltip` component.

```html
<div class="c-tooltip">
  <button class="c-btn c-btn--primary c-tooltip__trigger">Trigger tooltip</button>
  <div class="c-tooltip__content">
      This is some text inside a tooltip.
  </div>
</div>
```

---

## Modifiers

### Hoverable

Tooltips can also be triggered on the `:hover` state of the trigger, rather than 
click by applying the `.c-tooltip--hover` modifier to the component.

When using the hover modifier, the viewport is not whitewashed.

```html
<div class="c-tooltip c-tooltip--hover">
  <button class="c-btn c-btn--primary c-tooltip__trigger">Trigger tooltip</button>
  <div class="c-tooltip__content">
      This is some text inside a tooltip.
  </div>
</div>
```

### Right-aligned

By default, tooltips are aligned to the right. In some use cases, you may need
the tooltip to be aligned to the right to avoid overflow. This can be enabled by
adding the `.c-tooltip--right` modifier to the component.

```html
<div class="c-tooltip c-tooltip--right">
  <button class="c-btn c-btn--primary c-tooltip__trigger">Trigger tooltip</button>
  <div class="c-tooltip__content">
      This is some text inside a tooltip.
  </div>
</div>
```
