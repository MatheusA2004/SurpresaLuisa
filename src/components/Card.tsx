import './Card.css'

interface CardProps {
  imagem: string;
  titulo: string;
}

export function Card({ imagem, titulo }: CardProps) {
  return (
    <div 
      className="card"
      style={{ backgroundImage: `url(${imagem})` }}
    >
    </div>
  );
}