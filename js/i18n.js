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
            medical: '명의찾기',
            emergency: '응급'
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
            medical: 'Find Doctors',
            emergency: 'Emergency'
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
            medical: '寻找名医',
            emergency: '急救'
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
            medical: '名医を探す',
            emergency: '緊急'
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
