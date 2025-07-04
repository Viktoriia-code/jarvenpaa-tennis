import SectionTitle from "../SectionTitle";
import '../../index.css';
import CourseCalendar from "../CourseCalendar";
import { useState } from "react";

type LocationKeys = "Kerava" | "Järvenpää";

const Schedule: React.FC = () => {
  const [selected, setSelected] = useState<Record<LocationKeys, boolean>>({
    Kerava: true,
    "Järvenpää": true,
  });

  const toggle = (loc: LocationKeys) => {
    setSelected((prev) => {
      const other = loc === "Kerava" ? "Järvenpää" : "Kerava";
      const newValue = !prev[loc];

      // If both locations are deselected, keep at least one selected
      if (!newValue && !prev[other]) {
        return prev;
      }

      return { ...prev, [loc]: newValue };
    });
  };

  const selectedLocations = Object.entries(selected)
    .filter(([, isSelected]) => isSelected)
    .map(([loc]) => loc as LocationKeys);

  return (
    <section className='bg-white'>
      <div className="flex justify-center">
        <SectionTitle title="Aikataulu" />
      </div>
      <div className="container">
        <h3 className='section_title mb-2'>Kevätkauden 2025 valmennusaikataulu</h3>
        <p className="mt-4 mb-4">Harjoitukset jatkuvat ti 7.1.2025. Sisäkausi loppuu sunnuntaina 22.6.2025.</p>
        <div className="flex gap-x-8 gap-y-6 ">
          <CourseCalendar locations={selectedLocations} />
          <div className="flex flex-col gap-3 items-start">
            <p className="subtitle font-text">Sijainnit:</p>
            {Object.keys(selected).map((loc) => {
              const key = loc as LocationKeys;
              return (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selected[key]}
                    onChange={() => toggle(key)}
                  />
                  <span>{key}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
