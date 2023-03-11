import React from 'react';
import { School } from '../types';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Education = () => {
  const schools: School[] = [
    {
      name: 'Howard High',
      description: 'Excellent',
      date: '2014-2019',
    },
  ];
  return (
    <div id="education">
      <header className="uppercase font-bold mt-10">
        {' '}
        <HiOutlineChevronDoubleRight className="inline-block mr-2" />
        Education
      </header>
      <div>
        <ul>
          {schools.map((v) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h1 className="font-bold">{v.name}</h1>
              <p className="italic">{v.description}</p>
              <p className="italic">{v.date}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
