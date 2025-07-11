document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    
    // Simple validation
    if (!form.name.value || !form.email.value || !form.message.value) {
        alert('Please fill all fields');
        return;
    }

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Show success modal
            document.getElementById('successModal').style.display = 'flex';
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        alert('Network error. Please check your connection.');
    });
});

// Close modal
document.querySelector('.modal-close').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});
    // Highlight active navigation item on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    // Projects Section Functionality
function initProjects() {
    // Get all project cards and modals
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.project-modal');
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Function to open modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Set a reasonable iframe height
            const iframe = modal.querySelector('iframe');
            if (iframe) {
                iframe.style.height = '500px';
            }
        }
    }
    
    // Function to close all modals
    function closeModals() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
    
    // Add click event to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });
    
    // Add click event to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModals();
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .timeline-item, .education-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Your other existing JavaScript...
});
    // Project modal functionality
    function openProject(projectId) {
        const modal = document.getElementById(projectId);
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        
        // Focus the close button for accessibility
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.focus();
        
        // Set a reasonable iframe height
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            iframe.style.height = '500px';
        }
    }
    
    function closeModal() {
        const modals = document.querySelectorAll('.project-modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        document.body.style.overflow = "auto";
    }
    
    // Close when clicking outside modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('project-modal')) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .timeline-item, .education-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Simple form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});
