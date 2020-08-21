import { getLetterCount } from "./letterCount";
import { isEqual } from "lodash";

export const checkIfAnagram = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    const letterCountStr1 = getLetterCount(str1);
    const letterCountStr2 = getLetterCount(str2);
    return isEqual(letterCountStr1, letterCountStr2);
  }
};
