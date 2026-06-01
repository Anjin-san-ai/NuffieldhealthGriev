import type { TimelineEvent } from '../../types/case';

interface Props {
  events: TimelineEvent[];
}

export function Timeline({ events }: Props) {
  return (
    <ol className="relative border-l-2 border-nuffield-primary/30 ml-2">
      {events.map((e, i) => (
        <li key={`${e.date}-${i}`} className="ml-4 pb-5 last:pb-0">
          <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-nuffield-primary ring-4 ring-white" />
          <div className="text-xs text-slate-muted">{e.date}</div>
          <div className="text-sm font-medium text-slate-ink">{e.event}</div>
          {e.detail && (
            <div className="text-xs text-slate-muted mt-0.5">{e.detail}</div>
          )}
        </li>
      ))}
    </ol>
  );
}
