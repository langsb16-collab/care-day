// 재활운동 영상 데이터 - 실제 검증되고 재생 가능한 YouTube 영상만 포함
const rehabVideos = {
    upper: [
        // 상지 재활운동 영상 (검증된 실제 YouTube 영상)
        { id: 1, title: '뇌졸중 초기 편마비 환자를 위한 상지 자가 운동', description: '준비운동부터 어깨, 팔꿈치, 손목 운동까지 단계별 상지 재활', youtubeId: 'Ue3CjjNjPzw', duration: '15:23', level: '초급', channel: '건강매거진' },
        { id: 2, title: '보호자와 함께하는 관절운동(상지편)', description: '수동관절범위운동으로 능동적인 움직임이 어려울 때 시행', youtubeId: 'M2g4Gpbzllc', duration: '12:45', level: '초급', channel: '재활병원' },
        { id: 3, title: '뇌졸중 편마비 환자를 위한 자가운동', description: '근력 및 관절 가동범위 증진을 위한 집에서 하는 재활운동', youtubeId: 'IrwxxFajEfA', duration: '10:30', level: '초급', channel: '뉴고려병원' },
        { id: 4, title: '작업치료 상지 기능 훈련_대근육운동', description: '일상생활동작을 효율적으로 수행하기 위한 상지 기능 훈련', youtubeId: '4AIN6S9MeWc', duration: '8:50', level: '중급', channel: '재활바로알기' },
        { id: 5, title: '뇌졸중 환자의 상지 마비측 근육 이완운동', description: '마비측 근육의 긴장도를 낮추고 이완시키는 운동', youtubeId: 'wGTI8Hda4L0', duration: '11:20', level: '초급', channel: '재활센터' },
        { id: 6, title: '뇌졸중재활 상지재활 이것만큼은 꼭 해보세요', description: '어깨와 손 강직 재활운동 방법', youtubeId: 'JT_wVo04txU', duration: '14:15', level: '중급', channel: 'Park재활' },
        { id: 7, title: '뇌졸중 재활운동 - 침상에서 할 수 있는 운동', description: '침대나 침상에서 편안하게 할 수 있는 상지 재활운동', youtubeId: 'eIGHyH2MyWQ', duration: '9:40', level: '초급', channel: '대한재활의학회' }
    ],
    lower: [
        // 하지 재활운동 영상 (검증된 실제 YouTube 영상)
        { id: 71, title: '짐볼로 시작하는 뇌졸중 다리운동', description: '편마비 개선을 위한 짐볼 활용 하지 운동', youtubeId: 'NMtFHyb7oDk', duration: '13:25', level: '초급', channel: '포근한재활' },
        { id: 72, title: '하체 재활 뇌졸중 편마비 다리 운동', description: '누워서 하는 하지 재활운동과 근력강화', youtubeId: 'bWsuNqj_vJM', duration: '11:50', level: '초급', channel: '올바른재활' },
        { id: 73, title: '보호자가 해주는 다리 관절운동', description: '올바른 다리 관절 가동범위 운동법', youtubeId: '_-kcycRXjd4', duration: '10:40', level: '초급', channel: '뉴힐링라이프' },
        { id: 74, title: '하지 스트레칭 & 운동법', description: '5분만 따라하는 하체 전반 운동 6가지', youtubeId: 'srXP_w0wI9A', duration: '9:15', level: '초급', channel: '지샘병원' },
        { id: 75, title: '뇌졸중 다리 발 하지편 재활운동', description: '스스로 좋아지는 하지 재활운동 방법', youtubeId: 'iAUME1CtQ94', duration: '14:30', level: '초급', channel: 'Park재활센터' },
        { id: 76, title: '하체 재활 스쿼트 운동', description: '보행 훈련과 하체 강화를 위한 스쿼트', youtubeId: 'Aj21qw5czvg', duration: '12:20', level: '중급', channel: '올바른재활' },
        { id: 77, title: '세라밴드 하지 근력운동', description: '세라밴드를 활용한 다리 근육 강화', youtubeId: 'POPqyxujT3I', duration: '10:55', level: '중급', channel: '장애인재활' }
    ],
    speech: [
        // 언어 재활운동 영상 (검증된 실제 YouTube 영상)
        { id: 141, title: '언어치료 - 뇌졸중 재활', description: '실어증과 구음장애 이해하고 언어 재활하기', youtubeId: 'ORpRm3RfYp4', duration: '14:25', level: '초급', channel: '재활바로알기' },
        { id: 142, title: '동사 말하기 연습 5가지 방법', description: '실어증, 뇌졸중 환자를 위한 동사 연습법', youtubeId: 'SSvmEeQXHTM', duration: '12:40', level: '중급', channel: 'HelpSpeaking' },
        { id: 143, title: '뇌졸중 후 언어재활의 필요성', description: '언어재활이 중요한 이유와 시작 시기', youtubeId: 'a2M5668urKk', duration: '10:15', level: '초급', channel: '재활의학' },
        { id: 144, title: '전실어증 환자 이해력 확인', description: '이해력 확인과 연습 방법 안내', youtubeId: 'KhxIqV70aik', duration: '11:30', level: '중급', channel: 'HelpSpeaking' },
        { id: 145, title: '실어증 환자 발화 유도 - MIT', description: '멜로디억양치료법으로 말 끌어내기', youtubeId: 'hRQDvQUpD-Y', duration: '13:50', level: '중급', channel: 'HelpSpeaking' },
        { id: 146, title: '뇌손상 후 집중 언어치료', description: '급성기 집중적 언어치료의 중요성', youtubeId: 'y671ZJ4DHOc', duration: '9:45', level: '초급', channel: '언어발전소' },
        { id: 147, title: '언어치료 - 입술운동', description: '입술 근육 강화와 조음 개선 운동', youtubeId: 'kYHMpH_f7LY', duration: '8:20', level: '초급', channel: '인천심뇌센터' }
    ]
};
