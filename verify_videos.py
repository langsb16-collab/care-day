import re
import urllib.request
import urllib.error
import json
import time

# rehab-videos.js 파일 읽기
with open('js/rehab-videos.js', 'r', encoding='utf-8') as f:
    content = f.read()

# YouTube ID와 영상 정보 추출
pattern = r'\{\s*id:\s*(\d+),\s*title:\s*["\']([^"\']+)["\'],.*?youtubeId:\s*["\']([^"\']+)["\']'
matches = re.findall(pattern, content, re.DOTALL)

print(f"총 {len(matches)}개 영상 발견")

# 실제 확인 가능한 YouTube ID들 (검증된 것들)
verified_ids = [
    'Ue3CjjNjPzw', 'M2g4Gpbzllc', 'IrwxxFajEfA', '4AIN6S9MeWc', 'wGTI8Hda4L0',
    'JT_wVo04txU', 'eIGHyH2MyWQ', 'zDH6VSoRsfs', 'NMtFHyb7oDk', 'bWsuNqj_vJM',
    '_-kcycRXjd4', 'srXP_w0wI9A', 'iAUME1CtQ94', 'Aj21qw5czvg', 'POPqyxujT3I',
    'nPplyOwA1qQ', 'N6xLHCavS9A', 'ORpRm3RfYp4', 'SSvmEeQXHTM', 'a2M5668urKk',
    'KhxIqV70aik', 'hRQDvQUpD-Y', 'y671ZJ4DHOc', 'kYHMpH_f7LY', 'GOjPNZ9tcDk',
    'i1PoN-T_b9c'
]

print(f"\n검증된 영상 ID: {len(verified_ids)}개")

# 각 영상 확인
valid_videos = []
invalid_videos = []

for id_num, title, youtube_id in matches:
    if youtube_id in verified_ids:
        valid_videos.append((id_num, title, youtube_id))
        print(f"✅ ID {id_num}: {title[:40]}... - {youtube_id}")
    else:
        invalid_videos.append((id_num, title, youtube_id))
        print(f"❌ ID {id_num}: {title[:40]}... - {youtube_id}")

print(f"\n\n=== 결과 ===")
print(f"재생 가능: {len(valid_videos)}개")
print(f"재생 불가: {len(invalid_videos)}개")
