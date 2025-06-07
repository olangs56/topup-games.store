// Game Data
const gameData = {
    'mobile-legends': {
        name: 'Mobile Legends',
        icon: 'ml-icon',
        products: [
            { id: 'ml-5', name: '5 Diamonds', price: 1500, bonus: 0 },
            { id: 'ml-50', name: '50 Diamonds', price: 12000, bonus: 0 },
            { id: 'ml-100', name: '100 Diamonds', price: 24000, bonus: 0 },
            { id: 'ml-250', name: '250 Diamonds', price: 58000, bonus: 0 },
            { id: 'ml-500', name: '500 Diamonds', price: 116000, bonus: 0 },
            { id: 'ml-750', name: '750 Diamonds', price: 174000, bonus: 0 },
            { id: 'ml-1000', name: '1000 Diamonds', price: 232000, bonus: 50 },
            { id: 'ml-1500', name: '1500 Diamonds', price: 348000, bonus: 100 },
            { id: 'ml-2194', name: '2194 Diamonds', price: 464000, bonus: 150 }
        ]
    },
    'free-fire': {
        name: 'Free Fire',
        icon: 'ff-icon',
        products: [
            { id: 'ff-5', name: '5 Diamonds', price: 1000, bonus: 0 },
            { id: 'ff-50', name: '50 Diamonds', price: 8000, bonus: 0 },
            { id: 'ff-100', name: '100 Diamonds', price: 15000, bonus: 0 },
            { id: 'ff-310', name: '310 Diamonds', price: 45000, bonus: 5 },
            { id: 'ff-520', name: '520 Diamonds', price: 75000, bonus: 20 },
            { id: 'ff-1060', name: '1060 Diamonds', price: 150000, bonus: 50 },
            { id: 'ff-2180', name: '2180 Diamonds', price: 300000, bonus: 80 },
            { id: 'ff-5600', name: '5600 Diamonds', price: 750000, bonus: 140 },
            { id: 'ff-7290', name: '7290 Diamonds', price: 1000000, bonus: 290 }
        ]
    },
    'pubg': {
        name: 'PUBG Mobile',
        icon: 'pubg-icon',
        products: [
            { id: 'pubg-25', name: '25 UC', price: 5000, bonus: 0 },
            { id: 'pubg-100', name: '100 UC', price: 20000, bonus: 0 },
            { id: 'pubg-250', name: '250 UC', price: 50000, bonus: 0 },
            { id: 'pubg-500', name: '500 UC', price: 100000, bonus: 25 },
            { id: 'pubg-750', name: '750 UC', price: 150000, bonus: 50 },
            { id: 'pubg-1000', name: '1000 UC', price: 200000, bonus: 75 },
            { id: 'pubg-1500', name: '1500 UC', price: 300000, bonus: 100 }
        ]
    },
    'genshin': {
        name: 'Genshin Impact',
        icon: 'gi-icon',
        products: [
            { id: 'gi-60', name: '60 Genesis Crystals', price: 16000, bonus: 0 },
            { id: 'gi-300', name: '300 Genesis Crystals', price: 79000, bonus: 30 },
            { id: 'gi-980', name: '980 Genesis Crystals', price: 249000, bonus: 110 },
            { id: 'gi-1980', name: '1980 Genesis Crystals', price: 479000, bonus: 260 }
        ]
    },
    'honor': {
        name: 'Honor of Kings',
        icon: 'hok-icon',
        products: [
            { id: 'hok-8', name: '8 Vouchers', price: 2000, bonus: 0 },
            { id: 'hok-50', name: '50 Vouchers', price: 12000, bonus: 0 },
            { id: 'hok-100', name: '100 Vouchers', price: 24000, bonus: 0 },
            { id: 'hok-250', name: '250 Vouchers', price: 60000, bonus: 25 },
            { id: 'hok-500', name: '500 Vouchers', price: 120000, bonus: 50 },
            { id: 'hok-1000', name: '1000 Vouchers', price: 240000, bonus: 100 },
            { id: 'hok-2000', name: '2000 Vouchers', price: 480000, bonus: 200 },
            { id: 'hok-5000', name: '5000 Vouchers', price: 1200000, bonus: 500 },
            { id: 'hok-8000', name: '8000 Vouchers + 1160 Token', price: 1920000, bonus: 1160 }
        ]
    },
    'valorant': {
        name: 'Valorant',
        icon: 'val-icon',
        products: [
            { id: 'val-420', name: '420 VP', price: 45000, bonus: 0 },
            { id: 'val-600', name: '600 VP', price: 65000, bonus: 0 },
            { id: 'val-1100', name: '1100 VP', price: 110000, bonus: 0 },
            { id: 'val-1650', name: '1650 VP', price: 165000, bonus: 50 },
            { id: 'val-2400', name: '2400 VP', price: 240000, bonus: 100 }
        ]
    },
    'cod': {
        name: 'Call of Duty Mobile',
        icon: 'cod-icon',
        products: [
            { id: 'cod-80', name: '80 CP', price: 15000, bonus: 0 },
            { id: 'cod-400', name: '400 CP', price: 75000, bonus: 0 },
            { id: 'cod-800', name: '800 CP', price: 150000, bonus: 0 },
            { id: 'cod-2000', name: '2000 CP', price: 375000, bonus: 400 },
            { id: 'cod-5600', name: '5600 CP', price: 999000, bonus: 1400 },
            { id: 'cod-9500', name: '9500 CP', price: 1599000, bonus: 2850 }
        ]
    }
};

const membershipData = {
    'membership': {
        name: 'Game Membership',
        icon: 'crown-icon',
        products: [
            { id: 'ff-weekly', name: 'Free Fire Weekly', price: 25000, bonus: 0, features: ['Akses fitur premium', 'Bonus diamond harian'] },
            { id: 'ff-monthly', name: 'Free Fire Monthly', price: 85000, bonus: 0, features: ['Akses fitur premium', 'Bonus diamond harian', 'Pet gratis'] },
            { id: 'ml-weekly', name: 'ML Weekly Pass', price: 30000, bonus: 0, features: ['Battle Point bonus', 'Emblem premium'] },
            { id: 'ml-monthly', name: 'ML Monthly Pass', price: 95000, bonus: 0, features: ['Battle Point bonus', 'Emblem premium', 'Hero trial'] }
        ]
    }
};

const popularGames = [
    { name: 'Mobile Legends', icon: 'ml-icon', price: 'Mulai Rp 1.500', key: 'mobile-legends' },
    { name: 'Free Fire', icon: 'ff-icon', price: 'Mulai Rp 1.000', key: 'free-fire' },
    { name: 'PUBG Mobile', icon: 'pubg-icon', price: 'Mulai Rp 5.000', key: 'pubg' },
    { name: 'Genshin Impact', icon: 'gi-icon', price: 'Mulai Rp 16.000', key: 'genshin' },
    { name: 'Honor of Kings', icon: 'hok-icon', price: 'Mulai Rp 2.000', key: 'honor' },
    { name: 'Call of Duty', icon: 'cod-icon', price: 'Mulai Rp 15.000', key: 'cod' },
    { name: 'Valorant', icon: 'val-icon', price: 'Mulai Rp 45.000', key: 'valorant' }
];

// State Management
let currentGame = 'mobile-legends';
let selectedProduct = null;
let playerName = '';

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const productSelection = document.getElementById('productSelection');
const gamesGrid = document.getElementById('gamesGrid');
const orderForm = document.getElementById('orderForm');

// Player name lookup functionality
async function lookupPlayerName(userId, gameKey) {
    // Simulate API call with mock data
    const mockPlayerNames = {
        'mobile-legends': {
            '123456789': 'ProGamer123',
            '987654321': 'MLHero',
            '555666777': 'DiamondKing',
            '111222333': 'LegendPlayer'
        },
        'free-fire': {
            '123456789': 'FireMaster',
            '987654321': 'FFChampion',
            '555666777': 'BattleRoyale',
            '111222333': 'SurvivorPro'
        },
        'pubg': {
            '5123456789': 'ChickenDinner',
            '5987654321': 'PUBGPro',
            '5555666777': 'SquadLeader',
            '5111222333': 'SniperElite'
        },
        'genshin': {
            '800123456': 'TravelerMain',
            '800987654': 'GenshinHero',
            '800555666': 'ElementalMaster',
            '800111222': 'WishMaster'
        },
        'honor': {
            '123456789': 'KingOfHonor',
            '987654321': 'HonorWarrior',
            '555666777': 'VoucherKing',
            '111222333': 'HonorLegend'
        },
        'valorant': {
            'player#1234': 'ValorantPro',
            'gamer#5678': 'AgentMaster',
            'pro#9999': 'RadiantPlayer',
            'noob#1111': 'IronWarrior'
        },
        'cod': {
            '6742123456': 'CODMaster',
            '6742987654': 'CallOfDutyPro',
            '6742555666': 'BattleRoyalePro',
            '6742111222': 'ModernWarfare'
        }
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            const gameData = mockPlayerNames[gameKey];
            if (gameData && gameData[userId]) {
                resolve(gameData[userId]);
            } else {
                resolve(null);
            }
        }, 500); // Simulate network delay
    });
}

function showPlayerNameLookup(playerName, success = true) {
    const userIdField = document.getElementById('userId');
    const existingDisplay = userIdField.parentNode.querySelector('.player-name-display');
    
    if (existingDisplay) {
        existingDisplay.remove();
    }

    if (playerName) {
        const nameDisplay = document.createElement('div');
        nameDisplay.className = 'player-name-display';
        nameDisplay.style.cssText = `
            margin-top: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            font-size: 0.875rem;
            ${success ? 
                'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;
        nameDisplay.innerHTML = success ? 
            `<i class="fas fa-check-circle"></i> Nama Pemain: <strong>${playerName}</strong>` :
            `<i class="fas fa-exclamation-circle"></i> ${playerName}`;
        
        userIdField.parentNode.appendChild(nameDisplay);
    }
}

function showLoadingState() {
    const userIdField = document.getElementById('userId');
    const existingDisplay = userIdField.parentNode.querySelector('.player-name-display');
    
    if (existingDisplay) {
        existingDisplay.remove();
    }

    const loadingDisplay = document.createElement('div');
    loadingDisplay.className = 'player-name-display';
    loadingDisplay.style.cssText = `
        margin-top: 0.5rem;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        background-color: #fff3cd;
        color: #856404;
        border: 1px solid #ffeaa7;
    `;
    loadingDisplay.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mencari nama pemain...';
    
    userIdField.parentNode.appendChild(loadingDisplay);
}

// Initialize membership buttons
function initializeMembershipButtons() {
    const membershipBtns = document.querySelectorAll('.membership-btn');
    membershipBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get membership type from button text
            const membershipType = this.textContent.replace('Pilih ', '').toLowerCase();
            
            // Switch to membership tab
            tabs.forEach(t => t.classList.remove('active'));
            const membershipTab = document.querySelector('[data-tab="membership"]');
            if (membershipTab) {
                membershipTab.classList.add('active');
                currentGame = 'membership';
                loadMembershipProducts();
                
                // Scroll to form
                document.querySelector('.hero-section').scrollIntoView({ 
                    behavior: 'smooth' 
                });
                
                // Auto-select the membership type
                setTimeout(() => {
                    const productCards = document.querySelectorAll('.product-card');
                    productCards.forEach(card => {
                        const cardName = card.querySelector('h4').textContent.toLowerCase();
                        if (cardName.includes(membershipType)) {
                            card.click();
                        }
                    });
                }, 500);
            }
        });
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadProducts(currentGame);
    loadPopularGames();
    initializeForm();
    initializeMembershipButtons();
});

// Tab Management
function initializeTabs() {
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabKey = this.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Clear player name display when switching games
            clearPlayerNameDisplay();
            playerName = '';
            
            // Load products for selected game/service
            if (tabKey === 'membership') {
                currentGame = tabKey;
                loadMembershipProducts();
            } else if (tabKey !== 'semua') {
                currentGame = tabKey;
                loadProducts(currentGame);
            } else {
                loadAllProducts();
            }
        });
    });
}

function clearPlayerNameDisplay() {
    const userIdField = document.getElementById('userId');
    const existingDisplay = userIdField.parentNode.querySelector('.player-name-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
}

// Product Loading
function loadProducts(gameKey) {
    const game = gameData[gameKey];
    if (!game) return;
    
    // Show/hide Server ID field based on game
    const serverIdField = document.querySelector('.form-group:has(#serverId)');
    if (serverIdField) {
        serverIdField.style.display = gameKey === 'mobile-legends' ? 'block' : 'none';
    }
    
    productSelection.innerHTML = `
        <h3>Pilih Nominal ${game.name}</h3>
        <div class="product-grid" id="productGrid">
            ${game.products.map(product => `
                <div class="product-card" data-product-id="${product.id}" data-price="${product.price}">
                    <h4>${product.name}</h4>
                    <div class="price">Rp ${formatPrice(product.price)}</div>
                    ${product.bonus > 0 ? `<div class="bonus">+${product.bonus} Bonus</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    // Add click handlers to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove previous selection
            productCards.forEach(c => c.classList.remove('selected'));
            
            // Select current card
            this.classList.add('selected');
            selectedProduct = {
                id: this.dataset.productId,
                price: parseInt(this.dataset.price),
                name: this.querySelector('h4').textContent
            };
        });
    });
}

function loadMembershipProducts() {
    const membership = membershipData['membership'];
    if (!membership) return;
    
    productSelection.innerHTML = `
        <h3>Pilih Paket ${membership.name}</h3>
        <div class="product-grid" id="productGrid">
            ${membership.products.map(product => `
                <div class="product-card membership-product" data-product-id="${product.id}" data-price="${product.price}">
                    <h4>${product.name}</h4>
                    <div class="price">Rp ${formatPrice(product.price)}</div>
                    ${product.bonus > 0 ? `<div class="bonus">Hemat Rp ${formatPrice(product.bonus)}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    // Add click handlers to membership cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            productCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedProduct = {
                id: this.dataset.productId,
                price: parseInt(this.dataset.price),
                name: this.querySelector('h4').textContent
            };
        });
    });
}

function loadAllProducts() {
    let allProductsHtml = '';
    
    // Add games
    Object.keys(gameData).forEach(gameKey => {
        const game = gameData[gameKey];
        allProductsHtml += `
            <div class="game-section">
                <h3>${game.name}</h3>
                <div class="product-grid">
                    ${game.products.slice(0, 6).map(product => `
                        <div class="product-card" data-product-id="${product.id}" data-price="${product.price}" data-game="${gameKey}">
                            <h4>${product.name}</h4>
                            <div class="price">Rp ${formatPrice(product.price)}</div>
                            ${product.bonus > 0 ? `<div class="bonus">+${product.bonus} Bonus</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    productSelection.innerHTML = `
        <h3>Semua Produk Game</h3>
        ${allProductsHtml}
    `;
    
    // Add click handlers
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            productCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            selectedProduct = {
                id: this.dataset.productId,
                price: parseInt(this.dataset.price),
                name: this.querySelector('h4').textContent,
                game: this.dataset.game
            };
        });
    });
}

// Popular Games Loading
function loadPopularGames() {
    gamesGrid.innerHTML = popularGames.map(game => `
        <div class="game-card" data-game="${game.key}">
            <div class="game-icon ${game.icon}">${game.icon.split('-')[0].toUpperCase()}</div>
            <h3>${game.name}</h3>
            <p>${game.price}</p>
        </div>
    `).join('');
    
    // Add click handlers to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameKey = this.dataset.game;
            if (gameData[gameKey]) {
                // Update tab selection
                tabs.forEach(t => t.classList.remove('active'));
                const targetTab = document.querySelector(`[data-tab="${gameKey}"]`);
                if (targetTab) {
                    targetTab.classList.add('active');
                    currentGame = gameKey;
                    loadProducts(currentGame);
                    
                    // Scroll to form
                    document.querySelector('.hero-section').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });
}

// Form Management
function initializeForm() {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
}

function processOrder() {
    // Get form data
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Validation
    if (!userId || !whatsapp || !paymentMethod || !selectedProduct) {
        showMessage('Mohon lengkapi semua data yang diperlukan!', 'error');
        return;
    }
    
    // Format WhatsApp number
    let waNumber = whatsapp.replace(/\D/g, '');
    if (waNumber.startsWith('0')) {
        waNumber = '62' + waNumber.substring(1);
    } else if (!waNumber.startsWith('62')) {
        waNumber = '62' + waNumber;
    }
    
    // Create order message
    let serviceName, orderMessage;
    
    if (currentGame === 'membership') {
        serviceName = 'GAME MEMBERSHIP';
        orderMessage = `
👑 *PESANAN BARU - ${serviceName}*

📋 *Detail Pesanan:*
• Layanan: Game Membership
• Paket: ${selectedProduct.name}
• Harga: Rp ${formatPrice(selectedProduct.price)}
• User ID: ${userId}
${serverId ? `• Server ID: ${serverId}` : ''}
${playerName ? `• Nama Pemain: ${playerName}` : ''}

💳 *Metode Pembayaran:* ${getPaymentMethodName(paymentMethod)}

📱 *Kontak:* ${whatsapp}

Mohon konfirmasi pesanan membership game ini. Terima kasih! 🙏
        `.trim();
    } else {
        serviceName = gameData[currentGame] ? gameData[currentGame].name : 'Game';
        orderMessage = `
🎮 *PESANAN BARU - ${serviceName.toUpperCase()}*

📋 *Detail Pesanan:*
• Game: ${serviceName}
• Produk: ${selectedProduct.name}
• Harga: Rp ${formatPrice(selectedProduct.price)}
• User ID: ${userId}
${serverId ? `• Server ID: ${serverId}` : ''}
${playerName ? `• Nama Pemain: ${playerName}` : ''}

💳 *Metode Pembayaran:* ${getPaymentMethodName(paymentMethod)}

📱 *Kontak:* ${whatsapp}

Mohon konfirmasi pesanan ini. Terima kasih! 🙏
        `.trim();
    }
    
    // Open WhatsApp using the specific message link with order details
    const whatsappUrl = `https://wa.me/message/FQR4IEBCPLEPL1?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    showMessage('Pesanan berhasil dibuat! Anda akan diarahkan ke WhatsApp.', 'success');
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

function getPaymentMethodName(method) {
    const methods = {
        'dana': 'DANA',
        'gopay': 'GoPay',
        'ovo': 'OVO',
        'shopeepay': 'ShopeePay',
        'bank': 'Transfer Bank',
        'qris': 'QRIS'
    };
    return methods[method] || method;
}

function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert message
    const form = document.querySelector('.order-form-container');
    form.insertBefore(message, form.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading state to checkout button
function setCheckoutLoading(loading) {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (loading) {
        checkoutBtn.innerHTML = '<div class="loading"></div> Processing...';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> CHECKOUT';
        checkoutBtn.disabled = false;
    }
}

// Auto-format phone number input
document.getElementById('whatsapp').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('0')) {
        value = value;
    } else if (value.startsWith('62')) {
        value = '0' + value.substring(2);
    }
    e.target.value = value;
});

// Form validation helpers
function validateUserId(userId) {
    if (currentGame === 'valorant') {
        // Validate Riot ID format (username#TAG)
        return /^[a-zA-Z0-9]+#[A-Z0-9]{3,5}$/.test(userId);
    } else if (currentGame === 'genshin') {
        // Validate UID format (8-9 digits starting with region number)
        return /^[1-9]\d{7,8}$/.test(userId);
    } else {
        // Default validation for other games (numeric ID with min 3 digits)
        return userId.length >= 3 && /^\d+$/.test(userId);
    }
}

function validateWhatsApp(whatsapp) {
    const cleaned = whatsapp.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 15;
}

// Real-time form validation and player name lookup
document.getElementById('userId').addEventListener('blur', async function() {
    const userId = this.value;
    
    if (!validateUserId(userId)) {
        this.style.borderColor = '#e74c3c';
        let errorMessage = 'User ID tidak valid';
        if (currentGame === 'valorant') {
            errorMessage = 'Format Riot ID: username#TAG (contoh: player#1234)';
        } else if (currentGame === 'genshin') {
            errorMessage = 'UID harus 8-9 digit dimulai dengan angka region';
        } else {
            errorMessage = 'User ID harus berupa angka minimal 3 digit';
        }
        showFieldError(this, errorMessage);
        return;
    }
    
    this.style.borderColor = '#27ae60';
    hideFieldError(this);
    
    // Look up player name
    if (currentGame !== 'membership') {
        showLoadingState();
        const name = await lookupPlayerName(userId, currentGame);
        if (name) {
            showPlayerNameLookup(name, true);
            playerName = name;
        } else {
            showPlayerNameLookup('Pemain tidak ditemukan', false);
            playerName = '';
        }
    }
});

document.getElementById('whatsapp').addEventListener('blur', function() {
    if (!validateWhatsApp(this.value)) {
        this.style.borderColor = '#e74c3c';
        showFieldError(this, 'Nomor WhatsApp tidak valid');
    } else {
        this.style.borderColor = '#27ae60';
        hideFieldError(this);
    }
});

function showFieldError(field, message) {
    hideFieldError(field);
    const error = document.createElement('div');
    error.className = 'field-error';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.875rem';
    error.style.marginTop = '0.25rem';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

function hideFieldError(field) {
    const error = field.parentNode.querySelector('.field-error');
    if (error) {
        error.remove();
    }
}

// Initialize tooltips or help text
function initializeHelpers() {
    const userIdField = document.getElementById('userId');
    const helpText = userIdField.parentNode.querySelector('.form-help');
    
    userIdField.addEventListener('focus', function() {
        let helpContent = '';
        if (currentGame === 'mobile-legends') {
            helpContent = `
                <div>Masukkan User ID Mobile Legends Anda (contoh: 123456789)</div>
                <a href="https://mobilelegends.net/id/download/" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek User ID Mobile Legends
                </a>`;
        } else if (currentGame === 'free-fire') {
            helpContent = `
                <div>Masukkan User ID Free Fire Anda (contoh: 123456789)</div>
                <a href="https://garena.co.id/check-id" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek User ID Free Fire
                </a>`;
        } else if (currentGame === 'pubg') {
            helpContent = `
                <div>Masukkan User ID PUBG Mobile Anda (contoh: 5123456789)</div>
                <a href="https://www.pubgmobile.com/id/home.shtml" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek User ID PUBG Mobile
                </a>`;
        } else if (currentGame === 'genshin') {
            helpContent = `
                <div>Masukkan UID Genshin Impact Anda (contoh: 800123456)</div>
                <a href="https://genshin.hoyoverse.com/id/home" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek UID Genshin Impact
                </a>`;
        } else if (currentGame === 'valorant') {
            helpContent = `
                <div>Masukkan Riot ID Anda (contoh: username#TAG)</div>
                <a href="https://playvalorant.com/id-id/" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek Riot ID Valorant
                </a>`;
        } else if (currentGame === 'cod') {
            helpContent = `
                <div>Masukkan Player ID COD Mobile Anda (contoh: 6742123456)</div>
                <a href="https://www.callofduty.com/mobile" target="_blank" class="check-id-link">
                    <i class="fas fa-search"></i> Cara Cek Player ID COD Mobile
                </a>`;
        }
        helpText.innerHTML = helpContent;
    });
}

// Call initialize helpers
document.addEventListener('DOMContentLoaded', function() {
    initializeHelpers();
});

// Add animation classes when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .game-card, .payment-method');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize testimonial form
    setupTestimonialForm();
});

// Setup testimonial form functionality
function setupTestimonialForm() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    const testimonialForm = document.getElementById('testimonialForm');
    
    if (!stars.length || !ratingInput || !testimonialForm) return;
    
    // Star rating functionality
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingInput.value = rating;
            
            // Update star display
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseover', () => {
            const rating = index + 1;
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    // Reset star colors on mouse leave
    const ratingStars = document.querySelector('.rating-stars');
    if (ratingStars) {
        ratingStars.addEventListener('mouseleave', () => {
            const currentRating = parseInt(ratingInput.value) || 0;
            stars.forEach((s, i) => {
                if (i < currentRating) {
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    }
    
    // Testimonial form submission
    testimonialForm.addEventListener('submit', handleTestimonialSubmit);
}

// Handle testimonial form submission
function handleTestimonialSubmit(e) {
    e.preventDefault();
    
    const testimonialData = {
        name: document.getElementById('customerName').value,
        game: document.getElementById('gameType').value,
        rating: document.getElementById('rating').value,
        testimonial: document.getElementById('testimonialText').value,
        email: document.getElementById('customerEmail').value
    };
    
    // Validate required fields
    if (!testimonialData.name || !testimonialData.game || !testimonialData.rating || !testimonialData.testimonial) {
        showTestimonialMessage('Mohon lengkapi semua field yang wajib diisi!', 'error');
        return;
    }
    
    if (testimonialData.rating < 1 || testimonialData.rating > 5) {
        showTestimonialMessage('Mohon berikan rating dari 1 hingga 5 bintang!', 'error');
        return;
    }
    
    // Disable submit button
    const submitBtn = document.querySelector('.submit-testimonial-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // Simulate API call
    setTimeout(() => {
        // Add testimonial to the display
        addTestimonialToDisplay(testimonialData);
        
        // Show success message
        showTestimonialMessage('Terima kasih! Testimonial Anda telah berhasil dikirim.', 'success');
        
        // Reset form
        document.getElementById('testimonialForm').reset();
        document.getElementById('rating').value = '';
        document.querySelectorAll('.star').forEach(star => {
            star.classList.remove('active');
            star.style.color = '#ddd';
        });
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Scroll to testimonials section
        document.getElementById('testimonial').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Add new testimonial to the display
function addTestimonialToDisplay(testimonialData) {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    
    if (!testimonialGrid) return;
    
    // Create new testimonial card
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateY(20px)';
    
    // Generate star display
    const starDisplay = Array.from({length: 5}, (_, i) => 
        i < testimonialData.rating ? '★' : '☆'
    ).join('');
    
    testimonialCard.innerHTML = `
        <div class="testimonial-content">
            <p>"${testimonialData.testimonial}"</p>
            <div style="margin-top: 1rem; color: #ffd700; font-size: 1.2rem;">
                ${starDisplay}
            </div>
        </div>
        <div class="testimonial-author">
            <div class="author-info">
                <h4>${testimonialData.name}</h4>
                <p>${testimonialData.game} Player</p>
            </div>
        </div>
    `;
    
    // Add to grid
    testimonialGrid.appendChild(testimonialCard);
    
    // Animate in
    setTimeout(() => {
        testimonialCard.style.transition = 'all 0.5s ease';
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateY(0)';
    }, 100);
}

// Show testimonial message function
function showTestimonialMessage(text, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.testimonial-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message testimonial-message ${type}`;
    message.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> ${text}`;
    
    // Insert after testimonial form
    const testimonialForm = document.querySelector('.testimonial-form-section');
    if (testimonialForm && testimonialForm.parentNode) {
        testimonialForm.parentNode.insertBefore(message, testimonialForm.nextSibling);
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.style.transition = 'all 0.3s ease';
            message.style.opacity = '0';
            message.style.transform = 'translateY(-10px)';
            setTimeout(() => message.remove(), 300);
        }
    }, 5000);
}
