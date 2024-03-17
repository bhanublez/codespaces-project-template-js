/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Path Visualizer Web App🎉",
    description:
      "S.Created a web-based Path Visualizer application. Hosted the project on Firebase for seamless accessibility. Collaborated with a team to ensure smooth functionality and user experience.",
    url: "https://algo-visualizer-4de38.web.app/",
  },
  {
    title: "Erp Application using Android Studio (Java)",
    description:
      "Developed an ERP application using Android Studio (Java) to manage the day-to-day activities of an educational institution. The application was designed to manage student records, attendance, and examination results.",
    url: "https://github.com/bhanublez?tab=repositories",
  },
  {
    title: "Home Page Algo Visualizer",
    description:
      "Developed a web-based application to visualize pathfinding and sorting algorithms. The application was designed to help students understand the functionality of algorithms and data structures.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Tic Tac Toe Game using Android Studio (Java)",
    description:
      "Developed a Tic Tac Toe game using Android Studio (Java) to provide a fun and interactive gaming experience. The game was designed to be user-friendly and easy to play.",
    url: "https://github.com/bhanublez/Tic_Tac",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
