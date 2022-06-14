import React from 'react';

const Education = ({ className, data }) => (
  <section className={className}>
    {data.map((education, index) => (
      <div key={index} >
        <h2 className="uppercase font-norwester text-xl text-primary mb-4">{education.label}</h2>
        {education.items.map((item, index) => (
          <div key={index} className="bi-avoid bb-always mt-11 font-lato">
            <span className="text-seondary uppercase text-sm font-semibold">{item.institution}</span>
            <div className="text-primary text-xs font-semibold mb-4">
                <span className="border-r-2 border-solid border-primary mr-1 pr-1">{item.degree}</span>       
                <span className="">{item.type}</span>
            </div>
            <ul className="text-xs ">
                {item.certifications.map((name, index) => (
                  <li key={index}>
                  - {name.name}
                  </li>	  
                ))}
            </ul>
          </div>	  
        ))}
      </div>
    ))}
  </section>
);

export default Education;
