//React
import React from 'react';
//Components
import Button from '../Button/Button';
//Styles
import styles from './Footer.module.scss';
//Images
import iconFacebook from '../../Assests/iconFacebook.png';
import iconInstagram from '../../Assests/iconInstagram.png';
import iconYoutube from '../../Assests/iconYoutube.png';
import iconVisa from '../../Assests/iconVisa.png';
import iconElo from '../../Assests/iconElo.png';
import iconAlelo from '../../Assests/iconAlelo.png';
import iconDinnersClub from '../../Assests/iconDinnersClub.png';
import iconIfood from '../../Assests/iconIfood.png';
import iconMastercard from '../../Assests/iconMastercard.png';
import iconPix from '../../Assests/iconPix.png';
import iconAmex from '../../Assests/iconAmex.png';
import iconTicket from '../../Assests/iconTicket.png';
import iconSodexo from '../../Assests/iconSodexo.png';
import LogoVtex from '../../Assests/LogoVtex';
import LogoEconverse from '../../Assests/LogoEconverse';

function Footer() {
  return (
    <footer className={styles.containerGeneral}>
      <div className={styles.container}>
        <div className={styles.line1}>
          <div className={styles.columns}>
            <nav className={styles.about}>
              <p>Sobre nós</p>
              <ul className={styles.ulAbout}>
                <li>
                  <a href="/">conheça</a>
                </li>
                <li>
                  <a href="/">como comprar</a>
                </li>
                <li>
                  <a href="/">indicacao e desconto</a>
                </li>
              </ul>
              <div className={styles.social}>
                <a href="/">
                  <img src={iconFacebook} alt="Icon Facebook" />
                </a>
                <a href="/">
                  <img src={iconInstagram} alt="Icon Instagram" />
                </a>
                <a href="/">
                  <img src={iconYoutube} alt="Icon Youtube" />
                </a>
              </div>
            </nav>
            <nav className={styles.infos}>
              <p>informaçoes úteis</p>
              <ul className={styles.ulinfos}>
                <li>
                  <a href="/">fale conosco</a>
                </li>
                <li>
                  <a href="/">dúvidas</a>
                </li>
                <li>
                  <a href="/">prazos de entrega</a>
                </li>
                <li>
                  <a href="/">formas de pagamento</a>
                </li>
                <li>
                  <a href="/">política de privacidade</a>
                </li>
                <li>
                  <a href="/">trocas e devoluções</a>
                </li>
              </ul>
            </nav>
            <div className={styles.payments}>
              <p>formas de pagamento</p>
              <ul className={styles.ulPayments}>
                <li>
                  <img src={iconVisa} alt="Icon Visa" />
                  <img src={iconElo} alt="Icon Elo" />
                  <img src={iconAlelo} alt="Icon Alelo" />
                </li>
                <li>
                  <img src={iconDinnersClub} alt="Icon Dinners Club" />
                  <img src={iconIfood} alt="Icon Ifood" />
                  <img src={iconMastercard} alt="Icon Mastercard" />
                </li>
                <li>
                  <img src={iconPix} alt="Icon Pix" />
                  <img src={iconAmex} alt="Icon Amex" />
                  <img src={iconTicket} alt="Icon Ticket" />
                </li>
                <li>
                  <img src={iconSodexo} alt="Icon Sodexo" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.title}>
              <p>cadastre-se e receba nossas</p>{' '}
              <span>novidades e promoções</span>
            </div>
            <div className={styles.text}>
              <span>
                Excepteur sint occaecat cudatat non ent, sunt in culpa qui
                officia lorem ipsum
              </span>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="SEU E-MAIL" id="newsletter" />
              <Button text="ok" />
            </div>
          </div>
        </div>
        <div className={styles.line2}>
          <div className={styles.text}>
            <p>
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e
              suas imagens são de propriedade de seus respectivos donos. É
              vedada a reprodução, total ou parcial, de qualquer conteúdo sem
              expressa autorização.
            </p>
          </div>
          <div className={styles.brands}>
            {' '}
            <LogoEconverse />
            <LogoVtex />{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
