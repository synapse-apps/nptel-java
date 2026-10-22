import React from 'react';
import { Check, X } from 'lucide-react';
import { FeedbackMode, QuizQuestion } from '../data/types';

interface QuestionCardProps {
  question: QuizQuestion;
  indexLabel: string;
  contextLabel?: string;
  selectedOption: number | undefined;
  onSelectOption: (optionIndex: number) => void;
  feedbackMode: FeedbackMode;
  isSubmitted: boolean;
  darkMode: boolean;
}

const OPTION_LETTERS = ['a', 'b', 'c', 'd'] as const;

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  indexLabel,
  contextLabel,
  selectedOption,
  onSelectOption,
  feedbackMode,
  isSubmitted,
  darkMode,
}) => {
  const hasAnswered = selectedOption !== undefined;
  const showEvaluation =
    isSubmitted || (feedbackMode === 'instant' && hasAnswered);

  return (
    <div
      className={`rounded-lg border transition-colors ${
        darkMode
          ? 'bg-slate-900 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900'
      } p-5 sm:p-7 shadow-xs`}
    >
      {/* Minimal counter header */}
      <div
        className={`flex items-center justify-between text-xs font-mono mb-4 ${
          darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}
      >
        <span>{indexLabel}</span>
        {contextLabel && (
          <span
            className={`px-2 py-0.5 rounded-md border text-[10px] font-medium tracking-wide ${
              darkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}
          >
            {contextLabel}
          </span>
        )}
      </div>

      {/* Question Prompt */}
      <div className="space-y-2.5 mb-5">
        {question.question.split('\n').map((line, idx) => (
          <p
            key={idx}
            className={`text-base sm:text-[17px] leading-relaxed font-medium ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Primary Java Code Block */}
      {question.code && (
        <div className="mb-4">
          <pre
            className={`rounded-lg border p-4 text-xs sm:text-[13.5px] leading-relaxed overflow-x-auto font-mono ${
              darkMode
                ? 'bg-slate-950 border-slate-800 text-slate-200'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <code>{question.code}</code>
          </pre>
        </div>
      )}

      {/* Secondary Java Code Block */}
      {question.secondaryCode && (
        <div className="mb-4">
          <pre
            className={`rounded-lg border p-4 text-xs sm:text-[13.5px] leading-relaxed overflow-x-auto font-mono ${
              darkMode
                ? 'bg-slate-950 border-slate-800 text-slate-200'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <code>{question.secondaryCode}</code>
          </pre>
        </div>
      )}

      {/* Optional File Note */}
      {question.codeNote && (
        <div className="mb-5">
          {question.codeNote.split('\n').map((line, i) =>
            i === 0 ? (
              <p
                key={i}
                className={`text-xs font-medium mb-1.5 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {line}
              </p>
            ) : (
              <div
                key={i}
                className={`rounded-lg border px-3.5 py-2.5 text-xs sm:text-sm font-mono ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-200'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                {line}
              </div>
            )
          )}
        </div>
      )}

      {/* 2026 Assignment 09 Q1 Diagram: FlowLayout Window Illustration */}
      {question.diagramType === 'flowlayout-window' && (
        <div
          className={`mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg border ${
            darkMode
              ? 'bg-slate-950/60 border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div
            className={`rounded border overflow-hidden ${
              darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
            }`}
          >
            <div className="bg-slate-800 text-white text-[11px] px-2.5 py-1 flex items-center justify-between font-mono">
              <span>Example</span>
              <span className="text-slate-400">_ □ ×</span>
            </div>
            <div className="p-3 flex flex-wrap justify-center gap-1.5">
              {['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map(
                (label) => (
                  <span
                    key={label}
                    className={`px-2 py-0.5 text-[11px] rounded border font-mono ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200'
                        : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className={`rounded border overflow-hidden max-w-[240px] mx-auto w-full ${
              darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
            }`}
          >
            <div className="bg-slate-800 text-white text-[11px] px-2.5 py-1 flex items-center justify-between font-mono">
              <span>Example</span>
              <span className="text-slate-400">_ □ ×</span>
            </div>
            <div className="p-3 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5">
                {['Button 1', 'Button 2', 'Button 3'].map((label) => (
                  <span
                    key={label}
                    className={`px-2 py-0.5 text-[11px] rounded border font-mono ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200'
                        : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {['Button 4', 'Button 5'].map((label) => (
                  <span
                    key={label}
                    className={`px-2 py-0.5 text-[11px] rounded border font-mono ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200'
                        : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2025 Assignment 08 Q9 Diagram: Frame with two Labels and two TextFields */}
      {question.diagramType === 'awt-label-textfield' && (
        <div
          className={`mb-5 flex justify-center p-4 rounded-lg border ${
            darkMode
              ? 'bg-slate-950/60 border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div
            className={`w-72 rounded border overflow-hidden shadow-xs ${
              darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-400 bg-slate-100'
            }`}
          >
            <div className="bg-slate-700 text-white text-[11px] px-2.5 py-1 flex items-center justify-between font-mono">
              <span>Frame</span>
              <span>_ □ ×</span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium w-20 shrink-0">First Name:</span>
                <div
                  className={`flex-1 h-6 rounded-xs border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-700'
                      : 'bg-white border-slate-300'
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium w-20 shrink-0">Last Name:</span>
                <div
                  className={`flex-1 h-6 rounded-xs border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-700'
                      : 'bg-white border-slate-300'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2025 Assignment 09 Q10 Diagram: BoxLayout Column Window Illustration */}
      {question.diagramType === 'boxlayout-column' && (
        <div
          className={`mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg border items-center ${
            darkMode
              ? 'bg-slate-950/60 border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div
            className={`rounded border overflow-hidden max-w-[180px] mx-auto w-full ${
              darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
            }`}
          >
            <div className="bg-blue-700 text-white text-[11px] px-2.5 py-1 flex items-center justify-between font-mono">
              <span>Layout3</span>
              <span>_ □ ×</span>
            </div>
            <div className="p-2.5 flex flex-col items-center gap-1">
              {['Component 1', 'Component 2', 'Component 3', 'Component 4'].map(
                (label) => (
                  <span
                    key={label}
                    className={`px-2.5 py-0.5 text-[11px] rounded-xs border font-mono ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200'
                        : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className={`rounded border overflow-hidden max-w-[210px] mx-auto w-full ${
              darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
            }`}
          >
            <div className="bg-blue-700 text-white text-[11px] px-2.5 py-1 flex items-center justify-between font-mono">
              <span>Layout3</span>
              <span>_ □ ×</span>
            </div>
            <div className="p-2.5 flex flex-col items-center">
              <span
                className={`px-2.5 py-0.5 text-[11px] rounded-xs border font-mono mb-5 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-slate-100 text-slate-800'
                }`}
              >
                Component 1
              </span>
              <div className="flex flex-col items-center gap-1">
                {['Component 2', 'Component 3', 'Component 4'].map((label) => (
                  <span
                    key={label}
                    className={`px-2.5 py-0.5 text-[11px] rounded-xs border font-mono ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 text-slate-200'
                        : 'border-slate-300 bg-slate-100 text-slate-800'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Options List */}
      <div className="space-y-2.5">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrectOption = question.correctIndex === idx;

          let buttonStyle = darkMode
            ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 hover:border-slate-700 text-slate-200'
            : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800';

          let badgeStyle = darkMode
            ? 'border-slate-700 bg-slate-800 text-slate-300'
            : 'border-slate-200 bg-slate-100 text-slate-700';

          let statusIcon: React.ReactNode = null;

          if (showEvaluation) {
            if (isCorrectOption) {
              buttonStyle = darkMode
                ? 'border-emerald-500/80 bg-emerald-950/35 text-emerald-100'
                : 'border-emerald-600 bg-emerald-50/75 text-emerald-950';
              badgeStyle = 'border-emerald-600 bg-emerald-600 text-white';
              statusIcon = (
                <Check
                  className={`w-4 h-4 shrink-0 ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                />
              );
            } else if (isSelected && !isCorrectOption) {
              buttonStyle = darkMode
                ? 'border-rose-500/80 bg-rose-950/35 text-rose-100'
                : 'border-rose-600 bg-rose-50/75 text-rose-950';
              badgeStyle = 'border-rose-600 bg-rose-600 text-white';
              statusIcon = (
                <X
                  className={`w-4 h-4 shrink-0 ${
                    darkMode ? 'text-rose-400' : 'text-rose-600'
                  }`}
                />
              );
            } else {
              buttonStyle = darkMode
                ? 'border-slate-800/60 bg-slate-900/30 text-slate-500 opacity-75'
                : 'border-slate-200/70 bg-slate-50/40 text-slate-500 opacity-80';
            }
          } else if (isSelected) {
            buttonStyle = darkMode
              ? 'border-slate-300 bg-slate-800 text-white shadow-xs'
              : 'border-slate-900 bg-slate-900/5 text-slate-950 shadow-xs';
            badgeStyle = darkMode
              ? 'border-slate-200 bg-slate-100 text-slate-900'
              : 'border-slate-900 bg-slate-900 text-white';
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={showEvaluation}
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left rounded-lg border px-4 py-3 transition-all duration-150 shadow-2xs flex items-start justify-between gap-3 ${buttonStyle} ${
                showEvaluation ? 'cursor-default' : 'cursor-pointer active:scale-[0.998]'
              }`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <span
                  className={`w-6 h-6 rounded border text-xs font-mono font-medium flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                >
                  {OPTION_LETTERS[idx]}
                </span>
                <span className="text-sm sm:text-[15px] leading-snug whitespace-pre-line break-words font-normal">
                  {optionText}
                </span>
              </div>
              {statusIcon && <div className="pt-1 shrink-0">{statusIcon}</div>}
            </button>
          );
        })}
      </div>

      {/* Verbatim PDF Solution */}
      {showEvaluation && (
        <div
          className={`mt-5 rounded-lg border p-4 text-sm transition-opacity duration-150 ${
            darkMode
              ? 'bg-slate-950/70 border-slate-800 text-slate-300'
              : 'bg-slate-50/90 border-slate-200 text-slate-700'
          }`}
        >
          <div
            className={`text-xs font-semibold mb-1.5 ${
              darkMode ? 'text-slate-200' : 'text-slate-900'
            }`}
          >
            Solution ({OPTION_LETTERS[question.correctIndex]})
          </div>
          <div className="text-xs sm:text-[13.5px] leading-relaxed whitespace-pre-line">
            {question.explanation}
          </div>

          {question.diagramType === 'swing-dialog-solution' && (
            <div className="mt-3 flex justify-center">
              <div
                className={`w-64 rounded border overflow-hidden shadow-xs ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 text-slate-200'
                    : 'border-slate-300 bg-slate-100 text-slate-800'
                }`}
              >
                <div
                  className={`px-2.5 py-1 text-[11px] flex items-center justify-between border-b ${
                    darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <span>Message</span>
                  <span>×</span>
                </div>
                <div className="p-3.5 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-5 h-5 rounded-full border border-sky-500 text-sky-600 flex items-center justify-center font-serif font-bold text-xs">
                      i
                    </span>
                    <span className="font-medium">Welcome to the course</span>
                  </div>
                  <span
                    className={`px-4 py-0.5 text-[11px] border rounded font-mono ${
                      darkMode
                        ? 'border-slate-600 bg-slate-800'
                        : 'border-slate-400 bg-white'
                    }`}
                  >
                    OK
                  </span>
                </div>
              </div>
            </div>
          )}

          {question.diagramType === 'swing-frame-solution' && (
            <div className="mt-3 flex justify-center">
              <div
                className={`w-60 h-36 rounded border overflow-hidden flex flex-col shadow-xs ${
                  darkMode
                    ? 'border-slate-700 bg-slate-800 text-slate-100'
                    : 'border-slate-400 bg-slate-100 text-slate-900'
                }`}
              >
                <div className="bg-slate-800 text-white px-2.5 py-1 text-[11px] flex items-center justify-between font-mono">
                  <span>JFrame</span>
                  <span>_ □ ×</span>
                </div>
                <div className="flex-1 flex items-center justify-center p-2 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <span className="text-xs font-medium px-2 py-1 border border-slate-300 dark:border-slate-700 rounded bg-white/80 dark:bg-slate-900/80">
                    Programming in Java
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
