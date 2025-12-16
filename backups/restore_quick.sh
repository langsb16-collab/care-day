#!/bin/bash
# 빠른 복원 스크립트 - 소스 코드만 복원 (.git 제외)

set -e  # 에러 발생 시 중단

echo "🔄 웹앱 빠른 복원 시작..."
echo ""

BACKUP_FILE="webapp_backup_2025-12-16_01-49-51.tar.gz"
BACKUP_DIR="/home/user/webapp/backups"
TARGET_DIR="/home/user"

# 백업 파일 존재 확인
if [ ! -f "$BACKUP_DIR/$BACKUP_FILE" ]; then
    echo "❌ 백업 파일을 찾을 수 없습니다: $BACKUP_FILE"
    exit 1
fi

echo "📦 백업 파일: $BACKUP_FILE"
echo "📁 복원 위치: $TARGET_DIR/webapp/"
echo ""

# 사용자 확인
read -p "⚠️  기존 파일을 덮어쓰게 됩니다. 계속하시겠습니까? (y/N): " confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ 복원이 취소되었습니다."
    exit 0
fi

echo ""
echo "🔄 복원 중..."

# 기존 webapp 디렉토리 백업 (선택사항)
if [ -d "$TARGET_DIR/webapp" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    echo "📦 기존 webapp 디렉토리를 webapp_backup_$TIMESTAMP 로 백업합니다..."
    mv "$TARGET_DIR/webapp" "$TARGET_DIR/webapp_backup_$TIMESTAMP"
fi

# 백업에서 복원
cd "$BACKUP_DIR"
tar -xzf "$BACKUP_FILE" -C "$TARGET_DIR"

echo ""
echo "✅ 복원 완료!"
echo ""
echo "📊 복원된 파일:"
ls -lh "$TARGET_DIR/webapp/" | head -15
echo ""
echo "🎯 다음 단계:"
echo "   cd /home/user/webapp"
echo "   git status  # Git 상태 확인"
echo ""
