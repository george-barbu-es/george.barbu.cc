import React from 'react';
import Image from './image';

const Header = ({data}) => (
            <div className="bg-primary w-full h-44 flex flex-col content-center top-12 justify-end relative pb-4 mt-20 print:pb-0 print:absolute print:justify-center print:h-32 print:mt-0    sm:pb-0 sm:absolute sm:justify-center sm:h-32 sm:mt-0">
              <div className="flex relative w-full">
                  <Image className="w-[180px] -translate-y-24 left-8 mx-auto z-10 print:absolute print:-translate-y-12 sm:absolute sm:-translate-y-12" src='/assets/profile.jpg' alt='profile'/>
              </div>
              <div className="flex flex-col justify-end content-center text-center absolute w-full print:w-4/6 print:left-1/3 print:text-left print:relative print:justify-center    sm:w-4/6 sm:left-1/3 sm:text-left sm:relative sm:justify-center">
              {data &&
                Object.keys(data).map((field, index) => (
                    <div key={index} >
                    {field === 'fullname' && (
                        <h3 className="text-white font-normal text-3xl mb-3 font-norwester tracking-wider">{data[field]}</h3>  
                    )}
                    {field === 'role' && (
                        <span className="font-semibold font-montserrat tracking-widest">{data[field]}</span>
                    )}
                     {field === 'slogan' && (
                        <span className="text-sm leading-3 font-montserrat tracking-wide">{data[field]}</span>
                    )}
                    </div>
                ))}   
              </div>
            </div>   
);

export default Header;