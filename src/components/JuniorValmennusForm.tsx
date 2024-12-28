import '../index.css';
import { useState } from 'react';

const JuniorValmennusForm = () => {
  interface FormState {
    name: string;
    year: string;
    guardianName: string;
    guardianEmail: string;
    guardianPhone: string;
    address: string;
    group: string[]; // replace `never[]` if this was unintentional
    prevExperience: string;
    competition: string;
    hoursAmount: string;
    place: string;
    weekdayTrainingPreference: string;
    unavailableDays: string;
    school: string;
    paymentPlan: string;
    additionalInfo: string;
    photoPermission: string;
    termsAccepted: string;
  }
  // State object to manage all form inputs
  const [formData, setFormData] = useState<FormState>({
    name: '',
    year: '',
    guardianName: '',
    guardianEmail: '',
    guardianPhone: '',
    address: '',
    group: [],
    prevExperience: '',
    competition: '',
    hoursAmount: '',
    place: '',
    weekdayTrainingPreference: '',
    unavailableDays: '',
    school: '',
    paymentPlan: '',
    additionalInfo: '',
    photoPermission: '',
    termsAccepted: ''
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
      <h2 className='text-darkBlue mb-4 text-center'>ILMOITTAUDU SISÄKAUDEN 2024-2025 JUNIORIVALMENNUKSEEN!</h2>
      <span className='flex justify-end w-full'>*Vaaditaan</span>
      <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col">Juniorin nimi *
          <input id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Anna juniorin nimi"
            className="form_input" />
        </label>

        <label htmlFor="year" className="flex flex-col">Juniorin syntymäaika *
          <input id="year"
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Anna juniorin syntymävuosi"
            className="form_input" />
        </label>

        <label htmlFor="guardianName" className="flex flex-col">Huoltajan nimi *
          <input id="guardianName"
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            placeholder="Anna huoltajan nimi"
            className="form_input" />
        </label>

        <label htmlFor="guardianEmail" className="flex flex-col">Huoltajan sähköposti (mm. laskutusta varten) *
          <input id="guardianEmail"
            type="email"
            name="guardianEmail"
            value={formData.guardianEmail}
            onChange={handleChange}
            placeholder="Anna huoltajan sähköpostiosoite"
            className="form_input" />
        </label>

        <label htmlFor="guardianPhone" className="flex flex-col">Puhelinnumero *
          <input id="guardianPhone"
            type="phone"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            placeholder="Anna huoltajan puhelinnumero"
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
          <legend className="mb-2">Mihin ryhmään lapsi osallistuu?</legend>
          <div className="flex flex-col gap-3 ml-4">
            <label className="select-none">
              <input
                type="checkbox"
                name="option-1"
                className="checkbox_input"
                checked={formData.group.includes('option-1')}
                onChange={handleChange}
              />
              Minitennis pikkuiset (4-5 -vuotiaat)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-2"
                className="checkbox_input"
                checked={formData.group.includes('option-2')}
                onChange={handleChange}
              />
              Minitennis isommat (6-8 -vuotiaat)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-3"
                className="checkbox_input"
                checked={formData.group.includes('option-3')}
                onChange={handleChange}
              />
              Miditennis (9-11 -vuotiaat)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-4"
                className="checkbox_input"
                checked={formData.group.includes('option-4')}
                onChange={handleChange}
              />
              Juniortennis (12-18 -vuotiaat)
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Aiempi pelikokemus *</legend>
          <div className="ml-4 flex flex-col gap-3">
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="prevExperience" // Update the name to match the state
                value="No experience" // Value for the selected option
                className="w-4 h-4 mr-2"
                checked={formData.prevExperience === "No experience"} // Check if selected
                onChange={handleChange} // Handle change
              />
              Ei aiempaa kokemusta
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="prevExperience"
                value="Up to 1 year"
                className="w-4 h-4 mr-2"
                checked={formData.prevExperience === "Up to 1 year"}
                onChange={handleChange}
              />
              1 vuosi tai alle
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="prevExperience"
                value="More than 1 year"
                className="w-4 h-4 mr-2"
                checked={formData.prevExperience === "More than 1 year"}
                onChange={handleChange}
              />
              Yli 1 vuosi
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Oletko kiinnostunut kilpailemisesta (osallistuminen turnauksiin ja sen mukainen harjoittelu)?</legend>
          <div className="ml-4 flex flex-col gap-3">
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="competition" // Update the name to match the state
                value="Yes" // Value for the selected option
                className="w-4 h-4 mr-2"
                checked={formData.competition === "Yes"} // Check if selected
                onChange={handleChange} // Handle change
              />
              Kyllä
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="competition"
                value="No"
                className="w-4 h-4 mr-2"
                checked={formData.competition === "No"}
                onChange={handleChange}
              />
              Ei
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Viikkotuntien määrä</legend>
          <select 
            value={formData.hoursAmount}
            onChange={handleChange}
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Missä haluaisit osallistua harjoituksiin?</legend>
          <select 
            value={formData.place}
            onChange={handleChange} 
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="Jarvenpaa">Järvenpäässä (ma-pe)</option>
            <option value="Kerava">Keravalla (ti ja to)</option>
            <option value="Both">Kumpikin on ok</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Toivon treenejä arkisin ennen klo 15, jos lukujärjestys tämän mahdollistaa</legend>
          <select 
            value={formData.weekdayTrainingPreference}
            onChange={handleChange} 
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="Yes">Kyllä</option>
            <option value="No">Ei</option>
          </select>
        </fieldset>

        <label htmlFor="unavailableDays" className="flex flex-col">
          Estepäivät ja ajat (huom. junioriryhmiä aikataulutetaan arkisin klo 14 alkaen)
          <input 
            id="unavailableDays"
            type="text"
            name="unavailableDays"
            value={formData.unavailableDays}
            onChange={handleChange}
            placeholder="Anna estepäivät ja ajat"
            className="form_input" 
          />
        </label>

        <label htmlFor="school" className="flex flex-col">
          Missä koulussa osallistuja on?
          <input 
            id="school"
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Anna koulun nimi"
            className="form_input" 
          />
        </label>

        <fieldset>
          <legend className="mb-2">
            Monessako erässä haluat maksaa valmennusmaksun? (kts. Valmennusehdot sisäkausi 2023-2024)
          </legend>
          <div className="ml-4 flex flex-col gap-3">
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="paymentPlan" // Update the name to match the state
                value="Kymmenessä erässä" // Value for the selected option
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "Kymmenessä erässä"} // Check if selected
                onChange={handleChange} // Handle change
              />
              Kymmenessä erässä
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="paymentPlan"
                value="Neljässä erässä"
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "Neljässä erässä"}
                onChange={handleChange}
              />
              Neljässä erässä
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="paymentPlan"
                value="Kahdessa erässä"
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "Kahdessa erässä"}
                onChange={handleChange}
              />
              Kahdessa erässä
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="paymentPlan"
                value="Yhdessä erässä"
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "Yhdessä erässä"}
                onChange={handleChange}
              />
              Yhdessä erässä
            </label>
          </div>
        </fieldset>

        <label>
          Lisätietoja
          <textarea 
            name="additional-info" 
            className="border rounded w-full p-2 mt-1" 
            rows={4}
            placeholder="Kerro meille lisätietoja, jos haluat"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </label>

        <fieldset>
          <legend className="mb-2">Valokuvauskielto *</legend>
          <div className="ml-4 flex flex-col gap-3">
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="photoPermission" // Update the name to match the state
                value="Yes" // Value for the selected option
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "Yes"} // Check if selected
                onChange={handleChange} // Handle change
              />
              Annan JäTS:lle luvan julkaista tunneilta otettuja valokuvia, joissa olen mukana.
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                name="photoPermission"
                value="No"
                className="w-4 h-4 mr-2"
                checked={formData.paymentPlan === "No"}
                onChange={handleChange}
              />
              En anna JäTS:lle luvan julkaista tunneilta otettuja valokuvia, joissa olen mukana.
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Ilmoittautumalla valmennukseen hyväksyt valmennusehdot, jotka löytyvät Valmennus-välilehden alta!</legend>
          <div className="ml-4 flex flex-col gap-3">
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                value="true"
                name="termsAccepted"
                className="w-4 h-4 mr-2"
                checked={formData.termsAccepted === "true"}
                onChange={handleChange}
              />
              Hyväksyn valmennusehdot
            </label>
            <label className="flex items-center select-none cursor-pointer">
              <input
                type="radio"
                value="false"
                name="termsAccepted"
                className="w-4 h-4 mr-2"
                checked={formData.termsAccepted === "false"}
                onChange={handleChange}
              />
              En hyväksy valmennusehtoja
            </label>
          </div>
        </fieldset>

        <button className='main-btn mx-auto'>Lähetä lomake</button>
      </form>
    </section>
  )
}

export default JuniorValmennusForm;