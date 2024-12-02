import React, { useEffect, useState } from "react";
import s from "./style.module.scss";

const StackList: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const importAll = async () => {
      const imports = import.meta.glob<{ default: string }>(
        "../../assets/img/stacks/*.{png,jpg,jpeg,svg,webp}"
      );
      const imageImports: { [key: string]: string } = {};

      for (const path in imports) {
        const fileNameWithExtension = path.replace(
          "../../assets/img/stacks/",
          ""
        );
        const fileName = fileNameWithExtension.split(".")[0]; // Extract name before the dot
        const module = await imports[path]();
        imageImports[fileName] = module.default;
      }

      setImages(imageImports);
    };

    importAll();
  }, []);

  return (
    <div className={s.stacklist_container}>
      {Object.keys(images).map((key) => (
        <figure key={key} className={s.logo_container}>
          <div className={s.logo_background}>
            <img src={images[key]} alt={key} />
          </div>
          <figcaption>{key}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default StackList;
