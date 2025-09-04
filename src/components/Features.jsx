import Image from 'next/image';

const features = [
  {
    id: 'benef1',
    title: ['INFINITAS', 'VANTAGENS'],
    icon: 'svg-infinito'
  },
  {
    id: 'benef2',
    title: ['MAIOR', 'ESCALABILIDADE'],
    img: '/escalabilidade.png'
  },
  {
    id: 'benef3',
    title: ['MAIS', 'EFICIÊNCIA'],
    img: '/relogio.png'
  },
  {
    id: 'benef4',
    title: ['MELHOR', 'GESTÃO DE SEUS DADOS'],
    img: '/gestao.png'
  }
];

// SVG do símbolo infinito
const InfinityIcon = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: 'var(--text-strong)' }}
  >
    <path 
      d="M8 20C8 14.4772 12.4772 10 18 10C23.5228 10 28 14.4772 28 20C28 25.5228 23.5228 30 18 30C12.4772 30 8 25.5228 8 20Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M32 20C32 14.4772 27.5228 10 22 10C16.4772 10 12 14.4772 12 20C12 25.5228 16.4772 30 22 30C27.5228 30 32 25.5228 32 20Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

export default function Features() {
  return (
    <section 
      className="features"
      style={{
        backgroundColor: 'var(--gray-900)',
        paddingTop: '24px',
        paddingBottom: '48px'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {features.map((feature) => (
            <div 
              key={feature.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                {feature.icon === 'svg-infinito' ? (
                  <InfinityIcon />
                ) : (
                  <Image
                    src={feature.img}
                    alt={feature.title[0]}
                    width={40}
                    height={40}
                  />
                )}
              </div>
              
              <div>
                <h3 style={{ margin: 0, lineHeight: '1.2' }}>
                  {feature.title[0]}
                </h3>
                {feature.title[1] && (
                  <h4 style={{ margin: 0, lineHeight: '1.2' }}>
                    {feature.title[1]}
                  </h4>
                )}
                {feature.title[2] && (
                  <h4 style={{ margin: 0, lineHeight: '1.2' }}>
                    {feature.title[2]}
                  </h4>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
