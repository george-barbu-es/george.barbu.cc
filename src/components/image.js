import React from 'react';

const Image = ({ className, src, alt }) => (
  <img 
    className={className}
    src={process.env.GATSBY_SITE_URL + src}
    alt={alt}
    />
);

export default Image;