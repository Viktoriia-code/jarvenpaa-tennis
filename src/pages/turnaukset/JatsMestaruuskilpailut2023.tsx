import GalleryComponent from "../../components/GalleryComponent"

const JatsMestaruuskilpailut2023 = () => {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='section-title'>JäTS:n Mestaruuskilpailut 11.-13.8.2023</h3>
      <div className='notice_box'>
        <span>
          <a 
            href="https://docs.google.com/spreadsheets/d/1kjpudjXWAKtOlghdv6Enkum7pqjiPY8NPWIgAD500bA/edit#gid=1129859230"
            className='link'
            target="_blank" 
            rel="noopener noreferrer">
              TULOKSET
          </a>
          {' '}(avautuu uuteen välilehteen)
        </span>
      </div>
      <p>Naisten kaksinpelin finaali: Virpi Kapanen vs. Anna Soininen 6-2, 6-3</p>

      <p>Miesten kaksinpelin finaali: Sampo Haapaniemi vs. Lauri Markelin 6-4, 6-0</p>

      <p>Junioreiden finaali: Noel Pentinmikko vs. Antti Lotsari 6-2, 6-2</p>

      <p>Sekanelinpelin finaali: Tomi Salmenpää/Heini Sarpakunnas vs. Martti Pennanen/Raija Komu 1-6, 6-3, 10-5</p>

      <h3 className='subtitle mb-2 font-text'>Onnittelut voittajille ja kiitos kaikille osallistuneille!</h3>

      <GalleryComponent />

    </section>
  )
}

export default JatsMestaruuskilpailut2023