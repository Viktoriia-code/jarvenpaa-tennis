import SectionTitle from "../SectionTitle";
import '../../index.css';
//import { useTranslation } from "react-i18next";
import CourseCalendar from "../CourseCalendar";
import { useState } from "react";

const Schedule: React.FC = () => {
  //const { t } = useTranslation();

  const [selected, setSelected] = useState({
    Kerava: true,
    Järvenpää: true,
  });

  const toggle = (loc) => {
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
            {Object.keys(selected).map((loc) => (
              <label key={loc} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected[loc]}
                  onChange={() => toggle(loc)}
                />
                <span>{loc}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule