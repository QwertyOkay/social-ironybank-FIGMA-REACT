import { Helmet } from 'react-helmet-async';

const TITLE = 'Ladywolfmoon.com';
const CONTENT = 'Have a blast with a fun and free social game!';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={CONTENT} />
    </Helmet>
  );
}

export default HelmetHead;
