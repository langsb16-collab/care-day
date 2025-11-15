// 회원 권한 체크 시스템
(function() {
    'use strict';

    // 현재 로그인된 사용자 정보 가져오기
    function getCurrentUser() {
        const userStr = sessionStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    // 회원 등급 가져오기
    function getMembershipPlan() {
        const user = getCurrentUser();
        if (!user) return 'free'; // 비로그인 = 무료 회원
        
        const members = JSON.parse(localStorage.getItem('members') || '[]');
        const member = members.find(m => m.username === user.username);
        return member ? member.membershipPlan : 'free';
    }

    // 페이지 접근 권한 체크
    function checkPageAccess() {
        const currentPage = window.location.pathname;
        const membershipPlan = getMembershipPlan();
        
        // 무료 회원이 접근 가능한 페이지 목록
        const freeAccessPages = [
            '/index.html',
            '/',
            '/auth/login.html',
            '/auth/signup.html',
            '/auth/payment.html',
            '/hospital.html', // 병원 검색 (제한적)
            '/notice/index.html', // 공지사항
            '/notice/view.html'
        ];
        
        // 현재 페이지가 무료 접근 가능한 페이지인지 체크
        const isFreePage = freeAccessPages.some(page => 
            currentPage.endsWith(page) || currentPage === page
        );
        
        // 무료 회원이고 제한된 페이지에 접근하려는 경우
        if (membershipPlan === 'free' && !isFreePage) {
            // 회원가입 페이지로 리다이렉트
            alert('프리미엄 회원 전용 기능입니다.\n회원가입 후 이용하실 수 있습니다.');
            window.location.href = '/auth/signup.html';
            return false;
        }
        
        return true;
    }

    // 병원 검색 횟수 체크 (하루 3회 제한)
    function checkHospitalSearchLimit() {
        const membershipPlan = getMembershipPlan();
        
        // 프리미엄 회원은 무제한
        if (membershipPlan === '1year' || membershipPlan === '2year') {
            return true;
        }
        
        // 무료 회원은 하루 3회 제한
        const today = new Date().toISOString().split('T')[0];
        const searchData = JSON.parse(localStorage.getItem('hospitalSearchCount') || '{}');
        
        // 오늘 날짜가 아니면 초기화
        if (searchData.date !== today) {
            searchData.date = today;
            searchData.count = 0;
        }
        
        // 검색 횟수 체크
        if (searchData.count >= 3) {
            alert('무료 회원은 하루 3회까지 병원 검색이 가능합니다.\n프리미엄 회원으로 업그레이드하시면 무제한으로 이용하실 수 있습니다.');
            if (confirm('프리미엄 회원가입 페이지로 이동하시겠습니까?')) {
                window.location.href = '/auth/signup.html';
            }
            return false;
        }
        
        // 검색 횟수 증가
        searchData.count++;
        localStorage.setItem('hospitalSearchCount', JSON.stringify(searchData));
        
        // 남은 검색 횟수 표시
        const remaining = 3 - searchData.count;
        if (remaining > 0) {
            console.log(`오늘 남은 검색 횟수: ${remaining}회`);
        }
        
        return true;
    }

    // 메뉴 클릭 이벤트 리스너 추가
    function addMenuClickListeners() {
        // 모든 메뉴 링크에 클릭 이벤트 추가
        const restrictedMenus = [
            'caregivers.html',
            'care-diary.html',
            'rehab.html',
            'community.html',
            'support.html',
            'complaints.html',
            'insurance.html',
            'supplies.html',
            'medical.html',
            'emergency.html',
            'disease-info.html',
            'forum.html',
            'papers.html',
            'hospital-reservation.html',
            'caregiver-videos.html',
            'organ-donation.html',
            'patient-rights.html',
            'contact-info.html',
            'funeral-services.html'
        ];
        
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && restrictedMenus.some(page => href.includes(page))) {
                link.addEventListener('click', function(e) {
                    const membershipPlan = getMembershipPlan();
                    if (membershipPlan === 'free') {
                        e.preventDefault();
                        alert('프리미엄 회원 전용 기능입니다.\n회원가입 후 이용하실 수 있습니다.');
                        window.location.href = '/auth/signup.html';
                    }
                });
            }
        });
    }

    // 병원 검색 제한 표시
    function displaySearchLimit() {
        const membershipPlan = getMembershipPlan();
        
        if (membershipPlan === 'free') {
            const today = new Date().toISOString().split('T')[0];
            const searchData = JSON.parse(localStorage.getItem('hospitalSearchCount') || '{}');
            
            if (searchData.date !== today) {
                searchData.date = today;
                searchData.count = 0;
            }
            
            const remaining = 3 - searchData.count;
            
            // 검색 제한 안내 메시지 표시
            const searchContainer = document.querySelector('.search-container, #searchContainer, form');
            if (searchContainer && remaining >= 0) {
                const limitMessage = document.createElement('div');
                limitMessage.className = 'bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-sm';
                limitMessage.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fas fa-info-circle text-yellow-600 mr-2"></i>
                            <span class="text-yellow-800">
                                <strong>무료 회원</strong>: 오늘 남은 검색 횟수 <strong>${remaining}회</strong>
                            </span>
                        </div>
                        <a href="/auth/signup.html" class="text-blue-600 hover:text-blue-800 font-semibold">
                            무제한 사용 →
                        </a>
                    </div>
                `;
                searchContainer.parentNode.insertBefore(limitMessage, searchContainer);
            }
        }
    }

    // 페이지 로드 시 초기화
    document.addEventListener('DOMContentLoaded', function() {
        // 페이지 접근 권한 체크
        checkPageAccess();
        
        // 메뉴 클릭 리스너 추가
        addMenuClickListeners();
        
        // 병원 검색 페이지인 경우
        if (window.location.pathname.includes('hospital.html')) {
            displaySearchLimit();
            
            // 검색 버튼 클릭 시 제한 체크
            const searchButton = document.querySelector('#searchButton, button[type="submit"]');
            if (searchButton) {
                searchButton.addEventListener('click', function(e) {
                    if (!checkHospitalSearchLimit()) {
                        e.preventDefault();
                    }
                });
            }
            
            // 검색 폼 제출 시 제한 체크
            const searchForm = document.querySelector('form');
            if (searchForm) {
                searchForm.addEventListener('submit', function(e) {
                    if (!checkHospitalSearchLimit()) {
                        e.preventDefault();
                    }
                });
            }
        }
    });

    // 전역 함수로 노출
    window.authCheck = {
        getCurrentUser,
        getMembershipPlan,
        checkPageAccess,
        checkHospitalSearchLimit
    };
})();
