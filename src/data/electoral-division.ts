import { PARTIES } from '@/data/parties';
import { PROFILES } from '@/data/profiles';
import { WALKOVER, type ElectoralDivision } from '@/models';

export const ELECTORAL_DIVISIONS: ElectoralDivision[] = [
  {
    id: 'TP',
    featureId: 2,
    name: 'TANJONG PAGAR',
    electors: 134642,
    electorsVoted: 134494,
    history: {
      2011: {
        electors: 139771,
        results: WALKOVER,
      },
      2015: {
        electors: 130752,
        results: [
          { name: 'PAP', votes: 90448, votesPerc: 77.71 },
          { name: 'SF', votes: 25953, votesPerc: 22.29 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.CHAN_CHUN_SING,
        PROFILES.PAP.INDRANEE_RAJAH,
        PROFILES.PAP.CHIA_SHI_LU,
        PROFILES.PAP.MELVIN_YONG,
        PROFILES.PAP.JOAN_PEREIRA,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.CHAN_CHUN_SING,
        PROFILES.PAP.INDRANEE_RAJAH,
        PROFILES.PAP.JOAN_PEREIRA,
        PROFILES.PAP.ERIC_CHUA,
        PROFILES.PAP.ALVIN_TAN,
      ],
      confirmed: true,
      sample: 67,
      actual: 63.13,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [
          PROFILES.PSP.MICHAEL_CHUA,
          PROFILES.PSP.HARISH_PILLAY,
          PROFILES.PSP.WENDY_LOW,
          PROFILES.PSP.TERENCE_SOON,
          PROFILES.PSP.ABAS_BIN_KASMANI,
        ],
        confirmed: true,
        sample: 33,
        actual: 36.87,
      },
    ],
  },
  {
    id: 'JB',
    featureId: 3,
    name: 'JALAN BESAR',
    electors: 107936,
    electorsVoted: 107720,
    history: {
      2015: {
        electors: 102540,
        results: [
          { name: 'PAP', votes: 63561, votesPerc: 67.73 },
          { name: 'WP', votes: 30283, votesPerc: 32.27 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.YAACOB_IBRAHIM,
        PROFILES.PAP.HENG_CHEE_HOW,
        PROFILES.PAP.DENISE_PHUA,
        PROFILES.PAP.LILY_NEO,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.JOSEPHINE_TEO,
        PROFILES.PAP.HENG_CHEE_HOW,
        PROFILES.PAP.DENISE_PHUA,
        PROFILES.PAP.WAN_RIZAL,
      ],
      confirmed: true,
      sample: 67,
      actual: 65.37,
    },
    opposition: [
      {
        party: PARTIES.PV.id,
        members: [
          PROFILES.PV.LIM_TEAN,
          PROFILES.PV.LEONG_SZE_HIAN,
          PROFILES.PV.NOR_AZLAN_SULAIMAN,
          PROFILES.PV.MICHAEL_FANG,
        ],
        confirmed: true,
        sample: 33,
        actual: 34.63,
      },
    ],
  },
  {
    id: 'PI',
    featureId: 5,
    name: 'PIONEER',
    electors: 24672,
    electorsVoted: 24653,
    history: {
      2011: {
        electors: 25745,
        results: [
          { name: 'PAP', votes: 14593, votesPerc: 60.73 },
          { name: 'NSP', votes: 9437, votesPerc: 39.27 },
        ],
      },
      2015: {
        electors: 25458,
        results: [
          { name: 'PAP', votes: 17994, votesPerc: 71.84 },
          { name: 'NSP', votes: 5578, votesPerc: 23.66 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.CEDRIC_FOO],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.PATRICK_TAY],
      confirmed: true,
      sample: 66,
      actual: 61.98,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [PROFILES.PSP.LIM_CHER_HONG],
        confirmed: true,
        sample: 32,
        actual: 35.24,
      },
      {
        party: PARTIES.INDIE.id,
        members: [PROFILES.INDIE.CHEANG_PENG_WAH],
        confirmed: true,
        sample: 2,
        actual: 2.78,
      },
    ],
  },
  {
    id: 'YH',
    featureId: 7,
    name: 'YUHUA',
    electors: 21376,
    electorsVoted: 21351,
    history: {
      2011: {
        electors: 23195,
        results: [
          { name: 'PAP', votes: 14093, votesPerc: 66.86 },
          { name: 'NSP', votes: 6986, votesPerc: 33.14 },
        ],
      },
      2015: {
        electors: 22617,
        results: [
          { name: 'PAP', votes: 15298, votesPerc: 72 },
          { name: 'SDP', votes: 5505, votesPerc: 28 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.GRACE_FU],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.GRACE_FU],
      confirmed: true,
      sample: 69,
      actual: 70.54,
    },
    opposition: [
      {
        party: PARTIES.SDP.id,
        members: [PROFILES.SDP.ROBIN_LOW],
        confirmed: true,
        sample: 31,
        actual: 29.46,
      },
    ],
  },
  {
    id: 'MR',
    featureId: 12,
    name: 'MARYMOUNT',
    electors: 23444,
    electorsVoted: 23431,
    history: {},
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.JOSEPHINE_TEO],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.GAN_SIOW_HUANG],
      confirmed: true,
      sample: 54,
      actual: 55.04,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [PROFILES.PSP.ANG_YONG_GUAN],
        confirmed: true,
        sample: 46,
        actual: 44.96,
      },
    ],
  },
  {
    id: 'HG',
    featureId: 14,
    name: 'HOUGANG',
    electors: 26468,
    electorsVoted: 26463,
    history: {
      2011: {
        electors: 24560,
        results: [
          { name: 'WP', votes: 14850, votesPerc: 64.8 },
          { name: 'PAP', votes: 8065, votesPerc: 35.2 },
        ],
      },
      2015: {
        electors: 24097,
        results: [
          { name: 'WP', votes: 13012, votesPerc: 57.69 },
          { name: 'PAP', votes: 9543, votesPerc: 42.31 },
        ],
      },
    },
    current: {
      party: PARTIES.WP.id,
      members: [PROFILES.WP.PNG_ENG_HUAT],
    },
    incumbent: {
      party: PARTIES.WP.id,
      members: [PROFILES.WP.DENNIS_TAN],
      confirmed: true,
      sample: 58,
      actual: 61.19,
    },
    opposition: [
      {
        party: PARTIES.PAP.id,
        members: [PROFILES.PAP.LEE_HONG_CHUANG],
        confirmed: true,
        sample: 42,
        actual: 38.81,
      },
    ],
  },
  {
    id: 'MA',
    featureId: 10,
    name: 'MARINE PARADE',
    electors: 139738,
    electorsVoted: 139622,
    history: {
      2011: {
        electors: 154451,
        results: [
          { name: 'PAP', votes: 78286, votesPerc: 56.64 },
          { name: 'NSP', votes: 59926, votesPerc: 43.36 },
        ],
      },
      2015: {
        electors: 146244,
        results: [
          { name: 'PAP', votes: 84939, votesPerc: 64.07 },
          { name: 'WP', votes: 47269, votesPerc: 35.93 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.TAN_CHUAN_JIN,
        PROFILES.PAP.GOH_CHOK_TONG,
        PROFILES.PAP.EDWIN_TONG,
        PROFILES.PAP.SEAH_KIAN_PENG,
        PROFILES.PAP.FATIMAH_LATEEF,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.TAN_CHUAN_JIN,
        PROFILES.PAP.TAN_SEE_LENG,
        PROFILES.PAP.EDWIN_TONG,
        PROFILES.PAP.SEAH_KIAN_PENG,
        PROFILES.PAP.MOHD_FAHMI_ALIMAN,
      ],
      confirmed: true,
      sample: 57,
      actual: 57.76,
    },
    opposition: [
      {
        party: PARTIES.WP.id,
        members: [
          PROFILES.WP.YEE_JENN_JONG,
          PROFILES.WP.RON_TAN,
          PROFILES.WP.NATHANIEL_KOH,
          PROFILES.WP.MUHAMMAD_FADLI,
          PROFILES.WP.MUHAMMAD_AZHAR,
        ],
        confirmed: true,
        sample: 43,
        actual: 42.24,
      },
    ],
  },
  {
    id: 'WE',
    featureId: 11,
    name: 'WEST COAST',
    electors: 146251,
    electorsVoted: 146089,
    history: {
      2011: {
        electors: 121045,
        results: [
          { name: 'PAP', votes: 42563, votesPerc: 66.57 },
          { name: 'RP', votes: 36443, votesPerc: 33.43 },
        ],
      },
      2015: {
        electors: 99300,
        results: [
          { name: 'PAP', votes: 71091, votesPerc: 78.57 },
          { name: 'RP', votes: 19392, votesPerc: 21.43 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.S_ISWARAN,
        PROFILES.PAP.LIM_HNG_KIANG,
        PROFILES.PAP.PATRICK_TAY,
        PROFILES.PAP.FOO_MEE_HAR,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.S_ISWARAN,
        PROFILES.PAP.DESMOND_LEE,
        PROFILES.PAP.RACHEL_ONG,
        PROFILES.PAP.ANG_WEI_NENG,
        PROFILES.PAP.FOO_MEE_HAR,
      ],
      confirmed: true,
      sample: 52,
      actual: 51.69,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [
          PROFILES.PSP.TAN_CHENG_BOCK,
          PROFILES.PSP.JEFFREY_KHOO,
          PROFILES.PSP.HAZEL_POA,
          PROFILES.PSP.LEON_MUN_WAI,
          PROFILES.PSP.NADARAJAH_LOGANATHAN,
        ],
        confirmed: true,
        sample: 48,
        actual: 48.31,
      },
    ],
  },
  {
    id: 'BP',
    featureId: 18,
    name: 'BUKIT PANJANG',
    electors: 35497,
    electorsVoted: 35437,
    history: {
      2011: {
        electors: 33053,
        results: [
          { name: 'PAP', votes: 20375, votesPerc: 66.27 },
          { name: 'SDP', votes: 10372, votesPerc: 33.73 },
        ],
      },
      2015: {
        electors: 34317,
        results: [
          { name: 'PAP', votes: 21935, votesPerc: 68.38 },
          { name: 'SDP', votes: 10143, votesPerc: 31.62 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.TEO_HO_PIN],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.LIANG_ENG_HWA],
      confirmed: true,
      sample: 59,
      actual: 53.74,
    },
    opposition: [
      {
        party: PARTIES.SDP.id,
        members: [PROFILES.SDP.PAUL_TAMBYAH],
        confirmed: true,
        sample: 41,
        actual: 46.26,
      },
    ],
  },
  {
    id: 'YK',
    featureId: 19,
    name: 'YIO CHU KANG',
    electors: 26005,
    electorsVoted: 25962,
    history: {},
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.KOH_POH_KOON],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.YIP_HON_WENG],
      confirmed: true,
      sample: 61,
      actual: 60.83,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [PROFILES.PSP.KAYLA_LOW],
        confirmed: true,
        sample: 39,
        actual: 39.17,
      },
    ],
  },
  {
    id: 'HT',
    featureId: 23,
    name: 'HOLLAND-BUKIT TIMAH',
    electors: 115012,
    electorsVoted: 114973,
    history: {
      2011: {
        electors: 91607,
        results: [
          { name: 'PAP', votes: 48773, votesPerc: 60.08 },
          { name: 'SDP', votes: 32406, votesPerc: 39.92 },
        ],
      },
      2015: {
        electors: 104491,
        results: [
          { name: 'PAP', votes: 62630, votesPerc: 66.62 },
          { name: 'SDP', votes: 31380, votesPerc: 33.38 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.VIVIAN_BALAKRISHNAN,
        PROFILES.PAP.SIM_ANN,
        PROFILES.PAP.CHRISTOPHER_DE_SOUZA,
        PROFILES.PAP.LIANG_ENG_HWA,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.VIVIAN_BALAKRISHNAN,
        PROFILES.PAP.SIM_ANN,
        PROFILES.PAP.CHRISTOPHER_DE_SOUZA,
        PROFILES.PAP.EDWARD_CHIA,
      ],
      confirmed: true,
      sample: 68,
      actual: 66.36,
    },
    opposition: [
      {
        party: PARTIES.SDP.id,
        members: [
          PROFILES.SDP.TAN_JEE_SAY,
          PROFILES.SDP.JAMES_GOMEZ,
          PROFILES.SDP.MIN_CHEONG,
          PROFILES.SDP.ALFRED_TAN,
        ],
        confirmed: true,
        sample: 32,
        actual: 33.64,
      },
    ],
  },
  {
    id: 'PN',
    featureId: 24,
    name: 'PASIR RIS-PUNGGOL',
    electors: 166587,
    electorsVoted: 166556,
    history: {
      2011: {
        electors: 168971,
        results: [
          { name: 'PAP', votes: 100493, votesPerc: 64.79 },
          { name: 'SDA', votes: 54601, votesPerc: 35.21 },
        ],
      },
      2015: {
        electors: 187396,
        results: [
          { name: 'PAP', votes: 125021, votesPerc: 72.89 },
          { name: 'SDA', votes: 46508, votesPerc: 27.11 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.TEO_CHEE_HEAN,
        PROFILES.PAP.JANIL_PUTHUCHEARY,
        PROFILES.PAP.ZAINAL_BIN_SAPARI,
        PROFILES.PAP.TEO_SER_LUCK,
        PROFILES.PAP.SUN_XUELING,
        PROFILES.PAP.NG_CHEE_MENG,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.TEO_CHEE_HEAN,
        PROFILES.PAP.JANIL_PUTHUCHEARY,
        PROFILES.PAP.SHARAEL_TAHA,
        PROFILES.PAP.YEO_WAN_LING,
        PROFILES.PAP.DESMOND_TAN,
      ],
      confirmed: true,
      sample: 63,
      actual: 64.15,
    },
    opposition: [
      {
        party: PARTIES.PV.id,
        members: [
          PROFILES.PV.JIREH_LIM,
          PROFILES.PV.PRABU_RAMACHANDRAN,
          PROFILES.PV.MOHAMED_NASSIR,
          PROFILES.PV.GILBERT_GOH,
          PROFILES.PV.VIGNESWARI_RAMACHANDRAN,
        ],
        confirmed: true,
        sample: 12,
        actual: 12.18,
      },
      {
        party: PARTIES.SDA.id,
        members: [
          PROFILES.SDA.DESMOND_LIM,
          PROFILES.SDA.HARMINDER_PAL_SINGH,
          PROFILES.SDA.ABU_MOHAMED,
          PROFILES.SDA.KELVIN_ONG,
          PROFILES.SDA.KUSWADI_ATNAWI,
        ],
        confirmed: true,
        sample: 25,
        actual: 23.67,
      },
    ],
  },
  {
    id: 'EC',
    featureId: 25,
    name: 'EAST COAST',
    electors: 121772,
    electorsVoted: 121644,
    history: {
      2011: {
        electors: 120324,
        results: [
          { name: 'PAP', votes: 59992, votesPerc: 54.83 },
          { name: 'WP', votes: 49429, votesPerc: 45.17 },
        ],
      },
      2015: {
        electors: 99118,
        results: [
          { name: 'PAP', votes: 54981, votesPerc: 60.73 },
          { name: 'WP', votes: 35547, votesPerc: 39.27 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.LIM_SWEE_SAY,
        PROFILES.PAP.MOHAMAD_MALIKI,
        PROFILES.PAP.JESSICA_TAN,
        PROFILES.PAP.LEE_YI_SHYAN,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.HENG_SWEE_KEAT,
        PROFILES.PAP.MOHAMAD_MALIKI,
        PROFILES.PAP.JESSICA_TAN,
        PROFILES.PAP.TAN_KIAT_HOW,
        PROFILES.PAP.CHERYL_CHAN,
      ],
      confirmed: true,
      sample: 54,
      actual: 53.41,
    },
    opposition: [
      {
        party: PARTIES.WP.id,
        members: [
          PROFILES.WP.DYLAN_NG,
          PROFILES.WP.KENNETH_FOO,
          PROFILES.WP.NICOLE_SEAH,
          PROFILES.WP.TERENCE_TAN,
          PROFILES.WP.ABDUL_SHARIFF,
        ],
        confirmed: true,
        sample: 46,
        actual: 46.59,
      },
    ],
  },
  {
    id: 'AM',
    featureId: 26,
    name: 'ANG MO KIO',
    electors: 185465,
    electorsVoted: 185261,
    history: {
      2011: {
        electors: 179071,
        results: [
          { name: 'PAP', votes: 112677, votesPerc: 69.33 },
          { name: 'RP', votes: 49851, votesPerc: 30.67 },
        ],
      },
      2015: {
        electors: 187771,
        results: [
          { name: 'PAP', votes: 135115, votesPerc: 78.63 },
          { name: 'RP', votes: 36711, votesPerc: 21.37 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.LEE_HSIEN_LOONG,
        PROFILES.PAP.ANG_HIN_KEE,
        PROFILES.PAP.INTAN_AZURA_MOKHTAR,
        PROFILES.PAP.GAN_THIAM_PO,
        PROFILES.PAP.KOH_POH_KOON,
        PROFILES.PAP.DARRYL_DAVID,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.LEE_HSIEN_LOONG,
        PROFILES.PAP.NG_LING_LING,
        PROFILES.PAP.NADIA_AHMAD,
        PROFILES.PAP.GAN_THIAM_PO,
        PROFILES.PAP.DARRYL_DAVID,
      ],
      confirmed: true,
      sample: 72,
      actual: 71.91,
    },
    opposition: [
      {
        party: PARTIES.RP.id,
        members: [
          PROFILES.RP.KENNETH_JEYARETNAM,
          PROFILES.RP.ANDY_ZHU,
          PROFILES.RP.NORAINI_YUNUS,
          PROFILES.RP.CHARLES_YEO,
          PROFILES.RP.DARREN_SOH,
        ],
        confirmed: true,
        sample: 28,
        actual: 28.09,
      },
    ],
  },
  {
    id: 'PW',
    featureId: 22,
    name: 'PUNGGOL WEST',
    electors: 26579,
    electorsVoted: 26587,
    history: {},
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.SUN_XUELING],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.SUN_XUELING],
      confirmed: true,
      sample: 65,
      actual: 60.97,
    },
    opposition: [
      {
        party: PARTIES.WP.id,
        members: [PROFILES.WP.TAN_CHEN_CHEN],
        confirmed: true,
        sample: 35,
        actual: 39.03,
      },
    ],
  },
  {
    id: 'CK',
    featureId: 28,
    name: 'CHUA CHU KANG',
    electors: 106693,
    electorsVoted: 106632,
    history: {
      2011: {
        electors: 158648,
        results: [
          { name: 'PAP', votes: 89710, votesPerc: 61.2 },
          { name: 'NSP', votes: 56885, votesPerc: 38.8 },
        ],
      },
      2015: {
        electors: 119931,
        results: [
          { name: 'PAP', votes: 84731, votesPerc: 76.89 },
          { name: 'PPP', votes: 25460, votesPerc: 23.11 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.GAN_KIM_YONG,
        PROFILES.PAP.ZAQY_MOHAMAD,
        PROFILES.PAP.YEE_CHIA_HSING,
        PROFILES.PAP.LOW_YEN_LING,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.GAN_KIM_YONG,
        PROFILES.PAP.LOW_YEN_LING,
        PROFILES.PAP.DON_WEE,
        PROFILES.PAP.ZHULKARNAIN_ABDUL_RAHIM,
      ],
      confirmed: true,
      sample: 59,
      actual: 58.64,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [
          PROFILES.PSP.FRANCIS_YUEN,
          PROFILES.PSP.TAN_MENG_WAH,
          PROFILES.PSP.CHOO_SHAUN_MING,
          PROFILES.PSP.ABDUL_RAHMAN,
        ],
        confirmed: true,
        sample: 41,
        actual: 41.36,
      },
    ],
  },
  {
    id: 'NS',
    featureId: 29,
    name: 'NEE SOON',
    electors: 147047,
    electorsVoted: 146902,
    history: {
      2011: {
        electors: 148290,
        results: [
          { name: 'PAP', votes: 80740, votesPerc: 58.4 },
          { name: 'WP', votes: 57523, votesPerc: 41.6 },
        ],
      },
      2015: {
        electors: 132289,
        results: [
          { name: 'PAP', votes: 82197, votesPerc: 66.83 },
          { name: 'WP', votes: 40796, votesPerc: 33.17 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.K_SHANMUGAM,
        PROFILES.PAP.MUHAMMAD_FAISHAL_IBRAHIM,
        PROFILES.PAP.LEE_BEE_WAH,
        PROFILES.PAP.HENRY_KWEK,
        PROFILES.PAP.LOUIS_NG,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.K_SHANMUGAM,
        PROFILES.PAP.MUHAMMAD_FAISHAL_IBRAHIM,
        PROFILES.PAP.CARRIE_TAN,
        PROFILES.PAP.LOUIS_NG,
        PROFILES.PAP.DERRICK_GOH,
      ],
      confirmed: true,
      sample: 61,
      actual: 61.9,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [
          PROFILES.PSP.DAMIEN_TAY,
          PROFILES.PSP.MUHAMMAD_TAUFIK,
          PROFILES.PSP.KALA_MANICKAM,
          PROFILES.PSP.SRI_NALLAKARUPPAN,
          PROFILES.PSP.BRADLEY_BOWYER,
        ],
        confirmed: true,
        sample: 39,
        actual: 38.1,
      },
    ],
  },
  {
    id: 'MP',
    featureId: 4,
    name: 'MACPHERSON',
    electors: 28564,
    electorsVoted: 28513,
    history: {
      2015: {
        electors: 28511,
        results: [
          { name: 'PAP', votes: 17227, votesPerc: 65.58 },
          { name: 'WP', votes: 8826, votesPerc: 33.6 },
          { name: 'NSP', votes: 215, votesPerc: 0.82 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.TIN_PEI_LING],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.TIN_PEI_LING],
      confirmed: true,
      sample: 73,
      actual: 71.74,
    },
    opposition: [
      {
        party: PARTIES.PPP.id,
        members: [PROFILES.PPP.GOH_MENG_SENG],
        confirmed: true,
        sample: 27,
        actual: 28.26,
      },
    ],
  },
  {
    id: 'RM',
    featureId: 31,
    name: 'RADIN MAS',
    electors: 24980,
    electorsVoted: 24931,
    history: {
      2011: {
        electors: 31014,
        results: [
          { name: 'PAP', votes: 18609, votesPerc: 67.1 },
          { name: 'NSP', votes: 9123, votesPerc: 32.9 },
        ],
      },
      2015: {
        electors: 28906,
        results: [
          { name: 'PAP', votes: 20230, votesPerc: 77.25 },
          { name: 'RP', votes: 3329, votesPerc: 12.71 },
          { name: 'INDIE', votes: 2629, votesPerc: 10.04 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.SAM_TAN],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.MELVIN_YONG],
      confirmed: true,
      sample: 76,
      actual: 74.03,
    },
    opposition: [
      {
        party: PARTIES.RP.id,
        members: [PROFILES.RP.KUMAR_APPAVOO],
        confirmed: true,
        sample: 24,
        actual: 25.97,
      },
    ],
  },
  {
    id: 'MB',
    featureId: 1,
    name: 'MOUNTBATTEN',
    electors: 24267,
    electorsVoted: 24246,
    history: {
      2011: {
        electors: 23731,
        results: [
          { name: 'PAP', votes: 11985, votesPerc: 58.62 },
          { name: 'NSP', votes: 8461, votesPerc: 41.38 },
        ],
      },
      2015: {
        electors: 24143,
        results: [
          { name: 'PAP', votes: 15290, votesPerc: 71.84 },
          { name: 'SPP', votes: 5992, votesPerc: 28.16 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.LIM_BIOW_CHUAN],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.LIM_BIOW_CHUAN],
      confirmed: true,
      sample: 75,
      actual: 73.84,
    },
    opposition: [
      {
        party: PARTIES.PV.id,
        members: [PROFILES.PV.SIVAKUMARAN_CHELLAPPA],
        confirmed: true,
        sample: 25,
        actual: 26.16,
      },
    ],
  },
  {
    id: 'PS',
    featureId: 6,
    name: 'POTONG PASIR',
    electors: 19740,
    electorsVoted: 19731,
    history: {
      2011: {
        electors: 17327,
        results: [
          { name: 'PAP', votes: 7992, votesPerc: 50.36 },
          { name: 'SPP', votes: 7878, votesPerc: 49.64 },
        ],
      },
      2015: {
        electors: 17407,
        results: [
          { name: 'PAP', votes: 10581, votesPerc: 66.41 },
          { name: 'SPP', votes: 5353, votesPerc: 33.59 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.SITOH_YIH_PIN],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.SITOH_YIH_PIN],
      confirmed: true,
      sample: 61,
      actual: 60.69,
    },
    opposition: [
      {
        party: PARTIES.SPP.id,
        members: [PROFILES.SPP.JOSE_RAYMOND],
        confirmed: true,
        sample: 39,
        actual: 39.31,
      },
    ],
  },
  {
    id: 'BK',
    featureId: 8,
    name: 'BUKIT BATOK',
    electors: 29950,
    electorsVoted: 29948,
    history: {
      2015: {
        electors: 27077,
        results: [
          { name: 'PAP', votes: 18204, votesPerc: 72.99 },
          { name: 'SDP', votes: 6585, votesPerc: 26.4 },
          { name: 'INDIE', votes: 150, votesPerc: 0.6 },
        ],
      },
      2016: {
        electors: 25727,
        byElection: true,
        results: [
          { name: 'PAP', votes: 14428, votesPerc: 61.21 },
          { name: 'SDP', votes: 9142, votesPerc: 38.79 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.MURALI_PILLAI],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.MURALI_PILLAI],
      confirmed: true,
      sample: 57,
      actual: 54.8,
    },
    opposition: [
      {
        party: PARTIES.SDP.id,
        members: [PROFILES.SDP.CHEE_SOON_JUAN],
        confirmed: true,
        sample: 43,
        actual: 45.2,
      },
    ],
  },
  {
    id: 'HN',
    featureId: 15,
    name: 'HONG KAH NORTH',
    electors: 28071,
    electorsVoted: 28046,
    history: {
      2011: {
        electors: 27701,
        results: [
          { name: 'PAP', votes: 18156, votesPerc: 70.61 },
          { name: 'SPP', votes: 7556, votesPerc: 29.39 },
        ],
      },
      2015: {
        electors: 28145,
        results: [
          { name: 'PAP', votes: 19612, votesPerc: 74.76 },
          { name: 'SPP', votes: 6621, votesPerc: 25.24 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.AMY_KHOR],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.AMY_KHOR],
      confirmed: true,
      sample: 63,
      actual: 60.98,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [PROFILES.PSP.GIGENE_WONG],
        confirmed: true,
        sample: 37,
        actual: 39.02,
      },
    ],
  },
  {
    id: 'JR',
    featureId: 9,
    name: 'JURONG',
    electors: 131234,
    electorsVoted: 131058,
    history: {
      2011: {
        electors: 125276,
        results: [
          { name: 'PAP', votes: 76595, votesPerc: 66.96 },
          { name: 'NSP', votes: 37786, votesPerc: 33.04 },
        ],
      },
      2015: {
        electors: 130498,
        results: [
          { name: 'PAP', votes: 95080, votesPerc: 79.28 },
          { name: 'SF', votes: 24848, votesPerc: 20.72 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.THARMAN,
        PROFILES.PAP.DESMOND_LEE,
        PROFILES.PAP.ANG_WEI_NENG,
        PROFILES.PAP.RAHAYU_MAHZAM,
        PROFILES.PAP.TAN_WU_MENG,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.THARMAN,
        PROFILES.PAP.RAHAYU_MAHZAM,
        PROFILES.PAP.TAN_WU_MENG,
        PROFILES.PAP.XIE_YAO_QUAN,
        PROFILES.PAP.SHAWN_HUANG,
      ],
      confirmed: true,
      sample: 75,
      actual: 74.62,
    },
    opposition: [
      {
        party: PARTIES.RDU.id,
        members: [
          PROFILES.RDU.RAVI_PHILEMON,
          PROFILES.RDU.MICHELLE_LEE,
          PROFILES.RDU.ALEC_TOK,
          PROFILES.RDU.LIYANA_DHAMIRA,
          PROFILES.RDU.NICHOLAS_TANG,
        ],
        confirmed: true,
        sample: 25,
        actual: 25.38,
      },
    ],
  },
  {
    id: 'BS',
    featureId: 13,
    name: 'BISHAN-TOA PAYOH',
    electors: 101366,
    electorsVoted: 101220,
    history: {
      2011: {
        electors: 122492,
        results: [
          { name: 'PAP', votes: 62385, votesPerc: 56.93 },
          { name: 'SPP', votes: 47205, votesPerc: 43.07 },
        ],
      },
      2015: {
        electors: 129975,
        results: [
          { name: 'PAP', votes: 86514, votesPerc: 73.59 },
          { name: 'SPP', votes: 31049, votesPerc: 26.41 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.NG_ENG_HEN,
        PROFILES.PAP.JOSEPHINE_TEO,
        PROFILES.PAP.CHONG_KEE_HIONG,
        PROFILES.PAP.SAKTIANDI_SUPAAT,
        PROFILES.PAP.CHEE_HONG_TAT,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.NG_ENG_HEN,
        PROFILES.PAP.CHONG_KEE_HIONG,
        PROFILES.PAP.SAKTIANDI_SUPAAT,
        PROFILES.PAP.CHEE_HONG_TAT,
      ],
      confirmed: true,
      sample: 67,
      actual: 67.26,
    },
    opposition: [
      {
        party: PARTIES.SPP.id,
        members: [
          PROFILES.SPP.STEVE_CHIA,
          PROFILES.SPP.WILLIAMSON_LEE,
          PROFILES.SPP.KHAN_OSMAN_SULAIMAN,
          PROFILES.SPP.MELVYN_CHIU,
        ],
        confirmed: true,
        sample: 33,
        actual: 32.74,
      },
    ],
  },
  {
    id: 'TM',
    featureId: 16,
    name: 'TAMPINES',
    electors: 151708,
    electorsVoted: 151589,
    history: {
      2011: {
        electors: 137532,
        results: [
          { name: 'PAP', votes: 72728, votesPerc: 57.22 },
          { name: 'NSP', votes: 54381, votesPerc: 42.78 },
        ],
      },
      2015: {
        electors: 143518,
        results: [
          { name: 'PAP', votes: 95202, votesPerc: 72.06 },
          { name: 'NSP', votes: 36920, votesPerc: 27.94 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.HENG_SWEE_KEAT,
        PROFILES.PAP.MASAGOS_ZUKLIFI,
        PROFILES.PAP.BAEY_YAM_KENG,
        PROFILES.PAP.CHENG_LI_HUI,
        PROFILES.PAP.DESMOND_CHOO,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.MASAGOS_ZUKLIFI,
        PROFILES.PAP.BAEY_YAM_KENG,
        PROFILES.PAP.CHENG_LI_HUI,
        PROFILES.PAP.DESMOND_CHOO,
        PROFILES.PAP.KOH_POH_KOON,
      ],
      confirmed: true,
      sample: 67,
      actual: 66.41,
    },
    opposition: [
      {
        party: PARTIES.NSP.id,
        members: [
          PROFILES.NSP.RENO_FONG,
          PROFILES.NSP.MOHAMAD_RIDZWAN,
          PROFILES.NSP.EUGENE_YEO,
          PROFILES.NSP.CHOONG_HON_HENG,
          PROFILES.NSP.VINCENT_NG,
        ],
        confirmed: true,
        sample: 33,
        actual: 33.59,
      },
    ],
  },
  {
    id: 'SK',
    featureId: 20,
    name: 'SENGKANG',
    electors: 120166,
    electorsVoted: 120100,
    history: {},
    current: {
      party: PARTIES.PAP.id,
      members: [],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.NG_CHEE_MENG,
        PROFILES.PAP.AMRIN_AMIN,
        PROFILES.PAP.LAM_PIN_MIN,
        PROFILES.PAP.RAYMOND_LYE,
      ],
      confirmed: true,
      sample: 47,
      actual: 47.87,
    },
    opposition: [
      {
        party: PARTIES.WP.id,
        members: [
          PROFILES.WP.HE_TING_RU,
          PROFILES.WP.LOUIS_CHUA,
          PROFILES.WP.JAMUS_LIM,
          PROFILES.WP.RAEESAH_BEGUM,
        ],
        confirmed: true,
        sample: 53,
        actual: 52.13,
      },
    ],
  },
  {
    id: 'AJ',
    featureId: 17,
    name: 'ALJUNIED',
    electors: 151007,
    electorsVoted: 150821,
    history: {
      2011: {
        electors: 143148,
        results: [
          { name: 'WP', votes: 72289, votesPerc: 54.72 },
          { name: 'PAP', votes: 59829, votesPerc: 45.28 },
        ],
      },
      2015: {
        electors: 148142,
        results: [
          { name: 'WP', votes: 69929, votesPerc: 50.95 },
          { name: 'PAP', votes: 67317, votesPerc: 49.05 },
        ],
      },
    },
    current: {
      party: PARTIES.WP.id,
      members: [
        PROFILES.WP.LOW_THIA_KHIANG,
        PROFILES.WP.PRITAM_SINGH,
        PROFILES.WP.MUHAMMAD_FAISAL,
        PROFILES.WP.CHEN_SHOW_MAO,
        PROFILES.WP.SYLVIA_LIM,
      ],
    },
    incumbent: {
      party: PARTIES.WP.id,
      members: [
        PROFILES.WP.PRITAM_SINGH,
        PROFILES.WP.SYLVIA_LIM,
        PROFILES.WP.MUHAMMAD_FAISAL,
        PROFILES.WP.GERALD_GIAM,
        PROFILES.WP.LEON_PERERA,
      ],
      confirmed: true,
      sample: 60,
      actual: 59.93,
    },
    opposition: [
      {
        party: PARTIES.PAP.id,
        members: [
          PROFILES.PAP.VICTOR_LYE,
          PROFILES.PAP.SHAMSUL_KAMAR,
          PROFILES.PAP.ALEX_YEO,
          PROFILES.PAP.CHUA_ENG_LEONG,
          PROFILES.PAP.CHAN_HUI_YUH,
        ],
        confirmed: true,
        sample: 40,
        actual: 40.07,
      },
    ],
  },
  {
    id: 'KR',
    featureId: 21,
    name: 'KEBUN BARU',
    electors: 22653,
    electorsVoted: 22623,
    history: {},
    current: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.HENRY_KWEK],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [PROFILES.PAP.HENRY_KWEK],
      confirmed: true,
      sample: 68,
      actual: 62.97,
    },
    opposition: [
      {
        party: PARTIES.PSP.id,
        members: [PROFILES.PSP.KUMARAN_PILLAI],
        confirmed: true,
        sample: 32,
        actual: 37.03,
      },
    ],
  },
  {
    id: 'MY',
    featureId: 27,
    name: 'MARSILING-YEW TEE',
    electors: 117176,
    electorsVoted: 117077,
    history: {
      2015: {
        electors: 148142,
        results: [
          { name: 'PAP', votes: 68485, votesPerc: 68.73 },
          { name: 'SDP', votes: 31157, votesPerc: 31.27 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.LAWRENCE_WONG,
        PROFILES.PAP.ALEX_YAM,
        PROFILES.PAP.ONG_TENG_KOON,
        PROFILES.PAP.ZAQY_MOHAMAD,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.LAWRENCE_WONG,
        PROFILES.PAP.ALEX_YAM,
        PROFILES.PAP.ZAQY_MOHAMAD,
        PROFILES.PAP.HANY_SOH,
      ],
      confirmed: true,
      sample: 64,
      actual: 63.18,
    },
    opposition: [
      {
        party: PARTIES.SDP.id,
        members: [
          PROFILES.SDP.BRYAN_LIM,
          PROFILES.SDP.DAMANHURI_ABAS,
          PROFILES.SDP.KHUNG_WAI_YEEN,
          PROFILES.SDP.BENJAMIN_PWEE,
        ],
        confirmed: true,
        sample: 36,
        actual: 36.82,
      },
    ],
  },
  {
    id: 'SB',
    featureId: 30,
    name: 'SEMBAWANG',
    electors: 147876,
    electorsVoted: 147786,
    history: {
      2011: {
        electors: 142459,
        results: [
          { name: 'PAP', votes: 84252, votesPerc: 63.9 },
          { name: 'SDP', votes: 47605, votesPerc: 36.1 },
        ],
      },
      2015: {
        electors: 144672,
        results: [
          { name: 'PAP', votes: 96639, votesPerc: 72.28 },
          { name: 'NSP', votes: 37067, votesPerc: 27.72 },
        ],
      },
    },
    current: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.KHAW_BOON_WAN,
        PROFILES.PAP.ONG_YE_KUNG,
        PROFILES.PAP.VIKRAM_NAIR,
        PROFILES.PAP.LIM_WEE_KIAK,
        PROFILES.PAP.AMRIN_AMIN,
      ],
    },
    incumbent: {
      party: PARTIES.PAP.id,
      members: [
        PROFILES.PAP.ONG_YE_KUNG,
        PROFILES.PAP.VIKRAM_NAIR,
        PROFILES.PAP.LIM_WEE_KIAK,
        PROFILES.PAP.POH_LI_SAN,
        PROFILES.PAP.MARIAN_JAFAAR,
      ],
      confirmed: true,
      sample: 69,
      actual: 67.29,
    },
    opposition: [
      {
        party: PARTIES.NSP.id,
        members: [
          PROFILES.NSP.SPENCER_NG,
          PROFILES.NSP.IVAN_YEO,
          PROFILES.NSP.SEBASTIAN_TEO,
          PROFILES.NSP.YADZETH_HAIRIS,
          PROFILES.NSP.SATHIN_RAVINDRAN,
        ],
        confirmed: true,
        sample: 31,
        actual: 32.71,
      },
    ],
  },
];
