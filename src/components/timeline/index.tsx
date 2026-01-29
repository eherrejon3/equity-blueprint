import Image from "next/image";

type TimelineProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function Timeline({ title, description, src, alt }: TimelineProps) {
  return (
    <div className="flex flex-col gap-sm max-w-72 min-w-36">
      <h3 className="font-heading2 font-bold text-lg">{title}</h3>
      <p className="font-text text-text text-justify text-sm lg:text-balance">
        {description}
      </p>

      <div className="relative aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-3xl border-2 border-shade-five shadow-2xl"
        ></Image>
      </div>
    </div>
  );
}
