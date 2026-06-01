import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import type { Recommendation } from '../../types/case';

interface Props {
  explainability: Recommendation['explainability'];
}

export function ExplainableAI({ explainability }: Props) {
  return (
    <Accordion
      defaultExpanded
      disableGutters
      elevation={0}
      sx={{
        border: '1px solid #E5E7EB',
        borderRadius: 2,
        '&:before': { display: 'none' },
        overflow: 'hidden',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          bgcolor: '#F7FAFA',
          '& .MuiAccordionSummary-content': { alignItems: 'center', gap: 1 },
        }}
      >
        <PsychologyIcon fontSize="small" sx={{ color: '#00A39E' }} />
        <span className="text-sm font-semibold text-slate-ink">
          Why did AI make this recommendation?
        </span>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 2 }}>
        <div className="space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold mb-1.5">
              Evidence Reviewed
            </div>
            <ul className="space-y-1">
              {explainability.evidenceReviewed.map((e, i) => (
                <li key={i} className="text-sm text-slate-ink flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nuffield-primary mt-1.5 flex-shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold mb-2">
              Evidence Weighting
            </div>
            <div className="space-y-2">
              {explainability.evidenceWeighting.map((w, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-xs text-slate-ink mb-1">
                    <span>{w.source}</span>
                    <span className="font-semibold">{w.weight}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-nuffield-primary rounded-full transition-all duration-700"
                      style={{ width: `${w.weight}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
