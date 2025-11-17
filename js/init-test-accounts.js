// 테스트 계정 초기화 스크립트
(function() {
    'use strict';

    // 테스트 계정 생성
    function createTestAccounts() {
        // 기존 회원 데이터 가져오기
        let members = JSON.parse(localStorage.getItem('members') || '[]');
        
        // 테스트 계정들 정의
        const testAccounts = [
            {
                id: 1,
                username: 'guest',
                email: 'guest@cashiq.org',
                password: 'guest',
                name: '게스트',
                phone: '010-0000-0001',
                type: 'paid',
                plan: '2년 프리미엄',
                joinDate: '2024-01-01',
                expireDate: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'active',
                searchCount: 0,
                lastLogin: null,
                visitCount: 0,
                lastIP: null
            },
            {
                id: 2,
                username: 'guest1',
                email: 'guest1@cashiq.org',
                password: 'guest',
                name: '게스트1',
                phone: '010-0000-0002',
                type: 'paid',
                plan: '2년 프리미엄',
                joinDate: '2024-01-01',
                expireDate: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'active',
                searchCount: 0,
                lastLogin: null,
                visitCount: 0,
                lastIP: null
            },
            {
                id: 3,
                username: 'guest2',
                email: 'guest2@cashiq.org',
                password: 'guest2',
                name: '게스트2',
                phone: '010-0000-0003',
                type: 'paid',
                plan: '2년 프리미엄',
                joinDate: '2024-01-01',
                expireDate: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'active',
                searchCount: 0,
                lastLogin: null,
                visitCount: 0,
                lastIP: null
            },
            {
                id: 4,
                username: 'guest3',
                email: 'guest3@cashiq.org',
                password: 'guest3',
                name: '게스트3',
                phone: '010-0000-0004',
                type: 'paid',
                plan: '2년 프리미엄',
                joinDate: '2024-01-01',
                expireDate: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                status: 'active',
                searchCount: 0,
                lastLogin: null,
                visitCount: 0,
                lastIP: null
            }
        ];
        
        // 기존 테스트 계정 제거 (중복 방지)
        members = members.filter(m => 
            m.username !== 'guest' && 
            m.username !== 'guest1' &&
            m.username !== 'guest2' &&
            m.username !== 'guest3'
        );
        
        // 테스트 계정 추가
        testAccounts.forEach(account => {
            members.push(account);
        });
        
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
