import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import { program } from "../data/program";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Navigation />

      <Hero />

      {/* INTRO */}
      <section className="home-intro">
        <div className="home-intro__label">
          <span>01</span>
          <span>EL FESTIVAL</span>
        </div>

        <div className="home-intro__content">
          <h2>
            La calle
            <br />
            <span>es el escenario.</span>
          </h2>

          <p>
            Compostela Street reúne deporte, arte urbano, música y cultura
            callejera durante tres días en Santiago de Compostela.
          </p>

          <Link to="/programa" className="home-intro__link">
            Explorar programa
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="home-program">
        <div className="home-program__header">
          <div className="home-program__label">
            <span>02</span>
            <span>EL PROGRAMA</span>
          </div>

          <Link to="/programa" className="home-program__all">
            Ver todo ↗
          </Link>
        </div>

        <div className="home-program__title">
          PROGRAMA
        </div>

        <div className="home-program__events">
          {program.slice(0, 8).map((event, index) => {
            const href =
              event.type === "discipline"
                ? `/disciplinas/${event.slug}`
                : event.type === "area"
                  ? `/areas/${event.slug}`
                  : `/${event.slug}`;

            return (
              <Link
                to={href}
                className="program-preview"
                key={event.id}
              >
                <div className="program-preview__number">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="program-preview__time">
                  <span>{event.day}</span>
                  <strong>
                    {event.startTime}
                  </strong>
                </div>

                <div className="program-preview__main">
                  <h3>{event.title}</h3>

                  <span>
                    {event.type === "discipline"
                      ? "DISCIPLINA"
                      : event.type === "area"
                        ? "ÁREA"
                        : "EVENTO"}
                  </span>
                </div>

                <div className="program-preview__arrow">
                  ↗
                </div>

                <img
                  src={event.image}
                  alt=""
                  className="program-preview__image"
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}