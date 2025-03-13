import type { Candidates } from '@/models/candidate';
import type { ElectoralDivision } from '@/models/electoral-division';
import type { Parties } from '@/models/party';
import type { PartyProfile } from '@/models/profile';
import { type ReactNode, createContext, useContext } from 'react';

interface DataContextType {
  electoralDivisions: ElectoralDivision[];
  parties: Parties;
  candidates: Candidates;
  profiles: PartyProfile;
}

const ElectoralContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({
  children,
  electoralDivisions,
  parties,
  candidates,
  profiles,
}: DataContextType & { children: ReactNode }) {
  return (
    <ElectoralContext.Provider
      value={{ electoralDivisions, parties, candidates, profiles }}
    >
      {children}
    </ElectoralContext.Provider>
  );
}

export function useData() {
  const context = useContext(ElectoralContext);
  if (context === undefined) {
    throw new Error('useElectoral must be used within an ElectoralProvider');
  }
  return context;
}
