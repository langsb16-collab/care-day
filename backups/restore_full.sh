#!/bin/bash
# 완전 복원 스크립트 - Git 히스토리 포함 전체 복원

set -e  # 에러 발생 시 중단

echo "🔄 웹앱 완전 복원 시작 (.git 포함)..."
echo ""

BACKUP_FILE="webapp_full_with_git_2025-12-16.tar.gz"
BACKUP_DIR="/home/user/webapp/backups"
TARGET_DIR="/home/user"

# 백업 파일 존재 확인
if [ ! -f "$BACKUP_DIR/$BACKUP_FILE" ]; then
    echo "❌ 백업 파일을 찾을 수 없습니다: $BACKUP_FILE"
    exit 1
fi

echo "📦 백업 파일: $BACKUP_FILE"
echo "📁 복원 위치: $TARGET_DIR/webapp/"
echo "🔧 포함 내용: 소스 코드 + Git 저장소"
echo ""

# 사용자 확인
read -p "⚠️  기존 webapp 디렉토리가 완전히 대체됩니다. 계속하시겠습니까? (y/N): " confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ 복원이 취소되었습니다."
    exit 0
fi

echo ""
echo "🔄 복원 중..."

# 기존 webapp 디렉토리 백업
if [ -d "$TARGET_DIR/webapp" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    echo "📦 기존 webapp을 webapp_old_$TIMESTAMP 로 백업합니다..."
    mv "$TARGET_DIR/webapp" "$TARGET_DIR/webapp_old_$TIMESTAMP"
    echo "   백업 위치: $TARGET_DIR/webapp_old_$TIMESTAMP"
fi

# 백업에서 복원
cd "$BACKUP_DIR"
tar -xzf "$BACKUP_FILE" -C "$TARGET_DIR"

echo ""
echo "✅ 복원 완료!"
echo ""

# Git 상태 확인
cd "$TARGET_DIR/webapp"
echo "📊 Git 상태:"
git status
echo ""
echo "📜 최근 커밋:"
git log --oneline -5
echo ""

echo "🎯 복원된 위치:"
echo "   $TARGET_DIR/webapp/"
echo ""
echo "🔧 다음 단계:"
echo "   cd /home/user/webapp"
echo "   git remote -v  # 원격 저장소 확인"
echo "   git branch     # 브랜치 확인"
echo ""
