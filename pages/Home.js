function Home() {
    try {
        return (
            <div data-name="home-page">
                <div className="bg-blue-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job Today</h1>
                            <p className="text-xl mb-8">Connect with top employers and opportunities</p>
                            <div className="flex justify-center gap-4">
                                <a href="#jobs" className="btn-secondary bg-white text-blue-600">Find Jobs</a>
                                <a href="#post-job" className="btn-secondary bg-blue-700 text-white border-white">Post a Job</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <i className="fas fa-search text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Search Jobs</h3>
                            <p className="text-gray-600">Browse through thousands of job opportunities</p>
                        </div>
                        <div className="text-center p-6">
                            <i className="fas fa-file-alt text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                            <p className="text-gray-600">Build your professional profile and CV</p>
                        </div>
                        <div className="text-center p-6">
                            <i className="fas fa-handshake text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Get Hired</h3>
                            <p className="text-gray-600">Apply and connect with employers</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
