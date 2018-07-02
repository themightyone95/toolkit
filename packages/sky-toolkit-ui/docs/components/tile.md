---
title: Tile
introduction: |
  Tiles are made of a glass edge with a shine on hover, they contain our content
  and allow any colour beneath to show though.

  Tiles open panels or link to new pages.

  **Note**: Do not feel that all your content must fit within a tile and panel
  format.
source: sky-toolkit-ui/components/tile
dependencies:
  - sky-toolkit-core
  - sky-toolkit-ui/components/shine
layout: component
---

# Tile

## Base

This is the Tile component in its most simple form.

```html { "container": "tile" }
<article class="c-tile">
  <div class="c-tile__content">
    <div class="c-tile__body">
      <p class="c-tile__title c-heading-delta u-margin-bottom-none">Tile Title</p>
      <p class="c-text-body">Tile Content</p>
    </div>
  </div>
</article>
```

### Split Media Tile

The split media tile allows for an image to be placed in the top half of the
tile and title to be placed below.

```html { "container": "tile" }
<article class="c-tile c-tile--square">
  <a class="c-tile__link c-shine-context" href="#">
    <div class="c-tile__content">
      <div class="c-tile__media">
        <img alt="Example image" class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
      </div>
      <div class="c-tile__body c-tile__caption">
        <p class="c-tile__title c-heading-delta">Tile Title</p>
      </div>
    </div>
    <div class="c-tile__shine c-tile__shine--top c-shine">
      <div class="c-shine__rail"></div>
    </div>
    <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
      <div class="c-shine__rail"></div>
    </div>
  </a>
</article>
```

---

## Modifiers

### Full Tile

The full tile allows for an image to be placed as a background for the tile and
title to be placed at the bottom.

```html { "container": "tile" }
<article class="c-tile c-tile--square c-tile--full">
  <a class="c-tile__link c-shine-context" href="#">
    <div class="c-tile__content">
      <div class="c-tile__media">
        <img alt="Example image" class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example-full.png" />
      </div>
      <div class="c-tile__body">
        <div class="c-tile__overlay">
          <p class="c-tile__title c-heading-delta">Tile Title</p>
        </div>
      </div>
    </div>
    <div class="c-tile__shine c-tile__shine--top c-shine">
      <div class="c-shine__rail"></div>
    </div>
    <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
      <div class="c-shine__rail"></div>
    </div>
  </a>
</article>
```

### Square

The square modifier sets a fixed ratio for equal tile height and width. To
remove this forced ratio on mobile see `.c-tile--collapsible`.

**Note**: square tiles can cause issues with scaling typography.

```html { "container": "tile" }
<article class="c-tile c-tile--square">
  <div class="c-tile__content">
    <div class="c-tile__body">
      <p class="c-tile__title c-heading-delta">Tile Title</p>
      <p class="c-text-body">Tile Content</p>
    </div>
  </div>
</article>
```

### Collapsible

The collapsible tile is used in conjuncture with the `.c-tile--square` to remove
the height constraint for mobile breakpoints and allow the tile to inherit
height from its content. If used on a tile featuring the `.c-tile__media`
element it will reposition this to the left.

```html { "container": "tile" }
<article class="c-tile c-tile--square c-tile--collapsible">
  <a class="c-tile__link c-shine-context" href="#">
    <div class="c-tile__content">
      <div class="c-tile__media">
        <img class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
      </div>
      <div class="c-tile__body c-tile__caption">
        <p class="c-tile__title c-heading-delta">Tile Title</p>
      </div>
    </div>
    <div class="c-tile__shine c-tile__shine--top c-shine">
      <div class="c-shine__rail"></div>
    </div>
    <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
      <div class="c-shine__rail"></div>
    </div>
  </a>
</article>
```

### Channel Themes

For tiles requiring branded hover states, simply include the name of the channel
in the format of the gradient names defined in `sky-toolkit-core`; such as 
`.c-tile--sky-atlantic`.

For channel-themed tiles, you may also want to include optional elements for 
additional information such as the channel logo and sponsor brand:

```html { "container": "tile" }
<article class="c-tile c-tile--square c-tile--sky-atlantic">
  <a class="c-tile__link c-shine-context" href="#">
    <div class="c-tile__content">
      <div class="c-tile__media">
        <img class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
        <img src="https://www.sky.com/assets/toolkit/docs/tile/example-channel.png" alt="Sky Atlantic" class="c-tile__channel">
      </div>
      <div class="c-tile__body c-tile__caption">
        <p class="c-tile__title c-heading-delta">Sky Atlantic</p>
      </div>
    </div>
    <div class="c-tile__shine c-tile__shine--top c-shine">
      <div class="c-shine__rail"></div>
    </div>
    <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
      <div class="c-shine__rail"></div>
    </div>
  </a>
  <a class="c-tile__sponsor" href="#1">
    <div class="o-flag o-flag--reverse o-flag--tiny">
      <div class="o-flag__img">
        <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" class="c-tile__sponsor-img" alt="Brand Logo" />
      </div>
      <div class="o-flag__body u-text-right">
        Sponsored by <span class="u-hide-visually">Brand Name</span>
      </div>
    </div>
  </a>
</article>
```

---

## States

### Focus

We can programmatically apply a has focus class to Tiles by adding the
`.has-focus` state. This is a requirement for accessibility.

```html { "container": "tile" }
<article class="c-tile c-tile--square has-focus">
  <a class="c-tile__link c-shine-context" href="#">
    <div class="c-tile__content">
      <div class="c-tile__media">
        <img alt="Example image" class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
      </div>
      <div class="c-tile__body c-tile__caption">
        <p class="c-tile__title c-heading-delta">Tile Title</p>
      </div>
    </div>
  </a>
</article>
```

### Selected

The `.is-selected` class is used to signify that a tile is selected and its
corresponding panel is open and display the indicator. It should only be used
in combination with a panel.

```html
<div class="o-layout o-layout--center">
  <div class="o-layout__item u-width-1/2@large">
    <article class="c-tile c-tile--square is-selected">
      <a class="c-tile__link c-shine-context" href="#">
        <div class="c-tile__content">
          <div class="c-tile__media">
            <img alt="Example image" class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
          </div>
          <div class="c-tile__body c-tile__caption">
            <p class="c-tile__title c-heading-delta">Tile Title</p>
          </div>
        </div>
        <div class="c-tile__shine c-tile__shine--top c-shine">
          <div class="c-shine__rail"></div>
        </div>
        <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
          <div class="c-shine__rail"></div>
        </div>
      </a>
    </article>
  </div>
</div>
<article class="c-panel is-open">
  <div class="c-panel__content">
    <a class="c-panel__toggle" href="#1">Close</a>
    <div class="o-container">
      <p class="c-text-body  u-text-constrain">
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos officiis atque ab esse eaque, facilis dolor. Culpa quidem
        officiis, ea. Debitis, delectus? Hic quam rem, accusamus officia libero
        quidem unde.
      </p>
    </div>
  </div>
</article>
```

### Selected (Dark)

As the indicator arrow to show that the corresponding panel is open is part of
the tile we can use the `.c-tile--dark` class to match the tile indicator to the
`.c-panel--dark` panel.

```html
<div class="o-layout o-layout--center">
  <div class="o-layout__item u-width-1/2@large">
    <article class="c-tile c-tile--dark c-tile--square is-selected">
      <a class="c-tile__link c-shine-context" href="#">
        <div class="c-tile__content">
          <div class="c-tile__media">
            <img alt="Example image" class="c-tile__poster" src="https://www.sky.com/assets/toolkit/docs/tile/example.jpg" />
          </div>
          <div class="c-tile__body c-tile__caption">
            <p class="c-tile__title c-heading-delta">Tile Title</p>
          </div>
        </div>
        <div class="c-tile__shine c-tile__shine--top c-shine">
          <div class="c-shine__rail"></div>
        </div>
        <div class="c-tile__shine c-tile__shine--bottom c-shine c-shine--rev">
          <div class="c-shine__rail"></div>
        </div>
      </a>
    </article>
  </div>
</div>
<article class="c-panel c-panel--dark is-open">
  <div class="c-panel__content">
    <a class="c-panel__toggle" href="#1">Close</a>
    <div class="o-container">
      <p class="c-text-body  u-text-constrain">
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos officiis atque ab esse eaque, facilis dolor. Culpa quidem
        officiis, ea. Debitis, delectus? Hic quam rem, accusamus officia libero
        quidem unde.
      </p>
    </div>
  </div>
</article>
```
