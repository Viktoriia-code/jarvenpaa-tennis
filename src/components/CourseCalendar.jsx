import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";

const CalendarStyles = styled.div`
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 300 !important;
  border: 1px solid #C0C0C0 !important;
  height: 100% !important;
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
    height: 30px !important;
    min-height: 30px !important;
    max-height: 30px !important;
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
  }
`

const dayMap = {
  Sunday: 0, 
  Monday: 1, 
  Tuesday: 2, 
  Wednesday: 3,
  Thursday: 4, 
  Friday: 5, 
  Saturday: 6
};

const getMonday = (date) => {
  const d = new Date(date);
  const day = d.getDay() || 7; // воскресенье -> 7
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - day + 1);
  return d;
};

const mapEvents = (rawEvents, monday) => rawEvents.map(({ day, startTime, endTime, text, id, color }) => {
  const date = new Date(monday);
  date.setDate(monday.getDate() + (dayMap[day] - 1));
  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);
  const start = new Date(date); start.setHours(sh, sm);
  const end = new Date(date); end.setHours(eh, em);
  return { id, title: text, start: start.toISOString(), end: end.toISOString(), backgroundColor: color };
});

const rawEvents = [
  { id: "1", text: "Adults", day: "Monday", startTime: "10:00", endTime: "11:00", color: "#DE6C54" },
  { id: "2", text: "Adults", day: "Tuesday", startTime: "11:00", endTime: "12:00", color: "#4285DA" },
  { id: "3", text: "Juniors", day: "Wednesday", startTime: "14:00", endTime: "15:00", color: "#79B160" },
  { id: "4", text: "Juniors", day: "Thursday", startTime: "13:00", endTime: "14:00", color: "#F2C846" },
];

const CourseCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const monday = getMonday(new Date());
    setEvents(mapEvents(rawEvents, monday));
  }, []);

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
      />
    </CalendarStyles>
  );
};

export default CourseCalendar;