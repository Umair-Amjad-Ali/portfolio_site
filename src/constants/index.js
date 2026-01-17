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
    title: "Projects",
  },
  {
    id: "engineering",
    title: "Deep Dives",
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
    title: "Freelance Full-Stack Developer",
    company_name: "Self-Employed",
    location: "Remote",
    icon: react,
    iconBg: "#383E56",
    date: "Jan 2024 - Aug 2025",
    points: [
      "Delivered custom web solutions for diverse clients using React.js, Next.js, and Node.js.",
      "Developed and deployed full-stack electronic commerce and portfolio applications with secure payment gateways.",
      "Collaborated directly with clients to translate business requirements into technical specifications.",
      "Ensured application performance, SEO optimization, and mobile responsiveness for all delivered projects.",
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

// Engineering Deep Dives (Case Studies)
export const deepDives = [
  {
    id: 1,
    title: "Scaling WebSocket Architecture for Real-Time Fleet Tracking",
    excerpt:
      "Deep dive into handling 50k+ daily events with 99.9% uptime using Node.js and Redis Pub/Sub.",
    content: `
      <h2>The Challenge: High-Frequency Data Streams</h2>
      <p>Tracking 50+ trucks in real-time generates massive concurrent location updates. A simple WebSocket server was quickly overwhelmed by connection limits and message throughput.</p>
      
      <h3>Architecture Evolution</h3>
      <p>We migrated from a monolithic WebSocket server to a distributed system using Redis Pub/Sub.</p>
      <ul>
        <li><strong>Layer 1:</strong> Nginx Load Balancer for sticky sessions.</li>
        <li><strong>Layer 2:</strong> Horizontal scaling of Node.js WebSocket nodes.</li>
        <li><strong>Layer 3:</strong> Redis Pub/Sub to broadcast messages across nodes.</li>
      </ul>

      <h3>Optimizing Message Payloads</h3>
      <p>By switching from JSON to Protocol Buffers for location packets, we reduced bandwidth usage by 60%, allowing us to handle frequent updates even on 3G networks.</p>
    `,
    author: "Umair Amjad Ali",
    date: "Architecture Case Study",
    readTime: "System Design",
    category: "Backend Scalability",
    tags: ["Node.js", "Redis", "WebSockets", "System Design"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    mainTech: "Socket.io",
    complexity: "High"
  },
  {
    id: 2,
    title: "Optimizing Flutter Performance for 60FPS on Low-End Devices",
    excerpt:
      "Techniques used to achieve native-level performance in complex animations and heavy lists.",
    content: `
      <h2>The Perf Problem</h2>
      <p>Our fitness app suffered from frame drops during complex list scrolls with autoplaying videos. On low-end Android devices, frame time exceeded 16ms.</p>
      
      <h3>Isolate Spawning</h3>
      <p>We moved heavy JSON parsing and data transformation to background Isolates. This kept the UI thread free for rendering frames.</p>
      
      <h3>Repaint Boundary Strategy</h3>
      <p>Using <code>RepaintBoundary</code> widgets strategically prevented the entire screen from redrawing when only a small progress bar updated. This reduced GPU usage by 40%.</p>
    `,
    author: "Umair Amjad Ali",
    date: "Performance Engineering",
    readTime: "Mobile Optimization",
    category: "Mobile Performance",
    tags: ["Flutter", "Dart", "Rendering", "Optimization"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    mainTech: "Flutter Skia",
    complexity: "Medium"
  },
  {
    id: 3,
    title: "AI-Powered Image Analysis Pipeline with < 2s Latency",
    excerpt:
      "Building a responsive food recognition system using GPT-4o Vision and Edge Caching.",
    content: `
      <h2>Latency vs Accuracy</h2>
      <p>Direct API calls to GPT-4o Vision took 5-8 seconds. We needed a "snappy" feel for the nutrition tracker.</p>
      
      <h3>The Solution: Optimistic UI & Edge</h3>
      <p>We implemented a two-stage pipeline:</p>
      <ol>
        <li><strong>Local TensorFlow Lite:</strong> Immediate object detection on-device (Generic "Food" vs "Not Food").</li>
        <li><strong>Optimistic UI:</strong> Displaying a "placeholder" result instantly while the heavy analysis runs in the background.</li>
        <li><strong>Edge Caching:</strong> Caching common food hashes at the edge to skip AI calls entirely for repeated items.</li>
      </ol>
    `,
    author: "Umair Amjad Ali",
    date: "AI Engineering",
    readTime: "System Design",
    category: "AI Integration",
    tags: ["GPT-4", "Edge Computing", "React Native", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    mainTech: "OpenAI API",
    complexity: "High"
  },
  {
    id: 4,
    title: "Optimizing AI Response Time via Client-Side Image Compression",
    excerpt:
      "Reducing AI analysis latency by 40% through intelligent client-side compression before API upload.",
    content: `
      <h2>The Latency Bottleneck</h2>
      <p>Users uploading high-res food photos (5MB+) for AI analysis experienced 8-10s delays. The massive payload slowed down both the upload and the AI processing time.</p>
      
      <h3>Smart Compression Strategy</h3>
      <p>We implemented a browser-based compression pipeline using <code>browser-image-compression</code> before the network request:</p>
      <ul>
        <li><strong>Adaptive Resizing:</strong> Images are resized to max 1024px width (sufficient for AI recognition).</li>
        <li><strong>Quality Reduction:</strong> JPEG quality reduced to 0.7, shrinking files from ~5MB to ~300KB.</li>
        <li><strong>Parallel Processing:</strong> Compression happens in a web worker to prevent UI freezing.</li>
      </ul>

      <h3>The Result</h3>
      <p>Payload size dropped by 94%, and total round-trip time improved from ~9s to ~3.5s, significantly boosting user retention.</p>
    `,
    author: "Umair Amjad Ali",
    date: "Performance Engineering",
    readTime: "Frontend Optimization",
    category: "AI Performance",
    tags: ["React", "Image Compression", "Web Workers", "UX"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    mainTech: "Web Workers",
    complexity: "Medium"
  }
];
