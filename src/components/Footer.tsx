import styled from 'styled-components';
import noiseBg from '/images/ui/noise_transparent.png';
import { NavLink } from 'react-router-dom';
import { MenuLink, MenuLinks } from '../utils/menuInfo';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const FooterStyles = styled.section`
  background: url(${noiseBg}) repeat, linear-gradient(343deg, #0562A5 0%, #0F85DA 100%);
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  .container {
    padding-top: 30px;
    margin-bottom: 30px;
  }

  .top-block {
    content: '';
    position: relative;
  }

  .tag-link {
    text-decoration: none;
    color: #FFFFFF;
    transition: all .3s ease-in-out;
  }
  .tag-link:hover {
    color: #FF861E;
    transition: all .3s ease-in-out;
  }
  .tag-item {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
`;

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <FooterStyles>
      <div className="container">
        <div className='flex justify-between items-start mb-6 flex-col md:flex-row gap-6'>
          <div className='flex flex-col gap-8'>
            <Logo light />
            <div className='flex gap-5'>
              <a
                className="group"
                href="https://www.instagram.com/jarvenpaantennisseura" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
              >
                <svg 
                  viewBox="0 0 35 35" 
                  xmlns="http://www.w3.org/2000/svg"
                  className='w-9 fill-white group-hover:fill-accent transition-all duration-300 ease-in-out'
                >
                  <path d="M17.5 0C12.7509 0 12.1538 0.021875 10.2878 0.105C8.42188 0.1925 7.15094 0.485625 6.0375 0.91875C4.86958 1.35804 3.8117 2.04712 2.93781 2.93781C2.04767 3.81215 1.35867 4.8699 0.91875 6.0375C0.485625 7.14875 0.190313 8.42187 0.105 10.2812C0.021875 12.1516 0 12.7466 0 17.5022C0 22.2534 0.021875 22.8484 0.105 24.7144C0.1925 26.5781 0.485625 27.8491 0.91875 28.9625C1.36719 30.1131 1.96438 31.0887 2.93781 32.0622C3.90906 33.0356 4.88469 33.635 6.03531 34.0812C7.15094 34.5144 8.41969 34.8097 10.2834 34.895C12.1516 34.9781 12.7466 35 17.5 35C22.2534 35 22.8463 34.9781 24.7144 34.895C26.5759 34.8075 27.8513 34.5144 28.9647 34.0812C30.1319 33.6417 31.189 32.9527 32.0622 32.0622C33.0356 31.0887 33.6328 30.1131 34.0812 28.9625C34.5122 27.8491 34.8075 26.5781 34.895 24.7144C34.9781 22.8484 35 22.2534 35 17.5C35 12.7466 34.9781 12.1516 34.895 10.2834C34.8075 8.42188 34.5122 7.14875 34.0812 6.0375C33.6414 4.86987 32.9524 3.8121 32.0622 2.93781C31.1886 2.04679 30.1306 1.35766 28.9625 0.91875C27.8469 0.485625 26.5737 0.190313 24.7122 0.105C22.8441 0.021875 22.2513 0 17.4956 0H17.5022H17.5ZM15.9316 3.15438H17.5022C22.1747 3.15438 22.7281 3.16969 24.5722 3.255C26.2784 3.33156 27.2059 3.61813 27.8228 3.85656C28.6387 4.17375 29.2228 4.55437 29.8353 5.16687C30.4478 5.77937 30.8263 6.36125 31.1434 7.17938C31.3841 7.79406 31.6684 8.72156 31.745 10.4278C31.8303 12.2719 31.8478 12.8253 31.8478 17.4956C31.8478 22.1659 31.8303 22.7216 31.745 24.5656C31.6684 26.2719 31.3819 27.1972 31.1434 27.8141C30.8629 28.5739 30.4151 29.261 29.8331 29.8244C29.2206 30.4369 28.6388 30.8153 27.8206 31.1325C27.2081 31.3731 26.2806 31.6575 24.5722 31.7363C22.7281 31.8194 22.1747 31.8391 17.5022 31.8391C12.8297 31.8391 12.2741 31.8194 10.43 31.7363C8.72375 31.6575 7.79844 31.3731 7.18156 31.1325C6.4214 30.8523 5.73371 30.4053 5.16906 29.8244C4.58664 29.2601 4.13814 28.5724 3.85656 27.8119C3.61813 27.1972 3.33156 26.2697 3.255 24.5634C3.17188 22.7194 3.15438 22.1659 3.15438 17.4912C3.15438 12.8187 3.17188 12.2675 3.255 10.4234C3.33375 8.71719 3.61813 7.78969 3.85875 7.17281C4.17594 6.35688 4.55656 5.77281 5.16906 5.16031C5.78156 4.54781 6.36344 4.16938 7.18156 3.85219C7.79844 3.61156 8.72375 3.32719 10.43 3.24844C12.0444 3.17406 12.67 3.15219 15.9316 3.15V3.15438ZM26.8428 6.05937C26.567 6.05937 26.294 6.11369 26.0392 6.21923C25.7844 6.32476 25.5529 6.47945 25.3579 6.67445C25.1629 6.86945 25.0082 7.10096 24.9027 7.35574C24.7971 7.61052 24.7428 7.8836 24.7428 8.15938C24.7428 8.43515 24.7971 8.70823 24.9027 8.96301C25.0082 9.21779 25.1629 9.4493 25.3579 9.6443C25.5529 9.8393 25.7844 9.99399 26.0392 10.0995C26.294 10.2051 26.567 10.2594 26.8428 10.2594C27.3998 10.2594 27.9339 10.0381 28.3277 9.6443C28.7216 9.25047 28.9428 8.71633 28.9428 8.15938C28.9428 7.60242 28.7216 7.06828 28.3277 6.67445C27.9339 6.28062 27.3998 6.05937 26.8428 6.05937ZM17.5022 8.51375C16.3102 8.49515 15.1263 8.71387 14.0196 9.15718C12.9129 9.60049 11.9055 10.2595 11.056 11.0959C10.2064 11.9323 9.53173 12.9294 9.07121 14.029C8.6107 15.1286 8.37353 16.3089 8.37353 17.5011C8.37353 18.6933 8.6107 19.8735 9.07121 20.9732C9.53173 22.0728 10.2064 23.0699 11.056 23.9063C11.9055 24.7427 12.9129 25.4017 14.0196 25.845C15.1263 26.2883 16.3102 26.507 17.5022 26.4884C19.8615 26.4516 22.1117 25.4886 23.7671 23.8071C25.4226 22.1257 26.3504 19.8607 26.3504 17.5011C26.3504 15.1415 25.4226 12.8765 23.7671 11.1951C22.1117 9.51363 19.8615 8.55056 17.5022 8.51375ZM17.5022 11.6659C19.0495 11.6659 20.5334 12.2806 21.6275 13.3747C22.7216 14.4688 23.3363 15.9527 23.3363 17.5C23.3363 19.0473 22.7216 20.5312 21.6275 21.6253C20.5334 22.7194 19.0495 23.3341 17.5022 23.3341C15.9549 23.3341 14.471 22.7194 13.3769 21.6253C12.2828 20.5312 11.6681 19.0473 11.6681 17.5C11.6681 15.9527 12.2828 14.4688 13.3769 13.3747C14.471 12.2806 15.9549 11.6659 17.5022 11.6659Z"/>
                </svg>
              </a>
              <a
                className="group"
                href="https://www.facebook.com/JarvenpaanTennisseura/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook"
              >
                <svg
                  viewBox="0 0 35 35" 
                  xmlns="http://www.w3.org/2000/svg"
                  className='w-9 fill-white group-hover:fill-accent transition-all duration-300 ease-in-out'
                >
                  <path d="M31.1111 0H3.88889C1.75 0 0 1.75 0 3.88889V31.1111C0 33.2519 1.75 35 3.88889 35H17.5V21.3889H13.6111V16.5764H17.5V12.5903C17.5 8.3825 19.8567 5.42694 24.8228 5.42694L28.3286 5.43083V10.4961H26.0011C24.0683 10.4961 23.3333 11.9467 23.3333 13.2922V16.5783H28.3267L27.2222 21.3889H23.3333V35H31.1111C33.25 35 35 33.2519 35 31.1111V3.88889C35 1.75 33.25 0 31.1111 0Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className='flex gap-16'>
            <div className='flex flex-col'>
              <h3 className='subtitle mb-2 text-white'>{t('footer.contactTitle')}</h3>
              {MenuLinks.filter((link: MenuLink) => link.group === 'Yleiset tiedot').map((link: MenuLink) => {
                const title = i18n.language === 'fi' ? link.title_fi : link.title_en;
                return (
                  <NavLink 
                    key={link.id}
                    to={link.url}
                    className='tag-link'
                  >
                    <span className='tag-item'>{title}</span>
                  </NavLink>
                )
              })}
            </div>
            <div className='flex flex-col'>
              <h3 className='subtitle mb-2 text-white'>{t('footer.programsTitle')}</h3>
              {MenuLinks.filter((link: MenuLink) => link.group === 'Ohjelmat').map((link: MenuLink) => {
                const title = i18n.language === 'fi' ? link.title_fi : link.title_en;
                return (
                  <NavLink 
                    key={link.id}
                    to={link.url}
                    className='tag-link'
                  >
                    <span className='tag-item'>{title}</span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
        <p className='text-white text-center text-sm'>© Järvenpään Tennisseura, 2025</p>
      </div>
    </FooterStyles>
  )
}

export default Footer;