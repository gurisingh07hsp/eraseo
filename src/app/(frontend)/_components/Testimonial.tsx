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
      'Back Erase has completely changed the way I prepare product photos for my online store. The AI removes backgrounds in seconds, and the results look professional without any manual editing. It has saved me hours every week.',
    name: 'Sarah M.',
    role: 'Online Store Owner',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    quote:
      "I've tried several background removal tools, and Back Erase is one of the fastest. It handles fine details like hair and transparent objects surprisingly well. It's now part of my daily workflow.",
    name: 'David R.',
    role: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    quote:
      'Creating content for multiple social media platforms is much easier with Back Erase. I can quickly remove backgrounds from photos and create eye-catching graphics without opening complex design software.',
    name: 'Emily T.',
    role: 'Social Media Manager',
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    quote:
      "Back Erase delivers clean edges and high-quality transparent PNGs. It's perfect for client previews, portraits, and marketing materials. The speed and accuracy are impressive.",
    name: 'Michael L.',
    role: 'Photographer',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
];

const testimonials2: Testimonial[] = [
  {
    quote:
      'I needed a simple way to create transparent images for presentations and advertisements. Back Erase made the process effortless, and the quality exceeded my expectations.',
    name: 'Jessica P.',
    role: 'Marketing Specialist',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote:
      'Product images need clean white or transparent backgrounds, and Back Erase does exactly that. It has helped me prepare hundreds of product listings much faster than manual editing.',
    name: 'Kevin H.',
    role: 'Amazon Seller',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    quote:
      "I don't have any design experience, but Back Erase makes background removal incredibly simple. Upload, wait a few seconds, and download. That's all it takes.",
    name: 'Olivia C.',
    role: 'Small Business Owner',
    avatar: 'https://randomuser.me/api/portraits/women/78.jpg',
  },
  {
    quote:
      "Whether I'm creating YouTube thumbnails or Instagram posts, Back Erase helps me isolate subjects perfectly. It's fast, reliable, and works directly in the browser.",
    name: 'Daniel W.',
    role: 'Content Creator',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const testimonials3: Testimonial[] = [
  {
    quote:
      'The quality of the AI cutouts is excellent. Even challenging images with detailed hair and clothing come out looking clean. I highly recommend Back Erase for anyone working with images.',
    name: 'Rachel S.',
    role: 'Digital Marketer',
    avatar: 'https://randomuser.me/api/portraits/women/91.jpg',
  },
  {
    quote:
      "Back Erase has become my go-to AI background remover. The interface is clean, the processing is quick, and the results are consistently accurate. It's one of the best free tools I've used.",
    name: 'Chris B.',
    role: 'Freelance Designer',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
];

const TestimonialCard = ({ quote, name, role, avatar }: Testimonial) => (
  <div className="mb-4 rounded-2xl border p-6 shadow-sm bg-card">
    <div className="flex items-center mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">{quote}</p>
    <div className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
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
        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-black dark:text-white">
          What Our Users Say
        </h2>
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
