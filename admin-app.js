// ===================================
// DEMO DATA - Test & Demonstration
// ===================================

// Extended Events Data (50+ events)
const adminEventsData = [
    { id: 1, title: "Youssou N'Dour en Concert", artist: "Youssou N'Dour", genre: "mbalax", date: "2026-02-15", time: "21:00", venue: "Grand Théâtre National", venueType: "theatre", quartier: "plateau", address: "Boulevard de la République", price: "15,000 FCFA", status: "published", views: 1247, description: "Concert exceptionnel du roi du Mbalax" },
    { id: 2, title: "Soirée Afrobeat Live", artist: "DJ Awadi", genre: "afrobeat", date: "2026-02-16", time: "22:00", venue: "Just 4 U", venueType: "club", quartier: "almadies", address: "Route des Almadies", price: "5,000 FCFA", status: "published", views: 892, description: "Les meilleurs DJ afrobeat de Dakar" },
    { id: 3, title: "Jazz Night au Phare", artist: "Hervé Samb Quartet", genre: "jazz", date: "2026-02-17", time: "20:00", venue: "Le Phare des Mamelles", venueType: "bar", quartier: "ouakam", address: "Les Mamelles", price: "8,000 FCFA", status: "published", views: 654, description: "Soirée jazz avec vue panoramique" },
    { id: 4, title: "Jam Session Hip-Hop", artist: "Collectif Rap Dakar", genre: "hip-hop", date: "2026-02-18", time: "19:00", venue: "Warehouse Dakar", venueType: "club", quartier: "medina", address: "Médina, près du marché Kermel", price: "3,000 FCFA", status: "published", views: 543, description: "Open mic et battles de rap" },
    { id: 5, title: "Festival Reggae Beach", artist: "Carlou D & Friends", genre: "reggae", date: "2026-02-20", time: "16:00", venue: "Plage de Ngor", venueType: "plage", quartier: "ngor", address: "Île de Ngor", price: "Gratuit", status: "published", views: 1876, description: "Festival reggae en plein air" },
    { id: 6, title: "Spectacle de Sabar", artist: "Doudou Ndiaye Rose Legacy", genre: "traditionnel", date: "2026-02-22", time: "18:00", venue: "Village des Arts", venueType: "galerie", quartier: "yoff", address: "Route de l'Aéroport", price: "2,000 FCFA", status: "published", views: 432, description: "Percussion traditionnelle sénégalaise" },
    { id: 7, title: "Electronic Sunset", artist: "DJ Moh Green", genre: "electro", date: "2026-02-23", time: "18:30", venue: "Chez Vieira", venueType: "plage", quartier: "ngor", address: "Plage de Ngor", price: "7,000 FCFA", status: "published", views: 765, description: "DJ set électro au coucher du soleil" },
    { id: 8, title: "Soirée R&B Soul", artist: "Viviane Chidid", genre: "rnb", date: "2026-02-25", time: "21:30", venue: "Le Djoloff", venueType: "restaurant", quartier: "sacre-coeur", address: "Sacré-Cœur 3", price: "10,000 FCFA", status: "published", views: 987, description: "Dîner-concert R&B" },
    { id: 9, title: "Waly Seck Live", artist: "Waly Seck", genre: "mbalax", date: "2026-02-28", time: "22:00", venue: "King Fahd Palace", venueType: "club", quartier: "almadies", address: "Pointe des Almadies", price: "12,000 FCFA", status: "published", views: 2134, description: "Le prince du Mbalax nouvelle génération" },
    { id: 10, title: "Afro Jazz Fusion", artist: "Cheikh Lô", genre: "jazz", date: "2026-03-01", time: "20:00", venue: "Institut Français", venueType: "theatre", quartier: "plateau", address: "89 Rue Joseph Gomis", price: "6,000 FCFA", status: "published", views: 543, description: "Fusion jazz et rythmes africains" },
    { id: 11, title: "Nuit du Mbalax", artist: "Thione Seck", genre: "mbalax", date: "2026-03-05", time: "21:00", venue: "Salle Sorano", venueType: "theatre", quartier: "plateau", address: "Avenue Blaise Diagne", price: "8,000 FCFA", status: "draft", views: 0, description: "Hommage au Mbalax traditionnel" },
    { id: 12, title: "Rap Game Dakar", artist: "Xuman & Guests", genre: "hip-hop", date: "2026-03-07", time: "20:00", venue: "Salle Sorano", venueType: "theatre", quartier: "plateau", address: "Avenue Blaise Diagne", price: "4,000 FCFA", status: "draft", views: 0, description: "Showcase des rappeurs de Dakar" }
];

// Venues Data
const venuesData = [
    { id: 1, name: "Grand Théâtre National", type: "Théâtre", quartier: "Plateau", capacity: 1500, events: 45, address: "Boulevard de la République", phone: "+221 33 821 23 45" },
    { id: 2, name: "Just 4 U", type: "Club", quartier: "Almadies", capacity: 800, events: 78, address: "Route des Almadies", phone: "+221 33 820 45 67" },
    { id: 3, name: "Le Phare des Mamelles", type: "Bar/Lounge", quartier: "Ouakam", capacity: 200, events: 52, address: "Les Mamelles", phone: "+221 33 860 12 34" },
    { id: 4, name: "Warehouse Dakar", type: "Club", quartier: "Médina", capacity: 500, events: 34, address: "Médina", phone: "+221 77 123 45 67" },
    { id: 5, name: "Village des Arts", type: "Galerie", quartier: "Yoff", capacity: 300, events: 28, address: "Route de l'Aéroport", phone: "+221 33 820 78 90" },
    { id: 6, name: "Institut Français", type: "Théâtre", quartier: "Plateau", capacity: 400, events: 67, address: "89 Rue Joseph Gomis", phone: "+221 33 823 03 40" },
    { id: 7, name: "King Fahd Palace", type: "Club", quartier: "Almadies", capacity: 1000, events: 89, address: "Pointe des Almadies", phone: "+221 33 869 69 69" },
    { id: 8, name: "Salle Sorano", type: "Théâtre", quartier: "Plateau", capacity: 600, events: 56, address: "Avenue Blaise Diagne", phone: "+221 33 821 50 73" }
];

// Artists Data
const artistsData = [
    { id: 1, name: "Youssou N'Dour", genre: "Mbalax", events: 23, followers: 45000, avatar: "Y" },
    { id: 2, name: "Waly Seck", genre: "Mbalax", events: 34, followers: 38000, avatar: "W" },
    { id: 3, name: "Viviane Chidid", genre: "R&B/Soul", events: 18, followers: 29000, avatar: "V" },
    { id: 4, name: "Cheikh Lô", genre: "Jazz/World", events: 15, followers: 22000, avatar: "C" },
    { id: 5, name: "Carlou D", genre: "Reggae", events: 21, followers: 31000, avatar: "C" },
    { id: 6, name: "Xuman", genre: "Hip-Hop", events: 27, followers: 35000, avatar: "X" },
    { id: 7, name: "Thione Seck", genre: "Mbalax", events: 19, followers: 27000, avatar: "T" },
    { id: 8, name: "Hervé Samb", genre: "Jazz", events: 16, followers: 18000, avatar: "H" },
    { id: 9, name: "DJ Awadi", genre: "Afrobeat/Hip-Hop", events: 42, followers: 41000, avatar: "D" },
    { id: 10, name: "Baaba Maal", genre: "World Music", events: 12, followers: 52000, avatar: "B" },
    { id: 11, name: "Coumba Gawlo", genre: "Mbalax", events: 14, followers: 24000, avatar: "C" },
    { id: 12, name: "Pape Diouf", genre: "Mbalax", events: 22, followers: 33000, avatar: "P" },
    { id: 13, name: "Titi", genre: "R&B", events: 17, followers: 26000, avatar: "T" },
    { id: 14, name: "Sidy Diop", genre: "Mbalax", events: 20, followers: 28000, avatar: "S" },
    { id: 15, name: "Nix", genre: "Hip-Hop", events: 25, followers: 30000, avatar: "N" }
];

// Users Data
const usersData = [
    { id: 1, name: "Amadou Diallo", email: "amadou.diallo@email.com", joined: "2025-11-15", savedEvents: 12, status: "active" },
    { id: 2, name: "Fatou Sall", email: "fatou.sall@email.com", joined: "2025-12-03", savedEvents: 8, status: "active" },
    { id: 3, name: "Moussa Ndiaye", email: "moussa.ndiaye@email.com", joined: "2026-01-10", savedEvents: 15, status: "active" },
    { id: 4, name: "Aïssatou Ba", email: "aissatou.ba@email.com", joined: "2025-10-22", savedEvents: 23, status: "active" },
    { id: 5, name: "Ibrahima Sarr", email: "ibrahima.sarr@email.com", joined: "2025-11-30", savedEvents: 6, status: "inactive" }
];

// Activity Data
const activityData = [
    { type: "event", title: "Nouvel événement créé", description: "Youssou N'Dour en Concert", time: "Il y a 2 heures", icon: "calendar", color: "#ff8c32" },
    { type: "user", title: "Nouvel utilisateur", description: "Amadou Diallo s'est inscrit", time: "Il y a 3 heures", icon: "user", color: "#50c878" },
    { type: "venue", title: "Lieu mis à jour", description: "Grand Théâtre National - Capacité modifiée", time: "Il y a 5 heures", icon: "home", color: "#6366f1" },
    { type: "event", title: "Événement publié", description: "Soirée Afrobeat Live est maintenant visible", time: "Il y a 6 heures", icon: "calendar", color: "#ff8c32" },
    { type: "artist", title: "Nouvel artiste", description: "DJ Moh Green ajouté à la plateforme", time: "Il y a 8 heures", icon: "users", color: "#e63946" }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentSection = 'dashboard';
let currentUser = null;

// ===================================
// LOGIN FUNCTIONALITY
// ===================================
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (demo only)
    if (username === 'admin' && password === 'admin123') {
        currentUser = { username: 'admin', role: 'Administrateur' };
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('adminContainer').style.display = 'flex';
        initializeDashboard();
    } else {
        alert('Identifiants incorrects. Utilisez admin / admin123');
    }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        currentUser = null;
        document.getElementById('adminContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'flex';
        document.getElementById('loginForm').reset();
    }
});

// ===================================
// NAVIGATION
// ===================================
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;

            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update content sections
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
            });
            document.getElementById(`${section}Section`).classList.add('active');

            // Update header
            updateSectionHeader(section);

            currentSection = section;
        });
    });
}

function updateSectionHeader(section) {
    const titles = {
        dashboard: { title: 'Tableau de bord', subtitle: 'Vue d\'ensemble de la plateforme' },
        events: { title: 'Gestion des événements', subtitle: 'Gérer tous les événements de la plateforme' },
        venues: { title: 'Gestion des lieux', subtitle: 'Gérer les lieux et salles de spectacle' },
        artists: { title: 'Gestion des artistes', subtitle: 'Gérer les artistes et groupes' },
        users: { title: 'Gestion des utilisateurs', subtitle: 'Gérer les utilisateurs de la plateforme' },
        analytics: { title: 'Statistiques', subtitle: 'Analyses et rapports détaillés' },
        settings: { title: 'Paramètres', subtitle: 'Configuration de la plateforme' }
    };

    const info = titles[section] || { title: section, subtitle: '' };
    document.getElementById('sectionTitle').textContent = info.title;
    document.getElementById('sectionSubtitle').textContent = info.subtitle;
}

// ===================================
// DASHBOARD RENDERING
// ===================================
function initializeDashboard() {
    renderActivityList();
    renderEventsTable();
    renderVenuesTable();
    renderArtistsGrid();
    renderUsersTable();
    setupNavigation();
    setupAddButton();
    setupModal();
    drawChart();
}

function renderActivityList() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    activityList.innerHTML = activityData.map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background: ${activity.color}20; color: ${activity.color};">
                ${getActivityIcon(activity.icon)}
            </div>
            <div class="activity-details">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-description">${activity.description}</div>
            </div>
            <div class="activity-time">${activity.time}</div>
        </div>
    `).join('');
}

function getActivityIcon(type) {
    const icons = {
        calendar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
        user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
        users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    };
    return icons[type] || icons.calendar;
}

// ===================================
// EVENTS TABLE
// ===================================
function renderEventsTable() {
    const tbody = document.getElementById('eventsTableBody');
    if (!tbody) return;

    tbody.innerHTML = adminEventsData.map(event => `
        <tr>
            <td><input type="checkbox"></td>
            <td>
                <div class="table-event-info">
                    <div class="table-event-title">${event.title}</div>
                    <div class="table-event-artist">${event.artist}</div>
                </div>
            </td>
            <td>${getGenreLabel(event.genre)}</td>
            <td>${formatDate(event.date)} à ${event.time}</td>
            <td>${event.venue}</td>
            <td><span class="status-badge ${event.status}">${getStatusLabel(event.status)}</span></td>
            <td>${event.views.toLocaleString()}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-action" onclick="editEvent(${event.id})" title="Modifier">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn-action delete" onclick="deleteEvent(${event.id})" title="Supprimer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===================================
// VENUES TABLE
// ===================================
function renderVenuesTable() {
    const tbody = document.getElementById('venuesTableBody');
    if (!tbody) return;

    tbody.innerHTML = venuesData.map(venue => `
        <tr>
            <td><strong>${venue.name}</strong></td>
            <td>${venue.type}</td>
            <td>${venue.quartier}</td>
            <td>${venue.capacity} personnes</td>
            <td>${venue.events} événements</td>
            <td>
                <div class="table-actions">
                    <button class="btn-action" title="Modifier">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn-action" title="Voir détails">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===================================
// ARTISTS GRID
// ===================================
function renderArtistsGrid() {
    const grid = document.getElementById('artistsGrid');
    if (!grid) return;

    grid.innerHTML = artistsData.map(artist => `
        <div class="artist-card">
            <div class="artist-avatar">${artist.avatar}</div>
            <div class="artist-name">${artist.name}</div>
            <div class="artist-genre">${artist.genre}</div>
            <div class="artist-stats">
                <div class="artist-stat">
                    <div class="artist-stat-value">${artist.events}</div>
                    <div class="artist-stat-label">Événements</div>
                </div>
                <div class="artist-stat">
                    <div class="artist-stat-value">${(artist.followers / 1000).toFixed(1)}K</div>
                    <div class="artist-stat-label">Followers</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===================================
// USERS TABLE
// ===================================
function renderUsersTable() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;

    tbody.innerHTML = usersData.map(user => `
        <tr>
            <td><strong>${user.name}</strong></td>
            <td>${user.email}</td>
            <td>${formatDate(user.joined)}</td>
            <td>${user.savedEvents} événements</td>
            <td><span class="status-badge ${user.status}">${user.status === 'active' ? 'Actif' : 'Inactif'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="btn-action" title="Voir profil">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                    <button class="btn-action delete" title="Supprimer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===================================
// MODAL FUNCTIONALITY
// ===================================
function setupModal() {
    const modal = document.getElementById('eventModal');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('eventForm');

    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    cancelBtn?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const newEvent = Object.fromEntries(formData);
        console.log('Nouvel événement:', newEvent);
        alert('Événement créé avec succès !');
        modal.classList.remove('active');
        form.reset();
    });
}

function setupAddButton() {
    const addBtn = document.getElementById('addNewBtn');
    addBtn?.addEventListener('click', () => {
        if (currentSection === 'events') {
            document.getElementById('modalTitle').textContent = 'Nouvel événement';
            document.getElementById('eventModal').classList.add('active');
        } else {
            alert(`Ajouter un nouveau ${currentSection}`);
        }
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
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

function getStatusLabel(status) {
    const labels = {
        'published': 'Publié',
        'draft': 'Brouillon',
        'archived': 'Archivé'
    };
    return labels[status] || status;
}

// ===================================
// EVENT ACTIONS
// ===================================
function editEvent(id) {
    const event = adminEventsData.find(e => e.id === id);
    if (event) {
        alert(`Modifier l'événement: ${event.title}`);
        // Populate form with event data
        document.getElementById('modalTitle').textContent = 'Modifier l\'événement';
        document.getElementById('eventModal').classList.add('active');
    }
}

function deleteEvent(id) {
    const event = adminEventsData.find(e => e.id === id);
    if (event && confirm(`Voulez-vous vraiment supprimer "${event.title}" ?`)) {
        const index = adminEventsData.findIndex(e => e.id === id);
        adminEventsData.splice(index, 1);
        renderEventsTable();
        alert('Événement supprimé avec succès !');
    }
}

// ===================================
// CHART (Simple Canvas Chart)
// ===================================
function drawChart() {
    const canvas = document.getElementById('eventsChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    const data = [45, 52, 61, 58, 67, 72, 78, 85, 92, 88, 95, 102];
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];

    const max = Math.max(...data);
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Draw grid
    ctx.strokeStyle = '#2a2a30';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }

    // Draw line
    ctx.strokeStyle = '#ff8c32';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = padding + chartHeight - (value / max) * chartHeight;

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#ff8c32';
    data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = padding + chartHeight - (value / max) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw labels
    ctx.fillStyle = '#8c8c8c';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';

    months.forEach((month, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        ctx.fillText(month, x, canvas.height - 10);
    });
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
document.getElementById('searchEvents')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#eventsTableBody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
});

// ===================================
// INITIALIZATION
// ===================================
console.log('🎉 Admin Backoffice DakarLive chargé !');
console.log(`📊 ${adminEventsData.length} événements`);
console.log(`🏛️ ${venuesData.length} lieux`);
console.log(`🎤 ${artistsData.length} artistes`);
console.log(`👥 ${usersData.length} utilisateurs (démo)`);
console.log('💡 Utilisez admin / admin123 pour vous connecter');
