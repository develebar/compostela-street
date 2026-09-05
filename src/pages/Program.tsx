import { Link } from "react-router-dom";
import { program } from "../data/program";

const days = ["viernes", "sábado", "domingo"] as const;

export default function Program() {
  return (
    <main>
      <h1>Programa</h1>

      {days.map((day) => {
        const events = program.filter((event) => event.day === day);

        return (
          <section key={day}>
            <h2>{day}</h2>

            {events.map((event) => {
              const href =
                event.type === "discipline"
                  ? `/disciplinas/${event.slug}`
                  : `/areas/${event.slug}`;

              return (
                <article key={event.id}>
                  <span>
                    {event.startTime} — {event.endTime}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <Link to={href}>
                    Ver más →
                  </Link>
                </article>
              );
            })}
          </section>
        );
      })}
    </main>
  );
}