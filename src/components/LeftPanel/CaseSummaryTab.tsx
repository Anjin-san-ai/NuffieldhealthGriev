import Chip from '@mui/material/Chip';
import type { Case } from '../../types/case';

interface Props {
  caseData: Case;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold">
        {label}
      </div>
      <div className="text-sm text-slate-ink mt-1">{children}</div>
    </div>
  );
}

export function CaseSummaryTab({ caseData }: Props) {
  const { caseId, caseType, complaint } = caseData;
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-slate-ink">{caseId}</h3>
        <Chip
          size="small"
          label={caseType}
          sx={{ bgcolor: '#E6F6F5', color: '#005F5C', fontWeight: 600 }}
        />
        <Chip size="small" variant="outlined" label={complaint.status} />
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold mb-1">
          Complaint Description
        </div>
        <blockquote className="border-l-4 border-nuffield-primary bg-nuffield-primary/5 pl-4 py-3 italic text-slate-ink rounded-r-md">
          "{complaint.description}"
        </blockquote>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Complaint Category">{complaint.category}</Field>
        <Field label="Date Raised">{complaint.dateRaised}</Field>
        <Field label="Case Status">{complaint.status}</Field>
        <Field label="Assigned Reviewer">{complaint.assignedReviewer}</Field>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold mb-1">
          Customer Impact Summary
        </div>
        <p className="text-sm text-slate-ink leading-relaxed">
          {complaint.customerImpactSummary}
        </p>
      </div>
    </div>
  );
}
