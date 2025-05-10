function Header() {
    try {
        return (
            <header data-name="header" className="bg-white shadow-sm">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <a href="#" data-name="logo" className="text-2xl font-bold text-blue-600">
                                SkropNet
                            </a>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" data-name="home-link" className="text-gray-700 hover:text-blue-600">Home</a>
                            <a href="#jobs" data-name="jobs-link" className="text-gray-700 hover:text-blue-600">Find Jobs</a>
                            <a href="#post-job" data-name="post-job-link" className="text-gray-700 hover:text-blue-600">Post a Job</a>
                            <a href="#profile" data-name="profile-link" className="text-gray-700 hover:text-blue-600">Profile</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
