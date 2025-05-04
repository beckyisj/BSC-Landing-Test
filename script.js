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
}); 