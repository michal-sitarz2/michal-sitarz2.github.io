---
layout: page
title: Material Point Method (Snow)
description: "OpenGL/GLSL implementation of the Material Point Method for physically accurate snow simulation, based on Stomakhin et al. (2013). Features a dual CPU/GPU solver architecture: the CPU reference implementation uses APIC velocity transfer, SVD-based elastoplastic deformation, and exponential hardening, while the GPU port runs the full solver pipeline as OpenGL compute shaders — P2G scatter with atomic operations, grid force/collision kernels, and G2P gather with on-GPU analytical SVD — achieving significant speedup over the CPU baseline."
images:
  - path: assets/img/mpm/mpm_snowballs.gif
zoomable: false
year: 2024
importance: 3
github: https://github.com/michal-sitarz2/MPM_Snow_Sim2D
tags: [Computer Graphics, Simulation, GPU]
---