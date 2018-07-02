---
title: Tables
introduction: |
  Tables are used to present tabular information. HTML table tags must be used
  in order to present information as a table.

  The default Toolkit table object is borderless, with a component to produce
  dividers and additional spacing.
source: sky-toolkit-ui/components/tables
dependencies:
  - sky-toolkit-core
layout: component
---

# Tables

## Base

### Borderless

A borderless table has no dividing lines between rows. It is more compact than
the simple table and therefore less suitable for large quantities of complex
data.

```html
<table class="o-table-borderless">
  <tr>
    <td>Content goes here</td>
    <td>More content can go here</td>
  </tr>
  <tr>
    <td>Content goes here</td>
    <td>More content can go here</td>
  </tr>
  <tr>
    <td>Content goes here</td>
    <td>More content can go here</td>
  </tr>
  <tr>
    <td>Content goes here</td>
    <td>More content can go here</td>
  </tr>
</table>
```

### Simple

The simple table offers easy to read data with a horizontal divider between rows
at the expense of ocupying more space.

```html
<table class="c-table-simple">
  <tr class="c-table-simple__row">
    <td class="c-table-simple__cell">Content goes here</td>
    <td class="c-table-simple__cell  u-text-right">More content can go here</td>
  </tr>
  <tr class="c-table-simple__row">
    <td class="c-table-simple__cell">Content goes here</td>
    <td class="c-table-simple__cell  u-text-right">More content can go here</td>
  </tr>
  <tr class="c-table-simple__row">
    <td class="c-table-simple__cell">Content goes here</td>
    <td class="c-table-simple__cell  u-text-right">More content can go here</td>
  </tr>
  <tr class="c-table-simple__row">
    <td class="c-table-simple__cell">Content goes here</td>
    <td class="c-table-simple__cell  u-text-right">More content can go here</td>
  </tr>
</table>
```
