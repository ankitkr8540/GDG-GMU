import { IoSnow, IoSparkles, IoCode, IoGameController, IoCloud } from "react-icons/io5"
import { FaRocket } from "react-icons/fa"
export const events = [
  {
    id: 'GDG-Launch-2024',
    sem: "Fall 2024",
    date: "Dec 2, 2024",
    time: "6:00 PM - 8:00 PM",
    title: "GDG@GMU: Launch & Info Session!",
    description: "Join us for our first event of the club as we kick off the semester with exciting announcements, community updates.",
    icon: FaRocket,
    iconColor: "text-red-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
    highlights: [
      "2025 event calendar reveal",
      "Community spotlight presentations",
      "Interactive Q&A session",
      "Networking mixer",
    ],
    tags: ["Kickoff", "Community", "Networking"],
    location: "TBD",
    capacity: "100 attendees",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Kickoff%202025&dates=20250123T230000Z/202501"
  },

  {
    id: 'snowflake-social',
    date: "Dec 6, 2024",
    sem: "Fall 2024",
    time: "5:00 PM - 7:00 PM",
    title: "Collaboration with SOSA: Snowflake Social Winter Celebration",
    description: "A cozy, fun-filled winter social gathering featuring mocktails, finger foods, and light dancing. Join us for an intimate semester-end celebration designed to recognize SOSA members' achievements while connecting with alumni and community partners in a festive atmosphere.",
    icon: IoSnow, // Assuming you have a snow/winter icon
    iconColor: "text-blue-400",
    bgGradient: "from-blue-400/20 to-cyan-400/20",
    highlights: [
      "Collaboration with SOSA student organization",
      "Winter-themed mocktail bar with signature drinks",
      "Gourmet finger foods and desserts station",
      "Winter wonderland photo wall with props",
      "Corner Pocket games and activities",
      "Light dancing with DJ entertainment",
      "Recognition ceremonies and casual speeches",
      "Networking opportunities with alumni and partners",
      "Take-home goodie bags"
    ],
    tags: ["Collaboration", "Social", "Networking", "Celebration", "Winter", "Food", "Dancing"],
    location: "Side Pocket + Corner Pocket",
    capacity: "75 guests",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Snowflake%20Social%20Winter%20Celebration&dates=20241206T220000Z/20241207T000000Z"
  },
  {
    id: 'genai-workshop-1',
    date: "TBD",
    sem: "Spring 2025",
    time: "TBD", // Time needs to be specified
    title: "GenAI with Google Cloud Workshop 1 - Introduction to GenAI",
    description: "Join us for an introductory workshop on Generative AI with Google Cloud. This hands-on session will cover fundamental concepts of GenAI and practical applications using Google Cloud's tools and services. Perfect for beginners looking to understand the basics of generative AI technology.",
    icon: IoCloud, // Assuming you have a cloud icon
    iconColor: "text-blue-500",
    bgGradient: "from-blue-500/20 to-green-400/20",
    highlights: [
      "Introduction to Generative AI concepts",
      "Overview of Google Cloud's GenAI tools",
      "Hands-on exercises and demonstrations",
      "Interactive Q&A sessions",
      "Real-world use cases and applications",
      "Access to Google Cloud Skills Boost resources",
      "Networking opportunities with peers",
      "Certificate of completion"
    ],
    tags: ["Workshop", "Technical", "AI/ML", "Google Cloud", "Learning", "Hands-on"],
    location: "TBD", // Location needs to be specified
    capacity: "TBD", // Capacity needs to be specified
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GenAI%20with%20Google%20Cloud%20Workshop%201&dates=20241121T000000Z/20241121T020000Z",
    resourceLink: "https://www.cloudskillsboost.google/paths/118"
  },
  {
    id: 'genai-workshop-2',
    date: "TBD", // Assuming this is a week after Workshop 1
    sem: "Spring 2025",
    time: "TBD",
    title: "GenAI with Google Cloud Workshop 2 - Gemini for Google Cloud",
    description: "Dive deep into Google's Gemini model and its integration with Google Cloud. This workshop will explore the capabilities of Gemini, Google's most advanced AI model, and how to leverage it effectively in cloud applications. Learn about multimodal AI, advanced prompting techniques, and practical implementation strategies.",
    icon: IoSparkles, // Assuming you have a sparkles/AI icon
    iconColor: "text-purple-500",
    bgGradient: "from-purple-500/20 to-blue-400/20",
    highlights: [
      "Introduction to Google's Gemini model",
      "Understanding multimodal AI capabilities",
      "Hands-on experience with Gemini API",
      "Advanced prompting techniques",
      "Integration with Google Cloud services",
      "Real-world application scenarios",
      "Best practices for implementation",
      "Interactive coding exercises"
    ],
    tags: ["Workshop", "Technical", "Gemini", "Google Cloud", "AI/ML", "Advanced", "Hands-on"],
    location: "TBD",
    capacity: "TBD",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GenAI%20with%20Google%20Cloud%20Workshop%202%20-%20Gemini&dates=20241128T000000Z/20241128T020000Z",
    resourceLink: "https://www.cloudskillsboost.google/paths/236"
  },
  {
    id: 'genai-workshop-3',
    date: "TBD", // Assuming this is a week after Workshop 2
    sem: "Spring 2025",
    time: "TBD",
    title: "GenAI with Google Cloud Workshop 3 - GenAI for Developers",
    description: "An advanced, hands-on workshop designed specifically for developers working with Generative AI on Google Cloud. Learn to build, deploy, and scale GenAI applications using Google Cloud's developer tools and services. This session focuses on practical implementation, best coding practices, and real-world development scenarios.",
    icon: IoCode, // Assuming you have a code icon
    iconColor: "text-green-500",
    bgGradient: "from-green-500/20 to-blue-400/20",
    highlights: [
      "Building GenAI applications from scratch",
      "Working with Google Cloud's AI/ML APIs",
      "Implementation of LLMs in applications",
      "Vertex AI integration and deployment",
      "Performance optimization techniques",
      "Security best practices for AI apps",
      "Scalability considerations",
      "Hands-on coding exercises and projects"
    ],
    tags: ["Workshop", "Technical", "Development", "Google Cloud", "AI/ML", "Advanced", "Coding", "Hands-on"],
    location: "TBD",
    capacity: "TBD",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GenAI%20with%20Google%20Cloud%20Workshop%203%20-%20GenAI%20for%20Developers&dates=20241205T000000Z/20241205T020000Z",
    resourceLink: "https://www.cloudskillsboost.google/paths/183"
  },
  {
    id: 'Gaming-night-2025',
    date: "TBD",
    sem: "Spring 2025",
    time: "6:00 PM - 10:00 PM",
    title: "🎮 GDG GMU: Gaming Night Extravaganza",
    description: "Get ready for an epic gaming night that brings together casual and competitive gamers! We're transforming our space into a gaming paradise with multiple stations, tournaments, and plenty of opportunities to connect with fellow gaming enthusiasts.",
    icon: IoGameController,
    iconColor: "text-purple-500",
    bgGradient: "from-purple-500/20 to-blue-500/20",
    highlights: [
      "Team Counter-Strike 2 tournament with pro coaching",
      "Casual Fall Guys & party games corner",
      "Gaming-themed snacks and energy drinks",
      "Live streaming setup with shoutcasters",
      "Retro gaming station",
      "VR experience zone",
      "Prizes for top players"
    ],
    tags: ["Gaming", "Tournament", "Social", "Prizes", "Streaming"],
    location: "TBD",
    capacity: "TBD",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Level%20Up%20Night&dates=20250123T230000Z/20250124T030000Z"
  }
  // {
  //   id: 'code-and-chill-2025',
  //   date: "Feb 20, 2025",
  //   time: "5:00 PM - 8:00 PM",
  //   title: "🚀 Code & Chill: Workshop Series",
  //   description: "Kick off our most popular workshop series with an evening of coding, learning, and networking! This hands-on session will introduce you to the latest Google technologies while keeping things fun and relaxed.",
  //   icon: FaMicrochip,
  //   iconColor: "text-blue-500",
  //   bgGradient: "from-blue-500/20 to-cyan-500/20",
  //   highlights: [
  //     "Hands-on AI/ML workshop with TensorFlow",
  //     "Firebase quick-start guide",
  //     "Flutter app development basics",
  //     "Google Cloud Platform credits for attendees",
  //     "Interactive coding challenges",
  //     "Mentor matching program launch"
  //   ],
  //   tags: ["Workshop", "AI/ML", "Firebase", "Flutter", "Cloud"],
  //   location: "Engineering Building, Room 1505",
  //   capacity: "80 developers",
  //   calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Code%20%26%20Chill&dates=20250220T220000Z/20250221T010000Z"
  // },
  // {
  //   id: 'hackathon-2025',
  //   date: "March 6-7, 2025",
  //   time: "10:00 AM - 10:00 PM",
  //   title: "⚡ Hack The Future 2025",
  //   description: "36 hours of innovation, creativity, and coding! Join us for GMU's premier hackathon where you'll build amazing projects, learn from mentors, and compete for awesome prizes.",
  //   icon: FaRocket,
  //   iconColor: "text-red-500",
  //   bgGradient: "from-red-500/20 to-orange-500/20",
  //   highlights: [
  //     "$2000+ in prizes and swag",
  //     "Workshops by industry experts",
  //     "Midnight pizza and snacks",
  //     "Hardware lab access",
  //     "Speed networking sessions",
  //     "Demo day presentations"
  //   ],
  //   tags: ["Hackathon", "Prizes", "Mentorship", "Innovation"],
  //   location: "Johnson Center, Multiple Floors",
  //   capacity: "200 hackers",
  //   calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Hack%20The%20Future&dates=20250306T150000Z/20250307T150000Z"
  // },
  // {
  //   id: 'tech-showcase-2025',
  //   date: "March 20, 2025",
  //   time: "3:00 PM - 7:00 PM",
  //   title: "🌟 Tech Stars Showcase",
  //   description: "A celebration of student innovation! Present your projects, learn from peers, and network with industry professionals in a science-fair-style event.",
  //   icon: FaStar,
  //   iconColor: "text-yellow-500",
  //   bgGradient: "from-yellow-500/20 to-green-500/20",
  //   highlights: [
  //     "Project demonstrations",
  //     "Lightning talks",
  //     "Industry mentor feedback",
  //     "Networking mixer",
  //     "Community awards ceremony",
  //     "Professional headshots"
  //   ],
  //   tags: ["Showcase", "Networking", "Projects", "Career"],
  //   location: "HUB Ballroom",
  //   capacity: "300 attendees",
  //   calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Tech%20Stars%20Showcase&dates=20250320T190000Z/20250320T230000Z"
  // },
  // {
  //   id: 'industry-insider-2025',
  //   date: "April 17, 2025",
  //   time: "4:00 PM - 8:00 PM",
  //   title: "🎯 Industry Insider Series",
  //   description: "Connect with tech industry leaders, learn about career opportunities, and get insider tips for landing your dream job in tech.",
  //   icon: FaUsers,
  //   iconColor: "text-green-500",
  //   bgGradient: "from-green-500/20 to-teal-500/20",
  //   highlights: [
  //     "Panel discussions with Google engineers",
  //     "Resume review sessions",
  //     "Mock interviews",
  //     "Career path insights",
  //     "Internship opportunities",
  //     "Networking games"
  //   ],
  //   tags: ["Career", "Networking", "Professional Development"],
  //   location: "Engineering Building, Room 1505",
  //   capacity: "120 attendees",
  //   calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Industry%20Insider&dates=20250417T200000Z/20250418T000000Z"
  // },
  // {
  //   id: 'summer-sendoff-2025',
  //   date: "May 15, 2025",
  //   time: "5:00 PM - 9:00 PM",
  //   title: "🎉 Summer Sendoff Spectacular",
  //   description: "End the semester with a bang! Join us for a celebration of our community's achievements, special awards, and exciting announcements for the future.",
  //   icon: FaTrophy,
  //   iconColor: "text-orange-500",
  //   bgGradient: "from-orange-500/20 to-red-500/20",
  //   highlights: [
  //     "Annual awards ceremony",
  //     "Summer internship showcase",
  //     "Community recognition",
  //     "Special guest speaker",
  //     "Year in review presentation",
  //     "Celebration dinner"
  //   ],
  //   tags: ["Social", "Awards", "Celebration", "Community"],
  //   location: "Johnson Center, Dewberry Hall",
  //   capacity: "250 attendees",
  //   calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=GDG%20GMU:%20Summer%20Sendoff&dates=20250515T210000Z/20250516T010000Z"
  // }
];