# 🤖 CASHiQ 자동응답 챗봇 & 데이터 영구 보존 가이드

## 📅 완료 일시
2025-11-17

## ✅ 구현 완료 사항

### 1. 🤖 자동응답 챗봇 시스템

#### 📦 추가된 파일
- `/js/chatbot.js` - 챗봇 핵심 로직
- `/css/chatbot.css` - 챗봇 UI 스타일

#### 🎨 챗봇 디자인
- **위치**: 모든 페이지 우측 하단 고정
- **색상**: 보라색 그라데이션 (Purple Gradient)
- **크기**: PC 380×600px, 모바일 전체화면
- **애니메이션**: Pulse 효과, 부드러운 페이드인/아웃

#### 💬 주요 기능
1. **자동응답 시스템**
   - 키워드 기반 답변 매칭
   - 질문 전체 매칭 지원
   - 답변 못 찾을 시 안내 메시지

2. **빠른 질문 버튼**
   - 카테고리별 대표 질문 4개 표시
   - 원클릭으로 즉시 답변 확인

3. **대화 히스토리**
   - 사용자/봇 메시지 구분
   - 타임스탬프 표시
   - 스크롤 자동 이동

4. **배지 알림**
   - 새 메시지 카운트 표시
   - 챗봇 열면 자동 초기화

#### 📊 기본 제공 Q&A (6개)
1. **서비스 안내** - CASHiQ는 어떤 서비스인가요?
2. **회원가입** - 회원가입은 어떻게 하나요?
3. **멤버십** - 프리미엄 멤버십의 혜택은?
4. **재활운동** - 재활운동 영상은 어디서 볼 수 있나요?
5. **병원 찾기** - 가까운 병원을 찾고 싶어요
6. **문의** - 고객센터는 어떻게 이용하나요?

### 2. ⚙️ 관리자 설정 - 챗봇 Q&A 관리

#### 📍 위치
https://cashiq.org/admin/settings.html

#### 🔧 관리 기능
1. **Q&A 등록**
   - 카테고리 선택 (8종)
   - 질문 입력
   - 답변 입력
   - 키워드 입력 (쉼표 구분)

2. **Q&A 수정**
   - 기존 Q&A 클릭으로 수정 모드
   - 모든 필드 수정 가능

3. **Q&A 삭제**
   - 휴지통 아이콘 클릭
   - 확인 후 즉시 삭제

4. **Q&A 목록**
   - 카테고리별 색상 구분
   - 질문/답변 미리보기
   - 키워드 태그 표시
   - 현재 개수 표시 (최대 100개)

#### 📋 카테고리 종류
- 서비스 안내
- 회원가입
- 멤버십
- 재활운동
- 병원 찾기
- 문의
- 결제
- 기타

### 3. 💾 데이터 영구 보존 시스템

#### 📦 추가된 파일
- `/js/storage-manager.js` - 데이터 보존 관리자

#### 🛡️ 3중 백업 시스템

##### 1단계: localStorage
- 기본 저장소
- 5-10MB 용량
- 브라우저별 영구 보존

##### 2단계: sessionStorage
- 세션 백업
- 탭/창 유지 시 보존
- localStorage 복구용

##### 3단계: IndexedDB
- 대용량 저장소 (수백 MB)
- 구조화된 데이터 저장
- 브라우저 데이터 삭제에도 일부 보존

#### ⏰ 자동 백업 타이밍
1. **페이지 로드 시** - 백업 복원
2. **데이터 변경 시** - 즉시 백업
3. **5분마다** - 주기적 백업
4. **페이지 언로드 전** - 최종 백업

#### 📂 백업 대상 데이터
- `notices` - 공지사항
- `banners` - 배너 광고
- `popups` - 팝업
- `chatbotQnA` - 챗봇 Q&A
- `siteSettings` - 사이트 설정
- `paymentSettings` - 결제 설정
- `membershipSettings` - 회원 설정
- `securitySettings` - 보안 설정
- `members` - 회원 정보

#### 🔄 복원 프로세스
```
페이지 로드
  ↓
sessionStorage 확인 → 있으면 복원
  ↓
IndexedDB 확인 → 있으면 복원
  ↓
localStorage 비어있으면 백업에서 복원
```

### 4. 📤 데이터 관리 기능

#### 내보내기 (Export)
```javascript
// 브라우저 콘솔에서 실행
window.exportCASHiQData();
```
- 모든 데이터를 JSON 파일로 다운로드
- 파일명: `cashiq-full-backup-YYYY-MM-DD.json`
- 수동 백업용

#### 가져오기 (Import)
```javascript
// 브라우저 콘솔에서 실행
const input = document.createElement('input');
input.type = 'file';
input.accept = '.json';
input.onchange = (e) => window.importCASHiQData(e.target.files[0]);
input.click();
```
- JSON 파일에서 데이터 복원
- 자동 페이지 새로고침

#### 통계 확인
```javascript
// 브라우저 콘솔에서 실행
const stats = window.getCASHiQStats();
console.log(stats);
```
- 항목별 용량 확인
- 전체 사용량 확인
- 백분율 확인

#### 전체 삭제 (주의!)
```javascript
// 브라우저 콘솔에서 실행
window.clearCASHiQData();
```
- 모든 데이터 삭제
- 2단계 확인 필요

## 🌐 배포 범위

### 챗봇 적용 페이지 (27개)

#### 메인 페이지 (20개)
- index.html - 메인 페이지
- care-diary.html - 간병 일지
- caregiver-videos.html - 간병인 교육
- caregivers.html - 간병인 구인구직
- community.html - 커뮤니티
- complaints.html - 민원/제보
- contact-info.html - 연락처 정보
- disease-info.html - 질병 정보
- download.html - 자료실
- emergency.html - 응급처치
- forum.html - 포럼
- funeral-services.html - 장례 서비스
- hospital-reservation.html - 병원 예약
- insurance.html - 보험 정보
- medical-lens.html - 의료 렌즈
- medical.html - 의료 정보
- organ-donation.html - 장기 기증
- papers.html - 논문
- patient-rights.html - 환자 권리
- rehab.html - 재활운동

#### 관리자 페이지 (7개)
- admin/dashboard.html - 대시보드
- admin/notices.html - 공지 관리
- admin/banners.html - 배너 관리
- admin/popups.html - 팝업 관리
- admin/settings.html - 시스템 설정
- admin/members.html - 회원 관리
- admin/inquiries.html - 문의 관리

## 🎯 사용 방법

### 일반 사용자

#### 1. 챗봇 사용하기
```
1. 페이지 우측 하단의 보라색 말풍선 아이콘 클릭
2. 빠른 질문 버튼 클릭 또는 직접 질문 입력
3. 엔터키 또는 전송 버튼으로 전송
4. 챗봇의 자동 답변 확인
```

#### 2. 답변이 없을 때
- 고객센터 이메일: support@cashiq.org
- 1:1 문의 페이지 이용
- 평일 09:00-18:00 답변

### 관리자

#### 1. 챗봇 Q&A 관리
```
1. https://cashiq.org/admin/settings.html 접속
2. "챗봇 자동응답 관리" 섹션으로 스크롤
3. Q&A 등록 양식 작성
   - 카테고리 선택
   - 질문 입력
   - 답변 입력 (여러 줄 가능)
   - 키워드 입력 (쉼표로 구분)
4. "저장" 버튼 클릭
5. 목록에서 즉시 확인
```

#### 2. Q&A 수정
```
1. 목록에서 수정할 Q&A의 연필 아이콘 클릭
2. 양식에 자동 채워짐
3. 내용 수정
4. "수정" 버튼 클릭
```

#### 3. Q&A 삭제
```
1. 목록에서 삭제할 Q&A의 휴지통 아이콘 클릭
2. 확인 대화상자에서 "확인" 클릭
3. 즉시 삭제 및 목록 갱신
```

#### 4. 데이터 백업
```
방법 1: 자동 백업 (권장)
- 자동으로 5분마다 백업됨
- 페이지 이동 시 자동 백업
- 별도 조치 불필요

방법 2: 수동 백업
1. 브라우저 콘솔 열기 (F12)
2. window.exportCASHiQData() 입력
3. JSON 파일 다운로드됨
4. 안전한 곳에 보관
```

#### 5. 데이터 복원
```
1. 브라우저 콘솔 열기 (F12)
2. 아래 코드 입력:
   const input = document.createElement('input');
   input.type = 'file';
   input.accept = '.json';
   input.onchange = (e) => window.importCASHiQData(e.target.files[0]);
   input.click();
3. 백업 JSON 파일 선택
4. 자동 복원 및 페이지 새로고침
```

## 🔧 기술 상세

### 챗봇 답변 매칭 알고리즘

```javascript
function findAnswer(question) {
    const lowerQuestion = question.toLowerCase();

    // 1. 질문 전체 매칭 (우선순위 높음)
    for (const qna of this.qnaData) {
        if (qna.question.toLowerCase().includes(lowerQuestion) || 
            lowerQuestion.includes(qna.question.toLowerCase())) {
            return qna.answer;
        }
    }

    // 2. 키워드 매칭 (우선순위 낮음)
    for (const qna of this.qnaData) {
        for (const keyword of qna.keywords) {
            if (lowerQuestion.includes(keyword.toLowerCase())) {
                return qna.answer;
            }
        }
    }

    // 3. 답변 못 찾음
    return "죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다...";
}
```

### localStorage 래핑

```javascript
// 자동 백업을 위한 setItem 오버라이드
const originalSetItem = Storage.prototype.setItem;
Storage.prototype.setItem = function(key, value) {
    originalSetItem.call(this, key, value);
    
    // 백업 대상 키인 경우 자동 백업
    if (storageManager && storageManager.storageKeys.includes(key)) {
        setTimeout(() => storageManager.createBackup(), 100);
    }
};
```

### IndexedDB 구조

```javascript
Database: CASHiQBackup
  ├─ ObjectStore: backups
  │   └─ Record: { id: 'latest', backup: {...}, timestamp: '...' }
```

## 🎨 UI/UX 특징

### 챗봇 UI
- **그라데이션**: Purple (#667eea) → Violet (#764ba2)
- **애니메이션**: Pulse, Bounce, Slide-in
- **반응형**: PC/모바일 최적화
- **다크모드**: 자동 감지 및 적용
- **접근성**: 키보드 네비게이션 지원

### 관리자 UI
- **색상 코드**:
  - 챗봇: 보라색 (Purple)
  - 공지: 파란색 (Blue)
  - 배너: 초록색 (Green)
  - 팝업: 오렌지색 (Orange)
- **상태 표시**: 현재 개수 / 최대 개수
- **색상 경고**: 70% 이상 노란색, 90% 이상 빨간색

## 📊 용량 관리

### localStorage 제한
- **브라우저별**: 5-10MB
- **권장 사용량**: 70% 이하
- **경고 수준**: 70-90%
- **위험 수준**: 90% 이상

### 최적화 팁
1. **이미지**: 압축 후 업로드 (관리자 배너에서 자동 압축)
2. **동영상**: YouTube URL 사용 (파일 업로드 대신)
3. **정기 정리**: 오래된 공지/배너 삭제
4. **백업**: 정기적으로 내보내기 후 로컬 저장

## 🐛 문제 해결

### 챗봇이 응답하지 않을 때
```
1. 브라우저 콘솔 확인 (F12)
2. chatbot 객체 존재 확인: console.log(chatbot)
3. Q&A 데이터 확인: console.log(chatbot.qnaData)
4. localStorage 확인: console.log(localStorage.getItem('chatbotQnA'))
5. 페이지 새로고침 (Ctrl+F5)
```

### 데이터가 사라졌을 때
```
1. 브라우저 콘솔에서 복원 시도:
   storageManager.restoreFromBackup()
2. sessionStorage 확인:
   console.log(sessionStorage.getItem('cashiq_backup'))
3. IndexedDB 확인:
   - F12 → Application → IndexedDB → CASHiQBackup
4. 수동 백업 파일이 있다면 가져오기
```

### 챗봇 버튼이 안 보일 때
```
1. CSS 파일 로드 확인:
   - F12 → Network → chatbot.css 200 OK 확인
2. JavaScript 오류 확인:
   - F12 → Console → 빨간색 에러 메시지 확인
3. 스크립트 로드 확인:
   - View Source → chatbot.js 포함 여부 확인
4. 캐시 삭제 후 재시도 (Ctrl+Shift+R)
```

## 🚀 향후 개선 계획

### 챗봇 고도화
- [ ] AI 자연어 처리 (GPT API 연동)
- [ ] 다국어 지원 (영어, 중국어, 일본어)
- [ ] 음성 인식/합성
- [ ] 감정 분석
- [ ] 대화 학습 기능

### 데이터 관리
- [ ] 클라우드 동기화 (Firebase, AWS)
- [ ] 자동 백업 스케줄러
- [ ] 버전 관리 시스템
- [ ] 충돌 해결 알고리즘
- [ ] 데이터 압축

### 분석 기능
- [ ] 챗봇 사용 통계
- [ ] 인기 질문 TOP 10
- [ ] 답변 만족도 조사
- [ ] 사용자 행동 분석
- [ ] A/B 테스트

## 📞 지원

### 개발자 문의
- **Email**: dev@cashiq.org
- **GitHub**: https://github.com/langsb16-collab/care-day
- **Issues**: GitHub Issues 페이지 이용

### 사용자 문의
- **Email**: support@cashiq.org
- **전화**: 평일 09:00-18:00
- **1:1 문의**: https://cashiq.org/contact

## 📝 변경 이력

### 2025-11-17
- ✅ 자동응답 챗봇 시스템 구축
- ✅ 관리자 Q&A 관리 기능 추가
- ✅ 3중 백업 시스템 구현
- ✅ 27개 페이지에 챗봇 배포
- ✅ 데이터 영구 보존 강화

---

**배포 완료**: 2025-11-17  
**버전**: v2.0.0  
**개발자**: GenSpark AI Developer  
**상태**: ✅ Production Ready
