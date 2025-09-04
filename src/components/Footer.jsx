import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer com imagem de fundo */}
      <div 
        style={{
          backgroundImage: `linear-gradient(0deg, var(--gray-900) 0%, rgba(25,28,31,.85) 35%, rgba(25,28,31,.6) 100%), url('/rodape.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          paddingTop: '64px',
          paddingBottom: '32px'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '48px'
            }}
          >
            {/* NOSSAS POLITICAS */}
            <div>
              <h4 style={{ marginBottom: '16px' }}>NOSSAS POLITICAS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" className="footer-link">POLITICA DE PRIVACIDADE</a>
                <a href="#" className="footer-link">POLITICA DE COOKIES</a>
                <a href="#" className="footer-link">TERMOS DE USO</a>
              </div>
            </div>
            
            {/* SOBRE A TASKBYTE */}
            <div>
              <h4 style={{ marginBottom: '16px' }}>SOBRE A TASKBYTE</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" className="footer-link">QUEM SOMOS</a>
              </div>
            </div>
            
            {/* PARA EMPRESAS */}
            <div>
              <h4 style={{ marginBottom: '16px' }}>PARA EMPRESAS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" className="footer-link">ATENDIMENTO CORPORATIVO</a>
              </div>
            </div>
            
            {/* CONTATOS */}
            <div>
              <h4 style={{ marginBottom: '16px' }}>CONTATOS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📞</span>
                  <span style={{ color: 'var(--text-base)' }}>(00) 00000-0000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>✉️</span>
                  <span style={{ color: 'var(--text-base)' }}>HELP@TASKBYTE.COM.BR</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📍</span>
                  <span style={{ color: 'var(--text-base)' }}>CAMPINAS, SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barra inferior */}
      <div 
        style={{
          height: '64px',
          borderTop: '1px solid rgba(255,255,255,.06)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/logo.png"
                alt="TaskByte IT Solutions"
                width={130}
                height={38}
              />
            </div>
            
            {/* Copyright */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: '14px', 
                color: 'var(--text-muted)', 
                margin: 0 
              }}>
                © 2025 TASKBYTE IT SOLUTIONS. TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
            
            {/* Redes sociais */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a href="#" aria-label="GitHub">
                <Image
                  src="/git.png"
                  alt="GitHub"
                  width={34}
                  height={34}
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={34}
                  height={34}
                  className="social-icon"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
