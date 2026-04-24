import {
  Code,
  User,
  Mail,
  Video,
  Award,
  BrainCircuit,
  Terminal,
  Server,
  Activity,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  icon: any;
  video?: string;
  gallery?: string[];
  presentation?: string[];
}
export interface Achievement {
  id: number;
  title: string;
  event: string;
  description: string;
  icon: any;
  gallery?: string[];
}

export type Experience =
  {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string[];
    icon: any;
  };
certifications: [
  {
    id: 1,
    title:
      "Linux Unhatched Certification",
    issuer:
      "Cisco Networking Academy",
    date: "2024",
    icon: Award,
    gallery: [
      "/cisco-cert.jpg",
    ], // 👈 حطينا الصورة هون
  },
];

export const portfolioData =
  {
    personal: {
      name: "Eng. Tareq Shawabkeh",
      title:
        "Computer Engineer & AI Systems Builder",
      bio: "I build end-to-end intelligent systems by developing machine learning and computer vision models and integrating them into scalable backend architectures and real-time pipelines. From model development to deployment — I engineer complete, production-ready solutions.",
      email:
        "tareqshawabkehwork@gmail.com",
    },
    socials: [
      {
        label:
          "GitHub",
        url: "https://github.com/TareqAlshawabkeh",
        icon: Code,
      },
      {
        label:
          "LinkedIn",
        url: "https://www.linkedin.com/in/tareq-shawabkeh-1a8ab1292/?skipRedirect=true",
        icon: User,
      },
      {
        label:
          "YouTube",
        url: "https://www.youtube.com/@Eng.TareqShawabkeh",
        icon: Video,
      },
      {
        label:
          "Email",
        url: "mailto:tareqshawabkehwork@gmail.com",
        icon: Mail,
      },
    ],
    certifications:
      [
        {
          id: 1,
          title:
            "Artificial Intelligence",
          issuer:
            "HTUx - Al Hussein Technical University",
          date: "2025", // تقدر تعدل السنة إذا مختلفة
          icon: Award,
          gallery: [
            "/AI/htux-ai.jpg",
          ], // 👈 سمي صورة الذكاء الاصطناعي بهذا الاسم وحطها بمجلد public
        },
        {
          id: 2,
          title:
            "Business Analyst Track",
          issuer:
            "HTUx - Al Hussein Technical University",
          date: "2025",
          icon: Award,
          gallery: [
            "/AI/htux-ba.jpg",
          ], // 👈 سمي صورة تحليل الأعمال بهذا الاسم وحطها بمجلد public
        },
        // إذا عندك شهادة الـ Cisco القديمة وبدك تخليها، بتقدر تضيفها هون:

        {
          id: 3,
          title:
            "Linux Unhatched Certification",
          issuer:
            "Cisco Networking Academy",
          date: "2025",
          icon: Award,
          gallery: [
            "/cisco-cert.jpg",
          ],
        },
      ],
    skills: {
      programming: [
        "Python",
        "Java",
        "C++",
        "Dart",
        "SQL",
      ],
      ai_and_data: [
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "YOLOv8",
        "Computer Vision",
      ],
      backend_and_systems:
        [
          "FastAPI",
          "Spring Boot",
          "TCP/IP Sockets",
          "WebSockets",
          "Multithreading",
          "Async Processing",
        ],
      infrastructure:
        [
          "Docker",
          "Linux (Ubuntu)",
          "Git",
          "PostgreSQL",
          "SQLite",
        ],
    },
    achievements: [
      {
        id: 1,
        title:
          "First Place Winner 🥇",
        event:
          "NTP 2025 National Competition",
        description:
          "Ranked 1st out of 400+ projects in Jordan (Financial Services Track).\n  Recognized for seamlessly integrating AI into a real-time automated trading system.",
        icon: Award,
        // أضفنا صور التتويج هنا 👇
        gallery: [
          "/ntp-gallery/award1.jpeg",
          "/ntp-gallery/award11.jpg",
          "/ntp-gallery/award2.jpg",
          "/ntp-gallery/award3.jpeg",
          "/ntp-gallery/award4.jpg",
        ],
      },
      {
        id: 2,
        title:
          "Top 10 Graduation Projects",
        event:
          "University of Jordan",
        description:
          "Selected among the top 10 projects in the School of (Engineering & IT) for building a production-level, multithreaded AI platform.",
        icon: GraduationCap,
        gallery: [
          "/top10-gallery/1.jpg", // ضع مسار صورتك هنا
        ], // ADD THIS
      },
    ],
    experience: [
      {
        id: 1,
        role: "Software Engineering Intern",
        company:
          "Link Business Solutions Company",
        date: "Summer 2025",
        description:
          [
            "Integrated frontend components with server-side logic for enterprise systems (e.g., FX deals Backend Project).",
            "Participated in transforming UI designs into functional, interactive web pages.",
            "Gained exposure to real production workflows, requirement changes, and team-based deployment.",
          ],
        icon: Briefcase,
      },
      {
        id: 2,
        role: "Teaching Assistant - Python Programming Lab",
        company:
          "University of Jordan",
        date: "2025 - 2026",
        description:
          [
            "Assisted undergraduate students with programming concepts, logic formulation, and syntax.",
            "Guided problem-solving approaches and debugged complex runtime errors.",
          ],
        icon: Terminal,
      },
    ] as Experience[],
    projects: [
      {
        id: 1,
        title:
          "AI-Based Automated Trading System",
        role: "Lead Engineer",
        date: "Oct 2024 - May 2025",
        description:
          "A real-time cryptocurrency trading platform. Architected the FastAPI backend with async processing, WebSockets, and thread-based trading loops. Integrated an LSTM machine learning model that achieved a 161% profit ratio in back-testing.",
        tech: [
          "FastAPI",
          "Python",
          "TensorFlow (LSTM)",
          "Flutter",
          "WebSockets",
          "SQLite",
        ],
        github:
          "https://github.com",
        live: "",
        icon: Activity,
        // أضفنا هذه البيانات الجديدة هنا 👇
        gallery: [
          "/trading-project/1.jpeg",
          "/trading-project/2.jpeg",
          "/trading-project/3.jpeg", // أضف أسماء صورك هنا
          "/trading-project/4.jpeg", // أضف أسماء صورك هنا
          "/trading-project/5.jpeg", // أضف أسماء صورك هنا
          "/trading-project/6.jpeg", // أضف أسماء صورك هنا
          "/trading-project/7.jpeg", // أضف أسماء صورك هنا
          "/trading-project/8.jpeg", // أضف أسماء صورك هنا
          "/trading-project/9.jpeg", // أضف أسماء صورك هنا
          "/trading-project/10.jpeg", // أضف أسماء صورك هنا
          "/trading-project/11.jpeg", // أضف أسماء صورك هنا
          "/trading-project/12.jpeg", // أضف أسماء صورك هنا
          "/trading-project/13.jpeg", // أضف أسماء صورك هنا
          "/trading-project/14.jpeg", // أضف أسماء صورك هنا
          "/trading-project/15.jpeg", // أضف أسماء صورك هنا
        ],
        presentation:
          [
            "/trading-project/result-0.jpg",
            "/trading-project/result-1.jpg",
            "/trading-project/result-2.jpg",
            "/trading-project/result-3.jpg",
            "/trading-project/result-4.jpg",
            "/trading-project/result-5.jpg",
            "/trading-project/result-6.jpg",
            "/trading-project/result-7.jpg",
          ],
        video:
          "/demo-video.mp4", // مسار الفيديو في مجلد public
      },

      {
        id: 2,
        title:
          "Aerial Image Object Detection Pipeline",
        role: "Computer Vision Engineer",
        date: "April 2026",
        description:
          "Engineered an end-to-end CV pipeline using YOLOv8 Nano to detect vehicles in high-resolution, top-down aerial imagery. Achieved 99.0% mAP@50. Built a dynamic data ingestion module to parse PASCAL VOC annotations.",
        tech: [
          "Python",
          "YOLOv8",
          "Computer Vision",
          "Data Pipelines",
        ],
        github:
          "https://github.com",
        live: "",
        icon: BrainCircuit,
      },
      {
        id: 3,
        title:
          "FX Deals Importer System",
        role: "Backend Engineer",
        date: "2026",
        description:
          "Designed a layered enterprise backend system for ingesting and validating foreign exchange deals. Built REST APIs for real-time submission and bulk CSV import, preventing duplicates.",
        tech: [
          "Java 21",
          "Spring Boot",
          "PostgreSQL",
          "Docker",
          "Swagger",
        ],
        github:
          "https://github.com",
        live: "",
        icon: Server,
      },
      {
        id: 4,
        title:
          "Client-Server Medical Consultation Platform",
        role: "Network Programmer",
        date: "Spring 2024",
        description:
          "Developed a multithreaded Java backend simulating a real-time medical consultation system. Implemented TCP/IP sockets, concurrent server handling, and FIFO ticket queue management.",
        tech: [
          "Java",
          "TCP/IP Sockets",
          "Multithreading",
        ],
        github:
          "https://github.com",
        live: "",
        icon: Activity,
      },
    ] as Project[],
  };
