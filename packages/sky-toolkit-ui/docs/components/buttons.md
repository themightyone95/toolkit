---
title: Buttons
introduction: |
  A button is used to bring attention to key interactions on the page.

  Buttons should be labelled in a way that gives the user a clear and concise
  understanding of what will happen when they are pressed.

  Various types of button are available for different use cases.

  For cases that do not require a button you can use a Text Link.
source: sky-toolkit-ui/components/buttons
dependencies:
  - sky-toolkit-core
layout: component
---

# Buttons

## Modifiers

### Primary

The primary call to action button is used to highlight the main action on the
page you wish users to interact with.

This can be used over light or dark backgrounds.

```html
<a href="#" class="c-btn c-btn--primary u-margin-right">Link</a>
<button class="c-btn c-btn--primary">Button</button>
```

### Secondary

The secondary call to action button is used for all other actions that need more prominence than a simple text link yet are not the primary focus of the page.

```html
<a href="#" class="c-btn c-btn--secondary u-margin-right">Link</a>
<button class="c-btn c-btn--secondary">Button</button>
```

### Secondary (Invert)

We use this inverted secondary button when a button is placed over darker
backgrounds.

```html { "theme": "dark" }
<a href="#" class="c-btn c-btn--secondary-invert u-margin-right">Link</a>
<button class="c-btn c-btn--secondary-invert">Button</button>
```

### Full Width

In some use cases, it's convenient for a button to fill its container width.
This is achievable through two optional modifiers:

  * `.c-btn--full` stretches a button to full-width.
  * `.c-btn--full@small` stretches a button to full-width, but only at the small
    breakpoint.

```html
<button class="c-btn c-btn--primary c-btn--full u-margin-bottom">Full Width Button</button>
<button class="c-btn c-btn--primary c-btn--full@small">Full Width Button (Small)</button>
```

---

## States

### Disabled

Used when a page requires certain criteria to be met before the user can
continue their journey.

It can provide additional messaging to inform the user why they cannot proceed
further.

```html
<button class="c-btn c-btn--primary is-disabled">You need to complete 2 fields</button>
```

### Error

When a required user had been made incorrectly, a button adopts the error state
style.

```html
<button class="c-btn c-btn--primary is-error">Error button</button>
```

## Base

### Icon

An icon can be placed to the **left** of a button's text by using the
`.c-btn__icon` element class.

**Note:** To avoid spacing issues, there should be **no** empty space character
between the text and icon.

```html
<button class="c-btn c-btn--primary">
  <img class="c-btn__icon" src="https://www.sky.com/assets/toolkit/docs/buttons/example.svg" alt="Example Icon" />Icon Button
</button>
```

#### Icon Right

An icon can also be placed to the **right** of a button's text by using the
additional `.c-btn__icon--right` modifier class.

```html
<button class="c-btn c-btn--primary">
  Icon (Right) Button<img class="c-btn__icon c-btn__icon--right" src="https://www.sky.com/assets/toolkit/docs/buttons/example.svg" alt="Example Icon" />
</button>
```
