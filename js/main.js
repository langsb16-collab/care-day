// Main JavaScript for Brain Disease Care Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Main.js loaded');
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    console.log('Mobile menu toggle:', mobileMenuToggle);
    console.log('Mobile menu:', mobileMenu);
    
    if (mobileMenuToggle && mobileMenu) {
        // Remove any existing listeners to prevent duplicates
        const newToggle = mobileMenuToggle.cloneNode(true);
        mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);
        
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('📱 Menu toggle clicked!');
            
            mobileMenu.classList.toggle('hidden');
            console.log('Menu hidden:', mobileMenu.classList.contains('hidden'));
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });
        
        console.log('✅ Mobile menu listener attached');
    } else {
        console.error('❌ Mobile menu elements not found!');
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Search Functionality (Quick Search on Homepage)
function performSearch() {
    const searchInput = document.getElementById('quick-search');
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to hospital search page with query
            window.location.href = `hospital.html?search=${encodeURIComponent(query)}`;
        } else {
            alert('검색어를 입력해주세요.');
        }
    }
}

// Allow Enter key to trigger search
const quickSearchInput = document.getElementById('quick-search');
if (quickSearchInput) {
    quickSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Scroll to Top Button
let scrollToTopBtn = document.getElementById('scrollToTop');

// Create scroll to top button if it doesn't exist
if (!scrollToTopBtn) {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTop';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition hidden z-40';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Parse URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Auto-fill search input from URL parameter (for hospital.html)
if (window.location.pathname.includes('hospital.html')) {
    const searchQuery = getUrlParameter('search');
    const searchInput = document.getElementById('searchInput');
    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
        // Trigger search if searchHospitals function exists
        if (typeof searchHospitals === 'function') {
            searchHospitals();
        }
    }
}

// Loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loading-overlay';
    loader.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loader.innerHTML = `
        <div class="bg-white rounded-lg p-8 text-center">
            <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
            <p class="text-gray-600">로딩 중...</p>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('loading-overlay');
    if (loader) {
        loader.remove();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-8 max-w-sm bg-white shadow-lg rounded-lg p-4 z-50 border-l-4 ${
        type === 'success' ? 'border-green-500' : 
        type === 'error' ? 'border-red-500' : 
        type === 'warning' ? 'border-yellow-500' : 
        'border-blue-500'
    }`;
    
    const icon = type === 'success' ? '✓' : 
                 type === 'error' ? '✗' : 
                 type === 'warning' ? '⚠' : 
                 'ℹ';
    
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="text-2xl mr-3">${icon}</span>
            <p class="text-gray-800">${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Form validation helper
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
            input.addEventListener('input', function() {
                this.classList.remove('border-red-500');
            }, { once: true });
        }
    });
    
    if (!isValid) {
        showNotification('필수 항목을 모두 입력해주세요.', 'warning');
    }
    
    return isValid;
}

// Print functionality
function printPage() {
    window.print();
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).then(() => {
            showNotification('공유되었습니다!', 'success');
        }).catch(err => {
            console.error('Share failed:', err);
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('링크가 클립보드에 복사되었습니다!', 'success');
        }).catch(err => {
            console.error('Copy failed:', err);
            showNotification('링크 복사에 실패했습니다.', 'error');
        });
    }
}

// Console log for debugging
console.log('🧠 Brain Disease Care Website loaded successfully');
console.log('Current page:', window.location.pathname);
