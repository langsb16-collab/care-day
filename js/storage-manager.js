/**
 * CASHiQ localStorage 영구 보존 관리자
 * 브라우저 데이터 삭제에도 데이터를 보존하기 위한 백업 시스템
 */

class StorageManager {
    constructor() {
        this.storageKeys = [
            'notices',
            'banners',
            'popups',
            'chatbotQnA',
            'siteSettings',
            'paymentSettings',
            'membershipSettings',
            'securitySettings',
            'members'
        ];
        
        this.init();
    }

    init() {
        // 페이지 로드 시 백업 복원 시도
        this.restoreFromBackup();
        
        // 데이터 변경 감지 (storage 이벤트)
        window.addEventListener('storage', (e) => {
            if (this.storageKeys.includes(e.key)) {
                console.log('📦 Storage changed:', e.key);
                this.createBackup();
            }
        });

        // 주기적 백업 (5분마다)
        setInterval(() => {
            this.createBackup();
        }, 5 * 60 * 1000);

        // 페이지 언로드 전 백업
        window.addEventListener('beforeunload', () => {
            this.createBackup();
        });

        console.log('✅ StorageManager initialized');
    }

    // localStorage 데이터 백업 생성
    createBackup() {
        try {
            const backup = {};
            let hasData = false;

            for (const key of this.storageKeys) {
                const value = localStorage.getItem(key);
                if (value) {
                    backup[key] = value;
                    hasData = true;
                }
            }

            if (hasData) {
                // 백업 데이터를 sessionStorage에도 저장 (이중 백업)
                sessionStorage.setItem('cashiq_backup', JSON.stringify(backup));
                
                // 백업 시간 기록
                sessionStorage.setItem('cashiq_backup_time', new Date().toISOString());
                
                // IndexedDB에도 저장 (더 영구적)
                this.saveToIndexedDB(backup);
                
                console.log('💾 Backup created:', Object.keys(backup).length, 'keys');
            }
        } catch (error) {
            console.error('Backup creation error:', error);
        }
    }

    // 백업 복원
    restoreFromBackup() {
        try {
            // 1단계: sessionStorage에서 복원 시도
            const sessionBackup = sessionStorage.getItem('cashiq_backup');
            if (sessionBackup) {
                const backup = JSON.parse(sessionBackup);
                this.applyBackup(backup, 'sessionStorage');
            }

            // 2단계: IndexedDB에서 복원 시도
            this.restoreFromIndexedDB();
        } catch (error) {
            console.error('Backup restoration error:', error);
        }
    }

    // 백업 적용
    applyBackup(backup, source) {
        let restoredCount = 0;

        for (const key of this.storageKeys) {
            // localStorage에 데이터가 없고, 백업에 데이터가 있으면 복원
            if (!localStorage.getItem(key) && backup[key]) {
                try {
                    localStorage.setItem(key, backup[key]);
                    restoredCount++;
                } catch (error) {
                    console.error(`Failed to restore ${key}:`, error);
                }
            }
        }

        if (restoredCount > 0) {
            console.log(`✅ Restored ${restoredCount} items from ${source}`);
        }
    }

    // IndexedDB에 저장
    async saveToIndexedDB(backup) {
        try {
            const request = indexedDB.open('CASHiQBackup', 1);

            request.onerror = () => {
                console.error('IndexedDB open error');
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('backups')) {
                    db.createObjectStore('backups', { keyPath: 'id' });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['backups'], 'readwrite');
                const store = transaction.objectStore('backups');

                const data = {
                    id: 'latest',
                    backup: backup,
                    timestamp: new Date().toISOString()
                };

                store.put(data);
                console.log('💾 Saved to IndexedDB');
            };
        } catch (error) {
            console.error('IndexedDB save error:', error);
        }
    }

    // IndexedDB에서 복원
    async restoreFromIndexedDB() {
        try {
            const request = indexedDB.open('CASHiQBackup', 1);

            request.onerror = () => {
                console.error('IndexedDB open error for restore');
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                
                if (!db.objectStoreNames.contains('backups')) {
                    return;
                }

                const transaction = db.transaction(['backups'], 'readonly');
                const store = transaction.objectStore('backups');
                const getRequest = store.get('latest');

                getRequest.onsuccess = () => {
                    const result = getRequest.result;
                    if (result && result.backup) {
                        this.applyBackup(result.backup, 'IndexedDB');
                    }
                };
            };
        } catch (error) {
            console.error('IndexedDB restore error:', error);
        }
    }

    // 전체 데이터 내보내기 (JSON 파일)
    exportAllData() {
        const allData = {};

        for (const key of this.storageKeys) {
            const value = localStorage.getItem(key);
            if (value) {
                allData[key] = value;
            }
        }

        const dataStr = JSON.stringify(allData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cashiq-full-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        console.log('📥 Exported all data to JSON file');
        alert('✅ 모든 데이터가 JSON 파일로 내보내기되었습니다.');
    }

    // JSON 파일에서 데이터 가져오기
    importData(file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                let importedCount = 0;

                for (const key in data) {
                    if (this.storageKeys.includes(key)) {
                        localStorage.setItem(key, data[key]);
                        importedCount++;
                    }
                }

                console.log(`✅ Imported ${importedCount} items`);
                alert(`✅ ${importedCount}개 항목을 가져왔습니다.\n\n페이지를 새로고침합니다.`);
                
                // 백업 생성 후 새로고침
                this.createBackup();
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } catch (error) {
                console.error('Import error:', error);
                alert('❌ 파일 가져오기 실패\n\n오류: ' + error.message);
            }
        };

        reader.readAsText(file);
    }

    // 데이터 통계
    getStats() {
        const stats = {
            total: 0,
            size: 0,
            items: {}
        };

        for (const key of this.storageKeys) {
            const value = localStorage.getItem(key);
            if (value) {
                const size = new Blob([value]).size;
                stats.items[key] = {
                    size: size,
                    sizeFormatted: this.formatBytes(size)
                };
                stats.size += size;
                stats.total++;
            }
        }

        stats.sizeFormatted = this.formatBytes(stats.size);
        stats.percentUsed = ((stats.size / (5 * 1024 * 1024)) * 100).toFixed(2);

        return stats;
    }

    // 바이트 포맷
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    }

    // 모든 데이터 삭제 (주의!)
    clearAllData() {
        if (!confirm('⚠️ 모든 데이터를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다!')) {
            return;
        }

        if (!confirm('⚠️ 정말로 삭제하시겠습니까?\n\n마지막 확인입니다.')) {
            return;
        }

        for (const key of this.storageKeys) {
            localStorage.removeItem(key);
        }

        sessionStorage.clear();
        
        alert('✅ 모든 데이터가 삭제되었습니다.');
        window.location.reload();
    }
}

// 전역 인스턴스 생성
let storageManager;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    storageManager = new StorageManager();
    
    // 전역 함수로 노출
    window.exportCASHiQData = () => storageManager.exportAllData();
    window.importCASHiQData = (file) => storageManager.importData(file);
    window.getCASHiQStats = () => storageManager.getStats();
    window.clearCASHiQData = () => storageManager.clearAllData();
    
    console.log('✅ CASHiQ Storage Manager ready');
});

// 데이터 변경 감지를 위한 localStorage 래퍼
const originalSetItem = Storage.prototype.setItem;
Storage.prototype.setItem = function(key, value) {
    originalSetItem.call(this, key, value);
    
    // 백업 대상 키인 경우 자동 백업
    if (storageManager && storageManager.storageKeys.includes(key)) {
        setTimeout(() => storageManager.createBackup(), 100);
    }
};
