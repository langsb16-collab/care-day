// 병원 데이터 생성 스크립트
const fs = require('fs');

// 지역 목록
const regions = ['서울', '경기', '인천', '부산', '대구', '대전', '광주', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];

// 카테고리별 설정
const categories = {
    '상급종합': {
        badge: 'badge-상급종합병원',
        specialties: ['신경과', '신경외과', '재활의학과', '응급의학과', '영상의학과'],
        prefix: ['국립', '서울', '부산', '대구', '대전', '광주', '울산', '인천', '경기', '강원'],
        suffix: ['대학교병원', '의료원', '병원', '종합병원']
    },
    '종합병원': {
        badge: 'badge-종합병원',
        specialties: ['신경과', '신경외과', '내과', '외과', '재활의학과'],
        prefix: ['중앙', '백', '한일', '서울', '부산', '대구', '세종', '평택', '천안', '청주'],
        suffix: ['병원', '의료원', '종합병원', '메디컬센터']
    },
    '전문병원': {
        badge: 'badge-전문병원',
        specialties: ['뇌질환전문', '뇌졸중센터', '뇌혈관질환', '신경재활'],
        prefix: ['뇌혈관', '뇌질환', '신경', '재활', '희망', '사랑', '연세', '고려', '한림'],
        suffix: ['전문병원', '병원', '재활병원', '의료원']
    },
    '요양병원': {
        badge: 'badge-요양병원',
        specialties: ['뇌졸중요양', '장기요양', '노인요양', '재활치료'],
        prefix: ['효', '사랑', '행복', '은빛', '실버', '장수', '건강', '평화', '소망'],
        suffix: ['요양병원', '실버병원', '요양원', '케어센터']
    },
    '재활병원': {
        badge: 'badge-재활병원',
        specialties: ['뇌졸중재활', '뇌손상재활', '운동치료', '물리치료'],
        prefix: ['재활', '희망', '새생명', '그린', '나눔', '건강', '행복', '사랑'],
        suffix: ['재활병원', '병원', '재활센터', '의료원']
    },
    '한방병원': {
        badge: 'badge-한방병원',
        specialties: ['중풍치료', '침구치료', '한약치료', '뇌질환한방'],
        prefix: ['경희', '동국', '대한', '원광', '세명', '자생', '청연', '모커'],
        suffix: ['한방병원', '한의원', '한방재활병원']
    },
    '일반병원': {
        badge: 'badge-일반병원',
        specialties: ['신경과', '내과', '외과', '재활의학과'],
        prefix: ['서울', '부산', '인천', '대전', '광주', '새', '밝은', '튼튼'],
        suffix: ['병원', '의원', '의료원', '클리닉']
    }
};

// 전화번호 생성
function generatePhone(region) {
    const areaCodes = {
        '서울': '02', '경기': '031', '인천': '032', '부산': '051', '대구': '053',
        '대전': '042', '광주': '062', '울산': '052', '세종': '044', '강원': '033',
        '충북': '043', '충남': '041', '전북': '063', '전남': '061', '경북': '054',
        '경남': '055', '제주': '064'
    };
    const areaCode = areaCodes[region] || '02';
    const middle = Math.floor(Math.random() * 9000) + 1000;
    const last = Math.floor(Math.random() * 9000) + 1000;
    return `${areaCode}-${middle}-${last}`;
}

// 주소 생성
function generateAddress(region) {
    const districts = {
        '서울': ['강남구', '서초구', '송파구', '강동구', '강서구', '양천구', '구로구', '영등포구', '동작구', '관악구', '마포구', '서대문구', '은평구', '노원구', '도봉구', '강북구', '성북구', '중랑구', '동대문구', '성동구', '광진구', '종로구', '중구', '용산구'],
        '경기': ['수원시', '성남시', '고양시', '용인시', '부천시', '안산시', '안양시', '남양주시', '화성시', '평택시', '의정부시', '파주시'],
        '인천': ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구'],
        '부산': ['해운대구', '남구', '동구', '서구', '중구', '부산진구', '동래구', '연제구', '수영구'],
        '대구': ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구'],
        '대전': ['동구', '중구', '서구', '유성구', '대덕구'],
        '광주': ['동구', '서구', '남구', '북구', '광산구'],
        '울산': ['중구', '남구', '동구', '북구', '울주군']
    };
    
    const dist = districts[region] || ['중앙구'];
    const district = dist[Math.floor(Math.random() * dist.length)];
    const roadNum = Math.floor(Math.random() * 500) + 1;
    return `${region} ${district} ${['중앙로', '병원로', '메디컬로', '건강로', '의료로'][Math.floor(Math.random() * 5)]} ${roadNum}`;
}

// 웹사이트 생성
function generateWebsite(name) {
    const clean = name.replace(/병원|의원|의료원|한방병원|재활병원|요양병원|전문병원|종합병원/g, '').trim();
    return `www.${clean.toLowerCase().replace(/\s+/g, '')}.com`;
}

// 병원 카드 HTML 생성
function generateHospitalCard(category, categoryConfig, index) {
    const region = regions[Math.floor(Math.random() * regions.length)];
    const prefix = categoryConfig.prefix[Math.floor(Math.random() * categoryConfig.prefix.length)];
    const suffix = categoryConfig.suffix[Math.floor(Math.random() * categoryConfig.suffix.length)];
    const name = `${prefix}${suffix}${index > 0 ? index : ''}`;
    
    const specialtiesCount = Math.floor(Math.random() * 3) + 2;
    const selectedSpecialties = [];
    for (let i = 0; i < specialtiesCount; i++) {
        const spec = categoryConfig.specialties[Math.floor(Math.random() * categoryConfig.specialties.length)];
        if (!selectedSpecialties.includes(spec)) {
            selectedSpecialties.push(spec);
        }
    }
    
    return `
            <div class="hospital-card" data-category="${category}" data-region="${region}" data-name="${name}">
                <div class="hospital-header">
                    <h3 class="hospital-name">${name}</h3>
                    <span class="hospital-badge ${categoryConfig.badge}">${category}</span>
                </div>
                <div class="hospital-info">
                    <div><span class="info-icon">📍</span> ${generateAddress(region)}</div>
                    <div><span class="info-icon">☎️</span> ${generatePhone(region)}</div>
                    <div><span class="info-icon">🌐</span> ${generateWebsite(name)}</div>
                </div>
                <div class="specialties">
${selectedSpecialties.map(s => `                    <span class="specialty-tag">${s}</span>`).join('\n')}
                </div>
            </div>`;
}

// 모든 병원 데이터 생성
function generateAllHospitals() {
    let html = '';
    
    for (const [category, config] of Object.entries(categories)) {
        const targetCount = 500;
        html += `\n            <!-- ${category} (500개) -->\n`;
        
        for (let i = 1; i <= targetCount; i++) {
            html += generateHospitalCard(category, config, i);
        }
    }
    
    return html;
}

// 메인 실행
console.log('🏥 병원 데이터 생성 시작...');
const hospitalsHTML = generateAllHospitals();
fs.writeFileSync('generated_hospitals.html', hospitalsHTML);
console.log('✅ 생성 완료: generated_hospitals.html');
console.log(`📊 총 ${(hospitalsHTML.match(/hospital-card/g) || []).length}개 병원 생성됨`);
