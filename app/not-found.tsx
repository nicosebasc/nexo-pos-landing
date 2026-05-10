import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientAnimations from "@/components/ClientAnimations";
import BackButton from "@/components/BackButton";
import s from "./not-found.module.css";

export const metadata = {
  title: "404 · Página no encontrada",
};

export default function NotFound() {
  return (
    <>
      <Nav />

      <main className={s.main}>
        <div className={s.dots} aria-hidden="true" />

        <div className={s.wrap}>
          {/* Left — copy */}
          <section className={s.copy}>
            <div className={s.crumb}>
              <i className="bi bi-exclamation-circle-fill" /> Error 404
            </div>

            <div className={s.num} aria-label="404">
              4<span className={s.zero} />4
            </div>

            <h1 className={s.title}>
              Esta caja <em>no existe</em>…<br />y a Helen le da pena.
            </h1>

            <p className={s.lede}>
              Revisamos el ticket dos veces y no encontramos la página que estás
              buscando. Puede que el enlace haya cambiado o que haya un dígito
              de más en la URL.
            </p>

            <div className={s.actions}>
              <Link href="/" className={`${s.btn} ${s.btnPrimary}`}>
                <i className="bi bi-house-door-fill" /> Volver al inicio
              </Link>
              <BackButton className={`${s.btn} ${s.btnGhost}`} />
            </div>

            <div className={s.suggestLabel}>¿Qué estabas buscando?</div>
            <nav className={s.suggest}>
              <a href="/#beneficios">
                <div className={s.ic}><i className="bi bi-stars" /></div>
                <div>Beneficios<small>¿Qué incluye el POS?</small></div>
              </a>
              <a href="/#como-funciona">
                <div className={s.ic}><i className="bi bi-play-circle" /></div>
                <div>Cómo funciona<small>En 3 simples pasos</small></div>
              </a>
              <a href="/#precios">
                <div className={s.ic}><i className="bi bi-tag" /></div>
                <div>Precios<small>Planes y tarifas</small></div>
              </a>
              <a href="/#faq">
                <div className={s.ic}><i className="bi bi-question-circle" /></div>
                <div>Preguntas frecuentes<small>Resolvemos tus dudas</small></div>
              </a>
            </nav>
          </section>

          {/* Right — Helen corpóreo (free, no clipped container) */}
          <section className={s.visual} aria-hidden="true">
            <div className={`${s.float} ${s.f1}`}>
              <i className="bi bi-receipt" />
              <div>Boleta<br /><b>#000404</b></div>
            </div>
            <div className={`${s.float} ${s.f3}`}>
              <i className="bi bi-search" /> Buscando…
            </div>
            <div className={`${s.float} ${s.f2}`}>
              <i className="bi bi-cup-hot" />
              <div>Tómate un<br /><b>respiro</b></div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/corporeo/helen-404.svg"
              alt=""
              width={520}
              height={520}
              className={s.helen}
            />
          </section>
        </div>

        <div className={s.wave} aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f4f5fb" />
          </svg>
        </div>
      </main>

      <Footer />
      <ClientAnimations />
    </>
  );
}
