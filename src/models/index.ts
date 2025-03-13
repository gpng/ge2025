// to be deleted after migrating scripts to not rely on this
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
