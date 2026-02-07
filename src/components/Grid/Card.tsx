export type CardProps = {
  title: string;
  image: string;
};

export default function Card({ title, image }: CardProps) {
  return (
    <div className="group w-100 h-50 bg-black relative overflow-hidden rounded-2xl shrink-0 cursor-pointer">
      <img
        src={image}
        alt=""
        className="block w-full h-full object-cover rounded-2xl transform-gpu scale-[1.01]"
      />

      <div
        className="
          absolute inset-0 rounded-2xl
          translate-y-full opacity-0
          transition-all duration-500 ease-out
          will-change-transform
          group-hover:translate-y-0 group-hover:opacity-100
          bg-linear-to-t from-black/80 via-black/40 to-transparent
          flex items-center justify-center
          p-4
        "
      >
        <h1
          className="text-4xl md:text-5xl font-semibold text-center
         bg-linear-to-br from-rose-600 via-fuchsia-500 to-pink-200
         bg-clip-text text-transparent drop-shadow-sm"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
