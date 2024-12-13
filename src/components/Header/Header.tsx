import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

export function Header() {
  const navigate = useNavigate();

  // Fonction de gestion des clics pour la navigation
  const handleLinkClick = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Fonction spécifique pour rediriger vers la galerie
  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  return (
    <header id="header">
      <div className={s.header}>
        <h1 className={s.title}>
          <a
            className={s.underline}
            href="/#home_section"
            onClick={() => handleLinkClick("home_section")}
          >
            Nicole Tremblay
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a
                className={s.underline}
                href="#home_section"
                onClick={() => handleLinkClick("home_section")}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                className={s.underline}
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault(); // Empêche le rechargement complet
                  handleGalleryClick();
                }}
              >
                Galerie
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
