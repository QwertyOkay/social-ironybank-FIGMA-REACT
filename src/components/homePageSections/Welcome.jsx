import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import firstImage from 'images/first.png';
import firstDesk from 'images/firstDesk.png';
import styles from './homePageSections.module.scss';

function Welcome() {
  return (
    <Section id="welcome" className={styles.SectionBg}>
      <Container variant="containerMain">
        <div className={styles.textWrap}>
          <h1 className={styles.title3}>Welcome</h1>
          <p className={styles.text}>
            Embark on an extraordinary gaming journey where state-of-the-art
            visuals, immersive audio, and user-friendly gameplay come together.
            Our slot games offer more than mere entertainment; they seamlessly
            blend visuals and sounds to transport you to a world of pure
            enchantment.
          </p>
          <div className={styles.btn2}>
            <GoogleButton />
          </div>
        </div>

        <div className={styles.imgWrap}>
          <picture>
            <source
              srcSet={firstDesk}
              type="image/png"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={firstImage}
              type="image/png"
              media="(max-width: 1200px)"
            />
            <img src={firstImage} alt="The Game" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Welcome;
