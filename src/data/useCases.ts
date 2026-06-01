import { useEffect, useState } from 'react';
import type { Case } from '../types/case';

interface State {
  cases: Case[] | null;
  loading: boolean;
  error: string | null;
}

export function useCases(): State {
  const [state, setState] = useState<State>({
    cases: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.BASE_URL}data/cases.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Case[]) => {
        if (!cancelled) setState({ cases: data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled)
          setState({ cases: null, loading: false, error: err.message });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
