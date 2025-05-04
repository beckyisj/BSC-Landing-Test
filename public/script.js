document.addEventListener('DOMContentLoaded', () => {
    // Chapter panel functionality
    const chapterPanels = document.querySelectorAll('.chapter-panel');
    
    chapterPanels.forEach(panel => {
        const title = panel.querySelector('.chapter-title');
        const content = panel.querySelector('.chapter-content');
        
        title.addEventListener('click', () => {
            const isActive = panel.classList.contains('active');
            
            // Close all other panels
            chapterPanels.forEach(p => {
                p.classList.remove('active');
                p.querySelector('.chapter-content').classList.add('hidden');
                p.querySelector('.chapter-content').classList.remove('show');
            });
            
            // Toggle current panel
            if (!isActive) {
                panel.classList.add('active');
                content.classList.remove('hidden');
                content.classList.add('show');
            }
        });
    });

    // Form submission
    const waitlistForm = document.getElementById('waitlist-form');
    const formMessage = document.getElementById('form-message');

    waitlistForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = waitlistForm.querySelector('input[type="email"]').value;
        
        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                formMessage.textContent = data.message;
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                waitlistForm.reset();
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            formMessage.textContent = error.message;
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
        }
    });
}); 