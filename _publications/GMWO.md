---
layout: page
title: Genetically Modified Wolf Optimization with Stochastic Gradient Descent for Optimising Deep Neural Networks
images:
  - path: assets/img/publications/project_gwo.jpg
importance: 1
year: 2023
description: "<strong>Authors:</strong> Manuel Bradicic, Michał Sitarz, Felix Sylvest Olesen"

abstract: true
arxiv: https://arxiv.org/abs/2301.08950
pdf: assets/pdf/gmw_paper.pdf

tags: [Optimization, Deep Learning]
---

<strong>Abstract:</strong> When training Convolutional Neural Networks (CNNs) there is a large emphasis on creating efficient optimization algorithms and highly accurate networks. The state-of-the-art method of optimizing the networks is done by using gradient descent algorithms, such as Stochastic Gradient Descent (SGD). However, there are some limitations presented when using gradient descent methods. The major drawback is the lack of exploration, and over-reliance on exploitation. Hence, this research aims to analyze an alternative approach to optimizing neural network (NN) weights, with the use of population-based metaheuristic algorithms. A hybrid between Grey Wolf Optimizer (GWO) and Genetic Algorithms (GA) is explored, in conjunction with SGD; producing a Genetically Modified Wolf optimization algorithm boosted with SGD (GMW-SGD). This algorithm allows for a combination between exploitation and exploration, whilst also tackling the issue of high-dimensionality, affecting the performance of standard metaheuristic algorithms. The proposed algorithm was trained and tested on CIFAR-10 where it performs comparably to the SGD algorithm, reaching high test accuracy, and significantly outperforms standard metaheuristic algorithms.