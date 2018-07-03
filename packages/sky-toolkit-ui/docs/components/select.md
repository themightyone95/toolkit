---
title: Select
introduction: |
  The select component can be used as a button with an on/off state toggled
  through user interaction, primarily a click event.

  The state of the button provides visual feedback relating to whether the
  button is selected or not.
source: sky-toolkit-ui/components/select
dependencies:
  - sky-toolkit-core
  - sky-toolkit-ui/components/buttons
layout: component
---

# Select

## Base

### Checkbox

Hovering or clicking the select component displays a selected indicator. 
Clicking the select component will result in the checkbox input's state changing
to checked. Clicking the select component again will result in the checkbox
input's state becoming unchecked, hiding the selected indicator.

```html
<label class="c-select">
  <input type="checkbox" class="c-select__input">
  <span class="c-btn c-btn--select c-select__btn">Select</span>
</label>
```

### Radio

Clicking the select component will still result in the radio input's state 
changing to checked. However, clicking another select component will result in
the radio input's checked state being switched.

```html
<label class="c-select u-margin-right">
  <input type="radio" class="c-select__input" name="radio-group-1">
  <span class="c-btn c-btn--select c-select__btn">Select A</span>
</label>
<label class="c-select">
  <input type="radio" class="c-select__input" name="radio-group-1">
  <span class="c-btn c-btn--select c-select__btn">Select B</span>
</label>
```

---

## States

### Disabled

By adding `.is-disabled` to `.c-select__btn`, the hoverstate is not applied and `c-btn.is-disabled` styling is applied.

```html
<label class="c-select">
  <input type="checkbox" disabled class="c-select__input">
  <span class="c-btn c-btn--select c-select__btn is-disabled">Disabled</span>
</label>
```

### Selected

By adding `.is-selected` to `.c-select__input`, the tick icon becomes a cross icon.
This state is used when interaction with the select component signifies
cancellation of an option, where the default unchecked state of the checkbox
input represents a selected option.

```html
<label class="c-select">
  <input type="checkbox" class="c-select__input is-selected">
  <span class="c-btn c-btn--select c-select__btn">Selected</span>
</label>
```
