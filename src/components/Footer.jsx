import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://preview.redd.it/l0tnad45kfk31.jpg?auto=webp&s=bf5b08b638c95de3d27dd53e848550878f885b68"}
          alt="Founder"
        />

        <h2>Priyanshu Negi</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/npriyanshu" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;