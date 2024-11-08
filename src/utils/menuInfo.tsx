export interface MenuLink {
	id: number;
	url: string;
	text: string;
	group?: string;
}

export const MenuLinks: MenuLink[] = [
	{
		id: 1,
		url: "/",
		text: "Etusivu",
		group: "Yleiset tiedot",
	},
	{
		id: 2,
		url: "/seura",
		text: "Seura",
		group: "Yleiset tiedot",
	},
	{
		id: 3,
		url: "/valmennus",
		text: "Viikoittainen valmennus",
		group: "Ohjelmat",
	},

	{
		id: 4,
		url: "/yksityistunnit",
		text: "Yksityistunnit",
		group: "Ohjelmat",
	},
	{
		id: 5,
		url: "/tapahtumat-ja-kurssit",
		text: "Tapahtumat ja kurssit",
		group: "Ohjelmat",
	},
  {
		id: 6,
		url: "/yhteystiedot",
		text: "Yhteystiedot",
		group: "Yleiset tiedot",
	},
	{
		id: 7,
		url: "/liity-jaseneksi",
		text: "Liity jäseneksi",
		group: "Yleiset tiedot",
	},
	{
		id: 8,
		url: "/#contacts",
		text: "Hallisarja ja turnaukset",
	},
	{
		id: 9,
		url: "/kenttavaraukset",
		text: "Kenttävaraukset",
	},
	{
		id: 10,
		url: "/in-english",
		text: "In English",
		group: "Yleiset tiedot",
	},
	{
		id: 11,
		url: "/senioritennis",
		text: "Senioritennis",
		group: "Ohjelmat",
	},
];


export const HeroServiceCards = [
	{
		id: 1,
		url: "/",
		title: "Junior Tennis",
		subtitle: "Groups",
	},
	{
		id: 2,
		url: "/#partners",
		title: "adult Tennis",
		subtitle: "Groups",
	},
	{
		id: 3,
		url: "/#about",
		title: "Court booking",
		subtitle: "Venues",
	}
];

export const ValmennusMenuLinks = [
	{
		id: 1,
		url: "/valmennus",
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