import React from 'react';
import YoutubeIcon from '../assets/youtube.svg';
import TwitterIcon from '../assets/twitter.svg';
import GithubIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import BehanceIcon from '../assets/behance.svg';
import DribbbleIcon from '../assets/dribbble.svg';
import AngelIcon from '../assets/angellist.svg';
import CcIcon from '../assets/cc.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'twitter':
      return <TwitterIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'facebook':
      return <FacebookIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'youtube':
      return <YoutubeIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'instagram':
      return <InstagramIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'github':
      return <GithubIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'behance':
      return <BehanceIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'dribbble':
      return <DribbbleIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'angellist':
      return <AngelIcon className="h-6 fill-current stroke-[#313638]" />;
    case 'cc':
      return <CcIcon className="h-6 fill-current stroke-[#313638]" />;
    default:
      return null;
  }
};

export default SocialIcon;
