import { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const STAGES = [
  'Reviewing evidence',
  'Analysing policies',
  'Assessing customer impact',
  'Evaluating similar cases',
  'Generating recommendation',
];

const STAGE_DURATION_MS = 800;

interface Props {
  onComplete: () => void;
}

export function AIProcessingAnimation({ onComplete }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((i) => {
        if (i + 1 >= STAGES.length) {
          clearInterval(interval);
          setTimeout(onComplete, STAGE_DURATION_MS);
          return i + 1;
        }
        return i + 1;
      });
    }, STAGE_DURATION_MS);
    return () => clearInterval(interval);
  }, [onComplete]);

  const totalProgress = Math.min((activeIdx / STAGES.length) * 100, 100);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-card">
      <div className="text-sm font-semibold text-slate-ink mb-1">
        Generating recommendation
      </div>
      <div className="text-xs text-slate-muted mb-4">
        The AI is reviewing all available case evidence.
      </div>

      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden mb-4">
        <div
          className="h-full bg-nuffield-primary transition-all duration-700"
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      <ol className="space-y-2.5">
        {STAGES.map((stage, i) => {
          const isDone = i < activeIdx;
          const isActive = i === activeIdx;
          return (
            <li key={stage} className="flex items-center gap-3 text-sm">
              {isDone ? (
                <CheckCircleIcon fontSize="small" sx={{ color: '#00A39E' }} />
              ) : isActive ? (
                <CircularProgress size={16} thickness={5} />
              ) : (
                <RadioButtonUncheckedIcon
                  fontSize="small"
                  sx={{ color: '#CBD5E1' }}
                />
              )}
              <span
                className={
                  isDone
                    ? 'text-slate-ink'
                    : isActive
                      ? 'text-slate-ink font-medium'
                      : 'text-slate-muted'
                }
              >
                {stage}
                {isActive ? '…' : ''}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
