import { ICardProps } from "./interface";

const Card = (props: ICardProps) => {
  const { title } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-white">
      <div className="card-body">
        <h2 className="card-title text-black capitalize">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
