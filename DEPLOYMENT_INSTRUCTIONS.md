# 🚀 뇌질환케어 배포 가이드

## ✅ 현재 상태

- ✅ 모든 파일이 `/home/user/webapp/`에 준비됨
- ✅ Git 저장소 초기화 완료
- ✅ 모든 코드 커밋 완료 (3개 커밋)
- ✅ 병원 검색 기능 완전 작동
- ✅ 다국어 지원 시스템 구축
- ✅ 반응형 디자인 완벽 적용

---

## 📦 다운로드 파일

### 압축 파일 위치
```
/home/user/brain-care-fixed.tar.gz (168KB)
```

### 압축 해제 방법
```bash
tar -xzf brain-care-fixed.tar.gz
cd webapp
```

---

## 🌐 GitHub Pages 배포 (추천)

### 1단계: GitHub 저장소 생성

1. https://github.com/new 접속
2. **Repository name** 입력: `brain-care` (또는 원하는 이름)
3. **Public** 선택 ✅
4. ❌ "Add a README file" 체크 해제 (이미 있음)
5. **Create repository** 클릭

### 2단계: 로컬에서 GitHub 연결

⚠️ **중요: YOUR_USERNAME을 실제 GitHub 사용자명으로 변경하세요!**

```bash
cd /home/user/webapp

# GitHub 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/brain-care.git

# 브랜치 이름을 main으로 변경 (이미 main이면 생략 가능)
git branch -M main

# 코드 푸시
git push -u origin main
```

### 인증 방법

**방법 1: Personal Access Token (추천)**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **Generate new token (classic)** 클릭
3. Note: `brain-care-deployment`
4. Expiration: `90 days` (또는 원하는 기간)
5. **repo** 체크박스 선택 ✅
6. **Generate token** 클릭
7. 생성된 토큰 복사 (⚠️ 한 번만 표시됨!)
8. Git 푸시 시 비밀번호 대신 토큰 입력

**방법 2: SSH Key**
```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your_email@example.com"

# 공개키 복사
cat ~/.ssh/id_ed25519.pub

# GitHub → Settings → SSH and GPG keys → New SSH key
# 복사한 공개키 붙여넣기

# SSH URL로 remote 변경
git remote set-url origin git@github.com:YOUR_USERNAME/brain-care.git
git push -u origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 좌측 메뉴에서 **Pages** 클릭
4. **Source** 설정:
   - Branch: `main` ✅
   - Folder: `/ (root)` ✅
5. **Save** 클릭

### 4단계: 배포 확인 (1-2분 대기)

배포 URL:
```
https://YOUR_USERNAME.github.io/brain-care/
```

**확인 방법:**
1. Settings → Pages 페이지 상단에 URL 표시
2. Actions 탭에서 배포 진행 상황 확인
3. 초록색 체크 표시 나타나면 배포 완료 ✅

---

## ☁️ Cloudflare Pages 배포 (선택사항)

### 장점
- 🚀 더 빠른 글로벌 CDN
- 🌍 무료 무제한 트래픽
- 🔒 자동 HTTPS
- 📊 실시간 분석

### 1단계: Cloudflare 계정 생성
1. https://dash.cloudflare.com/sign-up 접속
2. 이메일로 계정 생성 (무료)

### 2단계: GitHub 연동
1. Cloudflare Dashboard → **Pages** → **Create a project**
2. **Connect to Git** 클릭
3. **GitHub** 선택
4. Cloudflare에 GitHub 액세스 권한 부여
5. 저장소 선택: `YOUR_USERNAME/brain-care`

### 3단계: 빌드 설정
```
Framework preset: None
Build command: (비워둠)
Build output directory: /
Root directory: /
```

### 4단계: 배포
- **Save and Deploy** 클릭
- 배포 완료 대기 (약 1-2분)

배포 URL:
```
https://brain-care-xxx.pages.dev
```

### 5단계: 커스텀 도메인 연결 (선택사항)
1. Pages 프로젝트 → **Custom domains**
2. **Set up a custom domain** 클릭
3. 도메인 입력 (예: braincare.com)
4. DNS 레코드 추가 지침 따르기

---

## 🖥️ 로컬 테스트 방법

### 방법 1: Python HTTP 서버 (가장 간단)
```bash
cd /home/user/webapp
python3 -m http.server 8000
```
브라우저: `http://localhost:8000`

### 방법 2: PHP 내장 서버
```bash
cd /home/user/webapp
php -S localhost:8000
```
브라우저: `http://localhost:8000`

### 방법 3: Node.js HTTP 서버
```bash
cd /home/user/webapp
npx http-server -p 8000
```
브라우저: `http://localhost:8000`

### 방법 4: VS Code Live Server
1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → **Open with Live Server**

---

## 🔗 배포 후 체크리스트

### 기능 테스트
- [ ] 메인 페이지 로딩 확인
- [ ] 모든 메뉴 링크 작동 확인
- [ ] 병원 검색 기능 테스트
  - [ ] 병원명 검색
  - [ ] 지역 필터
  - [ ] 분류 필터
- [ ] 언어 전환 테스트 (한/영/중/일)
- [ ] 모바일 메뉴 토글 확인
- [ ] 홈페이지 빠른 검색 → 병원 검색 페이지 연동 확인

### 반응형 테스트
- [ ] 데스크톱 (1920x1080)
- [ ] 태블릿 (768x1024)
- [ ] 모바일 (375x667, 414x896)

### 브라우저 테스트
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] 모바일 브라우저 (iOS Safari, Android Chrome)

---

## 🔄 업데이트 방법

### 로컬에서 수정 후 배포
```bash
cd /home/user/webapp

# 파일 수정 후

# 변경사항 확인
git status

# 파일 추가
git add .

# 커밋
git commit -m "Update: 수정 내용 설명"

# GitHub에 푸시
git push origin main
```

### GitHub Pages 자동 재배포
- GitHub에 푸시하면 자동으로 재배포됨 (1-2분 소요)

### Cloudflare Pages 자동 재배포
- GitHub에 푸시하면 자동으로 재배포됨 (1-2분 소요)
- Cloudflare Dashboard에서 배포 진행 상황 확인 가능

---

## 🐛 문제 해결

### 문제 1: git push 시 인증 오류
```
remote: Support for password authentication was removed...
```

**해결 방법:**
- Personal Access Token 사용 (위의 "인증 방법" 참조)
- 또는 SSH Key 사용

### 문제 2: GitHub Pages에서 404 오류
```
404 - File not found
```

**해결 방법:**
1. Settings → Pages에서 Branch가 `main`으로 설정되었는지 확인
2. Folder가 `/ (root)`로 설정되었는지 확인
3. Actions 탭에서 배포 실패 여부 확인
4. 1-2분 대기 후 다시 시도

### 문제 3: CSS/JS 파일이 로드되지 않음
**원인:** 상대 경로 문제

**해결 방법:**
```html
<!-- 절대 경로 사용 -->
<link rel="stylesheet" href="/css/style.css">
<script src="/js/main.js"></script>

<!-- 또는 -->
<link rel="stylesheet" href="./css/style.css">
<script src="./js/main.js"></script>
```

### 문제 4: 언어 전환이 작동하지 않음
**원인:** `js/i18n.js` 파일 경로 오류

**확인 방법:**
1. 브라우저 개발자 도구 (F12) → Console 탭
2. 에러 메시지 확인
3. Network 탭에서 `i18n.js` 로드 실패 여부 확인

---

## 📊 프로젝트 파일 목록

```
webapp/
├── index.html              # 메인 페이지
├── hospital.html           # 병원 검색 (검색 기능 완전 작동)
├── disease-info.html       # 뇌질환 정보
├── caregivers.html         # 간병인 찾기
├── rehab.html              # 재활운동
├── insurance.html          # 보험 정보
├── support.html            # 지원정책
├── supplies.html           # 간병용품
├── medical.html            # 명의 찾기
├── emergency.html          # 응급 가이드
├── css/
│   └── style.css          # 커스텀 스타일 (새로 생성)
├── js/
│   ├── i18n.js            # 다국어 지원 시스템 (새로 생성)
│   └── main.js            # 메인 JavaScript (새로 생성)
├── .gitignore             # Git 무시 파일
├── README.md              # 프로젝트 문서
├── FIXES_SUMMARY.md       # 수정 사항 요약
└── DEPLOYMENT_INSTRUCTIONS.md  # 이 파일
```

**총 파일 수:** 16개  
**총 용량:** 약 350KB

---

## 📞 지원 연락처

### 기술 지원
- **GitHub Issues**: 버그 리포트 및 기능 요청
- **이메일**: info@braincare.com

### 응급 연락처
- **응급**: 119
- **보건복지상담센터**: 129

---

## 🎉 배포 완료!

축하합니다! 🎊 이제 웹사이트를 전 세계에 공개할 준비가 되었습니다.

### 다음 단계
1. GitHub에 코드 푸시
2. GitHub Pages 또는 Cloudflare Pages 활성화
3. 배포 URL 확인
4. 기능 테스트
5. SNS/커뮤니티에 공유

### 추천 다음 작업
- 🔍 Google Search Console에 사이트 등록
- 📊 Google Analytics 설치
- 🌐 네이버 검색 등록
- 📱 PWA (Progressive Web App) 추가
- 🔒 보안 강화 (CSP 헤더 등)

---

**배포 성공을 기원합니다!** 🚀🧠

---

마지막 업데이트: 2025-01-24  
작성자: Brain Care Development Team
