export type QuizYear = 2026 | 2025 | 2024;

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
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3; // 0 = a, 1 = b, 2 = c, 3 = d
  explanation: string;
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
