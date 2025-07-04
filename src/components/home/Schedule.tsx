import SectionTitle from "../SectionTitle";
import '../../index.css';
import CourseCalendar from "../CourseCalendar";

const Schedule: React.FC = () => {
  return (
    <section className='bg-white'>
      <div className="flex justify-center">
        <SectionTitle title="Aikataulu" />
      </div>
      <div className="container">
        <h3 className='section_title mb-2'>Kevätkauden 2025 valmennusaikataulu</h3>
        <p className="mt-4 mb-4">Harjoitukset jatkuvat ti 7.1.2025. Sisäkausi loppuu sunnuntaina 22.6.2025.</p>
        <div className="flex gap-x-8 gap-y-6">
          <CourseCalendar />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
