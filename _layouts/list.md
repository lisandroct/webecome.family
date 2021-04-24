---
layout: default
---
{% capture page-name %}{{ page.name | remove:'.md' }}{% endcapture %}

<div class="grid pure-g">
    {% for item in site.data[page-name] %}
    <div class="question pure-u-1 pure-u-md-1-2">
        <h1>{{ item.title }}</h1>
        <p>{{ item.content | markdownify }}</p>
    </div>
    {% endfor %}
</div>
