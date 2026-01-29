// ===================================
// DATA - Sample Events for Dakar
// ===================================
const eventsData = [
    {
        id: 1,
        title: "Youssou N'Dour en Concert",
        genre: "mbalax",
        date: "2026-01-29",
        time: "21:00",
        venue: "Grand Théâtre National",
        venueType: "theatre",
        quartier: "plateau",
        address: "Boulevard de la République, Plateau",
        price: "15,000 FCFA",
        description: "Concert exceptionnel du roi du Mbalax"
    },
    {
        id: 2,
        title: "Soirée Afrobeat Live",
        genre: "afrobeat",
        date: "2026-01-29",
        time: "22:00",
        venue: "Just 4 U",
        venueType: "club",
        quartier: "almadies",
        address: "Route des Almadies",
        price: "5,000 FCFA",
        description: "Les meilleurs DJ afrobeat de Dakar"
    },
    {
        id: 3,
        title: "Jazz Night au Phare",
        genre: "jazz",
        date: "2026-01-29",
        time: "20:00",
        venue: "Le Phare des Mamelles",
        venueType: "bar",
        quartier: "ouakam",
        address: "Les Mamelles, Ouakam",
        price: "8,000 FCFA",
        description: "Soirée jazz avec vue panoramique sur Dakar"
    },
    {
        id: 4,
        title: "Jam Session Hip-Hop",
        genre: "hip-hop",
        date: "2026-01-29",
        time: "19:00",
        venue: "Warehouse Dakar",
        venueType: "club",
        quartier: "medina",
        address: "Médina, près du marché Kermel",
        price: "3,000 FCFA",
        description: "Open mic et battles de rap"
    },
    {
        id: 5,
        title: "Festival Reggae Beach",
        genre: "reggae",
        date: "2026-01-30",
        time: "16:00",
        venue: "Plage de Ngor",
        venueType: "plage",
        quartier: "ngor",
        address: "Île de Ngor",
        price: "Gratuit",
        description: "Festival reggae en plein air sur la plage"
    },
    {
        id: 6,
        title: "Spectacle de Sabar Traditionnel",
        genre: "traditionnel",
        date: "2026-01-30",
        time: "18:00",
        venue: "Village des Arts",
        venueType: "galerie",
        quartier: "yoff",
        address: "Route de l'Aéroport, Yoff",
        price: "2,000 FCFA",
        description: "Démonstration de percussion traditionnelle sénégalaise"
    },
    {
        id: 7,
        title: "Electronic Sunset Session",
        genre: "electro",
        date: "2026-01-31",
        time: "18:30",
        venue: "Chez Vieira",
        venueType: "plage",
        quartier: "ngor",
        address: "Plage de Ngor",
        price: "7,000 FCFA",
        description: "DJ set électro au coucher du soleil"
    },
    {
        id: 8,
        title: "Soirée R&B Soul",
        genre: "rnb",
        date: "2026-01-31",
        time: "21:30",
        venue: "Le Djoloff",
        venueType: "restaurant",
        quartier: "sacre-coeur",
        address: "Sacré-Cœur 3",
        price: "10,000 FCFA",
        description: "Dîner-concert avec les meilleurs artistes R&B locaux"
    },
    {
        id: 9,
        title: "Waly Seck Live",
        genre: "mbalax",
        date: "2026-02-01",
        time: "22:00",
        venue: "King Fahd Palace",
        venueType: "club",
        quartier: "almadies",
        address: "Pointe des Almadies",
        price: "12,000 FCFA",
        description: "Concert du prince du Mbalax nouvelle génération"
    },
    {
        id: 10,
        title: "Afro Jazz Fusion",
        genre: "jazz",
        date: "2026-02-01",
        time: "20:00",
        venue: "Institut Français",
        venueType: "theatre",
        quartier: "plateau",
        address: "89 Rue Joseph Gomis, Plateau",
        price: "6,000 FCFA",
        description: "Fusion de jazz moderne et rythmes africains"
    },
    {
        id: 11,
        title: "Beach Party Afrobeat",
        genre: "afrobeat",
        date: "2026-02-02",
        time: "17:00",
        venue: "La Calebasse",
        venueType: "plage",
        quartier: "yoff",
        address: "Plage de Yoff",
        price: "5,000 FCFA",
        description: "Fête sur la plage avec DJ internationaux"
    },
    {
        id: 12,
        title: "Rap Game Dakar",
        genre: "hip-hop",
        date: "2026-02-02",
        time: "20:00",
        venue: "Salle Sorano",
        venueType: "theatre",
        quartier: "plateau",
        address: "Avenue Blaise Diagne, Plateau",
        price: "4,000 FCFA",
        description: "Showcase des meilleurs rappeurs de Dakar"
    },
    {
        id: 13,
        title: "Nuit Mbalax avec Thione Seck",
        genre: "mbalax",
        date: "2026-02-03",
        time: "21:00",
        venue: "Grand Théâtre National",
        venueType: "theatre",
        quartier: "plateau",
        address: "Boulevard de la République, Plateau",
        price: "12,000 FCFA",
        description: "Hommage au Mbalax traditionnel"
    },
    {
        id: 14,
        title: "Soirée Jazz Manouche",
        genre: "jazz",
        date: "2026-02-04",
        time: "20:30",
        venue: "Le Phare des Mamelles",
        venueType: "bar",
        quartier: "ouakam",
        address: "Les Mamelles, Ouakam",
        price: "7,000 FCFA",
        description: "Jazz manouche avec vue sur l'océan"
    },
    {
        id: 15,
        title: "Festival Hip-Hop Underground",
        genre: "hip-hop",
        date: "2026-02-05",
        time: "18:00",
        venue: "Warehouse Dakar",
        venueType: "club",
        quartier: "medina",
        address: "Médina, près du marché Kermel",
        price: "4,000 FCFA",
        description: "Découvrez les nouveaux talents du rap sénégalais"
    },
    {
        id: 16,
        title: "Reggae Roots Night",
        genre: "reggae",
        date: "2026-02-06",
        time: "21:00",
        venue: "Just 4 U",
        venueType: "club",
        quartier: "almadies",
        address: "Route des Almadies",
        price: "6,000 FCFA",
        description: "Soirée reggae roots avec sound system"
    },
    {
        id: 17,
        title: "Kora & Balafon Traditionnel",
        genre: "traditionnel",
        date: "2026-02-07",
        time: "19:00",
        venue: "Village des Arts",
        venueType: "galerie",
        quartier: "yoff",
        address: "Route de l'Aéroport, Yoff",
        price: "3,000 FCFA",
        description: "Concert de musique traditionnelle mandingue"
    },
    {
        id: 18,
        title: "Electro Beach Festival",
        genre: "electro",
        date: "2026-02-08",
        time: "17:00",
        venue: "Plage de Ngor",
        venueType: "plage",
        quartier: "ngor",
        address: "Île de Ngor",
        price: "8,000 FCFA",
        description: "Festival de musique électronique sur la plage"
    },
    {
        id: 19,
        title: "R&B Lounge Night",
        genre: "rnb",
        date: "2026-02-09",
        time: "22:00",
        venue: "Le Djoloff",
        venueType: "restaurant",
        quartier: "sacre-coeur",
        address: "Sacré-Cœur 3",
        price: "9,000 FCFA",
        description: "Soirée R&B dans une ambiance lounge"
    },
    {
        id: 20,
        title: "Afrobeat Explosion",
        genre: "afrobeat",
        date: "2026-02-10",
        time: "23:00",
        venue: "King Fahd Palace",
        venueType: "club",
        quartier: "almadies",
        address: "Pointe des Almadies",
        price: "10,000 FCFA",
        description: "Les meilleurs DJ afrobeat d'Afrique de l'Ouest"
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentFilters = {
    genre: [],
    date: 'today',
    quartier: [],
    venue: []
};

let displayedEvents = 6;
const eventsPerLoad = 6;

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return {
        day: date.getDate(),
        month: months[date.getMonth()]
    };
}

function filterEvents() {
    return eventsData.filter(event => {
        // Filter by genre
        if (currentFilters.genre.length > 0 && !currentFilters.genre.includes(event.genre)) {
            return false;
        }

        // Filter by quartier
        if (currentFilters.quartier.length > 0 && !currentFilters.quartier.includes(event.quartier)) {
            return false;
        }

        // Filter by venue type
        if (currentFilters.venue.length > 0 && !currentFilters.venue.includes(event.venueType)) {
            return false;
        }

        // Filter by date
        const eventDate = new Date(event.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        switch (currentFilters.date) {
            case 'today':
                return eventDate.toDateString() === today.toDateString();
            case 'tomorrow':
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                return eventDate.toDateString() === tomorrow.toDateString();
            case 'weekend':
                const dayOfWeek = eventDate.getDay();
                return dayOfWeek === 0 || dayOfWeek === 6;
            case 'week':
                const weekFromNow = new Date(today);
                weekFromNow.setDate(weekFromNow.getDate() + 7);
                return eventDate >= today && eventDate <= weekFromNow;
            case 'month':
                return eventDate.getMonth() === today.getMonth() &&
                    eventDate.getFullYear() === today.getFullYear();
            default:
                return true;
        }
    });
}

// ===================================
// RENDER FUNCTIONS
// ===================================
function renderEvent(event) {
    const dateInfo = formatDate(event.date);

    return `
        <div class="event-card" data-event-id="${event.id}">
            <div class="event-date">
                <div class="event-day">${dateInfo.day}</div>
                <div class="event-month">${dateInfo.month}</div>
                <div class="event-time">${event.time}</div>
            </div>
            
            <div class="event-info">
                <h3 class="event-title">${event.title}</h3>
                <span class="event-genre">${getGenreLabel(event.genre)}</span>
                
                <div class="event-venue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>${event.venue}</span>
                </div>
                
                <div class="event-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${event.address} • ${event.price}</span>
                </div>
            </div>
            
            <div class="event-actions">
                <button class="btn-details" onclick="viewEventDetails(${event.id})">
                    Voir détails
                </button>
                <button class="btn-save" onclick="saveEvent(${event.id})" aria-label="Sauvegarder">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

function getGenreLabel(genre) {
    const labels = {
        'mbalax': 'Mbalax',
        'afrobeat': 'Afrobeat',
        'jazz': 'Jazz',
        'hip-hop': 'Hip-Hop',
        'reggae': 'Reggae',
        'traditionnel': 'Traditionnel',
        'electro': 'Électro',
        'rnb': 'R&B'
    };
    return labels[genre] || genre;
}

function renderEvents() {
    const filteredEvents = filterEvents();
    const eventsToShow = filteredEvents.slice(0, displayedEvents);
    const eventsList = document.getElementById('eventsList');

    if (eventsToShow.length === 0) {
        eventsList.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 1rem;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 style="margin-bottom: 0.5rem;">Aucun événement trouvé</h3>
                <p>Essayez de modifier vos filtres pour voir plus d'événements</p>
            </div>
        `;
        document.getElementById('loadMore').style.display = 'none';
        return;
    }

    eventsList.innerHTML = eventsToShow.map(event => renderEvent(event)).join('');

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMore');
    if (displayedEvents >= filteredEvents.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// ===================================
// EVENT HANDLERS
// ===================================
function viewEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        alert(`Détails de l'événement:\n\n${event.title}\n${event.description}\n\nLieu: ${event.venue}\nDate: ${event.date} à ${event.time}\nPrix: ${event.price}`);
    }
}

function saveEvent(eventId) {
    alert(`Événement #${eventId} sauvegardé dans vos favoris!`);
}

function setupFilterToggles() {
    const filterToggles = document.querySelectorAll('.filter-toggle');

    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });
}

function setupFilterInputs() {
    // Genre filters
    const genreInputs = document.querySelectorAll('input[name="genre"]');
    genreInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.genre.push(e.target.value);
            } else {
                currentFilters.genre = currentFilters.genre.filter(g => g !== e.target.value);
            }
            displayedEvents = eventsPerLoad;
            renderEvents();
        });
    });

    // Quartier filters
    const quartierInputs = document.querySelectorAll('input[name="quartier"]');
    quartierInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.quartier.push(e.target.value);
            } else {
                currentFilters.quartier = currentFilters.quartier.filter(q => q !== e.target.value);
            }
            displayedEvents = eventsPerLoad;
            renderEvents();
        });
    });

    // Venue type filters
    const venueInputs = document.querySelectorAll('input[name="venue"]');
    venueInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.venue.push(e.target.value);
            } else {
                currentFilters.venue = currentFilters.venue.filter(v => v !== e.target.value);
            }
            displayedEvents = eventsPerLoad;
            renderEvents();
        });
    });

    // Date filters
    const dateInputs = document.querySelectorAll('input[name="date"]');
    dateInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            currentFilters.date = e.target.value;
            displayedEvents = eventsPerLoad;
            renderEvents();
        });
    });

    // Custom date picker
    const customDate = document.getElementById('customDate');
    customDate.addEventListener('change', (e) => {
        currentFilters.date = e.target.value;
        displayedEvents = eventsPerLoad;
        renderEvents();
    });
}

function setupResetFilters() {
    const resetBtn = document.getElementById('resetFilters');
    resetBtn.addEventListener('click', () => {
        // Reset filter state
        currentFilters = {
            genre: [],
            date: 'today',
            quartier: [],
            venue: []
        };

        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(input => {
            input.checked = false;
        });

        // Reset date radio
        document.querySelector('input[name="date"][value="today"]').checked = true;

        // Reset custom date
        document.getElementById('customDate').value = '';

        // Reset displayed events count
        displayedEvents = eventsPerLoad;

        // Re-render
        renderEvents();
    });
}

function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    loadMoreBtn.addEventListener('click', () => {
        displayedEvents += eventsPerLoad;
        renderEvents();
    });
}

function setupViewControls() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const eventsList = document.getElementById('eventsList');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.dataset.view;
            if (view === 'grid') {
                eventsList.style.display = 'grid';
                eventsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
            } else {
                eventsList.style.display = 'flex';
                eventsList.style.flexDirection = 'column';
            }
        });
    });
}

function setupSearchFilters() {
    const searchInputs = document.querySelectorAll('.filter-search .search-input');

    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filterSection = e.target.closest('.filter-content');
            const labels = filterSection.querySelectorAll('.checkbox-label');

            labels.forEach(label => {
                const text = label.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    label.style.display = 'flex';
                } else {
                    label.style.display = 'none';
                }
            });
        });
    });
}

function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('.newsletter-input').value;
        alert(`Merci de vous être inscrit avec l'email: ${email}`);
        form.reset();
    });
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderEvents();

    // Setup all event listeners
    setupFilterToggles();
    setupFilterInputs();
    setupResetFilters();
    setupLoadMore();
    setupViewControls();
    setupSearchFilters();
    setupNewsletterForm();

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('mobile-open');

            // Change icon
            const svg = mobileMenuToggle.querySelector('svg');
            if (mobileNav.classList.contains('mobile-open')) {
                // Show X icon
                svg.innerHTML = `
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                `;
            } else {
                // Show hamburger icon
                svg.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });

        // Close menu when clicking nav links
        const navLinks = mobileNav.querySelectorAll('.nav-link, .btn-app');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mobileNav.classList.remove('mobile-open');
                    const svg = mobileMenuToggle.querySelector('svg');
                    svg.innerHTML = `
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    `;
                }
            });
        });
    }

    console.log('🎉 DakarLive initialized successfully!');
    console.log(`📊 Total events: ${eventsData.length}`);
});
