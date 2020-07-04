import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const AboutMe = () => {

    const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "about_me" } }) {
        nodes {
          titulo
          contenido
          slug
        }
      }
    }
  `)
  const { titulo, contenido } = info.allDatoCmsPagina.nodes[0]


    return (
        <div>
            <p>{titulo}</p>
            <p>{contenido}</p>
        </div>
    )
}

export default AboutMe
