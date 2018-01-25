---
title: Flag
introduction: |
  The Flag Object places any image-like content next to any text-like content,
  with flexibility on vertical alignment.
source: sky-toolkit-core/objects/flag
dependencies:
  - sky-toolkit-core
layout: component
---

# Flag

The Flag Object shares a similar structure to the Media Object, but with greater
control on vertical alignment.

For further reading, see [Harry Roberts' article](https://csswizardry.com/2013/05/the-flag-object/).

```html
<div class="o-flag">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content
  </div>
</div>
```

---

## Modifiers

### Alignment

By default, the Flag Object vertically aligns its image and body to the middle.
This can be easily overridden using the modifiers below:

```html
<!-- 
  Note: `u-margin-bottom` is used purely for demo purposes and isn't required.
-->

<div class="o-flag o-flag--top u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content aligned to the top
  </div>
</div>

<div class="o-flag o-flag--bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content aligned to the bottom
  </div>
</div>
```

### Spacing

By default, the Flag Object adds a gutter to the value of our 
`$global-spacing-unit`. This can be increased, reduced or removed.

**Note**: When applied with `--reverse` the modified padding will remain, but
will be applied to the opposite side.

```html
<!-- 
  Note: `u-margin-bottom` is used purely for demo purposes and isn't required.
-->

<div class="o-flag o-flag--large u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content with larger spacing
  </div>
</div>

<div class="o-flag o-flag--small u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content with smaller spacing
  </div>
</div>

<div class="o-flag o-flag--tiny u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content with tiny spacing
  </div>
</div>

<div class="o-flag o-flag--flush u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content with no spacing
  </div>
</div>
```

### Order

You can even flip the order of the Flag Object completely, with the option to
make use of text-alignment classes from `sky-toolkit-core/utilities`.

```html
<!-- 
  Note: `u-margin-bottom` is used purely for demo purposes and isn't required.
-->

<div class="o-flag o-flag--reverse u-margin-bottom">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body">
    Some content reversed
  </div>
</div>

<div class="o-flag o-flag--reverse">
  <div class="o-flag__img">
    <img src="https://www.sky.com/assets/toolkit/docs/placeholder.png" width="40px" height="auto" alt=""/>
  </div>
  <div class="o-flag__body u-text-right">
    Some content reversed and right-aligned
  </div>
</div>
```
