---
title: Forms
introduction: |
  Forms are the standard way of receiving user inputted data, and therefore are
  an integral and crucial aspect of our interaction with customers.

  The Toolkit provides a range of accessible user input fields for different
  scenarios and data requirements.
source: sky-toolkit-ui/components/forms
dependencies:
  - sky-toolkit-core
layout: component
---

# Forms

## Base

### Form List

Our forms should utilise a fieldset, descriptive legend (visually hidden but
announced by screen readers) and a form list. `c-form-caption` will be required
in a future version of toolkit to ensure only the correct legends are hidden. 

Keeping the form inputs in a list allows us to style items more consistently,
utilise state classes more efficiently, and improve readability for users with
screen readers.

All form examples in Toolkit will be wrapped in a `c-form-list__item`, all of
which would live within the recommended structure:

```html
<form>
  <fieldset>
    <legend class="c-form-caption">Example</legend>
    <ul class="c-form-list">
      <li class="c-form-list__item">
        <label class="c-form-label" for="f-firstname">
          First name <abbr title="This field is required" class="c-form-required">*</abbr>
        </label>
        <input type="text" class="c-form-input" placeholder="e.g. Joe" name="f-firstname" id="f-firstname" required />
      </li>
      <li class="c-form-list__item">
        <!-- Input, label etc. -->
      </li>
      <!-- Other Form List Items -->
    </ul>
  </fieldset>
</form>
```

### Label

Labels represent a caption for form items, sitting above the input element/s. In
the markup, these can be wrapped around an input or placed above / below (as
long as the `for` attribute is correctly utilised to reference the input `id`).

Required items should use the additional `.c-form-required` abbreviation as well
as the `required` attribute on inputs.

```html
<label class="c-form-label u-width-1/1" for="f-firstname">
   First name
</label>

<label class="c-form-label u-width-1/1" for="f-firstname">
   First name <abbr title="This field is required" class="c-form-required">*</abbr>
</label>
```

### Text Input

Text inputs are useful for a variety of data formats, with `.c-form-input`
providing the base style. This style can be utilised on a range of other
[HTML5 data type attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/input)
such as `email` for automatic validation.

Our `.o-layout` class suite can also be used for more complex input systems such
as credit card inputs.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-label" for="f-firstname">
    First name <abbr title="This field is required" class="c-form-required">*</abbr>
  </label>
  <input type="text" class="c-form-input" placeholder="e.g. Joe" name="f-firstname" id="f-firstname" aria-describedby="f-firstname-smallprint" required />
  <p id="f-firstname-smallprint" class="c-text-smallprint" >This is smallprint explaining how this input field works and suggests what the user might enter into it.</p>
</li>

<li class="c-form-list__item">
  <label class="c-form-label" for="f-email">
    Email <abbr title="This field is required" class="c-form-required">*</abbr>
  </label>
  <input type="email" class="c-form-input" placeholder="e.g. joe@bloggs.com" name="f-email" id="f-email" required />
</li>

<li class="c-form-list__item">
  <label class="c-form-label" for="f-inline-a">
    Credit card number <abbr title="This field is required" class="c-form-required">*</abbr>
  </label>
  <div class="o-layout o-layout--narrow">
    <div class="o-layout__item u-width-1/4@medium">
      <input type="text" class="c-form-input c-form-inline__field" placeholder="1234" name="f-inline" id="f-inline-a" required />
    </div>
    <div class="o-layout__item u-width-1/4@medium">
      <input type="text" class="c-form-input c-form-inline__field" placeholder="5678" name="f-inline" id="f-inline-b" required />
    </div>
    <div class="o-layout__item u-width-1/4@medium">
      <input type="text" class="c-form-input c-form-inline__field" placeholder="9101" name="f-inline" id="f-inline-c" required />
    </div>
    <div class="o-layout__item u-width-1/4@medium">
      <input type="text" class="c-form-input c-form-inline__field" placeholder="2134" name="f-inline" id="f-inline-d" required />
    </div>
  </div>
</li>

<!-- Within .c-form-list -->
```

### Textarea

Textareas are used for multi-line plain-text, such as message details. All text
inputs should share the same appearance, so for textareas we use the same class
and add the additional `.c-form-input--long` modifier.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-label" for="f-message">
    Message
  </label>
  <textarea class="c-form-input c-form-input--long" placeholder="Enter a message" name="f-message" id="f-message"></textarea>
</li>

<!-- Within .c-form-list -->
```

### Combo Input

Combo form items are useful for micro-journeys within forms, providing a text
input and button with a complementing border-radius. The label and button should
provide a clear description of the action to avoid confusion with the overall
form submission.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-label" for="f-combo">
    Enter your postcode
  </label>
  <div class="c-form-combo">
    <div class="c-form-combo__cell">
      <input type="text" class="c-form-combo__input c-form-input" placeholder="e.g. LS10 1QG" name="f-combo" id="f-combo" />
    </div>
    <div class="c-form-combo__cell">
      <button class="c-form-combo__btn c-btn c-btn--primary">Find address</button>
    </div>
  </div>
</li>

<!-- Within .c-form-list -->
```

### Select Input

The `.c-form-select` form element presents the user with a menu of options to
choose from; using custom styles and native technologies to display options in
an accessible and user-friendly manner.

The top option should clearly define the group and be set to `selected` and
disabled.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-label" for="f-heroes">
    Select a hero
  </label>
  <div class="c-form-select">
    <select id="f-heroes" class="c-form-select__dropdown">
      <option value="" disabled selected>Heroes</option>
      <option value="captainAmerica">Captain America</option>
      <option value="ironMan">Iron Man</option>
      <option value="blackWidow">Black Widow</option>
      <option value="thor">Thor</option>
    </select>
  </div>
</li>

<!-- Within .c-form-list -->
```

### Date Input

The date element presents the user with a text input and date picker to enter a
valid date entry; this uses minimal custom styles and makes use of native
technologies to display a date picker in an accessible and user-friendly manner.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-label" for="f-date">
    Date of birth
  </label>
  <input type="date" class="c-form-date" placeholder="dd/mm/yyyy" name="f-date" id="f-date" />
</li>

<!-- Within .c-form-list -->
```

### Checkbox

For situations where users can select one or two options from a set of items, we
use `.c-form-checkbox` to generate custom branded checkboxes.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <label class="c-form-checkbox">
    <input type="checkbox" class="c-form-checkbox__input" id="f-terms" />
    <span class="c-form-checkbox__caption">I agree to the terms &amp; conditions</span>
  </label>
</li>

<!-- Within .c-form-list -->
```

### Radio Buttons

For situations where can only select one option from a set of items, we use the
`.c-form-checkbox--radio` to generate custom branded radio buttons.

As radio buttons and checkboxes share common styles we utilise a modifier rather
than an entire new element.

`c-form-label--group` should be added to ensure display of a group legend

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item">
  <fieldset>
    <legend class="c-form-label c-form-label--group">Which side?</legend>
    <label class="c-form-checkbox c-form-checkbox--radio u-margin-bottom-small">
      <input type="radio" class="c-form-checkbox__input" name="f-side" id="f-side_1" value="good">
      <span class="c-form-checkbox__caption">Good</span>
    </label>
    <label class="c-form-checkbox c-form-checkbox--radio">
      <input type="radio" class="c-form-checkbox__input" name="f-side" id="f-side_2" value="evil">
      <span class="c-form-checkbox__caption">Evil</span>
    </label>
  </fieldset>
</li>

<!-- Within .c-form-list -->
```

---

## Modifiers

### Full Width

By default, `.c-form-list__item`s keep to a consistent max-width. This can be
overridden with a modifier.

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item c-form-list__item--full">
  <label class="c-form-label" for="f-firstname">
    First name
  </label>
  <input type="text" class="c-form-input" placeholder="e.g. Joe" name="f-firstname" id="f-firstname" aria-describedby="f-firstname-smallprint" />
</li>

<!-- Within .c-form-list -->
```

### Inline

By default, `.c-form-checkbox`es are displayed as stacked items. We can use this
modifier to display them inline.

```html
<li class="c-form-list__item">
  <fieldset>
    <legend class="c-form-label c-form-label--group">Which side?</legend>
    <label class="c-form-checkbox c-form-checkbox--radio c-form-checkbox--inline">
      <input type="radio" class="c-form-checkbox__input" name="f-side_inline" id="f-side_inline_1" value="good">
      <span class="c-form-checkbox__caption">Good</span>
    </label>
    <label class="c-form-checkbox c-form-checkbox--radio c-form-checkbox--inline">
      <input type="radio" class="c-form-checkbox__input" name="f-side_inline" id="f-side_inline_2" value="evil">
      <span class="c-form-checkbox__caption">Evil</span>
    </label>
  </fieldset>
</li>
```

---

## States

### Error

Errors are handled by adding the error state class to the field's parent –
usually the `.c-form-list__item`. This will apply error styles to all contents
(labels, inputs and smallprint).

```html
<!-- Within .c-form-list -->

<li class="c-form-list__item is-error">
  <label class="c-form-label" for="f-firstname">
    First name <abbr title="This field is required" class="c-form-required">*</abbr>
  </label>
  <input type="text" class="c-form-input" placeholder="e.g. Joe" name="f-firstname" id="f-firstname" aria-describedby="f-firstname-smallprint" required />
</li>

<!-- Within .c-form-list -->
```
