import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      Image: IMG1,
      title: "This is a portfolio item",
      github: "",
      dribble: "",
    },
    {
      id: 2,
      Image: IMG2,
      title: "This is a portfolio item",
      github: "",
      dribble: "",
    },
    {
      id: 3,
      Image: IMG3,
      title: "This is a portfolio item",
      github: "",
      dribble: "",
    },
    {
      id: 4,
      Image: IMG4,
      title: "This is a portfolio item",
      github: "",
      dribble: "",
    },
    {
      id: 5,
      Image: IMG5,
      title: "This is a portfolio item",
      github: "",
      dribble: "",
    },
    {
      id: 6,
      Image: IMG6,
      title: "This is a portfolio item",
      github: "https://github.com/sundayonah/dappuniswap",
      dribble: "https://www.dreamstime.com/photos-images/nature.html",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Projects.map((project, id) => (
          <div key={id}>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.Image} alt="IMAGE 1" />
              </div>
              <h3>
                This is a Portfolio item Titlis a Portfolio item Titlis a
                Portfolio item Title
              </h3>
              <div className="portfolio__item-cta">
                <a href={project.github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={project.dribble}
                  className="btn btn-primary"
                  target="_blank"
                >
                  live Demo
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
