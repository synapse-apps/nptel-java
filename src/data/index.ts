import {
  AssignmentMeta,
  QuizQuestion,
  QuizYear,
  getCorrectIndexes,
} from './types';
import { questionsPhase1 } from './questionsPhase1';
import { questionsPhase2 } from './questionsPhase2';
import { questionsPhase3 } from './questionsPhase3';
import { questions2025Phase1 } from './questions2025Phase1';
import { questions2025Phase2 } from './questions2025Phase2';
import { questions2025Phase3 } from './questions2025Phase3';
import { questions2024Phase1 } from './questions2024Phase1';
import { questions2024Phase2 } from './questions2024Phase2';
import { questions2024Phase3 } from './questions2024Phase3';
import { questions2023Phase1 } from './questions2023Phase1';
import { questions2023Phase2 } from './questions2023Phase2';
import { questions2023Phase3 } from './questions2023Phase3';

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

export const QUESTIONS_2024: QuizQuestion[] = [
  ...questions2024Phase1,
  ...questions2024Phase2,
  ...questions2024Phase3,
];

export const QUESTIONS_2023: QuizQuestion[] = [
  ...questions2023Phase1,
  ...questions2023Phase2,
  ...questions2023Phase3,
];

const QUESTIONS_BY_YEAR: Record<QuizYear, QuizQuestion[]> = {
  2026: QUESTIONS_2026,
  2025: QUESTIONS_2025,
  2024: QUESTIONS_2024,
  2023: QUESTIONS_2023,
};

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
  const bank = QUESTIONS_BY_YEAR[year];
  return bank.filter((q) => q.assignmentId === assignmentId);
}

/**
 * Returns all questions for a specific year with both the question order
 * AND the options per question shuffled, updating the answer indexes to match.
 */
export function getMixedQuestionsByYear(year: QuizYear): QuizQuestion[] {
  const bank = QUESTIONS_BY_YEAR[year];
  const shuffledQuestions = shuffleArray(bank);
  return shuffledQuestions.map((q) => {
    const correctIndexes = getCorrectIndexes(q);
    const indexedOptions = q.options.map((text, idx) => ({
      text,
      isCorrect: correctIndexes.includes(idx),
    }));
    const shuffledIndexed = shuffleArray(indexedOptions);
    const newCorrectIndexes = shuffledIndexed.reduce<number[]>(
      (indexes, item, idx) => {
        if (item.isCorrect) {
          indexes.push(idx);
        }
        return indexes;
      },
      []
    );

    const result: QuizQuestion = {
      ...q,
      options: shuffledIndexed.map(
        (item) => item.text
      ) as QuizQuestion['options'],
      correctIndex: newCorrectIndexes[0] ?? 0,
    };

    if (q.correctIndexes) {
      result.correctIndexes = newCorrectIndexes;
    }

    return result;
  });
}
