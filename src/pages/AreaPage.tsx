import { Link, useParams } from "react-router-dom";
import { areas } from "../data/areas";

export default function AreaPage() {
  const { slug } = useParams();

  const area = slug
    ? Object.values(areas).find((item) => item.slug === slug)
    : undefined;

  if (!area) {
    return (
      <main>
        <h1>Área no encontrada</h1>
        <Link to="/programa">Volver al programa</Link>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h1>{area.title}</h1>
      </header>

      <img
        src={area.image}
        alt={area.title}
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "600px",
          objectFit: "cover",
        }}
      />

      {area.description && (
        <section>
          <p>{area.description}</p>
        </section>
      )}

      <Link to="/programa">
        ← Volver al programa
      </Link>
    </main>
  );
}