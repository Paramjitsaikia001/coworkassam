import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence } from 'framer-motion';
import { Wifi, Users, Monitor, Printer, Calendar, Coffee } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { MapPin, Star } from 'lucide-react';
import PricingSection from './Pricing';
import ContactButton from './Contact';


import private_img from '../assets/private_img.avif';
import hotdesks from '../assets/HOtdesk.avif';
import meetingroom from '../assets/meetingroom.avif';
import events from '../assets/events.avif';
import virtual from '../assets/virtualoffice.webp';
import enterprise from '../assets/enterprise.webp';
import { NavLink } from 'react-router';
// Define types
type Category = {
    id: string;
    name: string;
    description?: string;
    img?: string;
};

const CATEGORIES: Category[] = [
    {
        id: 'private-offices',
        name: 'PRIVATE OFFICES',
        description:
            'Discover the perfect workspace tailored to your needs. Our private offices offer a quiet and professional environment, ideal for focused work and meetings.',
        img: private_img,
    },
    {
        id: 'hot-desks',
        name: 'HOT DESKS',
        description:
            'Flexible seating arrangements in a shared space. Ideal for freelancers and remote workers looking for a productive environment.',
        img: hotdesks,
    },
    {
        id: 'meeting-rooms',
        name: 'MEETING ROOMS',
        description:
            'Professional meeting spaces equipped with the latest technology for productive discussions and presentations.',
        img: meetingroom,
    },
    {
        id: 'event-spaces',
        name: 'EVENT SPACES',
        description:
            'Versatile spaces for hosting events, workshops, and seminars. Customizable to suit your needs.',
        img: events,
    },
    {
        id: 'virtual-office',
        name: 'VIRTUAL OFFICE',
        description:
            'A prestigious business address and mail handling services. Perfect for remote businesses.',
        img: virtual,
    },
    {
        id: 'enterprise',
        name: 'ENTERPRISE',
        description:
            'Tailored office solutions for large teams and enterprises. Flexible terms and fully serviced offices.',
        img: enterprise,
    },
];

// Extract components to improve readability
const HeroSection = () => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hero-section py-10 px-2 md:px-6 md:py-10 flex flex-col-reverse md:flex-row justify-between gap-12 h-[70vh] md:h-[78vh] relative"
    >
        <div className="w-[80%] md:w-[30%] flex flex-col md:justify-end md:pb-8 items-baseline gap-4">
            <p className="text-base md:text-lg">
                Whether you're a freelancer looking for your next creative space
                or a team searching for a collaborative environment for your
                upcoming project, find it all on the CoWorkSpaces marketplace.
            </p>
            <div className="flex flex-col gap-3 w-full ">
                <NavLink
                to="/booktour"
                    className="bg-black rounded-3xl py-3 px-8 text-white items-start flex cursor-pointer hover:bg-gray-800 transition-colors"
                    aria-label="Book your space"
                >
                    Book your space
                </NavLink>
                <button
                    className="bg-black/25 rounded-3xl py-3 px-8 text-black items-start flex cursor-pointer hover:bg-black/30 transition-colors "
                    aria-label="Schedule a free tour"
                >
                    Free tour
                </button>
            </div>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0 z-10">
            <h1 className="flex flex-col items-end md:items-end text-6xl md:text-8xl lg:text-[8.5rem] font-extrabold leading-none ">
                Where <br />
                <span className="text-green-500 [text-shadow:3px_3px_0px_black]">
                    Innovation
                </span>
                <span className="font-serif">Meets</span>
                Flexibility
            </h1>
        </div>
    </motion.section>
);

//category section
const CategorySection = () => {
    const [maximizedIndex, setMaximizedIndex] = useState<number | null>(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Handle maximizing a category
    const handleMaximize = (index: number) => {
        setMaximizedIndex(index);
    };

    // Handle returning to the grid view
    const handleResetView = () => {
        setMaximizedIndex(null);
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-wrap gap-2 items-center justify-center max-w-8xl bg-green-500 shadow-[1px_5px_0px_#000] rounded-2xl h-[35rem] overflow-hidden cursor-pointer  my-12"
            aria-label="Workspace Categories"
        >
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                className="absolute top-0 left-0 w-full h-full bg-white opacity-15 pointer-events-none"
            />
            <div className="w-full h-full overflow-y-scroll overflow-x-hidden scrollbar-thin  scrollbar-thumb-gray-100 scrollbar-track-gray-200 rounded-2xl">
                {CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className={`relative flex flex-col items-center justify-center w-full h-full bg-cover bg-center rounded-lg shadow-md ${
                            maximizedIndex === index ? 'scale-105' : ''
                        }`}
                        style={{
                            backgroundImage: `url(${category.img})`,
                        }}
                        onClick={() =>
                            maximizedIndex === index
                                ? handleResetView()
                                : handleMaximize(index)
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div className="absolute inset-0 md:bg-black/40 bg-black/10 w-[40%] flex flex-col items-start md:justify-end justify-baseline md:py-12 py-4 md:px-[5rem] px-2  text-start">
                            <h3 className="md:text-xl text-[10px] text-center w-full font-bold text-black mb-4 bg-yellow-400 shadow-[3px_3px_0px_black] rounded-full md:px-4 px-2 py-2">
                                {category.name}
                            </h3>
                            <p
                                className={`text-white hidden md:block text-lg transition-opacity duration-300 ${
                                    maximizedIndex === index
                                        ? 'opacity-100'
                                        : 'opacity-100'
                                }`}
                            >
                                {category.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

//what is coworkassam for?
const AboutSection = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(
        'startups',
    );
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const categories = [
        {
            id: 'freelancers',
            title: 'Freelancers',
            color: 'bg-[#2be4f1]',
            description:
                'Perfect for independent professionals looking for a productive space to work. Access high-speed internet, meeting rooms, and networking opportunities with like-minded individuals.',
        },
        {
            id: 'remote-workers',
            title: 'Remote Workers',
            color: 'bg-[#aab1f9]',
            description:
                'Ideal for employees working remotely who need a professional environment away from home distractions. Enjoy 24/7 access, private phone booths, and all the amenities of a traditional office.',
        },
        {
            id: 'startups',
            title: 'Startups',
            color: 'bg-[#c7d0fe]',
            description:
                'Flexible spaces for growing teams. Scale your workspace as your company expands, without the burden of long-term leases. Connect with potential partners and investors in our community.',
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="py-2 px-5 my-12 flex flex-col gap-5 items-center h-auto min-h-[40rem] "
        >
            <motion.h2
                variants={itemVariants}
                className="md:text-[8.5rem] text-5xl px-3 w-full font-bold mb-8 md:leading-[8rem] leading-[3.5rem] text-start flex flex-col"
            >
                What is{' '}
                <span className="text-green-500   [text-shadow:3px_3px_0px_black]">
                    Coworkassam
                </span>{' '}
                For ?
            </motion.h2>

            <motion.div
                variants={itemVariants}
                className="flex flex-col w-full overflow-hidden rounded-lg bg-white"
            >
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    const isAnyActive = activeCategory !== null;

                    return (
                        <motion.div
                            ref={ref}
                            initial={false}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            key={category.id}
                            className={`${category.color} relative overflow-hidden cursor-pointer rounded-t-xl rounded-lg bg-gradient-to-t from-white/100 to-transparent backdrop-blur-2xl`}
                            animate={{
                                height: isActive
                                    ? '30rem'
                                    : isAnyActive
                                      ? '5rem'
                                      : '5rem',
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1], // Custom bezier curve for smoother motion
                            }}
                            onMouseEnter={() => setActiveCategory(category.id)}
                            onMouseLeave={() => setActiveCategory('startups')}
                            layout
                        >
                            <div className="p-4 h-full items-center text-center gap-12 flex flex-col">
                                <motion.h3
                                    layout="position"
                                    className="text-black md:text-5xl text-2xl font-bold"
                                >
                                    {category.title}
                                </motion.h3>

                                {/* Content visible only when active */}
                                <motion.div
                                    className="md:mt-6 mt-0 text-black flex flex-col items-center md:text-xl text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: isActive ? 0.2 : 0,
                                    }}
                                >
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: isActive ? 0 : 20,
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1,
                                        }}
                                    >
                                        {category.description}
                                    </motion.p>

                                    <motion.div
                                        className="mt-8 flex space-x-4"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: isActive ? 0 : 20,
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.2,
                                        }}
                                    >
                                        <motion.button
                                            className="bg-black text-white px-6 py-2 rounded-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn more
                                        </motion.button>
                                        <motion.button
                                            className="border-2 border-black px-6 py-2 rounded-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book a tour
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

// Stats Section
const StatsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gray-50 rounded-2xl"
        >
            {/* Hero Section */}
            <section className="relative flex items-center justify-between px-12 py-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Stats Counter */}
                    <AnimatedCounter />

                    {/* Content Block */}
                    <AnimatedContent />
                </div>

                {/* Tags */}
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                    <Tag text="AMENITIES" />
                    <Tag text="DESIGN" />
                </div>

                {/* Background Elements */}
                <BackgroundShapes />
            </section>

            {/* Features Section */}
            <section className="px-12 py-8 bg-white">
                <h2 className="md:text-[8rem] text-6xl  font-bold mb-16 text-start leading-none">
                    Our{' '}
                    <span className="text-green-500 [text-shadow:3px_3px_0px_black]">
                        Workspace
                    </span>{' '}
                    Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Connection"
                        description="Build valuable connections with like-minded professionals in an engaging and collaborative workspace."
                        delay={0}
                    />
                    <FeatureCard
                        title="No Long-Term Leases"
                        description="Enjoy the flexibility of short-term commitments—no long contracts, just workspace when you need it."
                        delay={0.2}
                    />
                    <FeatureCard
                        title="No Hidden Fees"
                        description="Transparent pricing with no unexpected costs—what you see is what you pay."
                        delay={0.4}
                    />
                </div>
            </section>
        </motion.div>
    );
};

// Stats Counter Component
const AnimatedCounter = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col"
        >
            <motion.span
                className="text-7xl font-bold"
                initial={{ opacity: 0 }}
                animate={
                    inView ? { opacity: 1, transition: { duration: 1.5 } } : {}
                }
            >
                500+
            </motion.span>
            <span className="text-gray-700 mt-2">
                members across our locations that collaborate and place a lot of
                trust in our spaces
            </span>
        </motion.div>
    );
};
// Content Block Component
const AnimatedContent = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="max-w-2xl"
        >
            <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6"
            >
                Mastery of Workspace Innovation
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="text-gray-700 mb-8 leading-relaxed"
            >
                We're committed to creating productive environments, assisting
                professionals to thrive in their work. With years of experience,
                we are proficient in embracing modern workspace trends and
                technology.
            </motion.p>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center font-medium rounded-full hover:bg-yellow-400 hover:shadow-[2px_5px_0px_#000] cursor-pointer p-2"
            >
                Read More
                <motion.span
                    className="ml-2 transform group-hover:translate-x-1  transition-transform"
                    whileHover={{ x: 5 }}
                >
                    →
                </motion.span>
            </motion.button>
        </motion.div>
    );
};

// Tag Component
const Tag = ({ text }: { text: string }) => (
    <motion.span
        whileHover={{
            scale: 1.05,
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
        }}
        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm mr-2 cursor-pointer"
    >
        {text}
    </motion.span>
);

// Background Shapes Component
const BackgroundShapes = () => (
    <>
        <motion.div
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50 rounded-full opacity-50"
            animate={{
                y: [0, 15, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut',
            }}
        />

        <motion.div
            className="absolute top-24 right-24 w-32 h-32 bg-yellow-50 rounded-full opacity-60"
            animate={{
                y: [0, -20, 0],
                scale: [1, 0.9, 1],
            }}
            transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'easeInOut',
                delay: 1,
            }}
        />
    </>
);

// Feature Card Component
const FeatureCard = ({
    title,
    description,
    delay,
}: {
    title: string;
    description: string;
    delay: number;
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay },
            });
        }
    }, [controls, inView, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            whileHover={{
                y: -10,
                boxShadow: '2px 7px 0px 0px green',
            }}
            className="bg-gray-50 p-8 rounded-lg transition-all"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const FeaturesAmenities = () => {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const features = [
        {
            id: 1,
            title: 'High-speed Wi-Fi',
            category: 'CONNECTIVITY',
            type: 'Essential',
            description:
                'Blazing fast, reliable internet connection for all your business needs.',
            icon: <Wifi size={48} />,
        },
        {
            id: 2,
            title: 'Meeting Rooms',
            category: 'WORKSPACES',
            type: 'Collaborative',
            description:
                'Modern, fully-equipped meeting spaces for teams of all sizes.',
            icon: <Users size={48} />,
        },
        {
            id: 3,
            title: 'Ergonomic Furniture',
            category: 'COMFORT',
            type: 'Essential',
            description:
                'Comfortable, adjustable workstations designed for productivity.',
            icon: <Monitor size={48} />,
        },
        {
            id: 4,
            title: 'Printing Facilities',
            category: 'SERVICES',
            type: 'Business',
            description:
                'Professional-grade equipment for all your document needs.',
            icon: <Printer size={48} />,
        },
        {
            id: 5,
            title: 'Community Events',
            category: 'NETWORKING',
            type: 'Value-Add',
            description:
                'Regular networking opportunities and professional development workshops.',
            icon: <Calendar size={48} />,
        },
        {
            id: 6,
            title: 'Free Refreshments',
            category: 'AMENITIES',
            type: 'Comfort',
            description:
                'Complimentary coffee, tea, and filtered water throughout the day.',
            icon: <Coffee size={48} />,
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-6 px-4 md:px-12 my-12"
        >
            <div className="text-center md:text-end">
                <h2 className="text-5xl md:text-[8rem] font-bold mb-8 leading-tight">
                    Features{' '}
                    <span className="text-yellow-500 [text-shadow:3px_3px_0px_black]">
                        &
                    </span>{' '}
                    Amenities
                </h2>
            </div>

            {/* Mobile Grid Layout */}
            <div className="md:hidden grid grid-cols-1 gap-6">
                {features.map((feature) => (
                    <motion.div
                        key={feature.id}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-2xl 
                                   shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    >
                        {/* Feature Icon */}
                        <div className="text-blue-600 mb-4" aria-label="High-speed Wi-Fi">{feature.icon}</div>

                        {/* Feature Title */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            {feature.title}
                        </h3>

                        {/* Feature Description */}
                        <p className="text-gray-600 text-sm md:text-base">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop Hover Layout */}
            <div className="hidden md:block relative min-h-screen bg-gray-50 font-sans">
                <AnimatePresence>
                    {hoveredFeature && (
                        <motion.div
                            key={`feature-box-${hoveredFeature}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-20 "
                        >
                            <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center text-center rounded-2xl shadow-[1px_5px_0px_0px_#000]  ">
                                <div className="text-blue-600 mb-4">
                                    {
                                        features.find(
                                            (f) => f.id === hoveredFeature,
                                        )?.icon
                                    }
                                </div>
                                <h3 className="text-2xl font-bold mb-3">
                                    {
                                        features.find(
                                            (f) => f.id === hoveredFeature,
                                        )?.title
                                    }
                                </h3>
                                <p className="text-gray-600">
                                    {
                                        features.find(
                                            (f) => f.id === hoveredFeature,
                                        )?.description
                                    }
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Feature Listings */}
                <div className="relative z-0">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className="relative flex justify-between items-center border-t border-gray-300 px-8 py-6 cursor-pointer overflow-hidden"
                            onMouseEnter={() => setHoveredFeature(feature.id)}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            {/* Yellow overlay with bottom-to-top animation */}
                            <div className="absolute inset-0 overflow-hidden z-0">
                                <motion.div
                                    className="absolute inset-x-0 bottom-0 bg-green-400 w-full"
                                    initial={{ height: 0 }}
                                    animate={{
                                        height:
                                            hoveredFeature === feature.id
                                                ? '100%'
                                                : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: 'easeOut',
                                    }}
                                />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {feature.title}
                                </h2>
                            </div>

                            <div className="relative z-10 text-right">
                                <div className="text-lg font-bold">
                                    {feature.category}
                                </div>
                                <div className="text-gray-500">
                                    {feature.type}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

//location section
function LocationSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br rounded-xl from-blue-50 to-blue-100 flex flex-col"
        >
            <div className="container mx-auto px-4  py-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="md:text-7xl text-5xl font-bold text-gray-800 leading-tight">
                        Coworkassam
                        <br />
                        is waiting for you!
                    </h1>

                    <p className="text-xl text-gray-600 mb-6">
                        Come find us! We're located in the heart of Guwahati.
                    </p>

                    <div
                        className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
                        onClick={() =>
                            window.open(
                                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114625.31801983615!2d91.70438363906251!3d26.130200000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591776a585f7%3A0x34180a82a35e9f33!2sDigital%20Notice%20Media%20Labs!5e0!3m2!1sen!2sin!4v1742154650506!5m2!1sen!2sin',
                                '_blank',
                            )
                        }
                    >
                        <MapPin className="text-blue-500 h-8 w-8" aria-label="Location pin for Cowork Assam" />
                        <div>
                            <p className="font-semibold text-gray-800">
                                Digital Notice Media Labs
                            </p>
                            <p className="text-sm text-gray-600">
                                House No-19, 2nd Floor, Parijat Path, Hatigaon
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="text-yellow-400 fill-yellow-400"
                            />
                        ))}
                        <span className="ml-2 text-gray-700">
                            5.0 (12 reviews)
                        </span>
                    </div>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-2xl overflow-hidden w-full h-full"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114625.31801983615!2d91.70438363906251!3d26.130200000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591776a585f7%3A0x34180a82a35e9f33!2sDigital%20Notice%20Media%20Labs!5e0!3m2!1sen!2sin!4v1742154650506!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full content-cover"
                         title="Google Maps location of Cowork Assam"
                    ></iframe>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Define FAQ Item Type
interface FAQItem {
    question: string;
    answer: string;
}

// FAQ Data
const faqData: FAQItem[] = [
    {
        question: 'What is Cowork Assam, and who is it for?',
        answer: "Cowork Assam is Guwahati's premier coworking space, designed for freelancers, remote workers, and startups looking for a productive, affordable, and flexible workspace.",
    },
    {
        question: 'What are your pricing plans?',
        answer: 'We offer daily, weekly, and monthly plans with no hidden fees. Contact us for detailed pricing and membership options.',
    },
    {
        question: 'What amenities do you provide?',
        answer: 'We offer high-speed internet, meeting rooms, dedicated desks, printing services, free coffee/tea, and a vibrant community space.',
    },
    {
        question: 'Do I need to book in advance, or can I walk in?',
        answer: 'While walk-ins are welcome, booking in advance is recommended to ensure availability, especially for private spaces.',
    },
];

function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <MotionConfig
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="min-h-screen py-12"
            >
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-10 items-start px-4">
                    <motion.div
                        className="md:w-[40%] w-full"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <motion.h1 className="md:text-8xl text-6xl font-bold text-start mb-6">
                            Frequently Asked{' '}
                            <span className="text-green-400 [text-shadow:3px_3px_0px_black]">
                                Questions
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-muted-foreground mb-8 md:mb-0"
                        >
                            Everything you need to know about Cowork Assam's
                            services and facilities.
                        </motion.p>
                    </motion.div>

                    <div className="space-y-2 md:w-[60%] w-full">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                layout
                                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-600"
                            >
                                <motion.button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-6 h-[6rem] cursor-pointer focus:outline-none hover:bg-gray-50 transition-all"
                                    whileTap={{ scale: 0.995 }}
                                    layout
                                >
                                    <motion.span
                                        className="text-left text-lg font-medium text-gray-900"
                                        layout
                                    >
                                        {faq.question}
                                    </motion.span>
                                    <motion.div
                                        className="flex items-center justify-center w-8 h-8"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: '#f3f4f6',
                                        }}
                                    >
                                        <AnimatePresence
                                            mode="wait"
                                            initial={false}
                                        >
                                            {activeIndex === index ? (
                                                <motion.div
                                                    key="minus"
                                                    initial={{
                                                        rotate: 90,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        rotate: 0,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        rotate: -90,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [
                                                            0.22, 1, 0.36, 1,
                                                        ],
                                                    }}
                                                >
                                                    <Minus className="text-gray-600 size-4" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="plus"
                                                    initial={{
                                                        rotate: -90,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        rotate: 0,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        rotate: 90,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [
                                                            0.22, 1, 0.36, 1,
                                                        ],
                                                    }}
                                                >
                                                    <Plus className="text-gray-600 size-4" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                                transition: {
                                                    height: {
                                                        duration: 0.4,
                                                        ease: [
                                                            0.33, 1, 0.68, 1,
                                                        ],
                                                    },
                                                    opacity: {
                                                        duration: 0.25,
                                                        delay: 0.15,
                                                    },
                                                },
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: {
                                                        duration: 0.3,
                                                        ease: [
                                                            0.33, 1, 0.68, 1,
                                                        ],
                                                    },
                                                    opacity: {
                                                        duration: 0.15,
                                                    },
                                                },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                className="px-6 pb-6 text-gray-600"
                                                initial={{ y: 5 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </MotionConfig>
    );
}

function Landing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactButton/>
                <HeroSection />
                <CategorySection />
                <AboutSection />
                <FeaturesAmenities />
                <StatsSection />
                <LocationSection />
                <FAQPage />
                <PricingSection />
            </div>
        </div>
    );
}

export default Landing;
