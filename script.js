// ===== 100+ SONG LIBRARY =====
const allSongs = [
    // Bollywood Hits
    { id: 1, title: "Tum Hi Ho", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=1" },
    { id: 2, title: "Kesariya", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=2" },
    { id: 3, title: "Rang De Basanti", artist: "A.R. Rahman", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=3" },
    { id: 4, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=4" },
    { id: 5, title: "Tumse Milke", artist: "Sonu Nigam", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=5" },
    { id: 6, title: "Channa Mereya", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=6" },
    { id: 7, title: "Gulabi Ankhen", artist: "Mohammed Rafi", genre: "Retro", cover: "https://picsum.photos/200/200?random=7" },
    { id: 8, title: "Pyar Hua Iqrar Hua", artist: "Lata Mangeshkar", genre: "Retro", cover: "https://picsum.photos/200/200?random=8" },
    { id: 9, title: "Lag Ja Gale", artist: "Lata Mangeshkar", genre: "Retro", cover: "https://picsum.photos/200/200?random=9" },
    { id: 10, title: "Mere Sapno Ki Rani", artist: "Kishore Kumar", genre: "Retro", cover: "https://picsum.photos/200/200?random=10" },
    { id: 11, title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", genre: "Retro", cover: "https://picsum.photos/200/200?random=11" },
    { id: 12, title: "Tere Bina Zindagi Se", artist: "Lata Mangeshkar", genre: "Retro", cover: "https://picsum.photos/200/200?random=12" },
    { id: 13, title: "Abhi Na Jao Chhod Kar", artist: "Mohammed Rafi", genre: "Retro", cover: "https://picsum.photos/200/200?random=13" },
    { id: 14, title: "Shayad", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=14" },
    { id: 15, title: "Dil Diyan Gallan", artist: "Atif Aslam", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=15" },
    
    // Punjabi Hits
    { id: 16, title: "Brown Munde", artist: "AP Dhillon", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=16" },
    { id: 17, title: "G.O.A.T.", artist: "Diljit Dosanjh", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=17" },
    { id: 18, title: "Koka", artist: "Badshah", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=18" },
    { id: 19, title: "Hussn Hai", artist: "Mankirt Aulakh", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=19" },
    { id: 20, title: "Dil Nu", artist: "AP Dhillon", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=20" },
    
    // Pop
    { id: 21, title: "Blinding Lights", artist: "The Weeknd", genre: "Pop", cover: "https://picsum.photos/200/200?random=21" },
    { id: 22, title: "Levitating", artist: "Dua Lipa", genre: "Pop", cover: "https://picsum.photos/200/200?random=22" },
    { id: 23, title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", cover: "https://picsum.photos/200/200?random=23" },
    { id: 24, title: "Believer", artist: "Imagine Dragons", genre: "Pop", cover: "https://picsum.photos/200/200?random=24" },
    { id: 25, title: "Starboy", artist: "The Weeknd", genre: "Pop", cover: "https://picsum.photos/200/200?random=25" },
    
    // Rock
    { id: 26, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", cover: "https://picsum.photos/200/200?random=26" },
    { id: 27, title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", cover: "https://picsum.photos/200/200?random=27" },
    { id: 28, title: "Hotel California", artist: "Eagles", genre: "Rock", cover: "https://picsum.photos/200/200?random=28" },
    { id: 29, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock", cover: "https://picsum.photos/200/200?random=29" },
    { id: 30, title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Rock", cover: "https://picsum.photos/200/200?random=30" },
    
    // Classical
    { id: 31, title: "Raga Yaman", artist: "Pt. Ravi Shankar", genre: "Classical", cover: "https://picsum.photos/200/200?random=31" },
    { id: 32, title: "Raga Bhairav", artist: "Ustad Bismillah Khan", genre: "Classical", cover: "https://picsum.photos/200/200?random=32" },
    { id: 33, title: "Mohan Veena", artist: "Pt. Vishwa Mohan Bhatt", genre: "Classical", cover: "https://picsum.photos/200/200?random=33" },
    
    // More Bollywood
    { id: 34, title: "Bekhayali", artist: "Sachet Tandon", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=34" },
    { id: 35, title: "Khairiyat", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=35" },
    { id: 36, title: "Tera Ban Jaunga", artist: "Akhil Sachdeva", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=36" },
    { id: 37, title: "Ve Maahi", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=37" },
    { id: 38, title: "Dilbar", artist: "Neha Kakkar", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=38" },
    { id: 39, title: "Ghungroo", artist: "Arijit Singh", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=39" },
    { id: 40, title: "Makhna", artist: "Badshah", genre: "Bollywood", cover: "https://picsum.photos/200/200?random=40" },
    
    // More Punjabi
    { id: 41, title: "Jatt Di Akh", artist: "Gurlej Akhtar", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=41" },
    { id: 42, title: "Bitch I'm Back", artist: "Sidhu Moosewala", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=42" },
    { id: 43, title: "Same Beef", artist: "Bohemia", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=43" },
    { id: 44, title: "Jugni", artist: "Diljit Dosanjh", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=44" },
    { id: 45, title: "Suit Suit", artist: "Guru Randhawa", genre: "Punjabi", cover: "https://picsum.photos/200/200?random=45" },
    
    // More Pop
    { id: 46, title: "Dance Monkey", artist: "Tones and I", genre: "Pop", cover: "https://picsum.photos/200/200?random=46" },
    { id: 47, title: "Roses", artist: "SAINt JHN", genre: "Pop", cover: "https://picsum.photos/200/200?random=47" },
    { id: 48, title: "Watermelon Sugar", artist: "Harry Styles", genre: "Pop", cover: "https://picsum.photos/200/200?random=48" },
    { id: 49, title: "Peaches", artist: "Justin Bieber", genre: "Pop", cover: "https://picsum.photos/200/200?random=49" },
    { id: 50, title: "Stay", artist: "The Kid LAROI", genre: "Pop", cover: "https://picsum.photos/200/200?random=50" },
];

// Generate more songs (total 100+)
for (let i = 51; i <= 120; i++) {
    const genres = ["Bollywood", "Punjabi", "Pop", "Rock", "Classical", "Retro"];
    const artists = ["Arijit Singh", "Diljit Dosanjh", "The Weeknd", "Queen", "Lata Mangeshkar", "AP Dhillon", "Ed Sheeran", "Kishore Kumar"];
    allSongs.push({
        id: i,
        title: `Song ${i}`,
        artist: artists[i % artists.length],
        genre: genres[i % genres.length],
        cover: `https://picsum.photos/200/200?random=${i}`
    });
}

// ===== DOM REFS =====
const contentArea = document.getElementById('contentArea');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let currentTab = 'home';

// ===== RENDER FUNCTIONS =====
function renderHome() {
    return `
        <section class="greeting">
            <h1>Good Evening</h1>
            <p>Discover the finest collection of music</p>
        </section>
        
        <div class="quick-picks">
            <div class="pick-card"><i class="fas fa-fire"></i> Trending</div>
            <div class="pick-card"><i class="fas fa-headphones"></i> Chill</div>
            <div class="pick-card"><i class="fas fa-bolt"></i> Energy</div>
            <div class="pick-card"><i class="fas fa-moon"></i> Sleep</div>
        </div>
        
        <h2 class="section-title">Featured Songs</h2>
        <div class="song-grid" id="homeGrid">
            ${renderSongCards(allSongs.slice(0, 20))}
        </div>
    `;
}

function renderSongCards(songs) {
    return songs.map(song => `
        <div class="song-card" data-id="${song.id}" onclick="playSong(${song.id})">
            <img src="${song.cover}" alt="${song.title}" loading="lazy" />
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <div class="play-overlay"><i class="fas fa-play"></i></div>
        </div>
    `).join('');
}

function renderSearch() {
    return `
        <h2 class="section-title">Search Music</h2>
        <p class="section-subtitle">Find your favorite songs, artists, or genres</p>
        
        <div class="search-container">
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Search songs, artists, genres..." onkeyup="performSearch()" />
                <i class="fas fa-times" onclick="clearSearch()" style="display:none;" id="clearSearch"></i>
            </div>
        </div>
        
        <div id="searchResults" class="search-results">
            ${renderSongCards(allSongs.slice(0, 12))}
        </div>
    `;
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');
    const clearBtn = document.getElementById('clearSearch');
    
    if (query.length > 0) {
        clearBtn.style.display = 'block';
        const results = allSongs.filter(song => 
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.genre.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            resultsContainer.innerHTML = renderSongCards(results);
        } else {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-music"></i>
                    <h3>No songs found</h3>
                    <p>Try searching with different keywords</p>
                </div>
            `;
        }
    } else {
        clearBtn.style.display = 'none';
        resultsContainer.innerHTML = renderSongCards(allSongs.slice(0, 12));
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    document.getElementById('searchResults').innerHTML = renderSongCards(allSongs.slice(0, 12));
}

function renderExplore() {
    const genres = [...new Set(allSongs.map(s => s.genre))];
    return `
        <h2 class="section-title">Explore</h2>
        <p class="section-subtitle">Discover music by genre</p>
        
        <div class="genre-grid">
            ${genres.map(genre => `
                <div class="genre-card" onclick="filterByGenre('${genre}')">
                    <i class="fas fa-${getGenreIcon(genre)}"></i>
                    <h4>${genre}</h4>
                    <p>${allSongs.filter(s => s.genre === genre).length} songs</p>
                </div>
            `).join('')}
        </div>
        
        <div id="genreResults" style="margin-top: 30px;">
            <h3 class="section-title" style="font-size:24px; margin-bottom:16px;">All Songs</h3>
            <div class="song-grid" id="exploreGrid">
                ${renderSongCards(allSongs.slice(0, 20))}
            </div>
        </div>
    `;
}

function filterByGenre(genre) {
    const results = allSongs.filter(s => s.genre === genre);
    document.getElementById('genreResults').innerHTML = `
        <h3 class="section-title" style="font-size:24px; margin-bottom:16px;">${genre} Songs</h3>
        <div class="song-grid">
            ${renderSongCards(results)}
        </div>
    `;
    // Scroll to results
    document.getElementById('genreResults').scrollIntoView({ behavior: 'smooth' });
}

function getGenreIcon(genre) {
    const icons = {
        'Bollywood': 'film',
        'Punjabi': 'drum',
        'Pop': 'guitar',
        'Rock': 'bolt',
        'Classical': 'violin',
        'Retro': 'clock'
    };
    return icons[genre] || 'music';
}

function renderLibrary() {
    return `
        <h2 class="section-title">Your Library</h2>
        <p class="section-subtitle">All your favorite songs in one place</p>
        
        <div class="song-grid" id="libraryGrid">
            ${renderSongCards(allSongs)}
        </div>
    `;
}

function renderLiked() {
    if (likedSongs.length === 0) {
        return `
            <h2 class="section-title">Liked Songs</h2>
            <p class="section-subtitle">Songs you love</p>
            
            <div class="liked-empty">
                <i class="fas fa-heart"></i>
                <h3>No liked songs yet</h3>
                <p>Start liking songs to build your collection</p>
            </div>
        `;
    }
    
    const likedData = allSongs.filter(s => likedSongs.includes(s.id));
    return `
        <h2 class="section-title">Liked Songs</h2>
        <p class="section-subtitle">${likedData.length} songs you love</p>
        
        <div class="song-grid" id="likedGrid">
            ${renderSongCards(likedData)}
        </div>
    `;
}

// ===== TAB NAVIGATION =====
function switchTab(tab) {
    currentTab = tab;
    
    // Update sidebar
    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
        if (li.dataset.tab === tab) {
            li.classList.add('active');
        }
    });
    
    // Render content
    switch(tab) {
        case 'home':
            contentArea.innerHTML = renderHome();
            break;
        case 'search':
            contentArea.innerHTML = renderSearch();
            break;
        case 'explore':
            contentArea.innerHTML = renderExplore();
            break;
        case 'library':
            contentArea.innerHTML = renderLibrary();
            break;
        case 'liked':
            contentArea.innerHTML = renderLiked();
            break;
        default:
            contentArea.innerHTML = renderHome();
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
}

// ===== SONG PLAY (Demo) =====
function playSong(id) {
    const song = allSongs.find(s => s.id === id);
    if (song) {
        document.getElementById('currentTitle').textContent = song.title;
        document.getElementById('currentArtist').textContent = song.artist;
        document.getElementById('currentCover').src = song.cover;
        document.getElementById('playBtn').className = 'fas fa-pause-circle';
        
        // Visual feedback
        const cards = document.querySelectorAll('.song-card');
        cards.forEach(card => {
            card.style.borderColor = 'rgba(212, 175, 55, 0.08)';
            if (card.dataset.id == id) {
                card.style.borderColor = '#D4AF37';
                card.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.15)';
            }
        });
        
        // Show toast
        showToast(`▶️ Now Playing: ${song.title}`);
    }
}

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(212, 175, 55, 0.95);
        color: #000;
        padding: 12px 24px;
        border-radius: 30px;
        font-weight: 600;
        z-index: 9999;
        animation: fadeInUp 0.3s ease;
        box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ===== PLAYER CONTROLS =====
document.getElementById('playBtn')?.addEventListener('click', function() {
    if (this.className.includes('play')) {
        this.className = 'fas fa-pause-circle';
        showToast('▶️ Playing');
    } else {
        this.className = 'fas fa-play-circle';
        showToast('⏸️ Paused');
    }
});

document.getElementById('likeBtn')?.addEventListener('click', function() {
    const currentTitle = document.getElementById('currentTitle').textContent;
    if (currentTitle === 'Select a song') {
        showToast('⚠️ Please select a song first');
        return;
    }
    
    const song = allSongs.find(s => s.title === currentTitle);
    if (song) {
        const index = likedSongs.indexOf(song.id);
        if (index > -1) {
            likedSongs.splice(index, 1);
            this.style.color = 'var(--text-secondary)';
            showToast(`💔 Removed from Liked`);
        } else {
            likedSongs.push(song.id);
            this.style.color = '#D4AF37';
            this.style.transform = 'scale(1.3)';
            setTimeout(() => this.style.transform = 'scale(1)', 200);
            showToast(`❤️ Added to Liked: ${song.title}`);
        }
        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    }
});

// ===== SIDEBAR TOGGLE =====
menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

sidebarClose?.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// ===== NAVIGATION CLICK =====
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        switchTab(this.dataset.tab);
    });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
        e.preventDefault();
        document.getElementById('playBtn')?.click();
    }
});

// ===== INITIAL LOAD =====
switchTab('home');

// Add CSS for toast animation if not present
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

console.log('🎵 Aurea Premium Music Player loaded!');
console.log(`📚 ${allSongs.length} songs available`);
console.log(`❤️ ${likedSongs.length} liked songs`);