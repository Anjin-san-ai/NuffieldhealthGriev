import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseSearchPanel } from './components/CaseSearchPanel';
import { LeftPanel } from './components/LeftPanel/LeftPanel';
import { RightPanel } from './components/RightPanel/RightPanel';
import { AgentNetworkTab } from './components/AgentNetworkTab';
import { useCases } from './data/useCases';

function App() {
  const { cases, loading, error } = useCases();
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [regenToken, setRegenToken] = useState(0);
  const [view, setView] = useState<0 | 1>(0);

  useEffect(() => {
    if (cases && cases.length > 0 && selectedCaseId === null) {
      setSelectedCaseId(cases[0].caseId);
    }
  }, [cases, selectedCaseId]);

  const handleSelect = (id: string | null) => {
    setSelectedCaseId(id);
    setRegenToken((t) => t + 1);
  };

  const selectedCase =
    cases?.find((c) => c.caseId === selectedCaseId) ?? null;

  return (
    <div className="flex flex-col min-h-screen bg-nuffield-bg">
      <Header />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <Tabs
            value={view}
            onChange={(_e, v) => setView(v as 0 | 1)}
            sx={{
              minHeight: 48,
              '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, minHeight: 48 },
            }}
          >
            <Tab label="Case Workspace" />
            <Tab label="Agent Network" />
          </Tabs>
        </div>
      </div>

      <main className={`flex-1 w-full flex flex-col ${view === 0 ? 'max-w-[1600px] mx-auto px-4 sm:px-6 py-6' : ''}`}>
        {view === 0 && (
          <>
            {loading && (
              <div className="flex items-center justify-center py-24">
                <CircularProgress size={28} />
              </div>
            )}
            {error && (
              <Alert severity="error" className="mb-6">
                Failed to load case data: {error}
              </Alert>
            )}
            {cases && (
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <CaseSearchPanel
                    cases={cases}
                    selectedCaseId={selectedCaseId}
                    onSelect={handleSelect}
                  />
                  {selectedCase ? (
                    <LeftPanel caseData={selectedCase} />
                  ) : (
                    <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-muted">
                      Select a case ID above to begin.
                    </div>
                  )}
                </div>
                <div className="lg:col-span-3">
                  {selectedCase ? (
                    <RightPanel
                      key={`${selectedCase.caseId}-${regenToken}`}
                      caseData={selectedCase}
                      onRegenerate={() => setRegenToken((t) => t + 1)}
                    />
                  ) : (
                    <div className="bg-white border border-slate-200 rounded-xl p-6 text-sm text-slate-muted">
                      AI recommendations will appear here once a case is selected.
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {view === 1 && <AgentNetworkTab />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
