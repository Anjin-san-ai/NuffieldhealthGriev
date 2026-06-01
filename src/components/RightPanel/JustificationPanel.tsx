import type { Recommendation } from '../../types/case';

interface Props {
  justification: Recommendation['justification'];
  recommendedActions: string[];
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-nuffield-dark font-semibold">
        {title}
      </div>
      <p className="text-sm text-slate-ink leading-relaxed mt-1">{body}</p>
    </div>
  );
}

export function JustificationPanel({ justification, recommendedActions }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4 shadow-card">
      <div className="text-sm font-semibold text-slate-ink">AI Justification</div>
      <Section title="Service Assessment" body={justification.serviceAssessment} />
      <Section title="Customer Impact" body={justification.customerImpact} />
      <Section title="Policy Review" body={justification.policyReview} />
      <div>
        <div className="text-[11px] uppercase tracking-wider text-nuffield-dark font-semibold">
          Recommended Resolution
        </div>
        <ul className="mt-1 space-y-1 text-sm text-slate-ink list-disc list-inside marker:text-nuffield-primary">
          {recommendedActions.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
