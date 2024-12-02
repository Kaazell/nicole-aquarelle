import s from "./style.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <h2 className={s.footer__text}>Atef Lachhab</h2>
      <p className={s.footer__text}>
        Copyright © <span id="current-year">2024</span>
      </p>
    </footer>
  );
}