---
layout: page
title: Projects
permalink: /projects/
# description: A growing collection of your cool projects.
nav: true
nav_order: 2
# display_categories: [work, fun]
horizontal: false
---

<div class="projects">
{% if page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  
  {% for project in sorted_projects %}
  <div class="project-container">
    <div class="project-entry">
      
      {% if project.images and project.images.size == 1 or project.img %}
      <!-- Two-column layout: image on left, content on right -->
      <div class="row">
        <div class="col-md-4">
          {% if project.images %}
            <img src="{{ project.images[0].path | relative_url }}" 
                 alt="{{ project.title }}" 
                 class="img-fluid rounded z-depth-1 zoomable">
          {% elsif project.img %}
            <img src="{{ project.img | relative_url }}" 
                 alt="{{ project.title }}" 
                 class="img-fluid rounded z-depth-1 zoomable">
          {% endif %}
        </div>
        
        <div class="col-md-8">
          
          {% if project.tags %}
          <div class="project-tags">
            {% for tag in project.tags %}
              <span class="badge badge-pill">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}

          <h3 class="project-title">{{ project.title }}</h3>
          
          {% if project.authors %}
          <div class="project-authors">
            {% for author in project.authors %}
              {% if author.url %}
                <a href="{{ author.url }}" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>
              {% else %}
                <span>{{ author.name }}</span>
              {% endif %}
              {% if author.affiliation %}
                <span class="author-affiliation">({{ author.affiliation }})</span>
              {% endif %}
              {% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </div>
          {% endif %}
          
          {% if project.description %}
          <div class="project-description">
            {{ project.description }}
          </div>
          {% endif %}
          
          {% if project.links %}
          <div class="project-links">
            <strong>Links:</strong>
            {% for link in project.links %}
              <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                ({{ link.name }})
              </a>
            {% endfor %}
          </div>
          {% elsif project.github or project.demo or project.arxiv or project.pdf %}
          <div class="project-links">
            <strong>Links:</strong>
            {% if project.arxiv %}
              <a href="{{ project.arxiv }}" target="_blank" rel="noopener noreferrer">(ArXiv)</a>
            {% endif %}
            {% if project.pdf %}
              <a href="{{ project.pdf | relative_url }}" target="_blank" rel="noopener noreferrer">(PDF)</a>
            {% endif %}
            {% if project.github %}
              <a href="{{ project.github }}" target="_blank" rel="noopener noreferrer">(GitHub)</a>
            {% endif %}
            {% if project.demo %}
              <a href="{{ project.demo }}" target="_blank" rel="noopener noreferrer">(Demo)</a>
            {% endif %}
          </div>
          {% endif %}
        </div>
      </div>
      
      {% else %}
      <!-- Standard layout: title, authors, tags, description, then images below -->
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="badge badge-pill">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <h3 class="project-title">{{ project.title }}</h3>
      
      {% if project.authors %}
      <div class="project-authors">
        {% for author in project.authors %}
          {% if author.url %}
            <a href="{{ author.url }}" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>
          {% else %}
            <span>{{ author.name }}</span>
          {% endif %}
          {% if author.affiliation %}
            <span class="author-affiliation">({{ author.affiliation }})</span>
          {% endif %}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
      {% endif %}
      
      {% if project.description %}
      <div class="project-description">
        {{ project.description }}
      </div>
      {% endif %}
      
      {% if project.links %}
      <div class="project-links mb-3">
        <strong>Links:</strong>
        {% for link in project.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
            ({{ link.name }})
          </a>
        {% endfor %}
      </div>
      {% elsif project.github or project.demo or project.arxiv or project.pdf %}
      <div class="project-links mb-3">
        <strong>Links:</strong>
        {% if project.arxiv %}
          <a href="{{ project.arxiv }}" target="_blank" rel="noopener noreferrer">(ArXiv)</a>
        {% endif %}
        {% if project.pdf %}
          <a href="{{ project.pdf | relative_url }}" target="_blank" rel="noopener noreferrer">(PDF)</a>
        {% endif %}
        {% if project.github %}
          <a href="{{ project.github }}" target="_blank" rel="noopener noreferrer">(GitHub)</a>
        {% endif %}
        {% if project.demo %}
          <a href="{{ project.demo }}" target="_blank" rel="noopener noreferrer">(Demo)</a>
        {% endif %}
      </div>
      {% endif %}
      
      {% if project.images and project.images.size > 1 %}
      <div class="row project-images">
        {% for image in project.images %}
        <div class="col-sm-{% if project.images.size == 2 %}6{% else %}4{% endif %} mt-3">
          <img src="{{ image.path | relative_url }}" 
               alt="{{ project.title }}" 
               class="img-fluid rounded z-depth-1 zoomable">
        </div>
        {% endfor %}
      </div>
      {% endif %}
      
      {% endif %}
    </div>
  </div>
  {% endfor %}
  {% endfor %}

{% else %}
  <!-- Display all projects without categories -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  
  {% for project in sorted_projects %}
  <div class="project-container">
    <div class="project-entry">
      
      {% if project.images and project.images.size == 1 or project.img %}
      <!-- Two-column layout -->
      <div class="row">
        <div class="col-md-4">
          {% if project.images %}
            <img src="{{ project.images[0].path | relative_url }}" 
                 alt="{{ project.title }}" 
                 class="img-fluid rounded z-depth-1 zoomable">
          {% elsif project.img %}
            <img src="{{ project.img | relative_url }}" 
                 alt="{{ project.title }}" 
                 class="img-fluid rounded z-depth-1 zoomable">
          {% endif %}
        </div>
        
        <div class="col-md-8">
          {% if project.tags %}
            <div class="project-tags">
              {% for tag in project.tags %}
                <span class="badge badge-pill">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <h3 class="project-title">{{ project.title }}</h3>
          
          {% if project.authors %}
          <div class="project-authors">
            {% for author in project.authors %}
              {% if author.url %}
                <a href="{{ author.url }}" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>
              {% else %}
                <span>{{ author.name }}</span>
              {% endif %}
              {% if author.affiliation %}
                <span class="author-affiliation">({{ author.affiliation }})</span>
              {% endif %}
              {% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </div>
          {% endif %}
          
          {% if project.description %}
          <div class="project-description">
            {{ project.description }}
          </div>
          {% endif %}
          
          {% if project.links %}
          <div class="project-links">
            <strong>Links:</strong>
            {% for link in project.links %}
              <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
                ({{ link.name }})
              </a>
            {% endfor %}
          </div>
          {% elsif project.github or project.demo or project.arxiv or project.pdf %}
          <div class="project-links">
            <strong>Links:</strong>
            {% if project.arxiv %}
              <a href="{{ project.arxiv }}" target="_blank">(ArXiv)</a>
            {% endif %}
            {% if project.pdf %}
              <a href="{{ project.pdf | relative_url }}" target="_blank">(PDF)</a>
            {% endif %}
            {% if project.github %}
              <a href="{{ project.github }}" target="_blank">(GitHub)</a>
            {% endif %}
            {% if project.demo %}
              <a href="{{ project.demo }}" target="_blank">(Demo)</a>
            {% endif %}
          </div>
          {% endif %}
        </div>
      </div>
      
      {% else %}
      <!-- Standard layout -->
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="badge badge-pill">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <h3 class="project-title">{{ project.title }}</h3>
      
      {% if project.authors %}
      <div class="project-authors">
        {% for author in project.authors %}
          {% if author.url %}
            <a href="{{ author.url }}" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>
          {% else %}
            <span>{{ author.name }}</span>
          {% endif %}
          {% if author.affiliation %}
            <span class="author-affiliation">({{ author.affiliation }})</span>
          {% endif %}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
      {% endif %}
      
      {% if project.description %}
      <div class="project-description">
        {{ project.description }}
      </div>
      {% endif %}
      
      {% if project.links %}
      <div class="project-links mb-3">
        <strong>Links:</strong>
        {% for link in project.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
            ({{ link.name }})
          </a>
        {% endfor %}
      </div>
      {% elsif project.github or project.demo or project.arxiv or project.pdf %}
      <div class="project-links mb-3">
        <strong>Links:</strong>
        {% if project.arxiv %}
          <a href="{{ project.arxiv }}" target="_blank">(ArXiv)</a>
        {% endif %}
        {% if project.pdf %}
          <a href="{{ project.pdf | relative_url }}" target="_blank">(PDF)</a>
        {% endif %}
        {% if project.github %}
          <a href="{{ project.github }}" target="_blank">(GitHub)</a>
        {% endif %}
        {% if project.demo %}
          <a href="{{ project.demo }}" target="_blank">(Demo)</a>
        {% endif %}
      </div>
      {% endif %}
      
      {% if project.images and project.images.size > 1 %}
      <div class="row project-images">
        {% for image in project.images %}
        <div class="col-sm-{% if project.images.size == 2 %}6{% else %}4{% endif %} mt-3">
          <img src="{{ image.path | relative_url }}" 
               alt="{{ project.title }}" 
               class="img-fluid rounded z-depth-1 zoomable">
        </div>
        {% endfor %}
      </div>
      {% endif %}
      
      {% endif %}
    </div>
  </div>
  {% endfor %}
{% endif %}
</div>