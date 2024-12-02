import React from "react";
import s from "./style.module.scss";

const Form: React.FC = () => {
  return (
    <div className={s.form}>
      <h2>Me contacter</h2>
      <ul>
        <li>
          Par mail :{" "}
          <a className={s.underline} href="mailto:atef.lachhab1@gmail.com">
            atef.lachhab1@gmail.com
          </a>
        </li>
        <li>
          Par téléphone & WhatsApp :
          <ul>
            <li>
              France:{" "}
              <a className={s.underline} href="tel:+33754325053">+33 7 54 32 50 53</a>
            </li>
            <li>
              Canada:{" "}
              <a className={s.underline} href="tel:+15793687160">+1 579 368 7160</a>
            </li>
          </ul>
        </li>
        <li>
          Sur LinkedIn :{" "}
          <a className={s.underline} href="https://www.linkedin.com/in/atef-lachhab" target="_blank" rel="noopener noreferrer">
            Atef Lachhab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Form;