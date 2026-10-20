type DashboardProps = {
  dict: {
    dashboard: {
      greeting: string;
      title: string;
      subtitle: string;
      courses: string;
      continue: string;
      programming: string;
      design: string;
      hardware: string;
      assignments: string;
    };
  };
};

export function Dashboard({ dict }: DashboardProps) {
  const t = dict.dashboard;

  const subjects = [
    {
      title: t.programming,
      description: "HTML, CSS, JavaScript",
    },
    {
      title: t.design,
      description: "UI/UX, WCAG",
    },
    {
      title: t.hardware,
      description: "PC, nettverk og utstyr",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5FF] p-6 text-[#311F4F] md:p-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium text-[#8055BC]">
            {t.greeting}
          </p>

          <h1 className="mb-3 text-3xl font-bold md:text-4xl">{t.title}</h1>

          <p className="text-[#756987]">{t.subtitle}</p>
        </header>

        <section>
          <h2 className="mb-5 text-xl font-semibold">{t.courses}</h2>

          <div className="grid gap-5 md:grid-cols-3">
            {subjects.map((subject) => (
              <article
                key={subject.title}
                className="rounded-2xl border border-[#E8DDF8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEE4FF] text-xl text-[#411981]">
                  ✦
                </div>

                <h3 className="mb-2 text-lg font-semibold">{subject.title}</h3>

                <p className="mb-5 text-sm text-[#756987]">
                  {subject.description}
                </p>

                <button className="rounded-lg bg-[#411981] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#311F4F]">
                  {t.continue}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-[#411981] p-6 text-white md:p-8">
          <h2 className="mb-2 text-xl font-semibold">{t.assignments}</h2>
          <p className="text-sm text-purple-100">
            Øv på det du har lært, og utvikle ferdighetene dine.
          </p>
        </section>
      </div>
    </main>
  );
}
