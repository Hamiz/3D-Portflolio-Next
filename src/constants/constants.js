import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  News,
  TravellMob,
  Internship,
  Shoe,
  GymLiftIt,
  threejs,
  nextjs,
  express,
  TravelWebApp,
  FlexVogue
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "3D Shoe Ecommerce",
    description:
      "A real-time collaborative web application built with Next.js and Node.js, featuring interactive 3D models of shoes.",
    features: [
      "Users can create a room and invite others to join using a unique room code.",
      "Users can draw on the whiteboard, and changes will be reflected in real-time to all participants.",
      "Users can view and interact with 3D models of shoes for a more realistic shopping experience."
    ],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: Shoe,
    source_code_link: "https://github.com/Hamiz/3D-Shoes-Ecommerce-Landing-Page",
    live_link: "/https://github.com/Hamiz/3D-Shoes-Ecommerce-Landing-Page",
  },
  {
    name: "News Website",
    description:
      "A modern news web app built with Next.js and Tailwind CSS, featuring dynamic categories, interactive UI, and smooth animations. Stay updated with the latest global headlines, tech trends, politics, and sports news—all in a sleek and responsive design. ",
    features: [
      "Dynamic news categories such as World, Tech, Politics, Sports, and more.",
      "Real-time news updates fetched from an API (e.g., NewsAPI, NY Times API).",
      "Search functionality to find news articles by keyword or topic.",
      "Bookmark articles for later reading.",
      "Dark mode and customizable UI settings.",
      "Smooth animations for a modern and interactive experience.",
      "Responsive design optimized for desktop, tablet, and mobile devices.",
      "Lazy loading for improved performance and faster loading times.",
      "PWA (Progressive Web App) support for offline reading.",
    ],
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
      name: "ExpressJs",
      color: "red-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "NextJs",
        color: "orange-text-gradient",
      },
    ],
    image: News,
    source_code_link: "https://github.com/Hamiz/NewshubWeb",
    live_link: "https://newshuborg.netlify.app/",
  },
  {
    name: "Internship Platform",
    description: "The Internship Platform is a web-based educational technology system designed to connect students with internship opportunities while allowing instructors and organizations to manage and post internships.",
    features: [
      "Internship Management: Students can browse and apply for internships, while companies and mentors can post, edit, and remove listings.",
    ],
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: Internship,
    source_code_link: "https://github.com/Hamiz/Internship-Web-App",
    live_link: "https://intershippakistan.netlify.app/",
  },
  {
    name: "Journey Mobile App",
    description: "Journey Mobile App is a cross-platform travel booking app built with React Native, Node.js, and Express.js, using MySQL for secure data management. It enables users to browse destinations, book trips, and manage itineraries with a seamless experience powered by a RESTful API and a responsive Bootstrap CSS design.",
    features: [
      "Cross-platform support (iOS & Android) with React Native",
"Secure authentication using Express.js & Node.js",
"RESTful API for smooth backend communication",
"Travel planning & booking system",
"Real-time updates on trips and destinations",
"MySQL database management with XAMPP",
"Responsive UI with Bootstrap CSS",
    ],
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "Xamp",
        color: "white-text-gradient",
      },
      {
        name: "Bootsrap CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: TravellMob,
    source_code_link: "https://github.com/Hamiz/JourneyApp",
    live_link: "https://github.com/Hamiz/JourneyApp",
  },
  {
    name: "LiftIt Web App",
    description:
      "The LiftIt Web App is a full-stack eCommerce platform using React (TypeScript), Node.js + Express.js, and PostgreSQL. It enables users to browse and purchase gym accessories, clothing, and machines for men and women. Featuring Auth.js for secure authentication, a RESTful API, and real-time order tracking, it ensures a seamless and efficient shopping experience.",
    features: [
      "User Authentication: Secure login/signup using Auth.js (OAuth & JWT).",
"Product Catalog: Browse a variety of gym accessories, clothes, and machines for men and women.",
"Shopping Cart & Checkout: Add items to cart and complete purchases securely.",
"Payment Integration: Supports online payments via Razorpay or Stripe.",
"Order Management: Users can track their orders and view purchase history.",
"Admin Dashboard: Manage products, orders, and users efficiently.",
"Wishlist Feature: Save favorite gym products for future purchases.",
"Search & Filters: Advanced search and filtering options for better shopping experience.",
"Mobile-Friendly (PWA): Optimized for mobile and desktop users.",
    ],
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "AuthJs",
        color: "puple-text-gradient",
      },
    ],
    image: GymLiftIt,
    source_code_link: "https://github.com/Hamiz/Lift-it",
    live_link:
      "https://liftitgym.netlify.app/",
  },
  {
    name: "WanderLust Adventure",
    description:
      "WanderLust Adventure is a professionally designed front-end web interface tailored for a client's travel and adventure platform. The design ensures a visually engaging, responsive, and user-friendly experience, allowing visitors to explore various travel destinations, book tours, and access essential travel information seamlessly.",
    features: [
      "Modern UI/UX Design: Aesthetic and intuitive interface optimized for user engagement.",
"Fully Responsive: Ensures seamless performance across all devices and screen sizes.",
"Interactive Navigation: Smooth and dynamic navigation for an enhanced browsing experience.",
"Optimized Performance: Fast loading speeds with efficient code and asset management.",
"SEO-Friendly Structure: Designed to improve search engine visibility and reach.",
"Cross-Browser Compatibility: Functions seamlessly on all major web browsers.",
"Integration Ready: Easily adaptable for backend integration and API connectivity.",
    ],
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: TravelWebApp,
    source_code_link: "https://github.com/Hamiz/Travelling-Landing-Page-tlp",
    live_link: "https://tlp-hamiz.netlify.app/",
  },
  {
    name: "Flex Vogue Shopify",
    description:
      "Flex Vogue is a Shopify-based eCommerce platform showcasing expertise in CRM and customer engagement. It features a sleek, responsive storefront with secure payments, product management, order tracking, and personalized shopping experiences, optimizing both sales and customer relationships. ",
    features: [
      "Shopify-Powered Storefront with a modern and intuitive UI",
"CRM Integration for efficient customer interaction and management",
"Secure Payment Processing using Shopify built-in solutions",
"Product Catalog Management with easy additions, edits, and promotions",
"Order & Inventory Tracking for seamless business operations",
"Mobile-Optimized Design for a responsive shopping experience",
"SEO-Optimized Store to improve visibility and attract more customers",
    ],
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
    ],
    image: FlexVogue,
    live_link: "https://nq8n275zsxf3330a-92425650465.shopifypreview.com",
  },
];

export {
  services,
  technologies,
  projects,
};
