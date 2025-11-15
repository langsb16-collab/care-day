// Banner Display System for CASHiQ
// Auto-rotating banner ads with left/right/top/bottom positions

class BannerManager {
    constructor() {
        this.banners = [];
        this.currentPage = this.getPageKey();
        this.rotationInterval = 30000; // 30 seconds
        this.init();
    }

    getPageKey() {
        const path = window.location.pathname;
        if (path.includes('index.html') || path === '/') return 'index';
        if (path.includes('hospital.html')) return 'hospital';
        if (path.includes('caregivers.html')) return 'caregivers';
        if (path.includes('rehab.html')) return 'rehab';
        if (path.includes('community.html')) return 'community';
        return 'all';
    }

    async init() {
        await this.loadBanners();
        this.renderBanners();
        this.startRotation();
    }

    async loadBanners() {
        try {
            // Try localStorage first (for admin updates)
            const saved = localStorage.getItem('banners');
            if (saved) {
                this.banners = JSON.parse(saved);
            } else {
                const response = await fetch('/data/banners.json');
                this.banners = await response.json();
            }

            // Filter active banners for this page
            const now = new Date();
            this.banners = this.banners.filter(banner => {
                if (!banner.active) return false;
                if (banner.showOn !== 'all' && banner.showOn !== this.currentPage) return false;
                if (banner.startDate && new Date(banner.startDate) > now) return false;
                if (banner.endDate && new Date(banner.endDate) < now) return false;
                return true;
            });

            // Sort by priority
            this.banners.sort((a, b) => a.priority - b.priority);
        } catch (error) {
            console.error('Error loading banners:', error);
            this.banners = [];
        }
    }

    renderBanners() {
        // Group banners by position
        const positions = {
            left: this.banners.filter(b => b.position === 'left'),
            right: this.banners.filter(b => b.position === 'right'),
            top: this.banners.filter(b => b.position === 'top'),
            bottom: this.banners.filter(b => b.position === 'bottom')
        };

        // Render each position
        if (positions.left.length > 0) this.renderPosition('left', positions.left);
        if (positions.right.length > 0) this.renderPosition('right', positions.right);
        if (positions.top.length > 0) this.renderPosition('top', positions.top);
        if (positions.bottom.length > 0) this.renderPosition('bottom', positions.bottom);
    }

    renderPosition(position, banners) {
        // Create container
        const container = document.createElement('div');
        container.id = `banner-${position}`;
        container.className = this.getContainerClass(position);

        // For left/right: show 3 at a time on desktop, 1 on mobile
        // For top/bottom: show horizontally
        if (position === 'left' || position === 'right') {
            this.renderVerticalBanners(container, banners, position);
        } else {
            this.renderHorizontalBanners(container, banners, position);
        }

        document.body.appendChild(container);
    }

    renderVerticalBanners(container, banners, position) {
        const wrapper = document.createElement('div');
        wrapper.className = 'banner-vertical-wrapper';
        wrapper.innerHTML = banners.map((banner, index) => `
            <div class="banner-item ${index >= 3 ? 'hidden md:hidden' : ''}" data-index="${index}">
                ${banner.linkUrl ? `<a href="${banner.linkUrl}" target="_blank">` : ''}
                    <img src="${banner.imageUrl}" alt="${banner.title}" class="w-full rounded-lg shadow-lg mb-2">
                    <p class="text-xs text-center text-gray-600">${index + 1}</p>
                ${banner.linkUrl ? `</a>` : ''}
            </div>
        `).join('');

        container.appendChild(wrapper);
        container.dataset.bannerCount = banners.length;
        container.dataset.currentOffset = '0';
    }

    renderHorizontalBanners(container, banners, position) {
        const wrapper = document.createElement('div');
        wrapper.className = 'banner-horizontal-wrapper flex gap-4 overflow-x-auto';
        wrapper.innerHTML = banners.map((banner, index) => `
            <div class="banner-item flex-shrink-0">
                ${banner.linkUrl ? `<a href="${banner.linkUrl}" target="_blank">` : ''}
                    <img src="${banner.imageUrl}" alt="${banner.title}" class="h-20 md:h-24 rounded-lg shadow-lg">
                ${banner.linkUrl ? `</a>` : ''}
            </div>
        `).join('');

        container.appendChild(wrapper);
    }

    getContainerClass(position) {
        const base = 'banner-container fixed z-40 transition-all duration-500';
        const mobile = 'hidden md:block'; // Hide on mobile by default
        
        switch (position) {
            case 'left':
                return `${base} ${mobile} left-2 top-32 w-32 max-h-screen overflow-hidden`;
            case 'right':
                return `${base} ${mobile} right-2 top-32 w-32 max-h-screen overflow-hidden`;
            case 'top':
                return `${base} top-20 left-0 right-0 bg-white shadow-md p-2`;
            case 'bottom':
                return `${base} bottom-0 left-0 right-0 bg-white shadow-md p-2`;
            default:
                return base;
        }
    }

    startRotation() {
        setInterval(() => {
            this.rotateBanners('left');
            this.rotateBanners('right');
        }, this.rotationInterval);
    }

    rotateBanners(position) {
        const container = document.getElementById(`banner-${position}`);
        if (!container) return;

        const bannerCount = parseInt(container.dataset.bannerCount);
        if (bannerCount <= 3) return; // No need to rotate if 3 or less

        let currentOffset = parseInt(container.dataset.currentOffset);
        currentOffset = (currentOffset + 1) % (bannerCount - 2); // Rotate by 1
        container.dataset.currentOffset = currentOffset;

        const items = container.querySelectorAll('.banner-item');
        items.forEach((item, index) => {
            const shouldShow = index >= currentOffset && index < currentOffset + 3;
            if (shouldShow) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        // Smooth slide animation
        const wrapper = container.querySelector('.banner-vertical-wrapper');
        if (wrapper) {
            wrapper.style.transform = `translateY(-${currentOffset * 10}%)`;
        }
    }
}

// Auto-initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new BannerManager());
} else {
    new BannerManager();
}
