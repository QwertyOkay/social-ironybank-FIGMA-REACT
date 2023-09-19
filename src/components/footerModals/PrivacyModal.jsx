import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function PrivacyModal({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={'close'}
            type={'button'}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={'Privacy Policy'}>
            <p>
              Your privacy is important to us. This Privacy Policy outlines how
              we collect, use, disclose, and safeguard your personal
              information. By using this website (the "Site"), you consent to
              the practices described in this Privacy Policy.
            </p>
            <h3>Information We Collect</h3>
            <p>
              Personal Information: We may collect personal information from
              you, such as your name and email address, when you voluntarily
              provide it to us. Non-Personal Information: We may also collect
              non-personal information about your visit to the Site, such as the
              type of browser you use, your operating system, and your IP
              address. This information is collected to help us improve the Site
              and better understand how visitors use it.
            </p>
            <h3>Use of Information</h3>
            <p>
              We may use your personal information to: Respond to your
              inquiries, comments, or requests. Send you email updates and
              newsletters if you have subscribed to them. Improve our services
              and the content of the Site. We will not sell, trade, or rent your
              personal information to third parties.
            </p>
            <h3>Cookies</h3>
            <p>
              We may use cookies to enhance your experience on the Site. Cookies
              are small text files placed on your computer for record-keeping
              purposes.
            </p>
            <h3>Third-Party Links</h3>
            <p>
              The Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites.
            </p>
            <h3>Security</h3>
            <p>
              We take reasonable precautions to protect your personal
              information. However, no method of data transmission over the
              internet or electronic storage is entirely secure, and we cannot
              guarantee its absolute security.
            </p>
            <h3>Changes to this Privacy Policy</h3>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              on the Site.
            </p>
            <h3>Your Choices</h3>
            <p>
              You can opt-out of receiving email updates and newsletters by
              following the instructions provided in those communications.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at: Email: info@ladywoolfmoon.com
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;
