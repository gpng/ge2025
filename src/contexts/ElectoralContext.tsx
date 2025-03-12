import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import { type ReactNode, createContext, useContext } from 'react';

interface ElectoralContextType {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
}

const ElectoralContext = createContext<ElectoralContextType | undefined>(
  undefined,
);

export function ElectoralProvider({
  children,
  electoralDivisions,
  parties,
}: ElectoralContextType & { children: ReactNode }) {
  return (
    <ElectoralContext.Provider value={{ electoralDivisions, parties }}>
      {children}
    </ElectoralContext.Provider>
  );
}

export function useElectoral() {
  const context = useContext(ElectoralContext);
  if (context === undefined) {
    throw new Error('useElectoral must be used within an ElectoralProvider');
  }
  return context;
}
