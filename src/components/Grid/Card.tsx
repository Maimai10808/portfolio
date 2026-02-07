export type CardProps = {
  title: string;
  image: string;
};

export default function Card({ title, image }: CardProps) {
  return (
    <div className="group w-100 h-50 bg-black relative overflow-hidden rounded-2xl">
      <img src={image} alt="" className="w-full h-full object-cover" />

      <div
        className="
          absolute inset-0
          translate-y-full opacity-0
          transition-all duration-500 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
          bg-linear-to-t from-black/80 via-black/40 to-transparent
          flex items-center justify-center
          p-4
        "
      >
        <h1
          className="text-4xl md:text-5xl font-semibold text-center
            bg-linear-to-br from-rose-600 via-fuchsia-500 to-pink-200
            bg-clip-text text-transparent
            drop-shadow-sm
        "
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
