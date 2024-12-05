import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/photos.json"



const Gallery = () => {  
  return (
      <article className={s.style}>
        <h1>Galerie</h1>
        <p>"Explorez mes projets, reflet de mon savoir-faire."</p>
        <div className={s.image_container}>
          {json.map(photo => (<img src={photo.post_url} />))}
        </div>
      </article>
  );
};

export default Gallery;
