type CardProps = {
  children: string;
  description: string;
};

export function Card({ children, description }: CardProps) {
  return (
    <div className="p-lg m-md  bg-shade-three  rounded-4xl hover:scale-110 shadow-2xl transition-all duration-200 group relative hover:z-40 overflow-visible">
      <h2 className="font-bold font-heading2 text-center text-size-md">
        {children}
      </h2>
      <p
        className=" absolute left-1/2 -translate-x-1/2 bottom-4 w-100 bg-shade-four rounded-3xl font-text p-sm text-size-sm md:text-sm
        text-shade-one
        opacity-0 translate-y-20
        group-hover:opacity-100 group-hover:translate-y-15
        transition-all duration-300
        pointer-events-none z-40 italic max-w-60 md:max-w-80"
      >
        {description}
      </p>
    </div>
  );
}
