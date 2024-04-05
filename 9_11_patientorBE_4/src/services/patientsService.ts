import patientsEntries from "../../data/patients";

import { NonSensitivePatientEntry, Patient } from "../types";

// const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getPatientsEntries = (): Patient[] => {
  return patientsEntries;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patientsEntries.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
};

// const getEntries = () => {
//   return diaryData;
// };

// const addDiary = () => {
//   return null;
// };

export default {
  getPatientsEntries,
  getNonSensitivePatientEntries,
  // getEntries,
  // addDiary,
  // getNonSensitiveDiaryEntries,
};
