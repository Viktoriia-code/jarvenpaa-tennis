export type Weekday = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

export interface RawEvent {
  id: string;
  text: string;
  day: Weekday;
  startTime: string;
  endTime: string;
  trainer: string;
  location: string;
  availableSpots?: number;
}

export const dayMap: Record<Weekday, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const weekdayMap: Record<string, string> = {
  Monday: "Maanantai",
  Tuesday: "Tiistai",
  Wednesday: "Keskiviikko",
  Thursday: "Torstai",
  Friday: "Perjantai",
  Saturday: "Lauantai",
  Sunday: "Sunnuntai",
};

export type LocationKeys = "Kerava" | "Järvenpää" | "Molemmat";

export const locationMap: Record<string, string[]> = {
  Kerava: ["Kerava 1", "Kerava 2"],
  "Järvenpää": ["Best", "TH", "LS"],
  Molemmat: [],
};

export const ageMap: Record<string, string[]> = {
  Aikuiset: ["Aikuiset"],
  Juniorit: ["Juniorit"],
  Molemmat: ["Aikuiset", "Juniorit"],
};

export const trainerMap: Record<string, string[]> = {
  Matti: ["Matti"],
  Samuli: ["Samuli"],
  Stefan: ["Stefan"],
  Viljami: ["Viljami"],
};

export const trainerColorMap: Record<string, string> = {
  "Matti": "#DE6C54",
  "Samuli": "#4285DA",
  "Stefan": "#79B160",
  "Viljami": "#F2C846",
};

export const rawEvents: RawEvent[] = [
  { id: "1", text: "Aikuiset", day: "Monday", startTime: "12:00", endTime: "13:30", trainer: "Matti", location: "Best" },
  { id: "2", text: "Aikuiset", day: "Monday", startTime: "16:00", endTime: "17:00", trainer: "Matti", location: "Best" },
  { id: "3", text: "Aikuiset", day: "Monday", startTime: "17:00", endTime: "18:00", trainer: "Matti", location: "Best" },
  { id: "4", text: "Aikuiset", day: "Monday", startTime: "18:00", endTime: "19:00", trainer: "Matti", location: "Best" },
  { id: "5", text: "Aikuiset", day: "Monday", startTime: "19:00", endTime: "20:00", trainer: "Matti", location: "Best" },
  { id: "6", text: "Aikuiset", day: "Monday", startTime: "20:00", endTime: "21:00", trainer: "Matti", location: "Best" },
  { id: "7", text: "Juniorit", day: "Monday", startTime: "16:00", endTime: "17:00", trainer: "Samuli", location: "LS", availableSpots: 2 },
  { id: "8", text: "Juniorit", day: "Monday", startTime: "17:00", endTime: "18:00", trainer: "Samuli", location: "LS", availableSpots: 1 },
  { id: "9", text: "Aikuiset", day: "Monday", startTime: "18:00", endTime: "19:00", trainer: "Samuli", location: "LS" },
  { id: "10", text: "Aikuiset", day: "Monday", startTime: "19:00", endTime: "20:00", trainer: "Samuli", location: "LS" },
  { id: "11", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", trainer: "Matti", location: "Kerava 1" },
  { id: "12", text: "Aikuiset", day: "Tuesday", startTime: "11:00", endTime: "12:00", trainer: "Stefan", location: "Kerava 1" },
  { id: "13", text: "Juniorit", day: "Tuesday", startTime: "16:00", endTime: "17:00", trainer: "Stefan", location: "Kerava 1" },
  { id: "14", text: "Juniorit", day: "Tuesday", startTime: "17:00", endTime: "18:00", trainer: "Stefan", location: "Kerava 1" },
  { id: "15", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", trainer: "Stefan", location: "Kerava 2" },
  { id: "16", text: "Aikuiset", day: "Tuesday", startTime: "19:00", endTime: "20:00", trainer: "Stefan", location: "Kerava 2" },
  { id: "17", text: "Aikuiset", day: "Tuesday", startTime: "20:00", endTime: "21:00", trainer: "Stefan", location: "Kerava 2" },
  { id: "18", text: "Juniorit", day: "Tuesday", startTime: "16:00", endTime: "17:00", trainer: "Samuli", location: "LS" },
  { id: "19", text: "Aikuiset", day: "Tuesday", startTime: "17:00", endTime: "18:00", trainer: "Samuli", location: "LS" },
  { id: "20", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", trainer: "Samuli", location: "LS" },
  { id: "21", text: "Aikuiset", day: "Tuesday", startTime: "19:00", endTime: "20:00", trainer: "Samuli", location: "LS" },
  { id: "22", text: "Aikuiset", day: "Tuesday", startTime: "20:00", endTime: "21:00", trainer: "Samuli", location: "LS" },
  { id: "23", text: "Juniorit", day: "Tuesday", startTime: "18:00", endTime: "19:00", trainer: "Viljami", location: "Best" },
  { id: "24", text: "Juniorit", day: "Wednesday", startTime: "16:00", endTime: "17:00", trainer: "Matti", location: "TH" },
  { id: "25", text: "Juniorit", day: "Wednesday", startTime: "17:00", endTime: "18:00", trainer: "Matti", location: "LS" },
  { id: "26", text: "Aikuiset", day: "Wednesday", startTime: "18:00", endTime: "19:00", trainer: "Matti", location: "LS" },
  { id: "27", text: "Aikuiset", day: "Wednesday", startTime: "19:00", endTime: "20:00", trainer: "Matti", location: "Best" },
  { id: "28", text: "Juniorit", day: "Wednesday", startTime: "15:00", endTime: "16:00", trainer: "Viljami", location: "LS" },
  { id: "29", text: "Juniorit", day: "Wednesday", startTime: "16:00", endTime: "17:00", trainer: "Viljami", location: "LS", availableSpots: 1 },
  { id: "30", text: "Juniorit", day: "Wednesday", startTime: "18:00", endTime: "19:00", trainer: "Viljami", location: "TH" },
  { id: "31", text: "Juniorit", day: "Wednesday", startTime: "15:00", endTime: "16:00", trainer: "Samuli", location: "Best" },
  { id: "32", text: "Aikuiset", day: "Wednesday", startTime: "16:00", endTime: "17:00", trainer: "Samuli", location: "Best" },
  { id: "33", text: "Aikuiset", day: "Wednesday", startTime: "17:00", endTime: "18:00", trainer: "Samuli", location: "Best" },
  { id: "34", text: "Aikuiset", day: "Wednesday", startTime: "18:00", endTime: "19:00", trainer: "Samuli", location: "Best" },
  { id: "35", text: "Aikuiset", day: "Thursday", startTime: "10:00", endTime: "11:00", trainer: "Matti", location: "LS" },
  { id: "36", text: "Aikuiset", day: "Thursday", startTime: "17:00", endTime: "18:00", trainer: "Matti", location: "Kerava 2" },
  { id: "37", text: "Aikuiset", day: "Thursday", startTime: "18:00", endTime: "19:00", trainer: "Matti", location: "Kerava 2" },
  { id: "38", text: "Aikuiset", day: "Thursday", startTime: "19:00", endTime: "20:00", trainer: "Matti", location: "Kerava 2" },
  { id: "39", text: "Juniorit", day: "Thursday", startTime: "17:00", endTime: "18:00", trainer: "Samuli", location: "LS" },
  { id: "40", text: "Aikuiset", day: "Thursday", startTime: "18:00", endTime: "19:00", trainer: "Samuli", location: "LS" },
  { id: "41", text: "Aikuiset", day: "Thursday", startTime: "20:00", endTime: "21:00", trainer: "Samuli", location: "LS" },
  { id: "42", text: "Juniorit", day: "Friday", startTime: "17:00", endTime: "18:00", trainer: "Matti", location: "LS" },
  { id: "43", text: "Juniorit", day: "Friday", startTime: "16:00", endTime: "17:00", trainer: "Samuli", location: "LS", availableSpots: 1 },
  { id: "44", text: "Juniorit", day: "Friday", startTime: "17:00", endTime: "18:00", trainer: "Samuli", location: "TH", availableSpots: 1 },
  { id: "45", text: "Juniorit", day: "Friday", startTime: "18:00", endTime: "19:00", trainer: "Samuli", location: "LS" },
  { id: "46", text: "Aikuiset", day: "Friday", startTime: "19:00", endTime: "20:00", trainer: "Samuli", location: "TH", availableSpots: 1 },
];