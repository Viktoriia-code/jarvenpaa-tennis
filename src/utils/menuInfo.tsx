export interface MenuLink {
	id: number;
	url: string;
	title_fi: string;
	title_en?: string;
	group?: string;
}

export const MenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/",
		title_fi: "Etusivu",
		title_en: "Home",
		group: "Yleiset tiedot",
	},
	{
		id: 2,
		url: "/seura",
		title_fi: "Seura",
		title_en: "Club",
		group: "Yleiset tiedot",
	},
	{
		id: 3,
		url: "/valmennus/viikoittainen-valmennus",
		title_fi: "Viikoittainen valmennus",
		title_en: "Weekly coaching",
		group: "Ohjelmat",
	},

	{
		id: 4,
		url: "/yksityistunnit",
		title_fi: "Yksityistunnit",
		title_en: "Private lessons",
		group: "Ohjelmat",
	},
	{
		id: 5,
		url: "/tapahtumat-ja-kurssit",
		title_fi: "Tapahtumat ja kurssit",
		title_en: "Events and courses",
		group: "Ohjelmat",
	},
  {
		id: 6,
		url: "/yhteystiedot",
		title_fi: "Yhteystiedot",
		title_en: "Contacts",
		group: "Yleiset tiedot",
	},
	{
		id: 7,
		url: "/liity-jaseneksi",
		title_fi: "Liity jäseneksi",
		title_en: "Join us",
		group: "Yleiset tiedot",
	},
	{
		id: 8,
		url: "/hallisarjajaturnaukset",
		title_fi: "Hallisarja ja turnaukset",
		title_en: "Indoor league and tournaments",
	},
	{
		id: 9,
		url: "/kenttavaraukset/jarvenpaa-tenniskeskus",
		title_fi: "Kenttävaraukset",
		title_en: "Court reservations",
	},
	{
		id: 10,
		url: "/in-english",
		title_fi: "In English",
		title_en: "In English",
		group: "Yleiset tiedot",
	},
	{
		id: 11,
		url: "/senioritennis",
		title_fi: "Senioritennis",
		title_en: "Senior tennis",
		group: "Ohjelmat",
	},
];

export const ServiceCards = [
	{
		id: 1,
		url: "/valmennus/aikuisvalmennus-sisakausi-2024-2025",
		title: "Aikuisvalmennus",
		subtitle: "Sisäkausi 2024-2025",
	},
	{
		id: 2,
		url: "/valmennus/juniorivalmennus-sisakausi-2024-2025",
		title: "Juniorivalmennus",
		subtitle: "Sisäkausi 2024-2025",
	}
];

export const ValmennusMenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/valmennus/viikoittainen-valmennus",
		title_fi: "Viikoittainen valmennus",
		title_en: "Weekly coaching",
	},
	{
		id: 2,
		url: "/valmennus/aikuisvalmennus-sisakausi-2024-2025/",
		title_fi: "Aikuisvalmennus sisäkausi 2024-2025",
		title_en: "Adult coaching indoor season 2024-2025",
	},
	{
		id: 3,
		url: "/valmennus/juniorivalmennus-sisakausi-2024-2025/",
		title_fi: "Juniorvalmennus sisäkausi 2024-2025",
		title_en: "Junior coaching indoor season 2024-2025",
	},
	{
		id: 4,
		url: "/valmennus/valmennusehdot-sisakaudelle-2024-2025/",
		title_fi: "Valmennusehdot sisäkaudelle 2024-2025",
		title_en: "Coaching terms for the indoor season 2024-2025",
	},
	{
		id: 5,
		url: "/valmennus/pelisaannot-valmennustunnille/",
		title_fi: "Pelisäännöt valmennustunnille",
		title_en: "Rules of play for coaching hours",
	}
];

export const SeuraMenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/seura",
		title_fi: "Meidän historia",
		title_en: "Our history",
	},
	{
		id: 2,
		url: "/seura/hallitus",
		title_fi: "Hallitus",
		title_en: "Board",
	},
];

export const TurnauksetLinks: MenuLink[] = [
	{
		id: 1,
		url: "/hallisarjajaturnaukset",
		title_fi: "Keski-Uudenmaan hallisarja 2023-2024",
		title_en: "Central Uusimaa indoor league 2023-2024",
	},
	{
		id: 2,
		url: "/hallisarjajaturnaukset/jats-mestaruuskilpailut-2023",
		title_fi: "JäTS:n Mestaruuskilpailut 11.-13.8.2023",
		title_en: "JäTS Championships 11.-13.8.2023",
	},
	{
		id: 3,
		url: "/hallisarjajaturnaukset/jats-hallimestaruuskilpailut-2024",
		title_fi: "JäTS:n hallimestaruuskilpailut 2024",
		title_en: "JäTS indoor championships 2024",
	},
	{
		id: 4,
		url: "/hallisarjajaturnaukset/jats-ulkokenttienkisat-2024",
		title_fi: "JäTS:n ulkokenttien mestaruuskilpailut 9.8.-11.8.2024",
		title_en: "JäTS outdoor championships 9.8.-11.8.2024",
	},
];

export const KenttavarauksetLinks: MenuLink[] = [
	{
		id: 1,
		url: "/kenttavaraukset/jarvenpaa-tenniskeskus",
		title_fi: "Järvenpään Tenniskeskus",
		title_en: "Järvenpää Tennis Center",
	},
	{
		id: 2,
		url: "/kenttavaraukset/kerava-tenniskeskus",
		title_fi: "Keravan Tenniskeskus",
		title_en: "Kerava Tennis Center",
	},
	{
		id: 3,
		url: "/kenttavaraukset/lapila-massakentat",
		title_fi: "Lapilan massakentät",
		title_en: "Lapila tennis courts",
	}
];

export const JuniorGroups = [
  {
    "title": "MINITENNIS (PIKKUISET) 4-5 -VUOTIAILLE",
    "info": [
      "Ryhmäkoko 4-12 pelaajaa/1-3 valmentajaa",
      "Pallojen kanssa leikkimistä ja samalla liikunnallisten taitojen opettelua",
      "Huoltajat saavat osallistua (suositus alkuun)!",
      "Harjoituksen kesto 50-55min",
      "Harjoitusryhmät Järvenpäässä keskiviikkona klo 17 tai perjantaina klo 17."
    ]
  },
  {
    "title": "MINITENNIS (ISOMMAT) 6-8 -VUOTIAILLE",
    "info": [
      "Ryhmäkoko 4-16 pelaajaa/1-3 valmentajaa",
      "Opetellaan tennistä leikinomaisesti pehmeillä palloilla minikentillä",
      "Tennisharjoitukset 1-2 kertaa viikossa ja mahdollisuus osallistua minitenniskisoihin",
      "Harjoitusryhmiä Järvenpäässä maanantaista perjantaihin klo 14-19 välisenä aikana",
      "Harjoitusryhmät Keravalla tiistaisin sekä torstaisin klo 13-16 välisenä aikana"
    ]
  },
  {
    "title": "MIDITENNIS 9-11 -VUOTIAILLE",
    "info": [
      "Ryhmäkoko max. 6 pelaajaa",
      "Opetellaan tennistä puolikovilla / oransseilla palloilla lyhennetyllä tenniskentällä",
      "Tennisharjoitukset 1-3 kertaa viikossa ja mahdollisuus osallistua miditenniskisoihin",
      "Harjoitusryhmiä Järvenpäässä maanantaista perjantaihin klo 14-19 välisenä aikana",
      "Harjoitusryhmät Keravalla tiistaisin sekä torstaisin klo 14-18 välisenä aikana",
      "Muodostamme harjoitusryhmiä osallistujien pelitaitojen ja toiveiden mukaisesti"
    ]
  },
  {
    "title": "JUNIORITENNIS 12-18 -VUOTIAILLE",
    "info": [
      "Ryhmäkoko max. 6 pelaajaa",
      "Harjoitellaan ja pelataan tennistä oransseilla, vihreillä tai keltaisilla palloilla ryhmästä riippuen",
      "Tennisharjoitukset 1-3 kertaa viikossa",
      "Harjoitusryhmiä Järvenpäässä maanantaista perjantaihin klo 14-19 välisenä aikana",
      "Harjoitusryhmät Keravalla tiistaisin sekä torstaisin klo 14-18 välisenä aikana",
      "Muodostamme harjoitusryhmiä osallistujien pelitaitojen ja toiveiden mukaisesti"
    ]
  }
]