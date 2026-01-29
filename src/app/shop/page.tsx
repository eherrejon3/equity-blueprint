"use client";

import { Products } from "@/components/products";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export default function Shop() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold p-lg font-heading2 text-3xl text-shade-five w-full flex justify-center items-center bg-shade-three">
        Store
      </h1>
      <section className="w-full m-lg gap-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {products
          .filter((p) => !p.slug.includes("merch"))
          .map((product) => (
            <Products key={product.slug} {...product} />
          ))}
      </section>
      <h1 className="font-bold p-lg font-heading2 text-3xl text-shade-five">
        Merchandising
      </h1>
      <section ref={emblaRef} className="overflow-hidden p-lg w-full lg:w-5xl">
        <div className="flex max-w-5xl m-auto">
          {products
            .filter((p) => p.slug.includes("merch"))
            .map((product) => (
              <div key={product.slug} className="pl-lg flex-[0_0_auto]">
                <Products {...product} />
              </div>
            ))}
        </div>
        <div className="relative bottom-50 flex justify-between items-center m-auto max-w-5xl pointer-events-none">
          <button
            type="button"
            title="scrollPrev"
            className="embla__prev cursor-pointer p-sm leading-none bg-shade-one border-2 border-shade-five rounded-full shadow-2xl relative right-4 hover:bg-shade-two transition-all duration-200 pointer-events-auto"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>
          <button
            type="button"
            title="scrollNext"
            className="embla__next cursor-pointer p-sm leading-none bg-shade-one border-2 border-shade-five rounded-full shadow-2xl relative left-4 hover:bg-shade-two transition-all duration-200 pointer-events-auto"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-text" />
          </button>
        </div>
      </section>
    </main>
  );
}
