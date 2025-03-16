function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} CoworkAssam. All rights
                    reserved.
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-white"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms-of-service"
                        className="text-gray-400 hover:text-white"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
