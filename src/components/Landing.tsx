import { FaArrowRight } from 'react-icons/fa6';

function Landing() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Where professionals and ideas come together
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Whether you're a freelancer looking for your next
                            creative space or a team searching for a
                            collaborative environment for your upcoming project,
                            find it all on the CoWorkSpaces marketplace.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-full px-6 py-3 bg-black text-white hover:bg-gray-800 flex items-center gap-2">
                                Let's Get Started
                                <FaArrowRight className="h-4 w-4" />
                            </button>
                            <button className="rounded-full px-6 py-3">
                                Book a free tour
                            </button>
                        </div>
                    </div>
                    <div className="relative z-0">
                        <div className="relative">
                            <img
                                src="/coding-pana.svg"
                                alt="Coworking space illustration"
                                width={500}
                                height={500}
                                className="mx-auto"
                            />
                            <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold">
                                    Premium Amenities
                                </h3>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white">
                                            ✓
                                        </div>
                                        High-speed internet
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white">
                                            ✓
                                        </div>
                                        24/7 access available
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="py-8 flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        PRIVATE OFFICES
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        HOT DESKS
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        MEETING ROOMS
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        EVENT SPACES
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        VIRTUAL OFFICE
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        ENTERPRISE
                    </span>
                </div>

                {/* Stats Section */}
                <div className="py-16 grid md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-xl p-8 my-12">
                    <div className="flex flex-col items-start">
                        <div className="text-6xl font-bold">500+</div>
                        <p className="text-gray-600 mt-2">
                            members across our locations that collaborate and
                            place a lot of trust in our spaces
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold">
                                Mastery of
                                <br />
                                Workspace Innovation
                            </h2>
                            <div>
                                <span className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium mr-2">
                                    AMENITIES
                                </span>
                                <span className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
                                    DESIGN
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            We're committed to creating productive environments,
                            assisting professionals to thrive in their work.
                            With years of experience, we are proficient in
                            embracing modern workspace trends and technology.
                        </p>
                        <button className="mt-4 p-0 flex items-center gap-1">
                            Read More <FaArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Productivity Section */}
                <div className="py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            Productivity Specialist
                        </h2>
                        <div className="text-8xl font-bold">98%</div>
                        <h3 className="text-xl font-medium mt-6 mb-4">
                            Understand what works—and why.
                        </h3>
                        <p className="text-gray-600">
                            Cease guessing. Identify which workspace and
                            environment strongly appeal to your team and the
                            reasons why. Our spaces are designed based on
                            research and user feedback.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[80, 60, 90, 70].map((height, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-end h-64"
                            >
                                <div
                                    className={`w-full ${i === 2 ? 'bg-gray-300 bg-stripes' : 'bg-gray-800'}`}
                                    style={{ height: `${height}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Find us Section */}
                <div className="py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-8">
                            Coworkerassam is <br />
                            waiting for you !!!
                        </h2>
                        <p className="text-2xl font-thin">
                            Come find us! We're located in the heart of
                            Guwahati.
                        </p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114625.31801983615!2d91.70438363906251!3d26.130200000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591776a585f7%3A0x34180a82a35e9f33!2sDigital%20Notice%20Media%20Labs!5e0!3m2!1sen!2sin!4v1742154650506!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
