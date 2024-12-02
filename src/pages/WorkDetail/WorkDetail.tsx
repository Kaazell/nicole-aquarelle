import React from "react";
import s from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import json from "../../assets/json/projects.json";
import Tag from "../../components/Tag/Tag";
import Button from "../../components/Button/Button";
import { Carousel } from "../../components/Carousel/Carousel";
import WorkCards from "../../components/Card/Card";

const WorkDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentItem = json.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!currentItem) {
      navigate("/404");
    }
  }, [currentItem, navigate]);

  if (!currentItem) {
    return null;
  }

  return (
      <article className={s.container}>
        <div className={s.description}>
          <h1>
            {currentItem.title} - {currentItem.shortDescription}
          </h1>
          <p>{currentItem.longDescription}</p>
          <p>{currentItem.fullDescription}</p>
          <div className={s.tags_container}>
            {currentItem.tags.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </div>
          <div className={s.buttons_container}>
            {currentItem.websiteLink && (
              <Button
                destination={currentItem.websiteLink}
                buttonName="Site Web"
              />
            )}
            {currentItem.githubLink && (
              <Button
                destination={currentItem.githubLink}
                buttonName="Code Source"
              />
            )}
          </div>
        </div>

        <div className={s.gallery}>
          <h3 className={s.gallery__title}>&lt;Galerie /&gt;</h3>
          <Carousel />
        </div>

        <WorkCards />
      </article>
  );
};

export default WorkDetail;
