import { useEffect, useRef } from "react";

const LIGHT_COLORS = ["rgba(255,255,255,0.95)", "rgba(255,237,163,0.9)", "rgba(191,246,255,0.82)"];
const DARK_COLORS = ["rgba(20,8,38,0.92)", "rgba(92,36,168,0.82)", "rgba(167,139,250,0.74)"];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createParticle(width, height, x = Math.random() * width, y = Math.random() * height) {
  const isLight = Math.random() > 0.46;
  const life = randomBetween(240, 520);

  return {
    kind: isLight ? "light" : "dark",
    x,
    y,
    vx: randomBetween(-0.22, 0.22),
    vy: isLight ? randomBetween(-0.55, -0.16) : randomBetween(0.2, 0.7),
    size: randomBetween(2.5, 8.5),
    rotation: randomBetween(0, Math.PI * 2),
    spin: isLight ? randomBetween(-0.02, 0.02) : randomBetween(-0.045, 0.045),
    opacity: randomBetween(0.22, 0.62),
    life,
    color: isLight ? pick(LIGHT_COLORS) : pick(DARK_COLORS),
  };
}

function drawStar(ctx, particle) {
  const spikes = 4;
  const outerRadius = particle.size;
  const innerRadius = particle.size * 0.34;

  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation);
  ctx.globalAlpha = particle.opacity;
  ctx.shadowColor = "rgba(255,239,184,0.9)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = particle.color;
  ctx.beginPath();

  for (let i = 0; i < spikes * 2; i += 1) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI / spikes) * i - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawDiamond(ctx, particle) {
  const width = particle.size * 0.72;
  const height = particle.size * 1.55;

  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation);
  ctx.globalAlpha = particle.opacity;
  ctx.shadowColor = "rgba(137,80,255,0.85)";
  ctx.shadowBlur = 14;
  ctx.fillStyle = particle.color;
  ctx.beginPath();
  ctx.moveTo(0, -height);
  ctx.lineTo(width, 0);
  ctx.lineTo(0, height);
  ctx.lineTo(-width, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function DualityParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const particles = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.min(60, Math.max(28, Math.floor(width / 24)));
      while (particles.length < targetCount) particles.push(createParticle(width, height));
      while (particles.length > targetCount) particles.pop();
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.spin;
        particle.life -= 1;
        particle.opacity = Math.max(0.18, particle.opacity + Math.sin(particle.life * 0.04) * 0.003);

        const outOfBounds = particle.y < -40 || particle.y > height + 40 || particle.x < -40 || particle.x > width + 40;
        if (particle.life <= 0 || outOfBounds) {
          particles.splice(i, 1);
          const spawnY = particle.kind === "light" ? height + 24 : -24;
          particles.push(createParticle(width, height, Math.random() * width, spawnY));
          continue;
        }

        if (particle.kind === "light") drawStar(ctx, particle);
        else drawDiamond(ctx, particle);
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    resize();
    update();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="duality-particles" aria-hidden="true" />;
}
