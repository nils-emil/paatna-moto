import type { Lang } from '../i18n/ui';

type LocalizedString = { et: string; en: string };

export type Bike = {
  make: string;
  model: string;
  slug: string;
  type?: LocalizedString;
  engine?: LocalizedString;
  luggage?: LocalizedString;
  riding?: LocalizedString;
  note?: LocalizedString;
};

export type Rider = {
  name: string;
  intro?: LocalizedString;
  bike: Bike;
  previousBike?: Bike;
};

export const riders: Rider[] = [
  {
    name: 'Nils',
    intro: {
      et: 'Sõitnud lapsest saati. Esimene masin oli sinine Riga 13 punnvõrr, 10-aastasena. Teine masin oli Loncin 150cc krossikas, 13-aastasena. A2 load said tehtud kohe 18-aastaselt. Seega sõidustaaži juba 20 aastat.',
      en: 'Riding since childhood. First bike was a blue Riga 13 moped at 10. Second was a Loncin 150cc dirt bike at 13. Got the A2 licence right at 18 — so 20 years in the saddle already.',
    },
    bike: {
      make: 'BMW',
      model: 'F800ST',
      slug: 'bmw-f800st',
      type: { et: 'Sport tourer', en: 'Sport tourer' },
      engine: { et: '798 cm³ paralleel-twin', en: '798 cc parallel-twin' },
    },
  },
  {
    name: 'Janis',
    bike: {
      make: 'BMW',
      model: 'R1200R',
      slug: 'bmw-r1200r',
      type: { et: 'Tourer', en: 'Tourer' },
      engine: { et: '1170 cm³ boxer', en: '1170 cc boxer' },
    },
    previousBike: {
      make: 'BMW',
      model: 'R1100S',
      slug: 'bmw-r1100s',
      note: { et: 'kollane', en: 'yellow' },
    },
  },
  {
    name: 'Erik',
    bike: {
      make: 'Honda',
      model: 'Africa Twin',
      slug: 'honda-africa-twin',
      type: { et: 'Adventure', en: 'Adventure' },
      engine: { et: '1084 cm³ paralleel-twin', en: '1084 cc parallel-twin' },
    },
  },
  {
    name: 'Kait',
    bike: {
      make: 'BMW',
      model: 'GS 650',
      slug: 'bmw-gs-650',
      type: { et: 'Adventure', en: 'Adventure' },
      engine: { et: '652 cm³ ühesilindri', en: '652 cc single-cylinder' },
    },
    previousBike: {
      make: 'Honda',
      model: 'Pan European',
      slug: 'honda-pan-european',
    },
  },
];

export function pick(s: LocalizedString | undefined, lang: Lang): string | undefined {
  return s ? s[lang] : undefined;
}
