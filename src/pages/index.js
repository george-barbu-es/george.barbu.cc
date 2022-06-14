import React from 'react';
import {
  Seo,
  Footer,
  Header,
  Sidebar,
  Education,
  Experience,
} from '../components';
import '../main.css';
import resume from '../../data/profile';

import PrintIcon from '../assets/print.svg';
import DownloadIcon from '../assets/download.svg';

 

export default function Home() {

    // const documentRef = React.createRef();
    const downloadPDF = () => {
        var element = document.createElement('a'); 
        element.setAttribute('href', process.env.GATSBY_PDF_EXPORT_PATH);
        element.setAttribute('download', 'george-barbu.pdf');
    
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); 
        document.body.removeChild(element);
       
    }   
    const printPDF = () => {
        if(!document.getElementById("resumePdfIframe")) {
            const resumeIframe = document.createElement("iframe");
            resumeIframe.setAttribute("src", process.env.GATSBY_PDF_EXPORT_PATH);
            resumeIframe.setAttribute("id", "resumePdfIframe");
            resumeIframe.setAttribute("name", "resumePdfIframe");
            resumeIframe.style.display = "none";
            document.body.appendChild(resumeIframe);
        } 
        
        const resumePdfIframe = window.frames["resumePdfIframe"];
        resumePdfIframe.focus();
        resumePdfIframe.print();
    }  

    return (
        <main className="w-full text-secondary bg-[#525659] min-h-screen">
            
            <Seo title="Resume" />
            <header data-exclude="true" className="max-w-screen-pdf relative mx-auto items-center justify-center text-center pt-6 lg:pb-5 ">
                <button onClick={downloadPDF} type="primary" className="mr-2">
                    <DownloadIcon className="h-6 fill-current" />
                </button> 
                <button onClick={printPDF} type="primary" className="ml-2">
                    <PrintIcon className="h-6 fill-current" />
                </button> 
            </header>

            <div className="printColor max-w-screen-pdf relative mx-auto lg:flex">
                <Header 
                    data={resume.header}
                /> 
                <div className="bg-secondary px-8 lg:w-2/5">
                    <Sidebar  
                        className="mt-5 pb-10 pt-16 print:pt-56 sm:pt-56"
                        skills={resume.skills}
                        summary={resume.summary}
                        contacts={resume.contact}
                    /> 
                </div>
                

                <div className="printColor bg-white px-8 lg:w-3/5">
                    <div className="py-10 lg:pt-56 lg:mt-5">
                        <Experience className="bi-avoid bb-always" data={resume.experience}/>
                        <Education className="bi-avoid bb-always mt-28 mb-11" data={resume.education}/>
                    </div> 
                </div>
            </div>

            <Footer social={resume.social} />
        </main>
    )
};

