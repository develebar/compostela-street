import { Link, useParams } from "react-router-dom";
import { disciplines } from "../data/disciplines";

export default function DisciplinePage() {
  const { slug } = useParams();

  const discipline = slug ? disciplines[slug] : undefined;

  if (!discipline) {
    return (
      <main>
        <h1>Disciplina no encontrada</h1>
        <Link to="/programa">Volver al programa</Link>
      </main>
    );
  }

  return (
    <main>
      <header>
        <p>{discipline.category}</p>
        <h1>{discipline.title}</h1>
      </header>

      <img
        src={discipline.image}
        alt={discipline.title}
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "600px",
          objectFit: "cover",
        }}
      />

      <section>
        <p>{discipline.description}</p>
      </section>

      {discipline.links && discipline.links.length > 0 && (
        <section>
          <h2>Más información</h2>

          {discipline.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </section>
      )}

      <Link to="/programa">
        ← Volver al programa
      </Link>
    </main>
  );
}