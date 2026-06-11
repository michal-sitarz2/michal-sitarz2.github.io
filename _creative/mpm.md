---
layout: page
title: Material Point Method (Snow)
description: "OpenGL implementation of the Material Point Method for physically accurate snow simulation in 2D and 3D. Built a dual CPU/GPU solver architecture, then refactored the physics from Stomakhin et al. (2013) to MLS-MPM (Hu et al., 2018) for improved performance and simplicity. Extended the full pipeline to 3D with GPU compute shaders, real-time rendering with perspective camera, and physically-based elastoplastic deformation including fracture and collision."
img: assets/img/mpm/mpm_snowballs.gif
importance: 1
category: Computer Graphics
github: https://github.com/michal-sitarz2/MPM_Snow_Sim
---

<ul>
    <li><strong>Technologies:</strong> C++, OpenGL, GLSL, OpenGL Compute Shaders</li>
    <li><strong>Dates:</strong> 2024 - 2026</li>
    <li><strong>Links:</strong> <a href = "https://github.com/michal-sitarz2/MPM_Snow_Sim">(GitHub)</a></li>
</ul>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mpm/mpm_snowballs.gif" title="MPM_snowballs" class="img-fluid rounded z-depth-1 zoomable" %}
    </div>
</div>

