function Profile() {
    try {
        return (
            <div data-name="profile-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
                <ProfileForm />
            </div>
        );
    } catch (error) {
        console.error('Profile page error:', error);
        reportError(error);
        return null;
    }
}
