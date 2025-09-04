import Image from 'next/image';

export default function Header() {
  return (
    <header className="container" style={{ paddingTop: '10px', marginBottom: '20px' }}>
      <div style={{ height: '50px', maxHeight: '58px' }}>
        <Image
          src="/logo.png"
          alt="TaskByte IT Solutions"
          width={200}
          height={50}
          priority
        />
      </div>
    </header>
  );
}
