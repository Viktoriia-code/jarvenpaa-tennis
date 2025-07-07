import TennisPlay from '/images/pageBanners/tennis_play.jpg';
import '../index.css';
import PageTitle from '@/components/PageTitle';

const Yksityistunnit = () => {
  return (
    <>
      <PageTitle title='Yksityistunnit' image={TennisPlay} />
      <section>
        <div className="container px-12">
          <p>Voit varata yksityistunnin Matilta puhelimitse (050-3052120) tai sähköpostilla matti(at)jarvenpaantennisseura.fi. Yhden yksityistunnin hinta on seuran jäsenelle 75€ ja muille 80€. Yksityistunnille voi osallistua myös 2-4 henkilöä, jolloin hinta on yhteensä 90€ seuran jäsenille ja 100€ ei-jäsenille. Tuntien ohjauksesta vastaavat seuran valmentajat Matti Käpylä, Samuli Kohtamäki ja Stefan Aalto-Setälä. Hinta sisältää opetuksen, kenttävuokran, pallot ja tarvittaessa mailavuokran.</p>
        </div>
      </section>
    </>
  )
}

export default Yksityistunnit