---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 4
horizontal: false
---

<div class="projects">

{% assign projects_by_year = site.projects | group_by: "year" | sort: "name" | reverse %}

{% for year_group in projects_by_year %}
  <h2 class="category">{{ year_group.name }}</h2>
  
  {% assign sorted_projects = year_group.items | sort: "importance" %}
  
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
          
          {% if project.tags %}
          <div class="project-tags">
            {% for tag in project.tags %}
              <span class="badge badge-pill">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
          
          {% if project.description %}
          <div class="project-description">
            {{ project.description }}
          </div>
          {% endif %}
          
          <!-- Button-style links -->
          {% if project.pdf or project.arxiv or project.github or project.demo or project.website or project.links %}
          <div class="project-links-buttons">
            {% if project.pdf %}
            <a href="{{ project.pdf | relative_url }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
              <i class="fas fa-file-pdf"></i> PDF
            </a>
            {% endif %}
            
            {% if project.arxiv %}
            <a href="{{ project.arxiv }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
              <i class="ai ai-arxiv"></i> arXiv
            </a>
            {% endif %}
            
            {% if project.abstract %}
            <a href="{{ project.url | relative_url }}" class="btn btn-sm btn-outline-primary" role="button">
              <i class="fas fa-align-left"></i> Abstract
            </a>
            {% endif %}
            
            {% if project.github %}
            <a href="{{ project.github }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
              <i class="fab fa-github"></i> Code
            </a>
            {% endif %}
            
            {% if project.demo %}
            <a href="{{ project.demo }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
              <i class="fas fa-play-circle"></i> Demo
            </a>
            {% endif %}
            
            {% if project.website %}
            <a href="{{ project.website }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
              <i class="fas fa-globe"></i> Website
            </a>
            {% endif %}
            
            {% if project.links %}
              {% for link in project.links %}
              <a href="{{ link.url }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
                <i class="fas fa-link"></i> {{ link.name }}
              </a>
              {% endfor %}
            {% endif %}
          </div>
          {% endif %}
        </div>
      </div>
      
      {% else %}
      <!-- Standard layout: title, authors, tags, description, then images below -->
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
      
      {% if project.tags %}
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="badge badge-pill">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      {% if project.description %}
      <div class="project-description">
        {{ project.description }}
      </div>
      {% endif %}
      
      <!-- Button-style links -->
      {% if project.pdf or project.arxiv or project.github or project.demo or project.website or project.links %}
      <div class="project-links-buttons">
        {% if project.pdf %}
        <a href="{{ project.pdf | relative_url }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
          <i class="fas fa-file-pdf"></i> PDF
        </a>
        {% endif %}
        
        {% if project.arxiv %}
        <a href="{{ project.arxiv }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
          <i class="ai ai-arxiv"></i> arXiv
        </a>
        {% endif %}
        
        {% if project.abstract %}
        <a href="{{ project.url | relative_url }}" class="btn btn-sm btn-outline-primary" role="button">
          <i class="fas fa-align-left"></i> Abstract
        </a>
        {% endif %}
        
        {% if project.github %}
        <a href="{{ project.github }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
          <i class="fab fa-github"></i> Code
        </a>
        {% endif %}
        
        {% if project.demo %}
        <a href="{{ project.demo }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
          <i class="fas fa-play-circle"></i> Demo
        </a>
        {% endif %}
        
        {% if project.website %}
        <a href="{{ project.website }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
          <i class="fas fa-globe"></i> Website
        </a>
        {% endif %}
        
        {% if project.links %}
          {% for link in project.links %}
          <a href="{{ link.url }}" class="btn btn-sm btn-outline-primary" role="button" target="_blank">
            <i class="fas fa-link"></i> {{ link.name }}
          </a>
          {% endfor %}
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

</div>