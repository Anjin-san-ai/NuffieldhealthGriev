import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CaseSearchPanel } from './components/CaseSearchPanel';
import { LeftPanel } from './components/LeftPanel/LeftPanel';
import { RightPanel } from './components/RightPanel/RightPanel';
import { useCases } from './data/useCases';

function App() {
  const { cases, loading, error } = useCases();
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [regenToken, setRegenToken] = useState(0);

  // Default to the first case once data loads
  useEffect(() => {
    if (cases && cases.length > 0 && selectedCaseId === null) {
      setSelectedCaseId(cases[0].caseId);
    }
  }, [cases, selectedCaseId]);

  // When the user picks a different case, reset the AI panel state
  const handleSelect = (id: string | null) => {
    setSelectedCaseId(id);
    setRegenToken((t) => t + 1);
  };

  const selectedCase =
    cases?.find((c) => c.caseId === selectedCaseId) ?? null;

  return (
    <div className="flex flex-col min-h-screen bg-nuffield-bg">
      <Header />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-6">
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
