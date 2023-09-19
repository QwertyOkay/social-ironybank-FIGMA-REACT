import Section from 'components/section/Section';
import Container from 'components/container/Container';
// import thirdImage from 'images/third.png';
import handImage from 'images/hand.png';

// import thirdImageMobile from 'images/thirdMobile.png';
// import fourthImage from 'images/fourth.png';
// import thirdImageMobile1 from 'images/thirdMobile1.png';
import styles from './homePageSections.module.scss';
import GoogleButton from 'components/googleButton/GoogleButton';

function Third() {
  return (
    <Section variant="third" id="download">
      <Container variant="containerMainThird">
        <div className={styles.textWrapThird}>
          <div className={styles.imgWrapThird}>
            <picture>
              <source
                srcSet={handImage}
                type="image/png"
                media="(min-width: 1280px)"
              />
              <source
                srcSet={handImage}
                type="image/png"
                media="(max-width: 1279px)"
              />
              <img className={styles.imgThird} src={handImage} alt="The Game" />
            </picture>
          </div>
          <div className={styles.flow}>
            <p className={styles.text3}>
              Our app is designed for everyone, catering to all skill levels.
              Whether you're a newcomer or a seasoned player in the world of
              slot games, our mobile application keeps you connected to the
              market. You'll discover the perfect game that matches your skill
              level and keeps you entertained for extended periods.
            </p>
            <GoogleButton />
          </div>
        </div>
        {/* <div className={styles.btn}>
          <GoogleButton />
        </div> */}
        {/* <div className={styles.imgWrapThird}>
          <picture>
            <source
              srcSet={thirdImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={thirdImageMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img className={styles.imgThird} src={thirdImage} alt="The Game" />
          </picture>
        </div> */}
      </Container>
    </Section>
  );
}

export default Third;
