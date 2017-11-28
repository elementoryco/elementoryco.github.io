---
layout: about
title: About Thor
permalink: /:collection/:slug/

links:
-
  name: Email
  url: mailto:thor.ag.winther@gmail.com
  image: /assets/images/lettericon.png
-
  name: Instragram
  url: http://www.instagram.com/thor.ag.winther/
  image: /assets/images/ig_logo.png

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
