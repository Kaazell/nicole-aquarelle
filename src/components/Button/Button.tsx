import s from "./style.module.scss";
import React from "react";

interface ButtonProps {
  buttonName: string;
  destination: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName, destination }) => {
  const isExternalLink = buttonName === "Site Web" || buttonName === "Code Source";

  return (
    <a
      href={destination}
      className={s.button}
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    >
      {buttonName}
    </a>
  );
};

export default Button;
