import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanjiv Kumaran Mohanraj",
  initials: "SKM",
  url: "https://sanjiv27.github.io",
  location: "Amherst",
  locationLink: "https://www.google.com/maps/place/amherst",
  description:
    "CS grad student. Experienced Full Stack Developer. Research interests in AI Alignment & Security",
  summary:
    "Write your personal story here. This appears in the expandable 'About' section on your homepage. Talk about your background, interests, journey, and what drives you. Make it personal and engaging - this is where visitors get to know the real you.\n\nYou can include multiple paragraphs, your hobbies, what you're currently working on, or anything else that represents who you are.",
  avatarUrl: "/me.jpeg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "smohanraj@umass.edu",
    tel: "+1-413-430-9032",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sanjiv27",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sanjivkumaran",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:sanjivkumaran.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "BNY Mellon",
      href: "https://www.bny.com/",
      badges: [],
      location: "Chennai, India",
      title: "Associate",
      logoUrl: "bnymellon.png",
      start: "July 2023",
      end: "August 2025", // or "Month Year"
      bullets: [
        "General Role: Built 4 command centers for critical ETF applications with neat UIs for querying and manipulating operational data; served as SME for 2 major ETF applications; developed AI tools to improve team efficiency; led cross-team efforts to resolve over 50 production incidents; won multiple AI hackathons.",
        "TransformX: Built a data transformation framework with a React UI and Kotlin DataFrames, enabling configurable workflows for multiple file formats via a custom DSL built with ANTLR; automated ingestion pipelines integrating databases and Amazon S3 and persisted transformation metadata in MongoDB.",
        "Security Master: Pioneered a security exception clearance platform simplifying ETF basket creation for 50+ ETF issuers; reduced application load times by 10× through optimized SQL procedures, Angular rendering behavior, and in-memory caching.",
        "Distributed Java Cache Library: Developed a generic distributed Java cache library using Hazelcast with a unified CRUD interface, reducing boilerplate code by 60% and adopted by six teams as a Maven dependency."
      ],
    },
    {
      company: "Oracle",
      href: "https://www.oracle.com/",
      badges: [],
      location: "Chennai, India",
      title: "Summer Intern",
      logoUrl: "oracle.png",
      start: "June 2022",
      end: "July 2022", // or "Month Year"
      bullets: [
        "Developed a context-aware multilingual AI chatbot; containerized services using Docker and integrated deployments across Slack and Microsoft Teams, reducing manual HR intervention by approximately 70% through automated intent handling and Python-based testing."
      ],
    },
    // Add more work experiences here
  ],
  education: [
    {
      school: "University of Massachusetts - Amherst",
      href: "https://www.umass.edu/",
      degree: "Masters, Computer Science",
      logoUrl: "umass.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "National Institute of Technology - Tiruchirappalli",
      href: "https://www.nitt.edu/",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      logoUrl: "nitt.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "UniTrade – Campus Marketplace Platform",
      href: "https://github.com/sanjiv27/unitrade",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a campus-exclusive full-stack marketplace with secure JWT-based authentication and role-based access control (RBAC); enabled real-time auctions, messaging, and notifications via Socket.IO, AI-powered semantic search using Google Gemini, and scalable REST APIs with admin moderation to ensure platform safety and reliability.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Socket.IO",
        "JWT",
        "Google Gemini",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanjiv27/unitrade",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Asset Recommendation System",
      href: "https://github.com/sanjiv27/asset-recommendation",
      dates: "2024",
      active: true,
      description:
        "Built a hybrid ML recommendation engine combining collaborative filtering (SVD), content-based, and demographic analysis. Implemented distributed microservices with FastAPI, Kafka, PostgreSQL achieving under 100ms latency for 1K+ users. Features real-time retraining, model versioning, and containerized deployment.",
      technologies: [
        "Python",
        "FastAPI",
        "Kafka",
        "PostgreSQL",
        "Docker",
        "Scikit-learn",
        "Streamlit",
        "SVD",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanjiv27/asset-recommendation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "OverTool – Slowdown Attacks on MCP-based LLM agents",
      href: "https://github.com/sanjiv27/overtool",
      dates: "2024",
      active: true,
      description:
        "Led a 3-member team to design and benchmark adversarial Slowdown attacks on a full-stack Python/FastMCP tool-using agent pipeline; crafted long-horizon decoy tool-call chains to stress test the request pipeline and context window, causing 3× higher response latency and 20% lower task completion.",
      technologies: [
        "Python",
        "PyTorch",
        "FastAPI",
        "FastMCP",
        "LLM",
        "Adversarial ML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanjiv27/overtool",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Electoral Roll Family Tree System",
      href: "https://github.com/sanjiv27/electoral-family-tree",
      dates: "2023 - 2024",
      active: false,
      description:
        "Built a scalable system to generate detailed family trees from electoral roll data, using OpenCV and Tesseract for extraction, Apache Spark for large-scale processing, and Neo4j for modeling complex relationships.",
      technologies: [
        "Apache Spark",
        "Tesseract",
        "OpenCV",
        "Neo4j",
        "Python",
        "OCR",
        "Graph Database",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanjiv27/electoral-family-tree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
