import { useState, useEffect } from "react";
import flexible from '../assets/flexible.jpg';
import aboutIMG from '../assets/aboutimg.avif';
import community from '../assets/community.webp';
import amenities from '../assets/ameneties.webp';
const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Cowork Assam is a coworking space located in Guwahati, Assam. It provides a flexible and affordable workspace for freelancers, remote workers, startups, and entrepreneurs. Coworking spaces like Cowork Assam offer shared office environments with amenities such as high-speed internet, meeting rooms, private cabins, and community events. It's ideal for individuals or small teams who want to work in a professional setting without the commitment of a traditional office lease. Along with workstations, these spaces often foster networking and collaboration through workshops, events, and community engagement. If you're considering visiting or working from there, I can help you find more details or even check out their website if you'd like!";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust speed of typing here (lower number = faster)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Cowork Assam</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Guwahati&apos;s premier coworking space designed for productivity and community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <img
                alt="Cowork Assam workspace"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                src={flexible}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Our Story</h2>
                  <p className="text-muted-foreground">
                    Cowork Assam was founded in 2020 with a simple mission: to create a space where professionals in
                    Guwahati could work, connect, and thrive. We recognized the growing need for flexible workspaces
                    that cater to the evolving work culture, especially for freelancers, remote workers, and startups.
                  </p>
                  <p className="text-muted-foreground">
                    What started as a small shared office has now grown into Guwahati&apos;s premier coworking
                    community, hosting hundreds of professionals across various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* About Cowork Assam Section */}
      <section className="h-[calc(100vh-80px)] flex justify-center items-center">
        <div className="h-[80%] w-[80%] flex justify-center items-center bg-orange-100 rounded-lg px-8">
          <p className="font-inter text-center text-lg">
            <span className="overflow-hidden border-r-2 border-black animate-blink-caret">
              {typedText}
            </span>
            <span className="animate-blink">|</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="h-[calc(100vh-80px)] flex justify-center items-center">
        <div className="h-[80%] w-[80%] bg-brown-500 rounded-lg flex overflow-hidden">
          <div className="w-[40%] h-full bg-cover bg-center bg-local transition-transform duration-500 hover:scale-110" style={{ backgroundImage: `url(${aboutIMG})`}}></div>
          <div className="w-[60%] h-full bg-amber-100 px-8 py-20">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p>
              At Cowork Assam, our mission is to empower freelancers, remote
              workers, startups, and entrepreneurs by providing a dynamic and
              inclusive workspace that nurtures productivity, creativity, and
              collaboration. We believe that great ideas are born in supportive
              environments. Our goal is to create a community-driven coworking
              space where individuals can connect, learn, and grow together. By
              offering flexible and affordable workspace solutions, we aim to
              eliminate barriers and provide opportunities for professionals to
              focus on what they do best — building, creating, and innovating.
              Through state-of-the-art facilities, vibrant networking
              opportunities, and knowledge-sharing events, we are committed to
              fostering a culture of growth and success in the heart of Assam.
              At Cowork Assam, we don't just offer a desk — we offer a place
              where your ambitions can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-16 flex flex-col items-center mb-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold">Why Choose Us?</h1>
        </div>

        {/* State-of-the-Art Amenities */}
        <div className="h-[45vh] w-[80%] flex justify-center gap-10 mb-10">
          <div className="h-full w-[35%] bg-cover bg-center bg-local rounded-lg transition-transform duration-500 hover:scale-110" style={{ backgroundImage: `url(${amenities})`}}></div>
          <div className="h-full w-[50%] bg-blue-500 text-white rounded-lg px-8 py-12">
            <h2 className="text-2xl font-bold">State-of-the-Art Amenities</h2>
            <p className="mt-4">
              Experience a productive work environment with high-speed internet,
              ergonomic seating, meeting rooms, private cabins, and refreshment
              areas — all designed to enhance your work experience.
            </p>
          </div>
        </div>

        {/* Collaborative Community */}
        <div className="h-[45vh] w-[80%] flex justify-center gap-10 mb-10">
          <div className="h-full w-[50%] bg-blue-500 text-white rounded-lg px-8 py-12">
            <h2 className="text-2xl font-bold">Collaborative Community</h2>
            <p className="mt-4">
              Be part of a vibrant community of innovators, entrepreneurs, and
              professionals. Network, exchange ideas, and grow your connections
              through our regular workshops, events, and collaborative spaces.
            </p>
          </div>
          <div className="h-full w-[35%] bg-cover bg-center bg-local rounded-lg transition-transform duration-500 hover:scale-110" style={{ backgroundImage: `url(${community})` }}></div>
        </div>

        {/* Flexible and Affordable Plans */}
        <div className="h-[45vh] w-[80%] flex justify-center gap-10">
          <div className="h-full w-[35%] bg-cover bg-center bg-local rounded-lg transition-transform duration-500 hover:scale-110" style={{ backgroundImage: `url(${flexible})` }}></div>
          <div className="h-full w-[50%] bg-blue-500 text-white rounded-lg px-8 py-12">
            <h2 className="text-2xl font-bold">Flexible and Affordable Plans</h2>
            <p className="mt-4">
              Enjoy complete flexibility with our customizable plans — from
              daily passes to monthly memberships. No long-term commitments, no
              hidden fees. Choose what works best for you and your business.
            </p>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Team</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Meet the passionate individuals behind Cowork Assam who work tirelessly to create the perfect
                    environment for our community.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="text-center">
                    <h3 className="font-medium">Vikram Sharma</h3>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="text-center">
                    <h3 className="font-medium">Meera Patel</h3>
                    <p className="text-sm text-muted-foreground">Community Manager</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="Team Member"
                    className="rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="text-center">
                    <h3 className="font-medium">Rajiv Das</h3>
                    <p className="text-sm text-muted-foreground">Operations Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;