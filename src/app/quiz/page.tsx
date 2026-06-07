"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { QuizCard } from "@/components/QuizCard";
import { QuizQuestion, quizQuestions } from "@/data/quiz";

const QUESTION_COUNT = 12;

function createRandomPaper() {
  return [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, QUESTION_COUNT);
}

export default function QuizPage() {
  const [paperQuestions, setPaperQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setPaperQuestions(createRandomPaper());
  }, []);

  const currentQuestion = paperQuestions[currentIndex];
  const showResult = selectedAnswer !== null;
  const progressText = useMemo(
    () => `${Math.min(currentIndex + 1, paperQuestions.length)} / ${paperQuestions.length}`,
    [currentIndex, paperQuestions.length]
  );

  function handleSelect(answer: string) {
    if (selectedAnswer || !currentQuestion) {
      return;
    }

    setSelectedAnswer(answer);
    if (answer === currentQuestion.answer) {
      setScore((value) => value + 1);
    }
  }

  function handleNext() {
    if (currentIndex === paperQuestions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((value) => value + 1);
    setSelectedAnswer(null);
  }

  function handleRestart() {
    setPaperQuestions(createRandomPaper());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }

  if (paperQuestions.length === 0 || !currentQuestion) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl items-center px-4 py-12 sm:px-6">
        <section className="w-full rounded-lg border border-forest-100 bg-white p-8 text-center shadow-soft">
          <p className="text-sm font-semibold text-forest-700">正在生成试卷</p>
          <h1 className="mt-3 text-3xl font-bold text-forest-900">随机抽取 12 道题</h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-forest-800">
            系统将从 36 道林木种苗学题库中生成本轮自测试卷。
          </p>
        </section>
      </main>
    );
  }

  if (isFinished) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl items-center px-4 py-12 sm:px-6">
        <section className="w-full rounded-lg border border-forest-100 bg-white p-8 text-center shadow-soft">
          <p className="text-sm font-semibold text-forest-700">自测完成</p>
          <h1 className="mt-3 text-3xl font-bold text-forest-900">总分：{score} / {paperQuestions.length}</h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-forest-800">
            已完成本轮随机试卷。可以回到首页复习知识卡片，也可以重新抽题巩固易错点。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRestart}
              className="focus-ring inline-flex items-center justify-center rounded-md bg-forest-700 px-5 py-3 font-semibold text-white transition hover:bg-forest-800"
            >
              <RotateCcw className="mr-2 h-5 w-5" aria-hidden="true" />
              重新抽题
            </button>
            <Link
              href="/"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-forest-300 bg-white px-5 py-3 font-semibold text-forest-800 transition hover:bg-forest-50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
              返回首页
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-forest-700">随机自测题</p>
          <h1 className="mt-2 text-3xl font-bold text-forest-900">检验 12 个核心模块掌握情况</h1>
        </div>
        <div className="rounded-full bg-forest-100 px-4 py-2 text-sm font-semibold text-forest-800">
          进度 {progressText}
        </div>
      </div>

      <QuizCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        showResult={showResult}
      />

      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-forest-700">当前得分：{score}</p>
        <button
          type="button"
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="focus-ring inline-flex items-center justify-center rounded-md bg-forest-700 px-5 py-3 font-semibold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:bg-forest-300"
        >
          {currentIndex === paperQuestions.length - 1 ? "查看总分" : "下一题"}
        </button>
      </div>
    </main>
  );
}
