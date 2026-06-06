import { CheckCircle2, Lightbulb, Trees } from "lucide-react";

type TopicCardProps = {
  title: string;
  summary: string;
  points: string[];
  highlight: string;
};

export function TopicCard({ title, summary, points, highlight }: TopicCardProps) {
  return (
    <article className="rounded-lg border border-forest-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest-100 text-forest-700">
          <Trees className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-forest-900">{title}</h3>
          <p className="mt-2 leading-7 text-forest-800">{summary}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-2 leading-7 text-forest-800">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-md border border-seed-300 bg-seed-100 p-4 text-forest-900">
        <div className="mb-1 flex items-center text-sm font-bold">
          <Lightbulb className="mr-2 h-4 w-4 text-seed-500" aria-hidden="true" />
          重点提示
        </div>
        <p className="leading-7">{highlight}</p>
      </div>
    </article>
  );
}
