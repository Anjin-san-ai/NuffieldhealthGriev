import type { Insight } from '../../types/case';
import { SeverityBadge } from './SeverityBadge';

interface Props {
  insights: Insight[];
}

export function InsightCards({ insights }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-card">
      <div className="text-sm font-semibold text-slate-ink mb-3">AI Insights</div>
      <div className="space-y-2">
        {insights.map((insight, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-lg p-3 hover:border-nuffield-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="text-sm font-semibold text-slate-ink">{insight.title}</div>
              <SeverityBadge severity={insight.riskLevel} size="sm" />
            </div>
            <div className="text-xs text-slate-muted mt-1 leading-relaxed">
              {insight.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
