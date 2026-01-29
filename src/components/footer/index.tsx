import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-shade-five flex justify-center items-center gap-sm p-md flex-col">
      <aside className="flex ">
        <a
          title="Github Link"
          href="https://github.com/RenanMattosGuerra"
          target="_blank"
          rel="noopener"
          className="p-2 hover:scale-110 transition-all duration-200 rounded-full"
        >
          <Github className="text-shade-two w-6 h-6"></Github>
        </a>
        <a
          title="Linkedin Link"
          href="https://www.linkedin.com/in/renan-mattos-guerra/"
          target="_blank"
          rel="noopener"
          className="p-2 hover:scale-110 transition-all duration-200 rounded-full"
        >
          <Linkedin className="text-shade-two w-6 h-6"></Linkedin>
        </a>
        <a
          title="Instagram Link"
          href="https://www.instagram.com/renanguerraguitar/"
          target="_blank"
          rel="noopener"
          className="p-2 hover:scale-110 transition-all duration-200 rounded-full"
        >
          <Instagram className="text-shade-two w-6 h-6"></Instagram>
        </a>
      </aside>
      <p className="text-shade-one font-text text-size-sm md:text-sm text-center">
        Copyright © 2026 - Created by Renan Guerra
      </p>
    </footer>
  );
}
