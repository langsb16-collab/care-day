// Authentication check
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

// Data storage
let paidMembers = [];
let inquiries = [];
let currentMemberId = null;
let currentInquiryId = null;
let currentInquiryFilter = 'all';

// Initialize
if (checkAuth()) {
    loadData();
    setInterval(checkNewInquiries, 30000); // Check every 30 seconds
}

// Load data
function loadData() {
    // Load paid members
    const savedMembers = localStorage.getItem('paidMembers');
    if (savedMembers) {
        paidMembers = JSON.parse(savedMembers);
    } else {
        paidMembers = generateSamplePaidMembers();
        localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
    }

    // Load inquiries
    const savedInquiries = localStorage.getItem('inquiries');
    if (savedInquiries) {
        inquiries = JSON.parse(savedInquiries);
    } else {
        inquiries = generateSampleInquiries();
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
    }

    updateStats();
    renderPaidMembers();
    renderInquiries();
}

// Generate sample paid members
function generateSamplePaidMembers() {
    return [
        {
            id: 1,
            name: '김철수',
            email: 'kim@example.com',
            phone: '010-1234-5678',
            applyDate: '2025-01-15',
            amount: 50000,
            paymentStatus: 'waiting',
            startDate: null,
            endDate: null,
            permissions: ['프리미엄콘텐츠', '1:1챗봇'],
            depositorName: '김철수',
            receiptFile: null,
            adminMemo: '',
            logs: [
                { date: '2025-01-15 14:30', action: '유료회원 신청', admin: '시스템' }
            ]
        },
        {
            id: 2,
            name: '이영희',
            email: 'lee@example.com',
            phone: '010-2345-6789',
            applyDate: '2025-01-10',
            amount: 50000,
            paymentStatus: 'active',
            startDate: '2025-01-11',
            endDate: '2026-01-11',
            permissions: ['프리미엄콘텐츠', '1:1챗봇', '전용톡방'],
            depositorName: '이영희',
            receiptFile: 'receipt_lee.jpg',
            adminMemo: '정상 처리됨',
            logs: [
                { date: '2025-01-10 10:20', action: '유료회원 신청', admin: '시스템' },
                { date: '2025-01-10 15:45', action: '입금 확인', admin: '관리자' },
                { date: '2025-01-11 09:00', action: '권한 부여', admin: '관리자' }
            ]
        },
        {
            id: 3,
            name: '박민수',
            email: 'park@example.com',
            phone: '010-3456-7890',
            applyDate: '2025-01-20',
            amount: 50000,
            paymentStatus: 'pending',
            startDate: null,
            endDate: null,
            permissions: ['프리미엄콘텐츠'],
            depositorName: '박민수',
            receiptFile: null,
            adminMemo: '입금 대기 중',
            logs: [
                { date: '2025-01-20 16:10', action: '유료회원 신청', admin: '시스템' }
            ]
        }
    ];
}

// Generate sample inquiries
function generateSampleInquiries() {
    return [
        {
            id: 1,
            memberId: 2,
            memberName: '이영희',
            memberEmail: 'lee@example.com',
            subject: '프리미엄 콘텐츠 접근 문의',
            message: '유료회원으로 가입했는데 프리미엄 콘텐츠에 접근이 안됩니다. 확인 부탁드립니다.',
            date: '2025-01-22 14:30',
            status: 'unanswered',
            answer: null,
            answeredBy: null,
            answeredDate: null
        },
        {
            id: 2,
            memberId: 1,
            memberName: '김철수',
            memberEmail: 'kim@example.com',
            subject: '결제 확인 요청',
            message: '어제 입금했는데 아직 권한이 활성화되지 않았습니다.',
            date: '2025-01-21 10:15',
            status: 'answered',
            answer: '안녕하세요. 입금 확인되었으며 권한이 활성화되었습니다. 감사합니다.',
            answeredBy: '관리자',
            answeredDate: '2025-01-21 11:00'
        }
    ];
}

// Update statistics
function updateStats() {
    const total = paidMembers.length;
    const pending = paidMembers.filter(m => m.paymentStatus === 'pending' || m.paymentStatus === 'waiting').length;
    const active = paidMembers.filter(m => m.paymentStatus === 'active').length;
    const unanswered = inquiries.filter(i => i.status === 'unanswered').length;

    document.getElementById('totalPaidMembers').textContent = total;
    document.getElementById('pendingPayments').textContent = pending;
    document.getElementById('activePermissions').textContent = active;
    document.getElementById('unansweredInquiries').textContent = unanswered;
}

// Render paid members table
function renderPaidMembers() {
    const tbody = document.getElementById('paidMembersTableBody');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    
    let filtered = paidMembers;
    
    if (searchTerm) {
        filtered = filtered.filter(m => 
            m.name.toLowerCase().includes(searchTerm) ||
            m.email.toLowerCase().includes(searchTerm) ||
            m.phone.includes(searchTerm)
        );
    }
    
    if (statusFilter !== 'all') {
        filtered = filtered.filter(m => m.paymentStatus === statusFilter);
    }
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="px-4 py-8 text-center text-gray-500">유료회원이 없습니다.</td></tr>';
        return;
    }

    const statusColors = {
        'pending': 'bg-gray-100 text-gray-800',
        'waiting': 'bg-yellow-100 text-yellow-800',
        'confirmed': 'bg-blue-100 text-blue-800',
        'active': 'bg-green-100 text-green-800',
        'expired': 'bg-red-100 text-red-800'
    };
    
    const statusLabels = {
        'pending': '미입금',
        'waiting': '입금대기',
        'confirmed': '입금확인',
        'active': '권한부여됨',
        'expired': '권한만료'
    };

    tbody.innerHTML = filtered.map(member => {
        const memberInquiries = inquiries.filter(i => i.memberId === member.id);
        const unansweredCount = memberInquiries.filter(i => i.status === 'unanswered').length;
        
        return `
            <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 font-medium">${member.name}</td>
                <td class="px-4 py-3 text-sm">${member.phone}</td>
                <td class="px-4 py-3 text-sm">${member.applyDate}</td>
                <td class="px-4 py-3 font-semibold">${member.amount.toLocaleString()}원</td>
                <td class="px-4 py-3">
                    <span class="px-3 py-1 text-xs rounded-full status-badge ${statusColors[member.paymentStatus]}">
                        ${statusLabels[member.paymentStatus]}
                    </span>
                </td>
                <td class="px-4 py-3 text-sm">${member.startDate || '-'}</td>
                <td class="px-4 py-3 text-sm">${member.endDate || '-'}</td>
                <td class="px-4 py-3">
                    <div class="relative inline-block">
                        <button onclick="viewMemberInquiries(${member.id})" class="text-blue-600 hover:text-blue-800" title="문의 보기">
                            <i class="fas fa-comment-dots text-lg"></i>
                            ${unansweredCount > 0 ? `<span class="inquiry-badge">${unansweredCount}</span>` : ''}
                        </button>
                    </div>
                </td>
                <td class="px-4 py-3">
                    <button onclick="viewMember(${member.id})" class="text-blue-600 hover:text-blue-800" title="상세 보기">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Render inquiries
function renderInquiries() {
    const container = document.getElementById('inquiriesList');
    
    let filtered = inquiries;
    if (currentInquiryFilter !== 'all') {
        filtered = inquiries.filter(i => i.status === currentInquiryFilter);
    }

    // Update filter buttons
    document.querySelectorAll('[id^="filter-"]').forEach(btn => {
        btn.classList.remove('bg-purple-600', 'text-white');
        btn.classList.add('bg-gray-200');
    });
    document.getElementById(`filter-${currentInquiryFilter}`).classList.remove('bg-gray-200');
    document.getElementById(`filter-${currentInquiryFilter}`).classList.add('bg-purple-600', 'text-white');

    if (filtered.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500 py-8">문의가 없습니다.</p>';
        return;
    }

    container.innerHTML = filtered.map(inquiry => `
        <div class="border rounded-lg p-4 ${inquiry.status === 'unanswered' ? 'bg-yellow-50 border-yellow-200' : 'bg-white'}">
            <div class="flex justify-between items-start mb-3">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                        <h3 class="font-semibold text-lg">${inquiry.subject}</h3>
                        <span class="px-3 py-1 text-xs rounded-full ${inquiry.status === 'unanswered' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                            ${inquiry.status === 'unanswered' ? '미답변' : '답변완료'}
                        </span>
                    </div>
                    <p class="text-sm text-gray-600"><i class="fas fa-user mr-1"></i>${inquiry.memberName} (${inquiry.memberEmail})</p>
                    <p class="text-sm text-gray-500"><i class="fas fa-clock mr-1"></i>${inquiry.date}</p>
                </div>
                <button onclick="viewInquiry(${inquiry.id})" class="px-4 py-2 ${inquiry.status === 'unanswered' ? 'bg-blue-600' : 'bg-gray-600'} text-white rounded-lg hover:opacity-90 transition">
                    ${inquiry.status === 'unanswered' ? '<i class="fas fa-reply mr-1"></i>답변하기' : '<i class="fas fa-eye mr-1"></i>보기'}
                </button>
            </div>
            <p class="text-gray-700 mb-3">${inquiry.message}</p>
            ${inquiry.status === 'answered' ? `
                <div class="border-t pt-3 mt-3">
                    <p class="text-sm text-gray-600 mb-1"><strong>답변:</strong> ${inquiry.answeredBy} (${inquiry.answeredDate})</p>
                    <p class="text-gray-700">${inquiry.answer}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Filter inquiries
function filterInquiries(filter) {
    currentInquiryFilter = filter;
    renderInquiries();
}

// View member details
function viewMember(id) {
    const member = paidMembers.find(m => m.id === id);
    if (!member) return;

    currentMemberId = id;

    const statusColors = {
        'pending': 'bg-gray-100 text-gray-800',
        'waiting': 'bg-yellow-100 text-yellow-800',
        'confirmed': 'bg-blue-100 text-blue-800',
        'active': 'bg-green-100 text-green-800',
        'expired': 'bg-red-100 text-red-800'
    };
    
    const statusLabels = {
        'pending': '미입금',
        'waiting': '입금대기',
        'confirmed': '입금확인',
        'active': '권한부여됨',
        'expired': '권한만료'
    };

    const details = document.getElementById('memberDetails');
    details.innerHTML = `
        <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
                <p class="text-sm text-gray-600">신청자명</p>
                <p class="font-semibold">${member.name}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">회원 ID</p>
                <p class="font-semibold">#${member.id}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">이메일</p>
                <p class="font-semibold">${member.email}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">전화번호</p>
                <p class="font-semibold">${member.phone}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">신청일</p>
                <p class="font-semibold">${member.applyDate}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">결제 예정금액</p>
                <p class="font-semibold text-blue-600">${member.amount.toLocaleString()}원</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">결제 상태</p>
                <p><span class="px-3 py-1 text-xs rounded-full ${statusColors[member.paymentStatus]}">${statusLabels[member.paymentStatus]}</span></p>
            </div>
            <div>
                <p class="text-sm text-gray-600">입금자명</p>
                <p class="font-semibold">${member.depositorName}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">권한 시작일</p>
                <p class="font-semibold">${member.startDate || '-'}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600">권한 종료일</p>
                <p class="font-semibold">${member.endDate || '-'}</p>
            </div>
        </div>

        <div class="border-t pt-4 mb-6">
            <p class="text-sm text-gray-600 mb-2">권한 구분</p>
            <div class="flex flex-wrap gap-2">
                ${member.permissions.map(p => `<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${p}</span>`).join('')}
            </div>
        </div>

        <div class="border-t pt-4 mb-6">
            <p class="text-sm text-gray-600 mb-2">송금 정보</p>
            <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm"><strong>입금자명:</strong> ${member.depositorName}</p>
                <p class="text-sm"><strong>제출 파일:</strong> ${member.receiptFile ? `<i class="fas fa-file-image text-blue-600"></i> ${member.receiptFile}` : '미제출'}</p>
            </div>
        </div>

        <div class="border-t pt-4 mb-6">
            <p class="text-sm text-gray-600 mb-2">관리자 메모</p>
            <textarea id="adminMemoInput" class="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3">${member.adminMemo}</textarea>
            <button onclick="saveMemo()" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                <i class="fas fa-save mr-1"></i>메모 저장
            </button>
        </div>

        <div class="border-t pt-4">
            <p class="text-sm text-gray-600 mb-2">권한 변경 로그</p>
            <div class="bg-gray-50 p-4 rounded-lg max-h-40 overflow-y-auto">
                ${member.logs.map(log => `
                    <div class="text-sm mb-2 pb-2 border-b last:border-b-0">
                        <span class="text-gray-600">${log.date}</span> - 
                        <span class="font-semibold">${log.action}</span>
                        <span class="text-gray-500">(담당: ${log.admin})</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('memberModal').classList.remove('hidden');
}

// View member inquiries
function viewMemberInquiries(memberId) {
    const memberInquiries = inquiries.filter(i => i.memberId === memberId);
    currentInquiryFilter = 'all';
    
    if (memberInquiries.length > 0) {
        // Scroll to inquiries section
        document.querySelector('#inquiriesList').scrollIntoView({ behavior: 'smooth' });
        // Highlight the inquiries
        setTimeout(() => {
            renderInquiries();
        }, 500);
    } else {
        alert('이 회원의 문의가 없습니다.');
    }
}

// View inquiry details
function viewInquiry(id) {
    const inquiry = inquiries.find(i => i.id === id);
    if (!inquiry) return;

    currentInquiryId = id;

    const details = document.getElementById('inquiryDetails');
    details.innerHTML = `
        <div class="bg-gray-50 p-4 rounded-lg">
            <div class="mb-3">
                <p class="text-sm text-gray-600">문의자</p>
                <p class="font-semibold">${inquiry.memberName} (${inquiry.memberEmail})</p>
            </div>
            <div class="mb-3">
                <p class="text-sm text-gray-600">문의 제목</p>
                <p class="font-semibold">${inquiry.subject}</p>
            </div>
            <div class="mb-3">
                <p class="text-sm text-gray-600">문의 일시</p>
                <p class="font-semibold">${inquiry.date}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600 mb-2">문의 내용</p>
                <p class="text-gray-700 whitespace-pre-wrap">${inquiry.message}</p>
            </div>
        </div>
        ${inquiry.status === 'answered' ? `
            <div class="bg-blue-50 p-4 rounded-lg mt-4">
                <p class="text-sm text-gray-600 mb-2">기존 답변 (${inquiry.answeredBy}, ${inquiry.answeredDate})</p>
                <p class="text-gray-700 whitespace-pre-wrap">${inquiry.answer}</p>
            </div>
        ` : ''}
    `;

    if (inquiry.status === 'answered') {
        document.getElementById('answerInput').value = inquiry.answer;
    } else {
        document.getElementById('answerInput').value = '';
    }

    document.getElementById('inquiryModal').classList.remove('hidden');
}

// Submit answer
function submitAnswer() {
    if (!currentInquiryId) return;

    const inquiry = inquiries.find(i => i.id === currentInquiryId);
    if (!inquiry) return;

    const answer = document.getElementById('answerInput').value.trim();
    if (!answer) {
        alert('답변을 입력해주세요.');
        return;
    }

    if (confirm('답변을 전송하시겠습니까?')) {
        inquiry.status = 'answered';
        inquiry.answer = answer;
        inquiry.answeredBy = '관리자';
        inquiry.answeredDate = new Date().toLocaleString('ko-KR');

        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        alert('답변이 전송되었습니다.');
        closeInquiryModal();
        updateStats();
        renderInquiries();
        renderPaidMembers();
    }
}

// Save memo
function saveMemo() {
    if (!currentMemberId) return;
    
    const member = paidMembers.find(m => m.id === currentMemberId);
    if (!member) return;

    const memo = document.getElementById('adminMemoInput').value;
    member.adminMemo = memo;
    
    member.logs.push({
        date: new Date().toLocaleString('ko-KR'),
        action: '메모 수정',
        admin: '관리자'
    });

    localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
    alert('메모가 저장되었습니다.');
}

// Confirm payment and grant permission
function confirmPayment() {
    if (!currentMemberId) return;
    
    const member = paidMembers.find(m => m.id === currentMemberId);
    if (!member) return;

    if (confirm(`${member.name}님의 입금을 확인하고 권한을 부여하시겠습니까?`)) {
        member.paymentStatus = 'active';
        const now = new Date();
        member.startDate = now.toISOString().split('T')[0];
        const endDate = new Date(now);
        endDate.setFullYear(endDate.getFullYear() + 1);
        member.endDate = endDate.toISOString().split('T')[0];
        
        member.logs.push({
            date: new Date().toLocaleString('ko-KR'),
            action: '입금확인 → 권한부여',
            admin: '관리자'
        });

        localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
        
        alert('권한이 부여되었습니다.');
        updateStats();
        renderPaidMembers();
        closeModal();
    }
}

// Suspend permission
function suspendPermission() {
    if (!currentMemberId) return;
    
    const member = paidMembers.find(m => m.id === currentMemberId);
    if (!member) return;

    if (confirm(`${member.name}님의 권한을 중지하시겠습니까?`)) {
        member.paymentStatus = 'suspended';
        
        member.logs.push({
            date: new Date().toLocaleString('ko-KR'),
            action: '권한 중지',
            admin: '관리자'
        });

        localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
        alert('권한이 중지되었습니다.');
        updateStats();
        renderPaidMembers();
        closeModal();
    }
}

// Expire permission
function expirePermission() {
    if (!currentMemberId) return;
    
    const member = paidMembers.find(m => m.id === currentMemberId);
    if (!member) return;

    if (confirm(`${member.name}님의 권한을 만료 처리하시겠습니까?`)) {
        member.paymentStatus = 'expired';
        
        member.logs.push({
            date: new Date().toLocaleString('ko-KR'),
            action: '권한 만료',
            admin: '관리자'
        });

        localStorage.setItem('paidMembers', JSON.stringify(paidMembers));
        alert('권한이 만료되었습니다.');
        updateStats();
        renderPaidMembers();
        closeModal();
    }
}

// Close modals
function closeModal() {
    document.getElementById('memberModal').classList.add('hidden');
    currentMemberId = null;
}

function closeInquiryModal() {
    document.getElementById('inquiryModal').classList.add('hidden');
    currentInquiryId = null;
}

// Export data
function exportData() {
    const statusLabels = {
        'pending': '미입금',
        'waiting': '입금대기',
        'confirmed': '입금확인',
        'active': '권한부여됨',
        'expired': '권한만료'
    };

    const csv = [
        ['ID', '이름', '이메일', '전화번호', '신청일', '결제금액', '결제상태', '시작일', '종료일', '권한구분'],
        ...paidMembers.map(m => [
            m.id,
            m.name,
            m.email,
            m.phone,
            m.applyDate,
            m.amount,
            statusLabels[m.paymentStatus],
            m.startDate || '',
            m.endDate || '',
            m.permissions.join(', ')
        ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `paid_members_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// Check for new inquiries
function checkNewInquiries() {
    const savedInquiries = localStorage.getItem('inquiries');
    if (savedInquiries) {
        const newInquiries = JSON.parse(savedInquiries);
        const newUnanswered = newInquiries.filter(i => i.status === 'unanswered').length;
        const oldUnanswered = inquiries.filter(i => i.status === 'unanswered').length;
        
        if (newUnanswered > oldUnanswered) {
            // Play notification sound
            playNotificationSound();
        }
        
        inquiries = newInquiries;
        updateStats();
        renderInquiries();
        renderPaidMembers();
    }
}

// Play notification sound
function playNotificationSound() {
    const audio = new Audio('data:audio/wav;base64,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');
    audio.play().catch(e => console.log('Audio play failed:', e));
}
