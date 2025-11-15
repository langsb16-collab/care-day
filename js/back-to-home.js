// 메인화면 돌아가기 버튼 자동 추가 스크립트
(function() {
    'use strict';

    // 현재 페이지가 index.html이 아닌 경우에만 버튼 추가
    const currentPage = window.location.pathname;
    const isMainPage = currentPage === '/' || currentPage === '/index.html' || currentPage.endsWith('/index.html');
    
    if (!isMainPage) {
        // 페이지 로드 후 버튼 추가
        document.addEventListener('DOMContentLoaded', function() {
            addBackToHomeButton();
        });
    }

    function addBackToHomeButton() {
        // 버튼이 이미 존재하는지 확인
        if (document.getElementById('backToHomeButton')) {
            return;
        }

        // 버튼 HTML 생성
        const buttonHTML = `
            <div id="backToHomeButton" class="fixed bottom-6 right-6 z-50">
                <a href="/index.html" 
                   class="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <i class="fas fa-home mr-2"></i>
                    <span class="font-semibold" data-i18n="backToHome">메인화면 돌아가기</span>
                </a>
            </div>
        `;

        // body에 버튼 추가
        document.body.insertAdjacentHTML('beforeend', buttonHTML);

        // 다국어가 설정되어 있으면 번역 적용
        if (typeof updatePageLanguage === 'function') {
            setTimeout(() => {
                updatePageLanguage();
            }, 100);
        }
    }
})();
