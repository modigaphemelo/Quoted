// TOPICS LIST
const topicsList = [
    "A Finished Thing",
    "Absurdism",
    "Addiction to Knowledge",
    "Alcohol and Drugs",
    "Algorithms",
    "Apophenia (False Patterns)",
    "Applied Knowledge",
    "Artificial Intelligence",
    "Artists",
    "Attention",
    "Authenticity",
    "Beliefs",
    "Biases",
    "Bureaucracy",
    "Business",
    "Career",
    "Change & Adaptation",
    "Chaos Theory",
    "Class",
    "Clothing",
    "Cognitive Dissonance",
    "Comfort & Risk",
    "Commitment",
    "Communication",
    "Community & Legacy",
    "Complexity",
    "Compound Interest",
    "Confirmation Bias",
    "Conformity",
    "Conflict",
    "Consciousness",
    "Consistency",
    "Consumerism",
    "Courage",
    "Creativity",
    "Critical Thinking",
    "Criticism",
    "Cryptography",
    "Curse of Knowledge",
    "Cybernetics",
    "Democracy",
    "Denial",
    "Determinism",
    "Digital Wellness",
    "Discipline",
    "Dopamine",
    "Dunning-Kruger Effect",
    "Education",
    "Emergence",
    "Enough",
    "Entertainment",
    "Environment",
    "Envy",
    "Epistemology",
    "Ethics",
    "Excellence",
    "Execution",
    "Existentialism",
    "Failure",
    "Faith",
    "Fallacies",
    "Family",
    "Fatherhood",
    "Fear",
    "Feedback",
    "Find Your Path",
    "Focus & Concentration",
    "Food",
    "Forgiveness",
    "Fractals",
    "Freedom",
    "Friends",
    "Fundamental Attribution Error",
    "Fundamentals",
    "Futurism",
    "Gambling & The Illusion of Control",
    "Generosity",
    "Genius",
    "Goal Setting",
    "Goodhart's Law",
    "Gratitude",
    "Gray Rock & No Contact",
    "Grief (Unfinished)",
    "Growing Old",
    "Habits",
    "Happiness",
    "Herds",
    "Heuristics",
    "Hesitation is Defeat",
    "Hindsight Bias",
    "Hiring and Being Hired",
    "History",
    "Home",
    "Honesty",
    "Hoovering",
    "Humility",
    "Hydration",
    "Ideas",
    "Illusory Superiority",
    "Improving",
    "Inequality",
    "Inflation",
    "Information Overload",
    "Inspiration",
    "Integrity & Reputation",
    "Intuition",
    "Investing",
    "Jealousy",
    "Journaling",
    "Justice",
    "Leadership",
    "Learning",
    "Leverage",
    "Life",
    "Lifestyle",
    "Living Space",
    "Logic",
    "Loneliness vs Solitude",
    "Long-Term Thinking",
    "Loyalty",
    "Luck vs Risk",
    "Marriage",
    "Masculinity",
    "Mastery",
    "Memory",
    "Mental Health",
    "Mentorship",
    "Metacognition",
    "Mindset",
    "Minimalism",
    "Moderation",
    "Morality",
    "Motivated Reasoning",
    "Multitasking vs Single-tasking",
    "Narcissism",
    "Negativity Bias",
    "Networking",
    "Networks",
    "Nihilism",
    "Opportunities",
    "Optimism Bias",
    "Optimists",
    "Pain",
    "Paradoxes",
    "Parenting",
    "Passion Projects",
    "Patience",
    "Perception",
    "Perfectionism",
    "Physical Fitness",
    "Planning and Strategy",
    "Play / Unstructured Time",
    "Politicians",
    "Politics",
    "Pride",
    "Priorities",
    "Privacy",
    "Problem Solving",
    "Procrastination",
    "Productivity",
    "Programming",
    "Pure Mathematics",
    "Purpose",
    "Quantum Mechanics",
    "Quitting",
    "Rationality",
    "Reading",
    "Regulatory Capture",
    "Relationships",
    "Religion",
    "Resilience",
    "Respect",
    "Responsibility",
    "Satisficing",
    "Scars and Wounds",
    "Scars as Evidence",
    "Science",
    "Self-Awareness",
    "Self-Care",
    "Self-Sabotage",
    "Signaling vs Skill",
    "Simplicity",
    "Simulation Theory",
    "Singularity",
    "Skepticism",
    "Skill Development",
    "Sleep",
    "Social Issues",
    "Socialism",
    "Society",
    "Solipsism",
    "Speed and Direction",
    "Spirituality",
    "Starting & Finishing",
    "Statistics",
    "Stoicism",
    "Stress",
    "Success",
    "Sunk Cost Fallacy",
    "Sustainability",
    "Taoism",
    "Taxes",
    "The 20-Minute Rule",
    "The Addict Archetype",
    "The Avoider Archetype",
    "The Backfire Effect",
    "The Borderline Pattern",
    "The Iron Law of Oligarchy",
    "The Labor Market",
    "The Map is Not the Territory",
    "The Narcissist Filter",
    "The Narcissist's Playbook",
    "The Opposite of Narcissism",
    "The Past",
    "The Peter Principle",
    "The Planning Fallacy",
    "The Rescuer Archetype",
    "The Spotlight Effect",
    "The Victim Archetype",
    "Time",
    "Tolerance",
    "Transhumanism",
    "Travel and Adventure",
    "Triangulation",
    "Truth",
    "Victim Mentality",
    "Violence",
    "Vision",
    "Wealth",
    "Will to Stupidity",
    "Winning",
    "Wisdom",
    "Worldview",
    "Your Own Word"
];

function topicToFilename(topic) {
    return topic.toLowerCase()
        .replace(/ & /g, '-')
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

function generateNavigation() {
    const container = document.getElementById('navLinksContainer');
    if (!container) return;
    
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    let html = '';
    for (const topic of topicsList) {
        const filename = topicToFilename(topic);
        const isActive = (currentPage === filename);
        html += `<a href="${filename}.html" class="nav-link${isActive ? ' active' : ''}">${topic}</a>`;
    }
    container.innerHTML = html;
}

// Mobile menu
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

    document.addEventListener('click', function(event) {
        if (!sideNav.contains(event.target) && !menuToggle.contains(event.target)) {
            sideNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Quote card animations
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

setTimeout(() => {
    document.querySelectorAll('.quote-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });
}, 100);

// Scroll indicator
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

// Initialize navigation and re-attach menu close to dynamic links
document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
    
    setTimeout(() => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (sideNav) sideNav.classList.remove('active');
                if (document.body) document.body.style.overflow = '';
            });
        });
    }, 50);
});
