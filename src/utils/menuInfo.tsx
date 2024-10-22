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
		url: "/#services",
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
		url: "/#contacts",
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