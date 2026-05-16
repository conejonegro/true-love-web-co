import styles from "./Stack.module.css";
import ParticleCanvas from "../shared/ParticleCanvas";

const stack = [
  {
    id: "nextjs",
    nombre: "Next.js",
    descripcion:
      "Aplicaciones web de alto rendimiento con SEO optimizado desde el día uno. El stack preferido del equipo para proyectos ambiciosos.",
  },
  {
    id: "wordpress",
    nombre: "WordPress",
    descripcion:
      "Sitios web amigables y autogestionados — el cliente edita su propio contenido sin tocar código. También ofrecemos gestión completa por cuenta del equipo.",
  },
  {
    id: "woocommerce",
    nombre: "WooCommerce",
    descripcion:
      "E-commerce sobre WordPress. Catálogo, carrito, pasarela de pagos y todo lo que una tienda en línea necesita para vender.",
  },
  {
    id: "react",
    nombre: "React",
    descripcion:
      "Interfaces modernas, rápidas e interactivas. Para proyectos que necesitan más dinamismo que un sitio estático.",
  },
  {
    id: "firebase",
    nombre: "Firebase",
    descripcion:
      "Backend en la nube: autenticación de usuarios, base de datos en tiempo real y soporte para e-commerce y apps con login.",
  },
];

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <ParticleCanvas />
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// stack</p>
          <h2 className={styles.title}>Con qué lo construimos</h2>
        </header>

        <ul className={styles.lista}>
          {stack.map((item, i) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.numero}>0{i + 1}</span>
              <span className={styles.nombre}>{item.nombre}</span>
              <p className={styles.desc}>{item.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
