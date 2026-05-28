document.addEventListener('DOMContentLoaded', () => {
    
    const navAnchors = document.querySelectorAll('.nav-anchor');
    const targetBlocks = document.querySelectorAll('.scroll-target');
    const printCommandBtn = document.getElementById('print-command');

    // Dynamic Scroll Spy Navigation Tracking Engine
    window.addEventListener('scroll', () => {
        let currentBlockId = "";
        
        targetBlocks.forEach(block => {
            const blockTop = block.offsetTop;
            // Evaluates focus targets while adjusting for fixed navbar offset
            if (window.scrollY >= blockTop - 140) {
                currentBlockId = block.getAttribute('id');
            }
        });

        navAnchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('href') === `#${currentBlockId}`) {
                anchor.classList.add('active');
            }
        });
    });

    // High-Fidelity PDF Print Transformation Setup
    if (printCommandBtn) {
        printCommandBtn.addEventListener('click', () => {
            const activeTitleCache = document.title;
            
            // Adjust metadata filename string before print prompt launch
            document.title = "Resume_Nimmagadda_Suryachandra";
            
            // Trigger browser native print dialogue interface box
            window.print();
            
            // Restore default page title string context
            setTimeout(() => {
                document.title = activeTitleCache;
            }, 1000);
        });
    }
});