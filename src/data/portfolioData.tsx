import React from 'react'
import {
  MousePointer2,
  Rocket,
  Cpu,
  Sparkles,
  Layers,
  ShieldCheck,
  BrainCircuit,
  Zap,
  TrendingUp,
} from 'lucide-react'

export interface ServiceDetail {
  icon: React.ReactNode
  title: string
  description: string
  longDescription: string
  features: string[]
  tag: string
  color: string
}

export interface ProjectDetail {
  title: string
  category: string
  image: string
  tech: string[]
  metrics: Record<string, string>
  description: string
  liveLink: string
  githubLink: string
  accent: string
  accentColor: string
}

export interface TeamMember {
  name: string
  role: string
  specialization: string
  bio: string
  accent: string
  photo: string
  social: { label: string; href: string }[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TestimonialResult {
  icon: React.ReactNode
  accent: string
  accentColor: string
  project: string
  category: string
  result: string
  metric: string
  metricLabel: string
  link: string
}

export interface ClientTestimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface ReasonItem {
  icon: React.ReactNode
  title: string
  description: string
}

// 1. Services Configuration
export const services: ServiceDetail[] = [
  {
    icon: <MousePointer2 className='w-6 h-6' />,
    title: 'Experience Design',
    description: 'Layouts engineered to route intent into transactions with zero friction.',
    longDescription:
      'Most websites are built for aesthetics. We build for connection. Every element, from typography to motion curves, is strategically chosen to reduce friction and increase your conversion fidelity.',
    features: [
      'Conversion Rate Optimization',
      'High-Fidelity UI/UX Design',
      'Sales Funnel Architecture',
      'Responsive Lead Magnets',
      'A/B Testing Foundations',
      'Behavioral Data Analysis',
    ],
    tag: 'CONVERSION',
    color: 'blue',
  },
  {
    icon: <Rocket className='w-6 h-6' />,
    title: 'Performance Engineering',
    description: 'Full-stack architecture optimized for sub-500ms latency.',
    longDescription:
      'A slow website is a dead website. We use modern full-stack technologies to ensure your site loads instantly on every device, keeping your customers engaged and your search engine performance at the elite level.',
    features: [
      'Core Web Vitals Perfection',
      'Next.js Architectural Builds',
      'Secure Backend Logic',
      'Scalable Database Design',
      'Seamless API Integrations',
      'Automated Performance Monitoring',
    ],
    tag: 'PERFORMANCE',
    color: 'purple',
  },
  {
    icon: <Cpu className='w-6 h-6' />,
    title: 'Automation Logic',
    description: 'Autonomous systems that qualify prospects and execute logic 24/7.',
    longDescription:
      'Automate your customer engagement at scale. Our custom systems qualify prospects, handle bookings, and provide support, effectively acting as a high-performance team that never sleeps.',
    features: [
      'Custom Sales Automation',
      'Lead Qualification Systems',
      'Predictive Traffic Modeling',
      'Workflow Optimization',
      'Data Layer Synchronization',
      'CRM Integration',
    ],
    tag: 'AUTOMATION',
    color: 'red',
  },
  {
    icon: <Sparkles className='w-6 h-6' />,
    title: 'Brand Synthesis',
    description: 'High-fidelity identities projecting absolute authority.',
    longDescription:
      "Your digital presence is your strongest asset. We craft visual identities that aren't just beautiful—they're engineered to command attention and project professional authority.",
    features: [
      'Identity Architecture',
      'Visual Language Systems',
      'Motion Brand Guidelines',
      'Digital Asset Design',
      'Brand Authority Strategy',
      'Social Proof Systems',
    ],
    tag: 'BRAND',
    color: 'blue',
  },
]

// 2. Featured Projects Configuration
export const projects: ProjectDetail[] = [
  {
    title: 'ParArc Design Studio',
    category: 'Architecture · Premium Portfolio',
    image: '/assets/pararc_studio.png',
    tech: ['Architecture', 'Interior', 'Landscape', 'Urban'],
    metrics: { Dialogue: 'Contextual', Form: 'Pure', Response: 'Sustainable' },
    description:
      'High-fidelity architectural showcase for ParArc Design Studio. Engineered to mirror the studio\'s philosophy of "Architecture as a Dialogue," utilizing a surgical grayscale aesthetic and cinematic transitions to highlight contextual masterpieces.',
    liveLink: 'https://pararcdesignstudio.in/',
    githubLink: '',
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
  },
  {
    title: 'OpenBridge',
    category: 'AI Platform · Developer Tools',
    image: '/assets/openbridge.png',
    tech: ['React', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Gemini AI'],
    metrics: { Onboarding: 'Personalized', Matching: '98% Acc', Roadmap: '4-Week Plan' },
    description:
      'AI-powered onboarding companion for open-source newcomers. Profiles developer skills, matches to real GitHub repos, and generates custom 4-week roadmaps using Gemini AI.',
    liveLink: 'https://github.com/Poojan2107/OpenBridge',
    githubLink: 'https://github.com/Poojan2107/OpenBridge',
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
  },
  {
    title: 'NeuralCredit',
    category: 'FinTech · Enterprise Platform',
    image: '/assets/neural_credit.png',
    tech: ['React', 'Python', 'Node.js', 'AI Engine'],
    metrics: { verification: '<2s', uptime: '99.9%', alerts: 'Real-time' },
    description:
      'Enterprise FinTech command center. Persistent AI integration, biometric verification, and real-time governance controls.',
    liveLink: 'https://neuralcredit.onrender.com/',
    githubLink: 'https://github.com/Poojan2107/NeuralCredit_',
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
  },
  {
    title: 'Product Nexus',
    category: 'Enterprise · Asset Management',
    image: '/assets/product_nexus.png',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Vercel'],
    metrics: { Audits: '100% Visibility', Latency: '<50ms', Accuracy: 'Enterprise' },
    description:
      'High-fidelity hardware asset management engine. Orchestrating enterprise-grade inventory tracking and predictive fiscal analytics with surgical precision.',
    liveLink: 'https://product-nexus-poojan.vercel.app/',
    githubLink: 'https://github.com/Poojan2107/Product-Nexus',
    accent: 'purple',
    accentColor: 'rgb(168,85,247)',
  },
  {
    title: 'Travelling Tent',
    category: 'Platform · Travel Experience',
    image: '/assets/traveling_tent.png',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Framer'],
    metrics: { conversion: '4.2x', speed: 'Sub-second', seo: '#1 Local' },
    description:
      'Immersive booking platform for luxury outdoor experiences. Engineered for pixel perfection and seamless checkout flows.',
    liveLink: 'https://travelling-tent.vercel.app/',
    githubLink: 'https://github.com/Poojan2107/Travelling-Website',
    accent: 'red',
    accentColor: 'rgb(239,68,68)',
  },
  {
    title: 'Sportivo',
    category: 'SaaS · Multi-Sport Booking Engine',
    image: '/assets/sportivo.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    metrics: { slots: '24 Courts', bookings: '89/day', revenue: '+$3.2K' },
    description:
      'High-performance slot booking platform for elite sports complexes. Eliminating manual friction through automated reservation logic.',
    liveLink: 'https://sportivo-multi-sport-slot-booking.onrender.com/',
    githubLink: 'https://github.com/vbp-web/Sportivo---Multi-Sport-Slot-Booking-Platform.git',
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
  },
  {
    title: 'Restaurant POS',
    category: 'Desktop App · Point of Sale System',
    image: '/assets/nexus_pos.png',
    tech: ['Electron', 'React', 'Node.js', 'Socket.io'],
    metrics: { tables: 'Live Tables', sync: 'Real-time', alerts: 'Stock AI' },
    description:
      'Production-ready Point of Sale system for modern restaurants. Live order management and real-time inventory tracking.',
    liveLink: 'https://vbp-web.github.io/Restaurant-POS/',
    githubLink: 'https://github.com/vbp-web/Restaurant-POS-D',
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
  },
]

// 3. Strategic Founders Configuration
export const team: TeamMember[] = [
  {
    name: 'Vansh Prajapati',
    role: 'Founding Engineer',
    specialization: 'Digital Architecture',
    bio: 'Architect of high-velocity conversion engines, blending technical logic with surgical precision to dominate digital spaces.',
    accent: 'blue',
    photo: '/assets/vansh.png',
    social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/vansh-prajapati-6a1749360' }],
  },
  {
    name: 'Poojan Shrivastav',
    role: 'Founding Developer',
    specialization: 'MERN Stack & AI Development',
    bio: 'B.Tech AI student & Full-Stack MERN Developer passionate about building functional web applications, clean database tools, and practical Gemini AI-powered integrations.',
    accent: 'purple',
    photo: '/assets/poojan.png',
    social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/poojanshrivastav21' }],
  },
]

// 4. Strategic FAQ Configuration
export const faqs: FAQItem[] = [
  {
    question: 'How fast can we launch?',
    answer:
      'Speed is our competitive advantage. A high-conversion agency site or custom POS system typically launches within 4-6 weeks from initial strategy to production.',
  },
  {
    question: 'Do you use templates?',
    answer:
      'Never. Every pixel is custom-engineered from the ground up to solve your specific revenue friction. We build bespoke digital assets that you own entirely.',
  },
  {
    question: 'Is SEO and Performance included?',
    answer:
      'Performance is at our core. Every Oneverce deployment is optimized for sub-1s load times and follows strict SEO best practices to ensure your brand ranks where it belongs.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We don’t just ship and leave. Oneverce provides ongoing strategic support, performance monitoring, and rapid scaling as your business grows.',
  },
]

// 5. Testimonial Results Configuration
export const results: TestimonialResult[] = [
  {
    icon: <TrendingUp size={20} />,
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
    project: 'ParArc Design Studio',
    category: 'Architecture · Portfolio',
    result:
      "Organic search traffic surged post-launch through a surgical grayscale aesthetic and cinematic transitions that matched the studio's brand authority.",
    metric: '#1',
    metricLabel: 'Local Search',
    link: 'https://pararcdesignstudio.in/',
  },
  {
    icon: <Cpu size={20} />,
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
    project: 'OpenBridge',
    category: 'AI Platform · Developer Tools',
    result:
      'Empowered newcomers to submit their first open-source pull requests inside a week using customized Gemini 3.5 Flash roadmaps and PWA offline task tracking.',
    metric: '10x',
    metricLabel: 'Faster Onboarding',
    link: 'https://github.com/Poojan2107/OpenBridge',
  },
  {
    icon: <ShieldCheck size={20} />,
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
    project: 'NeuralCredit',
    category: 'FinTech · Enterprise Platform',
    result:
      'End-to-end AI loan intelligence platform with biometric verification, persistent AI engine, and real-time anomaly detection — built for institutional-grade viva presentation.',
    metric: '<2s',
    metricLabel: 'Verification',
    link: 'https://neuralcredit.onrender.com/',
  },
  {
    icon: <Zap size={20} />,
    accent: 'red',
    accentColor: 'rgb(239,68,68)',
    project: 'Travelling Tent',
    category: 'Platform · Travel Booking',
    result:
      'Immersive luxury booking platform engineered for pixel-perfect UX and seamless checkout flows. Sub-second load performance on all devices.',
    metric: '4.2x',
    metricLabel: 'Conversion',
    link: 'https://travelling-tent.vercel.app/',
  },
]

// 6. Reasons / Values Configuration
export const reasons: ReasonItem[] = [
  {
    icon: <Rocket className='w-6 h-6 text-blue-500' />,
    title: 'Fast Delivery',
    description: 'Rapid deployment cycles without compromising architectural integrity.',
  },
  {
    icon: <Layers className='w-6 h-6 text-purple-500' />,
    title: 'Modern Tech Stack',
    description: 'Engineered on modern stacks for absolute speed, security, and future-proofing.',
  },
  {
    icon: <ShieldCheck className='w-6 h-6 text-emerald-500' />,
    title: 'Scalable Systems',
    description: 'Infrastructure designed to scale autonomously with exponential traffic load.',
  },
  {
    icon: <BrainCircuit className='w-6 h-6 text-amber-500' />,
    title: 'AI-First Approach',
    description: 'Integrating AI-native logic for maximum operational efficiency.',
  },
]

export const clientTestimonials: ClientTestimonial[] = [
  {
    quote:
      "Oneverce didn't just build us a website — they built us a revenue engine. Our conversion rate doubled within the first month of launch.",
    author: 'Ananya Sharma',
    role: 'Founder',
    company: 'Travelling Tent',
    avatar: '',
  },
  {
    quote:
      'OpenBridge solved our contributor onboarding bottleneck. The AI issue translations and roadmap checklists make getting started incredibly smooth.',
    author: 'Kunal Patel',
    role: 'Open Source Maintainer',
    company: 'OpenBridge Contributor',
    avatar: '',
  },
  {
    quote:
      'They delivered in 4 weeks what another agency quoted us 4 months for. And the quality? Night and day difference.',
    author: 'Aditya Verma',
    role: 'Co-founder & CTO',
    company: 'Sportivo',
    avatar: '',
  },
]
