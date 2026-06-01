export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-muted">
        <div className="flex items-center gap-2">
          <span>Demonstration application for executive review.</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Synthetic data — no real patient information.</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <img
            src={`${import.meta.env.BASE_URL}assets/cognizant-logo.svg`}
            alt="Cognizant"
            className="h-5 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
