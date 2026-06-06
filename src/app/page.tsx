import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { TopicCard } from "@/components/TopicCard";
import { topics } from "@/data/topics";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[520px] max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-forest-100 px-4 py-2 text-sm font-medium text-forest-800">
              林木种苗学基础复习
            </p>
            <h1 className="text-4xl font-bold leading-tight text-forest-900 sm:text-5xl">
              林木种苗学入门学习站
            </h1>
            <p className="mt-5 text-lg leading-8 text-forest-800">
              用卡片和自测题快速掌握种子生产、种子检验、苗圃管理与苗木质量评价的基础知识。
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
                进入自测
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
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-forest-900 sm:text-3xl">知识卡片</h2>
          <p className="mt-3 text-base leading-7 text-forest-800">
            按复习模块整理核心概念，先抓住判断依据、检验指标和育苗流程。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              summary={topic.summary}
              points={topic.points}
              highlight={topic.highlight}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
