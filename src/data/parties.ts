import { type Party, PartyId } from '@/models';

export const PARTY_COLORS: Record<PartyId, string> = {
  [PartyId.PAP]: '#D8C99B',
  [PartyId.WP]: '#273E47',
  [PartyId.PSP]: '#A4243B',
  [PartyId.RP]: '#D8973C',
  [PartyId.NSP]: '#BD632F',
  [PartyId.PV]: '#91268e',
  [PartyId.SDP]: '#fe0000',
  [PartyId.SDA]: '#2e379c',
  [PartyId.PPP]: '#2fa61f',
  [PartyId.RDU]: '#d30e0d',
  [PartyId.SPP]: '#2e3a90',
  [PartyId.INDIE]: '#222222',
};

export const PARTIES: Record<PartyId, Party> = {
  PAP: {
    id: 'PAP',
    name: "People's Action Party",
    logo: 'PAP.png',
    manifesto: 'https://www.pap.org.sg/manifesto/',
  },
  WP: {
    id: 'WP',
    name: `Workers' Party`,
    logo: 'WP.png',
    manifesto: 'https://www.wp.sg/manifesto/',
  },
  PSP: {
    id: 'PSP',
    name: 'Progress Singapore Party',
    logo: 'PSP.png',
    manifesto:
      'https://drive.google.com/drive/folders/1735kX0p-UVMysOdKWXh-LyUhesaGHYzM',
  },
  RP: {
    id: 'RP',
    name: 'Reform Party',
    logo: 'RP.png',
    manifesto:
      'http://reform.sg/about-2/press-releases/build-back-better-fairer-our-covid-recovery-plan-and-election-manifesto/',
  },
  NSP: {
    id: 'NSP',
    name: 'National Solidarity Party',
    logo: 'NSP.svg',
    manifesto:
      'https://drive.google.com/file/d/11T6lyeY0Xf4I_eB1LcuJJgs6RhKQMsWJ/view',
  },
  PV: {
    id: 'PV',
    name: `People's Voice`,
    logo: 'PV.png',
  },
  SDP: {
    id: 'SDP',
    name: 'Singapore Democratic Party',
    logo: 'SDP.svg',
    manifesto: 'https://yoursdp.org/policies',
  },
  SDA: {
    id: 'SDA',
    name: 'Singapore Democratic Alliance',
    logo: 'SDA.jpg',
    manifesto:
      'https://www.facebook.com/singaporedemocraticalliance/posts/1710451295778654?__xts__[0]=68.ARDaunQdLgn_mKVcJtT8UmBf_3hkAM-Y-bNHIXqk7iAMcVVHXwYu07CdAloRbyOwEyvocHHcb5fBtIS_8cLrE1xupCvhRAtFnT1TjJWCZSC07AuQBfd3gl-fp0C7cyq1ks-ZhgSBQeNIKJwRZptDRUfbOrA9uEo3iqIuHFzm5fOvxP1znER_twe0B2-Zt0V5PS3s1nbP-T9dHF3G6UWDJ61rPT1R9jprerXnrOmQwH4wPlWpyK5ZWijtQ_i88Cl4ByGPLUVjH5uOTCkH1C236_PKV9-yqY3TqousmS6cEZACTHqtmcy49v7ZbG9PIaWHuu3EZFSRUBxOtFdtZySpvKXS0Q&__tn__=-R',
  },
  PPP: {
    id: 'PPP',
    name: `People's Power Party`,
    logo: 'PPP.png',
    manifesto:
      'https://www.facebook.com/peoplespowerpartysg/posts/3997120926995772?__tn__=-R',
  },
  RDU: {
    id: 'RDU',
    name: 'Red Dot United',
    logo: 'RDU.jpg',
    manifesto:
      'https://reddotunited.sg/latest/f/a-charter-for-our-future---captains-of-our-own-lives',
  },
  SPP: {
    id: 'SPP',
    name: `Singapore People's Party`,
    logo: 'SPP.png',
    manifesto: 'https://singaporepeoplesparty.org/manifesto/',
  },
  INDIE: {
    id: 'INDIE',
    name: 'Independent',
  },
};
