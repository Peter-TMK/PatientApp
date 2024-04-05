import diagnosesEntry from "../../data/diagnoses";

import { Diagnosis } from "../types";

// const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getDiagnosesEntries = (): Diagnosis[] => {
  return diagnosesEntry;
};

// const getNonSensitiveDiaryEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

// const getEntries = () => {
//   return diaryData;
// };

// const addDiary = () => {
//   return null;
// };

export default {
  getDiagnosesEntries,
  // getEntries,
  // addDiary,
  // getNonSensitiveDiaryEntries,
};
