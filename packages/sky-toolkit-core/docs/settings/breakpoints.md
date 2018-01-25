---
title: Breakpoints
introduction: |
  Breakpoint-specific settings for use in the entire project, including media
  queries, layout, typography and components.
source: sky-toolkit-core/settings/breakpoints
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sass-mq
---

# Breakpoints

Our global breakpoints are stored in the `$mq-breakpoints` map, and can be used
in media queries via the external [`sass-mq`](http://sass-mq.github.io/sass-mq/)
dependency (included by default). For usage guidelines, see
[`sass-mq`'s documentation](http://sass-mq.github.io/sass-mq/).

These breakpoints can be found across the entire Toolkit project, and are
often represented by `@breakpoint-name` in various utilities and components.

| Map               | Source                                                                    |
|-------------------|---------------------------------------------------------------------------|
| `$mq-breakpoints` | [sky-toolkit-core/settings/breakpoints](../../settings/_breakpoints.scss) |
