---
layout: default
---
{% capture page-name %}{{ page.name | remove:'.md' }}{% endcapture %}

<div class="grid pure-g">
    {% for item in site.data[page-name] %}
        {% assign local-item = item[page.lang] %}
        {% if local-item %}
            <div class="question pure-u-1 pure-u-md-1-2">
                <h1>{{ local-item.title }}</h1>
                {{ local-item.content | markdownify }}
            </div>
        {% endif %}
    {% endfor %}
</div>
