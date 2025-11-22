// Authentication
function checkAuth() {
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!loggedIn) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Data
let payments = [];
let currentPaymentId = null;

// Initialize
if (checkAuth()) {
    loadPayments();
    setupDragAndDrop();
    setupFileInput();
    setInterval(checkNewPayments, 30000); // Check every 30 seconds
}

// Load payments
function loadPayments() {
    const saved = localStorage.getItem('payments');
    if (saved) {
        payments = JSON.parse(saved);
    } else {
        payments = generateSamplePayments();
        localStorage.setItem('payments', JSON.stringify(payments));
    }
    
    updateStats();
    renderPayments();
}

// Generate sample payments
function generateSamplePayments() {
    return [
        {
            id: 1,
            depositorName: '김철수',
            amount: 50000,
            transferDate: '2025-01-22 14:25',
            receiptFile: null,
            matched: false,
            confirmedBy: null,
            confirmedDate: null,
            status: 'pending',
            memo: ''
        },
        {
            id: 2,
            depositorName: '이영희',
            amount: 50000,
            transferDate: '2025-01-21 15:30',
            receiptFile: 'receipt_lee.jpg',
            matched: true,
            confirmedBy: '관리자',
            confirmedDate: '2025-01-21 15:45',
            status: 'confirmed',
            memo: '유료회원 ID #2와 매칭됨'
        },
        {
            id: 3,
            depositorName: '박민수',
            amount: 50000,
            transferDate: '2025-01-20 10:15',
            receiptFile: null,
            matched: false,
            confirmedBy: null,
            confirmedDate: null,
            status: 'unmatched',
            memo: '입금자명 불일치'
        }
    ];
}

// Update stats
function updateStats() {
    const total = payments.length;
    const pending = payments.filter(p => p.status === 'pending').length;
    const confirmed = payments.filter(p => p.status === 'confirmed').length;
    const unmatched = payments.filter(p => p.status === 'unmatched').length;

    document.getElementById('totalPayments').textContent = total;
    document.getElementById('pendingPayments').textContent = pending;
    document.getElementById('confirmedPayments').textContent = confirmed;
    document.getElementById('unmatchedPayments').textContent = unmatched;
}

// Render payments
function renderPayments() {
    const tbody = document.getElementById('paymentsTableBody');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    
    let filtered = payments;
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.depositorName.toLowerCase().includes(searchTerm) ||
            p.amount.toString().includes(searchTerm)
        );
    }
    
    // Status filter
    if (statusFilter !== 'all') {
        filtered = filtered.filter(p => p.status === statusFilter);
    }
    
    // Date filter
    if (dateFilter !== 'all') {
        const now = new Date();
        filtered = filtered.filter(p => {
            const pDate = new Date(p.transferDate);
            if (dateFilter === 'today') {
                return pDate.toDateString() === now.toDateString();
            } else if (dateFilter === 'week') {
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                return pDate >= weekAgo;
            } else if (dateFilter === 'month') {
                const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                return pDate >= monthAgo;
            }
            return true;
        });
    }
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="px-4 py-8 text-center text-gray-500">입금 내역이 없습니다.</td></tr>';
        return;
    }

    const statusColors = {
        'pending': 'bg-yellow-100 text-yellow-800',
        'confirmed': 'bg-green-100 text-green-800',
        'unmatched': 'bg-red-100 text-red-800'
    };
    
    const statusLabels = {
        'pending': '확인 대기',
        'confirmed': '확인 완료',
        'unmatched': '미매칭'
    };

    tbody.innerHTML = filtered.map(payment => `
        <tr class="hover:bg-gray-50 ${payment.status === 'pending' ? 'bg-yellow-50' : ''}">
            <td class="px-4 py-3 font-medium">${payment.depositorName}</td>
            <td class="px-4 py-3 font-semibold text-blue-600">${payment.amount.toLocaleString()}원</td>
            <td class="px-4 py-3 text-sm">${payment.transferDate}</td>
            <td class="px-4 py-3">
                ${payment.receiptFile ? '<i class="fas fa-file-image text-blue-600 text-lg"></i>' : '<span class="text-gray-400">-</span>'}
            </td>
            <td class="px-4 py-3">
                ${payment.matched ? 
                    '<span class="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800"><i class="fas fa-check mr-1"></i>매칭됨</span>' : 
                    '<span class="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800"><i class="fas fa-times mr-1"></i>미매칭</span>'
                }
            </td>
            <td class="px-4 py-3">
                <span class="px-3 py-1 text-xs rounded-full ${statusColors[payment.status]}">
                    ${statusLabels[payment.status]}
                </span>
            </td>
            <td class="px-4 py-3 text-sm">${payment.confirmedBy || '-'}</td>
            <td class="px-4 py-3 text-sm">${payment.confirmedDate || '-'}</td>
            <td class="px-4 py-3">
                <button onclick="viewPayment(${payment.id})" class="text-blue-600 hover:text-blue-800 mr-3" title="상세보기">
                    <i class="fas fa-eye"></i>
                </button>
                ${payment.status === 'pending' ? `
                    <button onclick="quickConfirm(${payment.id})" class="text-green-600 hover:text-green-800 mr-3" title="빠른확인">
                        <i class="fas fa-check-circle"></i>
                    </button>
                ` : ''}
                <button onclick="deletePayment(${payment.id})" class="text-red-600 hover:text-red-800" title="삭제">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Setup drag and drop
function setupDragAndDrop() {
    const uploadArea = document.getElementById('uploadArea');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.add('drag-over');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.remove('drag-over');
        }, false);
    });
    
    uploadArea.addEventListener('drop', handleDrop, false);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

// Setup file input
function setupFileInput() {
    document.getElementById('fileInput').addEventListener('change', function(e) {
        handleFiles(e.target.files);
    });
}

// Handle file upload
function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/') || file.type === 'application/pdf') {
            uploadFile(file);
        } else {
            alert(`${file.name}은(는) 지원하지 않는 파일 형식입니다.`);
        }
    });
}

function uploadFile(file) {
    // In real app, upload to server
    const reader = new FileReader();
    reader.onload = function(e) {
        const newPayment = {
            id: payments.length + 1,
            depositorName: '신규입금',
            amount: 50000,
            transferDate: new Date().toLocaleString('ko-KR'),
            receiptFile: file.name,
            matched: false,
            confirmedBy: null,
            confirmedDate: null,
            status: 'pending',
            memo: ''
        };
        
        payments.unshift(newPayment);
        localStorage.setItem('payments', JSON.stringify(payments));
        
        // Play notification sound
        playNotificationSound();
        
        updateStats();
        renderPayments();
        displayUploadedFile(file, e.target.result);
        
        alert(`${file.name}이(가) 업로드되었습니다.`);
    };
    reader.readAsDataURL(file);
}

function displayUploadedFile(file, dataUrl) {
    const container = document.getElementById('uploadedFiles');
    const fileCard = document.createElement('div');
    fileCard.className = 'border rounded-lg p-4 bg-white shadow-sm';
    
    if (file.type.startsWith('image/')) {
        fileCard.innerHTML = `
            <img src="${dataUrl}" class="w-full h-32 object-cover rounded mb-2">
            <p class="text-sm font-semibold truncate">${file.name}</p>
            <p class="text-xs text-gray-500">${(file.size / 1024).toFixed(1)} KB</p>
        `;
    } else {
        fileCard.innerHTML = `
            <div class="flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
                <i class="fas fa-file-pdf text-red-500 text-4xl"></i>
            </div>
            <p class="text-sm font-semibold truncate">${file.name}</p>
            <p class="text-xs text-gray-500">${(file.size / 1024).toFixed(1)} KB</p>
        `;
    }
    
    container.insertBefore(fileCard, container.firstChild);
}

// View payment details
function viewPayment(id) {
    const payment = payments.find(p => p.id === id);
    if (!payment) return;

    currentPaymentId = id;

    const statusColors = {
        'pending': 'bg-yellow-100 text-yellow-800',
        'confirmed': 'bg-green-100 text-green-800',
        'unmatched': 'bg-red-100 text-red-800'
    };
    
    const statusLabels = {
        'pending': '확인 대기',
        'confirmed': '확인 완료',
        'unmatched': '미매칭'
    };

    const details = document.getElementById('paymentDetails');
    details.innerHTML = `
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                <p class="text-sm text-gray-600">입금자명</p>
                <p class="font-semibold">${payment.depositorName}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">입금 ID</p>
                <p class="font-semibold">#${payment.id}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">입금 금액</p>
                <p class="font-semibold text-blue-600 text-lg">${payment.amount.toLocaleString()}원</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">송금 일시</p>
                <p class="font-semibold">${payment.transferDate}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">제출 파일</p>
                <p class="font-semibold">${payment.receiptFile || '<span class="text-gray-400">미제출</span>'}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">매칭 여부</p>
                <p class="font-semibold ${payment.matched ? 'text-green-600' : 'text-gray-600'}">
                    ${payment.matched ? '<i class="fas fa-check mr-1"></i>매칭됨' : '<i class="fas fa-times mr-1"></i>미매칭'}
                </p>
            </div>
            <div>
                <p class="text-sm text-gray-600">상태</p>
                <p><span class="px-3 py-1 text-xs rounded-full ${statusColors[payment.status]}">${statusLabels[payment.status]}</span></p>
            </div>
            <div>
                <p class="text-sm text-gray-600">확인 담당자</p>
                <p class="font-semibold">${payment.confirmedBy || '-'}</p>
            </div>
            <div class="col-span-2">
                <p class="text-sm text-gray-600">확인 일자</p>
                <p class="font-semibold">${payment.confirmedDate || '-'}</p>
            </div>
        </div>

        <div class="border-t pt-4">
            <p class="text-sm text-gray-600 mb-2">메모</p>
            <textarea id="paymentMemo" class="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3">${payment.memo}</textarea>
            <button onclick="saveMemo()" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                <i class="fas fa-save mr-1"></i>메모 저장
            </button>
        </div>
    `;

    document.getElementById('paymentModal').classList.remove('hidden');
}

// Quick confirm
function quickConfirm(id) {
    const payment = payments.find(p => p.id === id);
    if (!payment) return;

    if (confirm(`${payment.depositorName}님의 입금(${payment.amount.toLocaleString()}원)을 확인하시겠습니까?`)) {
        payment.status = 'confirmed';
        payment.confirmedBy = '관리자';
        payment.confirmedDate = new Date().toLocaleString('ko-KR');
        
        localStorage.setItem('payments', JSON.stringify(payments));
        updateStats();
        renderPayments();
        alert('입금이 확인되었습니다.');
    }
}

// Confirm payment
function confirmPayment() {
    if (!currentPaymentId) return;

    const payment = payments.find(p => p.id === currentPaymentId);
    if (!payment) return;

    payment.status = 'confirmed';
    payment.confirmedBy = '관리자';
    payment.confirmedDate = new Date().toLocaleString('ko-KR');
    
    localStorage.setItem('payments', JSON.stringify(payments));
    updateStats();
    renderPayments();
    closeModal();
    alert('입금이 확인되었습니다.');
}

// Confirm and auto-match
function confirmPaymentAndMatch() {
    if (!currentPaymentId) return;

    const payment = payments.find(p => p.id === currentPaymentId);
    if (!payment) return;

    // Try to match with paid members
    const paidMembers = JSON.parse(localStorage.getItem('paidMembers') || '[]');
    const matched = paidMembers.find(m => 
        m.depositorName === payment.depositorName && 
        m.amount === payment.amount &&
        (m.paymentStatus === 'pending' || m.paymentStatus === 'waiting')
    );

    payment.status = 'confirmed';
    payment.confirmedBy = '관리자';
    payment.confirmedDate = new Date().toLocaleString('ko-KR');
    
    if (matched) {
        payment.matched = true;
        payment.memo = `유료회원 ID #${matched.id} (${matched.name})와 자동 매칭됨`;
        
        // Update paid member status
        matched.paymentStatus = 'confirmed';
        localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
        
        alert(`입금이 확인되고 ${matched.name}님과 매칭되었습니다.`);
    } else {
        alert('입금은 확인되었으나 매칭되는 유료회원 신청을 찾을 수 없습니다.');
    }
    
    localStorage.setItem('payments', JSON.stringify(payments));
    updateStats();
    renderPayments();
    closeModal();
}

// Flag as unmatched
function flagUnmatched() {
    if (!currentPaymentId) return;

    const payment = payments.find(p => p.id === currentPaymentId);
    if (!payment) return;

    payment.status = 'unmatched';
    payment.confirmedBy = '관리자';
    payment.confirmedDate = new Date().toLocaleString('ko-KR');
    
    localStorage.setItem('payments', JSON.stringify(payments));
    updateStats();
    renderPayments();
    closeModal();
    alert('미매칭으로 표시되었습니다.');
}

// Save memo
function saveMemo() {
    if (!currentPaymentId) return;

    const payment = payments.find(p => p.id === currentPaymentId);
    if (!payment) return;

    const memo = document.getElementById('paymentMemo').value;
    payment.memo = memo;
    
    localStorage.setItem('payments', JSON.stringify(payments));
    alert('메모가 저장되었습니다.');
}

// Filter by status
function filterByStatus(status) {
    document.getElementById('statusFilter').value = status;
    renderPayments();
}

// Close modal
function closeModal() {
    document.getElementById('paymentModal').classList.add('hidden');
    currentPaymentId = null;
}

// Export payments
function exportPayments() {
    const csv = [
        ['ID', '입금자명', '금액', '송금일시', '제출파일', '매칭여부', '상태', '확인담당자', '확인일자', '메모'],
        ...payments.map(p => [
            p.id,
            p.depositorName,
            p.amount,
            p.transferDate,
            p.receiptFile || '',
            p.matched ? '매칭됨' : '미매칭',
            p.status === 'pending' ? '확인대기' : p.status === 'confirmed' ? '확인완료' : '미매칭',
            p.confirmedBy || '',
            p.confirmedDate || '',
            p.memo || ''
        ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `payments_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// Check for new payments
function checkNewPayments() {
    const saved = localStorage.getItem('payments');
    if (saved) {
        const newPayments = JSON.parse(saved);
        const newPending = newPayments.filter(p => p.status === 'pending').length;
        const oldPending = payments.filter(p => p.status === 'pending').length;
        
        if (newPending > oldPending) {
            playNotificationSound();
        }
        
        payments = newPayments;
        updateStats();
        renderPayments();
    }
}

// Play notification sound
function playNotificationSound() {
    if (document.getElementById('soundToggle').checked) {
        const audio = document.getElementById('notificationSound');
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Delete payment
function deletePayment(id) {
    if (!confirm('이 입금내역을 삭제하시겠습니까?')) {
        return;
    }
    
    const index = payments.findIndex(p => p.id === id);
    if (index !== -1) {
        payments.splice(index, 1);
        localStorage.setItem('payments', JSON.stringify(payments));
        updateStats();
        renderPayments();
        alert('입금내역이 삭제되었습니다.');
    }
}
