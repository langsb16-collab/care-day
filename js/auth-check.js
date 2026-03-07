// 회원 권한 체크 시스템 (모든 기능 무료)
(function() {
    'use strict';

    // 현재 언어 가져오기
    function getCurrentLanguage() {
        return localStorage.getItem('currentLanguage') || localStorage.getItem('language') || 'ko';
    }

    // 현재 로그인된 사용자 정보 가져오기
    function getCurrentUser() {
        const userStr = sessionStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    // 회원 등급 가져오기 (항상 premium 반환)
    function getMembershipPlan() {
        return 'premium'; // 모든 사용자에게 프리미엄 권한 부여
    }

    // 페이지 접근 권한 체크 (항상 true 반환)
    function checkPageAccess() {
        return true; // 모든 페이지 접근 허용
    }

    // 병원 검색 횟수 체크 (항상 true 반환)
    function checkHospitalSearchLimit() {
        return true; // 무제한 검색 허용
    }

    // 메뉴 클릭 이벤트 리스너 추가 (제한 없음)
    function addMenuClickListeners() {
        // 모든 메뉴 자유롭게 접근 가능
        console.log('All menus are freely accessible');
    }

    // 병원 검색 제한 표시 (제한 없음)
    function displaySearchLimit() {
        // 무료 사용자에게도 제한 없음
        console.log('Unlimited search available');
    }

    // 페이지 로드 시 초기화
    document.addEventListener('DOMContentLoaded', function() {
        // 페이지 접근 권한 체크 (항상 허용)
        checkPageAccess();
        
        // 메뉴 클릭 리스너 추가 (제한 없음)
        addMenuClickListeners();
        
        // 병원 검색 페이지인 경우 (제한 없음)
        if (window.location.pathname.includes('hospital.html')) {
            displaySearchLimit();
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
