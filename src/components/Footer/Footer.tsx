import s from "./style.module.scss";

export function Footer() {
  return (
    <footer>
      <div className={s.footer}>
      <div className={s.footer__left}>
        <h2 className={s.footer__text}>Nicole Tremblay</h2>
        <p className={s.footer__text}>
          +1 514 555 5555
        </p>
      </div>
      <div className={s.footer__left}>
        <p className={s.reboot}>Reboot Web<span className={s.red}>_</span></p>
      </div>
      </div>
    </footer>
  );
}