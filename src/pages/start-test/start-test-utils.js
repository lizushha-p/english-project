import { ENGLISH_LEVEL } from './start-test-constants';
export const getStartLevel = (rightAnswers) => {
    if(rightAnswers <= 7) {
        return ENGLISH_LEVEL.A2;
    }
    if (rightAnswers <= 16) {
        return  ENGLISH_LEVEL.B1;
    }
    if (rightAnswers <= 25) {
        return  ENGLISH_LEVEL.B2;
    }
}