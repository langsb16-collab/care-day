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
        // Detect mobile
        const isMobile = window.innerWidth < 768;
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, ${isMobile ? '0.85' : '0.7'});
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: ${isMobile ? '10px' : '20px'};
            animation: fadeIn 0.3s ease-in;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        `;

        // Create popup container
        const container = document.createElement('div');
        container.className = 'popup-container';
        
        // Adjust size for mobile
        const width = isMobile ? 'calc(100% - 20px)' : `${popup.width}px`;
        const height = isMobile ? 'auto' : Math.min(popup.height, window.innerHeight - 100);
        
        // Apply position settings (only for desktop)
        let positionStyle = '';
        if (!isMobile && popup.position) {
            const preset = popup.position.preset || 'center';
            
            if (preset === 'custom') {
                // Use custom position values
                if (popup.position.top) positionStyle += `top: ${popup.position.top}px;`;
                if (popup.position.bottom) positionStyle += `bottom: ${popup.position.bottom}px;`;
                if (popup.position.left) positionStyle += `left: ${popup.position.left}px;`;
                if (popup.position.right) positionStyle += `right: ${popup.position.right}px;`;
            } else {
                // Use preset positions
                const presets = {
                    'center': 'top: 50%; left: 50%; transform: translate(-50%, -50%);',
                    'top-left': 'top: 50px; left: 50px;',
                    'top-center': 'top: 50px; left: 50%; transform: translateX(-50%);',
                    'top-right': 'top: 50px; right: 50px;',
                    'center-left': 'top: 50%; left: 50px; transform: translateY(-50%);',
                    'center-right': 'top: 50%; right: 50px; transform: translateY(-50%);',
                    'bottom-left': 'bottom: 50px; left: 50px;',
                    'bottom-center': 'bottom: 50px; left: 50%; transform: translateX(-50%);',
                    'bottom-right': 'bottom: 50px; right: 50px;'
                };
                positionStyle = presets[preset] || presets['center'];
            }
        } else if (isMobile) {
            // Mobile: always centered and full width
            positionStyle = 'margin: auto;';
        } else {
            // Default to center if no position specified
            positionStyle = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
        }
        
        container.style.cssText = `
            background: white;
            border-radius: ${isMobile ? '20px 20px 0 0' : '16px'};
            box-shadow: 0 ${isMobile ? '0' : '10px'} 40px rgba(0, 0, 0, 0.3);
            width: ${width};
            max-width: ${isMobile ? '100%' : '95%'};
            ${height !== 'auto' ? `height: ${height}px;` : ''}
            max-height: ${isMobile ? '85vh' : '90vh'};
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            position: ${isMobile ? 'relative' : 'fixed'};
            ${positionStyle}
            animation: ${isMobile ? 'slideUp' : 'slideIn'} 0.3s ease-out;
            z-index: 100000;
        `;

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.className = 'popup-close-btn';
        closeBtn.style.cssText = `
            position: ${isMobile ? 'sticky' : 'absolute'};
            top: ${isMobile ? '0' : '12px'};
            right: ${isMobile ? '0' : '12px'};
            background: #ef4444;
            color: white;
            border: none;
            border-radius: 50%;
            width: ${isMobile ? '44px' : '36px'};
            height: ${isMobile ? '44px' : '36px'};
            cursor: pointer;
            font-size: ${isMobile ? '20px' : '18px'};
            z-index: 10;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            margin: ${isMobile ? '12px' : '0'};
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-tap-highlight-color: transparent;
        `;
        closeBtn.onmouseover = () => closeBtn.style.background = '#dc2626';
        closeBtn.onmouseout = () => closeBtn.style.background = '#ef4444';
        closeBtn.onclick = () => this.closePopup(overlay);
        
        // Add touch feedback for mobile
        if (isMobile) {
            closeBtn.ontouchstart = () => closeBtn.style.background = '#dc2626';
            closeBtn.ontouchend = () => closeBtn.style.background = '#ef4444';
        }

        // Create content
        const content = document.createElement('div');
        content.className = 'popup-content';
        content.style.cssText = `padding: ${isMobile ? '20px' : '24px'}; padding-top: ${isMobile ? '8px' : '24px'};`;

        let html = `<h2 style="font-size: ${isMobile ? '20px' : '24px'}; font-weight: bold; margin-bottom: ${isMobile ? '12px' : '16px'}; color: #1f2937; line-height: 1.4;">${popup.title}</h2>`;
        
        // Always show content if available
        if (popup.content && popup.content.trim()) {
            html += `<div style="margin-bottom: ${isMobile ? '12px' : '16px'}; color: #4b5563; line-height: 1.6; white-space: pre-wrap; font-size: ${isMobile ? '14px' : '16px'};">${popup.content.replace(/\n/g, '<br>')}</div>`;
        }

        // Show image only if type is 'image' AND imageUrl exists
        if (popup.type === 'image' && popup.imageUrl && popup.imageUrl.trim()) {
            html += `<div style="text-align: center; margin-top: ${isMobile ? '12px' : '16px'};"><img src="${popup.imageUrl}" alt="${popup.title}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); touch-action: pan-y;"></div>`;
        }

        // Show video only if type is 'video' AND videoUrl exists
        if (popup.type === 'video' && popup.videoUrl && popup.videoUrl.trim()) {
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

        // If no content at all, show a placeholder
        if (!html || html === `<h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #1f2937;">${popup.title}</h2>`) {
            html += `<p style="color: #9ca3af; text-align: center; padding: 20px;">내용이 없습니다.</p>`;
        }

        content.innerHTML = html;

        // Add today's close checkbox
        const footer = document.createElement('div');
        footer.style.cssText = `
            padding: ${isMobile ? '16px 20px 20px' : '16px 24px'}; 
            border-top: 1px solid #e5e7eb; 
            display: flex; 
            ${isMobile ? 'flex-direction: column; gap: 12px;' : 'justify-content: space-between;'} 
            align-items: ${isMobile ? 'stretch' : 'center'};
            background: ${isMobile ? '#f9fafb' : 'transparent'};
            border-radius: ${isMobile ? '0 0 20px 20px' : '0'};
            position: ${isMobile ? 'sticky' : 'relative'};
            bottom: 0;
            z-index: 5;
        `;
        footer.innerHTML = `
            <label style="display: flex; align-items: center; cursor: pointer; user-select: none; ${isMobile ? 'justify-content: center;' : ''}">
                <input type="checkbox" id="popupDontShowToday" style="width: ${isMobile ? '20px' : '18px'}; height: ${isMobile ? '20px' : '18px'}; cursor: pointer; margin-right: 8px; -webkit-tap-highlight-color: transparent;">
                <span style="color: #6b7280; font-size: ${isMobile ? '15px' : '14px'};">오늘 하루 보지 않기</span>
            </label>
            <button onclick="document.querySelector('.popup-overlay').remove()" style="
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
                color: white; 
                padding: ${isMobile ? '14px 24px' : '8px 16px'}; 
                border: none; 
                border-radius: ${isMobile ? '12px' : '8px'}; 
                cursor: pointer; 
                font-weight: ${isMobile ? '600' : '500'}; 
                font-size: ${isMobile ? '16px' : '14px'};
                transition: all 0.2s;
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
                width: ${isMobile ? '100%' : 'auto'};
                -webkit-tap-highlight-color: transparent;
            ">
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
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            /* Mobile-specific scrollbar styling */
            @media (max-width: 767px) {
                .popup-container::-webkit-scrollbar {
                    width: 6px;
                }
                .popup-container::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .popup-container::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
                .popup-container::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
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
