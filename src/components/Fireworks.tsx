import { useEffect, useRef } from "react";
import "./Fireworks.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
}

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Executa somente em telas de celular
    if (window.innerWidth > 768) {
      return;
    }

    const canvasElement = canvasRef.current;

    if (!canvasElement) {
      return;
    }

    const canvas = canvasElement as HTMLCanvasElement;

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    // A partir daqui o TypeScript sabe que
    // canvas e context NÃO são null
    const ctx = context;

    let animationId: number;

    const startTime = Date.now();

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    const colors = [
      "#ff3838",
      "#ffdd00",
      "#00ff88",
      "#00bfff",
      "#ff4fff",
      "#ffffff",
    ];

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function createRocket() {
      rockets.push({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        targetY:
          Math.random() * window.innerHeight * 0.45 + 50,
        speed: 7 + Math.random() * 3,
        color:
          colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function explode(rocket: Rocket) {
      const amount = 70 + Math.random() * 50;

      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 1;

        particles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: rocket.color,
          size: Math.random() * 2 + 1,
        });
      }
    }

    function update() {
      // Criar foguetes
      if (Math.random() < 0.04) {
        createRocket();
      }

      // Atualizar foguetes
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i];

        rocket.y -= rocket.speed;

        // Desenhar foguete
        ctx.beginPath();

        ctx.arc(
          rocket.x,
          rocket.y,
          2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = rocket.color;
        ctx.fill();

        // Explodir
        if (rocket.y <= rocket.targetY) {
          explode(rocket);

          rockets.splice(i, 1);
        }
      }

      // Atualizar partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Gravidade
        particle.vy += 0.08;

        // Perder velocidade
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Desaparecer
        particle.alpha -= 0.012;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
    }

    function animate() {
        const elapsed = Date.now() - startTime;

        // Terminou os 7 segundos
        if (elapsed >= 7000) {
            rockets.length = 0;
            particles.length = 0;

            ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
            );

            return;
        }

        // Limpa o frame anterior
        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );

        update();

        animationId = requestAnimationFrame(animate);
    }

    // Primeiro foguete
    createRocket();

    // Iniciar animação
    animate();

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return <canvas ref={canvasRef} className="fireworks" />;
}