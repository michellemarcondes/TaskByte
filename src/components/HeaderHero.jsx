import React from 'react'

export default function HeaderHero(){
  return (
    <header className="hero" style={{backgroundImage:`url(${import.meta.env.BASE_URL}hero-image.png)`}}>
      <div className="container hero__inner">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="TaskByte" className="brand" />
        <div className="hero__content">
          <div className="h5">Evolua sua gestão de dados.</div>
          <div className="hero__spacer16"></div>
          <h1>
            PARE DE LIMITAR,<br/>
            COMECE A ESCALAR
          </h1>
          <div className="hero__spacer16"></div>
          <p className="lead">Com a TaskByte, substitua o 'insubstituível' Excel. Gerencie dados com eficiência real.</p>
          <div className="hero__spacer24"></div>
          <button className="btn-primary hero__cta">
            FAÇA PARTE DO NOSSO AMBIENTE <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </header>
  )
}


