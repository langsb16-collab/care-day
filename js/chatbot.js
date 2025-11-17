// 챗봇 시스템 - FAQ 자동응답 + 유료회원 1대1 문의
(function() {
    'use strict';

    // FAQ 데이터
    const faqData = [
        {
            id: 1,
            question: "이 플랫폼은 어떤 대상자를 위한 것인가요?",
            answer: "이 플랫폼은 뇌출혈·뇌경색 등 뇌질환을 겪고 있는 환자 및 그 가족, 또는 간병인을 필요로 하는 가정 등 뇌질환 케어 관련 서비스를 찾는 이용자를 위한 종합 지원 플랫폼입니다.\n\n예컨대 '병원 검색', '간병인 매칭', '재활운동 영상 제공', '지원정책 안내' 등이 주요 서비스입니다.",
            keywords: ["대상자", "누구", "이용자", "환자", "가족"]
        },
        {
            id: 2,
            question: "병원을 어떻게 검색하나요?",
            answer: "사이트 내 '병원 검색' 메뉴를 통해 지역, 진료과목, 병원명 등으로 필터하여 검색할 수 있으며, 뇌질환 전문 병원 또는 재활병원 등이 등록되어 있습니다.\n\n필요시 병원 주소·전문 분야·상담가능 여부·비용 등 상세정보도 확인 가능하도록 설계되어 있습니다.",
            keywords: ["병원", "검색", "찾기", "조회"]
        },
        {
            id: 3,
            question: "간병인 매칭 서비스는 어떻게 이용하나요?",
            answer: "간병인이 필요하다면 사이트의 '간병인' 또는 '간병매칭' 메뉴에서 간병인 등록 정보(경력, 가능 전달, 서비스 지역, 비용 등)를 조회하고, 역할과 시간조건에 맞춰 매칭 신청할 수 있습니다.\n\n이후 플랫폼 또는 간병인 제공업체와 상담하여 계약 조건을 확정합니다.",
            keywords: ["간병인", "매칭", "케어", "돌봄"]
        },
        {
            id: 4,
            question: "재활운동 영상 제공은 어떤 식으로 이루어지나요?",
            answer: "'재활운동' 메뉴에서 뇌질환 환자를 위한 영상 콘텐츠를 제공합니다.\n\n예컨대 초기 재활운동, 근력 회복운동, 일상생활 회복운동 등이 영상 형태로 제공되며, 환자나 가족이 따라 하기 쉽게 구성되어 있습니다.\n\n이용자는 해당 영상을 시청하고 실천하면서, 필요시 간병인 또는 재활치료사와 병행할 수 있습니다.",
            keywords: ["재활", "운동", "영상", "콘텐츠"]
        },
        {
            id: 5,
            question: "지원정책 안내는 어떤 내용이 포함되어 있나요?",
            answer: "정부·지자체에서 운영하는 뇌질환 환자 지원정책, 간병비 지원, 재활 서비스 비용 보조, 의료비 지원 등 다양한 정보를 안내합니다.\n\n지역별 혜택, 신청방법, 제출서류 등이 함께 정리되어 있어 환자·가족이 필요한 지원을 놓치지 않도록 돕습니다.",
            keywords: ["지원", "정책", "혜택", "보조금", "의료비"]
        },
        {
            id: 6,
            question: "이용요금이 있나요? 무료? 유료?",
            answer: "기본적으로 병원 검색 3회, 공지 검색입니다.\n\n✅ 유료 회원은 모든 기능 사용 가능\n• 간병인 조회\n• 재활운동 영상 관람\n• 정책정보 조회\n\n간병매칭 후 발생하는 실제 간병 서비스 비용, 병원 진료비, 재활치료비 등은 별도 계약·결제되어야 합니다.",
            keywords: ["요금", "비용", "가격", "무료", "유료", "회원"]
        },
        {
            id: 7,
            question: "모바일 앱이 있나요? 또는 모바일에서 이용 가능한가요?",
            answer: "웹사이트 형태로 제공되며, 별도의 전용 모바일 앱 안내가 없는 경우에는 모바일 브라우저 접속으로도 정상 이용 가능합니다.\n\n반응형 웹 디자인으로 구현되어 있어 모바일 환경에서도 편리하게 이용하실 수 있습니다.",
            keywords: ["모바일", "앱", "스마트폰", "어플"]
        },
        {
            id: 8,
            question: "개인정보 보호 및 간병인/병원 정보의 신뢰도는 어떻게 되나요?",
            answer: "플랫폼에 등록된 병원·간병인 정보의 정확성은 사이트와 등록기관의 검증 수준에 따라 다를 수 있습니다.\n\n이용 전에 병원 또는 간병인과 직접 상담하여 경력, 서비스 조건, 비용 등 세부사항을 확인하시고, 개인정보 이용 및 보호정책을 반드시 읽어보시는 것이 좋습니다.",
            keywords: ["개인정보", "보호", "신뢰", "안전", "보안"]
        },
        {
            id: 9,
            question: "어떻게 시작하면 되나요? 이용 절차는 어떻게 되나요?",
            answer: "이용 절차:\n\n1️⃣ 사이트 접속 → 회원가입 또는 비회원 조회\n2️⃣ 필요한 서비스 선택 (병원 검색, 간병인 매칭, 영상 시청 등)\n3️⃣ 필터/검색을 통해 적합한 병원 또는 간병인 리스트 확인\n4️⃣ 상담 신청 또는 매칭 요청 → 조건 협의 및 계약\n5️⃣ 서비스 이용 및 이후 후기 또는 커뮤니티 공유",
            keywords: ["시작", "절차", "방법", "이용", "가입"]
        },
        {
            id: 10,
            question: "이용 중 문제가 생기거나 문의하고 싶을 때는 어떻게 하나요?",
            answer: "사이트 내 '문의', '고객센터', '지원' 등의 메뉴를 통해 이메일, 전화번호 또는 온라인 채팅 등의 방법으로 문의할 수 있습니다.\n\n그 외 '유료회원 1대1 답변' 대화창을 사용하시면 기능·문제점·요구사항을 반영해 드립니다.\n\n💎 유료회원께서는 1대1 전문 상담을 이용하실 수 있습니다.",
            keywords: ["문의", "문제", "고객센터", "상담", "도움"]
        },
        {
            id: 11,
            question: "타사 앱과 차이점은?",
            answer: "일단 타사 앱·플랫폼은 예약 기능 정도만 제공합니다.\n\n❌ 타사: 단순 예약 기능\n✅ CASHiQ: 종합 서비스 제공\n\n저희는 병원 검색부터 간병인 매칭, 재활운동, 간병일지, 지원정책까지 모든 케어 서비스를 통합적으로 제공합니다.\n\n💡 직접 비교해보세요! 차이를 느끼실 수 있습니다.",
            keywords: ["타사", "차이", "비교", "다른", "앱"]
        },
        {
            id: 12,
            question: "장점은? 구체적으로 알려주세요",
            answer: "🏥 **병원 검색**\n• 국내 3,500곳 병원 등록\n• 지역별·병원별 예약·접수 현황 확인\n• 가까운 전문 병원 빠른 검색\n\n👨‍⚕️ **간병인 찾기**\n• 1,200명 DB 보유\n• 자격증 보유 전문가 별도 표시\n• 구인·구직 조건 등록으로 맞춤형 매칭\n\n📝 **간병일지**\n• 환자 상태·일일 기록 실시간 작성\n• 가족·간병인 간 공유 기능\n• 앱·플랫폼에서 바로 확인\n\n🎥 **재활운동 영상**\n• 100여개 이상 콘텐츠 제공\n• 집에서도 체계적 재활 가능\n• 매월 업데이트\n\n🏛️ **정부 지원정책**\n• 복잡한 행정·지원 정보 정리\n• 한눈에 보기 쉽게 안내",
            keywords: ["장점", "장점은", "특징", "좋은점", "뭐가"]
        },
        {
            id: 13,
            question: "그 외 차이점은 무엇인지?",
            answer: "🌏 **동북아시아 최초! 특별하고 유일한 기능**\n\n🗣️ **다국어 간병일지**\n• 간병인 80%가 중국인, 소통 문제 해결!\n• 중국어 음성녹음 → 한국어 자동 번역\n• 투여 약·식사·몸상태 한국어로 전송\n\n🔬 **메디컬 렌즈 기능**\n• 환자에게 투여된 약·수액 궁금하신가요?\n• 휴대폰 카메라로 라벨 사진 촬영\n• 성분 자동 분석 후 보호자에게 전송\n• 간병일지에 자동 저장\n\n⭐ **병원 평가 시스템**\n• 무기명 병원 평가 가능\n• 수준 낮은 서비스·무시하는 태도 개선\n• 더 이상 참지 마세요!\n\n🏛️ **국가기관 민원 제기**\n• 보건복지부, 국민신문고 등 연계\n• 의료분쟁조정중재원, 국가인권위원회\n• 공익 목적으로 사실적시 명예훼손 해당 없음\n• 환자·보호자의 권리 보호\n\n💪 환자 당사자의 가슴 조리는 심정으로 기획·개발된 플랫폼입니다!",
            keywords: ["차이", "특별", "유일", "독특", "다른", "기능"]
        }
    ];

    // 챗봇 HTML 생성
    function createChatbotHTML() {
        const chatbotHTML = `
            <!-- 챗봇 버튼 -->
            <div id="chatbot-button" class="chatbot-button">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge" id="chatbot-badge">1</span>
            </div>

            <!-- FAQ 챗봇 창 -->
            <div id="chatbot-window" class="chatbot-window chatbot-hidden">
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <i class="fas fa-robot mr-2"></i>
                        <div>
                            <div class="chatbot-title">자동응답 챗봇</div>
                            <div class="chatbot-subtitle">자주 묻는 질문</div>
                        </div>
                    </div>
                    <button onclick="closeChatbot()" class="chatbot-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chatbot-body" id="chatbot-body">
                    <div class="chatbot-welcome">
                        <div class="chatbot-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="chatbot-message-content">
                            <strong>CASHiQ 챗봇</strong>
                            <p>안녕하세요! 무엇을 도와드릴까요?</p>
                            <p class="text-xs mt-2">아래 자주 묻는 질문을 선택하시거나 직접 질문을 입력해주세요.</p>
                        </div>
                    </div>
                    <div class="chatbot-faq-buttons">
                        ${faqData.map((faq, index) => `
                            <button onclick="showFAQAnswer(${index})" class="chatbot-faq-btn">
                                <i class="fas fa-question-circle mr-2"></i>Q${faq.id}. ${faq.question}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        id="chatbot-input" 
                        placeholder="질문을 입력하세요..." 
                        onkeypress="handleChatbotEnter(event)"
                    >
                    <button onclick="sendChatbotMessage()" class="chatbot-send-btn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>

            <!-- 유료회원 1대1 답변 창 -->
            <div id="premium-chat-window" class="chatbot-window chatbot-hidden premium-chat">
                <div class="chatbot-header premium-header">
                    <div class="chatbot-header-content">
                        <i class="fas fa-crown mr-2"></i>
                        <div>
                            <div class="chatbot-title">유료회원 1대1 답변</div>
                            <div class="chatbot-subtitle">전문 상담사 연결</div>
                        </div>
                    </div>
                    <button onclick="closePremiumChat()" class="chatbot-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chatbot-body" id="premium-chat-body">
                    <div class="chatbot-welcome premium-welcome">
                        <div class="chatbot-avatar premium-avatar">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <div class="chatbot-message-content">
                            <strong>전문 상담사</strong>
                            <p>💎 유료회원 전용 1대1 상담입니다.</p>
                            <p class="text-xs mt-2">기능, 문제점, 요구사항을 자유롭게 문의해주세요.</p>
                        </div>
                    </div>
                </div>
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        id="premium-chat-input" 
                        placeholder="문의 내용을 입력하세요..." 
                        onkeypress="handlePremiumChatEnter(event)"
                    >
                    <button onclick="sendPremiumMessage()" class="chatbot-send-btn premium-send-btn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>

            <!-- 챗봇 선택 메뉴 -->
            <div id="chatbot-menu" class="chatbot-menu chatbot-hidden">
                <button onclick="openChatbot()" class="chatbot-menu-btn">
                    <i class="fas fa-robot mr-2"></i>
                    자동응답 챗봇
                    <span class="text-xs block mt-1">FAQ 자주 묻는 질문</span>
                </button>
                <button onclick="openPremiumChat()" class="chatbot-menu-btn premium-menu-btn">
                    <i class="fas fa-crown mr-2"></i>
                    유료회원 1대1 답변
                    <span class="text-xs block mt-1">전문 상담사 연결</span>
                </button>
            </div>
        `;

        // 페이지에 챗봇 추가
        const chatbotContainer = document.createElement('div');
        chatbotContainer.innerHTML = chatbotHTML;
        document.body.appendChild(chatbotContainer);
    }

    // 챗봇 스타일 추가
    function addChatbotStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 챗봇 버튼 */
            .chatbot-button {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                transition: all 0.3s ease;
                z-index: 9998;
            }

            .chatbot-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
            }

            .chatbot-button i {
                color: white;
                font-size: 28px;
            }

            .chatbot-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ef4444;
                color: white;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                border: 2px solid white;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.1);
                    opacity: 0.8;
                }
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }

            .chatbot-button.bounce {
                animation: bounce 2s ease infinite;
            }

            /* 챗봇 메뉴 */
            .chatbot-menu {
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                padding: 8px;
                z-index: 9999;
                min-width: 250px;
            }

            .chatbot-menu-btn {
                width: 100%;
                padding: 16px;
                background: white;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: left;
                font-size: 14px;
                font-weight: 600;
                color: #374151;
                margin-bottom: 8px;
            }

            .chatbot-menu-btn:last-child {
                margin-bottom: 0;
            }

            .chatbot-menu-btn:hover {
                background: #f3f4f6;
                border-color: #667eea;
                transform: translateX(-4px);
            }

            .premium-menu-btn {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                color: white;
                border: none;
            }

            .premium-menu-btn:hover {
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
            }

            /* 챗봇 창 */
            .chatbot-window {
                position: fixed;
                bottom: 100px;
                right: 30px;
                width: 400px;
                max-width: calc(100vw - 60px);
                height: 600px;
                max-height: calc(100vh - 150px);
                background: white;
                border-radius: 16px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
            }

            .chatbot-hidden {
                display: none !important;
            }

            /* 챗봇 헤더 */
            .chatbot-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .premium-header {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            }

            .chatbot-header-content {
                display: flex;
                align-items: center;
            }

            .chatbot-title {
                font-size: 18px;
                font-weight: 700;
            }

            .chatbot-subtitle {
                font-size: 12px;
                opacity: 0.9;
                margin-top: 2px;
            }

            .chatbot-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .chatbot-close:hover {
                background: rgba(255, 255, 255, 0.3);
            }

            /* 챗봇 본문 */
            .chatbot-body {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
                background: #f9fafb;
            }

            .chatbot-welcome {
                display: flex;
                gap: 12px;
                margin-bottom: 20px;
                animation: slideIn 0.5s ease;
            }

            .chatbot-avatar {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }

            .premium-avatar {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            }

            .chatbot-message-content {
                background: white;
                padding: 12px 16px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                flex: 1;
            }

            .chatbot-message-content strong {
                display: block;
                margin-bottom: 8px;
                color: #667eea;
                font-size: 14px;
            }

            .premium-welcome .chatbot-message-content strong {
                color: #f59e0b;
            }

            .chatbot-faq-buttons {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .chatbot-faq-btn {
                background: white;
                border: 2px solid #e5e7eb;
                padding: 12px 16px;
                border-radius: 8px;
                text-align: left;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 13px;
                color: #374151;
            }

            .chatbot-faq-btn:hover {
                border-color: #667eea;
                background: #f3f4f6;
                transform: translateX(4px);
            }

            .chatbot-user-message {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 16px;
                animation: slideIn 0.3s ease;
            }

            .chatbot-user-message .chatbot-message-content {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                max-width: 80%;
            }

            .chatbot-bot-message {
                display: flex;
                gap: 12px;
                margin-bottom: 16px;
                animation: slideIn 0.3s ease;
            }

            /* 챗봇 푸터 */
            .chatbot-footer {
                padding: 16px;
                background: white;
                border-top: 1px solid #e5e7eb;
                display: flex;
                gap: 8px;
            }

            .chatbot-footer input {
                flex: 1;
                padding: 12px 16px;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                font-size: 14px;
                transition: all 0.3s ease;
            }

            .chatbot-footer input:focus {
                outline: none;
                border-color: #667eea;
            }

            .chatbot-send-btn {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .chatbot-send-btn:hover {
                transform: scale(1.05);
            }

            .premium-send-btn {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* 태블릿 반응형 (768px ~ 1024px) */
            @media (min-width: 641px) and (max-width: 1024px) {
                .chatbot-window {
                    width: 450px;
                    height: 650px;
                }

                .chatbot-button {
                    width: 64px;
                    height: 64px;
                }

                .chatbot-button i {
                    font-size: 30px;
                }

                .chatbot-menu {
                    min-width: 280px;
                }

                .chatbot-faq-btn {
                    font-size: 14px;
                    padding: 14px 18px;
                }
            }

            /* 모바일 반응형 (~ 640px) */
            @media (max-width: 640px) {
                .chatbot-window {
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    max-height: 100%;
                    border-radius: 0;
                }

                .chatbot-button {
                    bottom: 20px;
                    right: 20px;
                    width: 56px;
                    height: 56px;
                }

                .chatbot-button i {
                    font-size: 26px;
                }

                .chatbot-menu {
                    bottom: 90px;
                    right: 20px;
                    left: 20px;
                    min-width: auto;
                }

                .chatbot-title {
                    font-size: 16px;
                }

                .chatbot-subtitle {
                    font-size: 11px;
                }

                .chatbot-faq-btn {
                    font-size: 12px;
                    padding: 10px 14px;
                }

                .chatbot-message-content {
                    font-size: 14px;
                }

                .chatbot-footer input {
                    font-size: 14px;
                    padding: 10px 14px;
                }

                .chatbot-send-btn {
                    width: 44px;
                    height: 44px;
                }
            }

            /* 큰 화면 (1920px 이상) */
            @media (min-width: 1920px) {
                .chatbot-window {
                    width: 480px;
                    height: 700px;
                }

                .chatbot-button {
                    width: 70px;
                    height: 70px;
                }

                .chatbot-button i {
                    font-size: 32px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 전역 함수들
    window.toggleChatbotMenu = function() {
        const menu = document.getElementById('chatbot-menu');
        const chatbot = document.getElementById('chatbot-window');
        const premiumChat = document.getElementById('premium-chat-window');
        
        if (chatbot && !chatbot.classList.contains('chatbot-hidden')) {
            closeChatbot();
            return;
        }
        if (premiumChat && !premiumChat.classList.contains('chatbot-hidden')) {
            closePremiumChat();
            return;
        }
        
        menu.classList.toggle('chatbot-hidden');
    };

    window.openChatbot = function() {
        document.getElementById('chatbot-menu').classList.add('chatbot-hidden');
        document.getElementById('chatbot-window').classList.remove('chatbot-hidden');
        document.getElementById('premium-chat-window').classList.add('chatbot-hidden');
        document.getElementById('chatbot-badge').style.display = 'none';
    };

    window.closeChatbot = function() {
        document.getElementById('chatbot-window').classList.add('chatbot-hidden');
    };

    window.openPremiumChat = function() {
        // 로그인 확인
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
        
        if (!currentUser) {
            alert('로그인이 필요한 서비스입니다.\n\n로그인 페이지로 이동합니다.');
            window.location.href = '/auth/login.html';
            return;
        }

        // 유료회원 확인
        if (currentUser.type !== 'paid') {
            alert('💎 유료회원 전용 서비스입니다.\n\n유료회원으로 업그레이드하시면 1대1 전문 상담을 이용하실 수 있습니다.');
            return;
        }

        document.getElementById('chatbot-menu').classList.add('chatbot-hidden');
        document.getElementById('chatbot-window').classList.add('chatbot-hidden');
        document.getElementById('premium-chat-window').classList.remove('chatbot-hidden');
    };

    window.closePremiumChat = function() {
        document.getElementById('premium-chat-window').classList.add('chatbot-hidden');
    };

    window.showFAQAnswer = function(index) {
        const faq = faqData[index];
        const chatBody = document.getElementById('chatbot-body');
        
        // 사용자 질문 추가
        const userMsg = document.createElement('div');
        userMsg.className = 'chatbot-user-message';
        userMsg.innerHTML = `
            <div class="chatbot-message-content">
                ${faq.question}
            </div>
        `;
        chatBody.appendChild(userMsg);
        
        // 봇 답변 추가
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chatbot-bot-message';
            botMsg.innerHTML = `
                <div class="chatbot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="chatbot-message-content">
                    <strong>CASHiQ 챗봇</strong>
                    <p style="white-space: pre-line; line-height: 1.6;">${faq.answer}</p>
                </div>
            `;
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
        
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    window.sendChatbotMessage = function() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        const chatBody = document.getElementById('chatbot-body');
        
        // 사용자 메시지 추가
        const userMsg = document.createElement('div');
        userMsg.className = 'chatbot-user-message';
        userMsg.innerHTML = `
            <div class="chatbot-message-content">
                ${message}
            </div>
        `;
        chatBody.appendChild(userMsg);
        
        input.value = '';
        
        // 키워드 검색으로 답변 찾기
        const matchedFAQ = faqData.find(faq => 
            faq.keywords.some(keyword => message.includes(keyword))
        );
        
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chatbot-bot-message';
            
            if (matchedFAQ) {
                botMsg.innerHTML = `
                    <div class="chatbot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="chatbot-message-content">
                        <strong>CASHiQ 챗봇</strong>
                        <p style="white-space: pre-line; line-height: 1.6;">${matchedFAQ.answer}</p>
                    </div>
                `;
            } else {
                botMsg.innerHTML = `
                    <div class="chatbot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="chatbot-message-content">
                        <strong>CASHiQ 챗봇</strong>
                        <p>죄송합니다. 정확한 답변을 찾지 못했습니다.</p>
                        <p class="mt-2">💎 유료회원이시라면 <strong>'유료회원 1대1 답변'</strong>을 통해 전문 상담사에게 문의해주세요.</p>
                        <p class="mt-2 text-sm">위의 자주 묻는 질문 버튼을 클릭하시거나, 다른 키워드로 다시 질문해주세요.</p>
                    </div>
                `;
            }
            
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
        
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    window.handleChatbotEnter = function(event) {
        if (event.key === 'Enter') {
            sendChatbotMessage();
        }
    };

    window.sendPremiumMessage = function() {
        const input = document.getElementById('premium-chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
        const chatBody = document.getElementById('premium-chat-body');
        
        // 사용자 메시지 추가
        const userMsg = document.createElement('div');
        userMsg.className = 'chatbot-user-message';
        userMsg.innerHTML = `
            <div class="chatbot-message-content">
                ${message}
            </div>
        `;
        chatBody.appendChild(userMsg);
        
        input.value = '';
        
        // 1대1 문의 저장
        let inquiries = JSON.parse(localStorage.getItem('premiumInquiries') || '[]');
        const inquiry = {
            id: Date.now(),
            userId: currentUser.id,
            userName: currentUser.name,
            userEmail: currentUser.email,
            message: message,
            status: 'pending',
            createdAt: new Date().toISOString(),
            reply: null,
            repliedAt: null
        };
        inquiries.push(inquiry);
        localStorage.setItem('premiumInquiries', JSON.stringify(inquiries));
        
        // 자동 응답
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chatbot-bot-message';
            botMsg.innerHTML = `
                <div class="chatbot-avatar premium-avatar">
                    <i class="fas fa-user-tie"></i>
                </div>
                <div class="chatbot-message-content">
                    <strong>전문 상담사</strong>
                    <p>문의가 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 답변드리겠습니다.</p>
                    <p class="mt-2 text-sm text-gray-600">문의번호: #${inquiry.id}</p>
                    <p class="text-sm text-gray-600">접수일시: ${new Date().toLocaleString('ko-KR')}</p>
                </div>
            `;
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
        
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    window.handlePremiumChatEnter = function(event) {
        if (event.key === 'Enter') {
            sendPremiumMessage();
        }
    };

    // 챗봇 버튼 클릭 이벤트
    document.addEventListener('click', function(e) {
        if (e.target.closest('#chatbot-button')) {
            toggleChatbotMenu();
        }
    });

    // 초기화
    function init() {
        addChatbotStyles();
        createChatbotHTML();
        
        // 챗봇 버튼 애니메이션 시작
        setTimeout(() => {
            const chatbotButton = document.getElementById('chatbot-button');
            if (chatbotButton) {
                chatbotButton.classList.add('bounce');
                
                // 3초 후 바운스 애니메이션 제거
                setTimeout(() => {
                    chatbotButton.classList.remove('bounce');
                }, 6000);
            }
        }, 1000);
    }

    // 페이지 로드 시 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
