import React from 'react';
import { Experience } from '../types';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Experience = () => {
  const Names: Experience[] = [
    {
      organisation: 'VIP',
      description: 'Software Development',
      role: 'IT',
      date: '2022',
    },
  ];

  return (
    <div id="Experience">
      <div>
        <header className="uppercase font-bold">
          {' '}
          <HiOutlineChevronDoubleRight className="inline-block mr-2" />
          Experience
        </header>
        <div>
          <ul>
            {Names.map((v) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <h1>{v.organisation}</h1>
                <p>{v.description}</p>
                <p>{v.role}</p>
                <p>{v.date}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
