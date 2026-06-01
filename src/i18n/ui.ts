export type Lang = 'et' | 'en';

export const LANGS: Lang[] = ['et', 'en'];
export const DEFAULT_LANG: Lang = 'et';

export const ui = {
  et: {
    siteTitle: 'Paatna Motoklubi',
    siteDescription:
      'Paatna Motoklubi. Asutatud 2025. 2025 sõitsime Nordkappi, 2026 sõidame Dolomiitidesse.',
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
      body: 'Meie klubi sündis ühest spontaansest ideest. Erik oli just ostnud endale Honda Africa Twini ja unistas sellega Nordkappi sõita. Kui ta naabritega sellest rääkis, tabas see mõte kõiki — ja tundus parajalt hullumeelne, et seda koos proovida.\n\nPool tundi hiljem oli otsus tehtud: läheme kõik koos.\n\nJanisel ja Kaidil oli motomatkade kogemus juba olemas, kuigi viimasest suuremast reisist oli mõni aasta möödas. Neid polnud vaja kaua veenda. Nils, meie noorim, ütles „jah“ kohe, kui kuulis — pikalt mõelda polnud aegagi.\n\nNii saigi alguse meie motoklubi. Meid seob armastus mootorrataste ja pikkade teede vastu ning üks lihtne tõdemus — parimad reisid on need, mida liiga kaua ette ei planeerita.',
      statusDone: 'Sõidetud',
      statusOngoing: 'Käib',
      statusNext: 'Järgmine',
    },
    tripMap: {
      title: 'Reisid',
      subtitle: '2025 üles Nordkappi. 2026 alla Dolomiitidesse. Lähtepunkt: Paatna.',
      legendDone: 'sõidetud',
      legendOngoing: 'käib',
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
      body: 'Our club was born out of one spontaneous idea. Erik had just bought himself a Honda Africa Twin and dreamed of riding it to Nordkapp. When he told the neighbours about it, the idea caught everyone — and it seemed just crazy enough to try together.\n\nHalf an hour later the decision was made: we’d all go together.\n\nJanis and Kait already had touring experience, though a few years had passed since their last big trip. They didn’t need much convincing. Nils, our youngest, said “yes” the moment he heard — there wasn’t time to think it over.\n\nThat’s how our motorcycle club started. What binds us together is a love for bikes and long roads, and one simple truth — the best trips are the ones you don’t plan too far ahead.',
      statusDone: 'Ridden',
      statusOngoing: 'On the road',
      statusNext: 'Next',
    },
    tripMap: {
      title: 'Trips',
      subtitle: '2025 north to Nordkapp. 2026 south to the Dolomites. Starting point: Paatna.',
      legendDone: 'ridden',
      legendOngoing: 'on the road',
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
