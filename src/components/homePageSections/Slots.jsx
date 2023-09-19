import Section from 'components/section/Section';
import Container from 'components/container/Container';
import secondImage from 'images/second.png';
import secondDesk from 'images/secondDesk.png';
import styles from './homePageSections.module.scss';

function Second() {
  return (
    <Section variant="second" id="slots">
      <Container variant="containerMainSecond" className={styles.BG}>
        <div className={styles.textWrapSecond}>
          <h1 className={styles.title3}>Our slots</h1>
          <p className={styles.text4}>
            Embark on an extraordinary gaming journey where state-of-the-art
            visuals, captivating audio, and user-friendly gameplay converge. Our
            slot games offer more than mere entertainment; they blend visuals
            and sounds to transport you to a world of enchantment.
          </p>
        </div>
        <div className={styles.imgWrapSecond}>
          <picture>
            <source
              srcSet={secondDesk}
              type="image/png"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={secondDesk}
              type="image/png"
              media="(max-width: 1200px)"
            />
            <img src={secondImage} alt="The Game" />
          </picture>
          <h1 className={styles.title}>Obtain the App</h1>
        </div>
      </Container>
    </Section>
  );
}

export default Second;
