export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: string
  challenges: string[]
  solutions: string[]
  features: string[]
  duration: string
  role: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ci Ci Printing Service",
    description: "A comprehensive printing service platform where customers can order custom books, vouchers, and printed materials. Features dynamic pricing calculator, paper type selection, and both user and admin panels.",
    longDescription: "A specialized printing service platform built for Ci Ci Printing Service that allows customers to order various printed materials including books, vouchers, and flyers. The platform features an intelligent pricing calculator that considers paper type, page count, lamination options, and book types. Built with Vue.js for an interactive frontend, Node.js with Express for the backend, and MySQL for reliable data storage. Includes JWT authentication and separate user and admin dashboards for order management.",
    image: "/img/cici/1.png",
    gallery: [
      "/img/cici/2.png",
      "/img/cici/3.png",
      "/img/cici/4.png",
      "/img/cici/5.png"
    ],
    technologies: ["Vue.js", "TypeScript", "Node.js", "Express.js", "MySQL", "JWT", "CSS3", "Bootstrap"],
    githubUrl: "https://github.com/winlhanphyo/ci-ci-printing",
    liveUrl: "https://cicimm.net",
    featured: true,
    category: "Full-Stack",
    challenges: [
      "Implementing dynamic pricing calculator for different print options",
      "Managing complex order configurations with multiple variables",
      "Designing intuitive user interface for non-technical customers",
      "Handling file uploads and print specifications"
    ],
    solutions: [
      "Built flexible pricing engine with configurable parameters",
      "Created step-by-step order wizard for better user experience",
      "Implemented responsive design with clear visual feedback",
      "Added file validation and preview functionality"
    ],
    features: [
      "Dynamic pricing calculator",
      "Paper type and quality selection",
      "Page count and size options",
      "Lamination and binding choices",
      "Book type selection (book, voucher, flyer)",
      "User authentication and profiles",
      "Order history and tracking",
      "Admin panel for order management",
      "File upload and preview",
      "Responsive mobile-friendly design"
    ],
    duration: "4 months",
    role: "Full-Stack Developer"
  },
  {
    id: 2,
    title: "Truyenful Novel Website",
    description: "A Vietnamese novel reading platform where users can discover and read various genres of novels including romance, comics, superpower, and swordplay stories. Features advanced search, theme switching, and an intuitive reading interface.",
    longDescription: "A comprehensive Vietnamese novel reading platform built with React and Golang that provides an immersive reading experience for Vietnamese literature enthusiasts. The platform features a vast collection of novels across multiple genres including romance, comics, superpower, and swordplay stories. Built with React and TypeScript for a responsive frontend, Golang with Gin framework for high-performance backend, and MySQL for reliable data storage. Includes JWT authentication, advanced search functionality, and customizable reading themes.",
    image: "/img/truyenful/1.png",
    gallery: [
      "/img/truyenful/2.png",
      "/img/truyenful/3.png",
      "/img/truyenful/4.png",
      "/img/truyenful/5.png"
    ],
    technologies: ["React", "TypeScript", "Golang", "Gin", "MySQL", "JWT", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/winlhanphyo/truyenful",
    liveUrl: "https://truyenfull.vision/",
    featured: true,
    category: "Web Application",
    challenges: [
      "Implementing efficient search across large novel databases",
      "Creating smooth reading experience with chapter navigation",
      "Managing user reading progress and bookmarks",
      "Optimizing performance for large text content"
    ],
    solutions: [
      "Built full-text search with MySQL indexing and Golang optimization",
      "Implemented virtual scrolling and lazy loading for chapters",
      "Created user session management with JWT and reading progress tracking",
      "Added content caching and pagination for better performance"
    ],
    features: [
      "Multi-genre novel collection (romance, comic, superpower, swordplay)",
      "Advanced search and filtering system",
      "Light and dark theme switching",
      "User authentication and profiles",
      "Reading progress tracking",
      "Bookmark and favorites system",
      "Chapter navigation and history",
      "Responsive reading interface",
      "Genre-based novel recommendations",
      "Mobile-optimized reading experience"
    ],
    duration: "5 months",
    role: "Full-Stack Developer"
  },
  {
    id: 3,
    title: "DMMBoost",
    description: "A comprehensive digital marketing and e-commerce solution integrating Line messaging platform with Shopify online store. Features rich menu creation, automated customer engagement, and seamless payment processing.",
    longDescription: "DMMBoost is an innovative digital marketing and e-commerce platform that bridges social commerce with traditional online retail. The system integrates Line messaging platform for customer engagement through rich menus and automated responses, while providing a full-featured Shopify store for online sales. Built with React and Vue.js for dynamic user interfaces, Laravel for robust backend API development, and MySQL for reliable data management. Features Stripe payment integration for secure transactions and Line Platform APIs for social commerce functionality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "Vue.js", "Laravel", "MySQL", "Shopify API", "Line Platform", "Stripe", "PHP", "Redis"],
    githubUrl: "https://github.com/winlhanphyo/dmmboost",
    liveUrl: "https://dmmboost-demo.vercel.app",
    featured: false,
    category: "Full-Stack",
    challenges: [
      "Integrating multiple platforms (Line, Shopify, Stripe) seamlessly",
      "Creating responsive rich menus for Line messaging platform",
      "Managing complex customer journey across different touchpoints",
      "Synchronizing inventory and orders between platforms"
    ],
    solutions: [
      "Built unified API layer with Laravel to connect all platforms",
      "Developed dynamic rich menu generator with Vue.js components",
      "Implemented comprehensive webhook system for real-time updates",
      "Created automated synchronization system for inventory management"
    ],
    features: [
      "Line rich menu creation and management",
      "Shopify store integration and customization",
      "Automated customer engagement workflows",
      "Stripe payment processing integration",
      "Multi-platform inventory synchronization",
      "Customer analytics and tracking",
      "Order management across platforms",
      "Responsive admin dashboard",
      "Real-time notifications and updates",
      "Social commerce optimization"
    ],
    duration: "6 months",
    role: "Full-Stack Developer"
  },
  {
    id: 4,
    title: "FerryApp",
    description: "A real-time ferry tracking mobile application for employees and drivers with live location updates, route management, and automated arrival notifications. Features GPS tracking, role-based access, and comprehensive route administration.",
    longDescription: "FerryApp is a comprehensive ferry transportation management system built with React Native that provides real-time tracking and management capabilities for employee ferry services. The application enables employees to track nearby ferries, view routes, and receive arrival notifications at their bus stops. Drivers can log in to share their location, while HR personnel manage ferry routes and bus stop coordinates. Built with React Native for cross-platform mobile experience, NestJS for robust backend API, MySQL for reliable data storage, Socket.io for real-time location updates, and Mapbox for interactive mapping. The system evolved from driver phone-based location sharing to GPS device integration for enhanced accuracy.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    technologies: ["React Native", "NestJS", "MySQL", "Socket.io", "Mapbox", "GPS Integration", "TypeScript", "JWT"],
    githubUrl: "https://github.com/winlhanphyo/ferryapp",
    liveUrl: "https://ferryapp-demo.vercel.app",
    featured: false,
    category: "Mobile Application",
    challenges: [
      "Implementing real-time location tracking with high accuracy",
      "Managing multiple user roles (employees, drivers, HR) with different permissions",
      "Creating efficient geofencing for bus stop arrival notifications",
      "Transitioning from phone-based to GPS device location tracking"
    ],
    solutions: [
      "Integrated Socket.io for real-time location broadcasting and GPS device connectivity",
      "Implemented role-based authentication system with NestJS and JWT",
      "Built geofencing algorithm using Mapbox SDK for precise arrival detection",
      "Developed modular location service supporting both phone and GPS device inputs"
    ],
    features: [
      "Real-time ferry location tracking",
      "Interactive route visualization with Mapbox",
      "Automated bus stop arrival notifications",
      "Multi-role authentication (Employee, Driver, HR)",
      "Ferry route and bus stop management",
      "GPS coordinate administration for HR",
      "Live location broadcasting via Socket.io",
      "Cross-platform mobile application",
      "GPS device integration for accurate tracking",
      "Geofencing and proximity alerts"
    ],
    duration: "8 months",
    role: "Mobile App Developer"
  },
  {
    id: 5,
    title: "Chatbot Platform",
    description: "A versatile chatbot platform that allows website owners to integrate intelligent chatbots into their sites. Features token-based authentication, multi-site deployment, and real-time messaging capabilities.",
    longDescription: "A comprehensive chatbot platform built with Laravel that enables businesses to deploy intelligent chatbots across multiple websites. The platform features a centralized admin dashboard for user management and token generation, allowing website owners to easily integrate chatbots into their sites using secure API tokens. Built with Laravel for robust backend functionality, JavaScript for dynamic frontend interactions, MySQL for reliable data storage, and Socket.io for real-time messaging capabilities. The system includes role-based access control with admin and user roles, where admins can create user accounts, generate deployment tokens, and manage chatbot configurations across different client websites.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    ],
    technologies: ["Laravel", "JavaScript", "MySQL", "Socket.io", "PHP", "HTML/CSS", "REST API", "JWT"],
    githubUrl: "https://github.com/winlhanphyo/chatbot-platform",
    liveUrl: "https://chatbot-demo.vercel.app",
    featured: true,
    category: "Full-Stack",
    challenges: [
      "Creating scalable multi-tenant chatbot system for different websites",
      "Implementing secure token-based authentication for third-party integration",
      "Managing real-time messaging across multiple client sites simultaneously",
      "Designing flexible chatbot configuration system for various use cases"
    ],
    solutions: [
      "Built multi-tenant architecture with Laravel for isolated client data",
      "Implemented JWT-based token system for secure API access and site integration",
      "Used Socket.io with namespace isolation for real-time messaging per client",
      "Created modular chatbot engine with configurable responses and workflows"
    ],
    features: [
      "Multi-site chatbot deployment system",
      "Token-based authentication for website integration",
      "Real-time messaging with Socket.io",
      "Admin dashboard for user and chatbot management",
      "Role-based access control (Admin, User)",
      "Secure API token generation and management",
      "Cross-website chatbot embedding",
      "Customizable chatbot responses and flows",
      "Analytics and conversation tracking",
      "Responsive admin panel and chat interface"
    ],
    duration: "5 months",
    role: "Full-Stack Developer"
  },
  {
    id: 6,
    title: "Monomane",
    description: "An automated Twitter bot platform that generates and posts content with custom text overlays on images using AI and image processing capabilities.",
    longDescription: "Monomane is an innovative Twitter automation platform built with Angular frontend and Python Flask backend. The application leverages Firestore for data storage and integrates with Twitter API for automated posting. Using Pillow Python plugin for advanced image processing, the platform can dynamically add custom text overlays to images before posting them to Twitter accounts. The system is designed for content creators and social media managers who need automated, visually appealing Twitter content generation.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    ],
    technologies: ["Angular", "Python", "Flask", "Firestore", "Material Design", "Pillow", "Twitter API", "TypeScript"],
    githubUrl: "https://github.com/winlhanphyo/monomane",
    liveUrl: "https://monomane.web.app",
    featured: true,
    category: "Full-Stack",
    challenges: [
      "Integrating Twitter API with proper authentication and rate limiting",
      "Implementing dynamic text overlay on images with proper positioning",
      "Managing asynchronous image processing and social media posting",
      "Creating user-friendly interface for non-technical content creators"
    ],
    solutions: [
      "Built robust Twitter API wrapper with OAuth 2.0 authentication",
      "Developed custom image processing pipeline using Pillow with configurable text styles",
      "Implemented queue system for batch processing and scheduled posts",
      "Created intuitive Angular Material UI with real-time preview functionality"
    ],
    features: [
      "Automated Twitter text and image posting",
      "Dynamic text overlay generation on images",
      "Customizable font styles, colors, and positioning",
      "Scheduled posting with queue management",
      "Real-time preview of generated content",
      "Twitter account management and analytics",
      "Template system for consistent branding",
      "Bulk image processing capabilities",
      "Firestore integration for data persistence",
      "Responsive Material Design interface"
    ],
    duration: "3 months",
    role: "Full-Stack Developer"
  },
  {
    id: 7,
    title: "Oscar",
    description: "An online art marketplace for selling painting artworks with comprehensive admin and user management. Features category organization, product management, video content, and secure Stripe payment processing.",
    longDescription: "Oscar is a sophisticated online art marketplace built with the MERN stack that connects artists and art enthusiasts. The platform features a dual-interface system with comprehensive admin capabilities for managing categories, products, and video content, while providing users with an intuitive browsing and purchasing experience. Built with React for a dynamic frontend experience, Node.js with Express for robust backend API development, and MongoDB for flexible data storage. Integrates Stripe for secure payment processing, enabling artists to sell their paintings online with professional e-commerce functionality.",
    image: "/img/oscar/1.png",
    gallery: [
      "/img/oscar/2.png",
      "/img/oscar/3.png",
      "/img/oscar/4.png",
      "/img/oscar/6.png"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JavaScript", "HTML/CSS", "REST API"],
    githubUrl: "https://github.com/winlhanphyo/Oscar",
    liveUrl: "https://oscar-art.vercel.app",
    featured: true,
    category: "E-Commerce",
    challenges: [
      "Creating intuitive art categorization and browsing system",
      "Implementing secure payment processing for high-value art pieces",
      "Managing large image uploads and optimization for artwork display",
      "Building comprehensive admin panel for content and order management"
    ],
    solutions: [
      "Developed flexible category hierarchy system with MongoDB collections",
      "Integrated Stripe with secure webhook handling for payment confirmation",
      "Implemented image compression and CDN integration for optimal loading",
      "Created role-based admin dashboard with full CRUD operations"
    ],
    features: [
      "Dual-interface system (Admin and User)",
      "Art category creation and management",
      "Product catalog with detailed artwork information",
      "Video content management for artist portfolios",
      "Secure Stripe payment integration",
      "User authentication and profile management",
      "Shopping cart and checkout functionality",
      "Order tracking and management",
      "Responsive design for all devices",
      "Image optimization and gallery display"
    ],
    duration: "4 months",
    role: "Full-Stack Developer"
  },
  {
    id: 8,
    title: "Omnibus",
    description: "A digital advertising platform for Japanese bus TV networks where users can submit advertising videos for review and payment. Features admin approval workflow, video management, and advertising fee processing.",
    longDescription: "Omnibus is a specialized digital advertising platform designed for the Japanese transportation advertising market, specifically targeting bus TV networks. The platform enables businesses and advertisers to submit their promotional videos for display on bus television systems across Japan. Built with React for a streamlined user interface, the system features a comprehensive admin review process where submitted videos are evaluated for approval or rejection. Users can upload their advertising content, pay advertising fees, and track the status of their submissions through an intuitive dashboard.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Video Processing", "Payment Gateway", "REST API"],
    githubUrl: "https://github.com/winlhanphyo/omnibus",
    liveUrl: "https://omnibus-ads.vercel.app",
    featured: false,
    category: "Digital Advertising",
    challenges: [
      "Creating efficient video upload and processing system",
      "Implementing approval workflow for admin review process",
      "Managing video file storage and streaming capabilities",
      "Integrating payment processing for advertising fees"
    ],
    solutions: [
      "Built robust video upload system with progress tracking and validation",
      "Developed admin dashboard with approve/reject workflow and status tracking",
      "Implemented video compression and cloud storage for efficient delivery",
      "Integrated secure payment gateway for advertising fee collection"
    ],
    features: [
      "Video advertisement submission system",
      "Admin approval and rejection workflow",
      "User dashboard for submission tracking",
      "Video upload with progress indicators",
      "Advertising fee payment processing",
      "Admin panel for content review",
      "Video format validation and processing",
      "Status notifications for users",
      "Responsive design for mobile and desktop",
      "Japanese market-focused interface"
    ],
    duration: "3 months",
    role: "Frontend Developer"
  },
  {
    id: 9,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations, dark mode support, and comprehensive project showcase.",
    longDescription: "A contemporary portfolio website showcasing development skills and projects with a focus on user experience and performance. Built with React and TypeScript for type safety and maintainability, styled with Tailwind CSS for rapid development and consistent design, and enhanced with Framer Motion for smooth animations and transitions. Features a fully responsive design, dark/light mode toggle, project detail pages with React Router, and optimized performance for fast loading times.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3847093d9d40?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "React Router", "React Icons"],
    githubUrl: "https://github.com/winlhanphyo/portfolio",
    liveUrl: "https://winlhanphyo.vercel.app",
    featured: false,
    category: "Portfolio",
    challenges: [
      "Creating smooth page transitions and animations",
      "Implementing responsive design across all device sizes",
      "Optimizing performance for fast loading times",
      "Building interactive project showcase with detailed pages"
    ],
    solutions: [
      "Used Framer Motion for seamless animations and page transitions",
      "Implemented mobile-first responsive design with Tailwind CSS",
      "Added code splitting, lazy loading, and image optimization",
      "Created dynamic routing system with React Router for project details"
    ],
    features: [
      "Fully responsive design for all devices",
      "Dark and light mode toggle",
      "Smooth scrolling and page animations",
      "Interactive project showcase",
      "Project detail pages with routing",
      "Contact form with validation",
      "Skills section with technology icons",
      "Professional hero section with profile",
      "SEO optimization and fast loading",
      "Accessibility compliance"
    ],
    duration: "2 months",
    role: "Frontend Developer"
  }
]

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}
