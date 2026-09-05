import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" />

      <div className="hero__visual">
        <img
          src="https://i0.wp.com/compostelastreet.gal/wp-content/uploads/2025/01/Portada-Compostela-Street.png?w=2000&ssl=1"
          alt="Compostela Street"
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