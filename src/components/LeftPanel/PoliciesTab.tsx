import GavelIcon from '@mui/icons-material/Gavel';
import type { Case } from '../../types/case';

interface Props {
  caseData: Case;
}

export function PoliciesTab({ caseData }: Props) {
  return (
    <div className="space-y-3">
      {caseData.policies.map((p) => (
        <div
          key={p.id}
          className="border border-slate-200 rounded-lg p-4 bg-slate-50/50"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-nuffield-primary">
              <GavelIcon fontSize="small" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-semibold text-nuffield-dark bg-nuffield-primary/10 px-2 py-0.5 rounded">
                  {p.id}
                </span>
                <span className="text-sm font-semibold text-slate-ink">{p.title}</span>
              </div>
              <p className="text-sm text-slate-ink leading-relaxed mt-2">{p.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
