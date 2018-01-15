---
layout: page
title: THIS IS OLIVER
---

# {{ page.title }}

~test~


## Math

Math blocks ONLY work with `$$`, and not with `\[`, `$` or `\(`

Inline math: $$ n! = \sum_{i=1}^{n}{i} $$

Standard math:

$$ n! = \sum_{i=1}^{n}{i} $$


## Code blocks

NEEDS SYNTAX HIGHLIGHTING!

```python

def a(b):
	pass


```


## Footnotes

This is some text.[^1]. Other text.[^footnote].


[^1]: Some *crazy* footnote definition.

[^footnote]:
    > Blockquotes can be in a footnote.

        as well as code blocks

    or, naturally, simple paragraphs.

[^other-note]:       no code block here (spaces are stripped away)

[^codeblock-note]:
        this is now a code block (8 spaces indentation)
