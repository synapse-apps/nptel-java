/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Moon,
  RotateCcw,
  Shuffle,
  Sun,
} from 'lucide-react';
import {
  ASSIGNMENTS,
  getMixedQuestionsByYear,
  getQuestionsByYearAndAssignment,
} from './data';
import { FeedbackMode, QuizQuestion, QuizScope, QuizYear } from './data/types';
import { QuestionCard } from './components/QuestionCard';

type ViewState = 'home' | 'quiz' | 'result';
type ReviewFilter = 'all' | 'wrong' | 'correct';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nptel_java_theme') === 'dark';
    } catch {
      return false;
    }
  });

  const [view, setView] = useState<ViewState>('home');
  const [feedbackMode, setFeedbackMode] = useState<FeedbackMode>('instant');
  const [scope, setScope] = useState<QuizScope>('assignment');
  const [activeYear, setActiveYear] = useState<QuizYear>(2026);
  const [activeAssignmentId, setActiveAssignmentId] = useState<number>(1);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  useEffect(() => {
    try {
      localStorage.setItem('nptel_java_theme', darkMode ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [darkMode]);

  const startAssignmentQuiz = useCallback(
    (year: QuizYear, assignmentId: number) => {
      const qs = getQuestionsByYearAndAssignment(year, assignmentId);
      setScope('assignment');
      setActiveYear(year);
      setActiveAssignmentId(assignmentId);
      setQuestions(qs);
      setCurrentIndex(0);
      setAnswers({});
      setReviewFilter('all');
      setView('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const startMixedQuiz = useCallback((year: QuizYear) => {
    const qs = getMixedQuestionsByYear(year);
    setScope('mix');
    setActiveYear(year);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setReviewFilter('all');
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectOption = useCallback(
    (questionId: string, optionIndex: number) => {
      setAnswers((prev) => {
        if (feedbackMode === 'instant' && prev[questionId] !== undefined) {
          return prev;
        }
        return { ...prev, [questionId]: optionIndex };
      });
    },
    [feedbackMode]
  );

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questions.length]);

  const finishQuiz = useCallback(() => {
    setReviewFilter('all');
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (view !== 'quiz' || questions.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentQuestion = questions[currentIndex];
      if (!currentQuestion) return;

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
        e.preventDefault();
        goNext();
      } else if (['1', 'a', 'A'].includes(e.key)) {
        handleSelectOption(currentQuestion.id, 0);
      } else if (['2', 'b', 'B'].includes(e.key)) {
        handleSelectOption(currentQuestion.id, 1);
      } else if (['3', 'c', 'C'].includes(e.key)) {
        handleSelectOption(currentQuestion.id, 2);
      } else if (['4', 'd', 'D'].includes(e.key)) {
        handleSelectOption(currentQuestion.id, 3);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, questions, currentIndex, goPrev, goNext, handleSelectOption]);

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;

    for (const q of questions) {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        if (userAns === q.correctIndex) {
          correct++;
        } else {
          wrong++;
        }
      }
    }

    return {
      total: questions.length,
      correct,
      wrong,
    };
  }, [questions, answers]);

  const currentQuestion = questions[currentIndex];

  const filteredReviewQuestions = useMemo(() => {
    if (reviewFilter === 'correct') {
      return questions.filter((q) => answers[q.id] === q.correctIndex);
    }
    if (reviewFilter === 'wrong') {
      return questions.filter((q) => answers[q.id] !== q.correctIndex);
    }
    return questions;
  }, [questions, answers, reviewFilter]);

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? 'bg-[#090D16] text-slate-100'
          : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Minimal Top Bar */}
      <header
        className={`sticky top-0 z-20 border-b backdrop-blur-md transition-colors ${
          darkMode
            ? 'bg-[#090D16]/90 border-slate-800'
            : 'bg-white/90 border-slate-200'
        }`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          <button
            type="button"
            onClick={() => setView('home')}
            className="text-base font-display font-semibold tracking-tight whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            NPTEL Java
          </button>

          <div className="flex items-center gap-2.5">
            {view === 'home' && (
              <div
                className={`inline-flex p-0.5 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-slate-100 border-slate-200/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFeedbackMode('instant')}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                    feedbackMode === 'instant'
                      ? darkMode
                        ? 'bg-slate-800 text-white shadow-2xs border border-slate-700'
                        : 'bg-white text-slate-900 shadow-2xs border border-slate-200/80'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Instant
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackMode('end')}
                  className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap ${
                    feedbackMode === 'end'
                      ? darkMode
                        ? 'bg-slate-800 text-white shadow-2xs border border-slate-700'
                        : 'bg-white text-slate-900 shadow-2xs border border-slate-200/80'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  End Score
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle theme"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border shadow-2xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* ================================================================= */}
        {/* HOME VIEW: 2026 QUIZ & 2025 QUIZ SECTIONS                         */}
        {/* ================================================================= */}
        {view === 'home' && (
          <div className="space-y-9">
            {([2026, 2025] as const).map((year) => (
              <section key={year} className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base font-display font-semibold tracking-tight">
                    {year} Quiz
                  </h2>

                  <button
                    type="button"
                    onClick={() => startMixedQuiz(year)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.99] ${
                      darkMode
                        ? 'bg-white text-slate-950 border-white hover:bg-slate-100'
                        : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                    }`}
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Mix</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {ASSIGNMENTS.map((assignment) => (
                    <button
                      key={`${year}-${assignment.id}`}
                      type="button"
                      onClick={() => startAssignmentQuiz(year, assignment.id)}
                      className={`group rounded-lg border px-4 py-3 flex items-center justify-between text-left transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-[0.99] ${
                        darkMode
                          ? 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/70'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <span className="text-sm font-display font-medium">
                        {assignment.title}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                          darkMode ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ================================================================= */}
        {/* ACTIVE QUIZ VIEW (1 QUESTION AT A TIME)                           */}
        {/* ================================================================= */}
        {view === 'quiz' && currentQuestion && (
          <div className="space-y-4">
            {/* Minimal Sub-bar */}
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setView('home')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border shadow-2xs transition-colors cursor-pointer ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2">
                <div
                  className={`inline-flex p-0.5 rounded-lg border text-xs ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setFeedbackMode('instant')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      feedbackMode === 'instant'
                        ? darkMode
                          ? 'bg-slate-800 text-white'
                          : 'bg-white text-slate-900 shadow-2xs'
                        : darkMode
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Instant
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeedbackMode('end')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      feedbackMode === 'end'
                        ? darkMode
                          ? 'bg-slate-800 text-white'
                          : 'bg-white text-slate-900 shadow-2xs'
                        : darkMode
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    End Score
                  </button>
                </div>

                <button
                  type="button"
                  onClick={finishQuiz}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border shadow-2xs transition-colors cursor-pointer ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
                      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Finish
                </button>
              </div>
            </div>

            {/* Thin Progress Bar */}
            <div
              className={`w-full h-1 rounded-full overflow-hidden ${
                darkMode ? 'bg-slate-800' : 'bg-slate-200'
              }`}
            >
              <div
                className={`h-full transition-all duration-200 ${
                  darkMode ? 'bg-slate-200' : 'bg-slate-900'
                }`}
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            {/* Single Question Card */}
            <QuestionCard
              question={currentQuestion}
              indexLabel={`${currentIndex + 1} / ${questions.length}`}
              contextLabel={`${currentQuestion.year ?? activeYear} • ${currentQuestion.assignmentLabel}`}
              selectedOption={answers[currentQuestion.id]}
              onSelectOption={(optIdx) =>
                handleSelectOption(currentQuestion.id, optIdx)
              }
              feedbackMode={feedbackMode}
              isSubmitted={false}
              darkMode={darkMode}
            />

            {/* Previous / Next Navigation */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentIndex === 0}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border shadow-sm transition-all ${
                  currentIndex === 0
                    ? darkMode
                      ? 'border-slate-800/60 bg-slate-900/30 text-slate-600 cursor-not-allowed'
                      : 'border-slate-200 bg-slate-100/50 text-slate-400 cursor-not-allowed'
                    : darkMode
                    ? 'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 cursor-pointer active:scale-[0.99]'
                    : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 cursor-pointer active:scale-[0.99]'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className={`inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-lg border shadow-sm transition-all cursor-pointer active:scale-[0.99] ${
                    darkMode
                      ? 'bg-white text-slate-950 border-white hover:bg-slate-100'
                      : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={finishQuiz}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-lg border border-emerald-600 bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition-all cursor-pointer active:scale-[0.99]"
                >
                  <span>Result</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* RESULT VIEW                                                       */}
        {/* ================================================================= */}
        {view === 'result' && (
          <div className="space-y-6">
            <div
              className={`rounded-lg border p-5 sm:p-6 shadow-xs ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div
                  className={`rounded-lg border p-3.5 ${
                    darkMode
                      ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-300'
                      : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  }`}
                >
                  <div className="text-xs mb-0.5">Right</div>
                  <div className="text-2xl font-mono font-bold">
                    {stats.correct}
                  </div>
                </div>

                <div
                  className={`rounded-lg border p-3.5 ${
                    darkMode
                      ? 'bg-rose-950/30 border-rose-800/60 text-rose-300'
                      : 'bg-rose-50/70 border-rose-200 text-rose-900'
                  }`}
                >
                  <div className="text-xs mb-0.5">Wrong</div>
                  <div className="text-2xl font-mono font-bold">
                    {stats.wrong}
                  </div>
                </div>

                <div
                  className={`rounded-lg border p-3.5 ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div
                    className={`text-xs mb-0.5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Total
                  </div>
                  <div className="text-2xl font-mono font-bold">
                    {stats.total}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    scope === 'mix'
                      ? startMixedQuiz(activeYear)
                      : startAssignmentQuiz(activeYear, activeAssignmentId)
                  }
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border shadow-sm transition-all cursor-pointer ${
                    darkMode
                      ? 'bg-white text-slate-950 border-white hover:bg-slate-100'
                      : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>

                <button
                  type="button"
                  onClick={() => setView('home')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border shadow-2xs transition-all cursor-pointer ${
                    darkMode
                      ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              </div>
            </div>

            {/* Minimal Review Filter */}
            <div className="flex items-center justify-between gap-2">
              <div
                className={`inline-flex p-1 rounded-lg border text-xs ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-slate-100 border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    reviewFilter === 'all'
                      ? darkMode
                        ? 'bg-slate-800 text-white'
                        : 'bg-white text-slate-900 shadow-2xs'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter('wrong')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    reviewFilter === 'wrong'
                      ? darkMode
                        ? 'bg-slate-800 text-white'
                        : 'bg-white text-slate-900 shadow-2xs'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Wrong ({stats.total - stats.correct})
                </button>
                <button
                  type="button"
                  onClick={() => setReviewFilter('correct')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    reviewFilter === 'correct'
                      ? darkMode
                        ? 'bg-slate-800 text-white'
                        : 'bg-white text-slate-900 shadow-2xs'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Right ({stats.correct})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredReviewQuestions.map((q) => {
                const originalIdx = questions.findIndex((item) => item.id === q.id);
                return (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    indexLabel={`${originalIdx + 1} / ${questions.length}`}
                    contextLabel={`${q.year ?? activeYear} • ${q.assignmentLabel}`}
                    selectedOption={answers[q.id]}
                    onSelectOption={() => {}}
                    feedbackMode="instant"
                    isSubmitted={true}
                    darkMode={darkMode}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
