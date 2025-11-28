 // Theme toggle functionality
        document.getElementById('themeToggle').addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            this.classList.toggle('active');
        });

        // Add subtle animation to quote cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.quote-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            observer.observe(card);
        });

        // Simple scroll indicator for navigation
        const navLinksContainer = document.querySelector('.nav-links-container');
        let isScrolling;
        
        navLinksContainer.addEventListener('scroll', function() {
            // Clear our timeout throughout the scroll
            window.clearTimeout(isScrolling);
            
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(function() {
                // Add a subtle shadow when scrolled (not at top)
                if (navLinksContainer.scrollTop > 10) {
                    navLinksContainer.style.boxShadow = 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.1)';
                } else {
                    navLinksContainer.style.boxShadow = 'none';
                }
            }, 66);
        });