function JobForm() {
    try {
        const [formData, setFormData] = React.useState({
            title: '',
            company: '',
            location: '',
            type: 'Full-time',
            salary: '',
            description: '',
            requirements: ''
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const jobData = await trickleCreateObject('job', formData);
                alert('Job posted successfully!');
                setFormData({
                    title: '',
                    company: '',
                    location: '',
                    type: 'Full-time',
                    salary: '',
                    description: '',
                    requirements: ''
                });
            } catch (error) {
                console.error('Error posting job:', error);
                alert('Failed to post job. Please try again.');
            }
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <form data-name="job-form" className="form-container" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="input-field"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Salary Range</label>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Requirements</label>
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                    Post Job
                </button>
            </form>
        );
    } catch (error) {
        console.error('JobForm component error:', error);
        reportError(error);
        return null;
    }
}
