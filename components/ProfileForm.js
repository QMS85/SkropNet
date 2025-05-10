function ProfileForm() {
    try {
        const [profile, setProfile] = React.useState({
            fullName: '',
            email: '',
            phone: '',
            title: '',
            summary: '',
            experience: '',
            education: '',
            skills: '',
            cvFile: null
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const profileData = await trickleCreateObject('profile', profile);
                alert('Profile updated successfully!');
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Failed to update profile. Please try again.');
            }
        };

        const handleChange = (e) => {
            const { name, value, files } = e.target;
            if (name === 'cvFile') {
                setProfile({
                    ...profile,
                    [name]: files[0]
                });
            } else {
                setProfile({
                    ...profile,
                    [name]: value
                });
            }
        };

        return (
            <form data-name="profile-form" className="form-container" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Your Professional Profile</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={profile.fullName}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Professional Title</label>
                    <input
                        type="text"
                        name="title"
                        value={profile.title}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Professional Summary</label>
                    <textarea
                        name="summary"
                        value={profile.summary}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Work Experience</label>
                    <textarea
                        name="experience"
                        value={profile.experience}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Education</label>
                    <textarea
                        name="education"
                        value={profile.education}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Skills</label>
                    <textarea
                        name="skills"
                        value={profile.skills}
                        onChange={handleChange}
                        className="input-field h-32"
                        required
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Upload CV</label>
                    <input
                        type="file"
                        name="cvFile"
                        onChange={handleChange}
                        className="input-field"
                        accept=".pdf,.doc,.docx"
                    />
                </div>

                <button type="submit" className="btn-primary w-full">
                    Save Profile
                </button>
            </form>
        );
    } catch (error) {
        console.error('ProfileForm component error:', error);
        reportError(error);
        return null;
    }
}
