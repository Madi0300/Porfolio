import style from "./Footer.module.scss";
import { useReveal } from "../useReveal";

export default function Footer() {
  const { ref, showed } = useReveal<HTMLElement>();

  return (
    <footer
      ref={ref}
      className={`${style.Footer} ${showed ? style.Footer_showed : ""}`}
    >
      <div className={style.Footer__container}>
        <p className={style.Footer__text}>© {new Date().getFullYear()} Madi Aitbay.</p>
        <p className={style.Footer__subtext}>Built with React, SCSS Modules & AI Precision.</p>
      </div>
    </footer>
  );
}
