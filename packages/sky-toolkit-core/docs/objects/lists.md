---
title: Lists
introduction: |
  Objects to enhance the use of Lists.
source: sky-toolkit-core/objects/lists
dependencies:
  - sky-toolkit-core
layout: component
---

# Lists

Lists are an incredibly versatile markup tool. To make life easier, Toolkit
surfaces 3 different list objects for use on unordered lists `<ul>` or
ordered lists `<ol>`:

## List Bare

Remove indents and bullet points from any list.

```html
<ul class="o-list-bare">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

---

## List Block

Display any list of items as a collection of stacked blocks.

```html
<ul class="o-list-block">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

---

## List Inline

Display any list of items as a single line.

```html
<ul class="o-list-inline">
  <li class="o-list-inline__item">Item 1</li>
  <li class="o-list-inline__item">Item 2</li>
  <li class="o-list-inline__item">Item 3</li>
</ul>
```

### Modifiers

#### Narrow

Reduce the inline spacing by half.

```html
<ul class="o-list-inline o-list-inline--narrow">
  <li class="o-list-inline__item">Item 1</li>
  <li class="o-list-inline__item">Item 2</li>
  <li class="o-list-inline__item">Item 3</li>
</ul>
```

#### Wide

Double the inline spacing.

```html
<ul class="o-list-inline o-list-inline--wide">
  <li class="o-list-inline__item">Item 1</li>
  <li class="o-list-inline__item">Item 2</li>
  <li class="o-list-inline__item">Item 3</li>
</ul>
```

#### Flush

Remove all inline spacing.

```html
<ul class="o-list-inline o-list-inline--flush">
  <li class="o-list-inline__item">Item 1</li>
  <li class="o-list-inline__item">Item 2</li>
  <li class="o-list-inline__item">Item 3</li>
</ul>
```
