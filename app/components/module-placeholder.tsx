import type { Metadata } from "next";

type ModulePlaceholderProps = {
  title: string;
  summary: string;
};

export function moduleMetadata(title: string): Metadata {
  return { title };
}

export function ModulePlaceholder({ title, summary }: ModulePlaceholderProps) {
  return (
    <section className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.14em] text-teal-800 uppercase">
        Module à venir
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{summary}</p>
      <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
        Cette rubrique fait partie de la navigation du socle. Son contenu métier
        sera ajouté dans une phase ultérieure, après ton accord.
      </div>
    </section>
  );
}
