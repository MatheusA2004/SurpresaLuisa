import './Card.css'

interface CardProps {
  imagem: string;
  titulo: string;
}

export function Card({ imagem }: CardProps) {
  return (
    <div 
      className="card"
      style={{ backgroundImage: `url(${imagem})` }}
    >
    </div>
  );
}