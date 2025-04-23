import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero({handleOpenPopup}) {
  const [projCount, setProjCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  const projLineRef = useRef(null);
  const clientLineRef = useRef(null);

  useEffect(() => {
    let proj = 0;
    let client = 0;
    let speed = 30;
    const speedRate = 0.6;
    const minSpeed = 5;

    const maxProj = 235;
    const maxClient = 112;

    const updateLine = (ref, count, max) => {
      const width = Math.min((count / max) * 100, 100);
      if (ref.current) ref.current.style.width = `${width}%`;
    };

    const intervalId = setInterval(() => {
      if (proj < maxProj) proj += 1;
      if (client < maxClient) client += 1;

      setProjCount(proj);
      setClientCount(client);

      updateLine(projLineRef, proj, maxProj);
      updateLine(clientLineRef, client, maxClient);

      if (proj >= maxProj && client >= maxClient) clearInterval(intervalId);
      if (speed > minSpeed) speed *= speedRate;
    }, speed);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="intro_section" id="home">
      <div className="intro_content">
        <div className="intro_content_main">
          <div className="intro_text_content">
            <p><span>designs</span> that</p>
            <p>Speak Louder than</p>
            <p><span>words.</span></p>
          </div>

          <div className="intro_text_button">
            <div className="intro_btn_container">
              <button className="intro_btn_button show-popup" onClick={handleOpenPopup} >start a project</button>
            </div>

            <div className="intro_pro_client_main">
              <div className="intro_pro_client_content">
                <div className="intro_pro-content_main">
                  <div className="intro_pro_line" ref={projLineRef}></div>
                  <p className="proj_success">successful projects</p>
                  <p className="proj_count">
                    {projCount}
                    {projCount >= 235 && <span className="plus_icon">+</span>}
                  </p>
                </div>

                <div className="intro_client_content_main">
                  <div className="intro_client_line" ref={clientLineRef}></div>
                  <p className="trust_client">trusted clients</p>
                  <p className="client_count">
                    {clientCount}
                    {clientCount >= 112 && <span className="plus_icon">+</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
