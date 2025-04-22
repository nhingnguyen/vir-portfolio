import React, { useEffect, useState } from 'react';
import './Intro.css';
import cvFile from '../assets/Ngoc-Lam-Nhi-Nguyen-CV.pdf';

const Intro = () => {
  const [displayTitle, setDisplayTitle] = useState('');
  const [displaySubtitle, setDisplaySubtitle] = useState('');
  const [displayDescription, setDisplayDescription] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const title = "Hello, I'm Nhi";
    const subtitle = "Web Developer";
    const description = "Hey there! I love building things for the web. Let's collaborate to create something amazing together!";

    let i = 0;
    const typingTitle = setInterval(() => {
      if (i < title.length) {
        setDisplayTitle(title.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingTitle);
        setShowCursor(false);
        
        setTimeout(() => {
          let j = 0;
          const typingSubtitle = setInterval(() => {
            if (j < subtitle.length) {
              setDisplaySubtitle(subtitle.substring(0, j + 1));
              j++;
            } else {
              clearInterval(typingSubtitle);
              
              setTimeout(() => {
                let k = 0;
                const typingDesc = setInterval(() => {
                  if (k < description.length) {
                    setDisplayDescription(description.substring(0, k + 1));
                    k++;
                  } else {
                    clearInterval(typingDesc);
                    setButtonsVisible(true);
                  }
                }, 20);
              }, 300);
            }
          }, 100);
        }, 300);
      }
    }, 150);

    return () => {
      clearInterval(typingTitle);
    };
  }, []);

  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-title">
            <span className="title-gradient">{displayTitle}</span>
            {showCursor && <span className="cursor">|</span>}
          </h1>
          <h2 className="intro-subtitle">{displaySubtitle}</h2>
          <p className="intro-description">{displayDescription}</p>
          
          {buttonsVisible && (
            <div className="intro-buttons">
              <a href="#contact" className="intro-button contact-button">
                Contact Me
              </a>
              <a 
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="intro-button cv-button"
              >
                View My CV
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;