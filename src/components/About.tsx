import React, { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ContactButton from "./Contact";
import { useRef } from "react";
// Import images 
import flexibleImg from "../assets/flexible.jpg";
import BackgroundShapes from "./BackgroundShapes";
// Import Pricing Section and other components
import PricingSection from "./Pricing";

// Why Choose Us Component
const WhyChooseUs: React.FC = () => {
  const chooseUsCategories = [
    {
      icon: "🚀",
      title: "Flexible Workspace Solutions",
      description: "Choose from a variety of workspace options including hot desks, dedicated desks, private cabins, and meeting rooms. Adapt your workspace to your evolving business needs without long-term commitments.",
      color: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      icon: "🌐",
      title: "High-Speed Connectivity",
      description: "Stay connected with our enterprise-grade high-speed internet. Enjoy uninterrupted video calls, fast file transfers, and seamless online collaboration with dedicated bandwidth for professionals.",
      color: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description: "Connect with a diverse community of entrepreneurs, freelancers, and innovators. Participate in regular workshops, networking events, and collaborative sessions to expand your professional network.",
      color: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      icon: "💡",
      title: "Professional Amenities",
      description: "Access state-of-the-art amenities including ergonomic furniture, high-quality printing facilities, fully equipped meeting rooms, relaxation zones, and complimentary refreshments.",
      color: "bg-orange-100",
      textColor: "text-orange-800"
    },
    {
      icon: "🛡️",
      title: "24/7 Security",
      description: "Your safety and privacy are our priority. Enjoy round-the-clock security with biometric access, CCTV surveillance, secure lockers, and a professional management team.",
      color: "bg-red-100",
      textColor: "text-red-800"
    },
    {
      icon: "💻",
      title: "Tech-Enabled Environment",
      description: "Work smarter with our tech-friendly infrastructure. Enjoy plug-and-play workstations, multiple power outlets, whiteboard spaces, and support for all your tech needs.",
      color: "bg-indigo-100",
      textColor: "text-indigo-800"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-white"
    >
      <ContactButton/>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Cowork Assam?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a workspace that goes beyond just a desk. We provide an ecosystem designed to fuel your productivity, creativity, and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {chooseUsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className={`
                ${category.color} ${category.textColor} 
                p-6 rounded-xl shadow-md transform transition-all 
                hover:scale-105 hover:shadow-lg
              `}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-base opacity-80">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Team Members Component
const TeamMembers: React.FC = () => {
  const teamMembers = [
    { 
      name: "Vikram Sharma", 
      role: "Founder & CEO", 
      image: "/path/to/vikram-image.jpg"
    },
    { 
      name: "Meera Patel", 
      role: "Community Manager", 
      image: "/path/to/meera-image.jpg"
    },
    { 
      name: "Rajiv Das", 
      role: "Operations Director", 
      image: "/path/to/rajiv-image.jpg"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals who make Cowork Assam a vibrant community of innovation and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Main About Component
const About: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Cowork Assam is a coworking space located in Guwahati, Assam. It provides a flexible and affordable workspace for freelancers, remote workers, startups, and entrepreneurs. Coworking spaces like Cowork Assam offer shared office environments with amenities such as high-speed internet, meeting rooms, private cabins, and community events.";

  // Refs for scroll animations
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // Animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // Inview checks
  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  // Scroll animations
  useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
  }, [inView1, inView2]);

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full  md:h-[60vh]"
      >
<BackgroundShapes/>
        <div className="container mx-auto md:px-4 py-16">
          <div className="text-center space-y-6">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-[12rem] font-bold tracking-tight text-green-500 [text-shadow:3px_3px_0px_black]"
            >
              Coworksssam
            </motion.h1>
            <p className="text-sm mx-auto md:text-xl text-gray-600">
              Guwahati&apos;s premier coworking space designed for productivity and community.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={fadeInVariants}
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.img 
          src={flexibleImg} 
          alt="Cowork Assam workspace"
          className="rounded-xl shadow-lg object-cover w-full h-96"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Cowork Assam was founded in 2020 with a simple mission: to create a space where professionals in Guwahati could work, connect, and thrive.
          </p>
          <p className="text-gray-600">
            What started as a small shared office has now grown into Guwahati&apos;s premier coworking community, hosting hundreds of professionals across various industries.
          </p>
        </div>
      </motion.section>

      {/* Typing Animation Section */}
      <motion.section 
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInVariants}
        className="bg-orange-50 py-16 px-4"
      >
        <div className="container mx-auto max-w-3xl bg-orange-100 p-8 rounded-xl">
          <p className="text-center text-lg text-gray-800">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Team Members Section */}
      <TeamMembers />

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default About;