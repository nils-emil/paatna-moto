export type Lang = 'et' | 'en';

export const LANGS: Lang[] = ['et', 'en'];
export const DEFAULT_LANG: Lang = 'et';

export const ui = {
  et: {
    siteTitle: 'Paatna Motoklubi',
    siteDescription:
      'Paatna Motoklubi. Asutatud 2025. 2025 sõitsime Nordkappi, 2026 läheme Dolomiitidesse.',
    nav: {
      club: 'Klubi',
      trips: 'Reisid',
      riders: 'Ratturid',
      bikes: 'Masinad',
    },
    hero: {
      ctaPrimary: 'Tutvu ratturitega',
      ctaGhost: 'Klubist lähemalt',
      scroll: 'Keri alla',
    },
    about: {
      title: 'Klubi',
      body: 'Klubi sai alguse üsna spontaanselt ühest ideest ja suurest reisiplaanist. Erik oli just soetanud Honda Africa Twin mootorratta ning jagas oma unistust sõita sellega Nordkappi. Mõte tekitas kohe elevust ka naabrite seas, kes nägid selles ettevõtmises rohkem potentsiaali kui tervet mõistust.\n\nPoole tunniga oli otsus tehtud — see teekond tuleb koos ette võtta. Janisel ja Kaidil oli varasem motomatkade kogemus olemas ning kuigi viimasest suuremast retkest oli möödunud aastaid, ei vajanud nad eriti veenmist. Nils, klubi noorim liige, liitus samuti kohe, kui plaanist kuulis — pikemalt mõtlemiseks polnudki aega.\n\nNii sündis seltskondlik motoklubi, mida ühendab kirg mootorrataste ja pikkade teekondade vastu ning lihtne arusaam, et kõige paremad reisid sünnivad siis, kui neid liiga kaua ei planeerita.',
      statusDone: 'Sõidetud',
      statusNext: 'Järgmine',
    },
    tripMap: {
      title: 'Reisid',
      subtitle: '2025 üles Nordkappi. 2026 alla Dolomiitidesse. Lähtepunkt: Tallinn.',
      legendDone: 'sõidetud',
      legendPlanned: 'sel suvel',
      tooltipOpen: 'ava lugu',
    },
    riders: {
      title: 'Ratturid',
      bikeOf: (name: string) => `${name}i masin`,
      previously: 'Varem:',
    },
    bikes: {
      title: 'Masinad',
      thRider: 'Rattur',
      thBike: 'Mootorratas',
      thType: 'Tüüp',
      thEngine: 'Mootor',
      thOpen: 'Ava',
    },
    footer: {
      country: 'Eesti',
    },
    common: {
      back: '← Tagasi',
    },
    trip: {
      dayLabel: 'Päev',
      noDiary: 'Päevikut pole veel kirjutatud — tuleb hiljem.',
      endNote: '4500 km. 10 päeva. Aitäh kõigile, kes kaasa elasid.',
    },
    bikePage: {
      ridingHeading: 'Kuidas sõita',
      luggageHeading: 'Pagas',
      ridingPlaceholder:
        'Lisa siia tunne ja kogemus. Kuidas mootor veab, kuidas käsitseb, mis pikal sõidul meeldib või tüütab.',
      luggagePlaceholder:
        'Lisa siia kotid, raamid, telk, vihmariided ja kõik muu mis ratta peale läheb.',
      metaType: 'Tüüp',
      metaEngine: 'Mootor',
      metaRider: 'Rattur',
      description: (make: string, model: string, rider: string) =>
        `${make} ${model}, ${rider}i masin Paatna Motoklubis.`,
    },
  },
  en: {
    siteTitle: 'Paatna Motorcycle Club',
    siteDescription:
      'Paatna Motorcycle Club. Founded 2025. In 2025 we rode to Nordkapp; in 2026 we head to the Dolomites.',
    nav: {
      club: 'Club',
      trips: 'Trips',
      riders: 'Riders',
      bikes: 'Bikes',
    },
    hero: {
      ctaPrimary: 'Meet the riders',
      ctaGhost: 'About the club',
      scroll: 'Scroll down',
    },
    about: {
      title: 'Club',
      body: 'The club started fairly spontaneously, from a single idea and one big travel plan. Erik had just bought a Honda Africa Twin and was talking about his dream of riding it to Nordkapp. The idea sparked enthusiasm among the neighbours too — they saw more potential in the trip than common sense.\n\nWithin half an hour the decision was made: this journey would be taken together. Janis and Kait had previous touring experience and, even though it had been years since their last big trip, they didn’t need much convincing. Nils, the youngest of the bunch, signed up the moment he heard the plan — there wasn’t time for second thoughts.\n\nThat is how a sociable motorcycle club was born, united by a passion for bikes and long roads, and the simple belief that the best trips are the ones you don’t plan for too long.',
      statusDone: 'Ridden',
      statusNext: 'Next',
    },
    tripMap: {
      title: 'Trips',
      subtitle: '2025 north to Nordkapp. 2026 south to the Dolomites. Starting point: Tallinn.',
      legendDone: 'ridden',
      legendPlanned: 'this summer',
      tooltipOpen: 'open the story',
    },
    riders: {
      title: 'Riders',
      bikeOf: (name: string) => `${name}'s bike`,
      previously: 'Previously:',
    },
    bikes: {
      title: 'Bikes',
      thRider: 'Rider',
      thBike: 'Motorcycle',
      thType: 'Type',
      thEngine: 'Engine',
      thOpen: 'Open',
    },
    footer: {
      country: 'Estonia',
    },
    common: {
      back: '← Back',
    },
    trip: {
      dayLabel: 'Day',
      noDiary: 'The diary hasn’t been written yet — coming later.',
      endNote: '4500 km. 10 days. Thanks to everyone who followed along.',
    },
    bikePage: {
      ridingHeading: 'How it rides',
      luggageHeading: 'Luggage',
      ridingPlaceholder:
        'Add a note about feel and experience here. How the engine pulls, how it handles, what you love or hate on long days.',
      luggagePlaceholder:
        'Add the bags, racks, tent, rain gear and anything else that goes on the bike.',
      metaType: 'Type',
      metaEngine: 'Engine',
      metaRider: 'Rider',
      description: (make: string, model: string, rider: string) =>
        `${make} ${model}, ${rider}'s bike in Paatna Motorcycle Club.`,
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : 'et';
}

export function localizedPath(lang: Lang, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return `/en${normalized === '/' ? '' : normalized}`;
  return normalized;
}

export function localizedHash(lang: Lang, hash: string): string {
  return lang === 'en' ? `/en/${hash}` : hash;
}

export function otherLangPath(lang: Lang, currentPath: string): string {
  if (lang === 'en') {
    const stripped = currentPath.replace(/^\/en/, '') || '/';
    return stripped;
  }
  const trimmed = currentPath === '/' ? '' : currentPath;
  return `/en${trimmed}` || '/en/';
}
