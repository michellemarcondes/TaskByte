import React from 'react'

export default function AboutTeam(){
  return (
    <section>
      <div className="container two-col">
        <div className="text-max">
          <div className="h5">SAIBA QUEM FAZ ISSO ACONTECER</div>
          <div className="mt-16"></div>
          <h2>CONHEÇA O TIME DA TASKBYTE IT SOLUTIONS</h2>
          <div className="mt-16"></div>
          <p>
            Somos a mente criativa e o talento técnico que torna possível substituir a complexidade pela simplicidade. Nosso objetivo é único: usar nossa expertise para construir a ferramenta certa para dar eficiência real ao seu negócio e permitir que você escale sem limites.
          </p>
        </div>
        <div>
          <div className="framed framed--mirror">
            <img src="/equipe.png" alt="Equipe TaskByte" style={{width:'100%',maxWidth:600}}/>
          </div>
        </div>
      </div>
    </section>
  )
}
