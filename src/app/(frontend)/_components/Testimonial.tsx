import Image from 'next/image';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.',
    name: 'Bilal Ahmed',
    role: 'IT Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.',
    name: 'Saman Malik',
    role: 'Customer Support Lead',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'This tool has transformed how we operate. Real-time data visibility has made decision-making much faster.',
    name: 'Omar Farooq',
    role: 'Operations Head',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    quote:
      'Excellent product with an intuitive interface. Our team adapted within days and productivity has soared.',
    name: 'Ayesha Raza',
    role: 'HR Director',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      'The analytics dashboard gives us insights we never had before. A game-changer for our reporting processes.',
    name: 'Hassan Noor',
    role: 'Finance Manager',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];

const testimonials2: Testimonial[] = [
  {
    quote:
      'Its robust features and quick support have transformed our workflow, making us significantly more efficient.',
    name: 'Zainab Hussain',
    role: 'Project Manager',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote:
      'The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.',
    name: 'Aliza Khan',
    role: 'Business Analyst',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    quote:
      'Integration with our existing systems was seamless. The API documentation is thorough and developer-friendly.',
    name: 'Tariq Mehmood',
    role: 'Lead Developer',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
  {
    quote:
      'Customer onboarding has improved dramatically. The platform guides users naturally through every step.',
    name: 'Nadia Qureshi',
    role: 'Product Owner',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
  {
    quote:
      'Reporting is now a breeze. What used to take days is done in minutes with beautiful visualizations.',
    name: 'Kamran Iqbal',
    role: 'Data Analyst',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
  },
];

const testimonials3: Testimonial[] = [
  {
    quote:
      'We received overwhelmingly positive customer feedback after switching. Our clients noticed the difference immediately.',
    name: 'Farhan Siddiqui',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    quote:
      'They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    quote:
      'Using this ERP, our online presence and conversions significantly improved, boosting revenue quarter after quarter.',
    name: 'Imran Baig',
    role: 'E-Commerce Lead',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
  {
    quote:
      'The mobile app experience is polished and fast. Our field teams can now update records on the go effortlessly.',
    name: 'Rabia Sultana',
    role: 'Field Operations Manager',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
  {
    quote:
      'Security and compliance features gave us confidence. Passing our audit was straightforward with the built-in controls.',
    name: 'Usman Ghani',
    role: 'Compliance Officer',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
];

const TestimonialCard = ({ quote, name, role, avatar }: Testimonial) => (
  <div className="mb-4 rounded-2xl border p-6 shadow-sm">
    <p className="mb-5 text-[15px] leading-relaxed text-gray-600">{quote}</p>
    <div className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const ScrollColumn = ({
  items,
  duration,
  reverse = false,
}: {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
}) => {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden" style={{ height: '640px' }}>
      {/* Top fade */}
      {/* <div className="pointer-events-none absolute top-0 z-10 h-28 w-full to-transparent" /> */}
      {/* Bottom fade */}
      {/* <div className="pointer-events-none absolute bottom-0 z-10 h-28 w-full bg-gradient-to-t from-gray-50 to-transparent" /> */}

      <div
        className="animate-scroll-up"
        style={
          {
            '--duration': `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white">
          What our users say
        </h2>
        <p className="text-base text-gray-500">See what our customers have to say about us.</p>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <ScrollColumn items={testimonials} duration={30} />
        <ScrollColumn items={testimonials2} duration={25} reverse />
        <ScrollColumn items={testimonials3} duration={35} />
      </div>

      {/* Animation keyframes injected via style tag */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scrollUp var(--duration, 30s) linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
