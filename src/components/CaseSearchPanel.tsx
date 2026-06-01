import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import type { Case } from '../types/case';

interface Props {
  cases: Case[];
  selectedCaseId: string | null;
  onSelect: (caseId: string | null) => void;
}

export function CaseSearchPanel({ cases, selectedCaseId, onSelect }: Props) {
  const selectedCase = cases.find((c) => c.caseId === selectedCaseId) ?? null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-ink tracking-tight">
          Case Search
        </h2>
        <span className="text-[11px] text-slate-muted">
          {cases.length} demo cases loaded
        </span>
      </div>
      <TextField
        select
        fullWidth
        size="small"
        label="Case ID"
        value={selectedCaseId ?? ''}
        onChange={(e) => onSelect(e.target.value || null)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      >
        {cases.map((c) => (
          <MenuItem key={c.caseId} value={c.caseId}>
            <div className="flex flex-col py-0.5">
              <span className="font-semibold text-slate-ink">{c.caseId}</span>
              <span className="text-xs text-slate-muted">
                {c.customer.name} · {c.caseType}
              </span>
            </div>
          </MenuItem>
        ))}
      </TextField>
      {selectedCase && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Chip
            label={selectedCase.caseType}
            size="small"
            sx={{ bgcolor: '#E6F6F5', color: '#005F5C', fontWeight: 600 }}
          />
          <Chip
            label={selectedCase.complaint.status}
            size="small"
            variant="outlined"
          />
          <span className="text-xs text-slate-muted">
            Raised {selectedCase.complaint.dateRaised}
          </span>
        </div>
      )}
    </div>
  );
}
