---
layout: page
title: 3D Gaussian Splatting with Material Point Method (Work in Progress)
description: "End-to-end replication of PhysGaussian (Xie et al., 2024): 3D Gaussian Splatting (3DGS) reconstruction coupled with Material Point Method (MPM) simulation for physics-based deformation of trained scenes. Built a custom 3DGS trainer (PyTorch + MCMC densification), ported my old C++ MLS-MPM solver to NVIDIA Warp with internal filling for solid-volume particle generation, and bridged Gaussians to MPM via coordinate transforms. Demonstrated elastic deformation of a LEGO bulldozer falling under gravity and impacting a floor. (GitHub: TBA. Work in Progress: Fixing artifacts under deformation)"
images:
  - path: assets/img/mpm/lego_sim.gif
  - path: assets/img/mpm/lego_gsplat.png
zoomable: false
year: 2026
importance: 1
# github: TBA
tags: [Computer Vision, Graphics, Simulation, 3D, Machine Learning, GPU]
---