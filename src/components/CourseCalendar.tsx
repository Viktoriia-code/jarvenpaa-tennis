import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import fiLocale from '@fullcalendar/core/locales/fi';
import styled from "styled-components";
import { ageMap, dayMap, LocationKeys, locationMap, RawEvent, rawEvents, trainerColorMap, trainerMap, weekdayMap } from "../utils/coursesInfo";
import { ClockIcon, CalendarDaysIcon, MapPinIcon, UserIcon, MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import "@/index.css";

const renderEventContent = (arg: EventContentArg) => {
  const [line1, line2] = arg.event.title.split("\n");
  const timeText = arg.timeText;
  const availableSpots = arg.event.extendedProps?.availableSpots;
  return (
    <div className="leading-tight">
      <span className="whitespace-nowrap text-xs">{timeText}</span>
      <div className="flex items-center gap-1">
        {line1}
        {availableSpots && availableSpots > 0 && (
          <span
            className="block w-[10px] h-[10px] rounded-full bg-lime-300 border border-1 border-darkGray shadow-lg"
            title={`${availableSpots} vapaita paikkaa`}
          />
        )}
      </div>
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
    width: 100% !important;
  }
  .fc {
    max-height: 610px;
  }
  .fc-event {
    cursor: pointer;
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
  return rawEvents.map(({ day, startTime, endTime, text, id, trainer, location, availableSpots }) => {
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
      backgroundColor: trainerColorMap[trainer] || "#CCCCCC",
      extendedProps: {
        availableSpots
      }
    };
  });
};

const CourseCalendar = (): JSX.Element => {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [selectedLoc, setSelectedLoc] = useState<LocationKeys>("Molemmat");
  const [selectedAge, setSelectedAge] = useState<string>("Molemmat");
  const [selectedTrainer, setSelectedTrainer] = useState<Record<string, boolean>>({
    Matti: true,
    Samuli: true,
    Stefan: true,
    Viljami: true,
  });
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const selectedTrainers = Object.entries(selectedTrainer)
    .filter(([, value]) => value)
    .map(([key]) => key);

  useEffect(() => {
    const monday = getMonday(new Date());

    let filtered = rawEvents;

    if (selectedLoc !== "Molemmat") {
      const allowedLocations = locationMap[selectedLoc];
      filtered = filtered.filter(ev => allowedLocations.includes(ev.location));
    }

    if (selectedAge !== "Molemmat") {
      const allowedAges = ageMap[selectedAge];
      filtered = filtered.filter(ev => allowedAges.includes(ev.text));
    }

    filtered = filtered.filter(ev => selectedTrainers.includes(ev.trainer));

    if (onlyAvailable) {
      filtered = filtered.filter(ev => ev.availableSpots && ev.availableSpots > 0);
    }

    setEvents(mapEvents(filtered, monday));
  }, [selectedLoc, selectedAge, selectedTrainers, onlyAvailable]);

  const toggleTrainer = (trainer: string) => {
    setSelectedTrainer(prev => ({
      ...prev,
      [trainer]: !prev[trainer],
    }));
  };

  const handleEventClick = (info: any) => {
    const raw = rawEvents.find(ev => ev.id === info.event.id);
    if (raw) {
      setSelectedEvent({
        title: raw.text,
        location: raw.location,
        day: raw.day,
        startTime: raw.startTime,
        endTime: raw.endTime,
        trainer: raw.trainer,
        availableSpots: raw.availableSpots,
      });
      openDialog();
    }
  };

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.classList.add("no-scroll");
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.classList.remove("no-scroll");
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="flex gap-x-8 gap-y-6 w-full">
      <CalendarStyles>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          locale={fiLocale}
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
          eventClick={handleEventClick}
        />
      </CalendarStyles>
      <div className="flex flex-col gap-7 items-start">
        {/* Location filtering */}
        <div className="flex flex-col gap-2 items-start">
          <p className="font-semibold text-lg">Sijainti:</p>
          {Object.keys(locationMap).map((loc) => {
            const key = loc as LocationKeys;
            return (
              <label key={key} className="flex items-center gap-1 cursor-pointer text-base">
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
          <p className="font-semibold text-lg">Ikäryhmä:</p>
          {Object.keys(ageMap).map((key) => (
            <label key={key} className="flex items-center gap-1 cursor-pointer text-base">
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
        {/* Trainer filtering */}
        <div className="flex flex-col gap-2 items-start">
          <p className="font-semibold text-lg">Valmentaja:</p>
          {Object.keys(trainerMap).map((key) => (
            <label key={key} className="flex items-center gap-1 cursor-pointer text-base">
              <input
                type="checkbox"
                name="trainer"
                checked={selectedTrainer[key]}
                onChange={() => toggleTrainer(key)}
              />
              <span>{key}</span>
              {key !== "Kaikki" && (
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: trainerColorMap[key],
                    border: "1px solid gray",
                    display: "inline-block",
                  }}
                />
              )}
            </label>
          ))}
        </div>
        {/* Available spots filter */}
        <div className="flex gap-1 items-start">
          <input
            type="checkbox"
            id="only-available"
            checked={onlyAvailable}
            onChange={() => setOnlyAvailable(prev => !prev)}
            className="mt-[6px] cursor-pointer"
          />
          <label htmlFor="only-available" className="text-base cursor-pointer select-none">
            Vain kurssit, joilla on vapaita paikkoja
          </label>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeDialog();
          }
        }}
        className="fixed inset-0 m-auto p-7 shadow-lg border bg-white max-w-[400px] w-full"
      >
        {selectedEvent && (
          <div>
            <div className="flex justify-between mb-4 items-start">
              <h2 className="text-2xl font-semibold">{selectedEvent.title}</h2>
              <XMarkIcon
                width={25}
                className="cursor-pointer text-darkGray hover:text-black"
                onClick={closeDialog}
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <ClockIcon width={25} className='text-gray' />
              <strong>Aika:</strong> {selectedEvent.startTime} - {selectedEvent.endTime}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CalendarDaysIcon width={25} className='text-gray' />
              <strong>Viikonpäivä:</strong> {weekdayMap[selectedEvent.day]}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MapPinIcon width={25} className='text-gray' />
              <strong>Sijainti:</strong> {selectedEvent.location}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <UserIcon width={25} className='text-gray' />
              <strong>Valmentaja:</strong> {selectedEvent.trainer}
            </div>
            {selectedEvent.availableSpots !== undefined && (
              <div className="flex items-center gap-2 mb-2">
                <MegaphoneIcon  width={25} className='text-gray' />
                <strong>Vapaita paikkoja:</strong> {selectedEvent.availableSpots}
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <div onClick={closeDialog} className="secondary-btn">
                Sulje
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default CourseCalendar;
