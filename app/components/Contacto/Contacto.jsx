import styles from "./Contacto.module.css";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.874L.057 23.448a.5.5 0 0 0 .611.611l5.652-1.48A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.536-5.197-1.463l-.373-.22-3.865 1.013 1.02-3.772-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// contacto</p>
          <h2 className={styles.title}>Contáctanos.</h2>
          <p className={styles.sub}>Sin formularios. Sin esperas.</p>
        </header>

        <div className={styles.canales}>
          <a
            href="https://wa.me/523323431091"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            <WhatsAppIcon />
            Escribir por WhatsApp
          </a>

          <div className={styles.secundarios}>
            <a
              href="mailto:luisrosalesochoa@proton.me"
              className={styles.canal}
            >
              <EmailIcon />
              luisrosalesochoa@proton.me
            </a>

            <a
              href="https://www.instagram.com/truelove_ds/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.canal}
            >
              <InstagramIcon />
              @truelove_ds
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
