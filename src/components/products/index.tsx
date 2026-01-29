import Image from "next/image";
import Link from "next/link";

type productsProps = {
  title: string;
  price: number;
  discount: number;
  description: string;
  src: string;
  alt: string;
  slug: string;
};

const formatNumberBR = (value: number) =>
  new Intl.NumberFormat("pt-BR").format(value);

export function Products({
  slug,
  title,
  price,
  discount,
  description,
  src,
  alt,
}: productsProps) {
  return (
    <Link href={`/product/${slug}`} className="block m-auto">
      <div className="flex flex-col justify-center items-center p-lg gap-1 font-text bg-white hover:bg-gray-200 transition-all duration-200 min-h-105 w-75">
        <div className="w-44 h-54 relative m-sm">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-2xl border-2 border-shade-five object-cover"
          />
        </div>

        <h3 className="font-semibold text-lg text-text">{title}</h3>

        <span className="line-through text-red-800 text-sm slashed-zero tabular-nums">
          ${formatNumberBR(discount)}
        </span>

        <h2 className="text-lg text-shade-five font-semibold slashed-zero tabular-nums">
          ${formatNumberBR(price)}
        </h2>

        <p className="text-sm text-gray-700 text-center">{description}</p>
      </div>
    </Link>
  );
}
