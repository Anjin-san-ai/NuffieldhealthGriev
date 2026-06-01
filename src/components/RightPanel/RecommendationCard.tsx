import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { Decision } from '../../types/case';

const DECISIONS: Decision[] = [
  'Uphold Complaint',
  'Partially Uphold Complaint',
  'Reject Complaint',
];

const DECISION_STYLES: Record<Decision, { bg: string; fg: string; border: string }> = {
  'Uphold Complaint': { bg: '#FEF2F2', fg: '#B91C1C', border: '#FCA5A5' },
  'Partially Uphold Complaint': { bg: '#FFFBEB', fg: '#92400E', border: '#FCD34D' },
  'Reject Complaint': { bg: '#ECFDF5', fg: '#065F46', border: '#6EE7B7' },
};

interface Props {
  aiDecision: Decision;
  selectedDecision: Decision;
  onChange: (d: Decision) => void;
}

export function RecommendationCard({
  aiDecision,
  selectedDecision,
  onChange,
}: Props) {
  const style = DECISION_STYLES[selectedDecision];
  const isOverride = aiDecision !== selectedDecision;

  return (
    <div
      className="rounded-xl p-4 border"
      style={{ backgroundColor: style.bg, borderColor: style.border }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70" style={{ color: style.fg }}>
        AI Recommendation
      </div>
      <div className="mt-1 text-xl font-bold leading-tight" style={{ color: style.fg }}>
        {selectedDecision}
      </div>

      <div className="mt-3">
        <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-muted">
          Reviewer override
        </label>
        <Select
          fullWidth
          size="small"
          value={selectedDecision}
          onChange={(e) => onChange(e.target.value as Decision)}
          sx={{ bgcolor: 'white', mt: 0.5 }}
        >
          {DECISIONS.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
              {d === aiDecision ? ' · AI suggested' : ''}
            </MenuItem>
          ))}
        </Select>
        {isOverride && (
          <div className="text-[11px] mt-1.5 text-amber-700">
            Reviewer has overridden the AI suggestion ({aiDecision}).
          </div>
        )}
      </div>
    </div>
  );
}
