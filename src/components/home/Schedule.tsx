import SectionTitle from "../SectionTitle";
import '../../index.css';
import CourseCalendar from "../CourseCalendar";
import { useState } from "react";

type LocationKeys = "Kerava" | "Järvenpää";

const Schedule: React.FC = () => {
  const [selected, setSelected] = useState<Record<LocationKeys, boolean>>({
    Kerava: true,
    Järvenpää: true,
  });

  const toggle = (loc: LocationKeys) => {
    setSelected((prev) => ({ ...prev, [loc]: !prev[loc] }));
  };

  return (
    <section className='bg-white'>
      <div className="flex justify-center">
        <SectionTitle title="Aikataulu" />
      </div>
      <div className="container">
        <div className="flex gap-x-8 gap-y-6 ">
          <CourseCalendar />
          <div className="flex flex-col gap-4 items-start">
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
