function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');

        React.useEffect(() => {
            const handleHashChange = () => {
                const hash = window.location.hash.replace('#', '') || 'home';
                setCurrentPage(hash);
            };

            window.addEventListener('hashchange', handleHashChange);
            handleHashChange();

            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const renderPage = () => {
            switch (currentPage) {
                case 'jobs':
                    return <Jobs />;
                case 'post-job':
                    return <PostJob />;
                case 'profile':
                    return <Profile />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app">
                <Header />
                <main className="min-h-screen">
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
