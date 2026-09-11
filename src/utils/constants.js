// Klubb information med färger
export const CLUBS = {
  LSK: {
    name: 'LSK',
    color: '#3b82f6',
    bgColor: 'bg-lsk',
    textColor: 'text-lsk',
    borderColor: 'border-lsk',
    startDate: '2021-08',
    endDate: '2024-09',
  },
  NEPPAN: {
    name: 'Neppan',
    color: '#ef4444',
    bgColor: 'bg-neppan',
    textColor: 'text-neppan',
    borderColor: 'border-neppan',
    startDate: '2024-10',
    endDate: '2025-07',
  },
  SKK: {
    name: 'SKK',
    color: '#10b981',
    bgColor: 'bg-skk',
    textColor: 'text-skk',
    borderColor: 'border-skk',
    startDate: '2025-08',
    endDate: '2026-07',
  },
  LSK_2: {
    name: 'LSK',
    color: '#3b82f6',
    bgColor: 'bg-lsk',
    textColor: 'text-lsk',
    borderColor: 'border-lsk',
    startDate: '2026-08',
    endDate: null, // Pågående
  },
};

// Alla simgrenar
export const SWIMMING_EVENTS = [
  // Frisim
  { id: 'free_50_sb', name: '50m Frisim (Kortbane)', distance: 50, type: 'frisim', pool: 'sb' },
  { id: 'free_50_lb', name: '50m Frisim (Långbane)', distance: 50, type: 'frisim', pool: 'lb' },
  { id: 'free_100_sb', name: '100m Frisim (Kortbane)', distance: 100, type: 'frisim', pool: 'sb' },
  { id: 'free_100_lb', name: '100m Frisim (Långbane)', distance: 100, type: 'frisim', pool: 'lb' },
  { id: 'free_200_sb', name: '200m Frisim (Kortbane)', distance: 200, type: 'frisim', pool: 'sb' },
  { id: 'free_200_lb', name: '200m Frisim (Långbane)', distance: 200, type: 'frisim', pool: 'lb' },
  { id: 'free_400_sb', name: '400m Frisim (Kortbane)', distance: 400, type: 'frisim', pool: 'sb' },
  { id: 'free_400_lb', name: '400m Frisim (Långbane)', distance: 400, type: 'frisim', pool: 'lb' },
  { id: 'free_800_sb', name: '800m Frisim (Kortbane)', distance: 800, type: 'frisim', pool: 'sb' },
  { id: 'free_800_lb', name: '800m Frisim (Långbane)', distance: 800, type: 'frisim', pool: 'lb' },
  { id: 'free_1500_sb', name: '1500m Frisim (Kortbane)', distance: 1500, type: 'frisim', pool: 'sb' },
  { id: 'free_1500_lb', name: '1500m Frisim (Långbane)', distance: 1500, type: 'frisim', pool: 'lb' },

  // Ryggsim
  { id: 'back_50_sb', name: '50m Ryggsim (Kortbane)', distance: 50, type: 'ryggsim', pool: 'sb' },
  { id: 'back_50_lb', name: '50m Ryggsim (Långbane)', distance: 50, type: 'ryggsim', pool: 'lb' },
  { id: 'back_100_sb', name: '100m Ryggsim (Kortbane)', distance: 100, type: 'ryggsim', pool: 'sb' },
  { id: 'back_100_lb', name: '100m Ryggsim (Långbane)', distance: 100, type: 'ryggsim', pool: 'lb' },
  { id: 'back_200_sb', name: '200m Ryggsim (Kortbane)', distance: 200, type: 'ryggsim', pool: 'sb' },
  { id: 'back_200_lb', name: '200m Ryggsim (Långbane)', distance: 200, type: 'ryggsim', pool: 'lb' },

  // Bröstsim
  { id: 'breast_50_sb', name: '50m Bröstsim (Kortbane)', distance: 50, type: 'bröstsim', pool: 'sb' },
  { id: 'breast_50_lb', name: '50m Bröstsim (Långbane)', distance: 50, type: 'bröstsim', pool: 'lb' },
  { id: 'breast_100_sb', name: '100m Bröstsim (Kortbane)', distance: 100, type: 'bröstsim', pool: 'sb' },
  { id: 'breast_100_lb', name: '100m Bröstsim (Långbane)', distance: 100, type: 'bröstsim', pool: 'lb' },
  { id: 'breast_200_sb', name: '200m Bröstsim (Kortbane)', distance: 200, type: 'bröstsim', pool: 'sb' },
  { id: 'breast_200_lb', name: '200m Bröstsim (Långbane)', distance: 200, type: 'bröstsim', pool: 'lb' },

  // Fjärilsim
  { id: 'fly_50_sb', name: '50m Fjärilsim (Kortbane)', distance: 50, type: 'fjärilsim', pool: 'sb' },
  { id: 'fly_50_lb', name: '50m Fjärilsim (Långbane)', distance: 50, type: 'fjärilsim', pool: 'lb' },
  { id: 'fly_100_sb', name: '100m Fjärilsim (Kortbane)', distance: 100, type: 'fjärilsim', pool: 'sb' },
  { id: 'fly_100_lb', name: '100m Fjärilsim (Långbane)', distance: 100, type: 'fjärilsim', pool: 'lb' },
  { id: 'fly_200_sb', name: '200m Fjärilsim (Kortbane)', distance: 200, type: 'fjärilsim', pool: 'sb' },
  { id: 'fly_200_lb', name: '200m Fjärilsim (Långbane)', distance: 200, type: 'fjärilsim', pool: 'lb' },

  // Medley
  { id: 'medley_100_sb', name: '100m Medley (Kortbane)', distance: 100, type: 'medley', pool: 'sb' },
  { id: 'medley_200_sb', name: '200m Medley (Kortbane)', distance: 200, type: 'medley', pool: 'sb' },
  { id: 'medley_200_lb', name: '200m Medley (Långbane)', distance: 200, type: 'medley', pool: 'lb' },
  { id: 'medley_400_sb', name: '400m Medley (Kortbane)', distance: 400, type: 'medley', pool: 'sb' },
  { id: 'medley_400_lb', name: '400m Medley (Långbane)', distance: 400, type: 'medley', pool: 'lb' },

  // 15m Start
  { id: '15m_start', name: '15m Start', distance: 15, type: 'start', pool: 'sb' },
];

// FINA base times (1000 poäng)
export const FINA_BASE_TIMES = {
  free_50_sb: 22.01,
  free_50_lb: 21.13,
  free_100_sb: 47.52,
  free_100_lb: 47.52,
  free_200_sb: 1*60 + 44.76,
  free_200_lb: 1*60 + 44.76,
  free_400_sb: 3*60 + 40.07,
  free_400_lb: 3*60 + 40.07,
  free_800_sb: 7*60 + 38.65,
  free_800_lb: 7*60 + 38.65,
  free_1500_sb: 14*60 + 31.02,
  free_1500_lb: 14*60 + 31.02,
  back_50_sb: 24.30,
  back_50_lb: 23.80,
  back_100_sb: 52.70,
  back_100_lb: 52.70,
  back_200_sb: 1*60 + 54.04,
  back_200_lb: 1*60 + 54.04,
  breast_50_sb: 27.20,
  breast_50_lb: 26.96,
  breast_100_sb: 59.13,
  breast_100_lb: 59.13,
  breast_200_sb: 2*60 + 6.12,
  breast_200_lb: 2*60 + 6.12,
  fly_50_sb: 23.24,
  fly_50_lb: 22.97,
  fly_100_sb: 51.85,
  fly_100_lb: 51.85,
  fly_200_sb: 1*60 + 51.25,
  fly_200_lb: 1*60 + 51.25,
  medley_100_sb: 58.01,
  medley_200_sb: 1*60 + 56.38,
  medley_200_lb: 1*60 + 56.38,
  medley_400_sb: 4*60 + 3.84,
  medley_400_lb: 4*60 + 3.84,
};

// Gruppera grenar efter typ
export const EVENTS_BY_TYPE = {
  frisim: SWIMMING_EVENTS.filter(e => e.type === 'frisim'),
  ryggsim: SWIMMING_EVENTS.filter(e => e.type === 'ryggsim'),
  bröstsim: SWIMMING_EVENTS.filter(e => e.type === 'bröstsim'),
  fjärilsim: SWIMMING_EVENTS.filter(e => e.type === 'fjärilsim'),
  medley: SWIMMING_EVENTS.filter(e => e.type === 'medley'),
  start: SWIMMING_EVENTS.filter(e => e.type === 'start'),
};
