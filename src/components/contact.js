import React from 'react';

const Contact = ({ data, className }) => (
  <div className={className}>
    <h3 className="uppercase font-norwester text-xl text-primary mb-4">{data.label}</h3>
    <span className="text-[0.70rem] font-lato">
      <ul>
      {data && (
        <>
        {data.items.map((contact, index ) => (
          <li key={index}>
          {contact.service === 'location' && (
              <span>{contact.value}</span>
          )}
          {contact.service === 'phone' && (
              <a href={`tel:${contact.value}`} title="phone">
                {contact.value}
              </a>
          )}
          {contact.service === 'homephone' && (
              <a href={`tel:${contact.value}`} title="phone">
                {contact.value}
              </a>
          )}
          {contact.service === 'website' && (
              <a
                target="_blank"
                href={contact.value}
                rel="noopener noreferrer"
                title="website"
              >
                {contact.value}
              </a>
          )}
          {contact.service === 'email' && (
              <a href={`mailto:${contact.value}`} title="email">
                {contact.value}
              </a>
          )}
        </li>
        ))}
        </>
      )}
      </ul>
    </span>
  </div>
);

export default Contact;

