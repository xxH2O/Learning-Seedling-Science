"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/quiz";

type QuizCardProps = {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
  showResult: boolean;
};

export function QuizCard({ question, selectedAnswer, onSelect, showResult }: QuizCardProps) {
  const isCorrect = selectedAnswer === question.answer;

  return (
    <section className="rounded-lg border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-xl font-bold leading-8 text-forest-900">{question.question}</h2>

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isAnswer = question.answer === option;
          const resultClass =
            showResult && isAnswer
              ? "border-forest-600 bg-forest-100 text-forest-900"
              : showResult && isSelected && !isAnswer
                ? "border-red-300 bg-red-50 text-red-800"
                : isSelected
                  ? "border-forest-500 bg-forest-50 text-forest-900"
                  : "border-forest-100 bg-white text-forest-800 hover:border-forest-300 hover:bg-forest-50";

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              disabled={showResult}
              className={`focus-ring flex min-h-12 items-center justify-between rounded-md border px-4 py-3 text-left font-medium transition ${resultClass} disabled:cursor-default`}
            >
              <span>{option}</span>
              {showResult && isAnswer ? <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" /> : null}
              {showResult && isSelected && !isAnswer ? (
                <XCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      {showResult ? (
        <div
          className={`mt-6 rounded-md border p-4 ${
            isCorrect ? "border-forest-200 bg-forest-50" : "border-red-200 bg-red-50"
          }`}
        >
          <p className={`font-bold ${isCorrect ? "text-forest-800" : "text-red-800"}`}>
            {isCorrect ? "回答正确" : "回答错误"}
          </p>
          <p className="mt-2 leading-7 text-forest-800">{question.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
