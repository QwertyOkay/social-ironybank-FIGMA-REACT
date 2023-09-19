import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={'Terms & Conditions'}>
            <h3>Terms and Conditions in General</h3>
            <p>
              By accessing or using the website Ladywolfmoon.com (referred to as
              the "Website"), you agree to comply with and be bound by these
              Terms and Conditions ("Terms"). If you do not agree to these
              Terms, please do not use the Website.
            </p>
            <h3>User Eligibility</h3>
            <p>
              You must be at least 18 years old or the legal age of majority in
              your jurisdiction to use this Website. By using the Website, you
              represent and warrant that you meet these age requirements.
            </p>
            <h3>User Registration</h3>
            <p>
              To access certain features or services on the Website, you may be
              required to register for an account. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>
            <h3>Intellectual Property</h3>
            <p>
              All content on the Website, including text, graphics, logos, and
              images, is the property of [Insert Your Company Name] and is
              protected by intellectual property laws. You may not reproduce,
              distribute, modify, or display any part of the Website without our
              prior written consent.
            </p>
            <h3>Prohibited Activities</h3>
            <p>
              When using the Website, you agree not to: a) Violate any
              applicable laws or regulations. b) Interfere with the security or
              functionality of the Website. c) Use the Website for any
              unauthorized or illegal purposes. d) Attempt to gain unauthorized
              access to any part of the Website or its systems. e) Collect or
              harvest any personally identifiable information from the Website
              without our consent.
            </p>
            <h3>Disclaimers</h3>
            <p>
              The Website and its content are provided on an "as-is" and "as
              available" basis. We make no warranties or representations,
              express or implied, regarding the accuracy, reliability, or
              availability of the Website. Your use of the Website is at your
              own risk.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, [Insert Your Company Name]
              shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising out of or in connection
              with your use of the Website. This includes, but is not limited
              to, any loss of profits, data, or business interruption.
            </p>
            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify or revise these Terms at any time
              without notice. Your continued use of the Website after such
              changes will constitute your acceptance of the revised Terms.
            </p>
            <h3>Contact Information</h3>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at: Email: info@ladywoolfmoon.com
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
