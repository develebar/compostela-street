import "./Hero.css";
import portada from "../../assets/Portada-Compostela-Street.webp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" />

      <div className="hero__visual">
        <img
          src={portada}
        />
      </div>

      <div className="hero__info">
        <span>18—20 SEP</span>
        <span>SANTIAGO DE COMPOSTELA</span>
      </div>

      <div className="hero__scroll">
        <span>SCROLL</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}