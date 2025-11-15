import re
import json

# rehab-videos.js 파일 읽기
with open('js/rehab-videos.js', 'r', encoding='utf-8') as f:
    content = f.read()

# YouTube ID 패턴으로 모든 ID 추출
pattern = r"youtubeId:\s*'([^']+)'"
youtube_ids = re.findall(pattern, content)

# 중복 제거하고 유니크한 ID만 추출
unique_ids = list(set(youtube_ids))

print(f"총 {len(youtube_ids)}개 영상 중 유니크한 ID: {len(unique_ids)}개")
print("\n유니크한 YouTube ID 목록:")
for video_id in sorted(unique_ids):
    print(f"  - {video_id}")
