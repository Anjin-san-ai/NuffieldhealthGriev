import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { Case } from '../../types/case';
import { CaseSummaryTab } from './CaseSummaryTab';
import { CustomerInfoTab } from './CustomerInfoTab';
import { ServiceRecordsTab } from './ServiceRecordsTab';
import { PoliciesTab } from './PoliciesTab';
import { EvidenceTab } from './EvidenceTab';

interface Props {
  caseData: Case;
}

const TAB_LABELS = [
  'Case Summary',
  'Customer Information',
  'Service Records',
  'Policies & Contracts',
  'Supporting Evidence',
] as const;

export function LeftPanel({ caseData }: Props) {
  const [tab, setTab] = useState(0);

  // Reset to first tab when case changes
  useEffect(() => {
    setTab(0);
  }, [caseData.caseId]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card overflow-hidden">
      <Tabs
        value={tab}
        onChange={(_e, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: '1px solid #E5E7EB',
          minHeight: 48,
          '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, minHeight: 48 },
        }}
      >
        {TAB_LABELS.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      <div className="p-6">
        {tab === 0 && <CaseSummaryTab caseData={caseData} />}
        {tab === 1 && <CustomerInfoTab caseData={caseData} />}
        {tab === 2 && <ServiceRecordsTab caseData={caseData} />}
        {tab === 3 && <PoliciesTab caseData={caseData} />}
        {tab === 4 && <EvidenceTab caseData={caseData} />}
      </div>
    </div>
  );
}
