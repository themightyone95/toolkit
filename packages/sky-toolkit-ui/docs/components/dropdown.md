---
title: Dropdown
introduction: |
  Dropdown Menus provide a list of options or actions, with one choice per line,
  that affect the navigation or the current view.

  The toggle label should provide appropriate context to reflect the contents of
  the menu, with each menu item clearly and concisely describing its action.

  **Note**: Dropdown Menus **should not** be used in Forms, instead use `.c-form-select`.
source: sky-toolkit-ui/components/dropdown
dependencies:
  - sky-toolkit-core
layout: component
---

# Dropdown

## Base

This is the Dropdown Menu component in its basic default form.

In this scenario, a `<button>` is used to trigger a script for toggling the
`.is-open` state to display and hide menu items.

`aria-expanded="false"` should also be toggled to `true` when open to ensure
full accessibility.

Menu items are stored as a list of links.

```html
<div class="c-dropdown">
  <button id="dropdown1"
          class="c-dropdown__toggle"
          aria-haspopup="true"
          aria-expanded="false">
    Dropdown Menu
  </button>
  <ul class="c-dropdown__list"
      aria-labelledby="dropdown1">
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 1</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 2</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 3</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 4</a>
    </li>
  </ul>
</div>
```

---

## Modifiers

### Full Width

For dropdowns that need to display full-width.

```html
<div class="c-dropdown c-dropdown--full">
  <button id="dropdown1"
          class="c-dropdown__toggle"
          aria-haspopup="true"
          aria-expanded="false">
    Dropdown Menu
  </button>
  <ul class="c-dropdown__list"
      aria-labelledby="dropdown1">
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 1</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 2</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 3</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 4</a>
    </li>
  </ul>
</div>
```

### Full Width (Small Only)

For dropdowns that need to display full-width on **small devices only**.

```html
<div class="c-dropdown c-dropdown--full@small-only">
  <button id="dropdown1"
          class="c-dropdown__toggle"
          aria-haspopup="true"
          aria-expanded="false">
    Dropdown Menu
  </button>
  <ul class="c-dropdown__list"
      aria-labelledby="dropdown1">
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 1</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 2</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 3</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 4</a>
    </li>
  </ul>
</div>
```

---

## States

### Open

Toggling `.is-open` on allows us to hide/show menu items within the dropdown.

```html
<div class="c-dropdown is-open">
  <button id="dropdown1"
          class="c-dropdown__toggle"
          aria-haspopup="true"
          aria-expanded="true">
    Dropdown Menu
  </button>
  <ul class="c-dropdown__list"
      aria-labelledby="dropdown1">
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 1</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 2</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 3</a>
    </li>
    <li class="c-dropdown__item">
      <a href="#" class="c-dropdown__link">Menu item 4</a>
    </li>
  </ul>
</div>
```
