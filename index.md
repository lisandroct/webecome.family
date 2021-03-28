---
layout: landing
---
{% assign civil = site.data.events['civil'] %}
{% assign wedding = site.data.events['wedding'] %}
{% assign reception = site.data.events['reception'] %}

<img src="/assets/images/world.svg" class="world">
<div class="info">
	<h1>The Crespo Wedding is <span class="highlight">Hughes<span>Hughes</span></span>!</h1>
	<div>
		<h2>{{ civil.title }}</h2>
		<h3>{{ civil.date }}<br/>{{ civil.time }}</h3>
		<p>Attire: {{ civil.attire }}</p>
		<p>{{ civil.subtitle }}</p>
	</div>
	<div>
		<h2>{{ wedding.title }}</h2>
		<h3>{{ wedding.date }}<br/>{{ wedding.time }}</h3>
		<p>{{ wedding.location | newline_to_br }}</p>
		<p>Attire: {{ wedding.attire }}</p>
		<p>{{ wedding.subtitle }}</p>
	</div>
	<div>
		<h2>{{ reception.title }}</h2>
		<h3>{{ reception.date }}<br/>{{ reception.time }}</h3>
		<p>{{ reception.location }}</p>
		<p>Attire: {{ reception.attire }}</p>
		<p>{{ reception.subtitle }}</p>
	</div>
</div>