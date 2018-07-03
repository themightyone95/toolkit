---
title: Hero
introduction: |
  We use hero images to promote our content. They generally sit at the top of
  the page and can be used with and without tiles laid over them. Heroes can be
  fixed height or can fill the browser window.

  The hero can contain images and video loops. When choosing images for your
  hero try to choose something that reflects the purpose of the page.
source: sky-toolkit-ui/components/hero
dependencies:
  - sky-toolkit-core
  - sky-toolkit-ui/components/shine
layout: component
---

# Hero

## Base

This is the hero component in its most simple form.

```html { "container": "flush" }
<div class="c-hero" style="background-image: url('https://www.sky.com/assets/toolkit/docs/hero/example.jpg');">
  <div class="c-hero__caption">
    <div class="o-container">
      <a class="c-hero__link" href="#1">
        <p class="c-heading-alpha u-margin-bottom-none">Hero Title</p>
        <p class="c-heading-delta u-margin-bottom">Sub Content</p>
      </a>
    </div>
  </div>
</div>
```

---

## Modifiers

### Cover

Sets hero height to be 100% of the viewport height.

```html { "container": "flush" }
<div class="c-hero c-hero--cover" style="background-image: url('https://www.sky.com/assets/toolkit/docs/hero/example.jpg');">
  <div class="c-hero__caption">
    <div class="o-container">
      <a class="c-hero__link" href="#1">
        <p class="c-heading-alpha u-margin-bottom-none">Hero Title</p>
        <p class="c-heading-delta u-margin-bottom">Sub Content</p>
      </a>
    </div>
  </div>
</div>
```

### Fit Content

Removes the standard `min-height` on the hero allowing it to scale with the 
content. This allows `.c-hero__video` videos to scale and maintain aspect ratio.

```html { "container": "flush" }
<div class="c-hero c-hero--fit-content">
  <video class="c-hero__video" autoPlay loop preload="auto" poster="https://www.sky.com/assets/toolkit/docs/hero/example-poster.jpg" width="100%" height="100%">
    <source src="https://www.sky.com/assets/toolkit/docs/hero/example.mp4" type="video/mp4">
  </video>
  <div class="c-hero__caption">
    <div class="o-container">
      <a class="c-hero__link" href="#">
        <p class="c-heading-alpha u-margin-bottom-none">Hero Title</p>
        <p class="c-heading-delta u-margin-bottom">Sub Content</p>
      </a>
    </div>
  </div>
</div>
```

### Overlap

Pulls adjacent content to overlap the bottom of the hero. The adjacent content
should be set to `position: relative;` or using a `z-index` to avoid incorrect
overlapping.

```html { "container": "flush" }
<div class="c-hero c-hero--overlap" style="background-image: url('https://www.sky.com/assets/toolkit/docs/hero/example.jpg');">
  <div class="c-hero__caption">
    <div class="o-container">
      <a class="c-hero__link" href="#">
        <p class="c-heading-alpha u-margin-bottom-none">Hero Title</p>
        <p class="c-heading-delta u-margin-bottom">Sub Content</p>
      </a>
    </div>
  </div>
</div>
<div class="o-container">
  <article class="c-tile">
    <div class="c-tile__content">
      <div class="c-tile__body u-padding-all">
        <h1 class="c-tile__title u-text-center">Overlap example</h1>
        <p class="c-text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tempor tellus, a sagittis ex. Ut tempus, nisi sit amet mollis interdum, lorem velit commodo nisi, ornare ullamcorper massa sem eu leo. Praesent euismod ut libero ac eleifend. Suspendisse commodo sollicitudin nulla, accumsan hendrerit erat tincidunt et. Maecenas aliquet velit in sapien sagittis sollicitudin.</p>
      </div>
    </div>
  </article>
</div>
```
