import styles from "./Hero.module.css";
import ParticleCanvas from "../shared/ParticleCanvas";

const keywords = [
  "const",
  "return true",
  "async",
  "await",
  "function()",
  "export default",
  "import",
  "true",
  "null",
  "new",
  "this",
  "typeof",
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <ParticleCanvas />
      <div className={styles.keywords} aria-hidden="true">
        {keywords.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>// Guadalajara, México</p>

        <h1 className={styles.headline}>Desarrollo web</h1>

        <p className={styles.tagline}>
          <span className={styles.prefix}>con</span>
          <span className={styles.true}>true</span>
          <span className={styles.love}>love</span>
        </p>

        <p className={styles.sub}>
          Para todo tipo de negocios — sitios, tiendas, apps y más.
        </p>

        <div className={styles.ctas}>
          <a href="#contacto" className={styles.ctaPrimary}>
            Contactar
          </a>
          <a href="#servicios" className={styles.ctaSecondary}>
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
