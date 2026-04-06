// ============================================
// TOPICS LIST
// ============================================
const topicsList = [
    "Absurdism", "Addiction to Knowledge", "Alcohol and Drugs", "Algorithms",
    "Applied Knowledge", "Artificial Intelligence", "Artists", "Attention",
    "Authenticity", "Beliefs", "Biases", "Bureaucracy", "Business", "Career",
    "Change & Adaptation", "Chaos Theory", "Class", "Clothing", "Cognitive Dissonance",
    "Comfort & Risk", "Commitment", "Communication", "Community & Legacy",
    "Complexity", "Conformity", "Conflict", "Consciousness", "Consistency",
    "Consumerism", "Courage", "Creativity", "Critical Thinking", "Criticism",
    "Cryptography", "Cybernetics", "Democracy", "Denial", "Determinism",
    "Digital Wellness", "Discipline", "Dopamine", "Education", "Emergence",
    "Entertainment", "Environment", "Envy", "Epistemology", "Ethics",
    "Excellence", "Execution", "Existentialism", "Failure", "Faith",
    "Fallacies", "Family", "Fatherhood", "Fear", "Feedback", "Find Your Path",
    "Physical Fitness", "Focus & Concentration", "Food", "Forgiveness",
    "Fractals", "Freedom", "Friends", "Fundamentals", "Futurism", "Generosity",
    "Genius", "Goal Setting", "Gratitude", "Growing Old", "Habits",
    "Happiness", "Herds", "Heuristics", "Hesitation is Defeat",
    "Hiring and Being Hired", "History", "Home", "Honesty", "Humility",
    "Hydration", "Ideas", "Improving", "Inequality", "Information Overload",
    "Inspiration", "Integrity & Reputation", "Investing", "Intuition",
    "Jealousy", "Journaling", "Justice", "Leadership", "Learning", "Life",
    "Lifestyle", "Living Space", "Logic", "Long-Term Thinking", "Loyalty",
    "Luck vs Risk", "Marriage", "Masculinity", "Mastery", "Pure Mathematics",
    "Memory", "Mental Health", "Mentorship", "Metacognition", "Mindset",
    "Minimalism", "Moderation", "Morality", "Multitasking vs Single-tasking",
    "Narcissism", "Networking", "Networks", "Nihilism", "Opportunities",
    "Optimists", "Pain", "Paradoxes", "Parenting", "Passion Projects",
    "The Past", "Patience", "Perception", "Perfectionism", "Planning and Strategy",
    "Politicians", "Politics", "Pride", "Priorities", "Privacy",
    "Problem Solving", "Procrastination", "Productivity", "Programming",
    "Purpose", "Quantum Mechanics", "Quitting", "Reading", "Relationships",
    "Religion", "Resilience", "Respect", "Responsibility", "Rationality",
    "Satisficing", "Scars and Wounds", "Science", "Self-Awareness",
    "Self-Care", "Self-Sabotage", "Simplicity", "Simulation Theory",
    "Singularity", "Skepticism", "Skill Development", "Sleep", "Social Issues",
    "Socialism", "Society", "Solipsism", "Speed and Direction",
    "Spirituality", "Starting & Finishing", "Statistics", "Stoicism",
    "Stress", "Success", "Sustainability", "Taoism", "Taxes", "Time",
    "Tolerance", "Transhumanism", "Travel and Adventure", "Truth",
    "Victim Mentality", "Violence", "Vision", "Wealth", "Will to Stupidity",
    "Winning", "Wisdom", "Worldview"
];

// Convert topic name to filename (e.g., "Addiction to Knowledge" -> "addiction-to-knowledge")
function topicToFilename(topic) {
    return topic.toLowerCase()
        .replace(/ & /g, '-')
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Generate navigation links dynamically
function generateNavigation() {
    const container = document.getElementById('navLinksContainer');
    if (!container) return;
    
    // Get current page filename (e.g., "narcissism.html" -> "narcissism")
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    let html = '';
    for (const topic of topicsList) {
        const filename = topicToFilename(topic);
        const isActive = (currentPage === filename);
        html += `<a href="topics/${filename}.html" class="nav-link${isActive ? ' active' : ''}">${topic}</a>`;
    }
    container.innerHTML = html;
}

// ============================================
// EXISTING CODE (preserved and working)
// ============================================

// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sideNav = document.getElementById('sideNav');

if (menuToggle && closeMenu && sideNav) {
    menuToggle.addEventListener('click', function() {
        sideNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', function() {
        sideNav.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
            sideNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

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

// Observe quote cards (slight delay to ensure they exist)
setTimeout(() => {
    document.querySelectorAll('.quote-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });
}, 100);

// Simple scroll indicator for navigation
const navLinksContainer = document.querySelector('.nav-links-container');
let isScrolling;

if (navLinksContainer) {
    navLinksContainer.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(function() {
            if (navLinksContainer.scrollTop > 10) {
                navLinksContainer.style.boxShadow = 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.1)';
            } else {
                navLinksContainer.style.boxShadow = 'none';
            }
        }, 66);
    });
}

// ============================================
// RUN NAVIGATION GENERATION when page loads
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
    
    // Re-attach menu close listeners to dynamically created nav links
    setTimeout(() => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (sideNav) sideNav.classList.remove('active');
                if (document.body) document.body.style.overflow = '';
            });
        });
    }, 50);
});
