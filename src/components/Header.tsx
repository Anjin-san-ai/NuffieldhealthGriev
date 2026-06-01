export function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={`${import.meta.env.BASE_URL}assets/nuffield-logo.svg`}
            alt="Nuffield Health"
            className="h-10 w-auto"
          />
          <div className="hidden sm:block border-l border-slate-200 pl-4">
            <div className="text-[11px] font-medium tracking-widest uppercase text-nuffield-primary">
              Generative AI for Healthcare
            </div>
            <div className="text-lg font-semibold text-slate-ink">
              Customer Grievance Resolution Assistant
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-muted">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Copilot · Human-in-the-loop
          </span>
        </div>
      </div>
    </header>
  );
}
