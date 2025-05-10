function SearchBar({ onSearch }) {
    try {
        const [searchParams, setSearchParams] = React.useState({
            keyword: '',
            location: '',
            jobType: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            onSearch(searchParams);
        };

        const handleChange = (e) => {
            setSearchParams({
                ...searchParams,
                [e.target.name]: e.target.value
            });
        };

        return (
            <form data-name="search-form" className="search-bar" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            name="keyword"
                            placeholder="Job title or keyword"
                            value={searchParams.keyword}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={searchParams.location}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <select
                            name="jobType"
                            value={searchParams.jobType}
                            onChange={handleChange}
                            className="input-field"
                        >
                            <option value="">All Job Types</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <button type="submit" className="btn-primary px-8">
                        Search Jobs
                    </button>
                </div>
            </form>
        );
    } catch (error) {
        console.error('SearchBar component error:', error);
        reportError(error);
        return null;
    }
}
