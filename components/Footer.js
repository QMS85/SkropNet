function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-800 text-white mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-lg font-semibold mb-4">About JobConnect</h3>
                            <p className="text-gray-300">Connecting talented professionals with great opportunities.</p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                                <li><a href="#jobs" className="text-gray-300 hover:text-white">Find Jobs</a></li>
                                <li><a href="#post-job" className="text-gray-300 hover:text-white">Post a Job</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-2 text-gray-300">
                                <p><i className="fas fa-envelope mr-2"></i> contact@jobconnect.com</p>
                                <p><i className="fas fa-phone mr-2"></i> (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                        <p>&copy; 2024 JobConnect. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
