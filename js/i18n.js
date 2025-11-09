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
            rehab: '재활운동',
            insurance: '보험',
            support: '지원정책',
            supplies: '간병용품',
            community: '커뮤니티',
            medical: '명의찾기',
            complaints: '민원 (병원,국가기관)',
            emergency: '응급',
            papers: '논문 (한국어/영어)'
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
        emergency: {
            title: '응급 상황이신가요?',
            subtitle: '즉시 119에 연락하거나 가까운 응급실로 가세요',
            guide: '응급 가이드'
        },
        footer: {
            about: '서비스 소개',
            description: '뇌질환 환자와 가족을 위한 종합 정보 플랫폼',
            quick: '빠른 링크',
            contact: '연락처',
            languages: 'Languages',
            rights: 'All rights reserved.'
        },
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
            searchPlaceholder: '병원 이름, 지역명을 입력하세요 (예: 서울대병원, 강남구)',
            searchButton: '검색',
            categoryTitle: '병원 분류별 필터',
            regionTitle: '지역별 필터',
            resultCount: '검색 결과',
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
            rehab: 'Rehabilitation',
            insurance: 'Insurance',
            support: 'Support',
            supplies: 'Supplies',
            community: 'Community',
            medical: 'Find Doctors',
            complaints: 'Complaints (Hospital/Government)',
            emergency: 'Emergency',
            papers: 'Papers (KR/EN)'
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
        emergency: {
            title: 'Is this an emergency?',
            subtitle: 'Call 119 immediately or go to the nearest emergency room',
            guide: 'Emergency Guide'
        },
        footer: {
            about: 'About',
            description: 'Comprehensive information platform for brain disease patients and families',
            quick: 'Quick Links',
            contact: 'Contact',
            languages: 'Languages',
            rights: 'All rights reserved.'
        },
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
            searchPlaceholder: 'Enter hospital name or region (e.g., Seoul National University Hospital, Gangnam)',
            searchButton: 'Search',
            categoryTitle: 'Filter by Hospital Category',
            regionTitle: 'Filter by Region',
            resultCount: 'Search Results',
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
            rehab: '康复运动',
            insurance: '保险',
            support: '支持政策',
            supplies: '护理用品',
            community: '社区',
            medical: '寻找名医',
            complaints: '投诉 (医院/政府机关)',
            emergency: '急救',
            papers: '论文 (韩语/英语)'
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
        emergency: {
            title: '这是紧急情况吗？',
            subtitle: '请立即拨打119或前往最近的急诊室',
            guide: '急救指南'
        },
        footer: {
            about: '服务介绍',
            description: '为脑疾病患者及家属提供的综合信息平台',
            quick: '快速链接',
            contact: '联系方式',
            languages: '语言',
            rights: '版权所有。'
        },
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
            searchPlaceholder: '输入医院名称或地区（例：首尔大学医院、江南区）',
            searchButton: '搜索',
            categoryTitle: '按医院分类筛选',
            regionTitle: '按地区筛选',
            resultCount: '搜索结果',
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
            rehab: 'リハビリ運動',
            insurance: '保険',
            support: '支援政策',
            supplies: '介護用品',
            community: 'コミュニティ',
            medical: '名医を探す',
            complaints: '苦情 (病院/政府機関)',
            emergency: '緊急',
            papers: '論文 (韓国語/英語)'
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
        emergency: {
            title: '緊急事態ですか？',
            subtitle: 'すぐに119に連絡するか、最寄りの救急室に行ってください',
            guide: '緊急ガイド'
        },
        footer: {
            about: 'サービス紹介',
            description: '脳疾患患者とご家族のための総合情報プラットフォーム',
            quick: 'クイックリンク',
            contact: 'お問い合わせ',
            languages: '言語',
            rights: 'すべての権利を保有。'
        },
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
            searchPlaceholder: '病院名または地域を入力してください（例：ソウル大学病院、江南区）',
            searchButton: '検索',
            categoryTitle: '病院分類別フィルター',
            regionTitle: '地域別フィルター',
            resultCount: '検索結果',
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
        }
    }
};

// 현재 언어 (기본값: 한국어)
let currentLang = localStorage.getItem('language') || 'ko';

// 언어 전환 함수
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateActiveLanguageButton();
}

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
            btn.classList.add('bg-blue-100', 'text-primary', 'font-semibold');
        } else {
            btn.classList.remove('bg-blue-100', 'text-primary', 'font-semibold');
        }
    });
}

// 페이지 로드 시 언어 초기화
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
    updateActiveLanguageButton();
});
