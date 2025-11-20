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
                    category: "서비스 차별화",
                    question: "타사 앱이나 플랫폼과 차이점은?",
                    answer: "CASHiQ는 동북아 최초 '종합 케어 플랫폼'입니다. 병원·의료진·간병·재활·지원정책까지 한곳에서 제공합니다.\n\n기존 성형·일반 병원 예약 앱과 달리 '환자·가족의 실질적 케어 전 과정'을 통합했습니다.\n\n의료정보 검색을 넘어 병원·간병·재활·정부지원·의료민원·커뮤니티·상조회사·납골당 등 현실에서 반드시 필요한 모든 케어 요소를 하나로 통합한 국내 최초·동북아 최초 플랫폼입니다.",
                    keywords: ["차이점", "타사", "비교", "특징", "플랫폼"]
                },
                {
                    id: 2,
                    category: "서비스 특징",
                    question: "기존 병원 예약 앱과는 어떻게 다른가요?",
                    answer: "CASHiQ는 환자와 가족이 겪는 현실적 어려움의 '전체 여정'을 통합 관리하도록 설계된 종합 케어 플랫폼입니다.\n\n✅ 3,500여 병원·1,200명 간병인 DB\n✅ 병원 검색·인터넷 예약·접수 현황\n✅ 전문의 정보·지역별 비교\n✅ 간병인 자격증·전문분야 매칭\n\n단순 예약을 넘어 환자 케어 전 과정을 '원스톱'으로 제공합니다.",
                    keywords: ["병원", "예약", "앱", "다른점", "특징"]
                },
                {
                    id: 3,
                    category: "간병 기능",
                    question: "간병인 관련 특별한 기능이 있나요?",
                    answer: "네! 'AI 실시간 번역 간병일지' 기능이 있습니다.\n\n현재 한국 간병인 중 70~80%가 중국 국적입니다. 언어 장벽 문제를 해결하기 위해:\n\n✅ 간병인 중국어 음성 → 자동 한국어 번역\n✅ 간병일지 자동 저장 후 실시간 전송\n✅ 식사·약·배변·운동 상태 자동 구조화\n✅ 보호자·간병인 간 커뮤니케이션 자동 번역\n\n동북아 최초 '다국어 AI 간병 커뮤니케이션 기능'입니다.",
                    keywords: ["간병인", "간병", "중국인", "번역", "AI", "일지"]
                },
                {
                    id: 4,
                    category: "메디컬 렌즈",
                    question: "메디컬 렌즈 기능은 무엇인가요?",
                    answer: "약품·수액 라벨을 촬영하면 성분·효능·치료 목적까지 자동 분석하는 기능입니다!\n\n📱 스마트폰으로 약품·수액 라벨 촬영\n🤖 AI가 성분·투여 목적·주의사항·부작용·치료 프로토콜 분석\n💾 자동으로 간병일지에 저장\n\n보호자가 가장 궁금해하는 '지금 환자가 어떤 약을 투여받고 있는가?'를 즉시 확인할 수 있습니다.",
                    keywords: ["메디컬", "렌즈", "약품", "수액", "분석", "AI"]
                },
                {
                    id: 5,
                    category: "환자 권익",
                    question: "환자와 보호자 권익을 위한 기능은 없나요?",
                    answer: "네! 병원·의료진 '무기명 평가제'를 도입했습니다.\n\n환자와 보호자가 불이익 걱정 없이 평가할 수 있도록:\n\n✅ 병원 무기명 평가\n✅ 의료진 태도·설명충실도 평가\n✅ 간병 품질 평가\n✅ 병원 내부에 노출되지 않는 안전한 평가 방식\n\n또한 보건복지부·국민신문고·건강보험공단·심평원·의료분쟁조정중재원·국가인권위원회·관할 보건소로 직접 연결되는 의료 민원 접수 기능도 제공합니다.",
                    keywords: ["권익", "평가", "민원", "불만", "보호"]
                },
                {
                    id: 6,
                    category: "종합 케어",
                    question: "종합 케어 플랫폼 기능을 충분히 제공하나요?",
                    answer: "네! 국내 최초로 '케어 생애주기 전체'를 연결했습니다.\n\n제공 기능:\n🏥 뇌질환 전문 병원 검색\n👨‍⚕️ 간병인 매칭\n💪 재활운동 100+ 영상\n📝 간병일지 기록·공유\n📷 메디컬 렌즈 (약·수액 분석)\n📋 정부 지원정책 안내\n⚰️ 장례·상조회사·납골당 검색\n🛒 간병용품 중고거래\n💝 뇌사 기증 절차\n💬 케어 커뮤니티\n\n케어 과정에서 실제로 마주치는 거의 모든 문제를 해결하도록 설계되었습니다.",
                    keywords: ["종합", "케어", "기능", "서비스", "제공"]
                },
                {
                    id: 7,
                    category: "개발자 신뢰성",
                    question: "개발자가 전문 의료인인가요? 신뢰할 만한가요?",
                    answer: "개발자는 2017년 뇌내출혈, 2025년 급성 뇌경색을 겪으며 두 차례 큰 위기를 넘긴 환자입니다.\n\n실제 경험으로 겪은:\n❌ 부족한 정보\n❌ 불친절한 의료 환경\n❌ 언어장벽\n❌ 기록 부재\n❌ 보호자의 불안\n❌ 재활 정보 부족\n\n이러한 문제들을 해결하고자 공익을 감안하여 직접 설계한 플랫폼입니다. 환자·가족의 마음을 가장 잘 아는 서비스입니다.",
                    keywords: ["개발자", "신뢰", "전문", "의료", "경험"]
                },
                {
                    id: 8,
                    category: "다국어 지원",
                    question: "왜 다국어(영어, 중국어, 일본어)를 지원하나요?",
                    answer: "외국인 환자·체류자·의료관광객까지 지원하기 위함입니다.\n\n지원 언어:\n🇰🇷 한국어\n🇺🇸 영어\n🇨🇳 중국어\n🇯🇵 일본어\n\n외국인 환자·유학생·근로자·의료관광객도 활용 가능합니다. 동북아시아에서 이러한 범위의 다국어 케어 플랫폼은 전례가 없으며, 공항·여행·보험 업종과 연계하여 해외 시장 개척도 목표로 합니다.",
                    keywords: ["다국어", "영어", "중국어", "일본어", "외국인"]
                },
                {
                    id: 9,
                    category: "케어 범위",
                    question: "어디까지 실질적 케어가 가능한가요?",
                    answer: "병원 → 간병 → 재활 → 지원정책까지 한국 최초 '케어 풀라인 서비스'입니다.\n\n케어 여정 전체:\n1️⃣ 병원 선택\n2️⃣ 간병 매칭\n3️⃣ 재활 정보\n4️⃣ 정부 지원\n5️⃣ 의료 불만 처리\n6️⃣ 사후 절차 안내\n7️⃣ 커뮤니티로 정보 공유\n\n환자·가족의 막막함을 줄여주는 '케어 지도(Map)' 역할을 합니다.",
                    keywords: ["범위", "케어", "가능", "서비스", "실질적"]
                },
                {
                    id: 10,
                    category: "유료화 이유",
                    question: "공익을 원하면 무료로 배포해야 하는 거 아닌가요?",
                    answer: "지금까지 개발자 사비로 힘들게 제작되었습니다.\n\n유료화 이유:\n💰 추가 개발과 지속적 업데이트\n📈 더 많은 간병인 확보\n🤖 AI 번역 고도화\n📊 의료정보 자동 분석\n📹 재활 영상 확대\n🏥 병원 실시간 예약 시스템 고도화\n\n수익은 케어 약자 지원 목적의 서비스 확장에 재투자될 예정입니다. 100% 수익 목적이 아닌 지속 가능한 서비스를 위한 선택입니다.\n\n목표: 간병비 50% 절감",
                    keywords: ["유료", "무료", "공익", "이유", "가격"]
                },
                {
                    id: 11,
                    category: "회원가입",
                    question: "회원가입은 어떻게 하나요?",
                    answer: "상단 메뉴의 '회원가입' 버튼을 클릭하시거나, 로그인 페이지에서 '회원가입' 링크를 클릭하여 가입하실 수 있습니다. 이메일, 이름, 비밀번호만 입력하시면 됩니다.",
                    keywords: ["회원가입", "가입", "등록", "계정"]
                },
                {
                    id: 12,
                    category: "멤버십",
                    question: "프리미엄 멤버십의 혜택은 무엇인가요?",
                    answer: "프리미엄 멤버십은 무제한 의료정보 검색, 전문가 1:1 상담, 프리미엄 재활운동 영상, 광고 제거 등의 혜택을 제공합니다. 1년권 68,000원, 2년권 100,000원입니다.",
                    keywords: ["프리미엄", "멤버십", "유료", "결제", "혜택"]
                }
            ],
            en: [
                {
                    id: 1,
                    category: "Service Differentiation",
                    question: "What's the difference from other apps or platforms?",
                    answer: "CASHiQ is Northeast Asia's first 'comprehensive care platform'. We provide hospitals, medical staff, caregiving, rehabilitation, and support policies all in one place.\n\nUnlike existing cosmetic/general hospital booking apps, we integrate the 'entire practical care process for patients and families'.\n\nWe go beyond medical information search to integrate all care elements essential in reality: hospitals, caregiving, rehabilitation, government support, medical complaints, community, funeral services, columbarium, etc. This is Korea's first and Northeast Asia's first platform of its kind.",
                    keywords: ["difference", "comparison", "features", "platform", "unique"]
                },
                {
                    id: 2,
                    category: "Service Features",
                    question: "How is it different from existing hospital booking apps?",
                    answer: "CASHiQ is a comprehensive care platform designed to manage the 'entire journey' of realistic difficulties faced by patients and families.\n\n✅ 3,500+ hospitals, 1,200+ caregivers DB\n✅ Hospital search, online booking, admission status\n✅ Specialist information, regional comparison\n✅ Caregiver certification & specialization matching\n\nWe provide a 'one-stop' solution for the entire patient care process, beyond simple bookings.",
                    keywords: ["hospital", "booking", "app", "different", "features"]
                },
                {
                    id: 3,
                    category: "Caregiving Features",
                    question: "Are there special features for caregivers?",
                    answer: "Yes! We have an 'AI Real-time Translation Care Diary' feature.\n\n70-80% of caregivers in Korea are Chinese nationals. To solve language barrier issues:\n\n✅ Caregiver's Chinese speech → automatic Korean translation\n✅ Care diary auto-saved and sent in real-time\n✅ Meal, medication, excretion, exercise status auto-structured\n✅ Guardian-caregiver communication auto-translation\n\nNortheast Asia's first 'multilingual AI caregiving communication feature'.",
                    keywords: ["caregiver", "caregiving", "chinese", "translation", "AI", "diary"]
                },
                {
                    id: 4,
                    category: "Medical Lens",
                    question: "What is the Medical Lens feature?",
                    answer: "It automatically analyzes ingredients, efficacy, and treatment purpose when you photograph medication or IV labels!\n\n📱 Photograph medication/IV labels with smartphone\n🤖 AI analyzes ingredients, administration purpose, precautions, side effects, treatment protocol\n💾 Automatically saved to care diary\n\nInstantly check what the guardian is most curious about: 'What medication is the patient receiving right now?'",
                    keywords: ["medical", "lens", "medication", "IV", "analysis", "AI"]
                },
                {
                    id: 5,
                    category: "Patient Rights",
                    question: "Are there features to protect patient and guardian rights?",
                    answer: "Yes! We introduced an 'anonymous evaluation system' for hospitals and medical staff.\n\nSo patients and guardians can evaluate without fear of disadvantage:\n\n✅ Anonymous hospital evaluation\n✅ Medical staff attitude & explanation thoroughness evaluation\n✅ Caregiving quality evaluation\n✅ Safe evaluation method not exposed to hospital internally\n\nWe also provide medical complaint submission features directly connected to: Ministry of Health and Welfare, National Petition Center, National Health Insurance Service, Health Insurance Review & Assessment Service, Korea Medical Dispute Mediation & Arbitration Agency, National Human Rights Commission, and local health centers.",
                    keywords: ["rights", "evaluation", "complaint", "dissatisfaction", "protection"]
                },
                {
                    id: 6,
                    category: "Comprehensive Care",
                    question: "Do you fully provide comprehensive care platform features?",
                    answer: "Yes! Korea's first to connect the 'entire care lifecycle'.\n\nProvided features:\n🏥 Brain disease specialized hospital search\n👨‍⚕️ Caregiver matching\n💪 100+ rehabilitation exercise videos\n📝 Care diary recording & sharing\n📷 Medical Lens (medication/IV analysis)\n📋 Government support policy guidance\n⚰️ Funeral, funeral service company, columbarium search\n🛒 Care supplies secondhand trading\n💝 Brain death donation procedures\n💬 Care community\n\nDesigned to solve almost all problems actually encountered in the care process.",
                    keywords: ["comprehensive", "care", "features", "service", "provision"]
                },
                {
                    id: 7,
                    category: "Developer Credibility",
                    question: "Is the developer a medical professional? Is it trustworthy?",
                    answer: "The developer experienced cerebral hemorrhage in 2017 and acute cerebral infarction in 2025, overcoming two major crises as a patient.\n\nExperienced firsthand:\n❌ Insufficient information\n❌ Unfriendly medical environment\n❌ Language barriers\n❌ Lack of records\n❌ Guardian's anxiety\n❌ Lack of rehabilitation information\n\nThis platform was designed directly to solve these problems, considering public interest. It's a service that best understands the hearts of patients and families.",
                    keywords: ["developer", "trust", "professional", "medical", "experience"]
                },
                {
                    id: 8,
                    category: "Multilingual Support",
                    question: "Why support multiple languages (English, Chinese, Japanese)?",
                    answer: "To support foreign patients, residents, and medical tourists.\n\nSupported languages:\n🇰🇷 Korean\n🇺🇸 English\n🇨🇳 Chinese\n🇯🇵 Japanese\n\nForeign patients, international students, workers, and medical tourists can also use it. There's no precedent for multilingual care platforms of this scope in Northeast Asia. We also aim to expand into overseas markets in connection with airports, travel, and insurance industries.",
                    keywords: ["multilingual", "english", "chinese", "japanese", "foreign"]
                },
                {
                    id: 9,
                    category: "Care Scope",
                    question: "How far does practical care extend?",
                    answer: "Hospital → Caregiving → Rehabilitation → Support Policies. Korea's first 'care full-line service'.\n\nEntire care journey:\n1️⃣ Hospital selection\n2️⃣ Caregiver matching\n3️⃣ Rehabilitation information\n4️⃣ Government support\n5️⃣ Medical complaint handling\n6️⃣ Post-care procedure guidance\n7️⃣ Information sharing through community\n\nServes as a 'care map' to reduce the helplessness of patients and families.",
                    keywords: ["scope", "care", "possible", "service", "practical"]
                },
                {
                    id: 10,
                    category: "Paid Service Reason",
                    question: "If it's for public interest, shouldn't it be free?",
                    answer: "It has been painstakingly developed with the developer's own funds.\n\nReasons for paid service:\n💰 Additional development and continuous updates\n📈 Securing more caregivers\n🤖 AI translation advancement\n📊 Medical information automatic analysis\n📹 Rehabilitation video expansion\n🏥 Hospital real-time booking system advancement\n\nRevenue will be reinvested in service expansion to support vulnerable care recipients. It's not 100% profit-oriented, but a choice for sustainable service.\n\nGoal: 50% reduction in caregiving costs",
                    keywords: ["paid", "free", "public", "reason", "price"]
                },
                {
                    id: 11,
                    category: "Sign Up",
                    question: "How do I sign up?",
                    answer: "Click the 'Sign Up' button in the top menu or click the 'Sign Up' link on the login page. You only need to enter your email, name, and password.",
                    keywords: ["signup", "register", "account", "join"]
                },
                {
                    id: 12,
                    category: "Membership",
                    question: "What are the premium membership benefits?",
                    answer: "Premium membership provides unlimited medical information search, 1:1 expert consultation, premium rehabilitation videos, ad removal, etc. 1-year: ₩68,000, 2-year: ₩100,000.",
                    keywords: ["premium", "membership", "paid", "benefits"]
                }
            ],
            zh: [
                {
                    id: 1,
                    category: "服务差异化",
                    question: "与其他应用或平台有什么区别？",
                    answer: "CASHiQ是东北亚首个'综合护理平台'。在一处提供医院、医护人员、护理、康复、支持政策。\n\n与现有整形、普通医院预约应用不同，我们整合了'患者和家属的整个实际护理过程'。\n\n超越医疗信息搜索，整合现实中必需的所有护理要素：医院、护理、康复、政府支持、医疗投诉、社区、殡葬公司、骨灰堂等。这是韩国首个、东北亚首个此类平台。",
                    keywords: ["区别", "比较", "特点", "平台", "独特"]
                },
                {
                    id: 2,
                    category: "服务特点",
                    question: "与现有医院预约应用有何不同？",
                    answer: "CASHiQ是一个综合护理平台，旨在管理患者和家属面临的现实困难的'整个旅程'。\n\n✅ 3,500多家医院、1,200多名护理员数据库\n✅ 医院搜索、在线预约、入院状态\n✅ 专家信息、地区比较\n✅ 护理员资格证和专业匹配\n\n提供超越简单预约的整个患者护理过程的'一站式'解决方案。",
                    keywords: ["医院", "预约", "应用", "不同", "特点"]
                },
                {
                    id: 3,
                    category: "护理功能",
                    question: "护理员有什么特殊功能吗？",
                    answer: "有！我们有'AI实时翻译护理日记'功能。\n\n韩国70-80%的护理员是中国籍。为解决语言障碍问题：\n\n✅ 护理员中文语音 → 自动韩语翻译\n✅ 护理日记自动保存并实时发送\n✅ 饮食、药物、排泄、运动状态自动结构化\n✅ 监护人-护理员沟通自动翻译\n\n东北亚首个'多语言AI护理沟通功能'。",
                    keywords: ["护理员", "护理", "中国", "翻译", "AI", "日记"]
                },
                {
                    id: 4,
                    category: "医疗镜头",
                    question: "医疗镜头功能是什么？",
                    answer: "拍摄药品、输液标签后自动分析成分、功效、治疗目的的功能！\n\n📱 用智能手机拍摄药品/输液标签\n🤖 AI分析成分、给药目的、注意事项、副作用、治疗方案\n💾 自动保存到护理日记\n\n立即查看监护人最好奇的'患者现在正在接受什么药物？'",
                    keywords: ["医疗", "镜头", "药品", "输液", "分析", "AI"]
                },
                {
                    id: 5,
                    category: "患者权益",
                    question: "有保护患者和监护人权益的功能吗？",
                    answer: "有！我们引入了医院和医护人员'匿名评价系统'。\n\n让患者和监护人可以在不担心不利后果的情况下进行评价：\n\n✅ 医院匿名评价\n✅ 医护人员态度和说明充分度评价\n✅ 护理质量评价\n✅ 医院内部不会曝光的安全评价方式\n\n我们还提供直接连接以下机构的医疗投诉提交功能：卫生福利部、国民信访中心、国民健康保险公团、健康保险审查评价院、韩国医疗纠纷调解仲裁院、国家人权委员会、管辖保健所。",
                    keywords: ["权益", "评价", "投诉", "不满", "保护"]
                },
                {
                    id: 6,
                    category: "综合护理",
                    question: "能充分提供综合护理平台功能吗？",
                    answer: "能！韩国首个连接'整个护理生命周期'。\n\n提供功能：\n🏥 脑疾病专科医院搜索\n👨‍⚕️ 护理员匹配\n💪 100多个康复运动视频\n📝 护理日记记录与分享\n📷 医疗镜头（药品/输液分析）\n📋 政府支持政策指导\n⚰️ 丧葬、殡葬公司、骨灰堂搜索\n🛒 护理用品二手交易\n💝 脑死亡捐献程序\n💬 护理社区\n\n旨在解决护理过程中实际遇到的几乎所有问题。",
                    keywords: ["综合", "护理", "功能", "服务", "提供"]
                },
                {
                    id: 7,
                    category: "开发者可信度",
                    question: "开发者是医疗专业人士吗？值得信赖吗？",
                    answer: "开发者于2017年经历脑内出血，2025年经历急性脑梗塞，作为患者克服了两次重大危机。\n\n亲身经历：\n❌ 信息不足\n❌ 不友好的医疗环境\n❌ 语言障碍\n❌ 缺乏记录\n❌ 监护人的焦虑\n❌ 缺乏康复信息\n\n为解决这些问题，考虑公共利益直接设计了这个平台。是最了解患者和家属心情的服务。",
                    keywords: ["开发者", "信任", "专业", "医疗", "经验"]
                },
                {
                    id: 8,
                    category: "多语言支持",
                    question: "为什么支持多语言（英语、中文、日语）？",
                    answer: "为了支持外国患者、居留者、医疗旅游者。\n\n支持语言：\n🇰🇷 韩语\n🇺🇸 英语\n🇨🇳 中文\n🇯🇵 日语\n\n外国患者、留学生、劳工、医疗旅游者也可以使用。在东北亚，这种范围的多语言护理平台前所未有。我们还计划与机场、旅游、保险行业联系开拓海外市场。",
                    keywords: ["多语言", "英语", "中文", "日语", "外国人"]
                },
                {
                    id: 9,
                    category: "护理范围",
                    question: "实际护理能延伸到什么程度？",
                    answer: "医院 → 护理 → 康复 → 支持政策。韩国首个'护理全线服务'。\n\n整个护理旅程：\n1️⃣ 医院选择\n2️⃣ 护理员匹配\n3️⃣ 康复信息\n4️⃣ 政府支持\n5️⃣ 医疗投诉处理\n6️⃣ 后续程序指导\n7️⃣ 通过社区分享信息\n\n作为'护理地图'减少患者和家属的无助感。",
                    keywords: ["范围", "护理", "可能", "服务", "实际"]
                },
                {
                    id: 10,
                    category: "付费服务原因",
                    question: "如果是为了公共利益，不应该免费吗？",
                    answer: "到目前为止，一直用开发者自己的资金艰苦开发。\n\n付费原因：\n💰 额外开发和持续更新\n📈 确保更多护理员\n🤖 AI翻译高级化\n📊 医疗信息自动分析\n📹 康复视频扩展\n🏥 医院实时预约系统高级化\n\n收入将再投资于服务扩展，以支持弱势护理对象。不是100%以利润为目的，而是为了可持续服务的选择。\n\n目标：护理费减少50%",
                    keywords: ["付费", "免费", "公益", "原因", "价格"]
                },
                {
                    id: 11,
                    category: "会员注册",
                    question: "如何注册会员？",
                    answer: "点击顶部菜单的'会员注册'按钮，或在登录页面点击'会员注册'链接即可注册。只需输入邮箱、姓名、密码。",
                    keywords: ["注册", "会员", "账号", "加入"]
                },
                {
                    id: 12,
                    category: "会员资格",
                    question: "高级会员有什么好处？",
                    answer: "高级会员可享受无限医疗信息搜索、专家1:1咨询、高级康复视频、去广告等福利。1年：68,000韩元，2年：100,000韩元。",
                    keywords: ["高级", "会员", "付费", "福利"]
                }
            ],
            ja: [
                {
                    id: 1,
                    category: "サービス差別化",
                    question: "他社のアプリやプラットフォームとの違いは？",
                    answer: "CASHiQは東北アジア初の「総合ケアプラットフォーム」です。病院・医療スタッフ・介護・リハビリ・支援政策を一か所で提供します。\n\n既存の美容整形・一般病院予約アプリとは異なり、「患者・家族の実質的なケア全過程」を統合しました。\n\n医療情報検索を超えて、病院・介護・リハビリ・政府支援・医療苦情・コミュニティ・葬儀会社・納骨堂など、現実で必須のすべてのケア要素を統合した韓国初・東北アジア初のプラットフォームです。",
                    keywords: ["違い", "比較", "特徴", "プラットフォーム", "独自"]
                },
                {
                    id: 2,
                    category: "サービス特徴",
                    question: "既存の病院予約アプリとはどう違いますか？",
                    answer: "CASHiQは患者と家族が直面する現実的な困難の「全行程」を統合管理するように設計された総合ケアプラットフォームです。\n\n✅ 3,500以上の病院・1,200人以上の介護士データベース\n✅ 病院検索・オンライン予約・受付状況\n✅ 専門医情報・地域別比較\n✅ 介護士資格・専門分野マッチング\n\n単純な予約を超えた患者ケア全過程の「ワンストップ」ソリューションを提供します。",
                    keywords: ["病院", "予約", "アプリ", "違い", "特徴"]
                },
                {
                    id: 3,
                    category: "介護機能",
                    question: "介護士に関する特別な機能はありますか？",
                    answer: "はい！「AIリアルタイム翻訳介護日誌」機能があります。\n\n韓国の介護士の70～80%が中国籍です。言語障壁の問題を解決するため：\n\n✅ 介護士の中国語音声 → 自動韓国語翻訳\n✅ 介護日誌自動保存後リアルタイム送信\n✅ 食事・薬・排泄・運動状態自動構造化\n✅ 保護者・介護士間コミュニケーション自動翻訳\n\n東北アジア初の「多言語AI介護コミュニケーション機能」です。",
                    keywords: ["介護士", "介護", "中国人", "翻訳", "AI", "日誌"]
                },
                {
                    id: 4,
                    category: "メディカルレンズ",
                    question: "メディカルレンズ機能とは何ですか？",
                    answer: "薬品・点滴ラベルを撮影すると成分・効能・治療目的まで自動分析する機能です！\n\n📱 スマートフォンで薬品/点滴ラベル撮影\n🤖 AIが成分・投与目的・注意事項・副作用・治療プロトコル分析\n💾 自動的に介護日誌に保存\n\n保護者が最も気になる「今患者はどんな薬を投与されているか？」を即座に確認できます。",
                    keywords: ["メディカル", "レンズ", "薬品", "点滴", "分析", "AI"]
                },
                {
                    id: 5,
                    category: "患者権益",
                    question: "患者と保護者の権益を保護する機能はありますか？",
                    answer: "はい！病院・医療スタッフの「匿名評価制度」を導入しました。\n\n患者と保護者が不利益を心配せずに評価できるよう：\n\n✅ 病院匿名評価\n✅ 医療スタッフの態度・説明充実度評価\n✅ 介護品質評価\n✅ 病院内部に露出されない安全な評価方式\n\nまた、保健福祉部・国民請願センター・国民健康保険公団・健康保険審査評価院・韓国医療紛争調停仲裁院・国家人権委員会・管轄保健所に直接接続される医療苦情提出機能も提供します。",
                    keywords: ["権益", "評価", "苦情", "不満", "保護"]
                },
                {
                    id: 6,
                    category: "総合ケア",
                    question: "総合ケアプラットフォーム機能を十分に提供しますか？",
                    answer: "はい！韓国初の「ケアライフサイクル全体」を連携しました。\n\n提供機能：\n🏥 脳疾患専門病院検索\n👨‍⚕️ 介護士マッチング\n💪 100以上のリハビリ運動動画\n📝 介護日誌記録・共有\n📷 メディカルレンズ（薬品/点滴分析）\n📋 政府支援政策案内\n⚰️ 葬儀・葬儀会社・納骨堂検索\n🛒 介護用品中古取引\n💝 脳死寄贈手続き\n💬 ケアコミュニティ\n\nケア過程で実際に遭遇するほぼすべての問題を解決するよう設計されています。",
                    keywords: ["総合", "ケア", "機能", "サービス", "提供"]
                },
                {
                    id: 7,
                    category: "開発者信頼性",
                    question: "開発者は医療専門家ですか？信頼できますか？",
                    answer: "開発者は2017年に脳内出血、2025年に急性脳梗塞を経験し、患者として2度の大きな危機を乗り越えました。\n\n実際の経験：\n❌ 情報不足\n❌ 不親切な医療環境\n❌ 言語障壁\n❌ 記録の欠如\n❌ 保護者の不安\n❌ リハビリ情報不足\n\nこれらの問題を解決するため、公益を考慮して直接設計したプラットフォームです。患者・家族の心を最もよく理解するサービスです。",
                    keywords: ["開発者", "信頼", "専門", "医療", "経験"]
                },
                {
                    id: 8,
                    category: "多言語サポート",
                    question: "なぜ多言語（英語、中国語、日本語）をサポートしますか？",
                    answer: "外国人患者・滞在者・医療観光客まで支援するためです。\n\nサポート言語：\n🇰🇷 韓国語\n🇺🇸 英語\n🇨🇳 中国語\n🇯🇵 日本語\n\n外国人患者・留学生・労働者・医療観光客も利用可能です。東北アジアでこの範囲の多言語ケアプラットフォームは前例がありません。空港・旅行・保険業種と連携して海外市場開拓も目標としています。",
                    keywords: ["多言語", "英語", "中国語", "日本語", "外国人"]
                },
                {
                    id: 9,
                    category: "ケア範囲",
                    question: "どこまで実質的なケアが可能ですか？",
                    answer: "病院 → 介護 → リハビリ → 支援政策まで。韓国初の「ケアフルラインサービス」。\n\nケア全行程：\n1️⃣ 病院選択\n2️⃣ 介護士マッチング\n3️⃣ リハビリ情報\n4️⃣ 政府支援\n5️⃣ 医療苦情処理\n6️⃣ 事後手続き案内\n7️⃣ コミュニティを通じた情報共有\n\n患者・家族の途方もなさを減らす「ケア地図（Map）」の役割を果たします。",
                    keywords: ["範囲", "ケア", "可能", "サービス", "実質的"]
                },
                {
                    id: 10,
                    category: "有料化理由",
                    question: "公益を望むなら無料で配布すべきではないですか？",
                    answer: "これまで開発者の自費で苦労して制作されました。\n\n有料化の理由：\n💰 追加開発と継続的なアップデート\n📈 より多くの介護士確保\n🤖 AI翻訳高度化\n📊 医療情報自動分析\n📹 リハビリ動画拡大\n🏥 病院リアルタイム予約システム高度化\n\n収益はケア弱者支援目的のサービス拡張に再投資される予定です。100%収益目的ではなく、持続可能なサービスのための選択です。\n\n目標：介護費50%削減",
                    keywords: ["有料", "無料", "公益", "理由", "価格"]
                },
                {
                    id: 11,
                    category: "会員登録",
                    question: "会員登録はどうすればいいですか？",
                    answer: "トップメニューの「会員登録」ボタンをクリックするか、ログインページで「会員登録」リンクをクリックして登録できます。メールアドレス、名前、パスワードのみ入力してください。",
                    keywords: ["会員登録", "登録", "アカウント", "加入"]
                },
                {
                    id: 12,
                    category: "メンバーシップ",
                    question: "プレミアム会員の特典は何ですか？",
                    answer: "プレミアム会員は無制限の医療情報検索、専門家1:1相談、プレミアムリハビリ動画、広告削除などの特典を提供します。1年：68,000ウォン、2年：100,000ウォン。",
                    keywords: ["プレミアム", "会員", "有料", "特典"]
                }
            ]
        };

        try {
            const savedQnA = localStorage.getItem('chatbotQnA_multilang');
            const savedVersion = localStorage.getItem('chatbotQnA_version');
            const currentVersion = '202511200332'; // 버전 번호
            
            // 버전이 일치하고 데이터가 있으면 사용
            if (savedQnA && savedVersion === currentVersion) {
                const parsed = JSON.parse(savedQnA);
                const koQuestionsCount = parsed.ko ? parsed.ko.length : 0;
                console.log(`✅ Loaded Q&A v${currentVersion} (${koQuestionsCount} questions)`);
                
                // 12개 질문이 있는지 확인
                if (koQuestionsCount === 12) {
                    return parsed;
                }
            }
            
            // 버전이 다르거나 데이터가 없으면 새로 저장
            console.log('🔄 Loading new Q&A data (version update)');
            localStorage.setItem('chatbotQnA_version', currentVersion);
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

        // 클릭 이벤트
        button.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.closeChatbot());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // 터치 이벤트 최적화 (모바일)
        button.addEventListener('touchstart', (e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
        }, { passive: true });
        
        button.addEventListener('touchend', (e) => {
            e.currentTarget.style.transform = 'scale(1)';
        }, { passive: true });
        
        // 질문 버튼 터치 최적화는 동적으로 생성되므로 이벤트 위임 사용
        document.addEventListener('touchstart', (e) => {
            const quickBtn = e.target.closest('.chatbot-quick-btn');
            const backBtn = e.target.closest('.chatbot-back-to-list-btn');
            const sendButton = e.target.closest('#chatbot-send');
            
            if (quickBtn) {
                quickBtn.style.transform = 'translateX(4px) scale(0.98)';
            }
            if (backBtn) {
                backBtn.style.transform = 'translateY(2px) scale(0.98)';
            }
            if (sendButton) {
                sendButton.style.transform = 'scale(0.9)';
            }
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const quickBtn = e.target.closest('.chatbot-quick-btn');
            const backBtn = e.target.closest('.chatbot-back-to-list-btn');
            const sendButton = e.target.closest('#chatbot-send');
            
            if (quickBtn) {
                quickBtn.style.transform = 'translateX(0) scale(1)';
            }
            if (backBtn) {
                backBtn.style.transform = 'translateY(0) scale(1)';
            }
            if (sendButton) {
                sendButton.style.transform = 'scale(1)';
            }
        }, { passive: true });
        
        // 터치 취소 시에도 원래 상태로 복귀
        document.addEventListener('touchcancel', (e) => {
            const quickBtn = e.target.closest('.chatbot-quick-btn');
            const backBtn = e.target.closest('.chatbot-back-to-list-btn');
            const sendButton = e.target.closest('#chatbot-send');
            
            if (quickBtn) {
                quickBtn.style.transform = 'translateX(0) scale(1)';
            }
            if (backBtn) {
                backBtn.style.transform = 'translateY(0) scale(1)';
            }
            if (sendButton) {
                sendButton.style.transform = 'scale(1)';
            }
        }, { passive: true });
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

    // 환영 메시지 추가 (전체 질문 리스트로 대체)
    addWelcomeMessage() {
        // 환영 메시지 없이 바로 전체 질문 리스트 표시
        this.showQuickQuestions();
    }

    // 전체 질문 리스트 표시
    showQuickQuestions() {
        const container = document.getElementById('chatbot-quick-questions');
        const t = this.translations[this.currentLang];
        const qnaList = this.qnaData[this.currentLang] || [];
        
        // 스타일 복원 - maxHeight 제거하여 flex: 1이 제대로 작동하도록
        container.style.maxHeight = '';
        container.style.overflow = '';
        
        // 입력 영역 다시 표시
        const inputArea = document.querySelector('.chatbot-input-area');
        if (inputArea) {
            inputArea.style.display = 'flex';
        }
        
        // 메시지 영역 초기화
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.classList.remove('has-messages');
        messagesContainer.innerHTML = '';
        this.messages = [];
        
        // 모든 질문을 표시 (제한 없음)
        container.innerHTML = `
            <div class="chatbot-quick-title">${t.quickQuestions}</div>
            <div class="chatbot-questions-list">
                ${qnaList.map(q => `
                    <button class="chatbot-quick-btn" onclick="chatbot.handleQuickQuestion(${q.id})">
                        <span class="question-number">${q.id}.</span>
                        <span class="question-text">${q.question}</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        console.log(`✅ Displaying ${qnaList.length} questions in ${this.currentLang}`);
    }

    // 빠른 질문 클릭 처리
    handleQuickQuestion(id) {
        const qnaList = this.qnaData[this.currentLang] || [];
        const qna = qnaList.find(q => q.id === id);
        if (qna) {
            // 질문 리스트 영역 축소
            const quickQuestionsContainer = document.getElementById('chatbot-quick-questions');
            quickQuestionsContainer.style.maxHeight = '80px';
            quickQuestionsContainer.style.overflow = 'hidden';
            
            // 입력 영역 숨김 (모바일에서 공간 확보)
            const inputArea = document.querySelector('.chatbot-input-area');
            if (inputArea) {
                inputArea.style.display = 'none';
            }
            
            this.addMessage('user', qna.question);
            setTimeout(() => {
                this.addMessage('bot', qna.answer);
                
                // "목록으로 돌아가기" 버튼 추가
                this.addBackToListButton();
            }, 500);
        }
    }
    
    // 목록으로 돌아가기 버튼 추가
    addBackToListButton() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const t = this.translations[this.currentLang];
        
        const backButtonText = {
            ko: '📋 질문 목록으로 돌아가기',
            en: '📋 Back to Question List',
            zh: '📋 返回问题列表',
            ja: '📋 質問リストに戻る'
        };
        
        const buttonHTML = `
            <div class="chatbot-message bot">
                <button class="chatbot-back-to-list-btn" onclick="chatbot.showQuickQuestions(); this.parentElement.remove();">
                    ${backButtonText[this.currentLang]}
                </button>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', buttonHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // 질문 리스트 다시 보기
    showFullQuestionList() {
        const quickQuestionsContainer = document.getElementById('chatbot-quick-questions');
        // maxHeight 제거하여 flex: 1이 제대로 작동하도록
        quickQuestionsContainer.style.maxHeight = '';
        quickQuestionsContainer.style.overflow = '';
        
        // 메시지 영역 초기화
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.classList.remove('has-messages');
        messagesContainer.innerHTML = '';
        this.messages = [];
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
        
        // 메시지가 있으면 has-messages 클래스 추가
        messagesContainer.classList.add('has-messages');
        
        // 스크롤을 최하단으로
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
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
