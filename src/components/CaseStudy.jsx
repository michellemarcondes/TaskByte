import Image from 'next/image';

export default function CaseStudy() {
  return (
    <section className="section">
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Imagem com frame azul */}
          <div className="frame-wrap frame-left-bottom">
            <Image
              src="/carsburguer.png"
              alt="Carl's Jr. Burgers - Case de sucesso"
              width={600}
              height={400}
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Conteúdo de texto */}
          <div style={{ maxWidth: '520px' }}>
            <h5 className="eyebrow" style={{ marginBottom: '16px' }}>
              CONHEÇA NOSSOS CASES DE SUCESSO!
            </h5>
            
            <h2 style={{ marginBottom: '16px' }}>
              PROBLEMA DE GESTÃO DE ESTOQUE
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p>
                Desafio do Carls Jr. Burgers: +20h/semana lançando planilhas • 15% de divergência no inventário • Perdas por vencimento.
              </p>
              <p>
                Solução da TaskByte foi criar um sistema unificado com rastreamento de lotes + dashboard em tempo real.
              </p>
              <p>
                Resultado: 68% menos perdas • R$ 12 mil/ano economizados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
