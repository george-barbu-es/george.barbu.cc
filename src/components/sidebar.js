import React from 'react';
import {
    Summary,
    Skills,
    Contact,
  } from '../components';

const Sidebar = ({ className, summary, contacts, skills }) => (
        <section className={className}>
            <Summary data={summary} className="text-white text-opacity-75 leading-3" />

            <Skills data={skills} />

            <Contact data={contacts} className="mt-10 text-white text-opacity-75 leading-4 font-thin" />

        </section> 
);

export default Sidebar;
