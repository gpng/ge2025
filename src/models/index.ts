export enum PartyId {
  PAP = 'PAP',
  WP = 'WP',
  PSP = 'PSP',
  RP = 'RP',
  NSP = 'NSP',
  PV = 'PV',
  SDP = 'SDP',
  SDA = 'SDA',
  PPP = 'PPP',
  RDU = 'RDU',
  SPP = 'SPP',
  INDIE = 'INDIE',
}

export interface Party {
  id: string;
  name: string;
  logo?: string;
  manifesto?: string;
}

export interface Profile {
  name: string;
  image?: string;
}

export const WALKOVER = 'walkover';

export interface Result {
  electors: number;
  byElection?: boolean;
  results:
    | 'walkover'
    | {
        name: string;
        votes: number;
        votesPerc: number;
      }[];
}

export interface Lineup {
  party: PartyId;
  members: Profile[];
}

export interface LineupWithVotes extends Lineup {
  confirmed: boolean;
  sample: number;
  actual: number;
}

export interface ElectoralDivision {
  id: string;
  featureId: number;
  name: string;
  electors: number;
  electorsVoted: number;
  history: {
    2011?: Result;
    2015?: Result;
    2016?: Result;
    2020?: Result;
  };
  current: Lineup;
  incumbent: LineupWithVotes;
  opposition: LineupWithVotes[];
}
