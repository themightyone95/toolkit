---
title: IE9
introduction: |
  A collection of hacks and overrides to ensure browser support for IE9+.
source: sky-toolkit-core/utilities/ie9
dependencies:
  - sky-toolkit-core
layout: component
---

# IE9

To ensure all of our 
[`sky-toolkit-ui/components`](../../../sky-toolkit-ui/components/) are usable on
IE9+, we unfortunately need to implement various crude overrides. 

All of these fixes live within the `.ie9` class, which can be implemented with
the following set-up at the top of your `index.html` / default container view:

```html { "render": false }
<!DOCTYPE html>
<!--[if IE 9 ]>               <html lang="en-GB" class="ie9"> <![endif]-->
<!--[if gt IE 9 | !IE ]><!--> <html lang="en-GB"> <!--<![endif]-->
<head>
  ...
```
