export type QuizYear = 2026 | 2025 | 2024 | 2023;

export interface QuizQuestion {
  id: string;
  year?: QuizYear;
  assignmentId: number;
  assignmentLabel: string;
  courseCode: string;
  questionNumber: number;
  question: string;
  code?: string;
  secondaryCode?: string;
  codeNote?: string;
  diagramType?:
    | 'flowlayout-window'
    | 'swing-dialog-solution'
    | 'swing-frame-solution'
    | 'awt-label-textfield'
    | 'boxlayout-column';
  options: [string, string, string, string, ...string[]];
  correctIndex: number; // 0 = a, 1 = b, 2 = c, 3 = d, ...
  /** Present when a question has more than one correct option. */
  correctIndexes?: number[];
  explanation: string;
}

export function getCorrectIndexes(question: QuizQuestion): number[] {
  return question.correctIndexes && question.correctIndexes.length > 0
    ? question.correctIndexes
    : [question.correctIndex];
}

export function isMultiAnswerQuestion(question: QuizQuestion): boolean {
  return getCorrectIndexes(question).length > 1;
}

export function isAnswerCorrect(
  question: QuizQuestion,
  selectedIndexes: number[]
): boolean {
  const correctIndexes = getCorrectIndexes(question);
  if (selectedIndexes.length !== correctIndexes.length) {
    return false;
  }

  const selected = new Set(selectedIndexes);
  return correctIndexes.every((index) => selected.has(index));
}

export interface AssignmentMeta {
  id: number;
  title: string;
  subtitle: string;
  courseCode: string;
  questionCount: number;
}

export type FeedbackMode = 'instant' | 'end';
export type QuizScope = 'assignment' | 'mix';
