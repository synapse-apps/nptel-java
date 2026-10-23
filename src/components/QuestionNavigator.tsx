import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { QuizQuestion } from '../data/types';

interface QuestionNavigatorProps {
  questions: QuizQuestion[];
  answers: Record<string, number[]>;
  currentIndex: number;
  onJump: (index: number) => void;
  darkMode: boolean;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  answers,
  currentIndex,
  onJump,
  darkMode,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const isCompact = questions.length <= 10;

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeButton = activeButtonRef.current;
    if (!container || !activeButton) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeButton.getBoundingClientRect();
    const centeredLeft =
      container.scrollLeft +
      (activeRect.left - containerRect.left) -
      (container.clientWidth - activeRect.width) / 2;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    container.scrollTo({
      left: Math.max(0, centeredLeft),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [currentIndex, questions.length]);

  if (questions.length === 0) {
    return null;
  }

  const selectStyle = darkMode
    ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';

  return (
    <nav
      aria-label="Question navigation"
      className="flex items-center gap-2"
    >
      <div
        ref={scrollContainerRef}
        className={`min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isCompact ? 'w-full' : 'flex-1'
        }`}
      >
        <div
          className={`flex items-center gap-1.5 ${
            isCompact ? 'mx-auto w-full max-w-[480px]' : 'w-max px-0.5 py-1'
          }`}
        >
          {questions.map((question, index) => {
            const isCurrent = index === currentIndex;
            const isAnswered = (answers[question.id]?.length ?? 0) > 0;

            let buttonStyle = darkMode
              ? 'border-slate-800 bg-slate-900/40 text-slate-500 hover:border-slate-700 hover:text-slate-300'
              : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800';

            if (isAnswered) {
              buttonStyle = darkMode
                ? 'border-slate-700 bg-slate-800 text-slate-200 hover:border-slate-600'
                : 'border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400';
            }

            if (isCurrent) {
              buttonStyle = darkMode
                ? 'border-white bg-white text-slate-950 shadow-xs'
                : 'border-slate-900 bg-slate-900 text-white shadow-xs';
            }

            return (
              <button
                key={question.id}
                ref={isCurrent ? activeButtonRef : undefined}
                type="button"
                onClick={() => onJump(index)}
                aria-label={`Go to question ${index + 1}`}
                aria-current={isCurrent ? 'step' : undefined}
                title={`Go to question ${index + 1}`}
                className={`h-8 rounded-md border text-[11px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1 ${
                  isCompact ? 'min-w-0 flex-1' : 'w-8 shrink-0 sm:w-9'
                } ${darkMode ? 'focus-visible:ring-offset-slate-950' : 'focus-visible:ring-offset-white'} ${buttonStyle} cursor-pointer`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {!isCompact && (
        <div className="relative shrink-0">
          <select
            value={currentIndex + 1}
            onChange={(event) => onJump(Number(event.target.value) - 1)}
            aria-label="Jump to question"
            title="Jump to question"
            className={`h-8 appearance-none rounded-lg border py-1 pl-2.5 pr-7 text-[11px] font-medium shadow-2xs transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${selectStyle}`}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                Q {index + 1}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          />
        </div>
      )}
    </nav>
  );
};
