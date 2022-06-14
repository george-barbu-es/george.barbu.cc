import React from 'react';

const Experience = ({ className, data }) => (
  <section className={className}>
    {data.map((experience, index) => (
      <div key={index} >
        <h2 className="uppercase font-norwester text-xl text-primary mb-4">{experience.label}</h2>
        {experience.items.map((item, index) => (
          <div key={index}  className={"bi-avoid bb-always font-lato " + (index !== 0 ? 'mt-11' : '')}>
            <span className="text-seondary uppercase text-sm font-semibold">{item.role}</span>
            <div className="text-primary text-xs font-semibold mb-4">
              <span className="border-r-2 border-solid border-primary mr-1 pr-1">{item.company}</span>       
              <span className="">
                {item.startDate}&nbsp; - &nbsp;  
                {item.presentDate === 'Yes' && ( 'Present' )} 
                {item.presentDate === 'No' && ( 
                  <> 
                    {item.endDate} 
                  </> 
                )}
              </span>
            </div>
            <ul className="text-xs ">
                {item.duties.map((duty, index) => (
                  <li key={index}>
                    - {duty.duty}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    ))}                 
  </section>
);

export default Experience;
