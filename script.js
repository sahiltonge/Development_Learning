/**
 * Sahil | Premium Interactive Portfolio
 * Main JavaScript File
 */

// ==========================================================================
// DEFAULT RESUME DATA CONFIGURATION
// ==========================================================================
const defaultResumeData = {
    name: "Sahil Tonge",
    logoText: "Sahil",
    roles: ["Software Developer", "Full Stack Developer", "IoT Specialist"],
    avatar: "",
    tagline: "To begin my career as a Software Developer where I can apply my knowledge of Core Java and Full Stack Web Development to build efficient and user-friendly applications.",
    bio: "I am an aspiring Software Developer seeking opportunities to work on real-world projects, improve my technical skills, and grow in the field of software development. I have hands-on training in Full Stack Web Development, focusing on core web technologies, MERN stack, and Core Java. Additionally, I hold a B.Tech in Industrial Internet of Things, blending hardware-software integration, cloud technologies, and database automation.",
    email: "sahiltonge85@gmail.com",
    phone: "9067369740",
    location: "Nagpur, Maharashtra",
    socials: {
        github: "https://github.com/sahiltonge",
        linkedin: "https://linkedin.com/in/sahil-tonge",
        twitter: "https://twitter.com"
    },
    skills: [
        { name: "Core Java", level: 85, category: "backend" },
        { name: "JavaScript (ES6+)", level: 85, category: "frontend" },
        { name: "SQL", level: 80, category: "backend" },
        { name: "HTML5 / CSS3", level: 90, category: "frontend" },
        { name: "React.js", level: 85, category: "frontend" },
        { name: "React Native", level: 75, category: "frontend" },
        { name: "Tailwind CSS", level: 85, category: "frontend" },
        { name: "Bootstrap", level: 80, category: "frontend" },
        { name: "Node.js", level: 80, category: "backend" },
        { name: "Express.js", level: 80, category: "backend" },
        { name: "REST APIs", level: 85, category: "backend" },
        { name: "Firebase", level: 80, category: "backend" },
        { name: "Git & GitHub", level: 85, category: "tools" },
        { name: "Data Structures (DSA)", level: 75, category: "tools" },
        { name: "Cloud Computing", level: 75, category: "tools" }
    ],
    experience: [
        {
            title: "Full Stack Web Development Trainee",
            company: "Internshala Training",
            period: "Training & Certifications",
            desc: "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB;Built projects like Weather Forecast App, Student Registration System, and E-Commerce website;Implemented features such as authentication, CRUD operations, API integration, and local storage;Worked on frontend and backend integration to create complete web applications;Used Git and GitHub for project management and version control",
            tags: "React.js, Node.js, Express.js, MongoDB, Git"
        },
        {
            title: "Accounts Receivable (AR) Trainee",
            company: "Ascent Business Solutions",
            period: "Professional Experience",
            desc: "Worked in the Accounts Receivable (AR) process under Revenue Cycle Management (RCM);Handled claim follow-ups and maintained accurate records and reports;Developed analytical, communication, and problem-solving skills in a professional work environment",
            tags: "Revenue Cycle Management, Analysis, RCM Reports"
        }
    ],
    projects: [
        {
            title: "ShoppyGlobe E-Commerce Website",
            category: "webapp",
            desc: "Developed a responsive e-commerce frontend application using React.js. Integrated product API to fetch and display product data dynamically. Implemented features like product listing, search functionality, cart management, and responsive UI design.",
            tags: "React.js, API Integration, Cart Management, Responsive UI",
            demo: "https://github.com/sahiltonge",
            code: "https://github.com/sahiltonge",
            image: ""
        },
        {
            title: "YouTube Clone Website",
            category: "webapp",
            desc: "Built a YouTube clone website from scratch using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). Developed responsive frontend components including navbar, sidebar, and video sections. Integrated APIs for dynamic video content display and data handling. Implemented responsive design for smooth user experience across devices.",
            tags: "MERN Stack, React.js, Node.js, Express.js, MongoDB",
            demo: "https://github.com/sahiltonge",
            code: "https://github.com/sahiltonge",
            image: ""
        },
        {
            title: "IoT Smart Hydroponic Monitoring",
            category: "webapp",
            desc: "Developed an IoT-based monitoring system for real-time tracking of environmental and sensor data. Used Firebase for real-time database management and cloud data synchronization. Implemented sensor data collection, monitoring, and device communication functionalities. Worked on hardware-software integration and real-time data handling for system automation.",
            tags: "IoT, Firebase, Hardware-Software Integration, Real-time Data",
            demo: "https://github.com/sahiltonge",
            code: "https://github.com/sahiltonge",
            image: ""
        }
    ],
    education: [
        {
            degree: "B.Tech – Industrial Internet of Things",
            school: "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
            period: "12/2021 – 06/2025",
            details: "Nagpur, Maharashtra. Specialization in IoT, hardware-software automation, device integration, and database mapping."
        },
        {
            degree: "Full Stack Web Development Certification",
            school: "Internshala Training",
            period: "2024",
            details: "Learned MERN Stack development, REST APIs, authentication, and responsive web application development."
        },
        {
            degree: "Git and GitHub Certification",
            school: "Online Certification",
            period: "2024",
            details: "Learned version control, branching, repository management, and collaborative development workflows."
        },
        {
            degree: "Data Structures and Algorithms (DSA)",
            school: "Certification Board",
            period: "2024",
            details: "Learned problem-solving techniques, algorithms, and core data structures for efficient programming."
        },
        {
            degree: "Cloud Computing Certification — NPTEL",
            school: "NPTEL / IIT Kharagpur",
            period: "2023",
            details: "Learned cloud computing fundamentals, virtualization, and cloud service models."
        }
    ]
};

// Global State
let resumeData = {};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    initTheme();
    initCustomCursor();
    initScrollInteractions();
    initRevealAnimations();
    initMobileNav();
    initCustomizerPanel();
    initContactForm();
    
    // Render website with resume data
    renderAll();
    
    // Start typed animation
    startTypingAnimation();
});

// Load state from localStorage or use defaults
function loadState() {
    const savedData = localStorage.getItem("sahil_resume_portfolio_data_v2");
    if (savedData) {
        try {
            resumeData = JSON.parse(savedData);
        } catch (e) {
            console.error("Failed to parse saved resume data. Reverting to default.", e);
            resumeData = JSON.parse(JSON.stringify(defaultResumeData));
        }
    } else {
        resumeData = JSON.parse(JSON.stringify(defaultResumeData));
    }
}

// Save current state to localStorage
function saveState() {
    localStorage.setItem("sahil_resume_portfolio_data_v2", JSON.stringify(resumeData));
}

// ==========================================================================
// DOM RENDERING ENGINE
// ==========================================================================
function renderAll() {
    renderGeneral();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    
    // Update Customizer lists to reflect new data
    updateCustomizerLists();
}

function renderGeneral() {
    // Page Title
    document.title = `${resumeData.name} | Premium Interactive Portfolio`;
    
    // Logo texts
    document.getElementById("logo-text").innerText = resumeData.logoText || resumeData.name;
    document.getElementById("footer-logo-text").innerText = resumeData.logoText || resumeData.name;
    
    // Hero Info
    document.getElementById("hero-name").innerText = resumeData.name;
    document.getElementById("hero-tagline").innerText = resumeData.tagline;
    
    // Avatar
    const avatarContainer = document.getElementById("avatar-container");
    if (resumeData.avatar && resumeData.avatar.trim() !== "") {
        avatarContainer.innerHTML = `<img src="${resumeData.avatar}" alt="${resumeData.name}">`;
    } else {
        avatarContainer.innerHTML = `
            <svg class="svg-avatar" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="var(--color-primary)" />
                        <stop offset="100%" stop-color="var(--color-secondary)" />
                    </linearGradient>
                    <clipPath id="avatar-clip">
                        <circle cx="50" cy="50" r="46" />
                    </clipPath>
                </defs>
                <circle cx="50" cy="50" r="48" stroke="url(#avatar-grad)" stroke-width="2" stroke-dasharray="6 3"/>
                <g clip-path="url(#avatar-clip)">
                    <rect width="100" height="100" fill="var(--color-bg-card)" />
                    <circle cx="50" cy="38" r="18" fill="url(#avatar-grad)" opacity="0.85"/>
                    <path d="M15 88C15 72 30 64 50 64C70 64 85 72 85 88" fill="url(#avatar-grad)" />
                </g>
            </svg>`;
    }
    
    // Hero Socials
    const heroSocials = document.getElementById("hero-socials");
    let socialsHtml = "";
    if (resumeData.socials.github) {
        socialsHtml += `<a href="${resumeData.socials.github}" target="_blank" class="social-btn cursor-interactive" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>`;
    }
    if (resumeData.socials.linkedin) {
        socialsHtml += `<a href="${resumeData.socials.linkedin}" target="_blank" class="social-btn cursor-interactive" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>`;
    }
    if (resumeData.socials.twitter) {
        socialsHtml += `<a href="${resumeData.socials.twitter}" target="_blank" class="social-btn cursor-interactive" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>`;
    }
    heroSocials.innerHTML = socialsHtml;
    
    // Footer Socials
    const footerSocials = document.getElementById("footer-socials-list");
    footerSocials.innerHTML = socialsHtml;
    
    // About Bio
    document.getElementById("about-bio").innerText = resumeData.bio;
    
    // About Meta Info
    const infoList = document.getElementById("about-info-list");
    infoList.innerHTML = `
        <div class="about-meta-item">
            <span class="about-meta-label">Location</span>
            <span class="about-meta-val">${resumeData.location}</span>
        </div>
        <div class="about-meta-item">
            <span class="about-meta-label">Email</span>
            <span class="about-meta-val">${resumeData.email}</span>
        </div>
        <div class="about-meta-item">
            <span class="about-meta-label">Phone</span>
            <span class="about-meta-val">${resumeData.phone}</span>
        </div>
        <div class="about-meta-item">
            <span class="about-meta-label">Availability</span>
            <span class="about-meta-val">Open for Work</span>
        </div>
    `;
    
    // Contact Info Cards
    const contactCards = document.getElementById("contact-details-container");
    contactCards.innerHTML = `
        <div class="contact-detail-card">
            <div class="contact-icon-box"><i class="fa-solid fa-envelope"></i></div>
            <div class="contact-meta">
                <h4>Email Address</h4>
                <p>${resumeData.email}</p>
            </div>
        </div>
        <div class="contact-detail-card">
            <div class="contact-icon-box"><i class="fa-solid fa-phone"></i></div>
            <div class="contact-meta">
                <h4>Phone Number</h4>
                <p>${resumeData.phone}</p>
            </div>
        </div>
        <div class="contact-detail-card">
            <div class="contact-icon-box"><i class="fa-solid fa-location-dot"></i></div>
            <div class="contact-meta">
                <h4>Location</h4>
                <p>${resumeData.location}</p>
            </div>
        </div>
    `;
    
    // Footer Copyright Name
    document.getElementById("footer-copyright-name").innerText = resumeData.name;
    
    // Setup Download Resume behavior dynamically
    const downloadResumeBtn = document.getElementById("download-resume-btn");
    downloadResumeBtn.onclick = () => {
        window.print();
    };
    
    // Populate General Forms in Customizer
    document.getElementById("cust-name").value = resumeData.name;
    document.getElementById("cust-logo").value = resumeData.logoText || "";
    document.getElementById("cust-roles").value = resumeData.roles.join(", ");
    document.getElementById("cust-avatar").value = resumeData.avatar || "";
    document.getElementById("cust-tagline").value = resumeData.tagline;
    document.getElementById("cust-bio").value = resumeData.bio;
    document.getElementById("cust-email").value = resumeData.email;
    document.getElementById("cust-phone").value = resumeData.phone;
    document.getElementById("cust-location").value = resumeData.location;
    document.getElementById("cust-github").value = resumeData.socials.github || "";
    document.getElementById("cust-linkedin").value = resumeData.socials.linkedin || "";
    document.getElementById("cust-twitter").value = resumeData.socials.twitter || "";
}

function renderSkills() {
    const frontendContainer = document.getElementById("frontend-skills");
    const backendContainer = document.getElementById("backend-skills");
    const toolsContainer = document.getElementById("tools-skills");
    
    frontendContainer.innerHTML = "";
    backendContainer.innerHTML = "";
    toolsContainer.innerHTML = "";
    
    resumeData.skills.forEach(skill => {
        const skillHtml = `
            <div class="skill-bar-item">
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-track">
                    <div class="skill-progress" data-level="${skill.level}"></div>
                </div>
            </div>
        `;
        
        if (skill.category === "frontend") {
            frontendContainer.insertAdjacentHTML("beforeend", skillHtml);
        } else if (skill.category === "backend") {
            backendContainer.insertAdjacentHTML("beforeend", skillHtml);
        } else {
            toolsContainer.insertAdjacentHTML("beforeend", skillHtml);
        }
    });
    
    // Set skill progress width dynamically for animations (Intersection observer handles animation trigger)
    setTimeout(triggerSkillBarsAnimation, 100);
}

function triggerSkillBarsAnimation() {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = `${level}%`;
    });
}

function renderExperience() {
    const timelineContainer = document.getElementById("timeline-container");
    timelineContainer.innerHTML = "";
    
    if (resumeData.experience.length === 0) {
        timelineContainer.innerHTML = `<div class="timeline-empty" style="text-align:center; padding:40px; color:var(--color-text-muted);">No work experience added yet. Click customizer to add!</div>`;
        return;
    }
    
    resumeData.experience.forEach((job, index) => {
        const bullets = job.desc.split(";").map(b => b.trim()).filter(b => b !== "");
        let bulletsHtml = "";
        if (bullets.length > 0) {
            bulletsHtml = "<ul>" + bullets.map(b => `<li>${b}</li>`).join("") + "</ul>";
        } else {
            bulletsHtml = `<p>${job.desc}</p>`;
        }
        
        const tags = job.tags.split(",").map(t => t.trim()).filter(t => t !== "");
        const tagsHtml = tags.map(tag => `<span class="tech-tag-pill">${tag}</span>`).join("");
        
        const itemHtml = `
            <div class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <span class="timeline-period">${job.period}</span>
                        <h3 class="timeline-title">${job.title}</h3>
                        <span class="timeline-company">${job.company}</span>
                    </div>
                    <div class="timeline-desc">
                        ${bulletsHtml}
                    </div>
                    <div class="tech-tags">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
        timelineContainer.insertAdjacentHTML("beforeend", itemHtml);
    });
    
    // Re-trigger reveal animation setup because new elements were injected
    initRevealAnimations();
}

function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    const filtersContainer = document.getElementById("project-filters");
    
    projectsGrid.innerHTML = "";
    
    if (resumeData.projects.length === 0) {
        projectsGrid.innerHTML = `<div class="grid-empty" style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--color-text-muted);">No projects added yet. Click customizer to add!</div>`;
        return;
    }
    
    // Gather categories for filters
    const categories = new Set();
    categories.add("all");
    
    resumeData.projects.forEach(project => {
        categories.add(project.category);
        
        const tags = project.tags.split(",").map(t => t.trim()).filter(t => t !== "");
        const tagsHtml = tags.map(tag => `<span class="tech-tag-pill">${tag}</span>`).join("");
        
        let coverHtml = "";
        if (project.image && project.image.trim() !== "") {
            coverHtml = `<img src="${project.image}" alt="${project.title}">`;
        } else {
            // Generate abstract initials text for placeholder cover
            const initials = project.title.split(" ").map(n => n[0]).join("").substring(0, 3).toUpperCase();
            coverHtml = `<div class="project-cover-placeholder">${initials}</div>`;
        }
        
        const projectHtml = `
            <div class="project-card reveal" data-category="${project.category}">
                <div class="project-cover">
                    ${coverHtml}
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-footer">
                        <div class="tech-tags">
                            ${tagsHtml}
                        </div>
                        <div class="project-links">
                            ${project.code ? `<a href="${project.code}" target="_blank" class="proj-link cursor-interactive" title="View Source Code" aria-label="Source Code"><i class="fa-brands fa-github"></i></a>` : ""}
                            ${project.demo ? `<a href="${project.demo}" target="_blank" class="proj-link cursor-interactive" title="View Live Demo" aria-label="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.insertAdjacentHTML("beforeend", projectHtml);
    });
    
    // Render filter buttons dynamically
    const activeFilter = filtersContainer.querySelector(".filter-btn.active") ? filtersContainer.querySelector(".filter-btn.active").getAttribute("data-filter") : "all";
    filtersContainer.innerHTML = "";
    
    categories.forEach(cat => {
        let label = "All Projects";
        if (cat === "webapp") label = "Web Apps";
        else if (cat === "frontend") label = "Frontend";
        else if (cat === "uiux") label = "UI/UX Designs";
        else if (cat !== "all") {
            label = cat.charAt(0).toUpperCase() + cat.slice(1);
        }
        
        const isActive = cat === activeFilter ? "active" : "";
        filtersContainer.insertAdjacentHTML("beforeend", `
            <button class="filter-btn cursor-interactive ${isActive}" data-filter="${cat}">${label}</button>
        `);
    });
    
    // Setup filter click listeners
    const filterButtons = filtersContainer.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            filterProjects(filterValue);
        });
    });
    
    // Apply project filtering initially based on active filter button
    filterProjects(activeFilter);
    initRevealAnimations();
}

function filterProjects(category) {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
            card.style.display = "flex";
            setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, 50);
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => { card.style.display = "none"; }, 300);
        }
    });
}

function renderEducation() {
    const educationGrid = document.getElementById("education-grid");
    educationGrid.innerHTML = "";
    
    if (resumeData.education.length === 0) {
        educationGrid.innerHTML = `<div class="grid-empty" style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--color-text-muted);">No education history added yet. Click customizer to add!</div>`;
        return;
    }
    
    resumeData.education.forEach(edu => {
        const eduHtml = `
            <div class="education-card reveal">
                <div class="edu-icon-box"><i class="fa-solid fa-graduation-cap"></i></div>
                <div class="edu-content">
                    <span class="edu-period">${edu.period}</span>
                    <h3 class="edu-degree">${edu.degree}</h3>
                    <span class="edu-school">${edu.school}</span>
                    <p class="edu-details">${edu.details}</p>
                </div>
            </div>
        `;
        educationGrid.insertAdjacentHTML("beforeend", eduHtml);
    });
    
    initRevealAnimations();
}

// ==========================================================================
// TYPING EFFECT
// ==========================================================================
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function startTypingAnimation() {
    if (typingTimeout) clearTimeout(typingTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeRole();
}

function typeRole() {
    const typedContainer = document.getElementById("hero-role-typed");
    if (!typedContainer) return;
    
    const rolesList = resumeData.roles && resumeData.roles.length > 0 ? resumeData.roles : ["Developer"];
    const currentRole = rolesList[roleIndex % rolesList.length];
    
    if (isDeleting) {
        typedContainer.innerText = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedContainer.innerText = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1800; // Hold typed string
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        typeSpeed = 400; // Hold empty space before typing next
    }
    
    typingTimeout = setTimeout(typeRole, typeSpeed);
}

// ==========================================================================
// DUAL-DOT CUSTOM TRAILING CURSOR
// ==========================================================================
function initCustomCursor() {
    const cursor = document.getElementById("custom-cursor");
    const dot = document.getElementById("custom-cursor-dot");
    
    if (!cursor || !dot) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate positioning for inner dot
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });
    
    // Slow trailing frame animation for outer cursor circle
    function animateCursor() {
        // Linear interpolation for smooth lag
        const lag = 0.15;
        cursorX += (mouseX - cursorX) * lag;
        cursorY += (mouseY - cursorY) * lag;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Add hover states on interactive links
    const updateInteractiveHovers = () => {
        const interactiveElements = document.querySelectorAll(
            'a, button, input, select, textarea, .cursor-interactive, .tab-btn, .filter-btn, .cust-items-list button'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
            el.addEventListener("mousedown", () => cursor.classList.add("clicking"));
            el.addEventListener("mouseup", () => cursor.classList.remove("clicking"));
        });
    };
    
    // Run hovers setup, and set a mutation observer to update on dynamic DOM updates
    updateInteractiveHovers();
    
    const observer = new MutationObserver(updateInteractiveHovers);
    observer.observe(document.body, { childList: true, subtree: true });
}

// ==========================================================================
// SCROLL INTERACTIONS (PROGRESS BAR & STICKY HEADER)
// ==========================================================================
function initScrollInteractions() {
    const header = document.getElementById("main-header");
    const backToTop = document.getElementById("back-to-top");
    const progressBar = document.getElementById("reading-progress");
    
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        
        // Sticky header transition
        if (scrollPosition > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Back to top button visibility
        if (scrollPosition > 500) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
        
        // Reading scroll progress
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (windowHeight > 0) {
            const scrollPercent = (scrollPosition / windowHeight) * 100;
            progressBar.style.width = `${scrollPercent}%`;
        }
        
        // Update nav links highlights based on scroll section in viewport
        highlightNavLinks();
    });
    
    // Back to top click handler
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    
    // Skills Tab Navigation
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const targetPaneId = `${tab.getAttribute("data-tab")}-skills`;
            document.querySelectorAll(".tab-pane").forEach(pane => {
                pane.classList.remove("active");
            });
            document.getElementById(targetPaneId).classList.add("active");
            
            // Re-trigger skill progress bars filling animation
            triggerSkillBarsAnimation();
        });
    });
}

function highlightNavLinks() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let currentSectionId = "";
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 140;
        const secHeight = sec.offsetHeight;
        if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
            currentSectionId = sec.getAttribute("id");
        }
    });
    
    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }
}

// ==========================================================================
// INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// ==========================================================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observerOptions = {
        root: null, // Viewport
        rootMargin: "0px",
        threshold: 0.12 // Trigger when 12% is visible
    };
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                obs.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// ==========================================================================
// THEME MANAGER (DARK / LIGHT)
// ==========================================================================
function initTheme() {
    const themeBtn = document.getElementById("theme-toggle");
    
    if (!themeBtn) return;
    
    // Check saved theme or use system preference (dark mode default)
    const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
    
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portfolio_theme", nextTheme);
        updateThemeIcon(nextTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector("#theme-toggle i");
    if (!icon) return;
    if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

// ==========================================================================
// MOBILE DRAWER NAVIGATION MENU
// ==========================================================================
function initMobileNav() {
    const burgerBtn = document.getElementById("mobile-nav-toggle");
    const closeBtn = document.getElementById("mobile-nav-close");
    const drawer = document.getElementById("mobile-nav");
    const links = document.querySelectorAll(".mobile-nav-link");
    const mobCustomizerBtn = document.getElementById("mobile-customizer-toggle");
    
    if (!burgerBtn || !drawer) return;
    
    const openMenu = () => drawer.classList.add("open");
    const closeMenu = () => drawer.classList.remove("open");
    
    burgerBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    
    if (mobCustomizerBtn) {
        mobCustomizerBtn.addEventListener("click", () => {
            closeMenu();
            openCustomizer();
        });
    }
}

// ==========================================================================
// LIVE RESUME CUSTOMIZER SIDEBAR PANEL LOGIC
// ==========================================================================
function initCustomizerPanel() {
    const customizerToggle = document.getElementById("customizer-toggle");
    const customizerClose = document.getElementById("customizer-close");
    const customizerPanel = document.getElementById("customizer-panel");
    const overlay = document.getElementById("customizer-overlay");
    
    if (!customizerToggle || !customizerPanel) return;
    
    // Panel Toggles
    customizerToggle.addEventListener("click", openCustomizer);
    customizerClose.addEventListener("click", closeCustomizer);
    overlay.addEventListener("click", closeCustomizer);
    
    // Customizer Navigation Tabs
    const custTabs = document.querySelectorAll(".cust-tab-btn");
    custTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            custTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const targetPaneId = tab.getAttribute("data-cust-tab");
            document.querySelectorAll(".cust-tab-pane").forEach(pane => {
                pane.classList.remove("active");
            });
            document.getElementById(targetPaneId).classList.add("active");
        });
    });
    
    // Bind Real-time General Details Inputs
    const bindGeneralInput = (inputId, stateKey, subKey = null) => {
        const input = document.getElementById(inputId);
        if (!input) return;
        
        input.addEventListener("input", (e) => {
            const val = e.target.value;
            if (subKey) {
                resumeData[stateKey][subKey] = val;
            } else if (stateKey === "roles") {
                resumeData[stateKey] = val.split(",").map(r => r.trim()).filter(r => r !== "");
                // Re-trigger typing animation with updated roles
                startTypingAnimation();
            } else {
                resumeData[stateKey] = val;
            }
            saveState();
            renderGeneral();
        });
    };
    
    bindGeneralInput("cust-name", "name");
    bindGeneralInput("cust-logo", "logoText");
    bindGeneralInput("cust-roles", "roles");
    bindGeneralInput("cust-avatar", "avatar");
    bindGeneralInput("cust-tagline", "tagline");
    bindGeneralInput("cust-bio", "bio");
    bindGeneralInput("cust-email", "email");
    bindGeneralInput("cust-phone", "phone");
    bindGeneralInput("cust-location", "location");
    bindGeneralInput("cust-github", "socials", "github");
    bindGeneralInput("cust-linkedin", "socials", "linkedin");
    bindGeneralInput("cust-twitter", "socials", "twitter");
    
    // Reset Data Event
    document.getElementById("cust-reset-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all portfolio details back to the default developer profile?")) {
            localStorage.removeItem("sahil_resume_portfolio_data_v2");
            loadState();
            renderAll();
            startTypingAnimation();
            closeCustomizer();
        }
    });
    
    // Export JSON Event
    document.getElementById("cust-export-btn").addEventListener("click", () => {
        const jsonStr = JSON.stringify(resumeData, null, 4);
        document.getElementById("export-json-text").value = jsonStr;
        
        // Open Modal
        document.getElementById("export-modal").classList.add("active");
        document.getElementById("modal-overlay").classList.add("active");
    });
    
    // Close Export Modal
    const closeExport = () => {
        document.getElementById("export-modal").classList.remove("active");
        document.getElementById("modal-overlay").classList.remove("active");
    };
    
    document.getElementById("export-modal-close").addEventListener("click", closeExport);
    document.getElementById("export-modal-close-btn").addEventListener("click", closeExport);
    document.getElementById("modal-overlay").addEventListener("click", closeExport);
    
    // Copy JSON to clipboard
    document.getElementById("copy-json-btn").addEventListener("click", () => {
        const jsonText = document.getElementById("export-json-text");
        jsonText.select();
        document.execCommand("copy");
        
        const copyBtn = document.getElementById("copy-json-btn");
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
            copyBtn.innerHTML = originalHtml;
        }, 2000);
    });
    
    // Manage Dynamic Item Actions (Add/Remove)
    bindCustomizerManagers();
}

function openCustomizer() {
    document.getElementById("customizer-panel").classList.add("open");
    document.getElementById("customizer-overlay").classList.add("active");
}

function closeCustomizer() {
    document.getElementById("customizer-panel").classList.remove("open");
    document.getElementById("customizer-overlay").classList.remove("active");
}

function bindCustomizerManagers() {
    // Add Skill
    document.getElementById("add-skill-btn").addEventListener("click", () => {
        const nameInput = document.getElementById("new-skill-name");
        const levelInput = document.getElementById("new-skill-level");
        const catSelect = document.getElementById("new-skill-cat");
        
        const name = nameInput.value.trim();
        const level = parseInt(levelInput.value) || 85;
        const category = catSelect.value;
        
        if (name === "") {
            alert("Please enter a skill name.");
            return;
        }
        
        resumeData.skills.push({ name, level, category });
        saveState();
        renderSkills();
        updateCustomizerLists();
        
        nameInput.value = "";
    });
    
    // Add Experience
    document.getElementById("add-exp-btn").addEventListener("click", () => {
        const titleInput = document.getElementById("exp-title");
        const companyInput = document.getElementById("exp-company");
        const periodInput = document.getElementById("exp-period");
        const descInput = document.getElementById("exp-desc");
        const tagsInput = document.getElementById("exp-tags");
        
        const title = titleInput.value.trim();
        const company = companyInput.value.trim();
        const period = periodInput.value.trim();
        const desc = descInput.value.trim();
        const tags = tagsInput.value.trim();
        
        if (title === "" || company === "" || period === "") {
            alert("Please fill in Job Title, Company, and Period.");
            return;
        }
        
        resumeData.experience.unshift({ title, company, period, desc, tags });
        saveState();
        renderExperience();
        updateCustomizerLists();
        
        titleInput.value = "";
        companyInput.value = "";
        periodInput.value = "";
        descInput.value = "";
        tagsInput.value = "";
    });
    
    // Add Project
    document.getElementById("add-proj-btn").addEventListener("click", () => {
        const titleInput = document.getElementById("proj-title");
        const catSelect = document.getElementById("proj-category");
        const descInput = document.getElementById("proj-desc");
        const tagsInput = document.getElementById("proj-tags");
        const demoInput = document.getElementById("proj-demo");
        const codeInput = document.getElementById("proj-code");
        const imageInput = document.getElementById("proj-image");
        
        const title = titleInput.value.trim();
        const category = catSelect.value;
        const desc = descInput.value.trim();
        const tags = tagsInput.value.trim();
        const demo = demoInput.value.trim();
        const code = codeInput.value.trim();
        const image = imageInput.value.trim();
        
        if (title === "" || desc === "") {
            alert("Please enter Project Title and Description.");
            return;
        }
        
        resumeData.projects.unshift({ title, category, desc, tags, demo, code, image });
        saveState();
        renderProjects();
        updateCustomizerLists();
        
        titleInput.value = "";
        descInput.value = "";
        tagsInput.value = "";
        demoInput.value = "";
        codeInput.value = "";
        imageInput.value = "";
    });
    
    // Add Education
    document.getElementById("add-edu-btn").addEventListener("click", () => {
        const degreeInput = document.getElementById("edu-degree");
        const schoolInput = document.getElementById("edu-school");
        const periodInput = document.getElementById("edu-period");
        const detailsInput = document.getElementById("edu-details");
        
        const degree = degreeInput.value.trim();
        const school = schoolInput.value.trim();
        const period = periodInput.value.trim();
        const details = detailsInput.value.trim();
        
        if (degree === "" || school === "" || period === "") {
            alert("Please fill in Degree, School, and Period.");
            return;
        }
        
        resumeData.education.unshift({ degree, school, period, details });
        saveState();
        renderEducation();
        updateCustomizerLists();
        
        degreeInput.value = "";
        schoolInput.value = "";
        periodInput.value = "";
        detailsInput.value = "";
    });
}

function updateCustomizerLists() {
    // Skills List
    const skillsList = document.getElementById("cust-skills-list");
    skillsList.innerHTML = "";
    resumeData.skills.forEach((skill, index) => {
        skillsList.insertAdjacentHTML("beforeend", `
            <li class="cust-item-row">
                <span>${skill.name} (${skill.level}%) [${skill.category}]</span>
                <button onclick="removeSkill(${index})" title="Delete Skill"><i class="fa-solid fa-trash"></i></button>
            </li>
        `);
    });
    
    // Experience List
    const expList = document.getElementById("cust-exp-list");
    expList.innerHTML = "";
    resumeData.experience.forEach((exp, index) => {
        expList.insertAdjacentHTML("beforeend", `
            <li class="cust-item-row">
                <span>${exp.title} - ${exp.company}</span>
                <button onclick="removeExperience(${index})" title="Delete Job"><i class="fa-solid fa-trash"></i></button>
            </li>
        `);
    });
    
    // Projects List
    const projList = document.getElementById("cust-proj-list");
    projList.innerHTML = "";
    resumeData.projects.forEach((proj, index) => {
        projList.insertAdjacentHTML("beforeend", `
            <li class="cust-item-row">
                <span>${proj.title}</span>
                <button onclick="removeProject(${index})" title="Delete Project"><i class="fa-solid fa-trash"></i></button>
            </li>
        `);
    });
    
    // Education List
    const eduList = document.getElementById("cust-edu-list");
    eduList.innerHTML = "";
    resumeData.education.forEach((edu, index) => {
        eduList.insertAdjacentHTML("beforeend", `
            <li class="cust-item-row">
                <span>${edu.degree} - ${edu.school}</span>
                <button onclick="removeEducation(${index})" title="Delete Education"><i class="fa-solid fa-trash"></i></button>
            </li>
        `);
    });
}

// Global scope deletion wrappers for simple onClick execution
window.removeSkill = (index) => {
    resumeData.skills.splice(index, 1);
    saveState();
    renderSkills();
    updateCustomizerLists();
};

window.removeExperience = (index) => {
    resumeData.experience.splice(index, 1);
    saveState();
    renderExperience();
    updateCustomizerLists();
};

window.removeProject = (index) => {
    resumeData.projects.splice(index, 1);
    saveState();
    renderProjects();
    updateCustomizerLists();
};

window.removeEducation = (index) => {
    resumeData.education.splice(index, 1);
    saveState();
    renderEducation();
    updateCustomizerLists();
};

// ==========================================================================
// CONTACT FORM VALIDATION & SUBMISSION
// ==========================================================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");
    const submitBtn = document.getElementById("form-submit-btn");
    
    if (!form) return;
    
    // Clear dynamic error states on input keypress
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.closest(".form-group").classList.remove("invalid");
        });
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === "") {
            nameInput.closest(".form-group").classList.add("invalid");
            isValid = false;
        } else {
            nameInput.closest(".form-group").classList.remove("invalid");
        }
        
        // Email validation (regex)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.closest(".form-group").classList.add("invalid");
            isValid = false;
        } else {
            emailInput.closest(".form-group").classList.remove("invalid");
        }
        
        // Subject validation
        if (subjectInput.value.trim() === "") {
            subjectInput.closest(".form-group").classList.add("invalid");
            isValid = false;
        } else {
            subjectInput.closest(".form-group").classList.remove("invalid");
        }
        
        // Message validation
        if (messageInput.value.trim() === "") {
            messageInput.closest(".form-group").classList.add("invalid");
            isValid = false;
        } else {
            messageInput.closest(".form-group").classList.remove("invalid");
        }
        
        if (isValid) {
            submitForm(form, submitBtn);
        }
    });
}

function submitForm(form, btn) {
    const originalText = btn.innerHTML;
    
    // Simulate Loading Status
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;
    
    setTimeout(() => {
        // Success Actions
        btn.disabled = false;
        btn.innerHTML = originalText;
        
        // Clear Inputs
        form.reset();
        
        // Trigger Success Modal
        document.getElementById("success-modal").classList.add("active");
        document.getElementById("modal-overlay").classList.add("active");
        
        // Close modal event
        const closeModal = () => {
            document.getElementById("success-modal").classList.remove("active");
            document.getElementById("modal-overlay").classList.remove("active");
        };
        
        document.getElementById("success-modal-close").onclick = closeModal;
        document.getElementById("modal-overlay").onclick = closeModal;
        
    }, 1500); // Simulate network latency of 1.5 seconds
}
