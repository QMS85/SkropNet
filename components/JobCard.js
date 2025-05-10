function JobCard({ job }) {
    try {
        return (
            <div data-name="job-card" className="job-card">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 data-name="job-title" className="text-xl font-semibold text-gray-800">{job.title}</h3>
                        <p data-name="company-name" className="text-gray-600 mt-1">{job.company}</p>
                    </div>
                    <span data-name="job-type" className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {job.type}
                    </span>
                </div>
                <div className="mt-4">
                    <p data-name="job-location" className="text-gray-600"><i className="fas fa-map-marker-alt mr-2"></i>{job.location}</p>
                    <p data-name="job-salary" className="text-gray-600 mt-1"><i className="fas fa-money-bill-wave mr-2"></i>{job.salary}</p>
                </div>
                <p data-name="job-description" className="mt-4 text-gray-600">{job.description}</p>
                <div className="mt-4 flex justify-end">
                    <button 
                        data-name="apply-button"
                        className="btn-primary"
                        onClick={() => handleApply(job.id)}>
                        Apply Now
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('JobCard component error:', error);
        reportError(error);
        return null;
    }
}
