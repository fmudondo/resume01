import React from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Languages = () => {
  return (
    <div id="profile">
      <div>
        <header className="uppercase font-bold">
          {' '}
          <HiOutlineChevronDoubleRight className="inline-block mr-2" />
          Languages
        </header>
        <ul>Shona</ul>
        <ul>English</ul>
        <ul>Mandarin</ul>
      </div>
    </div>
  );
};

export default Languages;
