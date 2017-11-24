{%- if include.author -%}
	{%- assign author_slug = include.author -%}
{%- else -%}
	{%- assign author_slug = page.author -%}
{%- endif -%}

{%- if author_slug.slug -%}
	{%- assign author_slug = author_slug.slug -%}
{%- endif -%}

{%- assign author = site.data.authors | where_exp:"author", "author_slug == author.slug" | first -%}
