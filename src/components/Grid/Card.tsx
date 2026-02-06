export type CardProps = {
  title: string;
  image: string;
};

export default function Card({ title, image }: CardProps) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hover_card">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
