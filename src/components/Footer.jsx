import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-white/10 flex flex-col items-center justify-center text-center py-10">
      <div className="mb-2">
        <p className="pb-4 font-medium">More From Star Wars:</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram"
          >
            <Instagram className="w-8 h-8 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://x.com/starwars?mx=2"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter"
          >
            <Twitter className="w-8 h-8 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699#"
            target="_blank"
            rel="noopener noreferrer"
            alt="Facebook"
          >
            <Facebook className="w-8 h-8 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
            alt="Youtube"
          >
            <Youtube className="w-8 h-8 text-neutral-300 hover:text-white transition" />
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p className="p-4 tracking-tight">
          TM & © Lucasfilm Ltd. All Rights Reserved
        </p>
        <ul className="text-xs flex flex-col md:flex-row justify-center items-center gap-4">
          <li className="cursor pointer underline">
            <a href="#!">Terms of Use</a>
          </li>
          <li className="cursor pointer underline">
            <a href="#!">Additional Content Information</a>
          </li>
          <li className="cursor pointer underline">
            <a href="#!">Privacy Policy</a>
          </li>
          <li className="cursor pointer underline">
            <a href="#!">Star Wars Helpdesk</a>
          </li>
          <li className="cursor pointer underline">
            <a href="#!">Interest-Based Ads</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
