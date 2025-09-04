import Image from 'next/image';

export default function AboutTeam() {
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
          {/* Conteúdo de texto */}
          <div style={{ maxWidth: '520px' }}>
            <h5 className="eyebrow" style={{ marginBottom: '16px' }}>
              SAIBA QUEM FAZ ISSO ACONTECER
            </h5>
            
            <h2 style={{ marginBottom: '16px' }}>
              CONHEÇA O TIME DA TASKBYTE IT SOLUTIONS
            </h2>
            
            <p>
              Somos a mente criativa e o talento técnico que torna possível substituir a complexidade pela simplicidade. Nosso objetivo é único: usar nossa expertise para construir a ferramenta certa para dar eficiência real ao seu negócio e permitir que você escale sem limites.
            </p>
          </div>
          
          {/* Imagem com frame azul espelhado */}
          <div className="frame-wrap frame-right-bottom">
            <Image
              src="/equipe.png"
              alt="Equipe TaskByte IT Solutions trabalhando"
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
        </div>
      </div>
    </section>
  );
}
