export const HEADER_CONTENT = {
  logo: "Xpertiverse",
  tagline: "Technology & IT Solutions",
  mainMenu: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ],
  buttonText: "Get Started",
};



import AiFinance from "../../assets/images/hero6.png";

export const HERO_CONTENT = {
  badge: "Launch Your Professional Tech Website.",
  heading1: "Transform Your",
  heading2: "Digital Future",
  description: "Combining expertise with the latest technology trends to create impactful results.",
  buttons: {
    primary: "Get Started",
    secondary: "Learn More",
  },
  image: AiFinance,
};



export const PERFORMANCE_TEXT = {
  heading: "Our Performance",
   heading1: "at a Glance",
  description:
    "Combining expertise with the latest technology trends to create impactful results.",
  stats: [
    { number: "350+", label: "Projects Completed" },
    { number: "250+", label: "Satisfied Clients" },
    { number: "95%", label: "Client Satisfaction" },
  ],
};

// src/data/projectsData.js

import techno1 from "../../assets/images/techno1.jpeg";
import techno2 from "../../assets/images/techno2.jpg";
import tech3 from "../../assets/images/tech3.jpeg";
import tech4 from "../../assets/images/Launching.jfif";

export const projectsData = [
  {
    tag: "AI",
    title: "AI Blog Generator",
    desc: "Generates blog posts automatically using AI.",
    img: techno1,
    category: "AI",
    rating: 5,
  },
  {
    tag: "Mobile App",
    title: "FixIt App",
    desc: "An app that manages maintenance requests efficiently.",
    img: techno2,
    category: "Mobile Apps",
    rating: 4,
  },
  {
    tag: "Finance",
    title: "Crypto Tracker",
    desc: "Track cryptocurrency prices and trends in real-time.",
    img: tech3,
    category: "Websites",
    rating: 5,
  },
   {
    tag: "Finance",
    title: "Crypto Tracker",
    desc: "Track cryptocurrency prices and trends in real-time.",
    img: tech4,
    category: "Automation",
    rating: 5,
  },
  // Add more projects here
];




import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaPaintBrush, 
  FaCloud, 
  FaLock 
} from "react-icons/fa";

export const SERVICES_CONTENT = {
  sectionTag: "Our Services",
  heading: "Smart solutions",
  heading1: "for modern businesses.",
  description:
    "From advanced software development to innovative digital solutions, our team delivers results that help businesses grow.",
  cards: [
    {
      title: "Custom Software Development",
      heading1: "Custom Software",
      heading2: " Development",
      desc: "Tailor-made software solutions designed to meet your unique business goals.",
      icon: FaLaptopCode,
      details: {
        longDesc:
          "We provide end-to-end custom software development services, ensuring that every application is aligned with your business objectives. Our solutions are scalable, secure, and user-friendly.",
        features: [
          "Requirement analysis & project planning",
          "Custom web and desktop software",
          "Integration with existing systems",
          "Maintenance & support"
        ],
        benefits: [
          "Streamline operations",
          "Increase productivity",
          "Improve business efficiency"
        ],
        tools: ["React.js, Node.js, Express", "PostgreSQL, MongoDB", "Docker, AWS, Azure"]
      }
    },
    {
      title: "Web & Mobile App Development",
       heading1: "Web & Mobile",
      heading2: " App Development",
      desc: "High-performance, user-friendly websites and mobile apps.",
      icon: FaMobileAlt,
      details: {
        longDesc:
          "We build responsive websites and mobile applications optimized for performance and user experience. Our apps are scalable and designed to drive engagement and conversions.",
        features: [
          "Cross-platform mobile apps",
          "Responsive web design",
          "API integration",
          "Performance optimization"
        ],
        benefits: [
          "Enhanced user experience",
          "Faster time-to-market",
          "Increased customer engagement"
        ],
        tools: ["React Native, Flutter", "Next.js, Tailwind CSS", "Firebase, AWS"]
      }
    },
    {
      title: "IT Consulting & Strategy",
       heading1: "IT Consulting &",
      heading2: " Strategy",
      desc: "Expert guidance to optimize your IT infrastructure and workflows.",
      icon: FaChartLine,
      details: {
        longDesc:
          "Our IT consulting services help businesses optimize their technology strategies, improve workflows, and implement best practices for efficient IT operations.",
        features: [
          "IT strategy planning",
          "Infrastructure assessment",
          "Cloud adoption guidance",
          "Security audits"
        ],
        benefits: [
          "Reduced operational costs",
          "Optimized IT workflows",
          "Improved decision-making"
        ],
        tools: ["Jira, Confluence", "AWS, Azure", "Microsoft 365"]
      }
    },
    {
      title: "Web Design & UX",
       heading1: "Web Design &",
      heading2: " UX",
      desc: "Modern, responsive, and SEO-friendly web design solutions.",
      icon: FaPaintBrush,
      details: {
        longDesc:
          "We create visually appealing, intuitive, and SEO-friendly designs that enhance user experience and drive conversions. Every design is crafted to reflect your brand identity.",
        features: [
          "UI/UX design",
          "Prototyping & wireframing",
          "Responsive design",
          "SEO-friendly layouts"
        ],
        benefits: [
          "Improved user engagement",
          "Higher conversion rates",
          "Consistent brand image"
        ],
        tools: ["Figma, Adobe XD", "Photoshop, Illustrator", "HTML5, CSS3"]
      }
    },
    {
      title: "Cloud Solutions & DevOps",
       heading1: "Cloud Computing &",
      heading2: " DevOps",
      desc: "Secure, scalable cloud infrastructures with automated deployment pipelines.",
      icon: FaCloud,
      details: {
        longDesc:
          "We offer cloud architecture and DevOps services to build scalable, secure, and reliable cloud infrastructures, enabling faster deployment and monitoring of applications.",
        features: [
          "Cloud migration & architecture",
          "CI/CD pipelines",
          "Infrastructure as code",
          "Monitoring & optimization"
        ],
        benefits: [
          "Scalable infrastructure",
          "Faster deployment",
          "Reliable performance"
        ],
        tools: ["AWS, Azure, GCP", "Docker, Kubernetes", "Terraform, Jenkins"]
      }
    },
    {
      title: "Cybersecurity & Risk Management",
       heading1: "Cybersecurity &",
      heading2: " Risk Management",
      desc: "Advanced protection solutions to keep your digital assets secure.",
      icon: FaLock,
      details: {
        longDesc:
          "Our cybersecurity services protect businesses from potential threats, ensuring data integrity, confidentiality, and compliance with industry standards.",
        features: [
          "Vulnerability assessments",
          "Penetration testing",
          "Security monitoring",
          "Risk management planning"
        ],
        benefits: [
          "Protection from cyber threats",
          "Data privacy compliance",
          "Business continuity"
        ],
        tools: ["Splunk, Wireshark", "Nmap, Nessus", "ISO 27001 standards"]
      }
    }
  ]
};



export const TESTIMONIALS_CONTENT = {
  sectionTag: "Testimonials",
  heading: "Hear from our",
  heading1: "valued clients",

  testimonials: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "Rachel Purnama",
      role: "COO of InnovateHub",
         image: "/images/team1.jpg",
      rating: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team2.jpg",
      rating: 5,
    },
      {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "Rachel Purnama",
      role: "COO of InnovateHub",
         image: "/images/team3.webp",
      rating: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team4.webp",
      rating: 5,
    },
     {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      name: "David Kevin",
      role: "CEO TechWave Solutions",
         image: "/images/team2.jpg",
      rating: 5,
    },
  ],
};

export const SOLUTIONS_CONTENT = {
  leftFeatures: [
    {
      image: "/images/services3.png",
      title: "Innovation First",
      desc: "Constantly exploring new technologies",
    },
    {
      image: "/images/solution-logo.png",
      title: "Integrity & Trust",
      desc: "Building lasting partnerships with transparency.",
    },
  ],
  centerImage: "/images/solution.png",
  rightText: {
    heading: "Innovating the Future, One Solution at a Time",
    desc: "From advanced software development to robust cybersecurity",
  },
  sectionTitle: "Innovative Solutions for a Smarter Future",
};


export const TEAM_CONTENT = {
  sectionTag: "Our Team Work",
  heading: "Meet the Mind",
  heading1: "Behind the Scenes",
  description:
    "Our team is a group of passionate professionals dedicated to delivering cutting-edge technology solutions that empower your business growth.",

  teamMembers: [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      img: "/images/team1.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      img: "/images/team2.jpg",
    },
    {
      name: "David Carter",
      role: "Project Manager",
      img: "/images/team3.webp",
    },
    {
      name: "Olivia Martinez",
      role: "Data Scientist",
      img: "/images/team4.webp",
    },
      {
      name: "John Anderson",
      role: "CEO & Founder",
      img: "/images/team5.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      img: "/images/team9.avif",
    },
    {
      name: "David Carter",
      role: "Project Manager",
      img: "/images/team10.avif",
    },
  ],
};

// utils/constants/text.js

export const HERO_TECH_CONTENT = {
  sectionTag: "Technology Solutions",
  heading: "Your Trusted Partner in Technology \n and Innovation",
  description:
    "Innovative IT solutions to help your business grow, stay secure, and succeed in the digital era.",
  buttons: {
    primary: "Get Started",
    secondary: "Learn More",
  },
  stats: [
    { value: "350+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "10+", label: "Years of Experience" },
    { value: "39+", label: "Awards Won" },
  ],
};



export const BLOG_CONTENT = {
  heading: {
    preTitle: "Our Blog",
    title: "News & Articles",
  },
  posts: [
    {
      id: 1,
      category: "Uncategorized",
      date: "August 18, 2025",
      title: "The Benefits of Managed IT Services for Small Businesses",
      desc: "Launch your professional tech website. The Benefits of Managed IT Services for Small Businesses...",
      image: "/images/blog11.png",
    },
    {
      id: 2,
      category: "Uncategorized",
      date: "August 18, 2025",
      title: "Understanding Digital Transformation: A Complete Guide",
      desc: "Launch your professional tech website. Category 0 comment Lorem ipsum dolor sit amet...",
      image: "/images/testimonials.jpg",
    },
    {
      id: 3,
      category: "Uncategorized",
      date: "August 18, 2025",
      title: "Top 5 Cybersecurity Practices Every Company Should Implement",
      desc: "Launch your professional tech website. Category 0 comment Lorem ipsum dolor sit amet...",
      image: "/images/blog3.avif",
    },
  ],
};


// utils/constants/newsletter.js

export const NEWSLETTER_CONTENT = {
  heading: "Get in Touch",
  heading1: "with Xpertiverse",
  description:
    "Have questions, feedback, or want to discuss a project? Reach out to our team and we’ll get back to you promptly.",
  buttonText: "Contact Us",
};


// utils/constants/footer.js

export const FOOTER_CONTENT = {
  logo: "Xpertiverse",
  tagline: "Xpertiverse - Technology and IT Solutions",
  description:
    "Xpertiverse is a trusted Technology & IT Solutions provider, helping businesses grow with innovative, secure, and scalable digital solutions.",
  copyright: "CopyRight 2025 By Enative",
  navigation: ["Home", "About", "Services", "Portfolio"],
  quickLinks: ["Pages", "FAQs", "Contact", "Blog"],
  policies: ["Terms and Services", "Privacy Policy", "Cookie Policy"],
};

