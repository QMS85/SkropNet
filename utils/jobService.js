async function handleApply(jobId) {
    try {
        // In a real application, you would implement the job application logic here
        await trickleCreateObject(`application:${jobId}`, {
            jobId,
            appliedAt: new Date().toISOString()
        });
        alert('Application submitted successfully!');
    } catch (error) {
        console.error('Error applying for job:', error);
        alert('Failed to submit application. Please try again.');
    }
}
