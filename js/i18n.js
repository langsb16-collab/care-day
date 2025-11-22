// 다국어 지원 시스템
const translations = {
    ko: {
        site: {
            title: '뇌질환케어 - Brain Disease Care',
            name: '뇌질환케어',
            subtitle: 'Brain Disease Care',
            description: '뇌출혈·뇌경색 환자와 가족을 위한 종합 커뮤니티 플랫폼'
        },
        menu: {
            home: '홈',
            disease: '뇌질환 정보',
            hospital: '병원 검색',
            caregivers: '간병인',
            careDiary: '간병일기',
            medicalLens: '메디컬 렌즈',
            rehab: '재활운동',
            insurance: '보험',
            support: '지원정책',
            supplies: '간병용품',
            community: '커뮤니티',
            medical: '명의찾기',
            complaints: '민원 (병원,국가기관)',
            emergency: '응급',
            papers: '논문 (한국어/영어)',
            notice: '공지'
        },
        hero: {
            title: '뇌출혈·뇌경색 환자와 가족을 위한<br>종합 케어 플랫폼',
            subtitle: '병원 찾기부터 재활, 간병, 보험, 지원정책까지<br>모든 정보를 한 곳에서'
        },
        search: {
            placeholder: '병원명, 지역, 질환명 검색...',
            button: '검색'
        },
        stats: {
            hospitals: '등록 병원',
            caregivers: '간병인',
            videos: '재활 영상',
            support: '지원 서비스'
        },
        sections: {
            title: '주요 서비스'
        },
        serviceCards: {
            hospital: {
                title: '병원 검색',
                desc: '2,500+ 병원',
                action: '보기 →'
            },
            caregivers: {
                title: '간병인 찾기',
                desc: '전문 간병인',
                action: '보기 →'
            },
            careDiary: {
                title: '간병일지',
                desc: '기록 & 공유',
                action: '보기 →'
            },
            rehab: {
                title: '재활운동',
                desc: '30+ 영상',
                action: '보기 →'
            },
            support: {
                title: '지원정책',
                desc: '정부 지원',
                action: '보기 →'
            },
            community: {
                title: '커뮤니티',
                desc: '소통 공간',
                action: '보기 →'
            }
        },
        emergency: {
            title: '응급 상황이신가요?',
            subtitle: '즉시 119에 연락하거나 가까운 응급실로 가세요',
            guide: '응급 가이드'
        },
        alerts: {
            searchEmpty: '검색어를 입력해주세요.',
            comingSoon: '준비 중입니다.',
            membershipRequired: '회원제 서비스입니다. 로그인이 필요합니다.',
            loginRequired: '로그인이 필요한 서비스입니다.',
            loading: '로딩 중...',
            requiredFields: '필수 항목을 모두 입력해주세요.',
            shared: '공유되었습니다!',
            linkCopied: '링크가 클립보드에 복사되었습니다!',
            copyFailed: '링크 복사에 실패했습니다.'
        },
        footer: {
            about: '서비스 소개',
            description: '뇌질환 환자와 가족을 위한 종합 정보 플랫폼',
            quick: '빠른 링크',
            contact: '연락처',
            languages: 'Languages',
            rights: 'All rights reserved.',
            platformInquiry: '플랫폼 개발 문의',
            scanQR: 'QR코드를 스캔하여 문의하세요',
            developerContact: '개발자 문의',
            copyright: 'CASHiQ.org - 뇌질환케어. All rights reserved.',
            disclaimer: '본 사이트의 정보는 참고용이며, 전문의와 상담이 필요합니다.',
            quickLinks: {
                diseaseInfo: '뇌질환 정보',
                hospitalSearch: '병원 검색',
                careDiary: '간병일기',
                support: '지원정책',
                community: '커뮤니티',
                emergency: '응급정보'
            }
        },
        auth: {
            login: '로그인',
            signup: '회원가입'
        },
        backToHome: '메인화면 돌아가기',
        service: {
            disease: {
                title: '뇌질환 정보 - 뇌질환케어'
            }
        },
        page: {
            disease: {
                title: '뇌질환 정보',
                subtitle: '질병분류코드별 상세 정보',
                search: 'ICD-10 코드 또는 질병명 검색...'
            }
        },
        disease: {
            category: {
                hemorrhage: '뇌출혈',
                infarction: '뇌경색',
                other: '기타'
            }
        },
        caregiverVideos: {
            pageTitle: '가족간병 영상자료 - 뇌질환케어',
            title: '가족간병 영상자료',
            subtitle: '가족 간병에 도움이 되는 영상 모음',
            watchButton: '영상 보기',
            categories: {
                policy: '정부 정책',
                caregiving: '간병 기술',
                insurance: '보험 제도',
                documentary: '다큐멘터리'
            },
            sections: {
                policy: {
                    title: '정부 간병 정책',
                    desc: '정부에서 추진하는 간병비 지원, 건강보험 급여화 등 최신 정책 정보'
                },
                caregiving: {
                    title: '간병 기술 & 방법',
                    desc: '실제 간병에 필요한 기술과 노하우'
                },
                insurance: {
                    title: '보험 제도',
                    desc: '간병 관련 보험 제도 및 약관 정보'
                },
                documentary: {
                    title: '다큐멘터리',
                    desc: '가족 간병의 현실을 다룬 다큐멘터리'
                }
            },
            videos: {
                policy1: {
                    title: '요양병원 간병비 건강보험 급여화',
                    desc: '2026년부터 간병비 본인부담 100%→30%로 대폭 경감'
                },
                policy2: {
                    title: '간병비 급여화 공청회',
                    desc: '의료중심 요양병원 혁신 및 간병비 급여화 추진방향'
                },
                policy3: {
                    title: '간병비 70% 지원 제도 안내',
                    desc: '한 달 200만원 간병비가 60만원으로! 제도 완벽 정리'
                },
                policy4: {
                    title: '간병비 제도 어떻게 달라지나',
                    desc: '간병 파산, 간병 살인 막는 새로운 제도 변화'
                },
                caregiving1: {
                    title: '가족요양 제도 안내',
                    desc: '가족을 간병하면서 돈도 벌 수 있는 제도'
                },
                caregiving2: {
                    title: '간병 지원 서비스',
                    desc: '환자도 가족도 고통스러운 간병을 돕는 지원 서비스'
                },
                insurance1: {
                    title: '가족간병 보험 안내',
                    desc: '2025 가족간병 간병인보험 약관 변경사항'
                },
                insurance2: {
                    title: '건강보험 적용 안내',
                    desc: '간병비 건강보험 적용 상세 안내'
                },
                documentary1: {
                    title: '다큐 - 가족 간병',
                    desc: '가족 간병의 현실을 다룬 감동 다큐멘터리'
                }
            }
        },
        community: {
            title: '커뮤니티',
            subtitle: '환자와 가족을 위한 정보 공유',
            cards: {
                organDonation: {
                    title: '뇌사 장기기증 절차',
                    desc: '생명을 나누는 장기기증에 대한 절차와 안내',
                    action: '자세히 보기'
                },
                caregiverVideos: {
                    title: '가족간병 영상자료',
                    desc: '가족 간병에 대한 유용한 동영상 모음',
                    action: '자세히 보기'
                },
                patientRights: {
                    title: '환자 보호자 권리',
                    desc: '환자와 보호자의 권리 및 항의 절차 안내',
                    action: '자세히 보기'
                },
                contactInfo: {
                    title: '주요 연락처',
                    desc: '긴급상황 및 필수 연락처 모음',
                    action: '자세히 보기'
                },
                funeralServices: {
                    title: '상조회사 & 납골당',
                    desc: '전국 상조회사 및 납골당 연락처 정보',
                    action: '자세히 보기'
                },
                forum: {
                    title: '자유게시판',
                    desc: '환자와 보호자의 경험 공유 및 소통 공간',
                    action: '게시판 바로가기'
                },
                papers: {
                    title: '논문 (한국어/영어)',
                    desc: '뇌질환 관련 국내외 학술 논문 및 연구 자료',
                    action: '논문 자료 보기'
                },
                insurance: {
                    title: '보험',
                    desc: '뇌질환 치료를 위한 보험 정보 및 가이드',
                    action: '보험 정보 보기'
                },
                support: {
                    title: '지원정책',
                    desc: '정부 및 지자체 지원 정책 안내',
                    action: '지원정책 보기'
                },
                supplies: {
                    title: '간병용품',
                    desc: '필수 간병 용품 및 구매 정보',
                    action: '용품 보기'
                },
                complaints: {
                    title: '민원 (병원,국가기관)',
                    desc: '병원 및 국가기관에 대한 민원 접수',
                    action: '민원 접수하기'
                }
            }
        },
        hospitalSearch: {
            pageTitle: '병원 검색 - 뇌질환케어',
            mainTitle: '뇌질환 전문 병원 검색',
            searchStats: '7단계 병원 단계별/지역별 분류 • 3,500+ 병원 검색 데이터베이스',
            searchTitle: '🔍 병원 이름 또는 지역으로 검색',
            searchPlaceholder: '병원 이름, 지역명을 입력하세요 (예: 서울대병원, 강남구)',
            searchButton: '검색',
            categoryTitle: '병원 분류별 필터',
            regionTitle: '지역별 필터',
            reservationButton: '예약 진료 가능 병원 보기',
            reservationSubtext: '온라인 진료예약 가능한 전국 뇌질환 전문병원 안내',
            resultCount: '검색 결과:',
            resultUnit: '개',
            categories: {
                all: '전체',
                tertiary: '상급종합병원',
                general: '종합병원',
                specialized: '전문병원',
                nursing: '요양병원',
                rehabilitation: '재활병원',
                oriental: '한방병원',
                regular: '일반병원'
            },
            regions: {
                all: '전국',
                seoul: '서울',
                gyeonggi: '경기',
                incheon: '인천',
                busan: '부산',
                daegu: '대구',
                daejeon: '대전',
                gwangju: '광주',
                ulsan: '울산',
                sejong: '세종',
                gangwon: '강원',
                chungbuk: '충북',
                chungnam: '충남',
                jeonbuk: '전북',
                jeonnam: '전남',
                gyeongbuk: '경북',
                gyeongnam: '경남',
                jeju: '제주'
            }
        },
        rating: {
            like: '좋아요',
            dislike: '싫어요',
            recommend: '추천'
        },
        careDiary: {
            title: '간병일기 - 뇌질환케어',
            pageTitle: '📝 간병일기',
            pageSubtitle: '환자의 일상을 기록하고 보호자와 공유하세요',
            newRecord: '새 기록 작성',
            voiceRecord: '음성 녹음',
            takePhoto: '사진 촬영',
            uploadFile: '파일 업로드',
            medicalLens: '메디컬 렌즈',
            filterBy: '필터:',
            medication: '복약',
            meal: '식사',
            vital: '생체신호',
            recovery: '회복상태',
            showAll: '전체보기',
            emptyTitle: '아직 기록이 없습니다',
            emptySubtitle: '첫 간병일기를 작성해보세요!',
            createFirst: '첫 기록 작성하기',
            modal: {
                title: '새 간병일기 작성',
                dateTime: '날짜 및 시간',
                category: '카테고리',
                voiceRecording: '음성 녹음',
                startRecording: '녹음 시작',
                stopRecording: '녹음 중지',
                recording: '녹음 중...',
                uploadAudio: '음성 파일 업로드',
                media: '사진/영상',
                takePhoto: '사진 촬영',
                recordVideo: '영상 촬영',
                uploadMedia: '파일 업로드',
                content: '내용',
                transcriptionNote: '* 음성 녹음 시 자동으로 텍스트로 변환됩니다',
                notify: '보호자 알림',
                sms: '문자 메시지',
                kakao: '카카오톡',
                telegram: '텔레그램',
                save: '저장',
                saveDraft: '임시저장'
            }
        },
        medicalLens: {
            title: '메디컬 렌즈 - 뇌질환케어',
            pageTitle: '메디컬 렌즈',
            pageSubtitle: '약제 라벨을 촬영하면 AI가 자동으로 분석합니다',
            step1: '사진 촬영',
            step2: 'AI 분석',
            step3: '간병일지 저장',
            step4: '보호자 전송',
            captureTitle: '약제 라벨 촬영',
            startCamera: '카메라 시작',
            capture: '촬영',
            stop: '중지',
            uploadPhoto: '사진 업로드',
            analysisTitle: 'AI 분석 결과',
            analyzing: '분석 중입니다...',
            efficacy: '효능·효과',
            reason: '투여 이유',
            sideEffects: '부작용',
            contraindications: '금기사항',
            saveToDiary: '간병일지 저장',
            sendToGuardian: '보호자 전송',
            analyzeAnother: '다른 약 분석하기',
            successTitle: '저장 완료!',
            successMessage: '간병일지에 저장되고 보호자에게 전송되었습니다.',
            viewDiary: '간병일지 보기',
            scanAgain: '다시 촬영',
            info1Title: '간편한 촬영',
            info1Text: '약제 라벨을 촬영하기만 하면 됩니다',
            info2Title: 'AI 자동 분석',
            info2Text: '약 이름, 성분, 효능을 자동 인식합니다',
            info3Title: '실시간 공유',
            info3Text: '보호자에게 즉시 전송됩니다'
        },
        signup: {
            pageTitle: '회원가입 - CASHiQ 뇌질환케어',
            backToHome: '홈으로 돌아가기',
            membershipTitle: '회원 등급 선택',
            signupTitle: '회원가입',
            signupSubtitle: 'CASHiQ와 함께 건강한 케어를 시작하세요',
            free: {
                title: '무료 회원',
                subtitle: 'Free Membership',
                price: '₩0',
                duration: '영구 무료',
                feature1: '하루 병원 검색 2회',
                feature2: '공지사항 열람',
                button: '무료로 시작하기'
            },
            premium1Year: {
                title: '프리미엄 1년',
                subtitle: 'Premium 1 Year',
                price: '₩68,000',
                duration: '약 ₩5,666/월',
                feature1: '플랫폼 모든 메뉴 사용',
                feature2: '모든 하위 메뉴 접근',
                feature3: '무제한 병원 검색',
                feature4: '커뮤니티 전체 이용',
                feature5: '병원 리뷰 & 평가',
                feature6: '필터링 & 지도 검색',
                feature7: '제휴 병원 할인',
                feature8: '우선 고객 지원'
            },
            premium2Year: {
                title: '프리미엄 2년',
                subtitle: 'Premium 2 Years',
                badge: '32% 할인!',
                price: '₩100,000',
                duration: '약 ₩4,166/월',
                feature1: '1년 플랜의 모든 혜택',
                feature2: '플랫폼 모든 기능 사용',
                feature3: '₩36,000 추가 절약',
                feature4: '프리미엄 간병 가이드',
                feature5: 'VIP 전용 혜택'
            },
            form: {
                nameLabel: '이름',
                namePlaceholder: '홍길동',
                emailLabel: '이메일',
                emailPlaceholder: 'email@example.com',
                phoneLabel: '전화번호',
                phonePlaceholder: '010-1234-5678',
                passwordLabel: '비밀번호',
                passwordPlaceholder: '8자 이상',
                passwordConfirmLabel: '비밀번호 확인',
                passwordConfirmPlaceholder: '비밀번호 재입력',
                termsLabel: '이용약관 및 개인정보처리방침에 동의합니다',
                marketingLabel: '마케팅 정보 수신에 동의합니다 (선택)',
                selectedPlan: '선택한 플랜:',
                submitButton: '회원가입',
                loginText: '이미 회원이신가요?',
                loginLink: '로그인',
                required: '*'
            }
        }
    },
    en: {
        site: {
            title: 'Brain Disease Care',
            name: 'Brain Disease Care',
            subtitle: 'Brain Disease Care',
            description: 'Comprehensive community platform for stroke patients and families'
        },
        menu: {
            home: 'Home',
            disease: 'Disease Info',
            hospital: 'Hospital Search',
            caregivers: 'Caregivers',
            careDiary: 'Care Diary',
            medicalLens: 'Medical Lens',
            rehab: 'Rehabilitation',
            insurance: 'Insurance',
            support: 'Support',
            supplies: 'Supplies',
            community: 'Community',
            medical: 'Find Doctors',
            complaints: 'Complaints (Hospital/Government)',
            emergency: 'Emergency',
            papers: 'Papers (KR/EN)',
            notice: 'Notice'
        },
        hero: {
            title: 'Comprehensive Care Platform<br>for Stroke Patients and Families',
            subtitle: 'From hospital search to rehabilitation, caregiving, insurance, and support policies<br>All information in one place'
        },
        search: {
            placeholder: 'Search hospital, region, disease...',
            button: 'Search'
        },
        stats: {
            hospitals: 'Hospitals',
            caregivers: 'Caregivers',
            videos: 'Rehab Videos',
            support: 'Support Services'
        },
        sections: {
            title: 'Main Services'
        },
        serviceCards: {
            hospital: {
                title: 'Hospital Search',
                desc: '2,500+ Hospitals',
                action: 'View →'
            },
            caregivers: {
                title: 'Find Caregivers',
                desc: 'Professional Care',
                action: 'View →'
            },
            careDiary: {
                title: 'Care Diary',
                desc: 'Record & Share',
                action: 'View →'
            },
            rehab: {
                title: 'Rehabilitation',
                desc: '30+ Videos',
                action: 'View →'
            },
            support: {
                title: 'Support Policies',
                desc: 'Government Support',
                action: 'View →'
            },
            community: {
                title: 'Community',
                desc: 'Communication Space',
                action: 'View →'
            }
        },
        emergency: {
            title: 'Is this an emergency?',
            subtitle: 'Call 119 immediately or go to the nearest emergency room',
            guide: 'Emergency Guide'
        },
        alerts: {
            searchEmpty: 'Please enter a search term.',
            comingSoon: 'Coming soon.',
            membershipRequired: 'This is a membership service. Login is required.',
            loginRequired: 'Login is required for this service.',
            loading: 'Loading...',
            requiredFields: 'Please fill in all required fields.',
            shared: 'Shared successfully!',
            linkCopied: 'Link copied to clipboard!',
            copyFailed: 'Failed to copy link.'
        },
        footer: {
            about: 'About',
            description: 'Comprehensive information platform for brain disease patients and families',
            quick: 'Quick Links',
            contact: 'Contact',
            languages: 'Languages',
            rights: 'All rights reserved.',
            platformInquiry: 'Platform Development Inquiry',
            scanQR: 'Scan QR code to contact us',
            developerContact: 'Developer Contact',
            copyright: 'CASHiQ.org - Brain Disease Care. All rights reserved.',
            disclaimer: 'Information on this site is for reference only. Consult with a specialist.',
            quickLinks: {
                diseaseInfo: 'Disease Information',
                hospitalSearch: 'Hospital Search',
                careDiary: 'Care Diary',
                support: 'Support Policies',
                community: 'Community',
                emergency: 'Emergency Info'
            }
        },
        auth: {
            login: 'Login',
            signup: 'Sign Up'
        },
        backToHome: 'Back to Home',
        service: {
            disease: {
                title: 'Brain Disease Information - Brain Disease Care'
            }
        },
        page: {
            disease: {
                title: 'Disease Information',
                subtitle: 'Detailed information by disease classification code',
                search: 'Search ICD-10 code or disease name...'
            }
        },
        disease: {
            category: {
                hemorrhage: 'Brain Hemorrhage',
                infarction: 'Brain Infarction',
                other: 'Other'
            }
        },
        caregiverVideos: {
            pageTitle: 'Family Caregiving Videos - Brain Disease Care',
            title: 'Family Caregiving Videos',
            subtitle: 'Helpful video collection for family caregiving',
            watchButton: 'Watch Video',
            categories: {
                policy: 'Government Policy',
                caregiving: 'Caregiving Skills',
                insurance: 'Insurance System',
                documentary: 'Documentary'
            },
            sections: {
                policy: {
                    title: 'Government Caregiving Policy',
                    desc: 'Latest policy information on caregiving cost support and health insurance coverage'
                },
                caregiving: {
                    title: 'Caregiving Skills & Methods',
                    desc: 'Practical skills and know-how for actual caregiving'
                },
                insurance: {
                    title: 'Insurance System',
                    desc: 'Caregiving-related insurance systems and policy information'
                },
                documentary: {
                    title: 'Documentary',
                    desc: 'Documentaries about the reality of family caregiving'
                }
            },
            videos: {
                policy1: {
                    title: 'Nursing Home Care Cost Health Insurance Coverage',
                    desc: 'Drastic reduction of care cost burden from 100% to 30% starting 2026'
                },
                policy2: {
                    title: 'Care Cost Coverage Public Hearing',
                    desc: 'Medical-centered nursing home innovation and care cost coverage direction'
                },
                policy3: {
                    title: '70% Care Cost Support System Guide',
                    desc: 'Monthly care cost reduced from $1,500 to $450! Complete system summary'
                },
                policy4: {
                    title: 'How Care Cost System Changes',
                    desc: 'New system changes to prevent care bankruptcy and care-related crimes'
                },
                caregiving1: {
                    title: 'Family Care System Guide',
                    desc: 'A system that allows you to earn money while caring for family'
                },
                caregiving2: {
                    title: 'Caregiving Support Service',
                    desc: 'Support services to help with painful caregiving for both patients and families'
                },
                insurance1: {
                    title: 'Family Caregiving Insurance Guide',
                    desc: '2025 family caregiving insurance policy changes'
                },
                insurance2: {
                    title: 'Health Insurance Application Guide',
                    desc: 'Detailed guide on health insurance application for care costs'
                },
                documentary1: {
                    title: 'Documentary - Family Caregiving',
                    desc: 'Touching documentary about the reality of family caregiving'
                }
            }
        },
        community: {
            title: 'Community',
            subtitle: 'Information sharing for patients and families',
            cards: {
                organDonation: {
                    title: 'Brain Death Organ Donation',
                    desc: 'Procedures and guidance for life-saving organ donation',
                    action: 'Learn More'
                },
                caregiverVideos: {
                    title: 'Family Caregiver Videos',
                    desc: 'Useful video collection for family caregiving',
                    action: 'Learn More'
                },
                patientRights: {
                    title: 'Patient & Guardian Rights',
                    desc: 'Rights and complaint procedures for patients and guardians',
                    action: 'Learn More'
                },
                contactInfo: {
                    title: 'Key Contacts',
                    desc: 'Emergency and essential contact information',
                    action: 'Learn More'
                },
                funeralServices: {
                    title: 'Funeral Services & Ossuaries',
                    desc: 'Nationwide funeral services and ossuary contact information',
                    action: 'Learn More'
                },
                forum: {
                    title: 'Community Forum',
                    desc: 'Space for patients and guardians to share experiences',
                    action: 'Go to Forum'
                },
                papers: {
                    title: 'Research Papers (KR/EN)',
                    desc: 'Domestic and international academic papers on brain diseases',
                    action: 'View Papers'
                },
                insurance: {
                    title: 'Insurance',
                    desc: 'Insurance information and guides for brain disease treatment',
                    action: 'View Insurance Info'
                },
                support: {
                    title: 'Support Policies',
                    desc: 'Government and local support policy information',
                    action: 'View Policies'
                },
                supplies: {
                    title: 'Caregiving Supplies',
                    desc: 'Essential caregiving supplies and purchase information',
                    action: 'View Supplies'
                },
                complaints: {
                    title: 'Complaints (Hospital/Government)',
                    desc: 'File complaints about hospitals and government agencies',
                    action: 'File Complaint'
                }
            }
        },
        hospitalSearch: {
            pageTitle: 'Hospital Search - Brain Disease Care',
            mainTitle: 'Brain Disease Specialized Hospital Search',
            searchStats: '7-Level Hospital Classification by Type/Region • 3,500+ Hospital Search Database',
            searchTitle: '🔍 Search by Hospital Name or Region',
            searchPlaceholder: 'Enter hospital name or region (e.g., Seoul National University Hospital, Gangnam)',
            searchButton: 'Search',
            categoryTitle: 'Filter by Hospital Category',
            regionTitle: 'Filter by Region',
            reservationButton: 'View Hospitals with Appointment Booking',
            reservationSubtext: 'Nationwide brain disease specialized hospitals with online appointment booking',
            resultCount: 'Search Results:',
            resultUnit: '',
            categories: {
                all: 'All',
                tertiary: 'Tertiary Hospital',
                general: 'General Hospital',
                specialized: 'Specialized Hospital',
                nursing: 'Nursing Hospital',
                rehabilitation: 'Rehabilitation Hospital',
                oriental: 'Oriental Medicine Hospital',
                regular: 'Regular Hospital'
            },
            regions: {
                all: 'Nationwide',
                seoul: 'Seoul',
                gyeonggi: 'Gyeonggi',
                incheon: 'Incheon',
                busan: 'Busan',
                daegu: 'Daegu',
                daejeon: 'Daejeon',
                gwangju: 'Gwangju',
                ulsan: 'Ulsan',
                sejong: 'Sejong',
                gangwon: 'Gangwon',
                chungbuk: 'Chungbuk',
                chungnam: 'Chungnam',
                jeonbuk: 'Jeonbuk',
                jeonnam: 'Jeonnam',
                gyeongbuk: 'Gyeongbuk',
                gyeongnam: 'Gyeongnam',
                jeju: 'Jeju'
            }
        },
        rating: {
            like: 'Like',
            dislike: 'Dislike',
            recommend: 'Recommend'
        },
        careDiary: {
            title: 'Care Diary - Brain Disease Care',
            pageTitle: '📝 Care Diary',
            pageSubtitle: 'Record patient daily life and share with guardians',
            newRecord: 'New Record',
            voiceRecord: 'Voice Recording',
            takePhoto: 'Take Photo',
            uploadFile: 'Upload File',
            medicalLens: 'Medical Lens',
            filterBy: 'Filter:',
            medication: 'Medication',
            meal: 'Meal',
            vital: 'Vital Signs',
            recovery: 'Recovery Status',
            showAll: 'Show All',
            emptyTitle: 'No records yet',
            emptySubtitle: 'Write your first care diary!',
            createFirst: 'Create First Record',
            modal: {
                title: 'New Care Diary',
                dateTime: 'Date & Time',
                category: 'Category',
                voiceRecording: 'Voice Recording',
                startRecording: 'Start Recording',
                stopRecording: 'Stop Recording',
                recording: 'Recording...',
                uploadAudio: 'Upload Audio File',
                media: 'Photo/Video',
                takePhoto: 'Take Photo',
                recordVideo: 'Record Video',
                uploadMedia: 'Upload File',
                content: 'Content',
                transcriptionNote: '* Voice recordings will be automatically converted to text',
                notify: 'Guardian Notification',
                sms: 'SMS',
                kakao: 'KakaoTalk',
                telegram: 'Telegram',
                save: 'Save',
                saveDraft: 'Save Draft'
            }
        },
        medicalLens: {
            title: 'Medical Lens - Brain Disease Care',
            pageTitle: 'Medical Lens',
            pageSubtitle: 'AI automatically analyzes medication labels',
            step1: 'Take Photo',
            step2: 'AI Analysis',
            step3: 'Save to Diary',
            step4: 'Send to Guardian',
            captureTitle: 'Capture Medication Label',
            startCamera: 'Start Camera',
            capture: 'Capture',
            stop: 'Stop',
            uploadPhoto: 'Upload Photo',
            analysisTitle: 'AI Analysis Result',
            analyzing: 'Analyzing...',
            efficacy: 'Efficacy & Effects',
            reason: 'Administration Reason',
            sideEffects: 'Side Effects',
            contraindications: 'Contraindications',
            saveToDiary: 'Save to Diary',
            sendToGuardian: 'Send to Guardian',
            analyzeAnother: 'Analyze Another',
            successTitle: 'Saved Successfully!',
            successMessage: 'Saved to care diary and sent to guardian.',
            viewDiary: 'View Diary',
            scanAgain: 'Scan Again',
            info1Title: 'Easy Capture',
            info1Text: 'Simply take a photo of the medication label',
            info2Title: 'AI Auto Analysis',
            info2Text: 'Automatically recognizes drug name, ingredients, and efficacy',
            info3Title: 'Real-time Sharing',
            info3Text: 'Instantly sent to guardians'
        },
        signup: {
            pageTitle: 'Sign Up - CASHiQ Brain Disease Care',
            backToHome: 'Back to Home',
            membershipTitle: 'Select Membership Level',
            signupTitle: 'Sign Up',
            signupSubtitle: 'Start healthy care with CASHiQ',
            free: {
                title: 'Free Member',
                subtitle: 'Free Membership',
                price: '₩0',
                duration: 'Forever Free',
                feature1: '3 hospital searches per day',
                feature2: 'View announcements',
                button: 'Start for Free'
            },
            premium1Year: {
                title: 'Premium 1 Year',
                subtitle: 'Premium 1 Year',
                price: '₩68,000',
                duration: 'About ₩5,666/month',
                feature1: 'Use all platform menus',
                feature2: 'Access all submenus',
                feature3: 'Unlimited hospital searches',
                feature4: 'Full community access',
                feature5: 'Hospital reviews & ratings',
                feature6: 'Filtering & map search',
                feature7: 'Partner hospital discounts',
                feature8: 'Priority customer support'
            },
            premium2Year: {
                title: 'Premium 2 Years',
                subtitle: 'Premium 2 Years',
                badge: '32% OFF!',
                price: '₩100,000',
                duration: 'About ₩4,166/month',
                feature1: 'All benefits of 1-year plan',
                feature2: 'Use all platform features',
                feature3: 'Save ₩36,000 extra',
                feature4: 'Premium care guide',
                feature5: 'VIP exclusive benefits'
            },
            form: {
                nameLabel: 'Name',
                namePlaceholder: 'John Doe',
                emailLabel: 'Email',
                emailPlaceholder: 'email@example.com',
                phoneLabel: 'Phone Number',
                phonePlaceholder: '010-1234-5678',
                passwordLabel: 'Password',
                passwordPlaceholder: '8+ characters',
                passwordConfirmLabel: 'Confirm Password',
                passwordConfirmPlaceholder: 'Re-enter password',
                termsLabel: 'I agree to the Terms of Service and Privacy Policy',
                marketingLabel: 'I agree to receive marketing information (optional)',
                selectedPlan: 'Selected Plan:',
                submitButton: 'Sign Up',
                loginText: 'Already have an account?',
                loginLink: 'Login',
                required: '*'
            }
        }
    },
    zh: {
        site: {
            title: '脑疾病护理',
            name: '脑疾病护理',
            subtitle: 'Brain Disease Care',
            description: '为脑出血和脑梗塞患者及家属提供的综合社区平台'
        },
        menu: {
            home: '首页',
            disease: '疾病信息',
            hospital: '医院搜索',
            caregivers: '护理员',
            careDiary: '护理日记',
            medicalLens: '医疗镜头',
            rehab: '康复运动',
            insurance: '保险',
            support: '支持政策',
            supplies: '护理用品',
            community: '社区',
            medical: '寻找名医',
            complaints: '投诉 (医院/政府机关)',
            emergency: '急救',
            papers: '论文 (韩语/英语)',
            notice: '公告'
        },
        hero: {
            title: '为脑出血和脑梗塞患者及家属<br>提供的综合护理平台',
            subtitle: '从医院搜索到康复、护理、保险、支持政策<br>所有信息一站式服务'
        },
        search: {
            placeholder: '搜索医院名称、地区、疾病名称...',
            button: '搜索'
        },
        stats: {
            hospitals: '注册医院',
            caregivers: '护理员',
            videos: '康复视频',
            support: '支持服务'
        },
        sections: {
            title: '主要服务'
        },
        serviceCards: {
            hospital: {
                title: '医院搜索',
                desc: '2,500+ 医院',
                action: '查看 →'
            },
            caregivers: {
                title: '寻找护理员',
                desc: '专业护理员',
                action: '查看 →'
            },
            careDiary: {
                title: '护理日记',
                desc: '记录与分享',
                action: '查看 →'
            },
            rehab: {
                title: '康复运动',
                desc: '30+ 视频',
                action: '查看 →'
            },
            support: {
                title: '支持政策',
                desc: '政府支持',
                action: '查看 →'
            },
            community: {
                title: '社区',
                desc: '交流空间',
                action: '查看 →'
            }
        },
        emergency: {
            title: '这是紧急情况吗？',
            subtitle: '请立即拨打119或前往最近的急诊室',
            guide: '急救指南'
        },
        alerts: {
            searchEmpty: '请输入搜索词。',
            comingSoon: '即将推出。',
            membershipRequired: '这是会员服务，需要登录。',
            loginRequired: '此服务需要登录。',
            loading: '加载中...',
            requiredFields: '请填写所有必填项。',
            shared: '分享成功！',
            linkCopied: '链接已复制到剪贴板！',
            copyFailed: '复制链接失败。'
        },
        footer: {
            about: '服务介绍',
            description: '为脑疾病患者及家属提供的综合信息平台',
            quick: '快速链接',
            contact: '联系方式',
            languages: '语言',
            rights: '版权所有。',
            platformInquiry: '平台开发咨询',
            scanQR: '扫描二维码联系我们',
            developerContact: '开发者联系',
            copyright: 'CASHiQ.org - 脑疾病护理。版权所有。',
            disclaimer: '本网站信息仅供参考，需咨询专业医生。',
            quickLinks: {
                diseaseInfo: '疾病信息',
                hospitalSearch: '医院搜索',
                careDiary: '护理日记',
                support: '支持政策',
                community: '社区',
                emergency: '急救信息'
            }
        },
        auth: {
            login: '登录',
            signup: '注册'
        },
        backToHome: '返回主页',
        service: {
            disease: {
                title: '脑疾病信息 - 脑疾病护理'
            }
        },
        page: {
            disease: {
                title: '脑疾病信息',
                subtitle: '按疾病分类代码的详细信息',
                search: '搜索ICD-10代码或疾病名称...'
            }
        },
        disease: {
            category: {
                hemorrhage: '脑出血',
                infarction: '脑梗塞',
                other: '其他'
            }
        },
        caregiverVideos: {
            pageTitle: '家庭护理视频资料 - 脑疾病护理',
            title: '家庭护理视频资料',
            subtitle: '对家庭护理有帮助的视频集',
            watchButton: '观看视频',
            categories: {
                policy: '政府政策',
                caregiving: '护理技术',
                insurance: '保险制度',
                documentary: '纪录片'
            },
            sections: {
                policy: {
                    title: '政府护理政策',
                    desc: '政府推进的护理费支持、健康保险覆盖等最新政策信息'
                },
                caregiving: {
                    title: '护理技术与方法',
                    desc: '实际护理所需的技术和诀窍'
                },
                insurance: {
                    title: '保险制度',
                    desc: '护理相关保险制度和条款信息'
                },
                documentary: {
                    title: '纪录片',
                    desc: '关于家庭护理现实的纪录片'
                }
            },
            videos: {
                policy1: {
                    title: '疗养医院护理费健康保险覆盖',
                    desc: '从2026年起护理费自付比例从100%大幅降至30%'
                },
                policy2: {
                    title: '护理费覆盖公听会',
                    desc: '以医疗为中心的疗养医院创新及护理费覆盖推进方向'
                },
                policy3: {
                    title: '护理费70%支持制度指南',
                    desc: '月护理费从200万韩元降至60万韩元！制度完整总结'
                },
                policy4: {
                    title: '护理费制度如何变化',
                    desc: '防止护理破产、护理犯罪的新制度变革'
                },
                caregiving1: {
                    title: '家庭疗养制度指南',
                    desc: '护理家人的同时还能赚钱的制度'
                },
                caregiving2: {
                    title: '护理支援服务',
                    desc: '帮助患者和家属减轻痛苦护理的支援服务'
                },
                insurance1: {
                    title: '家庭护理保险指南',
                    desc: '2025年家庭护理保险条款变更事项'
                },
                insurance2: {
                    title: '健康保险适用指南',
                    desc: '护理费健康保险适用详细指南'
                },
                documentary1: {
                    title: '纪录片 - 家庭护理',
                    desc: '关于家庭护理现实的感人纪录片'
                }
            }
        },
        community: {
            title: '社区',
            subtitle: '为患者和家属提供信息共享',
            cards: {
                organDonation: {
                    title: '脑死亡器官捐献程序',
                    desc: '关于拯救生命的器官捐献程序和指南',
                    action: '了解更多'
                },
                caregiverVideos: {
                    title: '家庭护理视频资料',
                    desc: '有关家庭护理的有用视频集',
                    action: '了解更多'
                },
                patientRights: {
                    title: '患者和监护人权利',
                    desc: '患者和监护人的权利及投诉程序指南',
                    action: '了解更多'
                },
                contactInfo: {
                    title: '重要联系方式',
                    desc: '紧急情况和必要联系信息',
                    action: '了解更多'
                },
                funeralServices: {
                    title: '丧葬服务公司和骨灰堂',
                    desc: '全国丧葬服务公司和骨灰堂联系信息',
                    action: '了解更多'
                },
                forum: {
                    title: '自由讨论区',
                    desc: '患者和监护人分享经验和交流的空间',
                    action: '前往论坛'
                },
                papers: {
                    title: '论文 (韩语/英语)',
                    desc: '国内外脑疾病相关学术论文和研究资料',
                    action: '查看论文'
                },
                insurance: {
                    title: '保险',
                    desc: '脑疾病治疗的保险信息和指南',
                    action: '查看保险信息'
                },
                support: {
                    title: '支持政策',
                    desc: '政府和地方政府支持政策信息',
                    action: '查看政策'
                },
                supplies: {
                    title: '护理用品',
                    desc: '必要护理用品和购买信息',
                    action: '查看用品'
                },
                complaints: {
                    title: '投诉 (医院/政府机关)',
                    desc: '对医院和政府机关的投诉受理',
                    action: '提交投诉'
                }
            }
        },
        hospitalSearch: {
            pageTitle: '医院搜索 - 脑疾病护理',
            mainTitle: '脑疾病专门医院搜索',
            searchStats: '7级医院分类（类型/地区） • 3,500+ 医院搜索数据库',
            searchTitle: '🔍 按医院名称或地区搜索',
            searchPlaceholder: '输入医院名称或地区（例：首尔大学医院、江南区）',
            searchButton: '搜索',
            categoryTitle: '按医院分类筛选',
            regionTitle: '按地区筛选',
            reservationButton: '查看可预约区疗的医院',
            reservationSubtext: '全国可在线预约诊疗的脑疾病专门医院信息',
            resultCount: '搜索结果:',
            resultUnit: '个',
            categories: {
                all: '全部',
                tertiary: '上级综合医院',
                general: '综合医院',
                specialized: '专科医院',
                nursing: '疗养医院',
                rehabilitation: '康复医院',
                oriental: '韩医院',
                regular: '普通医院'
            },
            regions: {
                all: '全国',
                seoul: '首尔',
                gyeonggi: '京畿',
                incheon: '仁川',
                busan: '釜山',
                daegu: '大邱',
                daejeon: '大田',
                gwangju: '光州',
                ulsan: '蔚山',
                sejong: '世宗',
                gangwon: '江原',
                chungbuk: '忠北',
                chungnam: '忠南',
                jeonbuk: '全北',
                jeonnam: '全南',
                gyeongbuk: '庆北',
                gyeongnam: '庆南',
                jeju: '济州'
            }
        },
        rating: {
            like: '喜欢',
            dislike: '不喜欢',
            recommend: '推荐'
        },
        careDiary: {
            title: '护理日记 - 脑疾病护理',
            pageTitle: '📝 护理日记',
            pageSubtitle: '记录患者日常并与监护人分享',
            newRecord: '新记录',
            voiceRecord: '语音录音',
            takePhoto: '拍照',
            uploadFile: '上传文件',
            medicalLens: '医疗镜头',
            filterBy: '筛选:',
            medication: '用药',
            meal: '饮食',
            vital: '生命体征',
            recovery: '恢复状态',
            showAll: '查看全部',
            emptyTitle: '暂无记录',
            emptySubtitle: '写下第一篇护理日记！',
            createFirst: '创建第一条记录',
            modal: {
                title: '新护理日记',
                dateTime: '日期和时间',
                category: '类别',
                voiceRecording: '语音录音',
                startRecording: '开始录音',
                stopRecording: '停止录音',
                recording: '录音中...',
                uploadAudio: '上传音频文件',
                media: '照片/视频',
                takePhoto: '拍照',
                recordVideo: '录制视频',
                uploadMedia: '上传文件',
                content: '内容',
                transcriptionNote: '* 语音录音将自动转换为文本',
                notify: '监护人通知',
                sms: '短信',
                kakao: 'KakaoTalk',
                telegram: 'Telegram',
                save: '保存',
                saveDraft: '保存草稿'
            }
        },
        medicalLens: {
            title: '医疗镜头 - 脑疾病护理',
            pageTitle: '医疗镜头',
            pageSubtitle: 'AI自动分析药物标签',
            step1: '拍照',
            step2: 'AI分析',
            step3: '保存到日记',
            step4: '发送给监护人',
            captureTitle: '拍摄药物标签',
            startCamera: '启动相机',
            capture: '拍照',
            stop: '停止',
            uploadPhoto: '上传照片',
            analysisTitle: 'AI分析结果',
            analyzing: '分析中...',
            efficacy: '功效与作用',
            reason: '用药原因',
            sideEffects: '副作用',
            contraindications: '禁忌症',
            saveToDiary: '保存到日记',
            sendToGuardian: '发送给监护人',
            analyzeAnother: '分析另一个',
            successTitle: '保存成功！',
            successMessage: '已保存到护理日记并发送给监护人。',
            viewDiary: '查看日记',
            scanAgain: '再次扫描',
            info1Title: '简单拍摄',
            info1Text: '只需拍摄药物标签照片',
            info2Title: 'AI自动分析',
            info2Text: '自动识别药名、成分和功效',
            info3Title: '实时共享',
            info3Text: '立即发送给监护人'
        },
        signup: {
            pageTitle: '会员注册 - CASHiQ 脑疾病护理',
            backToHome: '返回主页',
            membershipTitle: '选择会员等级',
            signupTitle: '会员注册',
            signupSubtitle: 'CASHiQ与 您一起开始健康护理',
            free: {
                title: '免费会员',
                subtitle: 'Free Membership',
                price: '₩0',
                duration: '永久免费',
                feature1: '每天病院搜索3次',
                feature2: '公告阅览',
                button: '免费开始'
            },
            premium1Year: {
                title: '高级 1年',
                subtitle: 'Premium 1 Year',
                price: '₩68,000',
                duration: '约 ₩5,666/月',
                feature1: '使用平台所有菜单',
                feature2: '访问所有子菜单',
                feature3: '无限病院搜索',
                feature4: '完全社区访问',
                feature5: '病院评论和评分',
                feature6: '筛选和地图搜索',
                feature7: '合作病院折扣',
                feature8: '优先客户支持'
            },
            premium2Year: {
                title: '高级 2年',
                subtitle: 'Premium 2 Years',
                badge: '32% 折扣!',
                price: '₩100,000',
                duration: '约 ₩4,166/月',
                feature1: '1年计划的所有优惠',
                feature2: '使用平台所有功能',
                feature3: '额外节省 ₩36,000',
                feature4: '高级护理指南',
                feature5: 'VIP专属福利'
            },
            form: {
                nameLabel: '姓名',
                namePlaceholder: '张三',
                emailLabel: '邮箱',
                emailPlaceholder: 'email@example.com',
                phoneLabel: '电话号码',
                phonePlaceholder: '010-1234-5678',
                passwordLabel: '密码',
                passwordPlaceholder: '8个字符以上',
                passwordConfirmLabel: '确认密码',
                passwordConfirmPlaceholder: '重新输入密码',
                termsLabel: '我同意服务条款和隐私政策',
                marketingLabel: '我同意接收营销信息（可选）',
                selectedPlan: '选择的订阅：',
                submitButton: '会员注册',
                loginText: '已经是会员？',
                loginLink: '登录',
                required: '*'
            }
        }
    },
    ja: {
        site: {
            title: '脳疾患ケア',
            name: '脳疾患ケア',
            subtitle: 'Brain Disease Care',
            description: '脳出血・脳梗塞患者とご家族のための総合コミュニティプラットフォーム'
        },
        menu: {
            home: 'ホーム',
            disease: '脳疾患情報',
            hospital: '病院検索',
            caregivers: '介護士',
            careDiary: '介護日記',
            medicalLens: 'メディカルレンズ',
            rehab: 'リハビリ運動',
            insurance: '保険',
            support: '支援政策',
            supplies: '介護用品',
            community: 'コミュニティ',
            medical: '名医を探す',
            complaints: '苦情 (病院/政府機関)',
            emergency: '緊急',
            papers: '論文 (韓国語/英語)',
            notice: 'お知らせ'
        },
        hero: {
            title: '脳出血・脳梗塞患者とご家族のための<br>総合ケアプラットフォーム',
            subtitle: '病院検索からリハビリ、介護、保険、支援政策まで<br>すべての情報を一か所で'
        },
        search: {
            placeholder: '病院名、地域、疾患名を検索...',
            button: '検索'
        },
        stats: {
            hospitals: '登録病院',
            caregivers: '介護士',
            videos: 'リハビリ動画',
            support: 'サポートサービス'
        },
        sections: {
            title: '主なサービス'
        },
        serviceCards: {
            hospital: {
                title: '病院検索',
                desc: '2,500+ 病院',
                action: '見る →'
            },
            caregivers: {
                title: '介護士を探す',
                desc: '専門介護士',
                action: '見る →'
            },
            careDiary: {
                title: '介護日記',
                desc: '記録＆共有',
                action: '見る →'
            },
            rehab: {
                title: 'リハビリ運動',
                desc: '30+ 動画',
                action: '見る →'
            },
            support: {
                title: '支援政策',
                desc: '政府支援',
                action: '見る →'
            },
            community: {
                title: 'コミュニティ',
                desc: '交流スペース',
                action: '見る →'
            }
        },
        emergency: {
            title: '緊急事態ですか？',
            subtitle: 'すぐに119に連絡するか、最寄りの救急室に行ってください',
            guide: '緊急ガイド'
        },
        alerts: {
            searchEmpty: '検索キーワードを入力してください。',
            comingSoon: '準備中です。',
            membershipRequired: '会員制サービスです。ログインが必要です。',
            loginRequired: 'このサービスはログインが必要です。',
            loading: '読み込み中...',
            requiredFields: '必須項目をすべて入力してください。',
            shared: '共有しました！',
            linkCopied: 'リンクをクリップボードにコピーしました！',
            copyFailed: 'リンクのコピーに失敗しました。'
        },
        footer: {
            about: 'サービス紹介',
            description: '脳疾患患者とご家族のための総合情報プラットフォーム',
            quick: 'クイックリンク',
            contact: 'お問い合わせ',
            languages: '言語',
            rights: 'すべての権利を保有。',
            platformInquiry: 'プラットフォーム開発のお問い合わせ',
            scanQR: 'QRコードをスキャンしてお問い合わせください',
            developerContact: '開発者連絡先',
            copyright: 'CASHiQ.org - 脳疾患ケア。無断転載を禁じます。',
            disclaimer: '本サイトの情報は参考用です。専門医との相談が必要です。',
            quickLinks: {
                diseaseInfo: '脳疾患情報',
                hospitalSearch: '病院検索',
                careDiary: '介護日記',
                support: '支援政策',
                community: 'コミュニティ',
                emergency: '緊急情報'
            }
        },
        auth: {
            login: 'ログイン',
            signup: '会員登録'
        },
        backToHome: 'ホームに戻る',
        service: {
            disease: {
                title: '脳疾患情報 - 脳疾患ケア'
            }
        },
        page: {
            disease: {
                title: '脳疾患情報',
                subtitle: '疾病分類コード別詳細情報',
                search: 'ICD-10コードまたは疾患名を検索...'
            }
        },
        disease: {
            category: {
                hemorrhage: '脳出血',
                infarction: '脳梗塞',
                other: 'その他'
            }
        },
        caregiverVideos: {
            pageTitle: '家族介護動画資料 - 脳疾患ケア',
            title: '家族介護動画資料',
            subtitle: '家族介護に役立つ動画集',
            watchButton: '動画を見る',
            categories: {
                policy: '政府政策',
                caregiving: '介護技術',
                insurance: '保険制度',
                documentary: 'ドキュメンタリー'
            },
            sections: {
                policy: {
                    title: '政府介護政策',
                    desc: '政府が推進する介護費支援、健康保険給付化などの最新政策情報'
                },
                caregiving: {
                    title: '介護技術と方法',
                    desc: '実際の介護に必要な技術とノウハウ'
                },
                insurance: {
                    title: '保険制度',
                    desc: '介護関連保険制度および約款情報'
                },
                documentary: {
                    title: 'ドキュメンタリー',
                    desc: '家族介護の現実を扱ったドキュメンタリー'
                }
            },
            videos: {
                policy1: {
                    title: '療養病院介護費健康保険給付化',
                    desc: '2026年から介護費自己負担が100%→30%へ大幅軽減'
                },
                policy2: {
                    title: '介護費給付化公聴会',
                    desc: '医療中心の療養病院革新および介護費給付化推進方向'
                },
                policy3: {
                    title: '介護費70%支援制度案内',
                    desc: '月200万ウォンの介護費が60万ウォンに！制度完全整理'
                },
                policy4: {
                    title: '介護費制度はどう変わるか',
                    desc: '介護破産、介護殺人を防ぐ新しい制度変化'
                },
                caregiving1: {
                    title: '家族療養制度案内',
                    desc: '家族を介護しながらお金も稼げる制度'
                },
                caregiving2: {
                    title: '介護支援サービス',
                    desc: '患者も家族も苦しい介護を助ける支援サービス'
                },
                insurance1: {
                    title: '家族介護保険案内',
                    desc: '2025年家族介護保険約款変更事項'
                },
                insurance2: {
                    title: '健康保険適用案内',
                    desc: '介護費健康保険適用詳細案内'
                },
                documentary1: {
                    title: 'ドキュメンタリー - 家族介護',
                    desc: '家族介護の現実を扱った感動ドキュメンタリー'
                }
            }
        },
        community: {
            title: 'コミュニティ',
            subtitle: '患者とご家族のための情報共有',
            cards: {
                organDonation: {
                    title: '脳死臓器提供手続き',
                    desc: '命を分かち合う臓器提供の手続きと案内',
                    action: '詳細を見る'
                },
                caregiverVideos: {
                    title: '家族介護動画資料',
                    desc: '家族介護に関する有用な動画集',
                    action: '詳細を見る'
                },
                patientRights: {
                    title: '患者・保護者の権利',
                    desc: '患者と保護者の権利および苦情手続きの案内',
                    action: '詳細を見る'
                },
                contactInfo: {
                    title: '主要連絡先',
                    desc: '緊急時および必須連絡先一覧',
                    action: '詳細を見る'
                },
                funeralServices: {
                    title: '葬儀会社と納骨堂',
                    desc: '全国の葬儀会社と納骨堂の連絡先情報',
                    action: '詳細を見る'
                },
                forum: {
                    title: '自由掲示板',
                    desc: '患者と保護者の経験共有とコミュニケーションスペース',
                    action: '掲示板へ'
                },
                papers: {
                    title: '論文 (韓国語/英語)',
                    desc: '脳疾患関連の国内外学術論文と研究資料',
                    action: '論文を見る'
                },
                insurance: {
                    title: '保険',
                    desc: '脳疾患治療のための保険情報とガイド',
                    action: '保険情報を見る'
                },
                support: {
                    title: '支援政策',
                    desc: '政府および地方自治体の支援政策案内',
                    action: '政策を見る'
                },
                supplies: {
                    title: '介護用品',
                    desc: '必須介護用品と購入情報',
                    action: '用品を見る'
                },
                complaints: {
                    title: '苦情 (病院/政府機関)',
                    desc: '病院および政府機関に対する苦情受付',
                    action: '苦情を申し立てる'
                }
            }
        },
        hospitalSearch: {
            pageTitle: '病院検索 - 脳疾患ケア',
            mainTitle: '脳疾患専門病院検索',
            searchStats: '7段階病院分類（種類/地域別） • 3,500+ 病院検索データベース',
            searchTitle: '🔍 病院名または地域で検索',
            searchPlaceholder: '病院名または地域を入力してください（例：ソウル大学病院、江南区）',
            searchButton: '検索',
            categoryTitle: '病院分類別フィルター',
            regionTitle: '地域別フィルター',
            reservationButton: '予約診療可能病院を見る',
            reservationSubtext: 'オンライン診療予約可能な全国脳疾患専門病院案内',
            resultCount: '検索結果:',
            resultUnit: '件',
            categories: {
                all: '全体',
                tertiary: '上級総合病院',
                general: '総合病院',
                specialized: '専門病院',
                nursing: '療養病院',
                rehabilitation: 'リハビリ病院',
                oriental: '韓方病院',
                regular: '一般病院'
            },
            regions: {
                all: '全国',
                seoul: 'ソウル',
                gyeonggi: '京畿',
                incheon: '仁川',
                busan: '釜山',
                daegu: '大邱',
                daejeon: '大田',
                gwangju: '光州',
                ulsan: '蔚山',
                sejong: '世宗',
                gangwon: '江原',
                chungbuk: '忠北',
                chungnam: '忠南',
                jeonbuk: '全北',
                jeonnam: '全南',
                gyeongbuk: '慶北',
                gyeongnam: '慶南',
                jeju: '済州'
            }
        },
        rating: {
            like: 'いいね',
            dislike: 'よくない',
            recommend: 'おすすめ'
        },
        careDiary: {
            title: '介護日記 - 脳疾患ケア',
            pageTitle: '📝 介護日記',
            pageSubtitle: '患者の日常を記録し、保護者と共有しましょう',
            newRecord: '新しい記録',
            voiceRecord: '音声録音',
            takePhoto: '写真撮影',
            uploadFile: 'ファイルアップロード',
            medicalLens: 'メディカルレンズ',
            filterBy: 'フィルター:',
            medication: '服薬',
            meal: '食事',
            vital: 'バイタルサイン',
            recovery: '回復状態',
            showAll: '全て表示',
            emptyTitle: 'まだ記録がありません',
            emptySubtitle: '最初の介護日記を書きましょう！',
            createFirst: '最初の記録を作成',
            modal: {
                title: '新しい介護日記',
                dateTime: '日時',
                category: 'カテゴリー',
                voiceRecording: '音声録音',
                startRecording: '録音開始',
                stopRecording: '録音停止',
                recording: '録音中...',
                uploadAudio: '音声ファイルアップロード',
                media: '写真/動画',
                takePhoto: '写真撮影',
                recordVideo: '動画撮影',
                uploadMedia: 'ファイルアップロード',
                content: '内容',
                transcriptionNote: '* 音声録音は自動的にテキストに変換されます',
                notify: '保護者通知',
                sms: 'SMS',
                kakao: 'KakaoTalk',
                telegram: 'Telegram',
                save: '保存',
                saveDraft: '下書き保存'
            }
        },
        medicalLens: {
            title: 'メディカルレンズ - 脳疾患ケア',
            pageTitle: 'メディカルレンズ',
            pageSubtitle: '薬剤ラベルを撮影するとAIが自動分析します',
            step1: '写真撮影',
            step2: 'AI分析',
            step3: '日記に保存',
            step4: '保護者に送信',
            captureTitle: '薬剤ラベル撮影',
            startCamera: 'カメラ起動',
            capture: '撮影',
            stop: '停止',
            uploadPhoto: '写真アップロード',
            analysisTitle: 'AI分析結果',
            analyzing: '分析中...',
            efficacy: '効能・効果',
            reason: '投与理由',
            sideEffects: '副作用',
            contraindications: '禁忌事項',
            saveToDiary: '日記に保存',
            sendToGuardian: '保護者に送信',
            analyzeAnother: '別の薬を分析',
            successTitle: '保存完了！',
            successMessage: '介護日記に保存し、保護者に送信しました。',
            viewDiary: '日記を見る',
            scanAgain: '再スキャン',
            info1Title: '簡単撮影',
            info1Text: '薬剤ラベルを撮影するだけ',
            info2Title: 'AI自動分析',
            info2Text: '薬名、成分、効能を自動認識',
            info3Title: 'リアルタイム共有',
            info3Text: '保護者に即座に送信'
        },
        signup: {
            pageTitle: '会員登録 - CASHiQ 脳疾患ケア',
            backToHome: 'ホームに戻る',
            membershipTitle: '会員レベルを選択',
            signupTitle: '会員登録',
            signupSubtitle: 'CASHiQと一緒に健康なケアを始めましょう',
            free: {
                title: '無料会員',
                subtitle: 'Free Membership',
                price: '₩0',
                duration: '永久無料',
                feature1: '1日病院検索3回',
                feature2: 'お知らせ閲覧',
                button: '無料で始める'
            },
            premium1Year: {
                title: 'プレミアム 1年',
                subtitle: 'Premium 1 Year',
                price: '₩68,000',
                duration: '約 ₩5,666/月',
                feature1: 'プラットフォーム全メニュー使用',
                feature2: '全サブメニューアクセス',
                feature3: '無制限病院検索',
                feature4: 'コミュニティ全体利用',
                feature5: '病院レビュー＆評価',
                feature6: 'フィルタリング＆地図検索',
                feature7: '提携病院割引',
                feature8: '優先顧客サポート'
            },
            premium2Year: {
                title: 'プレミアム 2年',
                subtitle: 'Premium 2 Years',
                badge: '32% 割引!',
                price: '₩100,000',
                duration: '約 ₩4,166/月',
                feature1: '1年プランのすべての特典',
                feature2: 'プラットフォーム全機能使用',
                feature3: '₩36,000 追加節約',
                feature4: 'プレミアム介護ガイド',
                feature5: 'VIP専用特典'
            },
            form: {
                nameLabel: '名前',
                namePlaceholder: '山田太郎',
                emailLabel: 'メール',
                emailPlaceholder: 'email@example.com',
                phoneLabel: '電話番号',
                phonePlaceholder: '010-1234-5678',
                passwordLabel: 'パスワード',
                passwordPlaceholder: '8文字以上',
                passwordConfirmLabel: 'パスワード確認',
                passwordConfirmPlaceholder: 'パスワード再入力',
                termsLabel: '利用規約とプライバシーポリシーに同意します',
                marketingLabel: 'マーケティング情報の受信に同意します（任意）',
                selectedPlan: '選択したプラン：',
                submitButton: '会員登録',
                loginText: 'すでに会員ですか？',
                loginLink: 'ログイン',
                required: '*'
            }
        }
    }
};

// 현재 언어 (기본값: 한국어)
let currentLang = localStorage.getItem('language') || 'ko';

// 페이지 언어 업데이트
function updatePageLanguage() {
    // data-i18n 속성을 가진 모든 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // placeholder 업데이트
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(key);
        if (translation) {
            element.placeholder = translation;
        }
    });

    // HTML lang 속성 업데이트
    document.documentElement.lang = currentLang;
}

// 중첩된 번역 키 가져오기
function getNestedTranslation(key) {
    const keys = key.split('.');
    let translation = translations[currentLang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return null;
        }
    }
    
    return translation;
}

// 활성 언어 버튼 업데이트
function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            // 'active' 클래스가 있으면 사용 (signup 페이지용)
            // 없으면 기본 스타일 적용 (다른 페이지용)
            if (btn.classList.contains('lang-btn')) {
                btn.classList.add('active');
                btn.classList.add('bg-blue-100', 'text-primary', 'font-semibold');
            }
        } else {
            btn.classList.remove('active');
            btn.classList.remove('bg-blue-100', 'text-primary', 'font-semibold');
        }
    });
}

// 언어 전환 함수
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    localStorage.setItem('currentLanguage', lang); // For chatbot compatibility
    updatePageLanguage();
    updateActiveLanguageButton();
    
    // Dispatch custom event for other components (like chatbot)
    window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { lang: lang }
    }));
}

// Expose functions to window for global access
window.updatePageLanguage = updatePageLanguage;
window.switchLanguage = switchLanguage;

// 페이지 로드 시 언어 초기화
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
    updateActiveLanguageButton();
});
