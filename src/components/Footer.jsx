import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="prefooter" style={{backgroundImage:`url(${import.meta.env.BASE_URL}rodape.png)`}}>
        <div className="container prefooter__inner">
          <div className="prefooter__grid">
            <div>
              <div className="h4">NOSSAS POLITICAS</div>
              <div className="mt-16"></div>
              <p>POLITICA DE PRIVACIDADE</p>
              <p className="mt-8">POLITICA DE COOKIES</p>
              <p className="mt-8">TERMOS DE USO</p>
            </div>
            <div>
              <div className="h4">SOBRE A TASKBYTE</div>
              <div className="mt-16"></div>
              <p>QUEM SOMOS</p>
            </div>
            <div>
              <div className="h4">PARA EMPRESAS</div>
              <div className="mt-16"></div>
              <p>ATENDIMENTO CORPORATIVO</p>
            </div>
            <div>
              <div className="h4">CONTATOS</div>
              <div className="mt-16"></div>
              <p>📞 (00) 00000-0000</p>
              <p className="mt-8">✉️ HELP@TASKBYTE.COM.BR</p>
              <p className="mt-8">📍 CAMPINAS, SP</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footerbar">
        <div className="container footerbar__inner">
          <div className="footer__brand">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="TaskByte" />
            <div className="h5" style={{color:'var(--text-strong)'}}>TASKBYTE IT SOLUTIONS</div>
          </div>
          <p style={{fontSize:14,color:'var(--text-muted)'}}>© 2025 TASKBYTE IT SOLUTIONS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="socials">
            <a href="#" aria-label="GitHub"><img src={`${import.meta.env.BASE_URL}git.png`} alt="GitHub"/></a>
            <a href="#" aria-label="Instagram"><img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram"/></a>
            <a href="#" aria-label="LinkedIn"><img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
