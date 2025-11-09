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
