import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { ageMap, dayMap, LocationKeys, locationMap, RawEvent, rawEvents } from "../utils/coursesInfo";

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

const CourseCalendar = (): JSX.Element => {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [selectedLoc, setSelectedLoc] = useState<LocationKeys>("Molemmat");
  const [selectedAge, setSelectedAge] = useState<string>("Molemmat");

  useEffect(() => {
    const monday = getMonday(new Date());

    const locationFiltered =
      selectedLoc === "Molemmat"
        ? rawEvents
        : rawEvents.filter(ev => locationMap[selectedLoc].includes(ev.location));

    const ageFiltered =
      selectedAge === "Molemmat"
        ? locationFiltered
        : locationFiltered.filter(ev => ageMap[selectedAge].includes(ev.text));

    setEvents(mapEvents(ageFiltered, monday));
  }, [selectedLoc, selectedAge]);

  return (
    <div className="flex gap-x-8 gap-y-6 w-full">
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
      <div className="flex flex-col gap-7 items-start">
        {/* Location filtering */}
        <div className="flex flex-col gap-2 items-start">
          <p className="subtitle font-text mb-1">Sijainti:</p>
          {Object.keys(locationMap).map((loc) => {
            const key = loc as LocationKeys;
            return (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="location"
                  checked={selectedLoc === key}
                  onChange={() => setSelectedLoc(key)}
                />
                <span>{key}</span>
              </label>
            );
          })}
        </div>
        {/* Age filtering */}
        <div className="flex flex-col gap-2 items-start">
          <p className="subtitle font-text mb-1">Ikäryhmä:</p>
          {Object.keys(ageMap).map((key) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="age"
                checked={selectedAge === key}
                onChange={() => setSelectedAge(key)}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCalendar;
