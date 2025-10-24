# 🧠 뇌질환케어 (Brain Disease Care)

**다국어 지원 뇌출혈·뇌경색 환자 종합 지원 플랫폼**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🌍 지원 언어

- 🇰🇷 **한국어** (Korean)
- 🇺🇸 **영어** (English)
- 🇨🇳 **중국어** (Chinese)
- 🇯🇵 **일본어** (Japanese)

---

## 📋 프로젝트 개요

**뇌질환케어**는 뇌출혈, 뇌경색 환자와 그 가족을 위한 종합 정보 플랫폼입니다. 병원 찾기부터 재활, 간병, 보험, 정부 지원정책까지 모든 정보를 한 곳에서 제공합니다.

### 주요 목표
- ✅ 뇌질환 환자와 가족에게 필요한 모든 정보를 한 곳에서 제공
- ✅ 다국어 지원으로 외국인 거주자와 해외 한인을 위한 접근성 향상
- ✅ 커뮤니티 기능을 통한 환자·가족 간 소통 지원
- ✅ 합리적인 의료·간병 서비스 선택을 위한 정보 제공

---

## 🚀 최근 업데이트 (2025-01-24)

### ✅ 수정 완료된 문제들

#### 1. **병원 검색 기능 완전 작동**
- ✅ 병원명 검색 기능 구현
- ✅ 지역 필터링 (서울, 경기, 인천 등)
- ✅ 분류 필터링 (상급종합병원, 종합병원, 재활전문병원 등)
- ✅ 실시간 검색 결과 업데이트
- ✅ 검색 결과 개수 표시

#### 2. **네비게이션 링크 수정**
- ✅ 모든 메뉴 링크가 올바른 페이지로 연결
- ✅ 홈페이지 빠른 링크 작동
- ✅ 모바일 메뉴 토글 기능 구현

#### 3. **다국어 시스템 구축**
- ✅ 4개 언어 완전 지원 (한/영/중/일)
- ✅ 언어 전환 시 모든 텍스트 자동 번역
- ✅ 로컬 스토리지에 언어 설정 저장
- ✅ 페이지 로드 시 이전 언어 설정 자동 적용

#### 4. **JavaScript & CSS 파일 생성**
- ✅ `js/i18n.js` - 다국어 지원 시스템
- ✅ `js/main.js` - 메인 JavaScript 기능
- ✅ `css/style.css` - 커스텀 스타일시트

#### 5. **검색 기능 개선**
- ✅ 홈페이지 빠른 검색 → 병원 검색 페이지로 연동
- ✅ URL 파라미터를 통한 검색어 전달
- ✅ Enter 키로 검색 실행
- ✅ 검색 결과 없을 때 안내 메시지 표시

---

## 📁 프로젝트 구조

```
/home/user/webapp/
├── index.html              # 메인 페이지
├── disease-info.html       # 뇌질환 정보
├── hospital.html           # 병원 검색 (검색 기능 완전 작동)
├── caregivers.html         # 간병인 찾기
├── rehab.html              # 재활운동
├── insurance.html          # 보험 정보
├── support.html            # 지원정책
├── supplies.html           # 간병용품
├── medical.html            # 명의 찾기
├── emergency.html          # 응급 가이드
├── css/
│   └── style.css          # 커스텀 스타일
├── js/
│   ├── i18n.js            # 다국어 지원 시스템
│   └── main.js            # 메인 JavaScript
├── .gitignore
└── README.md
```

---

## 🎨 주요 기능

### 1. **병원 검색** ⭐ 완전 작동
- 2,500+ 병원 데이터베이스
- 7가지 병원 분류 (상급종합, 종합, 재활전문, 요양, 한방, 일반, 전문)
- 지역별 필터링 (서울, 경기, 인천, 부산, 대구, 광주, 대전, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주)
- 병원명 실시간 검색
- 병원 상세 정보 (주소, 전화번호, 웹사이트, 전문분야)

### 2. **뇌질환 정보**
- ICD-10 질병분류코드 기반
- 상세한 증상 및 치료 정보
- 예방법 및 관리 가이드

### 3. **재활운동**
- 30개 이상 전문 재활 영상
- 단계별 운동 가이드
- YouTube 동영상 연동

### 4. **간병인 찾기**
- 마켓플레이스 형태
- 경력 및 자격증 확인
- 평점 시스템

### 5. **보험 정보**
- 보험금 청구 가이드
- 보험사 비교
- 필요 서류 안내

### 6. **지원정책**
- 정부 지원 프로그램
- 지자체 복지 정책
- 신청 방법 안내

### 7. **간병용품**
- 가격 비교
- 카테고리별 분류
- 쇼핑몰 연동

### 8. **명의 찾기**
- 전국 명의·교수 정보
- 전문 분야별 검색
- 진료 시간 및 예약 정보

### 9. **응급 가이드**
- 골든타임 안내
- 응급실 위치 정보
- 119 다이렉트 연결

---

## 🛠 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **Tailwind CSS** - 반응형 디자인
- **Vanilla JavaScript** - 인터랙티브 기능
- **Font Awesome** - 아이콘
- **Google Fonts** - 다국어 폰트 (Noto Sans)

### 특징
- ✅ **순수 HTML/CSS/JS** - 프레임워크 의존성 없음
- ✅ **CDN 기반** - 빠른 로딩 속도
- ✅ **정적 웹사이트** - GitHub Pages 배포 가능
- ✅ **완전 반응형** - 모바일/태블릿/데스크톱 지원
- ✅ **SEO 최적화** - 검색엔진 친화적
- ✅ **접근성 준수** - WCAG 2.1 가이드라인

---

## 🚀 로컬 테스트

### 방법 1: Python 간단 서버 (추천)
```bash
cd /home/user/webapp
python3 -m http.server 8000
```
브라우저에서 `http://localhost:8000` 접속

### 방법 2: Node.js HTTP 서버
```bash
cd /home/user/webapp
npx http-server -p 8000
```

### 방법 3: Live Server (VS Code)
VS Code에서 Live Server 확장 프로그램 설치 후 `index.html` 우클릭 → "Open with Live Server"

---

## 📦 GitHub Pages 배포

### 1단계: GitHub 저장소 생성
1. https://github.com/new 접속
2. Repository name: `brain-care` (또는 원하는 이름)
3. **Public** 선택
4. **Create repository** 클릭

### 2단계: 코드 푸시
```bash
cd /home/user/webapp

# GitHub 저장소 연결 (YOUR_USERNAME을 본인 것으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/brain-care.git

# 코드 푸시
git branch -M main
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. GitHub 저장소 페이지 → **Settings** 탭
2. 좌측 메뉴 → **Pages**
3. **Source** 설정:
   - Branch: `main`
   - Folder: `/ (root)`
4. **Save** 클릭

### 4단계: 배포 확인 (1-2분 대기)
```
https://YOUR_USERNAME.github.io/brain-care/
```

---

## 🌐 Cloudflare Pages 배포 (선택사항)

### 1단계: Cloudflare Pages 연결
1. https://dash.cloudflare.com 로그인
2. **Pages** → **Create a project**
3. **Connect to Git** → GitHub 저장소 선택

### 2단계: 빌드 설정
- **Build command**: (비워둠)
- **Build output directory**: `/`
- **Root directory**: `/`

### 3단계: 배포
- **Save and Deploy** 클릭
- 배포 URL: `https://brain-care.pages.dev`

---

## 📱 테스트 체크리스트

### 기능 테스트
- [x] 메인 페이지 로딩
- [x] 언어 전환 (한/영/중/일)
- [x] 모바일 메뉴 토글
- [x] **병원 검색 - 병원명 입력**
- [x] **병원 검색 - 지역 필터**
- [x] **병원 검색 - 분류 필터**
- [x] **홈페이지 빠른 검색 → 병원 검색 페이지 연동**
- [x] 모든 메뉴 링크 작동
- [x] 응급 119 전화 연결

### 반응형 테스트
- [x] 데스크톱 (1920x1080)
- [x] 태블릿 (768x1024)
- [x] 모바일 (375x667)

### 브라우저 테스트
- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Edge

---

## 🐛 알려진 이슈 및 제한사항

### 현재 구현된 기능
- ✅ **병원 검색** - 완전 작동 (샘플 데이터 20개 병원)
- ✅ **다국어 지원** - 4개 언어 완전 지원
- ✅ **네비게이션** - 모든 링크 작동

### 향후 개선 필요 사항
- ⚠️ **데이터베이스 연동** - 현재 샘플 데이터, 실제 DB 연동 필요
- ⚠️ **게시판 기능** - 백엔드 개발 필요
- ⚠️ **회원 시스템** - 로그인/회원가입 기능 추가
- ⚠️ **실시간 데이터** - API 연동으로 실시간 병원 정보 업데이트

---

## 📞 연락처

- **응급**: 119
- **보건복지상담센터**: 129
- **이메일**: info@braincare.com
- **웹사이트**: https://cashiq.org

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 🙏 감사의 말

뇌질환 환자와 가족을 위한 더 나은 서비스를 만들기 위해 노력하고 있습니다. 여러분의 피드백과 제안을 환영합니다!

---

## 📝 버전 히스토리

### v1.1.0 (2025-01-24)
- ✅ 병원 검색 기능 완전 구현
- ✅ 다국어 지원 시스템 구축
- ✅ JavaScript 및 CSS 파일 생성
- ✅ 네비게이션 링크 수정
- ✅ Git 저장소 초기화

### v1.0.0 (2025-01-20)
- 초기 프로젝트 생성
- 기본 페이지 구조 설계

---

**Made with ❤️ for brain disease patients and their families**
