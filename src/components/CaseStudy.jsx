import React from 'react'

export default function CaseStudy(){
  return (
    <section>
      <div className="container two-col">
        <div>
          <div className="framed">
            <img src={`${import.meta.env.BASE_URL}carsburguer.png`} alt="Case: Carl's Jr." style={{width:'100%',maxWidth:600}}/>
          </div>
        </div>
        <div className="text-max">
          <div className="h5">CONHEÇA NOSSOS CASES DE SUCESSO!</div>
          <div className="mt-16"></div>
          <h2>PROBLEMA DE GESTÃO DE ESTOQUE</h2>
          <div className="mt-16"></div>
          <p>
            Desafio do Carls Jr. Burgers: +20h/semana lançando planilhas • 15% de divergência no inventário • Perdas por vencimento.
          </p>
          <div className="mt-16"></div>
          <p>
            Solução da TaskByte foi criar um sistema unificado com rastreamento de lotes + dashboard em tempo real.
          </p>
          <div className="mt-16"></div>
          <p>
            Resultado: 68% menos perdas • R$ 12 mil/ano economizados.
          </p>
        </div>
      </div>
    </section>
  )
}

