"use client";
import Image from "next/image";
import { Card } from "@/components/card";
import { Timeline } from "@/components/timeline";
import Parallax from "@/components/parallax";
import { useEffect } from 'react';
import Lenis from 'lenis'
import Link from "next/link";
import { Store } from "lucide-react";

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []) 

  return (
    <main className="flex flex-col  justify-start items-center min-h-fit w-full">
      <Parallax />
      
      {/* <section className="bg-[url('/images/OIG1.webp')] w-full min-h-55 bg-cover bg-center flex justify-center items-center">
        <div className="backdrop-blur-3xl p-sm flex flex-col justify-center items-center gap-md rounded-2xl">
          <h1 className="font-semibold text-size-xl md:text-size-heading text-shade-five font-name ba">
            Leonardo da Vinci
          </h1>
          <p className="font-heading2 text-size-md md:text-size-xl text-text animate-pulse">
            Artist • Engineer • Anatomist • Futurist
          </p>
          <p className="font-text text-size-md md:text-size-xl text-text italic">
            “Learning never exhausts the mind.”
          </p>
        </div>
      </section> */}
      <section className="flex flex-col justify-center items-center gap-xl bg-shade-one shadow-2xl h-180 w-full md:flex-row p-sm">
        <Image
          src="/images/pexels-davinci-statue.webp"
          alt="Da Vinci Statue"
          width={250}
          height={220}
          className="rounded-2xl shadow-2xl"
          data-aos="zoom-in"
        />
        <div
          className="flex flex-col justify-center items-center gap-xl"
          data-aos="fade-up"
        >
          <p className="font-heading2 text-center text-text text-size-lg md:text-size-xxl max-w-130">
            I observe, I question, I design. Art is my language. Science is my
            method.
          </p>
          <Link
            href="/shop"
            className="font-text bg-shade-five text-shade-one p-md rounded-2xl shadow-2xl hover:scale-110 transition-all duration-200 flex gap-sm"
          >
            Shop <Store /> Creations & Merch
          </Link>
        </div>
      </section>
      <section className="p-xxl min-h-120 flex justify-center items-center">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl"
          data-aos="zoom-in"
        >
          <Card description="Where observation becomes beauty and light reveals the soul of nature.">
            Art & Painting
          </Card>
          <Card description="Machines born from curiosity, designed to extend human potential.">
            Engineering
          </Card>
          <Card description="The human body studied as the ultimate masterpiece of design.">
            Anatomy
          </Card>
          <Card description="Dreams of flight transformed into mechanisms ahead of their time.">
            Flight & Mechanics
          </Card>
          <Card description="Harmony, proportion, and geometry shaping spaces for human life.">
            Architecture
          </Card>
          <Card description="Ideas captured in ink, blending science, art, and imagination.">
            Codices & Studies
          </Card>
        </div>
      </section>
      <article className="bg-shade-one w-full flex flex-col justify-center items-center pt-xxl pb-xxl gap-xxl">
        <h2
          className="text-5xl font-name font-bold text-shade-five"
          data-aos="fade-up"
        >
          Timeline
        </h2>
        <div
          className="flex justify-center items-start gap-md"
          data-aos="fade-up"
        >
          <div className="w-2 h-1110 bg-text rounded-2xl md:h-610 lg:h-360"></div>
          <div className="grid grid-cols-1 gap-xxxl md:grid-cols-2 lg:grid-cols-3">
            <Timeline
              title="1482 — War Machines Concepts"
              description="Visionary sketches of military devices, revealing Leonardo’s ability to combine engineering, strategy, and mechanical innovation far ahead of his time."
              src="/images/war-machine-concepts.webp"
              alt="War Machine Concepts - Da Vinci"
            ></Timeline>
            <Timeline
              title="1490 - Vitruvian Man"
              description="A timeless study of human proportion, uniting art, mathematics, and philosophy to express the harmony between the human body and the universe."
              src="/images/vitruvian-man.webp"
              alt="Vitruvian Man - Da Vinci"
            ></Timeline>
            <Timeline
              title="1490 - 1500 - Mechanical Knight"
              description="An early concept of automation, designed to mimic human movement through gears and pulleys, anticipating the foundations of modern robotics."
              src="/images/robot-knight.webp"
              alt="Mechanical Knight - Da Vinci"
            ></Timeline>
            <Timeline
              title="1495 - The Last Supper"
              description="A revolutionary fresco that transformed religious art through psychological depth, perspective, and a masterful portrayal of human emotion."
              src="/images/last-supper.webp"
              alt="The Last Supper - Da Vinci"
            ></Timeline>
            <Timeline
              title="1499 - Salvator Mundi"
              description="A spiritual portrait combining delicate technique and symbolism, reflecting Leonardo’s pursuit of realism, mystery, and divine presence."
              src="/images/salvator-mundi.webp"
              alt="Salvator Mundi - Da Vinci"
            ></Timeline>
            <Timeline
              title="1500 - 1510 - Anatomical Codices"
              description="Detailed anatomical studies based on direct observation and dissection, advancing scientific understanding of the human body centuries ahead of their time."
              src="/images/anatomical-codices.webp"
              alt="Anatomical Study - Da Vinci"
            ></Timeline>
            <Timeline
              title="1502 - Canal Systems"
              description="Innovative hydraulic projects aimed at controlling water flow, improving navigation, and reshaping cities through engineering and environmental insight."
              src="/images/water-lifting-devices.webp"
              alt="Water Device - Da Vinci"
            ></Timeline>
            <Timeline
              title="1503 - Mona Lisa"
              description="An iconic portrait renowned for its subtle expression, atmospheric depth, and the enigmatic smile that continues to captivate the world."
              src="/images/mona-lisa.webp"
              alt="Mona Lisa - Da Vinci"
            ></Timeline>
            <Timeline
              title="1519 - Codices"
              description="Collections of notebooks where art, science, engineering, and philosophy converge, revealing Leonardo’s relentless curiosity and boundless imagination."
              src="/images/codices.webp"
              alt="Codices Page - Da Vinci"
            ></Timeline>
          </div>
        </div>
      </article>
    </main>
  );
}
