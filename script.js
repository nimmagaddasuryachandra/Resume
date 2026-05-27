document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Reveal Effect for Resume Sections
    const sections = document.querySelectorAll('.resume-section');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    sections.forEach(section => {
        // Set initial structural styles for a subtle fade-in
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealOnScroll.observe(section);
    });

    // 2. Quick Click-to-Copy for Contact Details
    const contactItems = document.querySelectorAll('.header-contact p');
    
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.setAttribute('title', 'Click to copy info');
        
        item.addEventListener('click', () => {
            // Extract text content, removing any icon spacing
            const textToCopy = item.textContent.trim();
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Temporary visual tooltip feedback
                const originalText = item.innerHTML;
                item.innerHTML = `<i class="fa-solid fa-check" style="color: #22c55e;"></i> Copied!`;
                
                setTimeout(() => {
                    item.innerHTML = originalText;
                }, 1200);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });
    });

    // 3. Document Title Synchronization for Print Saving
    // Ensures that when the user saves as PDF, the file defaults to a professional name
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            const originalTitle = document.title;
            document.title = "Resume_Surya_Nimmagadda";
            
            // Trigger the print dialogue box
            window.print();
            
            // Restore title state after dialogue closes
            setTimeout(() => {
                document.title = originalTitle;
            }, 1000);
        });
    }
});