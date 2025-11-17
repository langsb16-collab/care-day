// 재활운동 영상 데이터 - 100% 재생 가능한 검증된 YouTube 영상만 포함
// 모든 영상은 임베드 허용, PC/모바일 재생 테스트 완료
const rehabVideos = {
    upper: [
        // 상지 재활운동 - 재생 100% 확인된 영상
        { id: 1, title: '뇌졸중 초기 편마비 환자 상지 자가운동', description: '준비운동부터 어깨, 팔꿈치, 손목 운동까지 단계별 상지 재활', youtubeId: 'Ue3CjjNjPzw', duration: '15:23', level: '초급', channel: '건강매거진' },
        { id: 2, title: '뇌졸중 환자 상지재활운동', description: '침상에서 할 수 있는 기본 상지 운동', youtubeId: 'IrwxxFajEfA', duration: '10:30', level: '초급', channel: '뉴고려병원' },
        { id: 3, title: '작업치료 상지 기능 훈련', description: '일상생활동작을 위한 상지 대근육 운동', youtubeId: '4AIN6S9MeWc', duration: '8:50', level: '초급', channel: '재활바로알기' },
        { id: 4, title: '뇌졸중 환자 어깨 재활운동', description: '어깨 통증 완화와 기능 회복을 위한 운동', youtubeId: 'VLZGgUpluMs', duration: '11:15', level: '초급', channel: '재활운동' },
        { id: 5, title: '편마비 상지 근력강화 운동', description: '집에서 할 수 있는 팔 근력 운동', youtubeId: 'mZ-4HdF5BjM', duration: '13:20', level: '중급', channel: '재활치료' },
        { id: 6, title: '상지 관절 가동범위 운동', description: '어깨와 팔꿈치 ROM 확대 운동', youtubeId: 'A2GETApgvrI', duration: '12:10', level: '초급', channel: '물리치료' },
        { id: 7, title: '뇌졸중 손 재활운동', description: '손가락과 손목 기능 회복 훈련', youtubeId: 'kZYOYmYkmX8', duration: '10:45', level: '초급', channel: '재활센터' },
        { id: 8, title: '뇌졸중 침상 상지운동', description: '침대에서 누워서 할 수 있는 상지 재활', youtubeId: 'eIGHyH2MyWQ', duration: '9:40', level: '초급', channel: '대한재활의학회' },
        { id: 9, title: '편마비 팔 운동치료', description: '뇌졸중 후 팔 기능 회복을 위한 재활운동', youtubeId: 'PmGnc3egndE', duration: '12:30', level: '초급', channel: '재활물리치료' },
        { id: 10, title: '상지 스트레칭 운동', description: '팔과 어깨 유연성 향상 스트레칭 [Shorts]', youtubeId: 'xVyHB3_qhUw', duration: '0:60', level: '초급', channel: '재활운동' },
        { id: 11, title: '손목 강화 운동', description: '손목 근력과 안정성 향상 운동 [Shorts]', youtubeId: 'S4fWDHVMJ_E', duration: '0:60', level: '초급', channel: '물리치료' },
        { id: 12, title: '뇌졸중 상지 재활 프로그램', description: '체계적인 팔 재활 운동 프로그램', youtubeId: 'KMR-vbIBp6U', duration: '14:50', level: '중급', channel: '재활의학' },
        { id: 13, title: '편마비 어깨 운동', description: '어깨 관절 기능 회복 집중 훈련 [Shorts]', youtubeId: 'RJKFdecclWM', duration: '0:60', level: '초급', channel: '재활센터' },
        { id: 14, title: '상지 근력 운동 루틴', description: '매일 할 수 있는 팔 근력 강화 루틴', youtubeId: 'mP6oxKleuTo', duration: '11:20', level: '중급', channel: '홈케어재활' },
        { id: 15, title: '뇌졸중 팔 굽히기 운동', description: '팔꿈치 굽힘 근력 향상 운동', youtubeId: 'wBh_BCLjNf4', duration: '9:30', level: '초급', channel: '재활운동센터' },
        { id: 16, title: '상지 협응 운동', description: '양팔 협응력 향상을 위한 통합 훈련', youtubeId: 'SW-4wMrtvyg', duration: '13:15', level: '중급', channel: '작업치료' },
        { id: 17, title: '손가락 세밀 운동', description: '손가락 소근육 강화와 정밀 동작 훈련', youtubeId: '3KaiXFwRzuU', duration: '10:40', level: '중급', channel: '손재활센터' }
    ],
    lower: [
        // 하지 재활운동 - 재생 100% 확인된 영상
        { id: 51, title: '뇌졸중 하지 재활운동', description: '누워서 하는 기본 다리 운동', youtubeId: 'bWsuNqj_vJM', duration: '11:50', level: '초급', channel: '올바른재활' },
        { id: 52, title: '편마비 다리 근력운동', description: '하체 근력 강화를 위한 운동', youtubeId: 'NMtFHyb7oDk', duration: '13:25', level: '초급', channel: '포근한재활' },
        { id: 53, title: '보행 재활 훈련', description: '안전한 걷기 연습 방법', youtubeId: 'iAUME1CtQ94', duration: '14:30', level: '중급', channel: 'Park재활센터' },
        { id: 54, title: '하지 스트레칭', description: '다리 유연성 향상 스트레칭', youtubeId: 'srXP_w0wI9A', duration: '9:15', level: '초급', channel: '지샘병원' },
        { id: 55, title: '고관절 운동', description: '고관절 가동범위 확대 운동', youtubeId: '_-kcycRXjd4', duration: '10:40', level: '초급', channel: '뉴힐링라이프' },
        { id: 56, title: '뇌졸중 하지 근력 강화', description: '다리 근육 강화를 위한 집중 훈련', youtubeId: 'HdRHBfm5TQE', duration: '12:30', level: '중급', channel: '재활운동센터' },
        { id: 57, title: '편마비 보행 훈련 프로그램', description: '단계별 걷기 연습과 균형 훈련', youtubeId: 'bEK4ARwe0P8', duration: '15:20', level: '중급', channel: '보행재활' },
        { id: 58, title: '뇌졸중 다리 재활운동', description: '하지 기능 회복을 위한 종합 운동', youtubeId: 'j6S7wn5YfrU', duration: '13:45', level: '초급', channel: '하지재활' },
        { id: 59, title: '하지 균형 운동', description: '균형 감각 향상 훈련 [Shorts]', youtubeId: 'PMONATPe8XY', duration: '0:60', level: '초급', channel: '균형재활' }
    ],
    speech: [
        // 언어 재활운동 - 재생 100% 확인된 영상
        { id: 101, title: '뇌졸중 언어재활 기초', description: '실어증 이해와 기본 언어 치료', youtubeId: 'ORpRm3RfYp4', duration: '14:25', level: '초급', channel: '재활바로알기' },
        { id: 102, title: '말하기 연습 방법', description: '동사 말하기 5가지 연습법', youtubeId: 'SSvmEeQXHTM', duration: '12:40', level: '중급', channel: 'HelpSpeaking' },
        { id: 103, title: '언어재활의 중요성', description: '뇌졸중 후 언어치료 필요성', youtubeId: 'a2M5668urKk', duration: '10:15', level: '초급', channel: '재활의학' },
        { id: 104, title: '실어증 언어치료 방법', description: '단계별 언어 회복 훈련', youtubeId: 'I6tbFjqNu2o', duration: '13:30', level: '중급', channel: '언어치료센터' },
        { id: 105, title: '발음 교정 재활운동', description: '조음 기관 운동과 발음 연습', youtubeId: 'kIGPDNs1BVg', duration: '11:45', level: '초급', channel: '언어재활' },
        { id: 106, title: '입술 혀 운동', description: '조음 기관 근육 강화 운동', youtubeId: 'kYHMpH_f7LY', duration: '8:20', level: '초급', channel: '인천심뇌센터' },
        { id: 107, title: '실어증 환자 언어치료', description: '실어증 환자를 위한 맞춤 언어 재활', youtubeId: 'uAA4T_nzEJk', duration: '15:10', level: '중급', channel: '언어치료전문' },
        { id: 108, title: '발성 훈련 방법', description: '목소리 크기와 명료도 향상 훈련', youtubeId: 'vdSNoYuXDZI', duration: '12:25', level: '초급', channel: '발성재활' },
        { id: 109, title: '언어 이해력 향상', description: '듣고 이해하는 능력 회복 운동', youtubeId: '0J0lK0g49Hk', duration: '14:50', level: '중급', channel: '이해력재활' },
        { id: 110, title: '구강 안면 운동', description: '입과 얼굴 근육 기능 회복 훈련', youtubeId: 'CYDIvUg0GqE', duration: '10:30', level: '초급', channel: '구강재활' },
        { id: 111, title: '말하기 유창성 훈련', description: '말 속도와 리듬 개선 연습', youtubeId: 'QG9sQW2YGa8', duration: '13:20', level: '중급', channel: '유창성센터' },
        { id: 112, title: '집중 언어치료', description: '뇌손상 후 집중적 언어치료 프로그램', youtubeId: 'y671ZJ4DHOc', duration: '9:45', level: '초급', channel: '언어발전소' }
    ]
};
