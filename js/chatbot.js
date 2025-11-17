/**
 * CASHiQ 자동응답 챗봇
 * 모든 페이지에서 사용 가능한 공통 챗봇 컴포넌트
 */

class CASHiQChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.qnaData = this.loadQnAData();
        this.init();
    }

    // localStorage에서 Q&A 데이터 로드
    loadQnAData() {
        const defaultQnA = [
            {
                id: 1,
                category: "서비스 안내",
                question: "CASHiQ는 어떤 서비스인가요?",
                answer: "CASHiQ는 뇌출혈·뇌경색 환자와 가족을 위한 종합 커뮤니티 플랫폼입니다. 의료정보, 재활운동, 환자 간호, 커뮤니티 기능을 제공합니다.",
                keywords: ["소개", "서비스", "cashiq", "뇌질환"]
            },
            {
                id: 2,
                category: "회원가입",
                question: "회원가입은 어떻게 하나요?",
                answer: "상단 메뉴의 '회원가입' 버튼을 클릭하시거나, 로그인 페이지에서 '회원가입' 링크를 클릭하여 가입하실 수 있습니다. 이메일, 이름, 비밀번호만 입력하시면 됩니다.",
                keywords: ["회원가입", "가입", "등록", "계정"]
            },
            {
                id: 3,
                category: "멤버십",
                question: "프리미엄 멤버십의 혜택은 무엇인가요?",
                answer: "프리미엄 멤버십은 무제한 의료정보 검색, 전문가 1:1 상담, 프리미엄 재활운동 영상, 광고 제거 등의 혜택을 제공합니다. 1년권 68,000원, 2년권 100,000원입니다.",
                keywords: ["프리미엄", "멤버십", "유료", "결제", "혜택"]
            },
            {
                id: 4,
                category: "재활운동",
                question: "재활운동 영상은 어디서 볼 수 있나요?",
                answer: "메인 메뉴의 '재활운동' 탭을 클릭하시면 상지운동, 하지운동, 언어재활 등 다양한 재활운동 영상을 무료로 시청하실 수 있습니다.",
                keywords: ["재활", "운동", "영상", "상지", "하지", "언어"]
            },
            {
                id: 5,
                category: "병원 찾기",
                question: "가까운 병원을 찾고 싶어요",
                answer: "'병원 찾기' 메뉴에서 지역별로 뇌질환 전문 병원을 검색하실 수 있습니다. 병원명, 주소, 전화번호, 진료과목 등의 정보를 제공합니다.",
                keywords: ["병원", "찾기", "검색", "의료기관", "뇌질환"]
            },
            {
                id: 6,
                category: "문의",
                question: "고객센터는 어떻게 이용하나요?",
                answer: "1:1 문의는 '고객센터' 메뉴에서 가능합니다. 또는 이메일(support@cashiq.org)로 문의하실 수 있으며, 평일 09:00-18:00에 답변드립니다.",
                keywords: ["문의", "고객센터", "상담", "이메일", "연락"]
            }
        ];

        try {
            const savedQnA = localStorage.getItem('chatbotQnA');
            if (savedQnA) {
                const parsed = JSON.parse(savedQnA);
                console.log('✅ Loaded', parsed.length, 'Q&A items from localStorage');
                return parsed;
            }
        } catch (error) {
            console.error('Error loading chatbot Q&A:', error);
        }

        // 기본 Q&A 데이터 저장
        this.saveQnAData(defaultQnA);
        return defaultQnA;
    }

    // Q&A 데이터 저장
    saveQnAData(data) {
        try {
            localStorage.setItem('chatbotQnA', JSON.stringify(data));
            this.qnaData = data;
        } catch (error) {
            console.error('Error saving chatbot Q&A:', error);
        }
    }

    // 챗봇 UI 초기화
    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.addWelcomeMessage();
    }

    // 챗봇 HTML 생성
    createChatbotHTML() {
        const chatbotHTML = `
            <!-- 챗봇 버튼 -->
            <div id="chatbot-button" class="chatbot-button">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge" id="chatbot-badge">1</span>
            </div>

            <!-- 챗봇 윈도우 -->
            <div id="chatbot-window" class="chatbot-window">
                <div class="chatbot-header">
                    <div class="chatbot-header-title">
                        <i class="fas fa-robot mr-2"></i>
                        <div>
                            <div class="font-semibold">CASHiQ 상담봇</div>
                            <div class="text-xs opacity-90">무엇을 도와드릴까요?</div>
                        </div>
                    </div>
                    <button id="chatbot-close" class="chatbot-close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="chatbot-messages" id="chatbot-messages">
                    <!-- Messages will be added here -->
                </div>

                <div class="chatbot-quick-questions" id="chatbot-quick-questions">
                    <!-- Quick questions will be added here -->
                </div>

                <div class="chatbot-input-area">
                    <input 
                        type="text" 
                        id="chatbot-input" 
                        placeholder="질문을 입력하세요..."
                        class="chatbot-input"
                    >
                    <button id="chatbot-send" class="chatbot-send-btn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        // body에 추가
        const div = document.createElement('div');
        div.innerHTML = chatbotHTML;
        document.body.appendChild(div);
    }

    // 이벤트 리스너 연결
    attachEventListeners() {
        const button = document.getElementById('chatbot-button');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        button.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.closeChatbot());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    // 챗봇 열기/닫기
    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        const button = document.getElementById('chatbot-button');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            window.classList.add('active');
            button.classList.add('active');
            this.clearBadge();
            this.showQuickQuestions();
        } else {
            window.classList.remove('active');
            button.classList.remove('active');
        }
    }

    // 챗봇 닫기
    closeChatbot() {
        const window = document.getElementById('chatbot-window');
        const button = document.getElementById('chatbot-button');
        
        this.isOpen = false;
        window.classList.remove('active');
        button.classList.remove('active');
    }

    // 환영 메시지 추가
    addWelcomeMessage() {
        const welcomeMsg = {
            type: 'bot',
            text: '안녕하세요! 👋\nCASHiQ 자동응답 상담봇입니다.\n\n궁금하신 점을 물어보시거나 아래 자주 묻는 질문을 선택해주세요.',
            timestamp: new Date()
        };
        this.messages.push(welcomeMsg);
        this.renderMessage(welcomeMsg);
    }

    // 빠른 질문 표시
    showQuickQuestions() {
        const container = document.getElementById('chatbot-quick-questions');
        
        // 카테고리별로 1개씩 추출
        const categories = [...new Set(this.qnaData.map(q => q.category))];
        const quickQuestions = categories.slice(0, 4).map(cat => {
            return this.qnaData.find(q => q.category === cat);
        }).filter(q => q);

        container.innerHTML = `
            <div class="chatbot-quick-title">💡 자주 묻는 질문</div>
            ${quickQuestions.map(q => `
                <button class="chatbot-quick-btn" onclick="chatbot.handleQuickQuestion(${q.id})">
                    ${q.question}
                </button>
            `).join('')}
        `;
    }

    // 빠른 질문 클릭 처리
    handleQuickQuestion(id) {
        const qna = this.qnaData.find(q => q.id === id);
        if (qna) {
            this.addMessage('user', qna.question);
            setTimeout(() => {
                this.addMessage('bot', qna.answer);
            }, 500);
        }
    }

    // 메시지 전송
    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const text = input.value.trim();
        
        if (!text) return;

        // 사용자 메시지 추가
        this.addMessage('user', text);
        input.value = '';

        // 답변 검색
        setTimeout(() => {
            const answer = this.findAnswer(text);
            this.addMessage('bot', answer);
        }, 500);
    }

    // 답변 찾기 (키워드 매칭)
    findAnswer(question) {
        const lowerQuestion = question.toLowerCase();

        // 키워드 매칭
        for (const qna of this.qnaData) {
            // 질문 전체 매칭
            if (qna.question.toLowerCase().includes(lowerQuestion) || 
                lowerQuestion.includes(qna.question.toLowerCase())) {
                return qna.answer;
            }

            // 키워드 매칭
            for (const keyword of qna.keywords) {
                if (lowerQuestion.includes(keyword.toLowerCase())) {
                    return qna.answer;
                }
            }
        }

        // 답변을 못 찾은 경우
        return `죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다. 😅\n\n아래와 같은 방법으로 문의해주세요:\n\n📧 이메일: support@cashiq.org\n📞 고객센터: 평일 09:00-18:00\n💬 1:1 문의: 고객센터 메뉴 이용\n\n관리자가 빠르게 답변드리겠습니다.`;
    }

    // 메시지 추가
    addMessage(type, text) {
        const message = {
            type: type,
            text: text,
            timestamp: new Date()
        };
        this.messages.push(message);
        this.renderMessage(message);

        // 스크롤을 최하단으로
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 메시지 렌더링
    renderMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const time = message.timestamp.toLocaleTimeString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        const messageHTML = `
            <div class="chatbot-message ${message.type}">
                <div class="chatbot-message-content">
                    ${message.text.replace(/\n/g, '<br>')}
                </div>
                <div class="chatbot-message-time">${time}</div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    }

    // 배지 숫자 지우기
    clearBadge() {
        const badge = document.getElementById('chatbot-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }

    // 배지 숫자 설정
    setBadge(count) {
        const badge = document.getElementById('chatbot-badge');
        if (badge && count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        }
    }
}

// 페이지 로드 시 챗봇 초기화
let chatbot;
document.addEventListener('DOMContentLoaded', function() {
    // CSS 파일 로드
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/chatbot.css';
    document.head.appendChild(link);

    // 챗봇 초기화
    setTimeout(() => {
        chatbot = new CASHiQChatbot();
        console.log('✅ CASHiQ Chatbot initialized');
    }, 500);
});
