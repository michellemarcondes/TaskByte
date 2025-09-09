import React from 'react'

function InfinityIcon(){
  return (
    <svg className="feature__icon" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16c0-6.627 5.373-12 12-12 12 0 18 24 32 24 6.627 0 12-5.373 12-12S54.627 4 48 4C36 4 30 28 16 28 9.373 28 4 22.627 4 16Z" stroke="var(--text-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Features(){
  return (
    <section className="features">
      <div className="container">
        <div className="features__grid">
          <a className="feature" href="#beneficios">
            <InfinityIcon />
            <div>
              <div className="h3">Infinitas</div>
              <div className="h4">Vantagens</div>
            </div>
          </a>

          <a className="feature" href="#escalabilidade">
            <img className="feature__icon" src="/escalabilidade.png" alt="Escalabilidade" />
            <div>
              <div className="h3">Maior</div>
              <div className="h4">Escalabilidade</div>
            </div>
          </a>

          <a className="feature" href="#eficiencia">
            <img className="feature__icon" src="/relogio.png" alt="Eficiência" />
            <div>
              <div className="h3">Mais</div>
              <div className="h4">Eficiência</div>
            </div>
          </a>

          <a className="feature" href="#gestao">
            <img className="feature__icon" src="/gestao.png" alt="Gestão" />
            <div>
              <div className="h3">Melhor</div>
              <div className="h4">Gestão de seus dados</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
