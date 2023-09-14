import React from 'react';

const Experience = ({ className, data }) => {

const groups = data[0].items.reduce((groups, item) => {
  const group = (groups[item.company] || []);
  group.push(item);
  groups[item.company] = group;
  return groups;
}, {});


return (
  <section className={className}>
      <>
        <h2 className="uppercase font-norwester text-xl text-primary-dark mb-4">{data[0].label}</h2>

        {Object.keys(groups).map((item, index ) => (
          <div key={index}>
            {groups[item].length > 1 && ( 
              <div key={index}  className={" bi-avoid bb-always font-lato mt-11"}>
                <span className="text-seondary uppercase text-sm font-semibold">{groups[item][0].company}</span>
                <div className="text-primary-dark text-xs font-semibold mb-4">      
                  <span className="">
                    {groups[item][groups[item].length - 1].startDate}&nbsp; - &nbsp;  
                    {groups[item][0].presentDate === 'Yes' && ( 'Present' )} 
                    {groups[item][0].presentDate === 'No' && ( 
                      <> 
                        {groups[item][0].endDate} 
                      </> 
                    )}
                  </span>
                </div>
                <div className="relative border-l border-solid border-primary-dark">
                  {groups[item].map((item, index) => (
                    <div key={index}  className={"bi-avoid bb-always font-lato ml-4 " + (index !== 0 ? 'mt-11' : 'mt-4')}>
                      <div className="absolute w-3 h-3 border-primary-dark bg-primary-dark rounded-full mt-1.5 -left-1.5 border"></div>
                      <span className="text-seondary uppercase text-sm font-semibold">{item.role}</span>
                      <div className="text-primary-dark text-xs font-semibold mb-4">      
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
              </div>
            
            )}

            {groups[item].length === 1 && (  
              <div key={index}  className={"bi-avoid bb-always font-lato " + (index !== 0 ? 'mt-11' : '')}>
                <span className="text-seondary uppercase text-sm font-semibold">{groups[item][0].role}</span>
                <div className="text-primary-dark text-xs font-semibold mb-4">
                  <span className="border-r-2 border-solid border-primary-dark mr-1 pr-1">{groups[item][0].company}</span>       
                  <span className="">
                    {groups[item][0].startDate}&nbsp; - &nbsp;  
                    {groups[item][0].presentDate === 'Yes' && ( 'Present' )} 
                    {groups[item][0].presentDate === 'No' && ( 
                      <> 
                        {groups[item][0].endDate} 
                      </> 
                    )}
                  </span>
                </div>
                <ul className="text-xs ">
                    {groups[item][0].duties.map((duty, index) => (
                      <li key={index}>
                        - {duty.duty}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </>           
  </section>
)};

export default Experience;