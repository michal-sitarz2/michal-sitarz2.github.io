// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-3d-amp-media",
          title: "3D &amp; Media",
          description: "Collection of experiments in 3D graphics, game development, and interactive art.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/creative/";
          },
        },{id: "creative-liar-39-s-dice",
          title: 'Liar&amp;#39;s Dice',
          description: "Multiplayer implementation of Liar’s Dice game in Unreal Engine 5, implementing core game logic, turn-based mechanics, user interface and networked player interactions.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/dice/";
            },},{id: "creative-dragon-sculpture",
          title: 'Dragon Sculpture',
          description: "A highly detailed dragon sculpture with intricate scale work and anatomical accuracy, showcasing advanced sculpting techniques at high polygon count.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/dragon/";
            },},{id: "creative-hospital-animation",
          title: 'Hospital Animation',
          description: "A fully realized hospital interior environment, featuring detailed modeling of the corridor, complete with textures, realistic lighting setups, and a short horroresque animation.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/hospital/";
            },},{id: "creative-juggernaut-robot-model",
          title: 'Juggernaut Robot Model',
          description: "A detailed 3D recreation of the Juggernaut robot from the Eighty-Six anime series.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/juggernaut/";
            },},{id: "creative-kinetic-rush-animation",
          title: 'Kinetic Rush Animation',
          description: "A cinematic animation created for Kinetic Rush Challenge. Features custom environments, character animation, dynamic lighting, and visual storytelling.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/kinetic_rush/";
            },},{id: "creative-mistwood-forest-fantasy-environment",
          title: 'Mistwood Forest - Fantasy Environment',
          description: "Complete forest environment with atmospheric mist. Cloaked character with fabric textures and a dramatic dragon silhouette integration for scale and narrative impact.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/mistwood/";
            },},{id: "creative-material-point-method-snow",
          title: 'Material Point Method (Snow)',
          description: "OpenGL/GLSL implementation of the Material Point Method for physically accurate snow simulation, based on Stomakhin et al. (2013). Features a dual CPU/GPU solver architecture: the CPU reference implementation uses APIC velocity transfer, SVD-based elastoplastic deformation, and exponential hardening, while the GPU port runs the full solver pipeline as OpenGL compute shaders — P2G scatter with atomic operations, grid force/collision kernels, and G2P gather with on-GPU analytical SVD — achieving significant speedup over the CPU baseline.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/mpm/";
            },},{id: "creative-rasterization-amp-raytracing",
          title: 'Rasterization &amp;amp; Raytracing',
          description: "A physically-based ray tracing renderer that simulates light paths through a 3D scene and a polygon-based 3D rasterization renderer that projects geometric primitives onto the screen.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/raytrace_rasterizer/";
            },},{id: "projects-towards-adaptive-reinforcement-learning-for-network-aware-robotics-via-quantization-techniques-msc-thesis",
          title: 'Towards Adaptive Reinforcement Learning for Network-Aware Robotics via Quantization Techniques (MSc Thesis)',
          description: "Developed an adaptive Reinforcement Learning method for optimal robot control under wireless network constraints. Implemented and tested state aggregation algorithms: Stochastic Vector Quantization (SVQ), Self-Organizing Maps (SOM), and Online Deterministic Annealing (ODA); and combined it with Q-learning to achieve a memory-efficient and explainable, communication-aware motion planning.  The former served as a slow, and latter as fast, component of Stochastic Approximation (SA) in two-timescales, theoretically guaranteeing an optimal solution. Experiments in simulated environments with real 5G network observations demonstrated that ODA-based state aggregation, with some extensions, enables localized Q-function approximation with increasing detail, advancing adaptive Q-learning techniques for netowkred systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CAMP/";
            },},{id: "projects-importance-weighted-autoencoders",
          title: 'Importance Weighted Autoencoders',
          description: "Reproduced and validated the Importance Weighted Autoencoder (IWAE) results from Burda et al., investigating a novel loss function with strictly tighter lower bounds than traditional VAEs. Implemented and compared both VAE and IWAE architectures on MNIST and Omniglot datasets, analyzing negative log-likelihood improvements with varying numbers of Monte Carlo samples. Results successfully confirmed the original findings, showing clear performance gains for larger sample counts and demonstrating IWAE&#39;s ability to learn richer latent space representations through its relaxed assumptions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IWAE/";
            },},{id: "projects-material-point-method-snow",
          title: 'Material Point Method (Snow)',
          description: "OpenGL/GLSL implementation of the Material Point Method for physically accurate snow simulation, based on Stomakhin et al. (2013). Features a dual CPU/GPU solver architecture: the CPU reference implementation uses APIC velocity transfer, SVD-based elastoplastic deformation, and exponential hardening, while the GPU port runs the full solver pipeline as OpenGL compute shaders — P2G scatter with atomic operations, grid force/collision kernels, and G2P gather with on-GPU analytical SVD — achieving significant speedup over the CPU baseline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MPM/";
            },},{id: "projects-flow-based-generative-models-with-minibatch-optimal-transport",
          title: 'Flow-Based Generative Models with Minibatch Optimal Transport',
          description: "Replicated and extended Optimal Transport Conditional Flow Matching (OT-CFM) experiments, evaluating the Light Schrödinger Bridge solver as an efficient alternative for learning generative models. By parameterizing log-Schrödinger potentials as energy functions, achieved dramatic training time reductions while preserving most sample quality (slight reduction). Demonstrated comparable performance on 2D toy datasets, CIFAR-10 image generation, and CelebA latent-space translation tasks, with significantly accelerated inference through simulation-free optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/OT_CFM/";
            },},{id: "projects-autonomous-navigation-in-unity-with-hybrid-a-and-pid-control",
          title: 'Autonomous Navigation in Unity with Hybrid A and PID Control',
          description: "Developed a comprehensive path-planning and execution framework for autonomous vehicles in virtual Unity environments, demonstrating robust navigation across diverse terrains with sharp curves and U-turns.  Implemented Hybrid A* algorithm with augmented node transition rules capturing continuous vehicle states within discrete grid cells, ensuring kinematically feasible paths for car-like robots. Applied gradient-based path smoothing using curvature and smoothness cost functions to eliminate unnecessary steering actions and improve traversability. Designed a sophisticated dynamic PID controller with adaptive look-ahead mechanisms that automatically adjusts acceleration sensitivity based on upcoming path curvature, enabling precise high-speed trajectory following. Ranked among the top few teams, with particularly strong results on complex terrains featuring multiple sharp curves where precision and stability were critical.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/navigation/";
            },},{id: "projects-robokinesis-controlling-robotic-arm-with-computer-vision-bsc-thesis",
          title: 'RoboKinesis - Controlling Robotic Arm with Computer Vision (BSc Thesis)',
          description: "Built a fully integrated ROS library enabling intuitive robotic arm control through human arm motion mimicking. Developed a complete pipeline combining computer vision for arm tracking with gesture control, and inverse kinematics for joint angle mapping. The framework addresses the gap in openly available ML-based control libraries by providing researchers and developers with a robust foundation for gesture-based robotic control. Conducted comprehensive accuracy and efficiency evaluations to determine practical usability and identify future research directions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robokinesis/";
            },},{id: "projects-image-segmentation-with-diffusion-models",
          title: 'Image Segmentation with Diffusion Models',
          description: "Investigated the use of Denoising Diffusion Probabilistic Models (DDPMs) for semantic segmentation by leveraging feature maps from trained generative models as inputs to pixel classifiers. Trained a functional DDPM from scratch capable of image reconstruction and generation, then systematically evaluated various architectural modifications introduced in recent deep learning research. Due to limited resources, we had to utilize a dataset with lower resolution images, and smaller model. Analyzed the impact of design choices on segmentation performance, providing insights into what architectural components contribute most effectively to DDPM-based segmentation tasks. For extensions, we focused on trying (i) ConvNext blocks, (ii) cosine noise scheduling, (iii) adaptive group normalization, (iv) ablating attention. The first two improved performance of our model (the first one more than the second), and the other two reduced the performance, measured by the FID score.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/segmentation_diffusion/";
            },},{id: "projects-skin-cancer-detection-amp-classification",
          title: 'Skin Cancer Detection &amp;amp; Classification',
          description: "Developed a comprehensive deep learning pipeline for automated skin lesion classification. Implemented advanced data preprocessing including normalization, histogram equalization, hair/artifact removal, and intelligent augmentation strategies for class balancing. Applied SIFT-based duplicate detection and ResNeXt-UNet segmentation for improved feature extraction. Evaluated both CNN and Vision Transformer architectures using precision, recall, F1-score, ROC curves, and confusion matrices, achieving robust classification performance on imbalanced medical imaging datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skin_cancer/";
            },},{id: "publications-genetically-modified-wolf-optimization-with-stochastic-gradient-descent-for-optimising-deep-neural-networks",
          title: 'Genetically Modified Wolf Optimization with Stochastic Gradient Descent for Optimising Deep Neural Networks...',
          description: "Authors: Manuel Bradicic, Michał Sitarz, Felix Sylvest Olesen",
          section: "Publications",handler: () => {
              window.location.href = "/publications/GMWO/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
