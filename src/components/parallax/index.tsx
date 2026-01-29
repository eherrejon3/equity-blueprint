import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Parallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-screen overflow-hidden w-full'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[5vw] uppercase mix-blend-difference'>Eloisa Klementich</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                <Image
                    src="/images/IA-Picture.jpg"
                    alt="Da Vinci Statue"
                    fill
                    style={{objectFit: "cover"}}
                />
                </motion.div>
            </div>
        </div>
    )
}