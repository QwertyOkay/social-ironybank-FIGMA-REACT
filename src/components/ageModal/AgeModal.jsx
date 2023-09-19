import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ showAgeModal }) {
  return (
    <Modal variant="ageModal" closeModal={() => showAgeModal(true)}>
      <div className={styles.text}>
        <p>
          On our website, we welcome you to a world of entertaining social games
          created just for you. To be clear, there is no real money betting or
          gambling available here. Our services are only available to people
          over the age of 18.
        </p>
        <p>Do you want to learn more about our exceptional services?</p>
      </div>
      <div className={styles.buttons}>
        <Button title={'YES'} onClick={() => showAgeModal(false)}></Button>
        <Button
          variant="btnNo"
          title={'NO'}
          onClick={() => showAgeModal(true)}
        ></Button>
      </div>
    </Modal>
  );
}

export default AgeModal;
