import React from 'react';
import { PHONE } from '../constants/constants';
import { EMAIL } from '../constants/constants';
import { ADDRESS } from '../constants/constants';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="Contact" className="p-8">
      <header className="uppercase font-bold mt-20">Contact</header>
      <div>
        <ul>
          <HiPhone className="inline-block mr-2" /> Phone: {PHONE}{' '}
        </ul>
        <ul>
          {' '}
          <HiMail className="inline-block mr-3" />
          Email: {EMAIL}
        </ul>
        <ul>
          <HiLocationMarker className="inline-block mr-3" />
          Address: {ADDRESS}{' '}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
