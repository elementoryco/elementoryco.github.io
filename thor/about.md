---
layout: about
title: About Thor

list:
- Ins
- Ins2
- L
- A
---

Test description about Thor
# {{ page.list[2].name2 }}
**b**
{%- for name in page.list -%}
{{ name }}
{%- endfor -%}
