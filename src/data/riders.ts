import type { Lang } from '../i18n/ui';

type LocalizedString = { et: string; en: string };

export type Bike = {
  make: string;
  model: string;
  slug: string;
  image?: string;
  type?: LocalizedString;
  engine?: LocalizedString;
  luggage?: LocalizedString;
  riding?: LocalizedString;
  note?: LocalizedString;
};

export type RiderLink = {
  label: LocalizedString;
  url: string;
};

export type Rider = {
  name: string;
  intro?: LocalizedString;
  links?: RiderLink[];
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
    links: [
      {
        label: { et: 'Ehitanud ka ühe chopperi', en: 'Also built a chopper' },
        url: 'https://www.youtube.com/watch?v=XlDsOZIIzaI',
      },
    ],
    bike: {
      make: 'BMW',
      model: 'F800ST',
      slug: 'bmw-f800st',
      image: '/bikes/bmw-f800st-luggage.webp',
      type: { et: 'Sport tourer', en: 'Sport tourer' },
      engine: { et: '798 cm³ paralleel-twin', en: '798 cc parallel-twin' },
      luggage: {
        et: 'Esimesel aastal sõitsin kahe küljekohvri ja peale rihmatud suure dry bag’iga. Asjadeni jõudmine oli iga peatusega tüütu — rihmad maha, kott maha, ülemine ots lahti. Vahetasin top boxi vastu: kiirem ligipääs, kindlam vihma vastu ja kõrgem koormakeskpunkt ei sega enam sõitu.',
        en: 'The first year I rode with two side cases and a large dry bag strapped on top. Getting at anything was a hassle at every stop — straps off, bag down, top open. Swapped it for a top box: faster access, better in the rain, and the load no longer sits high enough to upset the ride.',
      },
    },
  },
  {
    name: 'Janis',
    intro: {
      et: 'Sõidukogemus algas 1989. aastal, kui vanaisa ostis mulle Riga 7 võrri.',
      en: 'Riding experience started in 1989, when my grandfather bought me a Riga 7 moped.',
    },
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
    intro: {
      et: 'Huvi mootorrataste vastu sai alguse umbes 14-aastaselt, kui sain vanaemalt esimese sõiduriista — vana mini mopeedi (Riga 49cc). Sellega sai külavahel palju sõidetud ja samal ajal ka remontimist õpitud, sest pidevalt vajas midagi putitamist.\n\n18-aastaselt sain vanaisalt mittetöötava Iž Jupiter 2 mootorratta, mille võtsin täielikult juppideks ja taastasin ise mitme kuu jooksul ära — uus värv, korrastatud elektrisüsteem ja palju praktilist kogemust. Selle rattaga sai mitu head suve sõidetud ja ka omajagu kukutud.\n\nPärast umbes 15-aastast pausi tegin 2017. aastal A-kategooria load. Seejärel olid mul Yamaha XVS 1100 ja Yamaha XJ900S, mille ehitasin ise ümber caferaceriks. Unistus Nordkapis ära käia viis mind lõpuks Honda XRV 750 Africa Twin juurde, millest on saanud minu lemmikratas ja millega olen kõige rohkem sõitnud. Ainuke asi, mis vahel närvidele käib, on selle kütusepump.',
      en: 'My interest in motorcycles started around age 14, when my grandmother gave me my first ride — an old mini moped (Riga 49cc). I racked up plenty of kilometres around the village on it and picked up wrenching at the same time, since something always needed fixing.\n\nAt 18 my grandfather handed me a non-running Iž Jupiter 2. I stripped it down completely and brought it back to life over a few months — new paint, sorted electrics and a lot of practical experience. That bike saw several good summers, and a fair share of crashes too.\n\nAfter roughly a 15-year break I got my A licence in 2017. Then came a Yamaha XVS 1100 and a Yamaha XJ900S that I converted into a café racer myself. The dream of riding to Nordkapp eventually led me to a Honda XRV 750 Africa Twin — it has become my favourite bike and the one I’ve ridden the most. The only thing that occasionally gets on my nerves is its fuel pump.',
    },
    bike: {
      make: 'Honda',
      model: 'Africa Twin XRV750',
      slug: 'honda-africa-twin-xrv750',
      image: '/bikes/honda-africa-twin-xrv750.webp',
      type: { et: 'Adventure', en: 'Adventure' },
      engine: { et: '742 cm³ V-twin', en: '742 cc V-twin' },
    },
  },
  {
    name: 'Kait',
    intro: {
      et: 'Sõidukogemus algas 1998. aastal, kui sain Nokia 2010 vastu Jawa 634. Praegune on juba kaheksas ratas.',
      en: 'Riding experience started in 1998, when I traded a Nokia 2010 for a Jawa 634. Currently on my eighth bike.',
    },
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
