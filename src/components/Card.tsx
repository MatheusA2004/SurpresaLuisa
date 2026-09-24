import { useState } from "react";
import "./Card.css";

interface CardProps {
  imagem: string;
  mensagem: string;
}

export function Card({
  imagem,
  mensagem,
}: CardProps) {
  const [virado, setVirado] = useState(false);

  function virarCard() {
    setVirado(!virado);
  }

  return (
    <div
      className={`card-container ${virado ? "virado" : ""}`}
      onClick={virarCard}
    >
      <div className="card-inner">

        {/* FRENTE */}
        <div
          className="card-front"
          style={{
            backgroundImage: `url(${imagem})`,
          }}
        >
        </div>

        {/* VERSO */}
        <div className="card-back">
          <p>{mensagem}</p>
        </div>

      </div>
    </div>
  );
}