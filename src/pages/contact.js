import React from "react"
import Layout from "../components/layout"
const contact = () => (
  <Layout>
    <div className="my-5 text-center">
      <h1>You can find me here</h1>
    </div>
    <div className="row d-flex justify-content-center align-items-center">
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/camila-bernales-6779821aa/"
          target="_blank"
          className="text-secondary"
          rel="noreferrer"
        >
          Camila Bernales
        </a>
      </p>
    </div>
    <div className="row d-flex justify-content-center align-items-center">
      <p>
        Github:{" "}
        <a
          className="text-secondary"
          href="https://github.com/CamilaBernales"
          target="_blank"
          rel="noreferrer"
        >
          @CamilaBernales
        </a>
      </p>
    </div>
    <div className="row d-flex justify-content-center align-items-center">
      <p>
        Codepen:{" "}
        <a
          className="text-secondary"
          href="https://codepen.io/CamilaBernales"
          target="_blank"
          rel="noreferrer"
        >
          @CamilaBernales
        </a>
      </p>
    </div>
  </Layout>
)

export default contact
