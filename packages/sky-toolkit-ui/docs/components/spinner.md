---
title: Spinner
introduction: |
  A spinner component is used to indicate that content is loading and is
  particularly useful for dynamically loaded content displaying an animated
  circle graphic.

  A spinner may be required when elements of a page are still loading, or
  following a user interaction whilst new content is loaded.

  Once the content has loaded the spinner fades and should be replaced by the
  loaded content.
source: sky-toolkit-ui/components/spinner
dependencies:
  - sky-toolkit-core
layout: component
---

# Spinner

## Base

### Spinner

Displays a single spinner component in the page.

```html
<strong class='c-spinner' role='progressbar'>Loading…</strong>
```

### Spinner Overlay

Used in tiles and displays a spinner with an opaque background over the top of
the content to be loaded.

```html { "container": "tile" }
<article class="c-tile">
  <div class="c-tile__content">
    <div class="c-spinner-overlay c-spinner-overlay--light">
      <strong class="c-spinner" role="progressbar">Loading…</strong>
    </div>
    <img class="u-width-1/1" alt="Example image" src="https://www.sky.com/assets/toolkit/docs/spinner/example.gif" />
  </div>
</article>
```

---

## Modifiers

### Spinner

#### Small 

```html
<strong class="c-spinner c-spinner--small" role="progressbar">Loading…</strong>
```

#### Large

```html
<strong class="c-spinner c-spinner--large" role="progressbar">Loading…</strong>
```

### Spinner Overlay

#### Dark

Displays an Overlay Spinner using a dark background with a lighter, inverted
Spinner to contrast with the darker background.

```html { "container": "tile" }
<article class="c-tile">
  <div class="c-tile__content">
    <div class="c-spinner-overlay c-spinner-overlay--dark">
      <strong class="c-spinner c-spinner--inverse" role="progressbar">Loading…</strong>
    </div>
    <img class="u-width-1/1" alt="Example image" src="https://www.sky.com/assets/toolkit/docs/spinner/example.gif" />
  </div>
</article>
```

---

## States

### Complete

Adding a class of `.is-complete` to the Spinner or Spinner Overlay will provide
a fade-out exit transition to indicate loading completion.

```html { "render": false }
<strong class="c-spinner is-complete" role="progressbar">Loading…</strong>
```
