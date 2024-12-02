import s from "./style.module.scss";

interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = (props) => {
  return <div className={s.tag}>{props.tag}</div>;
};

export default Tag;
