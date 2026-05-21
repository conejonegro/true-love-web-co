import Image from "next/image";
import styles from "./Footer.module.css";

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.874L.057 23.448a.5.5 0 0 0 .611.611l5.652-1.48A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.536-5.197-1.463l-.373-.22-3.865 1.013 1.02-3.772-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.marca}>
          <a href="#hero" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="True Love Web Co"
              width={36}
              height={36}
              className={styles.logo}
            />
            <span className={styles.nombre}>True Love Web Co</span>
          </a>
          <p className={styles.tagline}>// desarrollo web con corazón</p>
        </div>

        <nav className={styles.nav} aria-label="Navegación footer">
          <p className={styles.colTitle}>Navegación</p>
          <a href="#hero">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#industrias">Industrias</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className={styles.contacto}>
          <p className={styles.colTitle}>Contacto</p>
          <a href="https://wa.me/523323431091" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            33 2343 1091
          </a>
          <a href="mailto:luisrosalesochoa@proton.me">
            <EmailIcon />
            luisrosalesochoa@proton.me
          </a>
          <a href="https://www.instagram.com/true.love.webdev/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            @true.love.webdev
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© {year} True Love Web Co. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
