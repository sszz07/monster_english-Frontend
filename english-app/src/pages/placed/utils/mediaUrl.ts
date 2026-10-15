// import { S3_BASE_URL, ASSET_FOLDERS, ThemeKey } from '@/pages/placed/constants/mediaConfig';

// export const createMediaUrl = {
//   // 테마(theme), 장소(place), 단어(word)를 전달받아 URL 조립
//   wordAudio: (theme: ThemeKey, place: string, word: string) => 
//     `${S3_BASE_URL}/${theme}/${place}/${ASSET_FOLDERS.WORD_AUDIO}/${encodeURIComponent(word)}.mp3`,

//   // 문장 음원 경로 생성 (1번 문장, 2번 문장)
//   sentenceAudio: (theme: ThemeKey, place: string, word: string, seq: 1 | 2) => 
//     `${S3_BASE_URL}/${theme}/${place}/${ASSET_FOLDERS.SENTENCE_AUDIO}/${encodeURIComponent(word)}_sent${seq}.mp3`,

//   // 비디오 경로 생성
//   video: (theme: ThemeKey, place: string, word: string) => 
//     `${S3_BASE_URL}/${theme}/${place}/${ASSET_FOLDERS.VIDEO}/${encodeURIComponent(word)}.mp4`,
// };

// export const getThemeMedia = (theme: ThemeKey) => ({
//   wordAudio: (place: string, word: string) => createMediaUrl.wordAudio(theme, place, word),
//   sentenceAudio: (place: string, word: string, seq: 1 | 2) => createMediaUrl.sentenceAudio(theme, place, word, seq),
//   video: (place: string, word: string) => createMediaUrl.video(theme, place, word),
// });


// //여기를 나중에 바꿔줘야 함
// // import { THEMES } from './mediaConfig';
// // import { getThemeMedia } from '../utils/mediaUrl'; // 👈 import 추가

// // // 1. my-town 테마 전용 도구를 생성
// // const townMedia = getThemeMedia(THEMES.MY_TOWN);
// // const PLACE = 'bakery';

// // export const bakeryData = { 
// //   placeKey: PLACE,
// //   // ...
// //   masterRegions: [
// //     {
// //       wordKey: 'bread',
// //       korean: '빵',
// //       // 👇 테마 이름을 매번 넘길 필요 없이 장소와 단어만 전달
// //       audioUrl: townMedia.wordAudio(PLACE, 'bread'),
// //       videoPath: townMedia.video(PLACE, 'bread'),
// //       sentenceFirstAudioUrl: townMedia.sentenceAudio(PLACE, 'bread', 1),
// //       sentenceSecondAudioUrl: townMedia.sentenceAudio(PLACE, 'bread', 2),
// //       // ...
// //     },
// //   ],
// // };