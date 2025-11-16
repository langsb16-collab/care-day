// 테스트 계정 초기화 스크립트
(function() {
    'use strict';

    // 테스트 계정 생성
    function createTestAccounts() {
        // 기존 회원 데이터 가져오기
        let members = JSON.parse(localStorage.getItem('members') || '[]');
        
        // 테스트 계정 1: guest
        const testAccount1 = {
            username: 'guest',
            email: 'guest@cashiq.org',
            password: '12345',
            name: '게스트',
            phone: '010-0000-0001',
            membershipPlan: '2year', // 프리미엄 2년
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString() // 2년 후
        };
        
        // 테스트 계정 2: locks88@naver.com
        const testAccount2 = {
            username: 'locks88@naver.com',
            email: 'locks88@naver.com',
            password: '12345',
            name: '관리자',
            phone: '010-0000-0002',
            membershipPlan: '2year', // 프리미엄 2년
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString() // 2년 후
        };
        
        // 기존 테스트 계정 제거 (중복 방지)
        members = members.filter(m => 
            m.username !== 'guest' && 
            m.username !== 'locks88@naver.com'
        );
        
        // 테스트 계정 추가
        members.push(testAccount1);
        members.push(testAccount2);
        
        // localStorage에 저장
        localStorage.setItem('members', JSON.stringify(members));
    }
    
    // 페이지 로드 시 자동 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createTestAccounts);
    } else {
        createTestAccounts();
    }
})();
