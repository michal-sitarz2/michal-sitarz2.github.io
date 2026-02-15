---
layout: page
title: Image Segmentation with Diffusion Models
description: Investigated the use of Denoising Diffusion Probabilistic Models (DDPMs) for semantic segmentation by leveraging feature maps from trained generative models as inputs to pixel classifiers. Trained a functional DDPM from scratch capable of image reconstruction and generation, then systematically evaluated various architectural modifications introduced in recent deep learning research. Due to limited resources, we had to utilize a dataset with lower resolution images, and smaller model. Analyzed the impact of design choices on segmentation performance, providing insights into what architectural components contribute most effectively to DDPM-based segmentation tasks. For extensions, we focused on trying (i) ConvNext blocks, (ii) cosine noise scheduling, (iii) adaptive group normalization, (iv) ablating attention. The first two improved performance of our model (the first one more than the second), and the other two reduced the performance, measured by the FID score.
images:
  - path: assets/img/diffusion/architecture.png
  - path: assets/img/diffusion/results.png
importance: 3
# github: TBA
pdf: /assets/pdf/diffusion.pdf
tags: [Generative AI, Computer Vision, Segmentation, Deep Learning]
---