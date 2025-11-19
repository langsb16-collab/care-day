/**
 * CASHiQ 자동응답 챗봇 (다국어 지원)
 * 모든 페이지에서 사용 가능한 공통 챗봇 컴포넌트
 */

class CASHiQChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.currentLang = localStorage.getItem('currentLanguage') || 'ko';
        this.qnaData = this.loadQnAData();
        this.translations = this.getTranslations();
        this.init();
        
        // 언어 변경 감지
        window.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.updateLanguage();
        });
    }

    // 다국어 번역 데이터
    getTranslations() {
        return {
            ko: {
                title: 'CASHiQ 상담봇',
                subtitle: '무엇을 도와드릴까요?',
                placeholder: '질문을 입력하세요...',
                quickQuestions: '💡 자주 묻는 질문',
                notFound: '죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다. 😅\n\n아래와 같은 방법으로 문의해주세요:\n\n📧 이메일: support@cashiq.org\n📞 고객센터: 평일 09:00-18:00\n💬 1:1 문의: 고객센터 메뉴 이용\n\n관리자가 빠르게 답변드리겠습니다.',
                welcome: '안녕하세요! 👋\nCASHiQ 자동응답 상담봇입니다.\n\n궁금하신 점을 물어보시거나 아래 자주 묻는 질문을 선택해주세요.'
            },
            en: {
                title: 'CASHiQ Chatbot',
                subtitle: 'How can I help you?',
                placeholder: 'Type your question...',
                quickQuestions: '💡 Frequently Asked Questions',
                notFound: 'Sorry, I couldn\'t find an answer to that question. 😅\n\nPlease contact us:\n\n📧 Email: support@cashiq.org\n📞 Customer Service: Weekdays 09:00-18:00\n💬 1:1 Inquiry: Use customer service menu\n\nWe will respond quickly.',
                welcome: 'Hello! 👋\nI\'m CASHiQ chatbot.\n\nPlease ask your questions or select from frequently asked questions below.'
            },
            zh: {
                title: 'CASHiQ 聊天机器人',
                subtitle: '我能帮您什么？',
                placeholder: '输入您的问题...',
                quickQuestions: '💡 常见问题',
                notFound: '抱歉，找不到该问题的答案。😅\n\n请联系我们：\n\n📧 邮箱：support@cashiq.org\n📞 客服中心：工作日 09:00-18:00\n💬 一对一咨询：使用客服中心菜单\n\n我们会快速回复。',
                welcome: '您好！👋\n我是CASHiQ自动回复机器人。\n\n请提出您的问题或选择下面的常见问题。'
            },
            ja: {
                title: 'CASHiQ チャットボット',
                subtitle: '何をお手伝いしましょうか？',
                placeholder: '質問を入力してください...',
                quickQuestions: '💡 よくある質問',
                notFound: '申し訳ございません。その質問に対する回答が見つかりませんでした。😅\n\nお問い合わせ方法：\n\n📧 メール：support@cashiq.org\n📞 カスタマーセンター：平日 09:00-18:00\n💬 1:1お問い合わせ：カスタマーセンターメニュー利用\n\n迅速に回答いたします。',
                welcome: 'こんにちは！👋\nCASHiQ自動応答ボットです。\n\nご質問をお聞きするか、下のよくある質問を選択してください。'
            }
        };
    }

    // localStorage에서 Q&A 데이터 로드 (다국어 지원)
    loadQnAData() {
        const defaultQnA = {
            ko: [
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
                }
            ],
            en: [
                {
                    id: 1,
                    category: "Service",
                    question: "What is CASHiQ?",
                    answer: "CASHiQ is a comprehensive community platform for stroke patients and their families. We provide medical information, rehabilitation exercises, patient care, and community features.",
                    keywords: ["about", "service", "cashiq", "brain disease"]
                },
                {
                    id: 2,
                    category: "Sign Up",
                    question: "How do I sign up?",
                    answer: "Click the 'Sign Up' button in the top menu or click the 'Sign Up' link on the login page. You only need to enter your email, name, and password.",
                    keywords: ["signup", "register", "account", "join"]
                },
                {
                    id: 3,
                    category: "Membership",
                    question: "What are the premium membership benefits?",
                    answer: "Premium membership provides unlimited medical information search, 1:1 expert consultation, premium rehabilitation videos, ad removal, etc. 1-year: ₩68,000, 2-year: ₩100,000.",
                    keywords: ["premium", "membership", "paid", "benefits"]
                }
            ],
            zh: [
                {
                    id: 1,
                    category: "服务介绍",
                    question: "CASHiQ是什么服务？",
                    answer: "CASHiQ是为脑出血·脑梗塞患者及家属提供的综合社区平台。提供医疗信息、康复运动、患者护理、社区功能。",
                    keywords: ["介绍", "服务", "cashiq", "脑病"]
                },
                {
                    id: 2,
                    category: "会员注册",
                    question: "如何注册会员？",
                    answer: "点击顶部菜单的'会员注册'按钮，或在登录页面点击'会员注册'链接即可注册。只需输入邮箱、姓名、密码。",
                    keywords: ["注册", "会员", "账号", "加入"]
                },
                {
                    id: 3,
                    category: "会员资格",
                    question: "高级会员有什么好处？",
                    answer: "高级会员可享受无限医疗信息搜索、专家1:1咨询、高级康复视频、去广告等福利。1年：68,000韩元，2年：100,000韩元。",
                    keywords: ["高级", "会员", "付费", "福利"]
                }
            ],
            ja: [
                {
                    id: 1,
                    category: "サービス案内",
                    question: "CASHiQはどんなサービスですか？",
                    answer: "CASHiQは脳出血・脳梗塞患者とご家族のための総合コミュニティプラットフォームです。医療情報、リハビリ運動、患者ケア、コミュニティ機能を提供します。",
                    keywords: ["紹介", "サービス", "cashiq", "脳疾患"]
                },
                {
                    id: 2,
                    category: "会員登録",
                    question: "会員登録はどうすればいいですか？",
                    answer: "トップメニューの「会員登録」ボタンをクリックするか、ログインページで「会員登録」リンクをクリックして登録できます。メールアドレス、名前、パスワードのみ入力してください。",
                    keywords: ["会員登録", "登録", "アカウント", "加入"]
                },
                {
                    id: 3,
                    category: "メンバーシップ",
                    question: "プレミアム会員の特典は何ですか？",
                    answer: "プレミアム会員は無制限の医療情報検索、専門家1:1相談、プレミアムリハビリ動画、広告削除などの特典を提供します。1年：68,000ウォン、2年：100,000ウォン。",
                    keywords: ["プレミアム", "会員", "有料", "特典"]
                }
            ]
        };

        try {
            const savedQnA = localStorage.getItem('chatbotQnA_multilang');
            if (savedQnA) {
                const parsed = JSON.parse(savedQnA);
                console.log('✅ Loaded multilang Q&A from localStorage');
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
            localStorage.setItem('chatbotQnA_multilang', JSON.stringify(data));
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
        const t = this.translations[this.currentLang];
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
                            <div class="font-semibold">${t.title}</div>
                            <div class="text-xs opacity-90">${t.subtitle}</div>
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
                        placeholder="${t.placeholder}"
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

    // 언어 업데이트
    updateLanguage() {
        const t = this.translations[this.currentLang];
        
        // 헤더 업데이트
        const header = document.querySelector('.chatbot-header-title > div');
        if (header) {
            header.innerHTML = `
                <div class="font-semibold">${t.title}</div>
                <div class="text-xs opacity-90">${t.subtitle}</div>
            `;
        }
        
        // Placeholder 업데이트
        const input = document.getElementById('chatbot-input');
        if (input) {
            input.placeholder = t.placeholder;
        }
        
        // 메시지 클리어 및 환영 메시지 재표시
        this.messages = [];
        document.getElementById('chatbot-messages').innerHTML = '';
        this.addWelcomeMessage();
        this.showQuickQuestions();
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
        const t = this.translations[this.currentLang];
        const welcomeMsg = {
            type: 'bot',
            text: t.welcome,
            timestamp: new Date()
        };
        this.messages.push(welcomeMsg);
        this.renderMessage(welcomeMsg);
    }

    // 빠른 질문 표시
    showQuickQuestions() {
        const container = document.getElementById('chatbot-quick-questions');
        const t = this.translations[this.currentLang];
        const qnaList = this.qnaData[this.currentLang] || [];
        
        // 카테고리별로 1개씩 추출
        const categories = [...new Set(qnaList.map(q => q.category))];
        const quickQuestions = categories.slice(0, 4).map(cat => {
            return qnaList.find(q => q.category === cat);
        }).filter(q => q);

        container.innerHTML = `
            <div class="chatbot-quick-title">${t.quickQuestions}</div>
            ${quickQuestions.map(q => `
                <button class="chatbot-quick-btn" onclick="chatbot.handleQuickQuestion(${q.id})">
                    ${q.question}
                </button>
            `).join('')}
        `;
    }

    // 빠른 질문 클릭 처리
    handleQuickQuestion(id) {
        const qnaList = this.qnaData[this.currentLang] || [];
        const qna = qnaList.find(q => q.id === id);
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
        const qnaList = this.qnaData[this.currentLang] || [];
        const t = this.translations[this.currentLang];

        // 키워드 매칭
        for (const qna of qnaList) {
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
        return t.notFound;
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
        const time = message.timestamp.toLocaleTimeString(this.currentLang === 'ko' ? 'ko-KR' : 
                                                          this.currentLang === 'ja' ? 'ja-JP' :
                                                          this.currentLang === 'zh' ? 'zh-CN' : 'en-US', { 
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

function initChatbot() {
    // CSS 파일 로드
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/chatbot.css';
    document.head.appendChild(link);

    // 챗봇 초기화
    setTimeout(() => {
        chatbot = new CASHiQChatbot();
        console.log('✅ CASHiQ Multilingual Chatbot initialized');
    }, 500);
}

// DOM이 이미 로드되었는지 확인
if (document.readyState === 'loading') {
    // 아직 로드 중이면 이벤트 리스너 추가
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    // 이미 로드되었으면 바로 실행
    initChatbot();
}
