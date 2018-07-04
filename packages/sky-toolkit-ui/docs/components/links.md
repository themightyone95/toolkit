---
title: Links
introduction: |
  Links help our users to navigate across the Sky estate. They need to be
  recognisable and consistent to suggest clickability.

  Link styles are applied by default, with an extra class for links that take
  users to an external journey.

  These links can also be used as a 3rd tier call to action when placed in
  hierarchy to buttons.
source: sky-toolkit-ui/components/links
dependencies:
  - sky-toolkit-core
layout: component
---

# Links

## Base

The default `sky-toolkit-core` styling provides a minimal branded link with
`:hover` and `:focus` interactions.

```html
<a href="#">This is a default link</a>
```

`.c-link` Applies the branded link style to an alternative element such as a
`<button>`.

**Note:** you will need to apply this extra class if you plan to use the back
and external link styles on buttons.  

```html
<button class="c-link">This is a Button styled as a link</button>
```

### Label

For some use cases on smaller screens you may want to hide the Link's label
whilst keeping the icon visible.

```html
<button class="c-link c-link--close"><span class="c-link__label">Close</span></button>
```

---

## Modifiers

### Icons

#### Back

The `.c-link-back` class from `sky-toolkit-ui` utilises the same default
link styling, with an additional backward-facing chevron indicator.

```html
<a href="#" class="c-link c-link--back">This is a back link</a>
```

#### Close

The `.c-link--close` class from `sky-toolkit-ui` utilises the same default
link behaviour with its own colour and additional icon indicator.

```html
<a href="#" class="c-link c-link--close">Close</a>
```

#### External

The `.c-link-external` class from `sky-toolkit-ui` utilises the same default
link styling, with an additional chevron indicator.

```html
<a href="#" class="c-link c-link--external">This is an external link</a>
```

### Cosmetic

### Invert

We use this inverted close link when placed over darker backgrounds.

```html { "theme": "dark" }
<a href="#" class="c-link c-link--back c-link--invert">Back</a>
<br/>
<a href="#" class="c-link c-link--close c-link--invert">Close</a>
```
