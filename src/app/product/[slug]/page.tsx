import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const formatNumberBR = (value: number) =>
  new Intl.NumberFormat("pt-BR").format(value);

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full min-h-180 md:min-h-189 p-lg flex justify-center items-center">
      <section className="bg-white p-xl rounded-2xl flex flex-col md:flex-row w-full h-full max-w-4xl shadow-2xl gap-xl">
        <div className="relative md:w-1/2 overflow-hidden rounded-2xl shadow-2xl h-90 md:h-120">
          <Image
            src={product.src}
            alt={product.alt}
            fill
            className="object-cover hover:scale-120 transition-all duration-400"
          />
        </div>
        <article className="flex flex-col md:h-120 h-50 justify-center items-center md:w-1/2 gap-lg text-justify rounded-2xl">
          <h1 className="text-size-lg md:text-size-xl font-bold font-heading2 border-b-2 border-gray-300">
            {product.title}
          </h1>
          <p className="text-gray-600 font-text text-size-sm md:text-size-md">
            {product.description}
          </p>
          <div className="flex gap-md items-center">
            <span className="text-size-sm md:text-size-lg line-through text-red-800 font-text">
              ${formatNumberBR(product.discount)}
            </span>
            <span className="text-size-md md:text-size-xl font-bold text-shade-five font-text">
              ${formatNumberBR(product.price)}
            </span>
          </div>
          <button
            type="button"
            className="bg-shade-four text-shade-one font-text font-semibold py-2 px-6 rounded-2xl hover:scale-110 transition-all duration-200 cursor-pointer shadow-2xl"
          >
            Buy
          </button>
        </article>
      </section>
    </main>
  );
}
