function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                About CoworkingAssam
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
                Welcome to <span className="font-semibold">CoworkingAssam</span>
                , a dynamic and collaborative workspace designed for
                freelancers, startups, and remote professionals. Our space
                fosters innovation, productivity, and networking in the heart of
                Assam.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">
                        🚀 Flexible Workspaces
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Choose from hot desks, private cabins, and conference
                        rooms tailored to your needs.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">
                        🤝 Community & Networking
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Connect with like-minded professionals, attend events,
                        and grow your business.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">
                        ⚡ High-Speed Internet
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Enjoy uninterrupted work with lightning-fast WiFi and
                        modern office facilities.
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-lg text-gray-700">
                    Join us today and experience a productive work environment
                    like never before.
                </p>
                <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-500 transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default About;
