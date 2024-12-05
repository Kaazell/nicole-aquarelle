import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/photos.json";

// Déclaration du type pour les objets du JSON
interface Photo {
  post_url: string;
  [key: string]: unknown;  // Pour d'autres éventuelles propriétés dans le JSON
}

const Gallery: React.FC = () => {
  return (
    <article className={s.style}>
      <h1>Galerie</h1>
      <p>"Explorez mes projets, reflet de mon savoir-faire."</p>
      <div className={s.image_container}>
        {json.map((photo: Photo) => (
          <img key={photo.post_url} src={photo.post_url} alt="Gallery" />
        ))}
      </div>
    </article>
  );
};

export default Gallery;
