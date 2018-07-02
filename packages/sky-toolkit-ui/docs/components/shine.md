---
title: Shine
introduction: |
  Complimenting the glass, the 'shine' plays a big part in Sky's branding.

  Adding a shine animation to our content provides a unique look and feel.

  The Shine component is left intentionally flexible for use on various
  different components.
source: sky-toolkit-ui/components/shine
dependencies:
  - sky-toolkit-core
layout: component
---

# Shine

## Base

### Shine

The Shine is generated completely via CSS, and consists of two elements:

* Shine - container and positioning.
* Shine Rail - the moveable shine graphic.

The Shine Rail is hidden out-of-view on the left side by default, and can be
moved or animated by modifying the `transform: translateX(×);` value.

```html { "theme": "dark" }
<!-- Note: Shine Rail centered using `style` for demo purposes -->
<div class="c-shine">
  <div class="c-shine__rail" style="transform: translateX(0);"></div>
</div>
```

### Shine Context

Adding Shine Context to any element (ideally an interactive element) will
provide a basic Shine hover animation; fading in from the edge.

The bottom Shine uses the `.c-shine--rev` modifier to animate in the opposite
direction.

The Shine edge positioning can be altered to suit your component, and can be
modified using an additional class alongside `.c-shine` (e.g. Tile Shine).

```html { "theme": "dark", "container": "flush" }
<div class="c-shine-context">
  <div class="c-shine">
    <div class="c-shine__rail"></div>
  </div>
  <!-- Start: Shine Context Content -->
  <p class="c-text-body u-text-center u-margin-all-large">Shine Context</p>
  <!-- End: Shine Context Content -->
  <div class="c-shine c-shine--rev">
    <div class="c-shine__rail"></div>
  </div>
</div>
```
