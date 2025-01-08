export interface MenuLink {
	id: number;
	url: string;
	title: string;
	group?: string;
}

export const MenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/",
		title: "Etusivu",
		group: "Yleiset tiedot",
	},
	{
		id: 2,
		url: "/seura",
		title: "Seura",
		group: "Yleiset tiedot",
	},
	{
		id: 3,
		url: "/valmennus/viikoittainen-valmennus",
		title: "Viikoittainen valmennus",
		group: "Ohjelmat",
	},

	{
		id: 4,
		url: "/yksityistunnit",
		title: "Yksityistunnit",
		group: "Ohjelmat",
	},
	{
		id: 5,
		url: "/tapahtumat-ja-kurssit",
		title: "Tapahtumat ja kurssit",
		group: "Ohjelmat",
	},
  {
		id: 6,
		url: "/yhteystiedot",
		title: "Yhteystiedot",
		group: "Yleiset tiedot",
	},
	{
		id: 7,
		url: "/liity-jaseneksi",
		title: "Liity jäseneksi",
		group: "Yleiset tiedot",
	},
	{
		id: 8,
		url: "/hallisarjajaturnaukset",
		title: "Hallisarja ja turnaukset",
	},
	{
		id: 9,
		url: "/kenttavaraukset",
		title: "Kenttävaraukset",
	},
	{
		id: 10,
		url: "/in-english",
		title: "In English",
		group: "Yleiset tiedot",
	},
	{
		id: 11,
		url: "/senioritennis",
		title: "Senioritennis",
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
		title: "Viikoittainen valmennus",
	},
	{
		id: 2,
		url: "/valmennus/aikuisvalmennus-sisakausi-2024-2025/",
		title: "Aikuisvalmennus sisäkausi 2024-2025",
	},
	{
		id: 3,
		url: "/valmennus/juniorivalmennus-sisakausi-2024-2025/",
		title: "Juniorvalmennus sisäkausi 2024-2025",
	},
	{
		id: 4,
		url: "/valmennus/valmennusehdot-sisakaudelle-2024-2025/",
		title: "Valmennusehdot sisäkaudelle 2024-2025",
	},
	{
		id: 5,
		url: "/valmennus/pelisaannot-valmennustunnille/",
		title: "Pelisäännöt valmennustunnille",
	}
];

export const SeuraMenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/seura",
		title: "Meidän historia",
	},
	{
		id: 2,
		url: "/seura/hallitus",
		title: "Hallitus",
	},
];

export const TurnauksetLinks: MenuLink[] = [
	{
		id: 1,
		url: "/hallisarjajaturnaukset",
		title: "Keski-Uudenmaan hallisarja 2023-2024",
	},
	{
		id: 2,
		url: "/hallisarjajaturnaukset/jats-mestaruuskilpailut-2023",
		title: "JäTS:n Mestaruuskilpailut 11.-13.8.2023",
	},
	{
		id: 3,
		url: "/hallisarjajaturnaukset/jats-hallimestaruuskilpailut-2024",
		title: "JäTS:n hallimestaruuskilpailut 2024",
	},
	{
		id: 4,
		url: "/hallisarjajaturnaukset/jats-ulkokenttienkisat-2024",
		title: "JäTS:n ulkokenttien mestaruuskilpailut 9.8.-11.8.2024",
	},
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