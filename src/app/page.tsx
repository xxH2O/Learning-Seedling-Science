"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import { TopicCard } from "@/components/TopicCard";
import { topics } from "@/data/topics";

const visibleTopics = topics.slice(0, 4);
const collapsedTopics = topics.slice(4);

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[520px] max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-forest-100 px-4 py-2 text-sm font-medium text-forest-800">
              林木种苗学系统复习
            </p>
            <h1 className="text-4xl font-bold leading-tight text-forest-900 sm:text-5xl">
              林木种苗学入门学习站
            </h1>
            <p className="mt-5 text-lg leading-8 text-forest-800">
              围绕林木种子、良种基地、采种调制、种子贮藏、苗圃管理和苗木质量评价构建 12 个核心学习模块。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#topics"
                className="focus-ring inline-flex items-center justify-center rounded-md bg-forest-700 px-5 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-forest-800"
              >
                <BookOpen className="mr-2 h-5 w-5" aria-hidden="true" />
                开始学习
              </a>
              <Link
                href="/quiz"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-forest-300 bg-white px-5 py-3 text-base font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-forest-50"
              >
                进入随机自测
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-forest-100 bg-white shadow-soft">
            <Image
              src="/images/forest-seedling-hero.png"
              alt="森林苗木与幼苗"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:pb-20">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-forest-900 sm:text-3xl">知识卡片体系</h2>
            <p className="mt-3 text-base leading-7 text-forest-800">
              默认展示 4 个高频模块，其余 8 个模块收纳在折叠面板中，适合先总览再展开细读。
            </p>
          </div>
          <div className="rounded-full bg-forest-100 px-4 py-2 text-sm font-semibold text-forest-800">
            共 {topics.length} 个模块
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              summary={topic.summary}
              points={topic.points}
              highlight={topic.highlight}
            />
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-forest-100 bg-white/80 shadow-sm">
          <button
            type="button"
            onClick={() => setIsExpanded((value) => !value)}
            className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left transition hover:bg-forest-50"
            aria-expanded={isExpanded}
            aria-controls="more-topics"
          >
            <span>
              <span className="block text-base font-bold text-forest-900">
                {isExpanded ? "收起扩展模块" : "展开更多知识卡片"}
              </span>
              <span className="mt-1 block text-sm text-forest-700">
                包含贮藏、休眠、苗圃肥力、缺素诊断、嫁接和工厂化育苗等 8 个模块
              </span>
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-forest-700 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          <div
            id="more-topics"
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <div className="grid gap-5 border-t border-forest-100 p-5 md:grid-cols-2">
                {collapsedTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    title={topic.title}
                    summary={topic.summary}
                    points={topic.points}
                    highlight={topic.highlight}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
