import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function ProfileImage({ data }) {
    console.log(data);
    console.log(data.cloudinaryMedia);
  const image = getImage(data.cloudinaryMedia);
    console.log(image);
  return (
    <GatsbyImage className="w-[180px] -translate-y-24 left-8 mx-auto z-10 print:absolute print:-translate-y-12 sm:absolute sm:-translate-y-12" alt="Profile Image" image={image} />
  );
}

export const query = graphql`
  query ProfileImage {
    cloudinaryMedia(asset_id: {eq: "9cba289bb7130bb8a627a220567596ad"}) {
        gatsbyImageData(width: 300, placeholder: BLURRED)
    }
  }
`;