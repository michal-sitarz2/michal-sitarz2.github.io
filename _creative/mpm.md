---
layout: page
title: Material Point Method (Snow)
description: "OpenGL/GLSL implementation of the Material Point Method for physically accurate snow simulation, based on Stomakhin et al. (2013). Features a dual CPU/GPU solver architecture: the CPU reference implementation uses APIC velocity transfer, SVD-based elastoplastic deformation, and exponential hardening, while the GPU port runs the full solver pipeline as OpenGL compute shaders — P2G scatter with atomic operations, grid force/collision kernels, and G2P gather with on-GPU analytical SVD — achieving significant speedup over the CPU baseline."
img: assets/img/mpm/mpm_snowballs.gif
importance: 1
category: Computer Graphics
github: https://github.com/michal-sitarz2/MPM_Snow_Sim2D
---

<ul>
    <li><strong>Technologies:</strong> C++, OpenGL, GLSL, OpenGL Compute Shaders</li>
    <li><strong>Dates:</strong> 2024 - 2026</li>
    <li><strong>Links:</strong> <a href = "https://github.com/michal-sitarz2/MPM_Snow_Sim2D">(GitHub)</a></li>
</ul>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mpm/mpm_snowballs.gif" title="MPM_snowballs" class="img-fluid rounded z-depth-1 zoomable" %}
    </div>
</div>

