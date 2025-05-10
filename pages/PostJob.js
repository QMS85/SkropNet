function PostJob() {
    try {
        return (
            <div data-name="post-job-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
                <JobForm />
            </div>
        );
    } catch (error) {
        console.error('PostJob page error:', error);
        reportError(error);
        return null;
    }
}
