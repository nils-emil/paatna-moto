import type { Lang } from '../i18n/ui';

type LocalizedString = { et: string; en: string };

export type TripDay = {
  number: string;
  title: LocalizedString;
  route?: LocalizedString;
  distanceKm?: number;
  paragraphs: LocalizedString[];
  images: string[];
};

export type Trip = {
  slug: string;
  year: number;
  name: LocalizedString;
  status: 'done' | 'ongoing' | 'planned';
  color: string;
  dashArray?: string;
  hero?: string;
  summary: LocalizedString;
  stats: { label: LocalizedString; value: LocalizedString }[];
  waypoints: [number, number][];
  pinned: { name: LocalizedString; lat: number; lon: number; emphasis?: boolean }[];
  days: TripDay[];
};

const NORDKAPP_WAYPOINTS: [number, number][] = [
  [59.44, 24.75],
  [60.17, 24.94],
  [62.24, 25.75],
  [65.01, 25.47],
  [66.50, 25.72],
  [68.91, 27.03],
  [70.07, 24.99],
  [71.17, 25.78],
  [69.97, 23.27],
  [68.43, 17.43],
  [65.48, 13.50],
  [63.43, 10.40],
  [61.65, 17.07],
  [59.32, 18.07],
  [59.44, 24.75],
];

const NORDKAPP: Trip = {
  slug: 'nordkapp-2025',
  year: 2025,
  name: { et: 'Nordkapp', en: 'Nordkapp' },
  status: 'done',
  color: '#ff4d00',
  hero: '/nordkapp/day3/506461276_24275797178705674_7911777885350698897_n.webp',
  summary: {
    et: 'Klubi esimene suur sõit. Tallinnast põhja, läbi Soome Nordkappi ja sealt mööda Norra rannikut tagasi. 4500 kilomeetrit, 10 päeva, neli ratast.',
    en: 'The club’s first big ride. From Tallinn north through Finland to Nordkapp, then back down the Norwegian coast. 4500 kilometres, 10 days, four bikes.',
  },
  stats: [
    { label: { et: 'Pikkus', en: 'Distance' }, value: { et: '4500 km', en: '4500 km' } },
    { label: { et: 'Päevi', en: 'Days' }, value: { et: '10', en: '10' } },
    { label: { et: 'Algus', en: 'Start' }, value: { et: 'Reede, 13. juuni', en: 'Friday, June 13' } },
    { label: { et: 'Sihtpunkt', en: 'Destination' }, value: { et: 'Nordkapp · 71° N', en: 'Nordkapp · 71° N' } },
  ],
  waypoints: NORDKAPP_WAYPOINTS,
  pinned: [
    { name: { et: 'Tallinn', en: 'Tallinn' }, lat: 59.44, lon: 24.75, emphasis: true },
    { name: { et: 'Rovaniemi', en: 'Rovaniemi' }, lat: 66.50, lon: 25.72 },
    { name: { et: 'Nordkapp', en: 'Nordkapp' }, lat: 71.17, lon: 25.78, emphasis: true },
    { name: { et: 'Alta', en: 'Alta' }, lat: 69.97, lon: 23.27 },
    { name: { et: 'Trondheim', en: 'Trondheim' }, lat: 63.43, lon: 10.40 },
    { name: { et: 'Stockholm', en: 'Stockholm' }, lat: 59.32, lon: 18.07 },
  ],
  days: [
    {
      number: '1',
      title: { et: 'Reede 13. — väljasõit', en: 'Friday the 13th — setting off' },
      distanceKm: 590,
      paragraphs: [
        {
          et: 'Neljapäeval veel tavalised inimesed, reedeks juba neljakesi teel Nordkappi. Reede 13., aga ebausu asemel optimism ja liiga palju varuriideid.',
          en: 'On Thursday we were still ordinary people; by Friday the four of us were on the way to Nordkapp. Friday the 13th — instead of superstition, optimism and far too many spare clothes.',
        },
        {
          et: 'Hädapeatus: üks mootor jäi vait. Süüdistati kütusepuudust ja rikkeid, kuni avastasime, et kütusekraan oli kogemata kinni keeratud.',
          en: 'Emergency stop: one engine quit. We blamed empty tanks and breakdowns, until we realised the fuel tap had accidentally been turned off.',
        },
        {
          et: 'Reede 13. eest oodatud vihma asemel +23°C ja päike. Vihmakombed jäid kotti, kihte kooriti seljast.',
          en: 'Instead of the expected Friday-the-13th rain, +23°C and sunshine. Rain gear stayed in the bag, layers came off.',
        },
        {
          et: 'Öömaja jaoks võtsime möki. Nelja peale 40 eurot, tundus väga hea diil.',
          en: 'We rented a cabin for the night. 40 euros for four — felt like a great deal.',
        },
      ],
      images: [
        '/nordkapp/day1/503615247_24257952590490133_1253234519934691464_n.webp',
        '/nordkapp/day1/505382078_24257952650490127_4479832201299364312_n.webp',
      ],
    },
    {
      number: '2',
      title: { et: 'Tallinn → Rovaniemi', en: 'Tallinn → Rovaniemi' },
      route: { et: 'Soomes põhja', en: 'North through Finland' },
      paragraphs: [
        {
          et: 'Janis alustas päeva hommikuse sukeldumisega järve. Pärast kohvi lenksud põhja.',
          en: 'Janis started the day with a morning dip in the lake. After coffee, handlebars pointed north.',
        },
        {
          et: 'Motonet sai külastatud, aga uut visiiri sealt ei saanud. Africa Twini kütusepump otsustas streikida, vana kooli jalalöök ja sõit jätkus.',
          en: 'We stopped at Motonet but couldn’t find a new visor. The Africa Twin’s fuel pump decided to strike — an old-school kick and we rode on.',
        },
        {
          et: 'Õhtuks Rovaniemis polaarjoonel. Päike enam looja ei lähe.',
          en: 'By evening we were at Rovaniemi on the Arctic Circle. The sun no longer sets.',
        },
      ],
      images: [
        '/nordkapp/day2/506647974_24266134446338614_4769010655651933208_n.webp',
        '/nordkapp/day2/505172463_24266134669671925_848107465979928640_n.webp',
      ],
    },
    {
      number: '3',
      title: { et: 'Polaarjoon ja tundra', en: 'Arctic Circle and tundra' },
      paragraphs: [
        {
          et: 'Hommikul kõik neli ratast parkimistrahvi peale. Santa Klausi küla, polaarjoone ületus, fotod tehtud.',
          en: 'In the morning all four bikes got a parking ticket. Santa Claus Village, Arctic Circle crossing, photos done.',
        },
        {
          et: 'Edasi tundrasse. Põhjapõdrad jalutavad üle tee, temperatuur kukub järsult, tuul külje pealt. Africa Twini kütusepump nõuab nüüd igal peatusel koputust.',
          en: 'On into the tundra. Reindeer wander across the road, the temperature drops sharply, side wind. The Africa Twin’s fuel pump now wants a tap at every stop.',
        },
        {
          et: 'Õhtu kämpingus. Saun ja sukeldumine Põhja-Jäämeres.',
          en: 'Evening at a campsite. Sauna and a dip in the Arctic Ocean.',
        },
      ],
      images: [
        '/nordkapp/day3/505756890_24275797335372325_7476945158915606336_n.webp',
        '/nordkapp/day3/505417593_24275797182039007_4762863014331881412_n.webp',
        '/nordkapp/day3/506441159_24275797062039019_8984314469737694961_n.webp',
        '/nordkapp/day3/505752915_24275797042039021_1563928974376258633_n.webp',
      ],
    },
    {
      number: '4',
      title: { et: 'Nordkapp vallutatud', en: 'Nordkapp conquered' },
      route: { et: '190 km mägiteed põhja, edasi Altasse', en: '190 km of mountain road north, then on to Alta' },
      paragraphs: [
        {
          et: 'Hommikul vaikne start, ees 190 km mägist teed Nordkappi.',
          en: 'A quiet start in the morning, 190 km of mountain road to Nordkapp ahead.',
        },
        {
          et: 'Teel kohtasime vana Honda Goldwingi rändurit — külgkorvis kaks koera, naine tagaistmel. Koerad nägid rahulikumad välja kui meie. Africa Twini kütusepump jätkas oma jama: hädapeatusi rohkem kui F1 boksitiimil.',
          en: 'On the way we met an old Honda Goldwing rider — two dogs in the sidecar, his wife on the back. The dogs looked calmer than we did. The Africa Twin’s fuel pump kept up its games: more pit stops than an F1 crew.',
        },
        {
          et: 'Nordkapp vallutatud. Tuul vali, taevas dramaatiline. Tagasitee Altasse, ühel hetkel peaaegu lume hange sisse — põhjamaine Titanic.',
          en: 'Nordkapp conquered. Loud wind, dramatic sky. On the way back to Alta we almost rode straight into a snow bank — a Nordic Titanic.',
        },
      ],
      images: [
        '/nordkapp/day4/505436212_24284068527878539_6045443720666407174_n.webp',
        '/nordkapp/day4/506774797_24284069131211812_1743151436585811869_n.webp',
        '/nordkapp/day4/504231362_24284069181211807_4175637191875847936_n.webp',
        '/nordkapp/day4/505384227_24284068534545205_3398646280754524012_n.webp',
      ],
    },
    {
      number: '5',
      title: { et: 'Fjordides lõuna poole', en: 'South through the fjords' },
      route: { et: 'Norra fjordid, E6', en: 'Norwegian fjords, E6' },
      paragraphs: [
        {
          et: 'Ärkasime keset Norra fjorde. Linnulaul, koskede kohin, karge hommik. 5-tärni hotell ilma seinte ja laeta.',
          en: 'We woke up in the middle of the Norwegian fjords. Birdsong, the sound of waterfalls, a crisp morning. A 5-star hotel without walls or a ceiling.',
        },
        {
          et: 'Hommik kõrvalteedel — kalurikülad, punased majad vee ääres, kuivavad võrgud. Pärastlõunal E6 peale, Skandinaavia pikima maantee rütmis lõunasse.',
          en: 'Morning on side roads — fishing villages, red houses by the water, nets drying. In the afternoon onto the E6, riding south in the rhythm of Scandinavia’s longest highway.',
        },
        {
          et: 'Päeva lõpuks 2600 km algusest.',
          en: 'By the end of the day, 2600 km from the start.',
        },
      ],
      images: [
        '/nordkapp/day5/495277338_24291025713849487_5817104333262898909_n.webp',
        '/nordkapp/day5/505369935_24291025520516173_2618220601577486855_n.webp',
        '/nordkapp/day5/505452040_24291025293849529_6725070308660202331_n.webp',
      ],
    },
    {
      number: '6',
      title: { et: 'Narvik → Harran', en: 'Narvik → Harran' },
      route: { et: 'E6 · 745 km · 16 tundi', en: 'E6 · 745 km · 16 hours' },
      distanceKm: 745,
      paragraphs: [
        {
          et: 'Reisi kõige karmim päev. 745 km, 16 tundi sadulas, vihm peaaegu kogu päev.',
          en: 'The toughest day of the trip. 745 km, 16 hours in the saddle, rain almost the entire day.',
        },
        {
          et: 'E6 keeldus sirgeks minemast. Tunnelid pikad, üks 9 km — keskel ei saanud aru kas üles või alla. 700 m kõrgusel termomeeter 4°C, põhjapõdrad sealsuses mugavalt.',
          en: 'The E6 refused to go straight. Long tunnels, one 9 km long — halfway through you couldn’t tell if you were climbing or dropping. At 700 m the thermometer read 4°C; the reindeer looked perfectly at home.',
        },
        {
          et: 'Õhtuks Harranis: märjad, väsinud, rahulolevad. Sellised päevad jäävad meelde.',
          en: 'Evening in Harran: wet, tired, satisfied. Days like that stick with you.',
        },
      ],
      images: [
        '/nordkapp/day6/505472067_24298835176401874_8996122746285508082_n.webp',
        '/nordkapp/day6/510432180_24298834646401927_204155468980369232_n.webp',
        '/nordkapp/day6/505436210_24298835493068509_8960876875867542277_n.webp',
        '/nordkapp/day6/509611169_24298834966401895_547832903271814436_n.webp',
      ],
    },
    {
      number: '7',
      title: { et: 'Harran → Trondheim', en: 'Harran → Trondheim' },
      distanceKm: 230,
      paragraphs: [
        {
          et: 'Lühem etapp, aga BMW näitas iseloomu — süütelukk keeldus koostööst, muud arusaamatud mured. Vihm kogu päev.',
          en: 'A shorter leg, but the BMW showed its character — the ignition switch refused to cooperate, other unexplained gripes. Rain all day.',
        },
        {
          et: 'Üks tunnel jäi meelde: sees 22°C, väljas 5°C. Visiir kohe udus.',
          en: 'One tunnel stuck in memory: 22°C inside, 5°C outside. Visor fogged up instantly.',
        },
        {
          et: 'Õhtuks Trondheim, soe tuba, kuivemad riided.',
          en: 'By evening, Trondheim, a warm room and drier clothes.',
        },
      ],
      images: [
        '/nordkapp/day7/510302507_24306131495672242_668410697929548254_n.webp',
        '/nordkapp/day7/505739073_24306131629005562_7273178287842871077_n.webp',
        '/nordkapp/day7/492611202_24306131652338893_5643337132775354793_n.webp',
      ],
    },
    {
      number: '8',
      title: { et: 'Trondheim → Iggesund', en: 'Trondheim → Iggesund' },
      route: { et: 'Üle Rootsi piiri', en: 'Across the Swedish border' },
      distanceKm: 550,
      paragraphs: [
        {
          et: 'Esimesed 100 km võtsid 6 tundi: otsisime BMW remondimeest. Selgus, et selle põlvkonna mehed on kõik kalal või pensionil. Vana raua vastu armastust mitte keegi enam ei näita.',
          en: 'The first 100 km took 6 hours: we were hunting for a BMW mechanic. Turns out the men of that generation are all out fishing or retired. Nobody cares about the old iron any more.',
        },
        {
          et: 'Lõuna jõe ääres. Esimene õngeheit reisil — kala vee all jäi.',
          en: 'Lunch by a river. The first cast of the trip — the fish stayed underwater.',
        },
        {
          et: 'Norra-Rootsi piir ületatud, möödusime Åre mäesuusakeskusest. Rootsis algas 20. juuni püha — kõik tühi, isegi maanteed. 2+2 teel igaüks oma rea.',
          en: 'Crossed the Norway–Sweden border, passed the Åre ski resort. In Sweden the June 20 holiday had begun — everything empty, even the roads. On the 2+2 highway, each of us in our own lane.',
        },
      ],
      images: [
        '/nordkapp/day8/505777896_24314995634785828_6230197395140561271_n.webp',
        '/nordkapp/day8/508508765_24314995841452474_2020133855666052048_n.webp',
        '/nordkapp/day8/510246189_24314995534785838_7042329165213825619_n.webp',
      ],
    },
    {
      number: '9–10',
      title: { et: 'Iggesund → Stockholm → kodu', en: 'Iggesund → Stockholm → home' },
      paragraphs: [
        {
          et: 'Viimane pikem sõit Iggesundist Stockholmi sadamasse. Rattad laevale, mehed laevale tutvust tegema.',
          en: 'The final long ride from Iggesund to Stockholm harbour. Bikes onto the ferry, the crew off to make new friends.',
        },
        {
          et: 'Viimasel päeval veel viimane sõit koju. 4500 km Põhjamaad, fjorde, vihma, päikest ja lõputut vaadet.',
          en: 'On the last day, the final ride home. 4500 km of Nordic country, fjords, rain, sun and endless views.',
        },
      ],
      images: [
        '/nordkapp/day9-10/506069056_24319790657639659_2123907776341936629_n.webp',
        '/nordkapp/day9-10/512660546_24319790814306310_6094979767252830074_n.webp',
      ],
    },
  ],
};

const DOLOMITES: Trip = {
  slug: 'dolomiidid-2026',
  year: 2026,
  name: { et: 'Dolomiidid', en: 'Dolomites' },
  status: 'ongoing',
  color: '#f5f5f5',
  dashArray: '8 8',
  hero: '/dolomiidid/day1/paatna-start-grupp.webp',
  summary: {
    et: 'Suvel 2026. Paatnast lõunasse — läbi Tatralandia, Alpine Coaster Imsti, Bormio ja Bolzano Dolomiitidesse, tagasi üle Grossglockneri, Müncheni ja České Budějovice.',
    en: 'Summer 2026. From Paatna south — via Tatralandia, Alpine Coaster Imst, Bormio and Bolzano to the Dolomites, returning over Grossglockner, Munich and České Budějovice.',
  },
  stats: [
    { label: { et: 'Aeg', en: 'When' }, value: { et: 'Sel suvel', en: 'This summer' } },
    { label: { et: 'Sihtpunkt', en: 'Destination' }, value: { et: 'Dolomiidid · Itaalia', en: 'Dolomites · Italy' } },
  ],
  waypoints: [
    [59.3686299, 26.291809],
    [49.1067428, 19.5699039],
    [47.2419594, 10.72172],
    [46.6879278, 10.5396283],
    [46.4685313, 10.371804],
    [46.4949259, 11.3402543],
    [47.0741851, 12.6946761],
    [48.1768304, 11.5590966],
    [48.9756578, 14.480255],
    [59.3686299, 26.291809],
  ],
  pinned: [
    { name: { et: 'Paatna', en: 'Paatna' }, lat: 59.3686299, lon: 26.291809, emphasis: true },
    { name: { et: 'Tatralandia', en: 'Tatralandia' }, lat: 49.1067428, lon: 19.5699039 },
    { name: { et: 'Imst', en: 'Imst' }, lat: 47.2419594, lon: 10.72172 },
    { name: { et: 'Bormio', en: 'Bormio' }, lat: 46.4685313, lon: 10.371804 },
    { name: { et: 'Bolzano', en: 'Bolzano' }, lat: 46.4949259, lon: 11.3402543, emphasis: true },
    { name: { et: 'Grossglockner', en: 'Grossglockner' }, lat: 47.0741851, lon: 12.6946761 },
    { name: { et: 'München', en: 'Munich' }, lat: 48.1768304, lon: 11.5590966 },
    { name: { et: 'České Budějovice', en: 'České Budějovice' }, lat: 48.9756578, lon: 14.480255 },
  ],
  days: [
    {
      number: '1',
      title: { et: 'Paatna → Kaunas', en: 'Paatna → Kaunas' },
      route: { et: 'Eesti · Läti · Leedu', en: 'Estonia · Latvia · Lithuania' },
      paragraphs: [
        {
          et: 'Hommik algas stardiga — Janis pani veel kiiresti LED-tulede paigalduse valmis ja siis saime teele.',
          en: 'The morning started with the off — Janis quickly finished installing his LED lights and then we got going.',
        },
        {
          et: 'Laeva tanklas paagid täis, kõhud ka. Enne Läti piiri selgus, et Kaiti ratta küljetugi vajab laiendust — Võru Magazinist leitud kummikork tegi töö ära.',
          en: 'At the Laeva petrol station, tanks filled and bellies too. Before the Latvian border it turned out Kait’s side stand needed widening — a rubber cap from the Võru hardware shop did the job.',
        },
        {
          et: 'Läti läbisime kiirelt, politsei puhutas mõlemal pool piiri, kõik puhtad.',
          en: 'We crossed Latvia quickly; the police breathalysed us on both sides of the border, everyone clean.',
        },
        {
          et: 'Leedus otsustas Janise tagumine amort pensionile jääda ja lekib õli. Kõik kontrollisid kohe oma rattaid.',
          en: 'In Lithuania Janis’s rear shock decided to retire and started leaking oil. Everyone checked their own bikes straight away.',
        },
        {
          et: 'Nils avastas, et tagumised piduriklotsid on otsas. Hakkas käiguga pidurdama — selgus, et kombineeritud pidurit pole niikuinii ja esipidur ajab asja ära.',
          en: 'Nils discovered his rear brake pads were finished. Started engine braking — turned out there’s no linked brake system anyway, and the front brake does the job.',
        },
        {
          et: 'Esimene päev kirju, aga Kaunas on käes.',
          en: 'A colourful first day, but Kaunas is reached.',
        },
        {
          et: 'Ööbisime telkimisplatsil — 17 € öö inimese pealt, hinnas pesula, WC ja telkimisala.',
          en: 'Spent the night at a campsite — €17 per person, with laundry, toilets and the pitch included.',
        },
      ],
      images: [
        '/dolomiidid/day1/paatna-start-grupp.webp',
        '/dolomiidid/day1/hesburger-leedu.webp',
        '/dolomiidid/day1/amort-amorti-ots.webp',
      ],
    },
    {
      number: '2',
      title: { et: 'Kaunas → Kielce', en: 'Kaunas → Kielce' },
      route: { et: 'Leedu · Poola', en: 'Lithuania · Poland' },
      paragraphs: [
        {
          et: 'Proovisime Varssavist varuosasid leida, aga kohapeal polnud midagi olemas.',
          en: 'Tried to find spare parts in Warsaw, but nothing was in stock locally.',
        },
        {
          et: 'Teise poole päeva saime korraliku paduvihma kaela. Motikad tegid koostööd.',
          en: 'The second half of the day brought a proper downpour. The bikes held up.',
        },
        {
          et: 'Maanteelt maha sõites ei tulnud Nilsil enam käigud alla. Kahtlustasime, et eilne käikudega pidurdamine võis midagi ära lõhkuda. Seisma jäädes ja kontrollides selgus, et kondli plastiku polt oli kiirteel lahti tulnud ja hoovastiku vahele lennanud. Polt läks omale kohale tagasi ja käigud töötavad jälle.',
          en: 'Coming off the highway, Nils could no longer shift down. We suspected yesterday’s engine braking might have broken something. Once stopped and checking, it turned out a bolt from a plastic panel had worked loose on the motorway and flown into the linkage. The bolt went back into its hole and the gears work again.',
        },
        {
          et: 'Lõpetasime päeva Kielces — mäed juba paistavad.',
          en: 'Ended the day in Kielce — the mountains are already in view.',
        },
      ],
      images: [
        '/dolomiidid/day2/varssavi-paevike.webp',
        '/dolomiidid/day2/paduvihm-parklas.webp',
        '/dolomiidid/day2/teeaares-paus.webp',
        '/dolomiidid/day2/kondli-polt.webp',
      ],
    },
  ],
};

export const trips: Trip[] = [NORDKAPP, DOLOMITES];

export function getTrip(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}

export function pickTrip<T extends { et: string; en: string }>(
  s: T,
  lang: Lang
): string {
  return s[lang];
}
