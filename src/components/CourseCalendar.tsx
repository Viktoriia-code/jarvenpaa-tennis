import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";

const renderEventContent = (arg: EventContentArg) => {
  const [line1, line2] = arg.event.title.split("\n");
  const timeText = arg.timeText;
  return (
    <div className="leading-tight">
      <div className="whitespace-nowrap text-xs">{timeText}</div>
      <div>{line1}</div>
      <div>{line2}</div>
    </div>
  );
};

const CalendarStyles = styled.div`
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 300 !important;
  border: 1px solid #C0C0C0 !important;
  width: 100% !important;
  .fc-day-today {
    background-color: transparent !important;
  }
  .fc-col-header-cell {
    background-color: #f0f0f0 !important;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid #C0C0C0 !important;
  }
  .fc-timegrid-axis {
    background-color: #f0f0f0;
    border: 1px solid #C0C0C0 !important;
    border-right-width: 1px !important;
  }
  .fc-timegrid-slot {
    height: 26px !important;
    min-height: 26px !important;
    max-height: 26px !important;
    padding: 0 !important;
  }
  .fc-timegrid-slot-label {
    border: 1px solid #C0C0C0 !important;
    padding: 0 8px !important;
  }
  .fc-timegrid-slot-frame {
    background-color: white !important;
    border: 1px solid #C0C0C0 !important;
  }
  .fc-timegrid-event {
    border: 1px solid #C0C0C0 !important;
    padding-left: 2px !important;
  }
  .fc {
    max-height: 610px;
  }
`;

type Weekday = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

interface RawEvent {
  id: string;
  text: string;
  day: Weekday;
  startTime: string;
  endTime: string;
  color: string;
  location: string;
}

const dayMap: Record<Weekday, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const getMonday = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay() || 7;
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - day + 1);
  return d;
};

const mapEvents = (rawEvents: RawEvent[], monday: Date): EventInput[] => {
  return rawEvents.map(({ day, startTime, endTime, text, id, color, location }) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + (dayMap[day] - 1));
    const [sh, sm] = startTime.split(":").map(Number);
    const [eh, em] = endTime.split(":").map(Number);
    const start = new Date(date);
    start.setHours(sh, sm);
    const end = new Date(date);
    end.setHours(eh, em);
    return {
      id,
      title: `${text}\n${location}`,
      start: start.toISOString(),
      end: end.toISOString(),
      backgroundColor: color,
    };
  });
};

const rawEvents: RawEvent[] = [
  { id: "1", text: "Aikuiset", day: "Monday", startTime: "12:00", endTime: "13:30", color: "#DE6C54", location: "Best" },
  { id: "2", text: "Aikuiset", day: "Monday", startTime: "16:00", endTime: "17:00", color: "#DE6C54", location: "Best" },
  { id: "3", text: "Aikuiset", day: "Monday", startTime: "17:00", endTime: "18:00", color: "#DE6C54", location: "Best" },
  { id: "4", text: "Aikuiset", day: "Monday", startTime: "18:00", endTime: "19:00", color: "#DE6C54", location: "Best" },
  { id: "5", text: "Aikuiset", day: "Monday", startTime: "19:00", endTime: "20:00", color: "#DE6C54", location: "Best" },
  { id: "6", text: "Aikuiset", day: "Monday", startTime: "20:00", endTime: "21:00", color: "#DE6C54", location: "Best" },
  { id: "7", text: "Juniors", day: "Monday", startTime: "16:00", endTime: "17:00", color: "#4285DA", location: "LS" },
  { id: "8", text: "Juniors", day: "Monday", startTime: "17:00", endTime: "18:00", color: "#4285DA", location: "LS" },
  { id: "9", text: "Aikuiset", day: "Monday", startTime: "18:00", endTime: "19:00", color: "#4285DA", location: "LS" },
  { id: "10", text: "Aikuiset", day: "Monday", startTime: "19:00", endTime: "20:00", color: "#4285DA", location: "LS" },
  { id: "11", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", color: "#DE6C54", location: "Kerava 1" },
  { id: "12", text: "Aikuiset", day: "Tuesday", startTime: "11:00", endTime: "12:00", color: "#79B160", location: "Kerava 1" },
  { id: "13", text: "Juniors", day: "Tuesday", startTime: "16:00", endTime: "17:00", color: "#79B160", location: "Kerava 1" },
  { id: "14", text: "Juniors", day: "Tuesday", startTime: "17:00", endTime: "18:00", color: "#79B160", location: "Kerava 1" },
  { id: "15", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", color: "#79B160", location: "Kerava 2" },
  { id: "16", text: "Aikuiset", day: "Tuesday", startTime: "19:00", endTime: "20:00", color: "#79B160", location: "Kerava 2" },
  { id: "17", text: "Aikuiset", day: "Tuesday", startTime: "20:00", endTime: "21:00", color: "#79B160", location: "Kerava 2" },
  { id: "18", text: "Juniors", day: "Tuesday", startTime: "16:00", endTime: "17:00", color: "#4285DA", location: "LS" },
  { id: "19", text: "Aikuiset", day: "Tuesday", startTime: "17:00", endTime: "18:00", color: "#4285DA", location: "LS" },
  { id: "20", text: "Aikuiset", day: "Tuesday", startTime: "18:00", endTime: "19:00", color: "#4285DA", location: "LS" },
  { id: "21", text: "Aikuiset", day: "Tuesday", startTime: "19:00", endTime: "20:00", color: "#4285DA", location: "LS" },
  { id: "22", text: "Aikuiset", day: "Tuesday", startTime: "20:00", endTime: "21:00", color: "#4285DA", location: "LS" },
  { id: "23", text: "Juniors", day: "Tuesday", startTime: "18:00", endTime: "19:00", color: "#F2C846", location: "Best" },
  { id: "24", text: "Juniors", day: "Wednesday", startTime: "16:00", endTime: "17:00", color: "#DE6C54", location: "TH" },
  { id: "25", text: "Juniors", day: "Wednesday", startTime: "17:00", endTime: "18:00", color: "#DE6C54", location: "LS" },
  { id: "26", text: "Aikuiset", day: "Wednesday", startTime: "18:00", endTime: "19:00", color: "#DE6C54", location: "LS" },
  { id: "27", text: "Aikuiset", day: "Wednesday", startTime: "19:00", endTime: "20:00", color: "#DE6C54", location: "Best" },
  { id: "28", text: "Juniors", day: "Wednesday", startTime: "15:00", endTime: "16:00", color: "#F2C846", location: "LS" },
  { id: "29", text: "Juniors", day: "Wednesday", startTime: "16:00", endTime: "17:00", color: "#F2C846", location: "LS" },
  { id: "30", text: "Juniors", day: "Wednesday", startTime: "18:00", endTime: "19:00", color: "#F2C846", location: "TH" },
  { id: "31", text: "Juniors", day: "Wednesday", startTime: "15:00", endTime: "16:00", color: "#4285DA", location: "Best" },
  { id: "32", text: "Aikuiset", day: "Wednesday", startTime: "16:00", endTime: "17:00", color: "#4285DA", location: "Best" },
  { id: "33", text: "Aikuiset", day: "Wednesday", startTime: "17:00", endTime: "18:00", color: "#4285DA", location: "Best" },
  { id: "34", text: "Aikuiset", day: "Wednesday", startTime: "18:00", endTime: "19:00", color: "#4285DA", location: "Best" },
  { id: "35", text: "Aikuiset", day: "Thursday", startTime: "10:00", endTime: "11:00", color: "#DE6C54", location: "LS" },
  { id: "36", text: "Aikuiset", day: "Thursday", startTime: "17:00", endTime: "18:00", color: "#DE6C54", location: "Kerava 2" },
  { id: "37", text: "Aikuiset", day: "Thursday", startTime: "18:00", endTime: "19:00", color: "#DE6C54", location: "Kerava 2" },
  { id: "38", text: "Aikuiset", day: "Thursday", startTime: "19:00", endTime: "20:00", color: "#DE6C54", location: "Kerava 2" },
  { id: "39", text: "Juniors", day: "Thursday", startTime: "17:00", endTime: "18:00", color: "#4285DA", location: "LS" },
  { id: "40", text: "Aikuiset", day: "Thursday", startTime: "18:00", endTime: "19:00", color: "#4285DA", location: "LS" },
  { id: "41", text: "Aikuiset", day: "Thursday", startTime: "20:00", endTime: "21:00", color: "#4285DA", location: "LS" },
  { id: "42", text: "Juniors", day: "Friday", startTime: "17:00", endTime: "18:00", color: "#DE6C54", location: "LS" },
  { id: "43", text: "Juniors", day: "Friday", startTime: "16:00", endTime: "17:00", color: "#4285DA", location: "LS" },
  { id: "44", text: "Juniors", day: "Friday", startTime: "17:00", endTime: "18:00", color: "#4285DA", location: "TH" },
  { id: "45", text: "Juniors", day: "Friday", startTime: "18:00", endTime: "19:00", color: "#4285DA", location: "LS" },
  { id: "46", text: "Aikuiset", day: "Friday", startTime: "19:00", endTime: "20:00", color: "#4285DA", location: "TH" },
];

interface CourseCalendarProps {
  locations: string[];
}

const locationMap: Record<string, string[]> = {
  Kerava: ["Kerava 1", "Kerava 2"],
  "Järvenpää": ["Best", "TH", "LS"],
  Kaikki: [],
};

const CourseCalendar = ({ locations }: CourseCalendarProps): JSX.Element => {
  const [events, setEvents] = useState<EventInput[]>([]);

  useEffect(() => {
    const monday = getMonday(new Date());

    let filteredEvents: RawEvent[];

    if (locations.includes("Kaikki")) {
      filteredEvents = rawEvents;
    } else {
      const places = locations.flatMap(loc => locationMap[loc]);
      filteredEvents = rawEvents.filter(ev => places.includes(ev.location));
    }

    setEvents(mapEvents(filteredEvents, monday));
  }, [locations]);

  return (
    <CalendarStyles>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        slotMinTime="10:00:00"
        slotMaxTime="21:00:00"
        slotDuration="00:30:00"
        allDaySlot={false}
        firstDay={1}
        hiddenDays={[0, 6]}
        events={events}
        dayHeaderFormat={{ weekday: "long" }}
        headerToolbar={false}
        slotLabelFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
        eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
        eventContent={renderEventContent}
      />
    </CalendarStyles>
  );
};

export default CourseCalendar;
