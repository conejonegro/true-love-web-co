import { Building2, GraduationCap, UtensilsCrossed, Scale, Hotel, HardHat, Dumbbell } from "lucide-react";
import styles from "./Industrias.module.css";

const industrias = [
  {
    id: "inmobiliarias",
    titulo: "Inmobiliarias",
    descripcion: "Catálogos de propiedades, formularios de contacto y páginas de desarrollos que convierten visitas en clientes.",
    Icono: Building2,
  },
  {
    id: "escuelas",
    titulo: "Escuelas y Centros Educativos",
    descripcion: "Landings institucionales, inscripciones en línea y portales informativos para colegios, universidades y academias.",
    Icono: GraduationCap,
  },
  {
    id: "restaurantes",
    titulo: "Restaurantes y Gastronomía",
    descripcion: "Menús digitales, reservaciones en línea y presencia que atrae comensales desde Google.",
    Icono: UtensilsCrossed,
  },
  {
    id: "legal",
    titulo: "Despachos Legales",
    descripcion: "Sitios profesionales para abogados y notarías que posicionan su especialidad y captan clientes.",
    Icono: Scale,
  },
  {
    id: "turismo",
    titulo: "Hoteles y Turismo",
    descripcion: "Webs con booking, galerías y SEO local para hospedajes y agencias de viaje.",
    Icono: Hotel,
  },
  {
    id: "construccion",
    titulo: "Constructoras y Arquitectos",
    descripcion: "Portafolios de proyectos y páginas que comunican experiencia y generan cotizaciones.",
    Icono: HardHat,
  },
  {
    id: "gimnasios",
    titulo: "Gimnasios y Bienestar",
    descripcion: "Membresías, horarios, clases y captación de leads para studios y gym boutique.",
    Icono: Dumbbell,
  },
];

export default function Industrias() {
  return (
    <section id="industrias" className={styles.industrias}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// industrias</p>
          <h2 className={styles.title}>Industrias en las que trabajamos</h2>
        </header>

        <div className={styles.grid}>
          {industrias.map(({ id, titulo, descripcion, Icono }) => (
            <article key={id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icono size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{titulo}</h3>
              <p className={styles.cardDesc}>{descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
