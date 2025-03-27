

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#284431] to-black text-white py-20 font-mono text-center w-[100wh]">
            <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between w-full px-6">
                <div className="flex flex-col md:w-[30%] w-ful md:text-md text-sm w-[70%]   text-start ">
                    <h3 className="text-[#00bcd4]">About Us</h3>
                    <p>
                        Coworkassam is a dynamic and collaborative workspace
                        designed for freelancers, startups, and remote
                        professionals. Our space fosters innovation,
                        productivity, and networking in the heart of Assam.
                    </p>
                </div>

                <div className="flex gap-4 flex-col md:w-[30%] w-full md:text-md text-sm md:text-end text-start">
                    <h2 className=" ">
                    Experience Our Community First-Hand
                    </h2>
                    <h2 className=" ">
                        <p>
                            Book a tour today and discover how CoworkAssam can
                            elevate your workday.
                        </p>
                    </h2>
                    <div className="flex items-start gap-3  md:justify-end ">
                    <button
                        onClick={() => (window.location.href = '/booktour')}
                        className="bg-[#00bcd4] text-white border-none py-3 px-6   text-base cursor-pointer rounded-full hover:bg-[#0097a7]"
                    >
                        book a tour
                    </button>
                    <button className="border-[#00bcd4] text-white border-2 py-3 px-6  text-base cursor-pointer rounded-full hover:bg-[#0097a7]">
                        Contact us
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly text-center items-center mt-10">
                <div className="hidden w-[30%] md:flex  text-start flex-col ">
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
                <div className="hidden w-[30%] md:flex  text-start flex-col">
                    <h3 className="text-[#00bcd4]">Contact Us</h3>
                    <p>Email: hello@CoworkAssam.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: 123 Gandhi Road, Guwahati, Assam 781001</p>
                </div>
                <div className="flex w-[30%]  flex-col text-start">
                    <h3 className="text-[#00bcd4] hidden">Follow Us</h3>
                    <div className="md:flex hidden">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img
                                src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-image-galleries--imagekbm-25.png"
                                alt="Facebook"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.miENnckLURUKhMbu8TDL5gHaHa&pid=Api&P=0&h=180"
                                alt="Instagram"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP._zWnyIucuXe-KdIdFFvl2gHaHa&pid=Api&P=0&h=180"
                                alt="LinkedIn"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <img
                                src="https://tse2.mm.bing.net/th?id=OIP.5yezTgNqmRch35iJsm0xBQHaHa&pid=Api&P=0&h=180"
                                alt="WhatsApp"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.telegram.com/" target="_blank">
                            <img
                                src="https://c0.klipartz.com/pngpicture/309/9/gratis-png-telegramas-iconos-de-ordenador-aplicaciones-de-mensajeria.png"
                                alt="Telegram"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                                alt="X"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="text-[3rem] md:text-[10rem] font-bold text-gray-100">
                COWORKASSAM
            </h1>
            <div className="text-center mt-1 border-t border-[#444] pt-3">
                <p>©️ 2025 CoworkAssam. All Rights Reserved.</p>
            </div>
            <div className="md:hidden pt-8 flex items-center justify-center gap-4">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img
                                src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-image-galleries--imagekbm-25.png"
                                alt="Facebook"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.miENnckLURUKhMbu8TDL5gHaHa&pid=Api&P=0&h=180"
                                alt="Instagram"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIP._zWnyIucuXe-KdIdFFvl2gHaHa&pid=Api&P=0&h=180"
                                alt="LinkedIn"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <img
                                src="https://tse2.mm.bing.net/th?id=OIP.5yezTgNqmRch35iJsm0xBQHaHa&pid=Api&P=0&h=180"
                                alt="WhatsApp"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://www.telegram.com/" target="_blank">
                            <img
                                src="https://c0.klipartz.com/pngpicture/309/9/gratis-png-telegramas-iconos-de-ordenador-aplicaciones-de-mensajeria.png"
                                alt="Telegram"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                                alt="X"
                                className="w-8 h-8  rounded-full transition-transform hover:scale-110"
                            />
                        </a>
                    </div>
        </footer>
    );
}

export default Footer;
