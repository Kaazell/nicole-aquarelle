import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
  return (
    <main>
      <section className={s.landing} id="home_section">
        <div className={s.landing__center}>
        <h1 className={s.landing__title}>Nicole Tremblay</h1>
        <p className={s.landing__introduction}>Bienvenue dans mon univers</p>
        </div>
        <Button buttonName="Contactez-moi" destination="#contact_form" />
      </section>
    </main>
  );
};

export default Home;
