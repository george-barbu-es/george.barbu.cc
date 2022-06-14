import React from 'react';

const Summary = ({ data, className}) => (
          <div className={className}>
            <h3 className="uppercase font-norwester text-xl text-primary mb-4">{data.label}</h3>
            <span className="text-[0.70rem] font-thin font-lato">
              {data.text}
            </span>
          </div>
);

export default Summary;
