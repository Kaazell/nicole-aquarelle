import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import nicole from "../../assets/img/nicole-tremblay.png"
import display from "../../assets/img/display.jpg"

const Home: React.FC = () => {
  return (
    <main>
      <section className={s.landing} id="home_section">
        <div className={s.landing__center}>
          <h1 className={s.landing__title}>Nicole Tremblay</h1>
          <p className={s.landing__introduction}>Bienvenue dans l'univers onirique de l'aquarelle.</p>
        <Button buttonName="Decouvrir la galerie" destination="/gallery" />
        </div>
      </section>
      <section className={s.artist}>
        <div className={s.artist__photo}>
          <img src={nicole} alt="Photo de l'artiste" />
        </div>
        <div className={s.artist__bio}>
          <h2>À propos de l'artiste</h2>
          <p>L'artiste explore l'aquarelle avec une passion profonde, utilisant la fluidité de l'eau pour créer des œuvres vibrantes. Chaque peinture reflète son amour pour les nuances subtiles et les jeux de lumière. À travers ses pinceaux, elle transmet des émotions, invitant à une immersion poétique dans des paysages fascinants.</p>
        </div>
      </section>
      <section className={s.display}>
        <img src={display} alt="display" />
      </section>
    </main>
  );
};

export default Home;
