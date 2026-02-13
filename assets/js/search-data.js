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
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-3d-amp-media",
          title: "3D &amp; Media",
          description: "Collection of experiments in 3D graphics, game development, and interactive art.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/creative/";
          },
        },{id: "creative-liar-39-s-dice-work-in-progress",
          title: 'Liar&amp;#39;s Dice (work in progress)',
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
            },},{id: "creative-rasterization-amp-raytracing",
          title: 'Rasterization &amp;amp; Raytracing',
          description: "A physically-based ray tracing renderer that simulates light paths through a 3D scene and a polygon-based 3D rasterization renderer that projects geometric primitives onto the screen.",
          section: "Creative",handler: () => {
              window.location.href = "/creative/raytrace_rasterizer/";
            },},{id: "projects-towards-adaptive-reinforcement-learning-for-network-aware-robotics-via-quantization-techniques-msc-thesis",
          title: 'Towards Adaptive Reinforcement Learning for Network-Aware Robotics via Quantization Techniques (MSc Thesis)',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CAMP/";
            },},{id: "projects-importance-weighted-autoencoders",
          title: 'Importance Weighted Autoencoders',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IWAE/";
            },},{id: "projects-flow-based-generative-models-with-minibatch-optimal-transport",
          title: 'Flow-Based Generative Models with Minibatch Optimal Transport',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/OT_CFM/";
            },},{id: "projects-autonomous-navigation-in-unity",
          title: 'Autonomous Navigation in Unity',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/navigation/";
            },},{id: "projects-robokinesis-controlling-robotic-arm-with-computer-vision-bsc-thesis",
          title: 'RoboKinesis - Controlling Robotic Arm with Computer Vision (BSc Thesis)',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robokinesis/";
            },},{id: "projects-image-segmentation-with-diffusion-models",
          title: 'Image Segmentation with Diffusion Models',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/segmentation_diffusion/";
            },},{id: "projects-skin-cancer-detection-amp-classification",
          title: 'Skin Cancer Detection &amp;amp; Classification',
          description: "TODO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skin_cancer/";
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
