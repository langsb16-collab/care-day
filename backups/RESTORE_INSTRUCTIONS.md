# 🔄 웹앱 백업 복원 가이드

백업 날짜: **2025-12-16 01:49:51 UTC**

## 📦 백업 파일 목록

### 1. `webapp_backup_2025-12-16_01-49-51.tar.gz` (660KB)
- **내용**: 소스 코드만 (.git 제외)
- **용도**: 빠른 복원, 소스 코드만 필요한 경우
- **포함**: HTML, CSS, JS, 이미지, 데이터 파일

### 2. `webapp_full_with_git_2025-12-16.tar.gz` (12MB)
- **내용**: 전체 프로젝트 (.git 포함)
- **용도**: 완전한 복원, Git 히스토리 필요한 경우
- **포함**: 모든 파일 + Git 저장소

---

## 🚀 복원 방법

### 방법 1: 소스 코드만 복원 (빠름)

```bash
# 1. 백업 디렉토리로 이동
cd /home/user/webapp/backups

# 2. 압축 해제
tar -xzf webapp_backup_2025-12-16_01-49-51.tar.gz -C /home/user/

# 3. 완료! webapp 디렉토리가 복원됩니다
```

### 방법 2: Git 히스토리 포함 전체 복원

```bash
# 1. 기존 webapp 디렉토리 백업 (선택사항)
cd /home/user
mv webapp webapp_old_$(date +%Y%m%d_%H%M%S)

# 2. 백업에서 복원
cd /home/user/webapp/backups
tar -xzf webapp_full_with_git_2025-12-16.tar.gz -C /home/user/

# 3. Git 확인
cd /home/user/webapp
git status
git log --oneline -5

# 4. 완료!
```

### 방법 3: 특정 파일만 복원

```bash
# 예: auth/signup.html 파일만 복원
cd /home/user/webapp/backups
tar -xzf webapp_backup_2025-12-16_01-49-51.tar.gz \
    webapp/auth/signup.html --strip-components=1

# 예: js 디렉토리만 복원
tar -xzf webapp_backup_2025-12-16_01-49-51.tar.gz \
    webapp/js/ --strip-components=1
```

---

## 🔍 백업 내용 확인

### 백업 파일 목록 보기
```bash
# 압축 파일 내용 확인 (압축 해제 없이)
tar -tzf webapp_backup_2025-12-16_01-49-51.tar.gz | head -20

# 또는 전체 보기
tar -tzf webapp_backup_2025-12-16_01-49-51.tar.gz | less
```

### 특정 파일 검색
```bash
# signup.html 파일 찾기
tar -tzf webapp_full_with_git_2025-12-16.tar.gz | grep signup.html

# i18n.js 파일 찾기
tar -tzf webapp_full_with_git_2025-12-16.tar.gz | grep i18n.js
```

---

## 📋 백업 시점의 주요 변경사항

### ✅ 최근 적용된 기능
1. **언어 전환 기능 수정**
   - switchLanguage 함수 에러 해결
   - i18n.js 버전: v=1763992450

2. **회원가입 버튼 표시 문제 해결**
   - 버튼이 항상 보이도록 CSS/JS 수정
   - ensureSubmitButtonVisible() 함수 추가

3. **플랜 표시 텍스트 변경**
   - "무료 회원" 텍스트 삭제
   - 스크롤 안내 텍스트로 변경
   - 가운데 정렬 적용

### 📝 Git 커밋 히스토리
```
792ba6e - Remove plan name display and center align signup instruction text
3a4ff80 - Update signup form text - change 'Selected Plan' to scroll instruction
759810b - Fix signup button visibility issue - ensure button always visible
7d63d9a - Fix language switching issues - resolve switchLanguage function errors
```

---

## ⚠️ 주의사항

1. **복원 전 확인**
   - 현재 작업 중인 파일이 있다면 먼저 백업하세요
   - Git 상태 확인: `git status`

2. **복원 후 확인**
   - 파일이 제대로 복원되었는지 확인
   - 웹사이트 동작 테스트
   - Git 로그 확인: `git log`

3. **배포 필요시**
   ```bash
   cd /home/user/webapp
   git add -A
   git commit -m "Restore from backup 2025-12-16"
   git push origin main
   ```

---

## 🆘 문제 해결

### Q1: "tar: Error is not recoverable" 에러
```bash
# 파일이 손상되었을 수 있습니다. 백업 파일 무결성 확인:
gzip -t webapp_backup_2025-12-16_01-49-51.tar.gz
```

### Q2: 복원 후 파일이 보이지 않음
```bash
# 압축 해제 위치 확인
cd /home/user
ls -la webapp/
```

### Q3: Git 히스토리가 보이지 않음
```bash
# .git 디렉토리 확인
ls -la /home/user/webapp/.git

# .git이 없다면 전체 백업 파일 사용
tar -xzf webapp_full_with_git_2025-12-16.tar.gz -C /home/user/
```

---

## 📞 추가 도움

백업 복원 중 문제가 발생하면:
1. 이 파일을 참고하세요
2. Git 로그를 확인하세요: `git log --oneline`
3. 백업 파일 목록을 확인하세요: `tar -tzf [백업파일명]`

**백업 생성 시각**: 2025-12-16 01:49:51 UTC  
**백업 위치**: `/home/user/webapp/backups/`  
**프로젝트 URL**: https://cashiq.org
