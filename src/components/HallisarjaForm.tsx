import '../index.css';
import { useState } from 'react';

const HallisarjaForm = () => {
  interface FormState {
    name: string;
    level: string;
    email: string;
    phone: string;
    address: string;
    group: string[];
  }
  // State object to manage all form inputs
  const [formData, setFormData] = useState<FormState>({
    name: '',
    level: '',
    email: '',
    phone: '',
    address: '',
    group: [],
  });

  // Generic handler for all input changes
  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    if (type === 'checkbox' && name === 'group' && target instanceof HTMLInputElement) {
      setFormData((prevData) => ({
        ...prevData,
        group: target.checked
          ? [...prevData.group, value]
          : prevData.group.filter((item) => item !== value)
      }));
    } else if (type === 'checkbox' && name === 'termsAccepted' && target instanceof HTMLInputElement) {
      setFormData((prevData) => ({ ...prevData, termsAccepted: value }));
    } else if (type === 'radio' && name === 'paymentPlan' && target instanceof HTMLInputElement) {
      setFormData((prevData) => ({ ...prevData, paymentPlan: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Form Data:', formData);
    // Process form data (e.g., send it to a server)
  };

  return (
    <section className='bg-grayBg flex flex-col py-8 px-9 max-w-[800px]'>
      <h2 className='text-darkBlue mb-4 text-center'>Hallisarjan lomake</h2>
      <span className='flex justify-end w-full'>*Vaaditaan</span>
      <form className='w-full flex flex-col gap-6 font-text text-lg leading-relaxed' onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col">Osallistujan nimi *
          <input id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Anna nimi"
            className="form_input" />
        </label>

        <label htmlFor="level" className="flex flex-col">Osallistujan taso *
          <input id="level"
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            placeholder="Anna tasosi"
            className="form_input" />
        </label>

        <label htmlFor="email" className="flex flex-col">Sähköpostiosoite *
          <input id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Anna sähköpostiosoite"
            className="form_input" />
        </label>

        <label htmlFor="phone" className="flex flex-col">Puhelinnumero *
          <input id="phone"
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Anna puhelinnumerosi"
            className="form_input" />
        </label>

        <label htmlFor="address" className="flex flex-col">Osoite, postinumero ja kaupunki *
          <input id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Anna osoite, postinumero ja kaupunki"
            className="form_input" />
        </label>

        <fieldset>
          <legend className="mb-2">Voitko pelata</legend>
          <div className="flex flex-col gap-3 ml-4">
            <label className="select-none">
              <input
                type="checkbox"
                name="option-1"
                className="checkbox_input"
                checked={formData.group.includes('option-1')}
                onChange={handleChange}
              />
              tiistaisin klo 18-19
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-2"
                className="checkbox_input"
                checked={formData.group.includes('option-2')}
                onChange={handleChange}
              />
              tiistaisin klo 20-21
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-3"
                className="checkbox_input"
                checked={formData.group.includes('option-3')}
                onChange={handleChange}
              />
              torstaisin klo 17-18
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-4"
                className="checkbox_input"
                checked={formData.group.includes('option-4')}
                onChange={handleChange}
              />
              lauantaisin klo 10-12
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-5"
                className="checkbox_input"
                checked={formData.group.includes('option-4')}
                onChange={handleChange}
              />
              sunnuntaisin klo 15-16
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-6"
                className="checkbox_input"
                checked={formData.group.includes('option-4')}
                onChange={handleChange}
              />
              sunnuntaisin klo 18-20
            </label>
          </div>
        </fieldset>

        <button className='main-btn mx-auto'>Lähetä lomake</button>
      </form>
    </section>
  )
}

export default HallisarjaForm;