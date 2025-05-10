function Jobs() {
    try {
        const [jobs, setJobs] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            loadJobs();
        }, []);

        const loadJobs = async () => {
            try {
                const response = await trickleListObjects('job');
                setJobs(response.items);
                setLoading(false);
            } catch (error) {
                console.error('Error loading jobs:', error);
                setLoading(false);
            }
        };

        const handleSearch = async (searchParams) => {
            setLoading(true);
            try {
                // In a real application, you would implement filtering logic here
                const response = await trickleListObjects('job');
                setJobs(response.items);
            } catch (error) {
                console.error('Error searching jobs:', error);
            }
            setLoading(false);
        };

        return (
            <div data-name="jobs-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>
                
                <SearchBar onSearch={handleSearch} />

                {loading ? (
                    <div className="text-center py-8">
                        <i className="fas fa-spinner fa-spin text-3xl text-blue-600"></i>
                    </div>
                ) : jobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                        {jobs.map(job => (
                            <JobCard key={job.objectId} job={job.objectData} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-600">
                        No jobs found. Please try different search criteria.
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Jobs page error:', error);
        reportError(error);
        return null;
    }
}
