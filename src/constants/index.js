import { meta, shopify, starbucks, tesla, engimatix } from "../assests/images";

import {
  andriodStudio,
  android,
  apple,
  bootstrap,
  car,
  css,
  dart,
  docker,
  estate,
  express,
  figma,
  firebase,
  flutter,
  git,
  github,
  googleColab,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  netlify,
  nextjs,
  nodejs,
  postman,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assests/icons";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Technologies",
  },

  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

export const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", imageUrl: javascript },
      { name: "TypeScript", imageUrl: typescript },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "React.js", imageUrl: react },
      { name: "Next.js", imageUrl: nextjs },
      { name: "Node.js", imageUrl: nodejs },
      { name: "Express", imageUrl: express },
      { name: "Redux", imageUrl: redux },
    ],
  },
  {
    name: "Frontend & Styling",
    skills: [
      { name: "HTML5", imageUrl: html },
      { name: "CSS3", imageUrl: css },
      { name: "Tailwind CSS", imageUrl: tailwindcss },
      { name: "Sass", imageUrl: sass },
      { name: "Material-UI", imageUrl: mui },
      { name: "Framer Motion", imageUrl: motion },
    ],
  },
  {
    name: "Database & Tools",
    skills: [
      { name: "MongoDB", imageUrl: mongodb },
      { name: "Git", imageUrl: git },
      { name: "GitHub", imageUrl: github },
    ],
  },
];

export const socialMedia = [
  { name: "FaGithub", URL: "https://github.com/Umair-Amjad-Ali" },
  {
    name: "FaLinkedin",
    URL: "https://www.linkedin.com/in/umair-amjad-b3397a254/",
  },
  {
    name: "BsFillThreadsFill",
    URL: "https://www.threads.net/@umair_amjad_ali",
  },
];

export const socialMediaHero = [
  { URL: "https://github.com/Umair-Amjad-Ali" },
  {
    URL: "https://www.linkedin.com/in/umair-amjad-b3397a254/",
  },
  {
    URL: "https://www.threads.net/@umair_amjad_ali",
  },
  {
    URL: "https://twitter.com/Umair_Amjad_Ali",
  },
];

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
  },
  {
    imageUrl: dart,
    name: "Dart",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
  },
  {
    imageUrl: python,
    name: "Python",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
  },
  {
    imageUrl: react,
    name: "React",
  },
  {
    imageUrl: express,
    name: "Express JS",
  },
  {
    imageUrl: sass,
    name: "Sass",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
  },
  {
    imageUrl: css,
    name: "CSS",
  },
  {
    imageUrl: motion,
    name: "Framer Motion",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
  },

  {
    imageUrl: flutter,
    name: "Flutter",
  },
  {
    imageUrl: android,
    name: "Android Development",
  },
  {
    imageUrl: apple,
    name: "iOS Development",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
  },
  {
    imageUrl: netlify,
    name: "Netlify",
  },

  {
    imageUrl: git,
    name: "Git",
  },
  {
    imageUrl: github,
    name: "GitHub",
  },

  {
    imageUrl: andriodStudio,
    name: "Android Studio",
  },

  {
    imageUrl: docker,
    name: "Docker",
  },
  {
    imageUrl: figma,
    name: "Figma",
  },

  {
    imageUrl: googleColab,
    name: "Google Colab",
  },

  {
    imageUrl: postman,
    name: "PostMan",
  },
];

export const experiences = [
  {
    title: "Application Software Developer",
    company_name: "SynticAI",
    location: "Bahawalpur",
    icon: engimatix, // Using same icon temporarily
    iconBg: "#6366f1",
    date: "Oct 2024 - Present",
    points: [
      "Mobile Application Development: Built Flutter-based mobile apps for Android and iOS with optimized performance.",
      "Cloud & Real-time Services: Integrated Firebase for secure authentication, cloud storage, push notifications, and real-time database synchronization.",
      "Full Stack Web Development: Built responsive web interfaces with Next.js and Tailwind CSS, managing backend services using Node.js and Express.",
      "Database Management: Architected and maintained scalable MongoDB schemas to manage complex data relationships and ensure data integrity.",
      "Collaboration & Version Control: Worked closely with the senior development team, using Git for version control and participating in code reviews.",
    ],
  },
  {
    title: "Web Application Developer",
    company_name: "Enigmatix",
    location: "Bahawalpur",
    icon: engimatix,
    iconBg: "#001eff",
    date: "May 2023 - Dec 2023",
    points: [
      "Front-end Web Development: Developed interactive web interfaces using React.js and Next.js, optimizing page load speed and SEO.",
      "Responsive UI Implementation: Converted Figma designs into responsive web interfaces using Tailwind CSS for mobile, tablet, and desktop.",
      "Component-Based Architecture: Built reusable and modular React components to improve code maintainability and speed up development time.",
      "Collaboration & Version Control: Worked closely with the senior development team, using Git for version control and participating in code reviews.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "BatteryEye",
    subtitle: "Inventory & Roadside Service Ecosystem",
    shortDescription:
      "A comprehensive mobile app and web dashboard for battery inventory management and roadside assistance services.",
    dateRange: "Jul 2025 – Current",
    status: "current",
    theme: "btn-back-blue",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    problem:
      "Battery service companies struggled with managing inventory across multiple trucks and stations, tracking field operations, and generating accurate financial reports in real-time.",
    solution:
      "Built an integrated ecosystem with a mobile app for field operations and a web dashboard for administration, enabling real-time inventory tracking, role-based access, and comprehensive analytics.",
    challenges: [
      {
        title: "Complex Multi-Truck Inventory Sync",
        description:
          "Syncing inventory across 50+ trucks in real-time while handling offline scenarios was extremely challenging.",
        solution:
          "Implemented Firebase offline persistence with conflict resolution and queue-based sync when back online.",
      },
      {
        title: "Dynamic Pricing Engine",
        description:
          "Building a flexible pricing system that handles discounts, service fees, and location-based rates was complex.",
        solution:
          "Created a rule-based pricing engine with priority layers and real-time calculation caching.",
      },
    ],
    features: [
      "Role-based authentication with station/truck passcodes",
      "Barcode-based POS with complex pricing and service tracking",
      "Real-time truck inventory monitoring and transfers via Firebase",
      "Multi-tenant system for seamless company creation and management",
      "Centralized fleet and workforce controls with remote security",
      "Analytics tools to visualize sales trends and PDF financial reports",
    ],
    modules: [
      {
        title: "Mobile Application",
        subtitle: "Field Operations",
        icon: "mobile",
        features: [
          "Rank-based functionality access (Manager vs. Driver roles)",
          "Offline-first POS with auto-sync recovery",
          "Barcode scanning for instant inventory lookup",
          "Real-time stock transfer requests between trucks"
        ]
      },
      {
        title: "Admin Dashboard",
        subtitle: "Command Center",
        icon: "dashboard",
        features: [
          "Full control over app permissions and feature toggles",
          "Live fleet tracking and technician monitoring",
          "Multi-level inventory management (Warehouse → Truck)",
          "Comprehensive financial analytics and exportable reports"
        ]
      }
    ],
    link: "",
    github: "",
  },
  {
    id: 2,
    name: "Nutrea App",
    subtitle: "AI-Powered Nutrition Tracker",
    shortDescription:
      "Smart nutrition tracking app with AI-powered food analysis using GPT-4o Vision for automated meal logging.",
    dateRange: "Jul 2025 – Sep 2025",
    status: "completed",
    theme: "btn-back-green",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    techStack: ["Flutter", "Firebase", "GPT-4o Vision API", "Dart"],
    problem:
      "Manual food logging is tedious and inaccurate, leading to poor nutrition tracking and users abandoning their health goals.",
    solution:
      "Developed a 'Snap & Track' feature using AI vision to automatically analyze food photos, estimate portions, and provide accurate nutritional breakdowns instantly.",
    challenges: [
      {
        title: "AI Response Latency",
        description:
          "GPT-4o Vision API responses took 5-8 seconds, making the user experience feel slow.",
        solution:
          "Added optimistic UI with skeleton loaders and background processing with push notifications.",
      },
      {
        title: "Portion Size Accuracy",
        description:
          "AI often struggled with accurate portion estimation without reference objects.",
        solution:
          "Implemented optional reference object detection (coins, plates) for calibration.",
      },
    ],
    features: [
      "AI-powered 'Snap & Track' feature using GPT-4o Vision API",
      "Automated nutritional breakdown and portion estimation",
      "Real-time Firebase Firestore synchronization across devices",
      "Daily calorie intake and hydration tracking",
      "Goal-based logic for automatic calorie target adjustments",
      "Progress tracking and health insights dashboard",
    ],
    modules: [
      {
        title: "User Application",
        subtitle: "Personal Health Companion",
        icon: "mobile",
        features: [
          "Snap & Track AI Food Analysis",
          "Real-time hydration and calorie logging",
          "Personalized goal setting and progress charts",
          "Barcode scanner for packaged foods"
        ]
      }
    ],
    link: "",
    github: "",
  },
  {
    id: 3,
    name: "ModivFit",
    subtitle: "Social Fitness Platform",
    shortDescription:
      "Gamified fitness platform with social features, challenges, leaderboards, and real-time engagement tools.",
    dateRange: "Feb 2025 – Aug 2025",
    status: "completed",
    theme: "btn-back-pink",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    techStack: ["Flutter", "Firebase", "Node.js", "Google Ads", "FCM"],
    problem:
      "Traditional fitness apps lack social engagement and motivation, causing users to lose interest and abandon their fitness routines.",
    solution:
      "Created a gamified social fitness platform with challenges, streaks, badges, and leaderboards to keep users motivated and connected with their fitness community.",
    challenges: [
      {
        title: "Video Streaming Performance",
        description:
          "Workout videos were buffering on slow connections, frustrating users mid-exercise.",
        solution:
          "Implemented adaptive bitrate streaming and pre-caching of next workout segments.",
      },
      {
        title: "Leaderboard Cheating Prevention",
        description:
          "Users were finding ways to artificially inflate their scores and streak counts.",
        solution:
          "Added server-side validation with activity pattern analysis and anomaly detection.",
      },
    ],
    features: [
      "Challenge-focused app with workout videos and tutorials",
      "Streaks, badges, and leaderboards for gamification",
      "Scalable social platform with real-time chat",
      "Personalized feeds and user engagement features",
      "Google Mobile Ads and subscription model integration",
      "Firebase Cloud Messaging for real-time push notifications",
    ],
    modules: [
      {
        title: "Fitness Application",
        subtitle: "User Experience",
        icon: "mobile",
        features: [
          "Interactive workout video streaming",
          "Real-time social feed and chat system",
          "Gamified progress tracking (Streaks/Badges)",
          "Subscription management & simple payments"
        ]
      },
      {
        title: "Growth Engine",
        subtitle: "Engagement System",
        icon: "dashboard",
        features: [
          "Automated push notification campaigns",
          "Dynamic leaderboard calculation engine",
          "Ad mediation and revenue tracking",
          "User retention analytics dashboard"
        ]
      }
    ],
    link: "",
    github: "",
  },
  {
    id: 4,
    name: "Brain Tumor Detection",
    subtitle: "AI-Based MRI Diagnostic System",
    shortDescription:
      "Deep learning system for brain tumor classification and segmentation from MRI scans with 98% accuracy.",
    dateRange: "Feb 2023 – Jan 2024",
    status: "completed",
    theme: "btn-back-orange",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    techStack: ["Python", "TensorFlow", "CNN", "Res U-Net", "OpenCV"],
    problem:
      "Early brain tumor detection is critical but challenging, with manual MRI analysis being time-consuming and prone to human error.",
    solution:
      "Built a CNN and Res U-Net deep learning pipeline that automatically classifies and segments brain tumors from MRI scans, achieving ~98% diagnostic accuracy.",
    challenges: [
      {
        title: "Limited Training Data",
        description:
          "Medical MRI datasets are scarce and expensive, limiting model training accuracy.",
        solution:
          "Used data augmentation, transfer learning from ImageNet, and synthetic data generation.",
      },
      {
        title: "Model Interpretability",
        description:
          "Doctors needed to understand WHY the AI made its diagnosis, not just the result.",
        solution:
          "Implemented Grad-CAM visualization to highlight tumor regions that influenced the prediction.",
      },
    ],
    features: [
      "CNN-based brain tumor classification system",
      "Res U-Net architecture for precise tumor segmentation",
      "Transfer learning for high accuracy on limited datasets",
      "Comprehensive MRI pre-processing pipeline",
      "Interactive result visualization interface",
      "End-to-end diagnostic workflow automation",
    ],
    modules: [
      {
        title: "Deep Learning Pipeline",
        subtitle: "Core AI Engine",
        icon: "dashboard",
        features: [
          "Res U-Net for pixel-perfect segmentation",
          "Custom CNN architecture for classification",
          "Automated MRI image pre-processing",
          "Model training with transfer learning"
        ]
      },
      {
        title: "Diagnostic Interface",
        subtitle: "Clinician Dashboard",
        icon: "laptop",
        features: [
          "Interactive MRI slice viewer",
          "Real-time inference and result overlay",
          "Patient report generation system",
          "Explainable AI heatmap visualization"
        ]
      }
    ],
    link: "",
    github: "",
  },
];

// Additional projects for "All Projects" page
export const additionalProjects = [
  {
    id: 5,
    name: "E-Commerce Dashboard",
    subtitle: "Full-Stack Admin Panel",
    shortDescription:
      "Complete admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory control.",
    dateRange: "Jan 2024 – Mar 2024",
    status: "completed",
    theme: "btn-back-red",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    problem:
      "E-commerce businesses needed a centralized dashboard to manage orders, track inventory, and analyze sales trends without switching between multiple tools.",
    solution:
      "Built a comprehensive admin panel with real-time data visualization, bulk order processing, and automated inventory alerts.",
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Keeping dashboard data in sync across multiple admin users was causing conflicts and stale data issues.",
        solution:
          "Implemented WebSocket connections with optimistic UI updates and server-side conflict resolution.",
      },
      {
        title: "Large Dataset Performance",
        description:
          "Loading thousands of orders was causing significant page lag and poor user experience.",
        solution:
          "Added virtual scrolling, pagination, and server-side filtering to handle 100k+ records smoothly.",
      },
    ],
    features: [
      "Real-time sales analytics with interactive Chart.js visualizations",
      "Bulk order processing and status updates",
      "Automated inventory alerts and restock notifications",
      "Customer management with purchase history",
      "Role-based access control for team members",
      "Export reports to PDF and Excel formats",
    ],
    modules: [
      {
        title: "Admin Portal",
        subtitle: "Management Interface",
        icon: "laptop",
        features: [
          "Interactive analytics dashboard",
          "Bulk order & inventory management",
          "Customer CRM & support tools",
          "Team permission settings"
        ]
      },
      {
        title: "Backend Services",
        subtitle: "REST API & Logic",
        icon: "dashboard",
        features: [
          "Secure authentication & authorization",
          "Real-time websocket event handling",
          "Automated pdf report generation",
          "Database optimization & indexing"
        ]
      }
    ],
    link: "https://github.com/Umair-Amjad-Ali/ecommerce-dashboard",
    github: "https://github.com/Umair-Amjad-Ali/ecommerce-dashboard",
  },
  {
    id: 6,
    name: "Task Management App",
    subtitle: "Collaborative Project Tracker",
    shortDescription:
      "Kanban-style task management application with team collaboration, real-time updates, and project analytics.",
    dateRange: "Sep 2023 – Nov 2023",
    status: "completed",
    theme: "btn-back-green",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Framer Motion",
    ],
    problem:
      "Remote teams struggled with task visibility and communication, leading to missed deadlines and duplicated work efforts.",
    solution:
      "Created a real-time collaborative workspace with drag-and-drop task boards, instant notifications, and progress tracking.",
    challenges: [
      {
        title: "Drag-and-Drop Across Columns",
        description:
          "Implementing smooth drag-and-drop that works across different columns while maintaining order persistence was complex.",
        solution:
          "Used react-beautiful-dnd with custom drop logic and optimistic updates to database.",
      },
      {
        title: "Real-time Collaboration Conflicts",
        description:
          "Multiple users editing the same task simultaneously caused data overwrites.",
        solution:
          "Implemented operational transformation and last-write-wins with user notification system.",
      },
    ],
    features: [
      "Drag-and-drop Kanban boards with smooth animations",
      "Real-time updates via WebSocket connections",
      "Task assignments with due dates and priorities",
      "Team workload visualization and analytics",
      "File attachments and comment threads",
      "Email and push notification integrations",
    ],
    modules: [
      {
        title: "Client Application",
        subtitle: "Frontend Interface",
        icon: "laptop",
        features: [
          "Drag-and-drop task management UI",
          "Real-time collaboration markers",
          "Interactive analytics charts",
          "Responsive team dashboard"
        ]
      },
      {
        title: "Real-time Server",
        subtitle: "Backend System",
        icon: "dashboard",
        features: [
          "Socket.io event management",
          "Efficient database queries with Prisma",
          "Operational transformation logic",
          "Automated email background jobs"
        ]
      }
    ],
    link: "",
    github: "https://github.com/Umair-Amjad-Ali/task-manager",
  },
  {
    id: 7,
    name: "Weather Forecast App",
    subtitle: "AI-Enhanced Weather Predictions",
    shortDescription:
      "Beautiful weather application with 7-day forecasts, location-based alerts, and personalized weather insights.",
    dateRange: "Jun 2023 – Jul 2023",
    status: "completed",
    theme: "btn-back-blue",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    techStack: [
      "React Native",
      "OpenWeather API",
      "Geolocation",
      "AsyncStorage",
    ],
    problem:
      "Existing weather apps were cluttered with ads and lacked personalized insights for daily planning and outdoor activities.",
    solution:
      "Designed a clean, ad-free weather app with smart notifications and activity recommendations based on weather conditions.",
    challenges: [
      {
        title: "Accurate Location Detection",
        description:
          "Getting precise user location for hyperlocal weather data was inconsistent across devices.",
        solution:
          "Implemented fallback chain: GPS → Network → IP-based location with caching for offline access.",
      },
      {
        title: "Battery Optimization",
        description:
          "Continuous location tracking for weather updates was draining device battery quickly.",
        solution:
          "Used significant location change monitoring instead of continuous GPS polling.",
      },
    ],
    features: [
      "7-day weather forecast with hourly breakdowns",
      "Location-based severe weather alerts",
      "Activity recommendations (running, hiking, etc.)",
      "Beautiful dynamic backgrounds based on weather",
      "Multiple location bookmarks",
      "Offline mode with cached weather data",
    ],
    modules: [
      {
        title: "Mobile App",
        subtitle: "User Interface",
        icon: "mobile",
        features: [
          "Location-aware weather visualization",
          "Dynamic animations & background effects",
          "Smart activity recommendation engine",
          "Offline data persistence layer"
        ]
      }
    ],
    link: "",
    github: "https://github.com/Umair-Amjad-Ali/weather-app",
  },
  {
    id: 8,
    name: "Recipe Finder App",
    subtitle: "Smart Ingredient-Based Search",
    shortDescription:
      "Discover recipes based on ingredients you have at home, with nutritional info, step-by-step guides, and meal planning.",
    dateRange: "Apr 2023 – May 2023",
    status: "completed",
    theme: "btn-back-yellow",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    techStack: ["Flutter", "Spoonacular API", "SQLite", "Provider"],
    problem:
      "People often struggle with what to cook with available ingredients, leading to food waste and repetitive meals.",
    solution:
      "Built an intelligent recipe search that suggests dishes based on pantry ingredients and dietary preferences.",
    challenges: [
      {
        title: "Ingredient Matching Algorithm",
        description:
          "Matching user ingredients to recipes while accounting for substitutes and optional items was complex.",
        solution:
          "Created weighted scoring system that ranks recipes by ingredient match percentage and availability.",
      },
      {
        title: "Offline Recipe Access",
        description:
          "Users wanted to access saved recipes without internet connection while cooking.",
        solution:
          "Implemented SQLite database for offline storage with image caching and sync when online.",
      },
    ],
    features: [
      "Search recipes by available ingredients",
      "Dietary filters (vegan, gluten-free, keto, etc.)",
      "Step-by-step cooking instructions with timers",
      "Nutritional information and calorie tracking",
      "Save favorites and create shopping lists",
      "Weekly meal planning with calendar view",
    ],
    modules: [
      {
        title: "Recipe App",
        subtitle: "Culinary Companion",
        icon: "mobile",
        features: [
          "Smart ingredient matching algorithm",
          "Interactive cooking timer & guides",
          "Offline recipe database sync",
          "Nutritional data visualization"
        ]
      }
    ],
    link: "",
    github: "https://github.com/Umair-Amjad-Ali/recipe-finder",
  },
  {
    id: 9,
    name: "Portfolio Generator",
    subtitle: "No-Code Portfolio Builder",
    shortDescription:
      "Drag-and-drop portfolio builder that generates responsive, SEO-optimized personal websites in minutes.",
    dateRange: "Feb 2023 – Mar 2023",
    status: "completed",
    theme: "btn-back-pink",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    techStack: ["Next.js", "Vercel", "Tailwind CSS", "Cloudinary", "MongoDB"],
    problem:
      "Developers and designers without web development skills struggled to create professional portfolios quickly.",
    solution:
      "Created a visual builder with pre-designed sections, custom styling options, and one-click deployment to Vercel.",
    challenges: [
      {
        title: "Dynamic Component Rendering",
        description:
          "Allowing users to add, remove, and reorder sections dynamically while maintaining responsiveness.",
        solution:
          "Built a JSON-based schema that renders React components dynamically with drag-and-drop editing.",
      },
      {
        title: "Automated Deployment Pipeline",
        description:
          "Deploying user portfolios to unique subdomains automatically required complex infrastructure.",
        solution:
          "Integrated Vercel API for automated deployments with custom domain mapping.",
      },
    ],
    features: [
      "Drag-and-drop section builder",
      "20+ pre-designed templates and themes",
      "Custom color schemes and typography",
      "Image optimization via Cloudinary",
      "SEO meta tags and sitemap generation",
      "One-click deployment with custom domains",
    ],
    modules: [
      {
        title: "Builder Interface",
        subtitle: "Visual Editor",
        icon: "laptop",
        features: [
          "Drag-and-drop WYSIWYG editor",
          "Live component preview engine",
          "Theme customization controls",
          "Asset upload & optimization tool"
        ]
      },
      {
        title: "Deployment Service",
        subtitle: "Cloud Infrastructure",
        icon: "dashboard",
        features: [
          "Automated Vercel deployment pipeline",
          "Custom domain mapping logic",
          "Dynamic site generation (ISR)",
          "SEO optimization scripts"
        ]
      }
    ],
    link: "",
    github: "https://github.com/Umair-Amjad-Ali/portfolio-generator",
  },
];

// Blog posts data
export const blogs = [
  {
    id: 1,
    title: "Building Scalable REST APIs with Node.js and Express",
    excerpt:
      "Learn best practices for creating production-ready RESTful APIs with proper error handling, validation, and authentication.",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable REST APIs is crucial for modern web applications. In this article, we'll explore best practices for creating robust APIs using Node.js and Express.</p>
      
      <h3>1. Project Structure</h3>
      <p>Organize your code with a clean architecture: routes, controllers, models, and middleware. This separation of concerns makes your codebase maintainable and testable.</p>
      
      <h3>2. Error Handling</h3>
      <p>Implement centralized error handling middleware to catch and format errors consistently. Use try-catch blocks with async/await and create custom error classes for different scenarios.</p>
      
      <h3>3. Authentication & Authorization</h3>
      <p>Secure your endpoints with JWT tokens and implement role-based access control. Always validate tokens on protected routes and refresh tokens before expiration.</p>
      
      <h3>4. Input Validation</h3>
      <p>Use libraries like Joi or express-validator to validate incoming data. Never trust client input - validate everything at the API level.</p>
      
      <h3>5. Rate Limiting & Security</h3>
      <p>Protect against abuse with rate limiting using express-rate-limit. Add helmet.js for security headers and CORS configuration for cross-origin requests.</p>
      
      <h3>Conclusion</h3>
      <p>Following these practices will help you build APIs that are secure, scalable, and maintainable. Always prioritize error handling and security from day one.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2026-01-10",
    readTime: "8 min read",
    category: "Backend Development",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: 2,
    title: "Mastering React Hooks: useEffect, useState, and Custom Hooks",
    excerpt:
      "Deep dive into React Hooks with practical examples and best practices for writing clean, efficient React components.",
    content: `
      <h2>Understanding React Hooks</h2>
      <p>React Hooks revolutionized how we write components. Let's explore the most commonly used hooks and how to create custom ones.</p>
      
      <h3>useState: Managing Component State</h3>
      <p>useState is the foundation of state management in functional components. Use it for simple state values like toggles, counters, and form inputs.</p>
      
      <h3>useEffect: Side Effects Made Easy</h3>
      <p>Handle side effects like API calls, subscriptions, and DOM manipulation. Remember the dependency array - it controls when your effect runs!</p>
      
      <h3>Custom Hooks: Reusability at Its Best</h3>
      <p>Extract common logic into custom hooks. For example, useFetch for API calls or useLocalStorage for persistent state. Custom hooks make your code DRY and testable.</p>
      
      <h3>Common Pitfalls</h3>
      <p>Avoid infinite loops by properly setting dependencies. Don't forget cleanup functions for subscriptions. Use useCallback and useMemo for performance optimization when needed.</p>
      
      <h3>Best Practices</h3>
      <p>Keep hooks at the top level of your component. Don't call them conditionally. Name custom hooks with "use" prefix. Split complex effects into multiple smaller ones.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2026-01-08",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: 3,
    title: "Flutter State Management: Provider vs Riverpod vs Bloc",
    excerpt:
      "Compare popular Flutter state management solutions and learn when to use each approach for optimal app architecture.",
    content: `
      <h2>Choosing the Right State Management</h2>
      <p>Flutter offers multiple state management solutions. Let's compare the three most popular ones and understand when to use each.</p>
      
      <h3>Provider: Simple and Effective</h3>
      <p>Provider is perfect for small to medium apps. It's easy to learn and integrates well with Flutter's widget tree. Use it when you need simple state sharing across widgets.</p>
      
      <h3>Riverpod: The Evolution of Provider</h3>
      <p>Riverpod solves Provider's limitations with compile-time safety and better testing support. It doesn't depend on the widget tree, making it more flexible. Great for medium to large apps.</p>
      
      <h3>Bloc: Predictable State Management</h3>
      <p>Bloc follows the BLoC (Business Logic Component) pattern with streams. It's powerful for complex apps with intricate business logic and provides excellent testability.</p>
      
      <h3>Performance Comparison</h3>
      <p>Provider and Riverpod have minimal overhead. Bloc can be heavier but offers better separation of concerns. Choose based on your app's complexity, not just performance.</p>
      
      <h3>My Recommendation</h3>
      <p>Start with Provider for learning. Move to Riverpod for production apps. Choose Bloc only if you need strict state predictability and have complex business logic.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2026-01-05",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "State Management", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: 4,
    title: "MongoDB Schema Design: Best Practices for NoSQL Databases",
    excerpt:
      "Learn how to design efficient MongoDB schemas with proper indexing, relationships, and denormalization strategies.",
    content: `
      <h2>Designing Effective MongoDB Schemas</h2>
      <p>Unlike SQL databases, MongoDB requires different thinking about data modeling. Let's explore best practices for schema design.</p>
      
      <h3>Embedding vs Referencing</h3>
      <p>Embed related data when it's frequently accessed together. Use references for data that's large, changes often, or is accessed separately. The rule: embed for one-to-one, reference for many-to-many.</p>
      
      <h3>Denormalization for Performance</h3>
      <p>Duplicate data strategically to avoid expensive joins (lookups). Store user names with comments instead of just user IDs. Update denormalized data carefully.</p>
      
      <h3>Indexes: The Performance Multiplier</h3>
      <p>Create indexes on fields you query frequently. Use compound indexes for multi-field queries. Monitor index usage and remove unused ones to save space.</p>
      
      <h3>Schema Validation</h3>
      <p>Use MongoDB's schema validation to enforce data consistency. Define required fields, data types, and value ranges. This prevents corrupt data from entering your database.</p>
      
      <h3>Handling Large Documents</h3>
      <p>MongoDB has a 16MB document size limit. For large data like images, use GridFS. For arrays, limit growth and consider bucketing strategies for time-series data.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2026-01-03",
    readTime: "9 min read",
    category: "Backend Development",
    tags: ["MongoDB", "Database", "NoSQL", "Schema Design"],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
  },
  {
    id: 5,
    title: "Next.js 14: Server Actions and the Future of Full-Stack React",
    excerpt:
      "Explore the revolutionary Server Actions in Next.js 14 and how they're changing full-stack development with React.",
    content: `
      <h2>Server Actions: A Paradigm Shift</h2>
      <p>Next.js 14 introduces Server Actions, allowing you to write server-side logic directly in your components without building separate API routes.</p>
      
      <h3>What Are Server Actions?</h3>
      <p>Server Actions are asynchronous functions that run on the server. Mark functions with 'use server' and call them from client components. No more API routes for simple mutations!</p>
      
      <h3>Form Handling Made Easy</h3>
      <p>Pass Server Actions directly to form actions. Get automatic loading states, error handling, and progressive enhancement. Forms work even without JavaScript!</p>
      
      <h3>Data Revalidation</h3>
      <p>Use revalidatePath() and revalidateTag() to update cached data after mutations. This keeps your UI in sync without manual cache invalidation.</p>
      
      <h3>Security Considerations</h3>
      <p>Server Actions run on the server, so they're secure by default. Validate all inputs and check authentication/authorization. Never trust client data.</p>
      
      <h3>When to Use Server Actions</h3>
      <p>Perfect for form submissions, database mutations, and server-side operations. For complex APIs or third-party integrations, traditional API routes might still be better.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2025-12-28",
    readTime: "11 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Server Actions", "Full-Stack"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
  },
  {
    id: 6,
    title: "Building Real-Time Apps with Firebase and React",
    excerpt:
      "Create real-time applications using Firebase Firestore, Authentication, and Cloud Functions with React for instant user experiences.",
    content: `
      <h2>Real-Time Magic with Firebase</h2>
      <p>Firebase enables real-time features without complex backend infrastructure. Let's build a real-time chat app from scratch.</p>
      
      <h3>Setting Up Firebase</h3>
      <p>Install Firebase SDK, initialize your app with API keys, and set up Firestore. Enable Authentication for user management. Configure security rules to protect your data.</p>
      
      <h3>Firestore Real-Time Listeners</h3>
      <p>Use onSnapshot() to listen to document changes. Your UI updates automatically when data changes. Perfect for chat apps, collaborative tools, and live dashboards.</p>
      
      <h3>Authentication Integration</h3>
      <p>Firebase Auth supports email, Google, GitHub, and more. Implement protected routes and user sessions. Store user data in Firestore with proper security rules.</p>
      
      <h3>Cloud Functions for Backend Logic</h3>
      <p>Write serverless functions for complex operations like sending emails, processing payments, or cleaning up data. Triggers run automatically on database changes.</p>
      
      <h3>Offline Support</h3>
      <p>Firebase caches data locally and syncs when back online. Enable persistence for offline-first apps. Handle conflicts with merge strategies.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2025-12-25",
    readTime: "13 min read",
    category: "Web Development",
    tags: ["Firebase", "React", "Real-Time", "Cloud"],
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80",
  },
  {
    id: 7,
    title: "Tailwind CSS: Utility-First Design for Modern Web Apps",
    excerpt:
      "Master Tailwind CSS with advanced techniques, custom configurations, and performance optimization strategies.",
    content: `
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind's utility-first approach speeds up development and keeps designs consistent. Let's explore advanced usage and best practices.</p>
      
      <h3>Custom Configuration</h3>
      <p>Extend tailwind.config.js with your color palette, fonts, and spacing. Create custom utilities for project-specific needs. Use the theme() function for consistency.</p>
      
      <h3>Component Extraction</h3>
      <p>Extract repeated patterns with @apply in CSS or create React components. Balance between utility classes and abstraction. Don't over-abstract early.</p>
      
      <h3>Responsive Design</h3>
      <p>Mobile-first approach with breakpoint prefixes: sm:, md:, lg:, xl:. Use arbitrary breakpoints when needed. Test on real devices, not just browser DevTools.</p>
      
      <h3>Dark Mode Implementation</h3>
      <p>Use dark: prefix for dark mode styles. Implement with class strategy for user control or media query for system preference. Store user preference in localStorage.</p>
      
      <h3>Performance Optimization</h3>
      <p>Tailwind's JIT mode generates only used classes. Purge unused styles in production. Use production builds to minimize CSS size from 3MB to ~10KB.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2025-12-20",
    readTime: "7 min read",
    category: "Web Development",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
  },
  {
    id: 8,
    title: "AI Integration in Web Apps: GPT-4 and Beyond",
    excerpt:
      "Learn how to integrate AI capabilities into your web applications using OpenAI's GPT-4 API and other modern AI services.",
    content: `
      <h2>The AI Revolution in Web Development</h2>
      <p>AI is transforming web applications. Let's explore practical ways to integrate GPT-4 and other AI services into your projects.</p>
      
      <h3>Getting Started with GPT-4 API</h3>
      <p>Sign up for OpenAI API, get your key, and make your first request. Understand pricing, rate limits, and token usage. Always handle API keys securely with environment variables.</p>
      
      <h3>Prompt Engineering</h3>
      <p>Craft effective prompts for better responses. Be specific, provide context, and use examples. Iterate on prompts - small changes can dramatically improve output quality.</p>
      
      <h3>Streaming Responses</h3>
      <p>Use streaming for better UX with long responses. Display text as it's generated rather than waiting for completion. Implement loading states and error handling.</p>
      
      <h3>Cost Optimization</h3>
      <p>Cache common responses, limit token usage, and use appropriate models. GPT-4 is powerful but expensive - use GPT-3.5-turbo for simpler tasks.</p>
      
      <h3>Real-World Use Cases</h3>
      <p>Content generation, chatbots, code assistance, data analysis, and more. AI works best as an assistant, not a replacement for human judgment.</p>
    `,
    author: "Umair Amjad Ali",
    date: "2025-12-15",
    readTime: "10 min read",
    category: "Modern Tech",
    tags: ["AI", "GPT-4", "OpenAI", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
];
