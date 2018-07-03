---
title: Overlay
introduction: |
  An overlay is used for displaying contextual information in a full-screen window.

  The overlay is typically rendered in its own route rather than directly into the DOM above other
  content, as this allows for improved accessibility without need for manipulating browser focus.

  Its specific purpose is for longform contextual information that is not suited to being
  displayed inline via a `panel` or other component.
source: sky-toolkit-ui/components/overlay
dependencies:
  - sky-toolkit-core
layout: component
---

# Overlay

## Base

By default, the overlay renders in 3 primary sections: a header, content area, and footer.

The header is fixed to the top of the viewport, and contains a close button. Styles for the button
are provided in this component, however you must provide the inline SVG for the icon – usually
provided via [Skycons](github.com/sky-uk/skycons).

The content area is a blank canvas for you to add your contextual information, for example,
providing additional marketing information for a product or offer. It is scrollable and fills the
entire viewport.

The footer is an optional addition, which is typically used for rendering a primary call to action
button.

```html { "container": [ "overlay", "flush" ] }
<article class="c-overlay">
  <header class="c-overlay__header">
    <button class="c-overlay__close c-link c-link--close u-vertical-align-center">
      Close
    </button>
  </header>
  <div class="c-overlay__content">
    <!--  Whatever you want in the overlay -->
  </div>
  <footer class="c-overlay__footer">
    <!--  Whatever you want in the footer, usually a button -->
  </footer>
</article>
```

## Modifiers

### Left Aligned Close Button

You can optionally display the close button on the left side of the header by passing the
`.c-overlay--close-left` modifier. This is only to be used if extra contextal components need to be
rendered in the right side of the header, such as a basket or continue button.

```html { "container": [ "overlay", "flush" ] }
<article class="c-overlay c-overlay--close-left">
  <header class="c-overlay__header">
    <button class="c-overlay__close c-link c-link--close u-vertical-align-center">
      Close
    </button>
  </header>
  <div class="c-overlay__content">
    <!--  Whatever you want in the overlay -->
  </div>
  <footer class="c-overlay__footer">
    <!--  Whatever you want in the footer, usually a button -->
  </footer>
</article>
```

## Hiding the Close Label

For some use cases on smaller screens you may want to hide the close button's 
label whilst keeping the icon visible.

To do so, utilise `.c-link__label` from
[sky-toolkit-ui/components/links](links.md).

```html { "container": [ "overlay", "flush" ] }
<article class="c-overlay">
  <header class="c-overlay__header">
    <button class="c-overlay__close c-link c-link--close u-vertical-align-center">
      <span class="c-link__label">Close</span>
    </button>
  </header>
  <div class="c-overlay__content">
    <!--  Whatever you want in the overlay -->
  </div>
  <footer class="c-overlay__footer">
    <!--  Whatever you want in the footer, usually a button -->
  </footer>
</article>
```
