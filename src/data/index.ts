import { AssignmentMeta, QuizQuestion, QuizYear } from './types';
import { questionsPhase1 } from './questionsPhase1';
import { questionsPhase2 } from './questionsPhase2';
import { questionsPhase3 } from './questionsPhase3';
import { questions2025Phase1 } from './questions2025Phase1';
import { questions2025Phase2 } from './questions2025Phase2';
import { questions2025Phase3 } from './questions2025Phase3';

export const QUESTIONS_2026: QuizQuestion[] = [
  ...questionsPhase1,
  ...questionsPhase2,
  ...questionsPhase3,
].map((q) => ({ ...q, year: 2026 }));

export const QUESTIONS_2025: QuizQuestion[] = [
  ...questions2025Phase1,
  ...questions2025Phase2,
  ...questions2025Phase3,
];

export const ASSIGNMENTS: AssignmentMeta[] = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    title: `Assignment ${num}`,
    subtitle: '',
    courseCode: '',
    questionCount: 10,
  };
});

/**
 * Unbiased Fisher-Yates array shuffle
 */
function shuffleArray<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Returns questions for a specific year and assignment in their original order
 */
export function getQuestionsByYearAndAssignment(
  year: QuizYear,
  assignmentId: number
): QuizQuestion[] {
  const bank = year === 2026 ? QUESTIONS_2026 : QUESTIONS_2025;
  return bank.filter((q) => q.assignmentId === assignmentId);
}

/**
 * Returns all 120 questions for a specific year (2026 or 2025) with both the question order
 * AND the 4 options per question shuffled, updating correctIndex to match.
 */
export function getMixedQuestionsByYear(year: QuizYear): QuizQuestion[] {
  const bank = year === 2026 ? QUESTIONS_2026 : QUESTIONS_2025;
  const shuffledQuestions = shuffleArray(bank);
  return shuffledQuestions.map((q) => {
    const indexedOptions = q.options.map((text, idx) => ({
      text,
      isCorrect: idx === q.correctIndex,
    }));
    const shuffledIndexed = shuffleArray(indexedOptions);
    const newCorrectIndex = shuffledIndexed.findIndex((item) => item.isCorrect) as
      | 0
      | 1
      | 2
      | 3;

    return {
      ...q,
      options: [
        shuffledIndexed[0].text,
        shuffledIndexed[1].text,
        shuffledIndexed[2].text,
        shuffledIndexed[3].text,
      ],
      correctIndex: newCorrectIndex,
    };
  });
}
