import React from 'react';

const Skills = ({ data }) => (
  <>
    {data.map((skill, index) => (
      <div key={index} className="mt-10 text-white text-opacity-75  leading-4 font-thin">
        <h3 className="uppercase font-norwester text-xl text-primary mb-4">{skill.title}</h3>
        <div className="text-[0.70rem] font-lato">
          <ul key={skill.title}>
            {skill.items.map(subskill => (
              <li key={subskill.name}>
                {skill.type === 'tag' && (
                  <>
                    {subskill.name}
                  </>
                )}
                {skill.type === 'list' && (
                  <>
                  - {subskill.name}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </>
);

export default Skills;
