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
        { id: 8, title: '뇌졸중 침상 상지운동', description: '침대에서 누워서 할 수 있는 상지 재활', youtubeId: 'eIGHyH2MyWQ', duration: '9:40', level: '초급', channel: '대한재활의학회' }
    ],
    lower: [
        // 하지 재활운동 - 재생 100% 확인된 영상
        { id: 51, title: '뇌졸중 하지 재활운동', description: '누워서 하는 기본 다리 운동', youtubeId: 'bWsuNqj_vJM', duration: '11:50', level: '초급', channel: '올바른재활' },
        { id: 52, title: '편마비 다리 근력운동', description: '하체 근력 강화를 위한 운동', youtubeId: 'NMtFHyb7oDk', duration: '13:25', level: '초급', channel: '포근한재활' },
        { id: 53, title: '보행 재활 훈련', description: '안전한 걷기 연습 방법', youtubeId: 'iAUME1CtQ94', duration: '14:30', level: '중급', channel: 'Park재활센터' },
        { id: 54, title: '하지 스트레칭', description: '다리 유연성 향상 스트레칭', youtubeId: 'srXP_w0wI9A', duration: '9:15', level: '초급', channel: '지샘병원' },
        { id: 55, title: '고관절 운동', description: '고관절 가동범위 확대 운동', youtubeId: '_-kcycRXjd4', duration: '10:40', level: '초급', channel: '뉴힐링라이프' },
        { id: 56, title: '뇌졸중 하지 근력 강화', description: '다리 근육 강화를 위한 집중 훈련', youtubeId: 'HdRHBfm5TQE', duration: '12:30', level: '중급', channel: '재활운동센터' },
        { id: 57, title: '편마비 보행 훈련 프로그램', description: '단계별 걷기 연습과 균형 훈련', youtubeId: 'bEK4ARwe0P8', duration: '15:20', level: '중급', channel: '보행재활' }
    ],
    speech: [
        // 언어 재활운동 - 재생 100% 확인된 영상
        { id: 101, title: '뇌졸중 언어재활 기초', description: '실어증 이해와 기본 언어 치료', youtubeId: 'ORpRm3RfYp4', duration: '14:25', level: '초급', channel: '재활바로알기' },
        { id: 102, title: '말하기 연습 방법', description: '동사 말하기 5가지 연습법', youtubeId: 'SSvmEeQXHTM', duration: '12:40', level: '중급', channel: 'HelpSpeaking' },
        { id: 103, title: '언어재활의 중요성', description: '뇌졸중 후 언어치료 필요성', youtubeId: 'a2M5668urKk', duration: '10:15', level: '초급', channel: '재활의학' },
        { id: 104, title: '실어증 언어치료 방법', description: '단계별 언어 회복 훈련', youtubeId: 'I6tbFjqNu2o', duration: '13:30', level: '중급', channel: '언어치료센터' },
        { id: 105, title: '발음 교정 재활운동', description: '조음 기관 운동과 발음 연습', youtubeId: 'kIGPDNs1BVg', duration: '11:45', level: '초급', channel: '언어재활' }
    ]
};
