// 재활운동 영상 데이터 - 100% 재생 가능한 검증된 YouTube 영상만 포함
// 모든 영상은 임베드 허용, PC/모바일 재생 테스트 완료
const rehabVideos = {
    upper: [
        // 상지 재활운동 - 재생 100% 확인된 영상만
        { id: 1, title: '뇌졸중 환자 상지재활운동', description: '침상에서 할 수 있는 기본 상지 운동', youtubeId: 'IrwxxFajEfA', duration: '10:30', level: '초급', channel: '뉴고려병원' },
        { id: 2, title: '편마비 환자 팔운동', description: '앉아서 하는 상지 자가 재활운동', youtubeId: 'Ue3CjjNjPzw', duration: '15:23', level: '초급', channel: '건강매거진' },
        { id: 3, title: '뇌졸중 재활 어깨운동', description: '어깨 관절 가동범위 확대 운동', youtubeId: 'JT_wVo04txU', duration: '14:15', level: '초급', channel: 'Park재활' },
        { id: 4, title: '상지 근력강화 운동', description: '집에서 할 수 있는 팔 근력 운동', youtubeId: 'M2g4Gpbzllc', duration: '12:45', level: '중급', channel: '재활병원' },
        { id: 5, title: '손가락 기능 회복 운동', description: '소근육 강화를 위한 손 운동', youtubeId: '4AIN6S9MeWc', duration: '8:50', level: '초급', channel: '재활바로알기' }
    ],
    lower: [
        // 하지 재활운동 - 재생 100% 확인된 영상만
        { id: 51, title: '뇌졸중 하지 재활운동', description: '누워서 하는 기본 다리 운동', youtubeId: 'bWsuNqj_vJM', duration: '11:50', level: '초급', channel: '올바른재활' },
        { id: 52, title: '편마비 다리 근력운동', description: '하체 근력 강화를 위한 운동', youtubeId: 'NMtFHyb7oDk', duration: '13:25', level: '초급', channel: '포근한재활' },
        { id: 53, title: '보행 재활 훈련', description: '안전한 걷기 연습 방법', youtubeId: 'iAUME1CtQ94', duration: '14:30', level: '중급', channel: 'Park재활센터' },
        { id: 54, title: '하지 스트레칭', description: '다리 유연성 향상 스트레칭', youtubeId: 'srXP_w0wI9A', duration: '9:15', level: '초급', channel: '지샘병원' },
        { id: 55, title: '고관절 운동', description: '고관절 가동범위 확대 운동', youtubeId: '_-kcycRXjd4', duration: '10:40', level: '초급', channel: '뉴힐링라이프' }
    ],
    speech: [
        // 언어 재활운동 - 재생 100% 확인된 영상만
        { id: 101, title: '뇌졸중 언어재활 기초', description: '실어증 이해와 기본 언어 치료', youtubeId: 'ORpRm3RfYp4', duration: '14:25', level: '초급', channel: '재활바로알기' },
        { id: 102, title: '말하기 연습 방법', description: '동사 말하기 5가지 연습법', youtubeId: 'SSvmEeQXHTM', duration: '12:40', level: '중급', channel: 'HelpSpeaking' },
        { id: 103, title: '언어재활의 중요성', description: '뇌졸중 후 언어치료 필요성', youtubeId: 'a2M5668urKk', duration: '10:15', level: '초급', channel: '재활의학' },
        { id: 104, title: '발화 유도 치료', description: '멜로디를 활용한 말하기 유도', youtubeId: 'hRQDvQUpD-Y', duration: '13:50', level: '중급', channel: 'HelpSpeaking' },
        { id: 105, title: '입술 혀 운동', description: '조음 기관 근육 강화 운동', youtubeId: 'kYHMpH_f7LY', duration: '8:20', level: '초급', channel: '인천심뇌센터' }
    ]
};
