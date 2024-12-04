import s from "./style.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__left}>
        <h2 className={s.footer__text}>Nicole Tremblay</h2>
        <p className={s.footer__text}>
          Copyright © <span id="current-year">2024</span>
        </p>
      </div>
      <div className={s.footer__left}>
        <p className={s.footer__text}>Nicole Tremblay</p>
        <p className={s.footer__text}>
          Copyright © <span id="current-year">2024</span>
        </p>
      </div>
    </footer>
    
  );
}