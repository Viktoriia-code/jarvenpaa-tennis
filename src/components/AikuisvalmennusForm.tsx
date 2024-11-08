import '../index.css';
import { useState } from 'react';

const AikuisvalmennusForm = () => {
  interface FormState {
    name: string;
    address: string;
    email: string;
    phone: string;
    year: string;
    continueWithSameGroup: string;
    paymentPlan: string;
    place: string;
    prevExperience: string;
    hoursAmount: string;
    gameGoal: string;
    preferences: string[]; // replace `never[]` if this was unintentional
    timePreferences: string[]; // replace `never[]` if this was unintentional
    additionalInfo: string;
    termsAccepted: boolean;
  }
  // State object to manage all form inputs
  const [formData, setFormData] = useState<FormState>({
    name: '',
    address: '',
    email: '',
    phone: '',
    year: '',
    continueWithSameGroup: '',
    paymentPlan: '',
    place: '',
    prevExperience: '',
    hoursAmount: '',
    gameGoal: '',
    preferences: [],
    timePreferences: [],
    additionalInfo: '',
    termsAccepted: false
  });

  // Generic handler for all input changes
  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    if (type === 'checkbox' && name === 'preferences' && target instanceof HTMLInputElement) {
      setFormData((prevData) => ({
        ...prevData,
        preferences: target.checked
          ? [...prevData.preferences, value]
          : prevData.preferences.filter((item) => item !== value)
      }));
    } else if (type === 'checkbox' && name === 'termsAccepted' && target instanceof HTMLInputElement) {
      setFormData((prevData) => ({ ...prevData, termsAccepted: target.checked }));
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
      <h3 className='section-title mb-4 text-center'>Aikuisvalmennuslomake</h3>
      <span className='flex justify-end'>*Vaaditaan</span>
      <form className='w-full flex flex-col gap-6 font-text text-lg leading-relaxed' onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col">Nimi *
          <input id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Anna nimesi"
            className="form_input" />
        </label>
        <label htmlFor="address" className="flex flex-col">Osoite, postinumero ja kaupunki *
          <input id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Anna osoitteesi"
            className="form_input" />
        </label>
        <label htmlFor="email" className="flex flex-col">Sähköposti (mm. laskutusta varten ja yhteydenpitoa varten) *
          <input id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Anna sähköpostiosoitteesi"
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

        <label htmlFor="year" className="flex flex-col">Syntymäaika (Tennisliiton rekisteriä varten)
          <input id="year"
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Anna syntymävuosi"
            className="form_input" />
        </label>

        <fieldset>
          <legend>Haluaisin jatkaa samassa ryhmässä kuin viime kaudella (voit jättää alempana olevia kohtia väliin, jos vastasit "Kyllä"):</legend>
          <select 
            value={formData.continueWithSameGroup}
            onChange={handleChange}
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="yes">Kyllä</option>
            <option value="no">Ei</option>
            <option value="new">Olen uusi pelaaja</option>
            <option value="indifferent">Ei väliä</option>
          </select>
        </fieldset>

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

        <fieldset>
          <legend>Missä haluaisit osallistua harjoituksiin?</legend>
          <select 
            value={formData.place}
            onChange={handleChange} 
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="Jarvenpaa">Järvenpäässä</option>
            <option value="Kerava">Keravalla</option>
            <option value="Both">Kumpikin on ok</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Aiempi pelikokemus</legend>
          <select 
            value={formData.prevExperience}
            onChange={handleChange} 
            className='form_input w-full text-lg'
          >
            <option value="">Vatitse...</option>
            <option value="No experience">Ei aiempaa kokemusta</option>
            <option value="Beginner">Aloittelija (alle vuosi)</option>
            <option value="Amateur">Harrastaja</option>
            <option value="Competitive">Aktiivipelaaja</option>
          </select>
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
          </select>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Haluan (voit valita useita vaihtoehtoja)</legend>
          <div className="flex flex-col gap-3 ml-4">
            <label className="select-none">
              <input
                type="checkbox"
                name="option-1"
                className="checkbox_input"
                checked={formData.preferences.includes('option-1')}
                onChange={handleChange}
              />
              Yksityistunteja (1 pelaaja ja valmentaja, arkisin klo 7-16 ja lauantaisin)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-2"
                className="checkbox_input"
                checked={formData.preferences.includes('option-2')}
                onChange={handleChange}
              />
              Paritunteja (2 pelaajaa ja valmentaja, arkisin klo 7-16 ja lauantaisin)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-3"
                className="checkbox_input"
                checked={formData.preferences.includes('option-3')}
                onChange={handleChange}
              />
              Ryhmäopetusta (3 henkeä)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-4"
                className="checkbox_input"
                checked={formData.preferences.includes('option-4')}
                onChange={handleChange}
              />
              Ryhmäopetusta (4 henkeä)
            </label>
            <label className="select-none">
              <input
                type="checkbox"
                name="option-5"
                className="checkbox_input"
                checked={formData.preferences.includes('option-5')}
                onChange={handleChange}
              />
              Ryhmäopetusta max. 6 henkeä (aloitteleville pelaajille)
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Harjoitusaikatoive (valitse kaikki sinulle sopivat, tarkenna lisätietokenttään tarvittaessa):</legend>
          <div className="flex flex-col gap-3 ml-4">
            <label className="select-none">
              <input
                type="checkbox" 
                name="MaPaiva_10_13" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("MaPaiva_10_13")}
                onChange={handleChange}
              />
              Ma päivä klo 10.00-13.00
            </label>
            <label className="select-none">
              <input 
                type="checkbox" 
                name="MaIlta_15_22" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("MaIlta_15_22")}
                onChange={handleChange}
              />
              Ma ilta klo 15.00-22.00
            </label>
            <label className="select-none">
              <input 
                type="checkbox" 
                name="TiAamu_7_10" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("TiAamu_7_10")}
                onChange={handleChange}
              />
              Ti aamu klo 7.00-10.00
            </label>
            <label className="select-none">
              <input 
                type="checkbox" 
                name="TiPaiva_10_13" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("TiPaiva_10_13")}
                onChange={handleChange}
              />
              Ti päivä klo 10.00-13.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="TiIlta_15_22" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("TiIlta_15_22")}
                onChange={handleChange}
              />
              Ti ilta klo 15.00-22.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="KeAamu_7_10" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("KeAamu_7_10")}
                onChange={handleChange}
              />
              Ke aamu klo 7.00-10.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="KePaiva_10_13" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("KePaiva_10_13")}
                onChange={handleChange}
              />
              Ke päivä klo 10.00-13.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="KeIlta_15_22" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("KeIlta_15_22")}
                onChange={handleChange}
              />
              Ke ilta klo 15.00-22.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="ToAamu_7_10" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("ToAamu_7_10")}
                onChange={handleChange}
              />
              To aamu klo 7.00-10.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="ToPaiva_10_13" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("ToPaiva_10_13")}
                onChange={handleChange}
              />
              To päivä klo 10.00-13.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="ToIlta_15_22" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("ToIlta_15_22")}
                onChange={handleChange}
              />
              To ilta klo 15.00-22.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="PeAamu_7_10" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("PeAamu_7_10")}
                onChange={handleChange}
              />
              Pe aamu klo 7.00-10.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="PePaiva_10_13" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("PePaiva_10_13")}
                onChange={handleChange}
              />
              Pe päivä klo 10.00-13.00
            </label>
            <label className="select-none">
              <input
                type="checkbox" 
                name="PeIlta_15_21" 
                className="checkbox_input"
                checked={formData.timePreferences.includes("PeIlta_15_21")}
                onChange={handleChange}
              />
              Pe ilta klo 15.00-21.00
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2">Päätoiveeni valmennukselle</legend>
          <select 
            value={formData.gameGoal}
            onChange={handleChange}
            className='form_input w-full'
          >
            <option value="">Vatitse...</option>
            <option value="1">Paljon liikkumista ja sykettä kohottavia harjoituksia</option>
            <option value="2">Paljon pelaamista ja pelitaktiikkaa</option>
            <option value="3">Lyöntitekniikan opettelua</option>
            <option value="4">Kaikkia yllä olevia tasaisesti</option>
          </select>
        </fieldset>

        <label>
          Lisätietoja ja muita toiveita (voit tarkentaa ylläolevia kohtia)
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
          <legend>Ilmoittautumalla valmennukseen hyväksyt valmennusehdot (tarkemmat tiedot "Viikoittainen valmennus" -valikon alta)</legend>
          <div className='flex items-center gap-3 ml-4'>
            <input 
              type="checkbox" 
              name="option-1" 
              className="checkbox_input"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className='select-none'>Hyväksyn valmennusehdot *</label>
          </div>
        </fieldset>

        <button className='main-btn mx-auto'>Lähetä lomake</button>
      </form>
    </section>
  )
}

export default AikuisvalmennusForm