import HeroServiceCard from '../../components/HeroServiceCard'

const Juniorvalmennus = () => {
  return (
    <>
      <h3 className='section-title'>Juniorivalmennus sisäkausi 2024-2025</h3>
      <div className='mx-auto'>
        <HeroServiceCard url="https://docs.google.com/spreadsheets/d/1YHNQtAfKdeQ8s5jbRpbnfQgRCzcrtHQ0g2xFz7wy078/edit?pli=1&gid=0#gid=0" title='Sisäkauden 2024-2025 ryhmäjaot' subtitle='Harjoitukset alkavat maanantaina 12.8.' />
      </div>
      <div className='bg-grayBg text-lg font-medium py-7 px-9 flex flex-col gap-3 border-l-4 border-black'>
        <p className='font-semibold'>Harjoitukset alkavat Järvenpäässä ja Keravalla maanantaina 12.8. ja loppuvat sunnuntaina 22.6.2025!</p>
        <h3 className='subtitle mb-2 font-text'>MINITENNIS (PIKKUISET) 4-5 -VUOTIAILLE</h3>
      </div>
    </>
  )
}

export default Juniorvalmennus