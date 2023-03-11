import React from 'react';
import { Skill } from '../types';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Skills = () => {
  const Skills: Skill[] = [
    {
      name: 'Web Development',
      description: 'IT',
      level: '2',
    },
  ];

  return (
    <div id="Contact">
      <div>
        <header className="uppercase font-bold">
          {' '}
          <HiOutlineChevronDoubleRight className="inline-block mr-2" />
          Skills
        </header>
        <div>
          <ul>
            {Skills.map((v) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <h1>{v.name}</h1>
                <p>{v.description}</p>
                <p>{v.level}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
