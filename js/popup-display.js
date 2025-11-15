// Popup Display System for CASHiQ
// Shows popups based on page and date range

class PopupManager {
    constructor() {
        this.currentPage = this.getPageKey();
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
        // Check if popup was closed today
        const closedToday = sessionStorage.getItem('popupClosedToday');
        if (closedToday) return;

        await this.loadAndShowPopup();
    }

    async loadAndShowPopup() {
        try {
            // Try localStorage first (for admin updates)
            let popups = [];
            const saved = localStorage.getItem('popups');
            
            if (saved) {
                popups = JSON.parse(saved);
            } else {
                const response = await fetch('/data/popups.json');
                popups = await response.json();
            }

            // Filter active popups for this page
            const now = new Date();
            const activePopups = popups.filter(popup => {
                if (!popup.active) return false;
                if (popup.showOn !== 'all' && popup.showOn !== this.currentPage) return false;
                if (new Date(popup.startDate) > now) return false;
                if (new Date(popup.endDate) < now) return false;
                return true;
            });

            if (activePopups.length > 0) {
                // Show the first active popup
                this.showPopup(activePopups[0]);
            }
        } catch (error) {
            console.error('Error loading popups:', error);
        }
    }

    showPopup(popup) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-in;
        `;

        // Create popup container
        const container = document.createElement('div');
        container.className = 'popup-container';
        
        // Adjust size for mobile
        const isMobile = window.innerWidth < 768;
        const width = isMobile ? Math.min(popup.width, window.innerWidth - 40) : popup.width;
        const height = isMobile ? 'auto' : Math.min(popup.height, window.innerHeight - 100);
        
        container.style.cssText = `
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            width: ${width}px;
            max-width: 95%;
            ${height !== 'auto' ? `height: ${height}px;` : ''}
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease-out;
        `;

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.className = 'popup-close-btn';
        closeBtn.style.cssText = `
            position: absolute;
            top: 12px;
            right: 12px;
            background: #ef4444;
            color: white;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            cursor: pointer;
            font-size: 18px;
            z-index: 10;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        `;
        closeBtn.onmouseover = () => closeBtn.style.background = '#dc2626';
        closeBtn.onmouseout = () => closeBtn.style.background = '#ef4444';
        closeBtn.onclick = () => this.closePopup(overlay);

        // Create content
        const content = document.createElement('div');
        content.className = 'popup-content';
        content.style.cssText = 'padding: 24px;';

        let html = `<h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #1f2937;">${popup.title}</h2>`;
        
        if (popup.content) {
            html += `<p style="margin-bottom: 16px; color: #4b5563; line-height: 1.6;">${popup.content.replace(/\n/g, '<br>')}</p>`;
        }

        if (popup.type === 'image' && popup.imageUrl) {
            html += `<div style="text-align: center;"><img src="${popup.imageUrl}" alt="${popup.title}" style="max-width: 100%; height: auto; border-radius: 8px;"></div>`;
        }

        if (popup.type === 'video' && popup.videoUrl) {
            const videoId = popup.videoUrl.includes('youtu.be') ? 
                popup.videoUrl.split('/').pop() : 
                popup.videoUrl.split('v=')[1]?.split('&')[0];
            
            if (videoId) {
                html += `
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin-top: 16px;">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"
                        ></iframe>
                    </div>
                `;
            }
        }

        content.innerHTML = html;

        // Add today's close checkbox
        const footer = document.createElement('div');
        footer.style.cssText = 'padding: 16px 24px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;';
        footer.innerHTML = `
            <label style="display: flex; align-items: center; cursor: pointer; user-select: none;">
                <input type="checkbox" id="popupDontShowToday" style="width: 18px; height: 18px; cursor: pointer; margin-right: 8px;">
                <span style="color: #6b7280; font-size: 14px;">오늘 하루 보지 않기</span>
            </label>
            <button onclick="document.querySelector('.popup-overlay').remove()" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; transition: background 0.2s;">
                확인
            </button>
        `;

        // Assemble popup
        container.appendChild(closeBtn);
        container.appendChild(content);
        container.appendChild(footer);
        overlay.appendChild(container);

        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: scale(0.9) translateY(-20px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Add to document
        document.body.appendChild(overlay);

        // Handle checkbox
        document.getElementById('popupDontShowToday').addEventListener('change', (e) => {
            if (e.target.checked) {
                sessionStorage.setItem('popupClosedToday', 'true');
            } else {
                sessionStorage.removeItem('popupClosedToday');
            }
        });

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closePopup(overlay);
            }
        });
    }

    closePopup(overlay) {
        const checkbox = document.getElementById('popupDontShowToday');
        if (checkbox && checkbox.checked) {
            sessionStorage.setItem('popupClosedToday', 'true');
        }
        overlay.remove();
    }
}

// Auto-initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new PopupManager());
} else {
    new PopupManager();
}
