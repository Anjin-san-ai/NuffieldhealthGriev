import { useState } from 'react';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RefreshIcon from '@mui/icons-material/Refresh';
import type { Case, Decision } from '../../types/case';
import { AIProcessingAnimation } from './AIProcessingAnimation';
import { RecommendationCard } from './RecommendationCard';
import { ConfidenceGauge } from './ConfidenceGauge';
import { SeverityBadge } from './SeverityBadge';
import { JustificationPanel } from './JustificationPanel';
import { InsightCards } from './InsightCards';
import { ExplainableAI } from './ExplainableAI';

type Phase = 'idle' | 'processing' | 'complete';

interface Props {
  caseData: Case;
  onRegenerate: () => void;
}

export function RightPanel({ caseData, onRegenerate }: Props) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [reviewerDecision, setReviewerDecision] = useState<Decision>(
    caseData.recommendation.decision,
  );

  const start = () => setPhase('processing');
  const regen = () => {
    setReviewerDecision(caseData.recommendation.decision);
    setPhase('idle');
    onRegenerate();
  };

  return (
    <aside className="sticky top-6 space-y-4">
      {phase === 'idle' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-2 text-nuffield-primary">
            <AutoAwesomeIcon fontSize="small" />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              AI Copilot
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-ink leading-tight">
            Review evidence on the left, then generate an AI recommendation.
          </h3>
          <p className="text-sm text-slate-muted mt-2 leading-relaxed">
            The Copilot will analyse the complaint, service records, policies,
            and supporting evidence to suggest a decision. The final call stays
            with you.
          </p>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={start}
            startIcon={<AutoAwesomeIcon />}
            sx={{ mt: 3 }}
          >
            Generate Recommendation
          </Button>
        </div>
      )}

      {phase === 'processing' && (
        <AIProcessingAnimation onComplete={() => setPhase('complete')} />
      )}

      {phase === 'complete' && (
        <>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-card">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-nuffield-primary">
                <AutoAwesomeIcon fontSize="small" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  AI Copilot Result
                </span>
              </div>
              <Button
                size="small"
                onClick={regen}
                startIcon={<RefreshIcon fontSize="small" />}
                sx={{ minWidth: 0 }}
              >
                Regenerate
              </Button>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <ConfidenceGauge value={caseData.recommendation.confidenceScore} size={104} />
              <div className="flex-1 space-y-2">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold">
                    Severity
                  </div>
                  <div className="mt-1">
                    <SeverityBadge severity={caseData.recommendation.severity} />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold">
                    Case ID
                  </div>
                  <div className="text-sm font-semibold text-slate-ink">
                    {caseData.caseId}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <RecommendationCard
                aiDecision={caseData.recommendation.decision}
                selectedDecision={reviewerDecision}
                onChange={setReviewerDecision}
              />
            </div>
          </div>

          <JustificationPanel
            justification={caseData.recommendation.justification}
            recommendedActions={caseData.recommendation.recommendedActions}
          />

          <InsightCards insights={caseData.recommendation.insights} />

          <ExplainableAI
            explainability={caseData.recommendation.explainability}
          />

          <div className="text-[11px] text-slate-muted text-center pt-2">
            AI recommendations are advisory. Final decisions rest with the human reviewer.
          </div>
        </>
      )}
    </aside>
  );
}
