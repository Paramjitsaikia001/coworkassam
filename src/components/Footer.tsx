function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white p-10 font-mono text-center">
            <h1 className="text-2xl mb-5 uppercase">coworkassam</h1>
            <h2 className="text-xl mt-2">
                <p>Experience Our Community First-Hand</p>
            </h2>
            <h2 className="text-xl mt-2">
                <p>
                    Book a tour today and discover how CoworkAssam can elevate
                    your workday.
                </p>
            </h2>
            <button 
            onClick={() => window.location.href = '/booktour'}
            className="bg-[#00bcd4] text-white border-none py-3 px-6 mt-2 mb-5 mr-2 text-base cursor-pointer rounded hover:bg-[#0097a7]">
                book a tour
            </button>
            <button className="bg-[#00bcd4] text-white border-none py-3 px-6 mt-2 mb-5 text-base cursor-pointer rounded hover:bg-[#0097a7]">
                Contact us
            </button>
            <div className="flex flex-wrap justify-between mt-10">
                <div className="flex-1 min-w-[250px] m-5 text-start" >
                    <h3 className="text-[#00bcd4]">About Us</h3>
                    <p >
                        Coworkassam is a dynamic and collaborative workspace
                        designed for freelancers, startups, and remote
                        professionals. Our space fosters innovation,
                        productivity, and networking in the heart of Assam.
                    </p>
                </div>
                <div className="flex-1 min-w-[250px] m-5 text-start">
                    <h3 className="text-[#00bcd4]">Quick Links</h3>
                    <ul className="list-none p-0">
                        <li>
                            <a
                                href="index.html"
                                className="text-white no-underline transition-colors hover:text-[#00bcd4]"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="service.html"
                                className="text-white no-underline transition-colors hover:text-[#00bcd4]"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="contact.html"
                                className="text-white no-underline transition-colors hover:text-[#00bcd4]"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="about.html"
                                className="text-white no-underline transition-colors hover:text-[#00bcd4]"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 min-w-[250px] m-5 text-start">
                    <h3 className="text-[#00bcd4]">Contact Us</h3>
                    <p>Email: hello@CoworkAssam.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: 123 Gandhi Road, Guwahati, Assam 781001</p>
                </div>
                <div className="flex-1 min-w-[250px] m-5">
                    <h3 className="text-[#00bcd4]">Follow Us</h3>
                    <div className="flex">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img
                                src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-image-galleries--imagekbm-25.png"
                                alt="Facebook"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.miENnckLURUKhMbu8TDL5gHaHa&pid=Api&P=0&h=180"
                                alt="Instagram"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP._zWnyIucuXe-KdIdFFvl2gHaHa&pid=Api&P=0&h=180"
                                alt="LinkedIn"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <img
                                src="https://tse2.mm.bing.net/th?id=OIP.5yezTgNqmRch35iJsm0xBQHaHa&pid=Api&P=0&h=180"
                                alt="WhatsApp"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.telegram.com/" target="_blank">
                            <img
                                src="https://c0.klipartz.com/pngpicture/309/9/gratis-png-telegramas-iconos-de-ordenador-aplicaciones-de-mensajeria.png"
                                alt="Telegram"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                                alt="X"
                                className="w-10 h-10 m-1 rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 border-t border-[#444] pt-5">
                <p>©️ 2025 CoworkAssam. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
