import React from "react"
import "../components/index.css"
import Layout from "../components/layout"
import imagengym1 from "../images/jsgym.jpg"
import imagengym2 from "../images/jsgym2.png"
import imagengym3 from "../images/jsgym3.png"
import instathings1 from "../images/instathings.png"
import instathings2 from "../images/it2.png"
import instathings4 from "../images/it4.png"
import css1 from "../images/css1.png"
import css2 from "../images/css2.png"
import css3 from "../images/css3.png"
import huellitasvet1 from "../images/huellitasvet1.png"
import huellitasvet3 from "../images/huellitasvet3.png"
import huellitasvet4 from "../images/huellitasvet4.png"

const projects = () => {
  let projectsInfo = [
    {
      id: 1,
      imagen1: imagengym1,
      imagen2: imagengym2,
      imagen3: imagengym3,
      tools: "HTML5, CSS3, BootStrap, JavaScript",
      informacion: `On this website the user can sign up and reserve or cancel a gym class created by the administrator. The administrator can sanction clients, create users and multiple sports classes.
        `,
      demo: "https://phoenixgymapp.netlify.app/",
      github: "https://github.com/CamilaBernales/JS-Gym",
    },
    {
      id: 2,
      imagen1: instathings1,
      imagen2: instathings2,
      imagen3: instathings4,
      tools: " NextJS, Styled-Components, Firebase",
      informacion: `This website allows you to register as a user, upload a product for other users to see, vote for and leave a comment!.`,
      demo: "",
      github: "https://github.com/CamilaBernales/next-project",
    },
    {
      id: 3,
      imagen1: huellitasvet4,
      imagen2: huellitasvet3,
      imagen3: huellitasvet1,
      informacion: `Full-stack project. The logged user can buy a variety of products for their pet, take an appointment for the veterinary clinic, send a message, edit their profile, and recover their password. There is an administrator user who has all the information in table format, the admin user can create and edit a product, reply to users, create a new admin user, etc.`,
      tools: "MERN stack, mercado pago, nodemailer ",
      demo: "https://veterinariahuellitasmern.netlify.app/",
      github: "https://github.com/CamilaBernales/next-project",
    },
    {
      id: 4,
      imagen1: css1,
      imagen2: css2,
      imagen3: css3,
      tools: "CSS, Javascript, ReactJS (sometimes), API Rest (sometimes) ",
      informacion: `Sometimes I do things en CSS. You can find it on my Codepen.`,
      demo: "https://pokemongameboy.netlify.app/",
      codepen: "https://codepen.io/CamilaBernales",
    },
  ]
  return (
    <Layout>
      <div className="my-5 text-center">
        <h1>Some projects</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {projectsInfo.map(project => (
          <div key={project.id} className="col-sm-12 col-md-6">
            <div className="card my-3 m-0">
              <div className="card-body p-0">
                <div
                  id={`carouselExampleControls${project.id}`}
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 m-0 fluid"
                        src={project.imagen1}
                        alt=""
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        className="d-block w-100 m-0 fluid"
                        src={project.imagen2}
                        alt=""
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        className="d-block w-100 m-0 fluid"
                        src={project.imagen3}
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href={`#carouselExampleControls${project.id}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#carouselExampleControls${project.id}`}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <div className="row my-1 mt-2">{project.informacion}</div>
                <div className="row my-2">Tools: {project.tools}</div>
                {/* <div className="row d-flex justify-content-center align-items-center">
                  <div className="m-auto">
                    <button type="button" className="btn btn-warning ">
                      {project.id !== 4 ? (
                        <a
                          target="_blank"
                          className="text-white"
                          href={project.github}
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      ) : (
                        <a
                          target="_blank"
                          className="text-white"
                          href={project.codepen}
                          rel="noreferrer"
                        >
                          Codepen
                        </a>
                      )}
                    </button>
                  </div>
                  <div className="m-auto">
                    <button type="button" className="btn btn-success ">
                      <a
                        target="_blank"
                        className="text-white"
                        href={project.demo}
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default projects
