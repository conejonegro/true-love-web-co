import styles from "./Servicios.module.css";

const servicios = [
  {
    id: "desarrollo-web",
    titulo: "Desarrollo Web",
    descripcion:
      "Sitios y aplicaciones web a medida. Desde un sitio institucional hasta una plataforma compleja — construimos lo que tu negocio necesita.",
    destacado: true,
  },
  {
    id: "landing-pages",
    titulo: "Landing Pages",
    descripcion:
      "Páginas de aterrizaje diseñadas para convertir. Rápidas, enfocadas y optimizadas para tus campañas.",
    destacado: false,
  },
  {
    id: "ecommerce",
    titulo: "E-commerce",
    descripcion:
      "Tiendas en línea listas para vender desde el día uno. Catálogo, carrito, pagos y todo lo que necesitas.",
    destacado: false,
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento",
    descripcion:
      "Tu sitio siempre actualizado, seguro y funcionando. Soporte continuo para que no tengas que preocuparte.",
    destacado: false,
  },
  {
    id: "dashboards",
    titulo: "Dashboards para Negocios",
    descripcion:
      "Paneles a medida para gestionar tu operación: usuarios, inventario, entradas y salidas, reportes y métricas — todo en un solo lugar.",
    destacado: false,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className={styles.servicios}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// servicios</p>
          <h2 className={styles.title}>Lo que construimos</h2>
        </header>

        <div className={styles.grid}>
          {servicios.map((servicio) => (
            <article
              key={servicio.id}
              className={`${styles.card} ${servicio.destacado ? styles.featured : ""}`}
            >
              {servicio.destacado && (
                <span className={styles.badge}>// destacado</span>
              )}
              <h3 className={styles.cardTitle}>{servicio.titulo}</h3>
              <p className={styles.cardDesc}>{servicio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
