import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/projects.json"
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";

const WorkCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.cards_container}>
      {json.map((project, index) => (
        <div
          key={`${project.id}-${project.title}-${index}`}
          className={s.card}
          onClick={() => {
            navigate("/work/" + project.id);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={project.images[0].url}
            alt={project.title}
            className={s.card__img}
          />
          <div className={s.card__details}>
            <h4 className={s.card__title}>
              {project.title} - {project.shortDescription}
            </h4>
            <p className={`${s.desktop} ${s.card__description}`}>{project.longDescription}</p>
            <div className={`${s.tag_container} ${s.desktop}`}>
              {project.tags.map((item) => (
                <Tag key={item} tag={item} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;